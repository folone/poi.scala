package info.folone.scala

import poi._
import scalaz._
import effect.IO
import scala.annotation.tailrec

package object poi extends Instances with Lenses

trait Instances {

  type Result[A] = EitherT[Throwable, IO, A]

  // Typeclass instances

  object equalities {
    implicit val formulaCellEqualInstance: Equal[FormulaCell] = new Equal[FormulaCell] {
      override def equal(f1: FormulaCell, f2: FormulaCell) = f1.index == f2.index && f1.data == f2.data
    }

    implicit val styleCellEqualInstance: Equal[StyledCell] = new Equal[StyledCell] {
      override def equal(s1: StyledCell, s2: StyledCell) =
        s1.index == s2.index && s1.style == s2.style && s1.nestedCell == s2.nestedCell
    }

    implicit val cellEqualInstance: Equal[Cell] = new Equal[Cell] {
      override def equal(s1: Cell, s2: Cell) =
        (s1, s2) match {
          case (s1: StringCell, s2: StringCell) => s1 == s2
          case (n1: NumericCell, n2: NumericCell) => n1 == n2
          case (d1: DateCell, d2: DateCell) => d1 == d2
          case (b1: BooleanCell, b2: BooleanCell) => b1 == b2
          case (f1: FormulaCell, f2: FormulaCell) => scalaz.Equal[FormulaCell].equal(f1, f2)
          case (s1: StyledCell, s2: StyledCell) => scalaz.Equal[StyledCell].equal(s1, s2)
          case (bl1: BlankCell, bl2: BlankCell) => bl1.index == bl2.index
          case (e1: ErrorCell, e2: ErrorCell) => e1.index == e2.index && e1.errorCode == e2.errorCode
          case (_, _) => false
        }
    }
  }

