package info.folone.poi.scalaz

import _root_.scalaz.syntax.semigroup._
import info.folone.poi._
import java.util.Date
import org.scalacheck._
import org.scalacheck.Arbitrary._
import org.scalacheck.Gen._
import org.scalacheck.Prop._
import org.specs2.ScalaCheck
import org.specs2.mutable.Specification

class PropertyBasedTestingScalazSpec extends Specification with ScalaCheck {

  implicit val arbCell: Arbitrary[Cell] = Arbitrary(genCell)
  implicit val arbRow: Arbitrary[Row] = Arbitrary(genRow)
  implicit val arbSheet: Arbitrary[Sheet] = Arbitrary(genSheet)
  implicit val arbWorkbook: Arbitrary[Workbook] = Arbitrary(genWorkbook)

  def genSafeString: Gen[String] = for {
    length <- choose(1, 100)
    chars <- listOfN(
      length,
      frequency(
        (80, alphaNumChar),
        (10, const(' ')),
        (5, oneOf('-', '_', '.', ':')),
        (5, choose('\u00A0', '\u024F'))
      )
    )
  } yield chars.mkString

  def genUnicodeString: Gen[String] = for {
    length <- choose(1, 50)
    chars <- listOfN(
      length,
      frequency(
        (40, alphaNumChar),
        (20, choose('\u4e00', '\u9fff')),
        (20, choose('\u3040', '\u309f')),
        (10, choose('\u0400', '\u04ff')),
        (10, choose('\u0370', '\u03ff'))
      )
    )
  } yield chars.mkString

  def genNumericValue: Gen[Double] = frequency(
    (60, choose(-1000000.0, 1000000.0)),
    (20, const(0.0)),
    (10, const(Double.MaxValue)),
    (5, const(Double.MinValue)),
    (3, const(Double.PositiveInfinity)),
    (2, const(Double.NegativeInfinity))
  ).suchThat(!_.isNaN)

  def genDate: Gen[Date] = for {
    timestamp <- choose(0L, System.currentTimeMillis() + 365L * 24 * 60 * 60 * 1000)
  } yield new Date(timestamp)

  def genFormula: Gen[String] = frequency(
    (30, for { range <- choose(1, 100) } yield s"SUM(A1:A$range)"),
    (20, const("AVERAGE(B1:B10)")),
    (15, const("COUNT(C1:C50)")),
    (
      15,
      for {
        col <- choose(1, 26)
        row <- choose(1, 1000)
      } yield s"MAX(${('A' + col - 1).toChar}1:${('A' + col - 1).toChar}$row)"
    ),
    (10, const("NOW()"))
  )

  def genCellIndex: Gen[Int] = choose(0, 1000)

  def genCell: Gen[Cell] = frequency(
    (
      40,
      for {
        index <- genCellIndex
        value <- genSafeString
      } yield StringCell(index, value)
    ),
    (
      25,
      for {
        index <- genCellIndex
        value <- genNumericValue
      } yield NumericCell(index, value)
    ),
    (
      15,
      for {
        index <- genCellIndex
        value <- genDate
      } yield DateCell(index, value)
    ),
    (
      10,
      for {
        index <- genCellIndex
        value <- arbitrary[Boolean]
      } yield BooleanCell(index, value)
    ),
    (
      8,
      for {
        index <- genCellIndex
        formula <- genFormula
      } yield FormulaCell(index, formula)
    ),
    (2, for { index <- genCellIndex } yield BlankCell(index))
  )

  def genRowIndex: Gen[Int] = choose(0, 10000)

  def genRow: Gen[Row] = for {
    index <- genRowIndex
    cellCount <- choose(0, 15)
    cells <- listOfN(cellCount, genCell)
    uniqueCells = cells.groupBy(_.index).values.map(_.head).toSet
  } yield Row(index)(uniqueCells)

  def genSheetName: Gen[String] = for {
    name <- genSafeString.suchThat(_.trim.nonEmpty)
  } yield name.take(31)

  def genSheet: Gen[Sheet] = for {
    name <- genSheetName
    rowCount <- choose(0, 20)
    rows <- listOfN(rowCount, genRow)
    uniqueRows = rows.groupBy(_.index).values.map(_.head).toSet
  } yield Sheet(name)(uniqueRows)

  def genWorkbook: Gen[Workbook] = for {
    sheetCount <- choose(1, 5)
    sheets <- listOfN(sheetCount, genSheet)
    uniqueSheets = sheets.groupBy(_.name).values.map(_.head).toSet
  } yield new Workbook(uniqueSheets.map(s => s.name -> s).toMap)

  "Workbook properties with Scalaz" should {
    "handle workbook combination correctly" in
      forAll { (wb1: Workbook, wb2: Workbook) =>
        val combined = wb1 |+| wb2

        val originalSheetNames = (wb1.sheets ++ wb2.sheets).map(_.name).toSet
        val combinedSheetNames = combined.sheets.map(_.name).toSet

        originalSheetNames.subsetOf(combinedSheetNames) must beTrue
      }

    "preserve data integrity through multiple operations" in
      forAll { (workbook: Workbook) =>
        val identity = new Workbook(Map.empty[String, Sheet])
        val combined = workbook |+| identity
        val recombined = identity |+| workbook

        combined.sheets.size must_== workbook.sheets.size
        recombined.sheets.size must_== workbook.sheets.size
      }
  }
}
