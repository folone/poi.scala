package info.folone.scala.poi

import java.util.Date

sealed abstract class Cell(val index: Int, val style: Option[CellStyle]) {

  def styles(sheet: String, row: Int): Map[CellStyle, List[CellAddr]] =
    style match {
      case None => Map()
      case Some(s) => Map(s -> List(CellAddr(sheet, row, index)))
    }

}

case class StringCell(override val index: Int, data: String) extends Cell(index, None)
case class NumericCell(override val index: Int, data: Double) extends Cell(index, None)
case class DateCell(override val index: Int, data: Date) extends Cell(index, None)
case class BooleanCell(override val index: Int, data: Boolean) extends Cell(index, None)
case class BlankCell(override val index: Int) extends Cell(index, None)
case class ErrorCell(override val index: Int, errorCode: Byte) extends Cell(index, None)

case class FormulaCell(override val index: Int, data: String) extends Cell(index, None)

object FormulaCell {

  def apply(index: Int, data: String): FormulaCell =
    new FormulaCell(index, data.dropWhile(_ == '='))

}

case class StyledCell(nestedCell: Cell, override val style: Option[CellStyle]) extends Cell(nestedCell.index, style) {

  def unstyledCell: Cell =
    nestedCell match {
      case cell: StyledCell => cell.nestedCell
      case _ => nestedCell
    }

}

object StyledCell {
  def apply(cell: Cell, style: CellStyle): StyledCell = new StyledCell(cell, Some(style))
  def unapply(cell: StyledCell): Option[(Cell, CellStyle)] = cell.style map { style => (cell.nestedCell, style) }
}
