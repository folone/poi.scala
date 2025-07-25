package info.folone.scala.poi

import org.specs2.mutable._
import org.specs2.specification.Scope
import java.util.Date
import scalaz.syntax.equal._

class CellSpec extends Specification {

  "Cell hierarchy" should {
    "create StringCell correctly" in {
      val cell = StringCell(0, "test")
      cell.index must beEqualTo(0)
      cell.data must beEqualTo("test")
      cell.style must beNone
    }

    "create NumericCell correctly" in {
      val cell = NumericCell(1, 42.5)
      cell.index must beEqualTo(1)
      cell.data must beEqualTo(42.5)
      cell.style must beNone
    }

    "create DateCell correctly" in {
      val date = new Date()
      val cell = DateCell(2, date)
      cell.index must beEqualTo(2)
      cell.data must beEqualTo(date)
      cell.style must beNone
    }

    "create BooleanCell correctly" in {
      val cell = BooleanCell(3, true)
      cell.index must beEqualTo(3)
      cell.data must beTrue
      cell.style must beNone
    }

    "create BlankCell correctly" in {
      val cell = BlankCell(4)
      cell.index must beEqualTo(4)
      cell.style must beNone
    }

    "create ErrorCell correctly" in {
      val errorCode: Byte = 0x2a
      val cell = ErrorCell(5, errorCode)
      cell.index must beEqualTo(5)
      cell.errorCode must beEqualTo(errorCode)
      cell.style must beNone
    }
  }

  "FormulaCell" should {
    "create with apply method" in {
      val cell = FormulaCell(0, "SUM(A1:A3)")
      cell.index must beEqualTo(0)
      cell.data must beEqualTo("SUM(A1:A3)")
    }

    "strip leading equals sign" in {
      val cell = FormulaCell(0, "=SUM(A1:A3)")
      cell.data must beEqualTo("SUM(A1:A3)")
    }

    "handle multiple equals signs" in {
      val cell = FormulaCell(0, "===SUM(A1:A3)")
      cell.data must beEqualTo("SUM(A1:A3)") // dropWhile removes ALL leading =
    }

    "unapply correctly" in {
      val cell = FormulaCell(1, "AVERAGE(B1:B5)")
      FormulaCell.unapply(cell) must beSome((1, "AVERAGE(B1:B5)"))
    }

    "support equality" in {
      val cell1 = FormulaCell(0, "SUM(A1:A3)")
      val cell2 = FormulaCell(0, "SUM(A1:A3)")
      val cell3 = FormulaCell(0, "SUM(B1:B3)")

      cell1 must beEqualTo(cell2)
      cell1 must not(beEqualTo(cell3))
    }

    "have consistent hashCode" in {
      val cell1 = FormulaCell(0, "SUM(A1:A3)")
      val cell2 = FormulaCell(0, "SUM(A1:A3)")

      cell1.hashCode must beEqualTo(cell2.hashCode)
    }
  }

  "StyledCell" should {
    "wrap cell with style" in new CellScope {
      val styledCell = StyledCell(StringCell(0, "test"), basicStyle)

      styledCell.index must beEqualTo(0)
      styledCell.style must beSome(basicStyle)
      styledCell.nestedCell must beEqualTo(StringCell(0, "test"))
    }

    "unwrap styled cell" in new CellScope {
      val originalCell = NumericCell(1, 42.0)
      val styledCell = StyledCell(originalCell, basicStyle)

      styledCell.unstyledCell must beEqualTo(originalCell)
    }

    "unwrap nested styled cells" in new CellScope {
      val originalCell = StringCell(0, "test")
      val styledOnce = StyledCell(originalCell, basicStyle)
      val styledTwice = StyledCell(styledOnce, headerStyle)

      styledTwice.unstyledCell must beEqualTo(originalCell)
    }

    "unapply correctly" in new CellScope {
      val cell = StringCell(0, "test")
      val styledCell = StyledCell(cell, basicStyle)

      StyledCell.unapply(styledCell) must beSome((cell, basicStyle))
    }

    "support equality" in new CellScope {
      val cell = StringCell(0, "test")
      val styled1 = StyledCell(cell, basicStyle)
      val styled2 = StyledCell(cell, basicStyle)
      val styled3 = StyledCell(cell, headerStyle)

      styled1 must beEqualTo(styled2)
      styled1 must not(beEqualTo(styled3))
    }
  }

  "Cell styles method" should {
    "return empty map for unstyled cell" in {
      val cell = StringCell(0, "test")
      cell.styles("Sheet1", 0) must beEmpty
    }

    "return style map for styled cell" in new CellScope {
      val styledCell = StyledCell(StringCell(1, "test"), basicStyle)
      val result = styledCell.styles("Sheet1", 2)

      result must haveSize(1)
      result must havePair(basicStyle -> List(CellAddr("Sheet1", 2, 1)))
    }
  }

  "Cell toString" should {
    "work for all cell types" in {
      StringCell(0, "test").toString.nonEmpty must beTrue
      NumericCell(1, 42.0).toString.nonEmpty must beTrue
      BooleanCell(2, true).toString.nonEmpty must beTrue
      BlankCell(3).toString.nonEmpty must beTrue
      FormulaCell(4, "SUM(A1:A3)").toString.nonEmpty must beTrue
      ErrorCell(5, 0x2a.toByte).toString.nonEmpty must beTrue
    }
  }

  trait CellScope extends Scope {
    val basicStyle = CellStyle(
      font = Font(heightInPoints = 10)
    )

    val headerStyle = CellStyle(
      font = Font(bold = true, heightInPoints = 12),
      alignment = Some(CenterAlignment)
    )
  }
}
