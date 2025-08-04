package info.folone.scala.poi.benchmarks

import java.util.concurrent.TimeUnit
import org.openjdk.jmh.annotations._
import org.openjdk.jmh.infra.Blackhole
import info.folone.poi._
import info.folone.poi.async.AsyncOperations._
import scala.concurrent.Await
import scala.concurrent.duration._

@BenchmarkMode(Array(Mode.Throughput, Mode.AverageTime))
@OutputTimeUnit(TimeUnit.MILLISECONDS)
@State(Scope.Benchmark)
@Fork(1)
@Warmup(iterations = 5, time = 1, timeUnit = TimeUnit.SECONDS)
@Measurement(iterations = 10, time = 1, timeUnit = TimeUnit.SECONDS)
class AsyncPoiBenchmarks {

  @Param(Array("100", "1000"))
  var dataSize: Int = _

  var workbook: Workbook = _
  var testData: Seq[Seq[String]] = _

  @Setup(Level.Trial)
  def setupData(): Unit = {
    testData = (1 to dataSize).map { row =>
      (1 to 10).map { col =>
        s"Data-$row-$col"
      }
    }
    val sheets = Set(Sheet("Sheet1") { (0 until dataSize).map { i =>
      Row(i) { Set(StringCell(0, s"data-$i")) }
    }.toSet })
    workbook = Workbook(sheets)
  }

  @Benchmark
  def createWorkbookAsyncBenchmark(bh: Blackhole): Unit = {
    val future = createWorkbookAsync(workbook.sheets)
    val result = Await.result(future, 10.seconds)
    bh.consume(result)
  }

  @Benchmark
  def saveWorkbookAsyncBenchmark(bh: Blackhole): Unit = {
    val path = java.nio.file.Files.createTempFile("benchmark", ".xlsx").toString
    val future = saveWorkbookAsync(workbook, path)
    val result = Await.result(future, 10.seconds)
    bh.consume(result)
  }

  @Benchmark
  def loadWorkbookAsyncBenchmark(bh: Blackhole): Unit = {
    val path = java.nio.file.Files.createTempFile("benchmark", ".xlsx").toString
    workbook.toFile(path)
    val future = loadWorkbookAsync(path)
    val result = Await.result(future, 10.seconds)
    bh.consume(result)
  }

  @Benchmark
  def processDataStreamAsyncBenchmark(bh: Blackhole): Unit = {
    val stream = (1 to dataSize).toStream.map(i => Seq(s"data-$i"))
    val future = processDataStreamAsync(stream, (data: Seq[String]) => data, "StreamSheet")
    val result = Await.result(future, 10.seconds)
    bh.consume(result)
  }
}
