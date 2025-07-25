package info.folone.scala.poi

import java.util.concurrent.atomic.AtomicLong
import scala.util.{Try, Success, Failure}

// Memory monitoring utilities
object MemoryMonitor {
  private val runtime = Runtime.getRuntime
  private val allocatedMemory = new AtomicLong(0)

  def getCurrentMemoryUsage: MemoryUsage = {
    val total = runtime.totalMemory()
    val free = runtime.freeMemory()
    val used = total - free
    val max = runtime.maxMemory()

    MemoryUsage(
      used = used,
      total = total,
      max = max,
      free = free,
      usagePercentage = (used.toDouble / max.toDouble) * 100
    )
  }

  def checkMemoryThreshold(config: MemoryConfig): Boolean = {
    val usage = getCurrentMemoryUsage
    if (config.enableMonitoring && usage.used > config.maxMemoryThreshold) {
      if (config.logMemoryUsage) {
        System.err.println(s"Memory threshold exceeded: ${usage.usagePercentage}%")
      }
      false
    } else true
  }

  def forceGarbageCollection(): Unit = {
    System.gc()
    Thread.sleep(100) // Give GC time to run
  }

  def withMemoryMonitoring[T](config: MemoryConfig)(operation: => T): Try[T] = {
    val initialUsage = getCurrentMemoryUsage

    try {
      if (!checkMemoryThreshold(config)) {
        forceGarbageCollection()
        if (!checkMemoryThreshold(config)) {
          return Failure(new OutOfMemoryError("Memory threshold exceeded before operation"))
        }
      }

      val result = operation

      val finalUsage = getCurrentMemoryUsage
      if (config.logMemoryUsage) {
        println(s"Memory usage - Initial: ${initialUsage.usagePercentage}%, Final: ${finalUsage.usagePercentage}%")
      }

      Success(result)
    } catch {
      case oom: OutOfMemoryError =>
        forceGarbageCollection()
        Failure(oom)
      case ex: Exception =>
        Failure(ex)
    }
  }
}

case class MemoryUsage(
    used: Long,
    total: Long,
    max: Long,
    free: Long,
    usagePercentage: Double
)

// Lazy evaluation support for large datasets
trait LazyWorkbookOps {
  def lazySheets: Stream[Sheet]
  def lazyRows(sheetName: String): Stream[Row]
  def lazyCells(sheetName: String, rowIndex: Int): Stream[Cell]
}

// Bulk operations for better performance
object BulkOperations {

  def createCellsInBulk(rowIndex: Int, cellData: Seq[(Int, Any)]): Set[Cell] = {
    cellData.map { case (index, data) =>
      data match {
        case s: String => StringCell(index, s): Cell
        case d: Double => NumericCell(index, d): Cell
        case b: Boolean => BooleanCell(index, b): Cell
        case d: java.util.Date => DateCell(index, d): Cell
        case _ => StringCell(index, data.toString): Cell
      }
    }.toSet
  }

  def createRowsInBulk(rowData: Seq[(Int, Seq[(Int, Any)])]): Set[Row] = {
    rowData.map { case (rowIndex, cellData) =>
      Row(rowIndex)(createCellsInBulk(rowIndex, cellData))
    }.toSet
  }

  def applyStylingInBulk(
      cellAddresses: Seq[CellAddr],
      style: CellStyle
  ): Map[CellStyle, List[CellAddr]] = {
    Map(style -> cellAddresses.toList)
  }
}

// Performance monitoring for operations
class PerformanceTimer {
  private var startTime: Long = 0
  private var endTime: Long = 0

  def start(): PerformanceTimer = {
    startTime = System.nanoTime()
    this
  }

  def stop(): PerformanceTimer = {
    endTime = System.nanoTime()
    this
  }

  def elapsedMillis: Long = (endTime - startTime) / 1000000
  def elapsedNanos: Long = endTime - startTime

  def time[T](operation: => T): (T, Long) = {
    start()
    val result = operation
    stop()
    (result, elapsedMillis)
  }
}

object PerformanceTimer {
  def apply(): PerformanceTimer = new PerformanceTimer()

  def time[T](operation: => T): (T, Long) = {
    val timer = new PerformanceTimer()
    timer.time(operation)
  }
}
