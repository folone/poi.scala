package info.folone.poi.benchmarks

import _root_.scalaz.syntax.semigroup._
import info.folone.poi._
import info.folone.poi.scalaz._
import java.util.Date
import java.util.concurrent.TimeUnit
import org.openjdk.jmh.annotations._
import org.openjdk.jmh.infra.Blackhole
import scala.util.Random

/**
 * Memory-specific benchmarks to monitor heap usage
 */
@BenchmarkMode(Array(Mode.SingleShotTime))
@OutputTimeUnit(TimeUnit.MILLISECONDS)
@State(Scope.Benchmark)
@Fork(1)
@Warmup(iterations = 2)
@Measurement(iterations = 3)
class MemoryBenchmarks {

  @Param(Array("5000"))
  var dataSize: Int = _

  @Benchmark
  def memoryAllocationBenchmark(bh: Blackhole): Unit = {
    val runtime = Runtime.getRuntime
    val beforeMemory = runtime.totalMemory() - runtime.freeMemory()

    val workbook = BenchmarkUtils.createWorkbook(dataSize, "Large")

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

}
