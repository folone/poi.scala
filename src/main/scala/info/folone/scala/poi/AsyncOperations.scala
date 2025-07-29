package info.folone.scala.poi

import java.io.{ByteArrayOutputStream, InputStream, OutputStream}
import java.util.concurrent.{CompletableFuture, ForkJoinPool}
import java.util.function.{Consumer => JConsumer, Function => JFunction}
import scala.concurrent.{ExecutionContext, Future, Promise}
import scala.util.{Failure, Success, Try}
import scalaz._
import scalaz.effect.IO

/**
 * Asynchronous operations for poi.scala
 * Provides non-blocking Excel file operations with reactive stream support
 */
object AsyncOperations {

  // Default execution context for async operations
  implicit val defaultExecutionContext: ExecutionContext = ExecutionContext.global

  /**
   * Asynchronous workbook creation
   */
  def createWorkbookAsync(
    sheets: Set[Sheet],
    format: WorkbookVersion = XSSF
  )(implicit ec: ExecutionContext): Future[Workbook] =
    Future(Workbook(sheets, format))(ec)

  /**
   * Asynchronous workbook creation with bulk data
   */
  def createWorkbookWithBulkDataAsync(
    sheetName: String,
    data: Seq[Seq[Any]],
    format: WorkbookVersion = XSSF
  )(implicit ec: ExecutionContext): Future[Workbook] =
    Future {
      val wb = Workbook(Set.empty[Sheet], format)
      wb.addSheetWithBulkData(sheetName, data)
    }(ec)

  /**
   * Asynchronous file save operation
   */
  def saveWorkbookAsync(
    workbook: Workbook,
    path: String
  )(implicit ec: ExecutionContext): Future[Unit] =
    Future {
      workbook.safeToFile(path).fold(ex => throw ex, identity _).unsafePerformIO()
    }(ec)

  /**
   * Asynchronous file load operation
   */
  def loadWorkbookAsync(
    path: String
  )(implicit ec: ExecutionContext): Future[Workbook] =
    Future(impure.load(path))(ec)

  /**
   * Asynchronous stream processing for large datasets
   */
  def processDataStreamAsync[T](
    data: Stream[T],
    transform: T => Seq[Any],
    sheetName: String,
    batchSize: Int = 1000
  )(implicit ec: ExecutionContext): Future[Workbook] =
    Future {
      val batches = data.grouped(batchSize).map(_.map(transform))
      var workbook = Workbook(Set.empty[Sheet], XSSF)

      batches.zipWithIndex.foreach { case (batch, index) =>
        if (index == 0) {
          workbook = workbook.addSheetWithBulkData(sheetName, batch)
        } else {
          val startRow = index * batchSize
          val bulkData = batch.zipWithIndex.map { case (rowData, rowIndex) =>
            val cellData = rowData.zipWithIndex.map { case (cellValue, colIndex) =>
              (colIndex, cellValue.toString)
            }
            (startRow + rowIndex, cellData)
          }
          workbook = workbook.addRowsInBulk(sheetName, bulkData)
        }
      }

      workbook
    }(ec)

  /**
   * Progressive workbook building with callback support
   */
  class ProgressiveWorkbookBuilder(
    initialSheets: Set[Sheet] = Set.empty,
    format: WorkbookVersion = XSSF
  )(implicit ec: ExecutionContext) {

    private var currentWorkbook = Workbook(initialSheets, format)
    private val progressCallbacks = collection.mutable.ListBuffer[Double => Unit]()

    def addProgressCallback(callback: Double => Unit): ProgressiveWorkbookBuilder = {
      progressCallbacks += callback
      this
    }

    private def notifyProgress(progress: Double): Unit =
      progressCallbacks.foreach(_(progress))

    def addSheetAsync(sheet: Sheet): Future[ProgressiveWorkbookBuilder] =
      Future {
        // Merge workbooks using Scalaz Monoid
        import scalaz.syntax.monoid._
        currentWorkbook = currentWorkbook |+| Workbook(Set(sheet), format)
        notifyProgress(0.5) // Simple progress indicator
        this
      }(ec)

    def addBulkDataAsync(
      sheetName: String,
      data: Seq[Seq[Any]],
      progressInterval: Int = 100
    ): Future[ProgressiveWorkbookBuilder] =
      Future {
        val totalRows = data.size
        var processedRows = 0

        // Process in chunks to allow progress reporting
        val chunks = data.grouped(progressInterval)
        chunks.foreach { chunk =>
          if (processedRows == 0) {
            currentWorkbook = currentWorkbook.addSheetWithBulkData(sheetName, chunk)
          } else {
            val bulkData = chunk.zipWithIndex.map { case (rowData, index) =>
              val cellData = rowData.zipWithIndex.map { case (cellValue, colIndex) =>
                (colIndex, cellValue.toString)
              }
              (processedRows + index, cellData)
            }
            currentWorkbook = currentWorkbook.addRowsInBulk(sheetName, bulkData)
          }

          processedRows += chunk.size
          val progress = processedRows.toDouble / totalRows
          notifyProgress(progress)
        }

        this
      }(ec)

    def buildAsync(): Future[Workbook] =
      Future {
        notifyProgress(1.0)
        currentWorkbook
      }(ec)

  }

  /**
   * Reactive stream support for backpressure handling
   */
  object ReactiveStreams {

    /**
     * Data source that can handle backpressure
     */
    trait DataSource[T] {
      def hasNext: Boolean
      def next(): T
      def size: Option[Long]
    }

