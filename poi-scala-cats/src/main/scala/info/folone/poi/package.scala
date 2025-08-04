package info.folone.poi

import _root_.cats._
import _root_.cats.implicits._
import _root_.scala.annotation.tailrec

package object cats extends Instances

trait Instances {

  // Typeclass instances

  object equalities {

    implicit val formulaCellEqualInstance: Eq[FormulaCell] = new Eq[FormulaCell] {
      override def eqv(f1: FormulaCell, f2: FormulaCell): Boolean = f1.index == f2.index && f1.data == f2.data
    }

    implicit val styleCellEqualInstance: Eq[StyledCell] = new Eq[StyledCell] {
      override def eqv(s1: StyledCell, s2: StyledCell): Boolean =
        s1.index == s2.index && s1.style == s2.style && s1.nestedCell == s2.nestedCell
    }

    implicit val cellEqualInstance: Eq[Cell] = new Eq[Cell] {
      override def eqv(s1: Cell, s2: Cell): Boolean =
        (s1, s2) match {
          case (s1: StringCell, s2: StringCell) => s1 == s2
          case (n1: NumericCell, n2: NumericCell) => n1 == n2
          case (d1: DateCell, d2: DateCell) => d1 == d2
          case (b1: BooleanCell, b2: BooleanCell) => b1 == b2
          case (f1: FormulaCell, f2: FormulaCell) => Eq[FormulaCell].eqv(f1, f2)
          case (s1: StyledCell, s2: StyledCell) => Eq[StyledCell].eqv(s1, s2)
          case (bl1: BlankCell, bl2: BlankCell) => bl1.index == bl2.index
          case (e1: ErrorCell, e2: ErrorCell) => e1.index == e2.index && e1.errorCode == e2.errorCode
          case (_, _) => false
        }
    }

  }

  implicit val cellInstance: Semigroup[Cell] with Order[Cell] with Show[Cell] =
    new Semigroup[Cell] with Order[Cell] with Show[Cell] {
      override def combine(f1: Cell, f2: Cell): Cell = f2
      override def compare(x: Cell, y: Cell): Int = {
        @tailrec
        def compareCells(x: Cell, y: Cell): Int = {
          val indexCompare = x.index.compareTo(y.index)
          if (indexCompare != 0) {
            indexCompare
          } else {
            val typeCompare = cellToOrderId(x).compareTo(cellToOrderId(y))
            if (typeCompare != 0) {
              typeCompare
            } else {
              x match {
                case StringCell(_, data) =>
                  data.compareTo(y.asInstanceOf[StringCell].data)
                case NumericCell(_, data) =>
                  data.compareTo(y.asInstanceOf[NumericCell].data)
                case DateCell(_, data) =>
                  data.compareTo(y.asInstanceOf[DateCell].data)
                case BooleanCell(_, data) =>
                  data.compareTo(y.asInstanceOf[BooleanCell].data)
                case cell: FormulaCell =>
                  cell.data.compareTo(y.asInstanceOf[FormulaCell].data)
                case cell: StyledCell =>
                  compareCells(cell.nestedCell, y.asInstanceOf[StyledCell].nestedCell)
                case BlankCell(_) =>
                  0 // BlankCells are equal to each other
                case ErrorCell(_, errorCode) =>
                  errorCode.compareTo(y.asInstanceOf[ErrorCell].errorCode)
              }
            }
          }
        }
        compareCells(x, y)
      }

      override def show(as: Cell): String =
        as match {
          case StringCell(index, data) => s"""StringCell($index, "$data")"""
          case NumericCell(index, data) => s"NumericCell($index, $data)"
          case DateCell(index, data) => s"DateCell($index, $data)"
          case BooleanCell(index, data) => s"BooleanCell($index, $data)"
          case FormulaCell(index, data) => s"""FormulaCell($index, "=$data")"""
          case StyledCell(cell, _) => s"StyledCell(${show(cell)}, <style>)"
          case BlankCell(index) => s"BlankCell($index)"
          case ErrorCell(index, errorCode) => s"ErrorCell($index, $errorCode)"
        }

      private def cellToOrderId(cell: Cell): Int =
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

  implicit val rowInstance: Semigroup[Row] with Eq[Row] with Show[Row] =
    new Semigroup[Row] with Eq[Row] with Show[Row] {
      override def combine(f1: Row, f2: Row): Row =
        Row(f2.index)(mergeSets(f1.cells, f2.cells, (_: Cell).index))
      override def eqv(a1: Row, a2: Row): Boolean =
        a1.index == a2.index && a1.cells === a2.cells
      override def show(as: Row): String =
        s"Row(${as.index})(${as.cells.toIndexedSeq.sortBy(_.index).map(Show[Cell].show).mkString(", ")})"
    }

  implicit val sheetInstance: Semigroup[Sheet] with Eq[Sheet] with Show[Sheet] =
    new Semigroup[Sheet] with Eq[Sheet] with Show[Sheet] {
      override def combine(f1: Sheet, f2: Sheet): Sheet =
        Sheet(f2.name)(mergeSets(f1.rows, f2.rows, (_: Row).index))
      override def eqv(a1: Sheet, a2: Sheet): Boolean = {
        val rows1 = a1.rows.toIndexedSeq.sortBy((x: Row) => x.index)
        val rows2 = a2.rows.toIndexedSeq.sortBy((x: Row) => x.index)
        a1.name == a2.name &&
        rows1.length == rows2.length &&
        (rows1 zip rows2).forall { case (r1, r2) => r1 === r2 }
      }
      override def show(as: Sheet): String =
        s"""Sheet("${as.name}")(${as.rows.toIndexedSeq.sortBy(_.index).map(Show[Row].show).mkString(", ")})"""
    }

  implicit val wbInstance: Monoid[Workbook] with Eq[Workbook] with Show[Workbook] =
    new Monoid[Workbook] with Eq[Workbook] with Show[Workbook] {
      override def empty: Workbook = Workbook(Set[Sheet]())
      override def combine(f1: Workbook, f2: Workbook): Workbook =
        Workbook(mergeSets(f1.sheets, f2.sheets, (_: Sheet).name))
      override def eqv(a1: Workbook, a2: Workbook): Boolean = {
        val sheets1 = a1.sheets.toIndexedSeq.sortBy((x: Sheet) => x.name)
        val sheets2 = a2.sheets.toIndexedSeq.sortBy((x: Sheet) => x.name)
        sheets1.length == sheets2.length &&
        (sheets1 zip sheets2).forall { case (s1, s2) => s1 === s2 }
      }
      override def show(as: Workbook): String =
        s"Workbook(${as.sheets.toIndexedSeq.sortBy(_.name).map(Show[Sheet].show).mkString(", ")})"
    }

  // Utility functions
  private def mergeSets[A: Semigroup, B](list1: Set[A], list2: Set[A], on: A => B): Set[A] =
    combine(list1.map(l => (on(l), l)).toMap, list2.map(l => (on(l), l)).toMap).values.toSet

  private def combine[A, B: Semigroup](m1: Map[A, B], m2: Map[A, B]): Map[A, B] = {
    val k1 = m1.keys.toSet
    val k2 = m2.keys.toSet
    val intersection = k1 & k2
    val r1 = intersection.map(key => key -> m1(key).combine(m2(key))).toMap
    val r2 = m1.filter { case (key, _) => !intersection.contains(key) } ++ m2.filter { case (key, _) =>
      !intersection.contains(key)
    }
    r2 ++ r1
  }

}
