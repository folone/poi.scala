package info.folone.poi

import org.specs2.mutable._
import org.specs2.specification.Scope

class RowSpec extends Specification {

  "Row construction" should {
    "create row with apply method" in {
      val cells: Set[Cell] = Set(StringCell(0, "A"), NumericCell(1, 1.0))
      val row = Row(0)(cells)

      row.index must beEqualTo(0)
      row.cells must beEqualTo(cells)
    }

    "create empty row" in {
      val row = Row(5)(Set.empty[Cell])

      row.index must beEqualTo(5)
      row.cells must beEmpty
    }

    "unapply correctly" in {
      val cells: Set[Cell] = Set(StringCell(0, "test"))
      val row = Row(2)(cells)

      Row.unapply(row) must beSome((2, cells))
    }
  }

  "Row equality" should {
    "be equal for same index and cells" in {
      val cells1: Set[Cell] = Set(StringCell(0, "A"), NumericCell(1, 1.0))
      val cells2: Set[Cell] = Set(NumericCell(1, 1.0), StringCell(0, "A")) // Different order
      val row1 = Row(0)(cells1)
      val row2 = Row(0)(cells2)

      row1 must beEqualTo(row2)
    }

    "not be equal for different index" in {
      val cells: Set[Cell] = Set(StringCell(0, "A"))
      val row1 = Row(0)(cells)
      val row2 = Row(1)(cells)

      row1 must not(beEqualTo(row2))
    }

    "not be equal for different cells" in {
      val cell1 = StringCell(0, "A")
      val cell2 = StringCell(1, "B") // Different index AND content
      val row1 = Row(0)(Set[Cell](cell1))
      val row2 = Row(0)(Set[Cell](cell2))

      // Debug: check that cells are different
      cell1 must not(beEqualTo(cell2))
      row1 must not(beEqualTo(row2))
    }

    "have consistent hashCode" in {
      val cells: Set[Cell] = Set(StringCell(0, "A"), NumericCell(1, 1.0))
      val row1 = Row(0)(cells)
      val row2 = Row(0)(cells)

      row1.hashCode must beEqualTo(row2.hashCode)
    }
  }

  "Row toString" should {
    "work for all row configurations" in {
      val emptyRow = Row(0)(Set.empty)
      val filledRow = Row(1)(Set(StringCell(0, "test"), NumericCell(1, 42.0)))

      emptyRow.toString.nonEmpty must beTrue
      filledRow.toString.nonEmpty must beTrue
    }
  }

  "Row with various cell types" should {
    "handle all supported cell types" in {
      val cells: Set[Cell] = Set(
        StringCell(0, "Text"),
        NumericCell(1, 123.45),
        BooleanCell(2, true),
        DateCell(3, new java.util.Date()),
        FormulaCell(4, "SUM(A1:A3)"),
        BlankCell(5),
        ErrorCell(6, 0x2a.toByte)
      )

      val row = Row(0)(cells)
      row.cells must haveSize(7)
      row.cells must containAllOf(cells.toSeq)
    }
  }

  "Row operations" should {
    "maintain immutability" in {
      val originalCells: Set[Cell] = Set(StringCell(0, "original"))
      val row = Row(0)(originalCells)
      val newCells: Set[Cell] = Set(StringCell(0, "modified"))

      // Creating a new row doesn't modify the original
      val newRow = Row(0)(newCells)
      row.cells must beEqualTo(originalCells)
      newRow.cells must beEqualTo(newCells)
    }
  }

  "Row styles method" should {
    "return empty map for row with unstyled cells" in {
      val cells: Set[Cell] = Set(StringCell(0, "A"), NumericCell(1, 42.0))
      val row = Row(0)(cells)

      row.styles("Sheet1") must beEmpty
    }

    "return style map for row with styled cells" in new RowScope {
      val styledCell1 = StyledCell(StringCell(0, "Header"), Some(headerStyle))
      val styledCell2 = StyledCell(NumericCell(1, 100), Some(dataStyle))
      val unstyledCell = StringCell(2, "plain")

      val row = Row(1)(Set[Cell](styledCell1, styledCell2, unstyledCell))
      val result = row.styles("TestSheet")

      result must haveSize(2)
      result must havePair(headerStyle -> List(CellAddr("TestSheet", 1, 0)))
      result must havePair(dataStyle -> List(CellAddr("TestSheet", 1, 1)))
    }

    "combine styles correctly when multiple cells have same style" in new RowScope {
      val styledCell1 = StyledCell(StringCell(0, "A"), Some(headerStyle))
      val styledCell2 = StyledCell(StringCell(2, "C"), Some(headerStyle))

      val row = Row(0)(Set[Cell](styledCell1, styledCell2))
      val result = row.styles("Sheet1")

      result must haveSize(1)
      result(headerStyle) must contain(
        exactly(
          CellAddr("Sheet1", 0, 0),
          CellAddr("Sheet1", 0, 2)
        )
      )
    }
  }

  trait RowScope extends Scope {

    val headerStyle = CellStyle(
      font = Font(bold = true, heightInPoints = 12),
      alignment = Some(CenterAlignment)
    )

    val dataStyle = CellStyle(
      font = Font(heightInPoints = 10),
      dataFormat = DataFormat("0.00")
    )

  }

}
