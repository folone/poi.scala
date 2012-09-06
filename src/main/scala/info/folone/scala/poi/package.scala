package info.folone.scala

import scalaz._

package object poi {
  implicit val cellInstance = new Semigroup[Cell] {
    override def append(f1: Cell, f2: ⇒ Cell) = f2
  }
  implicit val rowInstance = new Semigroup[Row] {
    override def append(f1: Row, f2: ⇒ Row) =
      Row(f2.index)(mergeLists(f1.cells, f2.cells, (_: Cell).index))
  }
  implicit val sheetInstance = new Semigroup[Sheet] {
    override def append(f1: Sheet, f2: ⇒ Sheet) =
      Sheet(f2.name)(mergeLists(f1.rows, f2.rows, (_: Row).index))
  }
  implicit val wbInstance = new Monoid[Workbook] {
    override def zero = Workbook(Nil)
    override def append(f1: Workbook, f2: ⇒ Workbook) =
      Workbook(mergeLists(f1.sheetList, f2.sheetList, (_: Sheet).name))
  }

  def mergeLists[A, B](list1: List[A], list2: List[A], on: A => B): List[A] =
    (list1.map(l => (on(l), l)).toMap ++ list2.map(l => (on(l), l)).toMap).map { case(_, y) => y } toList
}
