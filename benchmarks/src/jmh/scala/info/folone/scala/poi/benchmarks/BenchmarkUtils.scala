package info.folone.scala.poi.benchmarks

import info.folone.poi._
import java.util.Date
import scala.util.Random

object BenchmarkUtils {

  def createWorkbook(size: Int, prefix: String): Workbook = {
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

}
