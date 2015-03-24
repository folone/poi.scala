package info.folone.scala

import poi._
import scalaz._
import effect.IO

package object poi extends Instances with Lenses {
  type Seq[+A] = scala.collection.immutable.Seq[A]
}

trait Instances {

  type Result[A] = EitherT[IO, Throwable, A]

  // Typeclass instances

  object equalities {
    implicit val formulaCellEqualInstance = new Equal[FormulaCell] {
      override def equal(f1: FormulaCell, f2: FormulaCell) = f1.index == f2.index && f1.data == f2.data
    }

    implicit val styleCellEqualInstance = new Equal[StyledCell] {
      override def equal(s1: StyledCell, s2: StyledCell) =
        s1.index == s2.index && s1.style == s2.style && s1.nestedCell == s2.nestedCell
    }

    implicit val cellEqualInstance = new Equal[Cell] {
      override def equal(s1: Cell, s2: Cell) = (s1, s2) match {
        case (s1: StringCell, s2: StringCell) => s1 == s2
        case (n1: NumericCell, n2: NumericCell) => n1 == n2
        case (b1: BooleanCell, b2: BooleanCell) => b1 == b2
        case (f1: FormulaCell, f2: FormulaCell) => Equal[FormulaCell].equal(f1, f2)
        case (s1: StyledCell, s2: StyledCell) => Equal[StyledCell].equal(s1, s2)
        case (_, _) => false
      }
    }
  }

  implicit val cellInstance = new Semigroup[Cell] with Equal[Cell] with Show[Cell] {
    override def append(f1: Cell, f2: ⇒ Cell): Cell = f2
    override def equal(a1: Cell, a2: Cell): Boolean = a1.index == a2.index
    override def shows(as: Cell): String =
      as match {
        case StringCell(index, data)  ⇒ "StringCell("  + index + ", \""  + data + "\")"
        case NumericCell(index, data) ⇒ "NumericCell(" + index + ", "    + data + ")"
        case BooleanCell(index, data) ⇒ "BooleanCell(" + index + ", "    + data + ")"
        case FormulaCell(index, data) ⇒ "FormulaCell(" + index + ", \"=" + data + "\")"
        case StyledCell(cell, style) ⇒ "StyledCell(" + shows(cell) + ", <style>)"
      }
  }
  implicit val rowInstance = new Semigroup[Row] with Equal[Row] with Show[Row] {
    override def append(f1: Row, f2: ⇒ Row): Row =
      Row(f2.index)(mergeSeqs(f1.cells, f2.cells, (_: Cell).index))
    override def equal(a1: Row, a2: Row): Boolean =
      a1.index == a2.index &&
    a1.cells.toIndexedSeq.sortBy(_.index).toStream.corresponds(
      a2.cells.toIndexedSeq.sortBy(_.index).toStream)(Equal[Cell].equal)
    override def shows(as: Row): String = "Row (" + as.index + ")(" + as.cells.toIndexedSeq.sortBy(_.index) + ")"
  }
  implicit val sheetInstance = new Semigroup[Sheet] with Equal[Sheet] with Show[Sheet] {
    override def append(f1: Sheet, f2: ⇒ Sheet): Sheet =
      Sheet(f2.name)(mergeSets(f1.rows, f2.rows, (_: Row).index))
    override def equal(a1: Sheet, a2: Sheet): Boolean =
      a1.name == a2.name &&
      (a1.rows.toIndexedSeq.sortBy((x: Row) ⇒ x.index) zip
       a2.rows.toIndexedSeq.sortBy((x: Row) ⇒ x.index))
        .foldLeft (true) { (acc, v) ⇒
          acc && Equal[Row].equal(v._1, v._2)
        }
    override def shows(as: Sheet): String = "Sheet (\"" + as.name + "\")(" + as.rows.toIndexedSeq.sortBy(_.index) + ")"
  }
  implicit val wbInstance = new Monoid[Workbook] with Equal[Workbook] with Show[Workbook] {
    override def zero: Workbook = Workbook(List[Sheet]())
    override def append(f1: Workbook, f2: ⇒ Workbook): Workbook =
      Workbook(mergeSeqs(f1.sheets, f2.sheets, (_: Sheet).name))
    override def equal(a1: Workbook, a2: Workbook): Boolean =
      (a1.sheets.sortBy((x: Sheet) ⇒ x.name) zip
       a2.sheets.sortBy((x: Sheet) ⇒ x.name))
      .foldLeft (true) { (acc, v) ⇒
        acc && Equal[Sheet].equal(v._1, v._2)
      }
    override def shows(as: Workbook): String = "Workbook(" + as.sheets.sortBy(_.name) + ")"
  }

  // Utility functions
  private def mergeSets[A: Semigroup, B](list1: Set[A], list2: Set[A], on: A ⇒ B): Set[A] =
    combine(
      list1.groupBy(on(_)).toMap[B, Set[A]].map{ case (k, xs) =>
        k -> xs.reduceLeft[A]{case (a, b) => Semigroup[A].append(a, b)}
      },
      list2.groupBy(on(_)).toMap[B, Set[A]].map{ case (k, xs) =>
        k -> xs.reduceLeft[A]{case (a, b) => Semigroup[A].append(a, b)}
      }
    ).map{ case (_, y) ⇒ y }.toSet

  private def mergeSeqs[A: Semigroup, B](list1: Seq[A], list2: Seq[A], on: A ⇒ B): Seq[A] =
    combine(
      list1.groupBy(on(_)).toMap[B, Seq[A]].map{ case (k, xs) =>
        k -> xs.reduceLeft[A]{case (a, b) => Semigroup[A].append(a, b)}
      },
      list2.groupBy(on(_)).toMap[B, Seq[A]].map{ case (k, xs) =>
        k -> xs.reduceLeft[A]{case (a, b) => Semigroup[A].append(a, b)}
      }
    ).map{ case (_, y) ⇒ y }.toList

  private def combine[A, B: Semigroup](m1: Map[A, B], m2: Map[A, B]): Map[A, B] = {
    val k1 = m1.keySet
    val k2 = m2.keySet
    val intersection = k1 & k2
    val r1 = for(key ← intersection) yield (key → Semigroup[B].append(m1(key), m2(key)))
    val r2 = m1.filterKeys(!intersection.contains(_)) ++
             m2.filterKeys(!intersection.contains(_))
    r2 ++ r1
  }

}

trait Lenses {
    // Lenses
  import Lens._
  import StoreT._
  val doubleCellLens: NumericCell @> Double =
    lensFamily(c ⇒ store(c.data)(changed ⇒ c.copy(data = changed)))
  val boolCellLens: BooleanCell @> Boolean =
    lensFamily(c ⇒ store(c.data)(changed ⇒ c.copy(data = changed)))
  val stringCellLens: StringCell @> String =
    lensFamily(c ⇒ store(c.data)(changed ⇒ c.copy(data = changed)))
  val rowLens   =
    seqLensFamily[Row, Row, Cell](lens(r ⇒
      store(r.cells)(changed ⇒ Row(r.index) (changed))))
  val sheetLens =
    setLensFamily[Sheet, Sheet, Row](lens(s ⇒
      store(s.rows) (changed ⇒ Sheet(s.name)(changed))))
  val wbLens    =
    seqLensFamily[Workbook, Workbook, Sheet](lens(wb ⇒
      store(wb.sheets)(changed ⇒ Workbook(changed))))
}
