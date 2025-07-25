package info.folone.scala.poi

import scalaz._, Scalaz._
import org.specs2.mutable._

class MonoidLawsSpec extends Specification {

  "Workbook Monoid laws" should {
    "satisfy associativity" in {
      val wb1 = Workbook(Set(Sheet("Sheet1")(Set(Row(0)(Set(StringCell(0, "A")))))))
      val wb2 = Workbook(Set(Sheet("Sheet2")(Set(Row(0)(Set(StringCell(0, "B")))))))
      val wb3 = Workbook(Set(Sheet("Sheet3")(Set(Row(0)(Set(StringCell(0, "C")))))))

      val wbInstance = implicitly[Monoid[Workbook]]

      // (wb1 |+| wb2) |+| wb3 === wb1 |+| (wb2 |+| wb3)
      val left = wbInstance.append(wbInstance.append(wb1, wb2), wb3)
      val right = wbInstance.append(wb1, wbInstance.append(wb2, wb3))

      left must beEqualTo(right)
    }

    "satisfy left identity" in {
      val wb1 = Workbook(Set(Sheet("Sheet1")(Set(Row(0)(Set(StringCell(0, "A")))))))
      val wbInstance = implicitly[Monoid[Workbook]]

      wbInstance.append(wb1, wbInstance.zero) must beEqualTo(wb1)
    }

    "satisfy right identity" in {
      val wb1 = Workbook(Set(Sheet("Sheet1")(Set(Row(0)(Set(StringCell(0, "A")))))))
      val wbInstance = implicitly[Monoid[Workbook]]

      wbInstance.append(wbInstance.zero, wb1) must beEqualTo(wb1)
    }

    "merge sheets with different names" in {
      val sheet1 = Sheet("Sheet1")(Set(Row(0)(Set(StringCell(0, "A")))))
      val sheet2 = Sheet("Sheet2")(Set(Row(0)(Set(StringCell(0, "B")))))

      val wb1 = Workbook(Set(sheet1))
      val wb2 = Workbook(Set(sheet2))
      val wbInstance = implicitly[Monoid[Workbook]]

      val combined = wbInstance.append(wb1, wb2)

      combined.sheets must contain(exactly(sheet1, sheet2))
    }

    "merge sheets with same names using semigroup" in {
      val sheet1 = Sheet("SameName")(Set(Row(0)(Set(StringCell(0, "A")))))
      val sheet2 = Sheet("SameName")(Set(Row(1)(Set(StringCell(0, "B")))))

      val wb1 = Workbook(Set(sheet1))
      val wb2 = Workbook(Set(sheet2))
      val wbInstance = implicitly[Monoid[Workbook]]

      val combined = wbInstance.append(wb1, wb2)

      // Should have one sheet with merged rows
      combined.sheets must haveSize(1)
      val mergedSheet = combined.sheets.head
      mergedSheet.name must beEqualTo("SameName")
      mergedSheet.rows must haveSize(2)
    }
  }

  "Row Semigroup laws" should {
    "merge rows with different indices" in {
      val row1 = Row(0)(Set(StringCell(0, "A")))
      val row2 = Row(1)(Set(StringCell(0, "B")))
      val rowInstance = implicitly[Semigroup[Row]]

      val combined = rowInstance.append(row1, row2)

      // Should prefer second row
      combined must beEqualTo(row2)
    }

    "merge rows with same index, combining cells" in {
      val row1 = Row(0)(Set(StringCell(0, "A")))
      val row2 = Row(0)(Set(StringCell(1, "B")))
      val rowInstance = implicitly[Semigroup[Row]]

      val combined = rowInstance.append(row1, row2)

      combined.index must beEqualTo(0)
      combined.cells must contain(exactly(StringCell(0, "A"): Cell, StringCell(1, "B"): Cell))
    }

    "handle overlapping cells by preferring second row's cells" in {
      val row1 = Row(0)(Set(StringCell(0, "A")))
      val row2 = Row(0)(Set(StringCell(0, "B"))) // Same index, overlapping cell
      val rowInstance = implicitly[Semigroup[Row]]

      val combined = rowInstance.append(row1, row2)

      combined.index must beEqualTo(0)
      combined.cells must contain(exactly(StringCell(0, "B"): Cell))
    }
  }

  "Sheet Semigroup laws" should {
    "merge sheets with different row indices" in {
      val sheet1 = Sheet("TestSheet")(Set(Row(0)(Set(StringCell(0, "A")))))
      val sheet2 = Sheet("TestSheet")(Set(Row(1)(Set(StringCell(0, "B")))))
      val sheetInstance = implicitly[Semigroup[Sheet]]

      val combined = sheetInstance.append(sheet1, sheet2)

      combined.name must beEqualTo("TestSheet")
      combined.rows must haveSize(2)
    }

    "merge sheets with overlapping rows" in {
      val sheet1 = Sheet("TestSheet")(Set(Row(0)(Set(StringCell(0, "A")))))
      val sheet2 = Sheet("TestSheet")(Set(Row(0)(Set(StringCell(1, "B")))))
      val sheetInstance = implicitly[Semigroup[Sheet]]

      val combined = sheetInstance.append(sheet1, sheet2)

      combined.name must beEqualTo("TestSheet")
      combined.rows must haveSize(1)
      val mergedRow = combined.rows.head
      mergedRow.cells must contain(exactly(StringCell(0, "A"): Cell, StringCell(1, "B"): Cell))
    }
  }

  "Cell Semigroup laws" should {
    "prefer second cell when combining" in {
      val cell1 = StringCell(0, "First")
      val cell2 = StringCell(0, "Second")
      val cellInstance = implicitly[Semigroup[Cell]]

      val combined = cellInstance.append(cell1, cell2)

      combined must beEqualTo(cell2) // Second cell wins
    }

    "work with different cell types" in {
      val stringCell = StringCell(0, "Text")
      val numericCell = NumericCell(0, 42.0)
      val cellInstance = implicitly[Semigroup[Cell]]

      val combined = cellInstance.append(stringCell, numericCell)

      combined must beEqualTo(numericCell) // Second cell wins
    }
  }
}
