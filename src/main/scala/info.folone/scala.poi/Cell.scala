package info.folone.scala.poi

import java.util.Date

import scalaz.{Equal, Show}

sealed abstract class Cell(val index: Int, val style: Option[CellStyle]) {
  def styles(sheet: String, row: Int): Map[CellStyle, List[CellAddr]] =
    style match {
      case None => Map()
      case Some(s) => Map(s -> List(CellAddr(sheet, row, index)))
    }
  override def toString: String = Show[Cell].shows(this)
}
case class StringCell(override val index: Int, data: String) extends Cell(index, None)
case class NumericCell(override val index: Int, data: Double) extends Cell(index, None)
case class DateCell(override val index: Int, data: Date) extends Cell(index, None)
case class BooleanCell(override val index: Int, data: Boolean) extends Cell(index, None)
class FormulaCell(override val index: Int, val data: String) extends Cell(index, None) {
  import equalities.formulaCellEqualInstance
  override def equals(obj: Any) =
    obj != null && obj.isInstanceOf[FormulaCell] && Equal[FormulaCell].equal(obj.asInstanceOf[FormulaCell], this)
  override def hashCode: Int = index.hashCode + data.hashCode
}
object FormulaCell {
  def apply(index: Int, data: String): FormulaCell =
    new FormulaCell(index, data.dropWhile(_ == '='))
  def unapply(cell: FormulaCell): Option[(Int, String)] = Some((cell.index, cell.data))
}
class StyledCell private (override val index: Int, override val style: Option[CellStyle], val nestedCell: Cell)
    extends Cell(index, style) {
  import equalities.styleCellEqualInstance
  def unstyledCell: Cell =
    if (nestedCell.isInstanceOf[StyledCell]) nestedCell.asInstanceOf[StyledCell].nestedCell else nestedCell
  override def equals(obj: Any) =
    obj != null && obj.isInstanceOf[StyledCell] && Equal[StyledCell].equal(obj.asInstanceOf[StyledCell], this)
  override def hashCode: Int = index.hashCode + style.hashCode + nestedCell.hashCode()
}
object StyledCell {
  def apply(cell: Cell, style: CellStyle): StyledCell = new StyledCell(cell.index, Some(style), cell)
  def unapply(cell: StyledCell): Option[(Cell, CellStyle)] = cell.style map { case style => (cell.nestedCell, style) }
}
