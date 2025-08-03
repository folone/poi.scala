package info.folone.poi.cats

import org.scalacheck._
import org.specs2.mutable._
import org.specs2.ScalaCheck
import cats.kernel.laws.discipline._
import org.typelevel.discipline.specs2.mutable.Discipline

class TypeclassLawsSpec extends Specification with ScalaCheck with Discipline {

  // Property-based test generators
  def positiveInt = Gen.choose(0, 50)

  implicit def arbCell: Arbitrary[Cell] =
    Arbitrary(for {
      index <- positiveInt
      stringData <- Gen.alphaStr.suchThat(_.length < 15)
      boolData <- Arbitrary.arbitrary[Boolean]
      doubleData <- Arbitrary.arbitrary[Double]
      res <- Gen.oneOf(
        StringCell(index, stringData),
        BooleanCell(index, boolData),
        NumericCell(index, doubleData),
        BlankCell(index),
        FormulaCell(index, "SUM(A1:A2)")
      )
    } yield res)

  implicit def arbRow: Arbitrary[Row] =
    Arbitrary(for {
      index <- positiveInt
      cells <- Arbitrary.arbitrary[Set[Cell]]
    } yield Row(index)(cells))

  implicit def arbSheet: Arbitrary[Sheet] =
    Arbitrary(for {
      name <- Gen.alphaStr.suchThat(_.length < 15)
      rows <- Arbitrary.arbitrary[Set[Row]]
    } yield Sheet(name)(rows))

  implicit def arbWorkbook: Arbitrary[info.folone.scala.poi.Workbook] =
    Arbitrary(for {
      sheets <- Arbitrary.arbitrary[Set[Sheet]]
    } yield Workbook(sheets))

  checkAll("Semigroup[Cell]", SemigroupTests[Cell].semigroup)
  checkAll("Order[Cell]", OrderTests[Cell].order)
  checkAll("Semigroup[Row]", SemigroupTests[Row].semigroup)
  checkAll("Eq[Row]", EqTests[Row].eqv)
  checkAll("Semigroup[Sheet]", SemigroupTests[Sheet].semigroup)
  checkAll("Eq[Sheet]", EqTests[Sheet].eqv)
  checkAll("Monoid[Workbook]", MonoidTests[Workbook].monoid)
  checkAll("Eq[Workbook]", EqTests[Workbook].eqv)
}
