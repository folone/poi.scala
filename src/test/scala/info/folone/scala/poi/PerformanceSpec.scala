package info.folone.scala.poi

import java.util.Date
import org.specs2.mutable._

class PerformanceSpec extends Specification {

  "Performance improvements" should {

    "create SXSSF workbook with custom configuration" in {
      val config = SXSSF(
        rowAccessWindowSize = Some(50),
        compressTmpFiles = true,
        useSharedStringsTable = false
      )

      val rows = (0 until 10).map { i =>
        Row(i)(
          Set(
            StringCell(0, s"Row $i"),
            NumericCell(1, i.toDouble),
            BooleanCell(2, i % 2 == 0)
          )
        )
      }.toSet

      val sheet = Sheet("TestSheet")(rows)
      val wb = Workbook.streaming(Set(sheet), config)

      wb.sheets must haveSize(1)
    }

    "create workbook optimized for large datasets" in {
      val largeData = (0 until 100).map { i =>
        Seq(s"Data $i", i.toDouble, new Date(), i % 2 == 0)
      }

      val wb = Workbook.forLargeDataset(Set.empty, rowAccessWindow = 100)
      val result = wb.addSheetWithBulkData("LargeSheet", largeData)

      result.sheets must haveSize(1)
      success
    }

    "perform bulk operations efficiently" in {
      val bulkRowData = (0 until 10).map { rowIndex =>
        val cellData = (0 until 5).map { colIndex =>
          (colIndex, s"Cell $rowIndex-$colIndex")
        }
        (rowIndex, cellData)
      }

      val initialSheet = Sheet("BulkTest")(Set.empty)
      val wb = Workbook(Set(initialSheet))
      val result = wb.addRowsInBulk("BulkTest", bulkRowData)

      result.sheetMap("BulkTest").rows must haveSize(10)
    }

    "create cells in bulk efficiently" in {
      val cellData = Seq(
        (0, "String Cell"),
        (1, 123.45),
        (2, true),
        (3, new Date())
      )

      val cells = BulkOperations.createCellsInBulk(0, cellData)
      cells must haveSize(4)

      val stringCell = cells.find(_.index == 0)
      stringCell must beSome
      stringCell.get must beAnInstanceOf[StringCell]

      val numericCell = cells.find(_.index == 1)
      numericCell must beSome
      numericCell.get must beAnInstanceOf[NumericCell]
    }

    "apply styling in bulk" in {
      val addresses = Seq(
        CellAddr("Sheet1", 0, 0),
        CellAddr("Sheet1", 0, 1),
        CellAddr("Sheet1", 1, 0)
      )

      val style = CellStyle()
      val styleMap = BulkOperations.applyStylingInBulk(addresses, style)

      styleMap must haveSize(1)
      styleMap(style) must haveSize(3)
    }
  }
}
