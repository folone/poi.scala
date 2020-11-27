package info.folone.scala.poi

import scalaz._
import std.map._
import std.list._
import syntax.monoid._

class Row(val index: Int)(val cells: Set[Cell]) {
  def styles(sheet: String): Map[CellStyle, List[CellAddr]] =
    cells.foldRight(Map[CellStyle, List[CellAddr]]()) { case (cell, map) =>
      map |+| cell.styles(sheet, index)
    }
  override def toString: String = Show[Row].shows(this)
  override def equals(obj: Any): Boolean =
    obj != null && obj.isInstanceOf[Row] && Equal[Row].equal(obj.asInstanceOf[Row], this)
  override def hashCode: Int = index.hashCode + cells.hashCode
}

object Row {
  def apply(index: Int)(cells: Set[Cell]): Row = new Row(index)(cells)
  def unapply(row: Row): Some[(Int, Set[Cell])] = Some((row.index, row.cells))
}
