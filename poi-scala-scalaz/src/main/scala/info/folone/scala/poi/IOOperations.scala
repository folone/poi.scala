package info.folone.scala.poi

import scalaz.effect.IO

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
      workbook.toFile(path)
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

      workbooks.reduce((wb1, wb2) => wb1.copy(sheetMap = wb1.sheetMap ++ wb2.sheetMap))
    }

}