    /**
     * Simple in-memory data source
     */
    case class MemoryDataSource[T](data: Seq[T]) extends DataSource[T] {
      private var index = 0

      def hasNext: Boolean = index < data.size

      def next(): T = {
        val item = data(index)
        index += 1
        item
      }

      def size: Option[Long] = Some(data.size.toLong)
    }

    /**
     * Stream processor with backpressure support
     */
    class BackpressureProcessor[T](
      source: DataSource[T],
      transform: T => Seq[Any],
      maxBufferSize: Int = 1000
    )(implicit ec: ExecutionContext) {

      private val buffer = collection.mutable.Queue[Seq[Any]]()
      private var isProcessing = false

      def processWithBackpressure(
        sheetName: String,
        onProgress: Double => Unit = _ => (),
        onComplete: Workbook => Unit = _ => (),
        onError: Throwable => Unit = _ => ()
      ): Unit = {

        if (isProcessing) return
        isProcessing = true

        Future {
          try {
            var workbook = Workbook(Set.empty[Sheet], XSSF)
            var processedCount = 0L
            val totalCount = source.size.getOrElse(0L)
            var isFirstBatch = true

            while (source.hasNext && buffer.size < maxBufferSize) {
              val item = source.next()
              val transformedRow = transform(item)
              buffer.enqueue(transformedRow)

              // Process buffer when it's full or no more data
              if (buffer.size >= maxBufferSize || !source.hasNext) {
                val batchData = buffer.dequeueAll(_ => true).toSeq

                if (isFirstBatch) {
                  workbook = workbook.addSheetWithBulkData(sheetName, batchData)
                  isFirstBatch = false
                } else {
                  val bulkData = batchData.zipWithIndex.map { case (rowData, index) =>
                    val cellData = rowData.zipWithIndex.map { case (cellValue, colIndex) =>
                      (colIndex, cellValue.toString)
                    }
                    (processedCount.toInt + index, cellData)
                  }
                  workbook = workbook.addRowsInBulk(sheetName, bulkData)
                }

                processedCount += batchData.size
                if (totalCount > 0) {
                  onProgress(processedCount.toDouble / totalCount)
                }
              }
            }

            isProcessing = false
            onComplete(workbook)

          } catch {
            case ex: Throwable =>
              isProcessing = false
              onError(ex)
          }
        }(ec)
      }

    }

  }

  /**
   * CompletableFuture support for Java interop
   */
  object JavaInterop {

    def createWorkbookAsyncJava(
      sheets: java.util.Set[Sheet],
      format: WorkbookVersion
    ): CompletableFuture[Workbook] = {
      import scala.collection.JavaConverters._
      val scalaSheets = sheets.asScala.toSet

      CompletableFuture.supplyAsync(() => Workbook(scalaSheets, format))
    }

    def saveWorkbookAsyncJava(
      workbook: Workbook,
      path: String
    ): CompletableFuture[Void] =
      CompletableFuture.runAsync(() => workbook.safeToFile(path).fold(ex => throw ex, identity _).unsafePerformIO())

    def processDataWithCallbackJava[T](
      data: java.util.List[T],
      transformer: JFunction[T, java.util.List[Any]],
      sheetName: String,
      progressCallback: JConsumer[java.lang.Double]
    ): CompletableFuture[Workbook] = {
      import scala.collection.JavaConverters._

      CompletableFuture.supplyAsync { () =>
        val scalaData = data.asScala.toSeq
        val totalRows = scalaData.size
        var processedRows = 0

        val transformedData = scalaData.map { item =>
          val result = transformer.apply(item).asScala.toSeq
          processedRows += 1
          progressCallback.accept(processedRows.toDouble / totalRows)
          result
        }

        Workbook(Set.empty[Sheet], XSSF)
          .addSheetWithBulkData(sheetName, transformedData)
      }
    }

  }

}

/**
 * IO-based operations using Scalaz IO for pure functional async
 */
object IOOperations {

  /**
   * Create workbook using Scalaz IO
   */
  def createWorkbookIO(
    sheets: Set[Sheet],
    format: WorkbookVersion = XSSF
  ): IO[Workbook] =
    IO(Workbook(sheets, format))

  /**
   * Save workbook using Scalaz IO
   */
  def saveWorkbookIO(workbook: Workbook, path: String): IO[Unit] =
    IO {
      workbook.safeToFile(path).fold(ex => throw ex, identity _).unsafePerformIO()
    }

  /**
   * Load workbook using Scalaz IO
   */
  def loadWorkbookIO(path: String): IO[Workbook] =
    IO(impure.load(path))

  /**
   * Process data stream with IO
   */
  def processDataStreamIO[T](
    data: Stream[T],
    transform: T => Seq[Any],
    sheetName: String
  ): IO[Workbook] =
    IO {
      val transformedData = data.map(transform)
      Workbook(Set.empty[Sheet], XSSF)
        .addSheetWithBulkData(sheetName, transformedData)
    }

  /**
   * Parallel processing with IO
   */
  def processMultipleSheetsIO(
    sheetData: Map[String, Seq[Seq[Any]]],
    format: WorkbookVersion = XSSF
  ): IO[Workbook] =
    IO {
      val workbooks = sheetData.map { case (sheetName, data) =>
        Workbook(Set.empty[Sheet], format).addSheetWithBulkData(sheetName, data)
      }

      import scalaz.syntax.monoid._
      workbooks.foldLeft(Workbook(Set.empty[Sheet], format))(_ |+| _)
    }

}
