package info.folone.poi.cats

import cats.kernel.laws.discipline.{EqTests, MonoidTests, OrderTests, SemigroupTests}
import cats.laws.discipline._
import info.folone.poi._
import info.folone.poi.cats
import org.scalacheck._
import org.specs2.ScalaCheck
import org.specs2.mutable._
import org.typelevel.discipline.specs2.mutable.Discipline

class TypeclassLawsSpec extends Specification with ScalaCheck with Discipline {

  // Property-based test generators
  def positiveInt = Gen.choose(0, 10)

  implicit def arbCell: Arbitrary[Cell] =
    Arbitrary(for {
      index <- Gen.choose(0, 5)
      res <- Gen.oneOf(
        StringCell(index, "test"),
        BooleanCell(index, true),
        NumericCell(index, 42.0),
        BlankCell(index)
      )
    } yield res)

  implicit def arbRow: Arbitrary[Row] =
    Arbitrary(for {
      index <- Gen.choose(0, 5)
      cellCount <- Gen.choose(0, 3)
      cells <- Gen.listOfN(cellCount, Arbitrary.arbitrary[Cell]).map(_.toSet)
    } yield Row(index)(cells))

  implicit def arbSheet: Arbitrary[Sheet] =
    Arbitrary(for {
      name <- Gen.oneOf("Sheet1", "Sheet2", "Sheet3")
      rowCount <- Gen.choose(0, 2)
      rows <- Gen.listOfN(rowCount, Arbitrary.arbitrary[Row]).map(_.toSet)
    } yield Sheet(name)(rows))

  implicit def arbWorkbook: Arbitrary[Workbook] =
    Arbitrary(for {
      sheetCount <- Gen.choose(0, 2)
      sheets <- Gen.listOfN(sheetCount, Arbitrary.arbitrary[Sheet]).map(_.toSet)
    } yield Workbook(sheets))

  // Function arbitraries needed for law testing
  implicit def arbCellEndomorphism: Arbitrary[Cell => Cell] =
    Arbitrary(Gen.const(identity[Cell]))

  implicit def arbRowEndomorphism: Arbitrary[Row => Row] =
    Arbitrary(Gen.const(identity[Row]))

  implicit def arbSheetEndomorphism: Arbitrary[Sheet => Sheet] =
    Arbitrary(Gen.const(identity[Sheet]))

  implicit def arbWorkbookEndomorphism: Arbitrary[Workbook => Workbook] =
    Arbitrary(Gen.const(identity[Workbook]))

  checkAll("Semigroup[Cell]", SemigroupTests[Cell].semigroup)
  checkAll("Order[Cell]", OrderTests[Cell].order)
  checkAll("Semigroup[Row]", SemigroupTests[Row].semigroup)
  checkAll("Eq[Row]", EqTests[Row].eqv)
  checkAll("Semigroup[Sheet]", SemigroupTests[Sheet].semigroup)
  checkAll("Eq[Sheet]", EqTests[Sheet].eqv)
  checkAll("Monoid[Workbook]", MonoidTests[Workbook].monoid)
  checkAll("Eq[Workbook]", EqTests[Workbook].eqv)
}
