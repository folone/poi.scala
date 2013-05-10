package info.folone.scala

import poi._
import scalaz._

package object poi extends Instances with Lenses

trait Instances {
  // Typeclass instances
  implicit val cellInstance = new Semigroup[Cell] with Equal[Cell] with Show[Cell] {
    override def append(f1: Cell, f2: ⇒ Cell) = f2
    override def equal(a1: Cell, a2: Cell): Boolean = a1 == a2
    override def shows(as: Cell) =
      as match {
        case StringCell(index, data)  ⇒ "StringCell(" + index + ", \"" + data + "\")"
        case NumericCell(index, data) ⇒ "NumericCell(" + index + ", \"" + data + "\")"
        case BooleanCell(index, data) ⇒ "BooleanCell(" + index + ", \"" + data + "\")"
        case FormulaCell(index, data) ⇒ "FormulaCell(" + index + ", \"=" + data + "\")"
      }
  }
  implicit val rowInstance = new Semigroup[Row] with Equal[Row] with Show[Row] {
    override def append(f1: Row, f2: ⇒ Row) =
      Row(f2.index)(mergeSets(f1.cells, f2.cells, (_: Cell).index))
    override def equal(a1: Row, a2: Row): Boolean =
      a1.index == a2.index && a1.cells.toStream.corresponds(a2.cells.toStream)(Equal[Cell].equal)
    override def shows(as: Row) = "Row (" + as.index + ")(" + as.cells + ")"
  }
  implicit val sheetInstance = new Semigroup[Sheet] with Equal[Sheet] with Show[Sheet] {
    override def append(f1: Sheet, f2: ⇒ Sheet) =
      Sheet(f2.name)(mergeSets(f1.rows, f2.rows, (_: Row).index))
    override def equal(a1: Sheet, a2: Sheet): Boolean =
      a1.name == a2.name &&
      (a1.rows.toIndexedSeq.sortBy((x: Row) ⇒ x.index) zip
       a2.rows.toIndexedSeq.sortBy((x: Row) ⇒ x.index))
        .foldLeft (true) { (acc, v) ⇒
          acc && Equal[Row].equal(v._1, v._2)
        }
    override def shows(as: Sheet) = "Sheet (\"" + as.name + "\")(" + as.rows + ")"
  }
  implicit val wbInstance = new Monoid[Workbook] with Equal[Workbook] with Show[Workbook] {
    override def zero = Workbook(Set[Sheet]())
    override def append(f1: Workbook, f2: ⇒ Workbook) =
      Workbook(mergeSets(f1.sheets, f2.sheets, (_: Sheet).name))
    override def equal(a1: Workbook, a2: Workbook): Boolean =
      (a1.sheets.toIndexedSeq.sortBy((x: Sheet) ⇒ x.name) zip
       a1.sheets.toIndexedSeq.sortBy((x: Sheet) ⇒ x.name))
      .foldLeft (true) { (acc, v) ⇒
        acc && Equal[Sheet].equal(v._1, v._2)
      }
    override def shows(as: Workbook) = "Workbook(" + as.sheets + ")"
  }

  // Utility functions
  private def mergeSets[A: Semigroup, B](list1: Set[A], list2: Set[A], on: A ⇒ B): Set[A] =
    combine(list1.map(l ⇒ (on(l), l)).toMap, list2.map(l ⇒ (on(l), l)).toMap)
      .map { case(_, y) ⇒ y } toSet

  private def combine[A, B: Semigroup](m1: Map[A, B], m2: Map[A, B]): Map[A, B] = {
    val k1 = Set(m1.keysIterator.toList: _*)
    val k2 = Set(m2.keysIterator.toList: _*)
    val intersection = k1 & k2
    val r1 = for(key ← intersection) yield (key → Semigroup[B].append(m1(key), m2(key)))
    val r2 = m1.filterKeys(!intersection.contains(_)) ++ m2.filterKeys(!intersection.contains(_)) 
    r2 ++ r1
  }
}

trait Lenses {
    // Lenses
  import Lens._
  import StoreT._
  val doubleCellLens: NumericCell @> Double =
    lensFamily(c ⇒ store(c.data)(chaned ⇒ c.copy(data = changed)))
  val boolCellLens: BooleanCell @> Boolean =
    lensFamily(c ⇒ store(c.data)(changed ⇒ c.copy(data = changed)))
  val stringCellLens: StringCell @> String =
    lensFamily(c ⇒ store(c.data)(changed ⇒ c.copy(data = changed)))
  val rowLens   =
    setLensFamily[Row, Row, Cell](lens(r ⇒ store(r.cells)(changed ⇒ Row(r.index) (changed))))
  val sheetLens =
    setLensFamily[Sheet, Sheet, Row](lens(s ⇒ store(s.rows) (changed ⇒ Sheet(s.name)(changed))))
  val wbLens    =
    setLensFamily[Workbook, Workbook, Sheet](lens(wb ⇒ store(wb.sheets)(changed ⇒ Workbook(changed))))
}
