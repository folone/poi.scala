package info.folone.poi.benchmarks

import java.util.concurrent.TimeUnit
import org.openjdk.jmh.annotations._
import org.openjdk.jmh.infra.Blackhole
import info.folone.poi._
import info.folone.poi.scalaz._
import java.util.Date
import scala.util.Random
import _root_.scalaz.syntax.semigroup._

@BenchmarkMode(Array(Mode.Throughput, Mode.AverageTime))
@OutputTimeUnit(TimeUnit.MILLISECONDS)
@State(Scope.Benchmark)
@Fork(1)
@Warmup(iterations = 3, time = 1, timeUnit = TimeUnit.SECONDS)
@Measurement(iterations = 5, time = 1, timeUnit = TimeUnit.SECONDS)
class PoiBenchmarks {

  @Param(Array("1000"))
  var dataSize: Int = _

  var largeWorkbook: Workbook = _
  var smallWorkbook: Workbook = _
  var mediumWorkbook: Workbook = _
  var testData: Seq[Seq[String]] = _

  @Setup(Level.Trial)
  def setupData(): Unit = {
    val random = new Random(42)

    testData = (1 to dataSize).map {
      row =>
        (1 to 10).map {
          col =>
            s"Data-${row}-${col}-${random.nextInt(1000)}"
        }
    }

    largeWorkbook = BenchmarkUtils.createWorkbook(5000, "Large")
    smallWorkbook = BenchmarkUtils.createWorkbook(100, "Small")
    mediumWorkbook = BenchmarkUtils.createWorkbook(1000, "Medium")
  }

  // Core benchmarks - essential tests for performance regression detection
  @Benchmark
  def cellCreationBenchmark(bh: Blackhole): Unit = {
    val cells = (0 until dataSize).map {
      i =>
        StringCell(i, s"BenchmarkCell-$i")
    }
    bh.consume(cells)
  }

  @Benchmark
  def workbookCreationBenchmark(bh: Blackhole): Unit = {
    val workbook = BenchmarkUtils.createWorkbook(dataSize, "Benchmark")
    bh.consume(workbook)
  }

  @Benchmark
  def cellLookupBenchmark(bh: Blackhole): Unit = {
    val sheet = largeWorkbook.sheets.head
    val results = (0 until 100).map {
      i =>
        sheet.rows.find(_.index == i % dataSize)
    }
    bh.consume(results)
  }

  @Benchmark
  def workbookCombinationBenchmark(bh: Blackhole): Unit = {
    val combined = smallWorkbook |+| mediumWorkbook
    bh.consume(combined)
  }
}
