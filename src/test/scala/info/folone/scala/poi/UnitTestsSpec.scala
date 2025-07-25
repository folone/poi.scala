package info.folone.scala.poi

import org.specs2.mutable._
import scala.util.Random

class UnitTestsSpec extends Specification {

  "Row equality behavior" should {
    "handle cell order independence" in {
      val cells = for {
        x <- 1 to 2
        y <- 1 to 2
      } yield NumericCell(x, y)

      val row1 = Row(0)(cells.toSet[Cell])
      val row2 = Row(0)(Random.shuffle(cells).toSet[Cell])

      row1 must beEqualTo(row2)
    }

    "respect row index differences" in {
      val cells: Set[Cell] = Set(StringCell(0, "test"))
      val row1 = Row(0)(cells)
      val row2 = Row(1)(cells)

      row1 must not(beEqualTo(row2))
    }

    "handle empty rows" in {
      val emptyRow1 = Row(0)(Set.empty[Cell])
      val emptyRow2 = Row(0)(Set.empty[Cell])
      val emptyRowDifferentIndex = Row(1)(Set.empty[Cell])

      emptyRow1 must beEqualTo(emptyRow2)
      emptyRow1 must not(beEqualTo(emptyRowDifferentIndex))
    }
  }

  "Cell ordering" should {
    "order cells by index" in {
      import scalaz.syntax.order._
      val cell1: Cell = StringCell(0, "A")
      val cell2: Cell = StringCell(1, "B")
      val cell3: Cell = StringCell(2, "C")

      val cells = List(cell3, cell1, cell2)
      val sorted = cells.sortWith((a, b) => a.index < b.index)

      sorted must beEqualTo(List(cell1, cell2, cell3))
    }

    "handle same index with different types" in {
      val stringCell: Cell = StringCell(0, "A")
      val numericCell: Cell = NumericCell(0, 42.0)

      // Both have same index, ordering should be consistent
      val ordered1 = List(stringCell, numericCell).sortWith((a, b) =>
        a.index < b.index || (a.index == b.index && a.getClass.getSimpleName < b.getClass.getSimpleName)
      )
      val ordered2 = List(numericCell, stringCell).sortWith((a, b) =>
        a.index < b.index || (a.index == b.index && a.getClass.getSimpleName < b.getClass.getSimpleName)
      )

      ordered1 must beEqualTo(ordered2)
    }
  }

  "Sheet operations" should {
    "create sheet with empty rows" in {
      val sheet = Sheet("EmptySheet")(Set.empty[Row])

      sheet.name must beEqualTo("EmptySheet")
      sheet.rows must beEmpty
    }

    "handle duplicate row indices" in {
      val row1 = Row(0)(Set(StringCell(0, "A")))
      val row2 = Row(0)(Set(StringCell(1, "B"))) // Same index, different cells

      val sheet = Sheet("TestSheet")(Set(row1, row2))

      // Set should contain both rows as they are different objects
      sheet.rows must haveSize(2)
    }

    "maintain row collection integrity" in {
      val rows = Set(
        Row(0)(Set(StringCell(0, "A"))),
        Row(1)(Set(StringCell(0, "B"))),
        Row(2)(Set(StringCell(0, "C")))
      )

      val sheet = Sheet("TestSheet")(rows)

      sheet.rows must beEqualTo(rows)
      sheet.rows.size must beEqualTo(3)
    }
  }

  "Workbook operations" should {
    "handle empty workbook" in {
      val wb = Workbook(Set.empty[Sheet])

      wb.sheets must beEmpty
    }

    "maintain sheet collection" in {
      val sheets = Set(
        Sheet("Sheet1")(Set.empty[Row]),
        Sheet("Sheet2")(Set.empty[Row]),
        Sheet("Sheet3")(Set.empty[Row])
      )

      val wb = Workbook(sheets)

      wb.sheets must beEqualTo(sheets)
      wb.sheets.size must beEqualTo(3)
    }

    "handle single sheet" in {
      val sheet = Sheet("OnlySheet")(Set(Row(0)(Set(StringCell(0, "data")))))
      val wb = Workbook(Set(sheet))

      wb.sheets must haveSize(1)
      wb.sheets.head must beEqualTo(sheet)
    }
  }

  "Cell type behavior" should {
    "maintain type safety" in {
      val stringCell = StringCell(0, "text")
      val numericCell = NumericCell(1, 42.0)
      val booleanCell = BooleanCell(2, true)

      stringCell.index must beEqualTo(0)
      numericCell.index must beEqualTo(1)
      booleanCell.index must beEqualTo(2)

      stringCell must beAnInstanceOf[StringCell]
      numericCell must beAnInstanceOf[NumericCell]
      booleanCell must beAnInstanceOf[BooleanCell]
    }

    "support pattern matching" in {
      val cell: Cell = StringCell(0, "test")

      val result = cell match {
        case StringCell(index, data) => s"String at $index: $data"
        case NumericCell(index, data) => s"Number at $index: $data"
        case _ => "Other"
      }

      result must beEqualTo("String at 0: test")
    }
  }

  "Formula cells" should {
    "handle formula syntax" in {
      val formula1 = FormulaCell(0, "SUM(A1:A10)")
      val formula2 = FormulaCell(1, "=AVERAGE(B1:B5)")
      val formula3 = FormulaCell(2, "==MAX(C1:C3)") // Multiple equals

      formula1.data must beEqualTo("SUM(A1:A10)")
      formula2.data must beEqualTo("AVERAGE(B1:B5)") // Leading = stripped
      formula3.data must beEqualTo("MAX(C1:C3)") // All leading = stripped
    }

    "support complex formulas" in {
      val complexFormula = FormulaCell(0, "IF(A1>0,SUM(B1:B10),0)")
      complexFormula.data must beEqualTo("IF(A1>0,SUM(B1:B10),0)")
    }
  }
}
