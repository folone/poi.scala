package info.folone.scala.poi

import java.io.{ByteArrayOutputStream, File}
import java.util.{concurrent => juc}
import java.util.concurrent.{CompletableFuture, ForkJoinPool}
import org.specs2.mutable._
import scala.collection.JavaConverters._
import scala.concurrent.{Await, ExecutionContext, Future}
import scala.concurrent.duration._
import scala.util.{Failure, Success, Try}

class AsyncOperationsSpec extends Specification {
  sequential

  implicit val ec: ExecutionContext = ExecutionContext.global

  "AsyncOperations" should {

    "create workbook asynchronously" in {
      val sheets = Set(
        Sheet("TestSheet")(
          Set(
            Row(0)(Set(StringCell(0, "Test Data")))
          )
        )
      )

      val futureWorkbook = AsyncOperations.createWorkbookAsync(sheets, XSSF)
      val workbook = Await.result(futureWorkbook, 5.seconds)

      workbook.sheets.size mustEqual 1
      workbook.sheets.head.name mustEqual "TestSheet"
    }

    "create workbook with bulk data asynchronously" in {
      val data = Seq(
        Seq("Name", "Age", "City"),
        Seq("Alice", 30, "New York"),
        Seq("Bob", 25, "London"),
        Seq("Charlie", 35, "Tokyo")
      )

      val futureWorkbook = AsyncOperations.createWorkbookWithBulkDataAsync(
        "People",
        data,
        XSSF
      )
      val workbook = Await.result(futureWorkbook, 5.seconds)

      workbook.sheets.size mustEqual 1
      val sheet = workbook.sheets.head
      sheet.name mustEqual "People"
      sheet.rows.size mustEqual 4
    }

    "save workbook asynchronously" in {
      val workbook = Workbook(
        Set(
          Sheet("TestSheet")(
            Set(
              Row(0)(Set(StringCell(0, "Async Save Test")))
            )
          )
        ),
        XSSF
      )

      val tempFile = File.createTempFile("async-test", ".xlsx")
      tempFile.deleteOnExit()

      val saveFuture = AsyncOperations.saveWorkbookAsync(workbook, tempFile.getAbsolutePath)
      Await.result(saveFuture, 10.seconds)

      tempFile.exists() mustEqual true
      tempFile.length() must be_>(0L)
    }

    "load workbook asynchronously" in {
      // First create and save a workbook
      val originalWorkbook = Workbook(
        Set(
          Sheet("LoadTest")(
            Set(
              Row(0)(Set(StringCell(0, "Load Test Data")))
            )
          )
        ),
        XSSF
      )

      val tempFile = File.createTempFile("async-load-test", ".xlsx")
      tempFile.deleteOnExit()

      // Save it synchronously for the test
      originalWorkbook.toFile(tempFile.getAbsolutePath)

      // Now load it asynchronously
      val loadFuture = AsyncOperations.loadWorkbookAsync(tempFile.getAbsolutePath)
      val loadedWorkbook = Await.result(loadFuture, 10.seconds)

      loadedWorkbook.sheets.size mustEqual 1
      loadedWorkbook.sheets.head.name mustEqual "LoadTest"
    }

    "process data stream asynchronously" in {
      val data = Stream.range(1, 101).map(i => TestRecord(s"Item$i", i * 10, i % 2 == 0))

      def transform(record: TestRecord): Seq[Any] =
        Seq(record.name, record.value, record.isActive)

      val futureWorkbook = AsyncOperations.processDataStreamAsync(
        data,
        transform,
        "StreamData",
        batchSize = 25
      )
      val workbook = Await.result(futureWorkbook, 10.seconds)

      workbook.sheets.size mustEqual 1
      val sheet = workbook.sheets.head
      sheet.name mustEqual "StreamData"
      sheet.rows.size mustEqual 100
    }

    "build workbook progressively with callbacks" in {
      val builder = new AsyncOperations.ProgressiveWorkbookBuilder(
        Set.empty[Sheet],
        XSSF
      )

      var progressUpdates = List.empty[Double]
      builder.addProgressCallback(progress => progressUpdates = progress :: progressUpdates)

      val testSheet = Sheet("Progressive")(
        Set(
          Row(0)(Set(StringCell(0, "Progressive Test")))
        )
      )

      val data = Seq(
        Seq("Header1", "Header2", "Header3"),
        Seq("Data1", "Data2", "Data3")
      )

      val buildProcess = for {
        step1 <- builder.addSheetAsync(testSheet)
        step2 <- step1.addBulkDataAsync("BulkData", data, progressInterval = 1)
        finalWorkbook <- step2.buildAsync()
      } yield finalWorkbook

      val workbook = Await.result(buildProcess, 10.seconds)

      workbook.sheets.size mustEqual 2
      progressUpdates.nonEmpty mustEqual true
      progressUpdates.exists(_ == 1.0) mustEqual true
    }
  }

