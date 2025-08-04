package info.folone.poi.scalaz

import _root_.scalaz.scalacheck.ScalazProperties._
import info.folone.poi._
import org.scalacheck._
import org.specs2.mutable._
import org.specs2.specification.Scope
import org.specs2.ScalaCheck
import Arbitrary._

class TypeclassLawsSpec extends Specification with ScalaCheck {

  "Typeclass laws" should {
    "satisfy for Semigroup[Cell]" in properties {
      semigroup.laws[Cell]
    }

    "satisfy for Order[Cell]" in properties {
      order.laws[Cell]
    }

    "satisfy for Semigroup[Row]" in properties {
      semigroup.laws[Row]
    }

    "satisfy for Equal[Row]" in properties {
      equal.laws[Row]
    }

    "satisfy for Semigroup[Sheet]" in properties {
      semigroup.laws[Sheet]
    }

    "satisfy for Equal[Sheet]" in properties {
      equal.laws[Sheet]
    }

    "satisfy for Monoid[Workbook]" in properties {
      monoid.laws[Workbook]
    }

    "satisfy for Equal[Workbook]" in properties {
      equal.laws[Workbook]
    }
  }

  // Property-based test generators
  def positiveInt = Gen.choose(0, Integer.MAX_VALUE)

  implicit def arbCell: Arbitrary[Cell] =
    Arbitrary(for {
      index <- positiveInt
      stringData <- Gen.alphaStr
      boolData <- arbitrary[Boolean]
      doubleData <- arbitrary[Double]
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
      cells <- arbitrary[Set[Cell]]
    } yield Row(index)(cells))

  implicit def arbSheet: Arbitrary[Sheet] =
    Arbitrary(for {
      name <- arbitrary[String]
      rows <- arbitrary[Set[Row]]
    } yield Sheet(name)(rows))

  implicit def arbWorkbook: Arbitrary[Workbook] =
    Arbitrary(for {
      sheets <- arbitrary[Set[Sheet]]
    } yield Workbook(sheets))

}
