package info.folone.scala.poi

import java.util.concurrent.atomic.AtomicLong
import scala.util.{Failure, Success, Try}

// Lazy evaluation support for large datasets
trait LazyWorkbookOps {
  def lazySheets: Stream[Sheet]
  def lazyRows(sheetName: String): Stream[Row]
  def lazyCells(sheetName: String, rowIndex: Int): Stream[Cell]
}

// Bulk operations for better performance
object BulkOperations {

  def createCellsInBulk(rowIndex: Int, cellData: Seq[(Int, Any)]): Set[Cell] =
    cellData.map { case (index, data) =>
      data match {
        case s: String => StringCell(index, s): Cell
        case d: Double => NumericCell(index, d): Cell
        case b: Boolean => BooleanCell(index, b): Cell
        case d: java.util.Date => DateCell(index, d): Cell
        case _ => StringCell(index, data.toString): Cell
      }
    }.toSet

  def createRowsInBulk(rowData: Seq[(Int, Seq[(Int, Any)])]): Set[Row] =
    rowData.map { case (rowIndex, cellData) =>
      Row(rowIndex)(createCellsInBulk(rowIndex, cellData))
    }.toSet

  def applyStylingInBulk(
    cellAddresses: Seq[CellAddr],
    style: CellStyle
  ): Map[CellStyle, List[CellAddr]] =
    Map(style -> cellAddresses.toList)

}