  "ReactiveStreams" should {

    "handle backpressure with memory data source" in {
      val sourceData = (1 to 1000).map(i => TestRecord(s"Record$i", i, i % 3 == 0))
      val dataSource = AsyncOperations.ReactiveStreams.MemoryDataSource(sourceData)

      def transform(record: TestRecord): Seq[Any] =
        Seq(record.name, record.value, record.isActive)

      val processor = new AsyncOperations.ReactiveStreams.BackpressureProcessor(
        dataSource,
        transform,
        maxBufferSize = 100
      )

      var finalWorkbook: Option[Workbook] = None
      var progressUpdates = List.empty[Double]
      var errorOccurred: Option[Throwable] = None

      processor.processWithBackpressure(
        "BackpressureTest",
        onProgress = progress => progressUpdates = progress :: progressUpdates,
        onComplete = workbook => finalWorkbook = Some(workbook),
        onError = ex => errorOccurred = Some(ex)
      )

      // Wait for processing to complete
      var attempts = 0
      while (finalWorkbook.isEmpty && errorOccurred.isEmpty && attempts < 50) {
        Thread.sleep(100)
        attempts += 1
      }

      errorOccurred mustEqual None
      finalWorkbook must beSome
      finalWorkbook.get.sheets.size mustEqual 1
      finalWorkbook.get.sheets.head.rows.size mustEqual 1000
      progressUpdates.nonEmpty mustEqual true
    }
  }

  "JavaInterop" should {

    "create workbook with Java CompletableFuture" in {
      val javaSheets = Set(
        Sheet("JavaTest")(
          Set(
            Row(0)(Set(StringCell(0, "Java Interop Test")))
          )
        )
      ).asJava

      val javaFuture = AsyncOperations.JavaInterop.createWorkbookAsyncJava(javaSheets, XSSF)
      val workbook = javaFuture.get(5, juc.TimeUnit.SECONDS)

      workbook.sheets.size mustEqual 1
      workbook.sheets.head.name mustEqual "JavaTest"
    }

    "save workbook with Java CompletableFuture" in {
      val workbook = Workbook(
        Set(
          Sheet("JavaSaveTest")(
            Set(
              Row(0)(Set(StringCell(0, "Java Save Test")))
            )
          )
        ),
        XSSF
      )

      val tempFile = File.createTempFile("java-async-test", ".xlsx")
      tempFile.deleteOnExit()

      val javaFuture = AsyncOperations.JavaInterop.saveWorkbookAsyncJava(
        workbook,
        tempFile.getAbsolutePath
      )
      javaFuture.get(10, juc.TimeUnit.SECONDS)

      tempFile.exists() mustEqual true
      tempFile.length() must be_>(0L)
    }

    "process data with Java callback" in {
      val javaData = List(
        TestRecord("Java1", 100, true),
        TestRecord("Java2", 200, false),
        TestRecord("Java3", 300, true)
      ).asJava

      val transformer = new java.util.function.Function[TestRecord, java.util.List[Any]] {
        def apply(record: TestRecord): java.util.List[Any] =
          List(record.name, record.value, record.isActive).asInstanceOf[List[Any]].asJava
      }

      var progressUpdates = List.empty[Double]
      val progressCallback = new java.util.function.Consumer[java.lang.Double] {
        def accept(progress: java.lang.Double): Unit =
          progressUpdates = progress.doubleValue() :: progressUpdates
      }

      val javaFuture = AsyncOperations.JavaInterop.processDataWithCallbackJava(
        javaData,
        transformer,
        "JavaCallback",
        progressCallback
      )
      val workbook = javaFuture.get(5, juc.TimeUnit.SECONDS)

      workbook.sheets.size mustEqual 1
      workbook.sheets.head.rows.size mustEqual 3
      progressUpdates.nonEmpty mustEqual true
      progressUpdates.max mustEqual 1.0
    }
  }

  // Helper case class for tests
  case class TestRecord(name: String, value: Int, isActive: Boolean)
}
