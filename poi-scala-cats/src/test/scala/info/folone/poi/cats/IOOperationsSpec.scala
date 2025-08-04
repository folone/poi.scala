package info.folone.poi.cats

import cats.effect.unsafe.implicits.global
import info.folone.poi._
import java.io.File
import org.specs2.mutable._

class IOOperationsSpec extends Specification {
  sequential

  "IOOperations" should {

    "create workbook using Cats IO" in {
      val sheets = Set(
        Sheet("IOTest")(
          Set(
            Row(0)(Set(StringCell(0, "IO Test Data")))
          )
        )
      )

      val ioOperation = IOOperations.createWorkbookIO(sheets, XSSF)
      val workbook = ioOperation.unsafeRunSync()

      workbook.sheets.size mustEqual 1
      workbook.sheets.head.name mustEqual "IOTest"
    }

    "save and load workbook using Cats IO" in {
      val originalWorkbook = Workbook(
        Set(
          Sheet("IOSaveLoad")(
            Set(
              Row(0)(Set(StringCell(0, "IO Save/Load Test")))
            )
          )
        ),
        XSSF
      )

      val tempFile = File.createTempFile("io-test", ".xlsx")
      tempFile.deleteOnExit()

      val saveAndLoadIO = for {
        _ <- IOOperations.saveWorkbookIO(originalWorkbook, tempFile.getAbsolutePath)
        loadedWorkbook <- IOOperations.loadWorkbookIO(tempFile.getAbsolutePath)
      } yield loadedWorkbook

      val loadedWorkbook = saveAndLoadIO.unsafeRunSync()

      loadedWorkbook.sheets.size mustEqual 1
      loadedWorkbook.sheets.head.name mustEqual "IOSaveLoad"
    }

    "process data stream using Cats IO" in {
      val data = Stream.range(1, 11).map(i => TestRecord(s"IOItem$i", i * 5, i % 2 == 0))

      def transform(record: TestRecord): Seq[Any] =
        Seq(record.name, record.value, record.isActive)

      val ioOperation = IOOperations.processDataStreamIO(data, transform, "IOStream")
      val workbook = ioOperation.unsafeRunSync()

      workbook.sheets.size mustEqual 1
      workbook.sheets.head.rows.size mustEqual 10
    }

    "process multiple sheets using Cats IO" in {
      val sheetData = Map(
        "Sheet1" -> Seq(Seq("A1", "B1"), Seq("A2", "B2")),
        "Sheet2" -> Seq(Seq("X1", "Y1"), Seq("X2", "Y2")),
        "Sheet3" -> Seq(Seq("P1", "Q1"), Seq("P2", "Q2"))
      )

      val ioOperation = IOOperations.processMultipleSheetsIO(sheetData, XSSF)
      val workbook = ioOperation.unsafeRunSync()

      workbook.sheets.size mustEqual 3
      workbook.sheets.map(_.name) must contain(allOf("Sheet1", "Sheet2", "Sheet3"))
    }
  }

  // Helper case class for tests
  case class TestRecord(name: String, value: Int, isActive: Boolean)
}
