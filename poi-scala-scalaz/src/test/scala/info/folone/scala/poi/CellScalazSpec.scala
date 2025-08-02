package info.folone.scala.poi

import org.specs2.mutable._
import org.specs2.specification.Scope

class CellScalazSpec extends Specification {

  "FormulaCell" should {
    "support equality" in {
      val cell1 = FormulaCell(0, "SUM(A1:A3)")
      val cell2 = FormulaCell(0, "SUM(A1:A3)")
      val cell3 = FormulaCell(0, "SUM(B1:B3)")

      cell1 === cell2
      cell1 !== cell3
    }
  }

  "StyledCell" should {
    "support equality" in new CellScope {
      val cell = StringCell(0, "test")
      val styled1 = StyledCell(cell, basicStyle)
      val styled2 = StyledCell(cell, basicStyle)
      val styled3 = StyledCell(cell, headerStyle)

      styled1 === styled2
      styled1 !== styled3
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
