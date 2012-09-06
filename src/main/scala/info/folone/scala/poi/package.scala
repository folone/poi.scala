package info.folone.scala

import scalaz._

package object poi {
  implicit val cellInstance = new Semigroup[Cell] {
    override def append(f1: Cell, f2: ⇒ Cell) = f2
  }
  implicit val rowInstance = new Semigroup[Row] {
    override def append(f1: Row, f2: ⇒ Row) =
      Row(f2.index)((f1.cells.map(c => (c.index, c)).toMap ++ f2.cells.map(c => (c.index, c)).toMap)
                    .map { case(_, y) => y } toList)
  }
  implicit val sheetInstance = new Semigroup[Sheet] {
    override def append(f1: Sheet, f2: ⇒ Sheet) =
      Sheet(f2.name)((f1.rows.map(r => (r.index, r)).toMap ++ f2.rows.map(r => (r.index, r)).toMap)
                     .map { case(_, y) => y } toList)
  }
  implicit val wbInstance = new Semigroup[Workbook] {
    override def append(f1: Workbook, f2: ⇒ Workbook) =
      Workbook((f1.sheetList.map(s => (s.name, s)).toMap ++ f2.sheetList.map(s => (s.name, s)).toMap)
               .map { case(_, y) => y} toList)
  }
}