  implicit val cellInstance: Semigroup[Cell] with Order[Cell] with Show[Cell] =
    new Semigroup[Cell] with Order[Cell] with Show[Cell] {
      override def append(f1: Cell, f2: => Cell): Cell = f2
      override def equal(a1: Cell, a2: Cell): Boolean = a1.index == a2.index
      override def show(as: Cell): Cord = Cord(shows(as))
      override def shows(as: Cell): String =
        as match {
          case StringCell(index, data) => "StringCell(" + index + ", \"" + data + "\")"
          case NumericCell(index, data) => "NumericCell(" + index + ", " + data + ")"
          case DateCell(index, data) => "DateCell(" + index + ", " + data + ")"
          case BooleanCell(index, data) => "BooleanCell(" + index + ", " + data + ")"
          case FormulaCell(index, data) => "FormulaCell(" + index + ", \"=" + data + "\")"
          case StyledCell(cell, style) => "StyledCell(" + shows(cell) + ", <style>)"
          case BlankCell(index) => "BlankCell(" + index + ")"
          case ErrorCell(index, errorCode) => "ErrorCell(" + index + ", " + errorCode + ")"
        }
      private[this] def cellToOrderId(cell: Cell): Int = {
        cell match {
          case _: StringCell => 1
          case _: NumericCell => 2
          case _: DateCell => 3
          case _: BooleanCell => 4
          case _: FormulaCell => 5
          case _: StyledCell => 6
          case _: BlankCell => 7
          case _: ErrorCell => 8
        }
      }
      @tailrec
      override def order(x: Cell, y: Cell): Ordering = {
        import scalaz.std.anyVal._
        import scalaz.std.string._
        import scalaz.syntax.order._
        Order[Int].order(x.index, y.index) match {
          case Ordering.EQ =>
            Order[Int].order(cellToOrderId(x), cellToOrderId(y)) match {
              case Ordering.EQ =>
                x match {
                  case StringCell(_, data) =>
                    data cmp y.asInstanceOf[StringCell].data
                  case NumericCell(_, data) =>
                    data cmp y.asInstanceOf[NumericCell].data
                  case DateCell(_, data) =>
                    Ordering.fromInt(data.compareTo(y.asInstanceOf[DateCell].data))
                  case BooleanCell(_, data) =>
                    data cmp y.asInstanceOf[BooleanCell].data
                  case cell: FormulaCell =>
                    cell.data cmp y.asInstanceOf[FormulaCell].data
                  case cell: StyledCell =>
                    order(cell.nestedCell, y.asInstanceOf[StyledCell].nestedCell)
                  case BlankCell(_) =>
                    Ordering.EQ // BlankCells are equal to each other
                  case ErrorCell(_, errorCode) =>
                    Ordering.fromInt(errorCode.compare(y.asInstanceOf[ErrorCell].errorCode))
                }
              case other =>
                other
            }
          case other =>
            other
        }
      }
    }
  implicit val rowInstance: Semigroup[Row] with Equal[Row] with Show[Row] =
    new Semigroup[Row] with Equal[Row] with Show[Row] {
      override def append(f1: Row, f2: => Row): Row =
        Row(f2.index)(mergeSets(f1.cells, f2.cells, (_: Cell).index))
      override def equal(a1: Row, a2: Row): Boolean = {
        import scalaz.std.set._
        a1.index == a2.index && scalaz.Equal[Set[Cell]].equal(a1.cells, a2.cells)
      }
      override def show(as: Row): Cord = Cord(shows(as))
      override def shows(as: Row): String = "Row (" + as.index + ")(" + as.cells.toIndexedSeq.sortBy(_.index) + ")"
    }
  implicit val sheetInstance: Semigroup[Sheet] with Equal[Sheet] with Show[Sheet] =
    new Semigroup[Sheet] with Equal[Sheet] with Show[Sheet] {
      override def append(f1: Sheet, f2: => Sheet): Sheet =
        Sheet(f2.name)(mergeSets(f1.rows, f2.rows, (_: Row).index))
      override def equal(a1: Sheet, a2: Sheet): Boolean =
        a1.name == a2.name &&
          (a1.rows.toIndexedSeq.sortBy((x: Row) => x.index) zip
            a2.rows.toIndexedSeq.sortBy((x: Row) => x.index)).forall(v => scalaz.Equal[Row].equal(v._1, v._2))
      override def show(as: Sheet): Cord = Cord(shows(as))
      override def shows(as: Sheet): String =
        "Sheet (\"" + as.name + "\")(" + as.rows.toIndexedSeq.sortBy(_.index) + ")"
    }
  implicit val wbInstance: Monoid[Workbook] with Equal[Workbook] with Show[Workbook] =
    new Monoid[Workbook] with Equal[Workbook] with Show[Workbook] {
      override def zero: Workbook = Workbook(Set[Sheet]())
      override def append(f1: Workbook, f2: => Workbook): Workbook =
        Workbook(mergeSets(f1.sheets, f2.sheets, (_: Sheet).name))
      override def equal(a1: Workbook, a2: Workbook): Boolean =
        (a1.sheets.toIndexedSeq.sortBy((x: Sheet) => x.name) zip
          a2.sheets.toIndexedSeq.sortBy((x: Sheet) => x.name)).forall(v => scalaz.Equal[Sheet].equal(v._1, v._2))
      override def shows(as: Workbook): String = "Workbook(" + as.sheets.toIndexedSeq.sortBy(_.name) + ")"
      override def show(as: Workbook): Cord = Cord(shows(as))
    }

  // Utility functions
  private def mergeSets[A: Semigroup, B](list1: Set[A], list2: Set[A], on: A => B): Set[A] =
    combine(list1.map(l => (on(l), l)).toMap, list2.map(l => (on(l), l)).toMap).map { case (_, y) => y }.toSet

  private def combine[A, B: Semigroup](m1: Map[A, B], m2: Map[A, B]): Map[A, B] = {
    val k1 = m1.keysIterator.toSet
    val k2 = m2.keysIterator.toSet
    val intersection = k1 & k2
    val r1 = for (key <- intersection) yield (key -> Semigroup[B].append(m1(key), m2(key)))
    val r2 = m1.filterKeys(!intersection.contains(_)) ++
      m2.filterKeys(!intersection.contains(_))
    r2.toMap ++ r1
  }
}

trait Lenses {
  // Lenses
  import Lens._
  import StoreT._
  val doubleCellLens: NumericCell @> Double =
    lensFamily(c => store(c.data)(changed => c.copy(data = changed)))
  val boolCellLens: BooleanCell @> Boolean =
    lensFamily(c => store(c.data)(changed => c.copy(data = changed)))
  val stringCellLens: StringCell @> String =
    lensFamily(c => store(c.data)(changed => c.copy(data = changed)))
  val rowLens =
    setLensFamily[Row, Row, Cell](lens(r => store(r.cells)(changed => Row(r.index)(changed))))
  val sheetLens =
    setLensFamily[Sheet, Sheet, Row](lens(s => store(s.rows)(changed => Sheet(s.name)(changed))))
  val wbLens =
    setLensFamily[Workbook, Workbook, Sheet](lens(wb => store(wb.sheets)(changed => Workbook(changed))))
}
