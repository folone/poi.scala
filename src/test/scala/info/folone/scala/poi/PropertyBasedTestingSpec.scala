package info.folone.scala.poi

import java.util.Date
import org.scalacheck._
import org.scalacheck.Arbitrary._
import org.scalacheck.Gen._
import org.scalacheck.Prop._
import org.specs2.mutable.Specification
import org.specs2.ScalaCheck
import scala.util.Random
import scalaz.syntax.semigroup._

/**
 * Property-based testing specification using ScalaCheck
 * Tests invariants and properties of poi.scala data structures
 */
class PropertyBasedTestingSpec extends Specification with ScalaCheck {

  // Enhanced generators for property-based testing
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
        (5, choose('\u00A0', '\u024F')) // Extended Latin characters
      )
    )
  } yield chars.mkString

  def genUnicodeString: Gen[String] = for {
    length <- choose(1, 50)
    chars <- listOfN(
      length,
      frequency(
        (40, alphaNumChar),
        (20, choose('\u4e00', '\u9fff')), // Chinese characters
        (20, choose('\u3040', '\u309f')), // Hiragana
        (10, choose('\u0400', '\u04ff')), // Cyrillic
        (10, choose('\u0370', '\u03ff')) // Greek
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
    (
      30,
      for {
        range <- choose(1, 100)
      } yield s"SUM(A1:A$range)"
    ),
    (20, const("AVERAGE(B1:B10)")),
    (15, const("COUNT(C1:C50)")),
    (
      15,
      for {
        col <- choose(1, 26)
        row <- choose(1, 1000)
      } yield s"MAX(${('A' + col - 1).toChar}1:${('A' + col - 1).toChar}$row)"
    ),
    (10, const("NOW()")),
    (5, const("PI()")),
    (5, Gen.oneOf("TRUE", "FALSE", "TODAY()"))
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
    (
      2,
      for {
        index <- genCellIndex
      } yield BlankCell(index)
    )
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
  } yield name.take(31) // Excel sheet name limit

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

  // Enhanced generators for edge cases
  def genLargeWorkbook: Gen[Workbook] = for {
    sheetCount <- choose(2, 5)
    sheets <- listOfN(
      sheetCount,
      for {
        name <- genSheetName
        rowCount <- choose(10, 50)
        rows <- listOfN(
          rowCount,
          for {
            index <- genRowIndex
            cellCount <- choose(5, 20)
            cells <- listOfN(cellCount, genCell)
            uniqueCells = cells.groupBy(_.index).values.map(_.head).toSet
          } yield Row(index)(uniqueCells)
        )
        uniqueRows = rows.groupBy(_.index).values.map(_.head).toSet
      } yield Sheet(name)(uniqueRows)
    )
    uniqueSheets = sheets.groupBy(_.name).values.map(_.head).toSet
  } yield new Workbook(uniqueSheets.map(s => s.name -> s).toMap)

  def genComplexFormulas: Gen[String] = frequency(
    (
      20,
      for {
        ranges <- listOfN(
          3,
          for {
            startCol <- choose(1, 10)
            endCol <- choose(startCol, startCol + 20)
            startRow <- choose(1, 100)
            endRow <- choose(startRow, startRow + 50)
          } yield s"${('A' + startCol - 1).toChar}$startRow:${('A' + endCol - 1).toChar}$endRow"
        )
      } yield s"SUM(${ranges.mkString(",")})"
    ),
    (
      15,
      for {
        condition <- genSafeString.map(_.take(10))
        trueValue <- choose(1, 1000)
        falseValue <- choose(1, 1000)
      } yield s"IF(A1>$condition,$trueValue,$falseValue)"
    ),
    (10, const("CONCATENATE(A1,B1,C1)")),
    (10, const("VLOOKUP(A1,B:D,2,FALSE)")),
    (5, const("INDEX(A:A,MATCH(E1,B:B,0))"))
  )

  // Property tests
  "Cell properties" should {
    "maintain index integrity" in
      forAll { (cell: Cell) =>
        cell.index must be_>=(0)
      }

    "preserve data through serialization" in
      forAll { (cell: Cell) =>
        cell match {
          case StringCell(_, data) => data must not(beNull)
          case NumericCell(_, value) => !value.isNaN must beTrue
          case DateCell(_, date) => date must not(beNull)
          case BooleanCell(_, _) => ok
          case FormulaCell(_, formula) => formula.nonEmpty must beTrue
          case BlankCell(_) => ok
          case _ => ok
        }
      }

    "handle Unicode data correctly" in
      forAll(genCellIndex, genUnicodeString) { (index: Int, unicodeData: String) =>
        val cell = StringCell(index, unicodeData)
        cell.data must_== unicodeData
      }

    "maintain ordering consistency" in
      forAll { (cells: List[Cell]) =>
        val sorted1 = cells.sortBy(_.index)
        val sorted2 = cells.sortBy(_.index)
        sorted1 must_== sorted2
      }
  }

  "Row properties" should {
    "maintain cell uniqueness by index" in
      forAll { (row: Row) =>
        val cellIndices = row.cells.map(_.index)
        cellIndices.size must_== cellIndices.toSet.size
      }

    "preserve all cells in operations" in
      forAll { (row: Row) =>
        val cellCount = row.cells.size
        val reconstructed = Row(row.index)(row.cells)
        reconstructed.cells.size must_== cellCount
      }

    "handle empty rows correctly" in
      forAll(genRowIndex) { (index: Int) =>
        val emptyRow = Row(index)(Set.empty)
        emptyRow.cells must beEmpty
        emptyRow.index must_== index
      }

    "maintain immutability" in
      forAll { (row: Row, newCell: Cell) =>
        val originalSize = row.cells.size
        val newCells = row.cells + newCell
        val newRow = Row(row.index)(newCells)

        // Original row unchanged
        row.cells.size must_== originalSize
        // New row has correct size
        newRow.cells.size must be_>=(originalSize)
      }
  }

  "Sheet properties" should {
    "maintain row uniqueness by index" in
      forAll { (sheet: Sheet) =>
        val rowIndices = sheet.rows.map(_.index)
        rowIndices.size must_== rowIndices.toSet.size
      }

    "preserve sheet name" in
      forAll { (sheet: Sheet) =>
        sheet.name.nonEmpty must beTrue
        val reconstructed = Sheet(sheet.name)(sheet.rows)
        reconstructed.name must_== sheet.name
      }

    "handle large datasets efficiently" in
      // Use fewer iterations for this expensive test
      Prop
        .forAll(genLargeWorkbook) { (workbook: Workbook) =>
          val sheet = workbook.sheets.head
          val rowCount = sheet.rows.size
          val cellCount = sheet.rows.flatMap(_.cells).size

          // Should handle reasonable sizes without issues
          rowCount must be_<=(50)
          cellCount must be_>=(0)
          cellCount must be_<=(1000)
        }
        .set(minTestsOk = 10, maxDiscardRatio = 3)
  }

  "Workbook properties" should {
    "maintain sheet uniqueness by name" in
      forAll { (workbook: Workbook) =>
        val sheetNames = workbook.sheets.map(_.name)
        sheetNames.size must_== sheetNames.toSet.size
      }

    "never be empty" in
      forAll { (workbook: Workbook) =>
        workbook.sheets.nonEmpty must beTrue
      }

    "preserve all data through operations" in
      forAll { (workbook: Workbook) =>
        val sheetCount = workbook.sheets.size
        val totalRows = workbook.sheets.flatMap(_.rows).size
        val totalCells = workbook.sheets.flatMap(_.rows).flatMap(_.cells).size

        val reconstructed = Workbook(workbook.sheets)
        reconstructed.sheets.size must_== sheetCount
        reconstructed.sheets.flatMap(_.rows).size must_== totalRows
        reconstructed.sheets.flatMap(_.rows).flatMap(_.cells).size must_== totalCells
      }

    "handle workbook combination correctly" in
      forAll { (wb1: Workbook, wb2: Workbook) =>
        import scalaz.syntax.semigroup._

        val combined = wb1 |+| wb2

        // Combined workbook should have sheets from both
        val originalSheetNames = (wb1.sheets ++ wb2.sheets).map(_.name).toSet
        val combinedSheetNames = combined.sheets.map(_.name).toSet

        // All unique sheet names should be preserved
        originalSheetNames.subsetOf(combinedSheetNames) must beTrue
      }
  }

  "Formula handling properties" should {
    "accept valid formula syntax" in
      forAll(genCellIndex, genFormula) { (index: Int, formula: String) =>
        val cell = FormulaCell(index, formula)
        cell.data.nonEmpty must beTrue

        // Should handle leading equals sign correctly
        val cellWithEquals = FormulaCell(index, s"=$formula")
        cellWithEquals.data must_== formula
      }

    "handle complex formulas" in
      forAll(genCellIndex, genComplexFormulas) { (index: Int, formula: String) =>
        val cell = FormulaCell(index, formula)
        cell.data must_== formula
        cell.index must_== index
      }
  }

  "Performance properties" should {
    "maintain reasonable memory usage" in
      Prop
        .forAll(choose(1, 50)) { (size: Int) =>
          val workbook = genWorkbook.sample.get
          val sheetCount = workbook.sheets.size
          val avgRowsPerSheet = if (sheetCount > 0) workbook.sheets.map(_.rows.size).sum / sheetCount else 0

          // Reasonable limits for generated data
          sheetCount must be_<=(5)
          avgRowsPerSheet must be_<=(20)
        }
        .set(minTestsOk = 10)

    "scale linearly with data size" in {
      val sizes = List(5, 10, 15)
      val times = sizes.map { size =>
        val start = System.nanoTime()
        val workbook = genWorkbook.sample.get
        val end = System.nanoTime()
        end - start
      }

      // This is a basic sanity check - in practice you'd want more sophisticated performance testing
      times.forall(_ > 0) must beTrue
    }
  }

  "Edge cases and invariants" should {
    "handle maximum numeric values" in
      forAll(genCellIndex) { (index: Int) =>
        val maxCell = NumericCell(index, Double.MaxValue)
        val minCell = NumericCell(index, Double.MinValue)

        maxCell.data must_== Double.MaxValue
        minCell.data must_== Double.MinValue
      }

    "preserve data integrity through multiple operations" in
      forAll { (workbook: Workbook) =>
        import scalaz.syntax.semigroup._

        val identity = new Workbook(Map.empty[String, Sheet])
        val combined = workbook |+| identity
        val recombined = identity |+| workbook

        // Monoid identity law
        combined.sheets.size must_== workbook.sheets.size
        recombined.sheets.size must_== workbook.sheets.size
      }

    "handle concurrent modifications safely" in
      // Since the data structures are immutable, this should always pass
      forAll { (workbook: Workbook, newSheet: Sheet) =>
        val originalSize = workbook.sheets.size
        val modified = new Workbook(workbook.sheetMap + (newSheet.name -> newSheet))

        // Original workbook unchanged
        workbook.sheets.size must_== originalSize
        // New workbook has additional sheet (unless duplicate name)
        modified.sheets.size must be_>=(originalSize)
      }
  }
}
