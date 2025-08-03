package info.folone.scala.poi.benchmarks

import java.util.concurrent.TimeUnit
import org.openjdk.jmh.annotations._
import org.openjdk.jmh.infra.Blackhole
import info.folone.scala.poi._
import java.util.Date
import scala.util.Random
import scalaz.syntax.semigroup._

/**
 * JMH benchmarks for poi.scala performance testing
 * Monitors memory usage, throughput, and latency for core operations
 */
@BenchmarkMode(Array(Mode.Throughput, Mode.AverageTime))
@OutputTimeUnit(TimeUnit.MILLISECONDS)
@State(Scope.Benchmark)
@Fork(1)
@Warmup(iterations = 5, time = 1, timeUnit = TimeUnit.SECONDS)
@Measurement(iterations = 10, time = 1, timeUnit = TimeUnit.SECONDS)
class PoiBenchmarks {

  // Test data setup
  @Param(Array("100", "1000", "5000"))
  var dataSize: Int = _

  var smallWorkbook: Workbook = _
  var mediumWorkbook: Workbook = _
  var largeWorkbook: Workbook = _
  var testData: Seq[Seq[String]] = _

  @Setup(Level.Trial)
  def setupData(): Unit = {
    val random = new Random(42) // Fixed seed for reproducible benchmarks

    // Generate test data
    testData = (1 to dataSize).map { row =>
      (1 to 10).map { col =>
        s"Data-${row}-${col}-${random.nextInt(1000)}"
      }
    }

    // Small workbook (baseline)
    smallWorkbook = createWorkbook(100, "Small")
    
    // Medium workbook
    mediumWorkbook = createWorkbook(1000, "Medium")
    
    // Large workbook
    largeWorkbook = createWorkbook(5000, "Large")
  }

  private def createWorkbook(size: Int, prefix: String): Workbook = {
    val random = new Random(42)
    val rows = (0 until size).map { rowIndex =>
      val cells: Set[Cell] = (0 until 10).map { colIndex =>
        (colIndex % 5 match {
          case 0 => StringCell(colIndex, s"$prefix-$rowIndex-$colIndex")
          case 1 => NumericCell(colIndex, random.nextDouble() * 1000)
          case 2 => BooleanCell(colIndex, random.nextBoolean())
          case 3 => DateCell(colIndex, new Date())
          case 4 => FormulaCell(colIndex, "SUM(A1:A10)")
        }): Cell
      }.toSet
      Row(rowIndex)(cells)
    }.toSet

    val sheet = Sheet(s"${prefix}Sheet")(rows)
    Workbook(Set(sheet))
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
        StringCell(colIndex, s"Sheet-$rowIndex-$colIndex"): Cell
      }.toSet
      Row(rowIndex)(cells)
    }.toSet

    val sheet = Sheet("BenchmarkSheet")(rows)
    bh.consume(sheet)
  }

  @Benchmark
  def workbookCreationBenchmark(bh: Blackhole): Unit = {
    val workbook = createWorkbook(dataSize, "Benchmark")
    bh.consume(workbook)
  }

  @Benchmark
  def workbookCombinationBenchmark(bh: Blackhole): Unit = {
    import scalaz.syntax.monoid._
    val combined = smallWorkbook |+| mediumWorkbook
    bh.consume(combined)
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
  def memoryIntensiveBenchmark(bh: Blackhole): Unit = {
    // Create multiple workbooks to test memory usage
    val workbooks = (1 to 10).map { i =>
      createWorkbook(dataSize / 10, s"Memory-$i")
    }
    
    // Combine them using monoid operations
    import scalaz.syntax.monoid._
    val combined = workbooks.reduce(_ |+| _)
    bh.consume(combined)
  }

  @Benchmark
  def bulkDataProcessingBenchmark(bh: Blackhole): Unit = {
    val workbooks = (0 until 20).map(i => createWorkbook(50, s"Bulk-$i"))
    val combined = workbooks.reduce((wb1, wb2) => wb1 |+| wb2)
    bh.consume(combined.toString)
  }
}

/**
 * Memory-specific benchmarks to monitor heap usage
 */
@BenchmarkMode(Array(Mode.SingleShotTime))
@OutputTimeUnit(TimeUnit.MILLISECONDS)
@State(Scope.Benchmark)
@Fork(1)
@Warmup(iterations = 3)
@Measurement(iterations = 5)
class MemoryBenchmarks {

  @Param(Array("1000", "5000", "10000"))
  var dataSize: Int = _

  @Benchmark
  def memoryAllocationBenchmark(bh: Blackhole): Unit = {
    val runtime = Runtime.getRuntime
    val beforeMemory = runtime.totalMemory() - runtime.freeMemory()

    val workbook = createLargeWorkbook(dataSize)
    
    val afterMemory = runtime.totalMemory() - runtime.freeMemory()
    val memoryUsed = afterMemory - beforeMemory

    bh.consume((workbook, memoryUsed))
  }

  @Benchmark
  def memoryEfficiencyBenchmark(bh: Blackhole): Unit = {
    // Test memory efficiency by creating and discarding many objects
    val workbooks = (1 to 100).map { i =>
      val rows = (0 until dataSize / 100).map { rowIndex =>
        val cells: Set[Cell] = Set(
          StringCell(0, s"Efficient-$i-$rowIndex"),
          NumericCell(1, i.toDouble * rowIndex)
        )
        Row(rowIndex)(cells)
      }.toSet
      
      val sheet = Sheet(s"Efficient-$i")(rows)
      Workbook(Set(sheet))
    }

    // Force garbage collection
    System.gc()
    
    val combined = workbooks.take(10).reduce { (wb1: Workbook, wb2: Workbook) =>
      wb1 |+| wb2
    }
    
    bh.consume(combined.toString)
  }

  private def createLargeWorkbook(size: Int): Workbook = {
    val random = new Random(42)
    val rows = (0 until size).map { rowIndex =>
      val cells: Set[Cell] = (0 until 20).map { colIndex => // More columns for memory pressure
        (colIndex % 6 match {
          case 0 => StringCell(colIndex, s"Large-$rowIndex-$colIndex-${random.nextInt(10000)}")
          case 1 => NumericCell(colIndex, random.nextDouble() * 1000000)
          case 2 => BooleanCell(colIndex, random.nextBoolean())
          case 3 => DateCell(colIndex, new Date(random.nextLong()))
          case 4 => FormulaCell(colIndex, "SUM(A1:Z1000)")
          case 5 => BlankCell(colIndex)
        }): Cell
      }.toSet
      Row(rowIndex)(cells)
    }.toSet

    val sheet = Sheet("LargeSheet")(rows)
    Workbook(Set(sheet))
  }
}