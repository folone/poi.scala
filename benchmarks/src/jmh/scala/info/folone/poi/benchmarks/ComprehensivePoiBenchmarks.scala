package info.folone.poi.benchmarks

import _root_.scalaz.syntax.semigroup._
import info.folone.poi._
import info.folone.poi.scalaz._
import java.util.concurrent.TimeUnit
import java.util.Date
import org.openjdk.jmh.annotations._
import org.openjdk.jmh.infra.Blackhole
import scala.util.Random

/**
 * Comprehensive benchmarks with full parameter matrix - only run on master branch
 * This is the full suite that was previously in PoiBenchmarks.scala
 */
@BenchmarkMode(Array(Mode.Throughput, Mode.AverageTime))
@OutputTimeUnit(TimeUnit.MILLISECONDS)
@State(Scope.Benchmark)
@Fork(1)
@Warmup(iterations = 5, time = 1, timeUnit = TimeUnit.SECONDS)
@Measurement(iterations = 10, time = 1, timeUnit = TimeUnit.SECONDS)
class ComprehensivePoiBenchmarks {

  @Param(Array("100", "1000", "5000"))
  var dataSize: Int = _

  var largeWorkbook: Workbook = _
  var smallWorkbook: Workbook = _
  var mediumWorkbook: Workbook = _
  var testData: Seq[Seq[String]] = _

  @Setup(Level.Trial)
  def setupData(): Unit = {
    val random = new Random(42)

    testData = (1 to dataSize).map { row =>
      (1 to 10).map { col =>
        s"Data-${row}-${col}-${random.nextInt(1000)}"
      }
    }

    largeWorkbook = BenchmarkUtils.createWorkbook(5000, "Large")
    smallWorkbook = BenchmarkUtils.createWorkbook(100, "Small")
    mediumWorkbook = BenchmarkUtils.createWorkbook(1000, "Medium")
  }

  @Benchmark
  def cellCreationBenchmark(bh: Blackhole): Unit = {
    val cells = (0 until dataSize).map { i =>
      StringCell(i, s"BenchmarkCell-$i")
    }
    bh.consume(cells)
  }

  @Benchmark
  def rowCreationBenchmark(bh: Blackhole): Unit = {
    val rows = (0 until dataSize).map { rowIndex =>
      val cells: Set[Cell] = (0 until 10).map { colIndex =>
        StringCell(colIndex, s"Row-$rowIndex-Col-$colIndex"): Cell
      }.toSet
      Row(rowIndex)(cells)
    }
    bh.consume(rows)
  }

  @Benchmark
  def sheetCreationBenchmark(bh: Blackhole): Unit = {
    val random = new Random(42)
    val rows = (0 until dataSize).map { rowIndex =>
      val cells: Set[Cell] = (0 until 10).map { colIndex =>
        StringCell(colIndex, s"Sheet-$rowIndex-Col-$colIndex"): Cell
      }.toSet
      Row(rowIndex)(cells)
    }.toSet

    val sheet = Sheet("BenchmarkSheet")(rows)
    bh.consume(sheet)
  }

  @Benchmark
  def workbookCreationBenchmark(bh: Blackhole): Unit = {
    val workbook = BenchmarkUtils.createWorkbook(dataSize, "Benchmark")
    bh.consume(workbook)
  }

  @Benchmark
  def cellLookupBenchmark(bh: Blackhole): Unit = {
    val sheet = largeWorkbook.sheets.head
    val results = (0 until 100).map { i =>
      sheet.rows.find(_.index == i % dataSize)
    }
    bh.consume(results)
  }

  @Benchmark
  def dataTransformationBenchmark(bh: Blackhole): Unit = {
    val sheet = largeWorkbook.sheets.head
    val transformedRows = sheet.rows.map { row =>
      val newCells = row.cells.map {
        case StringCell(index, data) => StringCell(index, data.toUpperCase)
        case other => other
      }
      Row(row.index)(newCells)
    }
    bh.consume(transformedRows)
  }

  @Benchmark
  def formulaCellsBenchmark(bh: Blackhole): Unit = {
    val formulas = Seq(
      "SUM(A1:A10)",
      "AVERAGE(B1:B100)",
      "MAX(C1:C50)",
      "MIN(D1:D25)",
      "COUNT(E1:E75)"
    )

    val cells = (0 until dataSize).map { i =>
      FormulaCell(i, formulas(i % formulas.length))
    }
    bh.consume(cells)
  }

  @Benchmark
  def unicodeDataBenchmark(bh: Blackhole): Unit = {
    val unicodeData = Seq(
      "测试数据",
      "テストデータ",
      "тестові дані",
      "δοκιμαστικά δεδομένα",
      "données de test"
    )

    val cells = (0 until dataSize).map { i =>
      StringCell(i, unicodeData(i % unicodeData.length))
    }
    bh.consume(cells)
  }

  @Benchmark
  def workbookCombinationBenchmark(bh: Blackhole): Unit = {
    val combined = smallWorkbook |+| mediumWorkbook
    bh.consume(combined)
  }

  @Benchmark
  def memoryIntensiveBenchmark(bh: Blackhole): Unit = {
    val workbooks = (1 to 10).map { i =>
      BenchmarkUtils.createWorkbook(dataSize / 10, s"Memory-$i")
    }

    val combined = workbooks.reduce(_ |+| _)
    bh.consume(combined)
  }

  @Benchmark
  def bulkDataProcessingBenchmark(bh: Blackhole): Unit = {
    val workbooks = (0 until 20).map(i => BenchmarkUtils.createWorkbook(50, s"Bulk-$i"))
    val combined = workbooks.reduce((wb1, wb2) => wb1 |+| wb2)
    bh.consume(combined.toString)
  }

}
