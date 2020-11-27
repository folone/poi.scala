package info.folone.scala.poi

import scalaz._
import std.map._
import std.list._
import syntax.monoid._

class Sheet(val name: String)(val rows: Set[Row]) {
  def styles: Map[CellStyle, List[CellAddr]] =
    rows.foldRight(Map[CellStyle, List[CellAddr]]()) { case (row, map) =>
      map |+| row.styles(name)
    }
  override def toString: String = Show[Sheet].shows(this)
  override def equals(obj: Any): Boolean =
    obj != null && obj.isInstanceOf[Sheet] && Equal[Sheet].equal(obj.asInstanceOf[Sheet], this)
  override def hashCode: Int = name.hashCode + rows.hashCode
}
object Sheet {
  def apply(name: String)(rows: Set[Row]): Sheet = new Sheet(name)(rows)
  def unapply(sheet: Sheet): Some[(String, Set[Row])] = Some((sheet.name, sheet.rows))
}
