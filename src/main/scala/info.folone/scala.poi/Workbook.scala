package info.folone.scala.poi

import org.apache.poi._
import ss.usermodel.{Workbook ⇒ POIWorkbook, WorkbookFactory}
import ss.usermodel.{ Row ⇒ POIRow, Cell ⇒ POICell, CellStyle ⇒ POICellStyle }
import java.io.{ File, FileOutputStream, OutputStream, InputStream }

import scalaz._
import std.map._
import std.list._
import syntax.applicative._
import syntax.monoid._
import effect.IO


class Workbook(val sheetMap: Map[String, Sheet], format: WorkbookVersion = HSSF) {
  val sheets: Set[Sheet] = sheetMap.values.toSet

  private def setPoiCell(defaultRowHeight: Short, row: POIRow, cell: Cell, poiCell: POICell): Unit = {
    cell match {
      case StringCell(index, data)  ⇒
        poiCell.setCellValue(data)
        val cellHeight = (data.split("\n").size) * defaultRowHeight
        if(cellHeight > row.getHeight)
          row setHeight cellHeight.asInstanceOf[Short]
      case BooleanCell(index, data) ⇒ poiCell.setCellValue(data)
      case NumericCell(index, data) ⇒ poiCell.setCellValue(data)
      case FormulaCell(index, data) ⇒ poiCell.setCellFormula(data)
      case styledCell@StyledCell(_, _) ⇒ {
        setPoiCell(defaultRowHeight, row, styledCell.nestedCell, poiCell)
      }
    }
  }

  private lazy val book = {
    val workbook = format match {
      case HSSF ⇒ new org.apache.poi.hssf.usermodel.HSSFWorkbook
      case XSSF ⇒ new org.apache.poi.xssf.usermodel.XSSFWorkbook
      case SXSSF ⇒ new org.apache.poi.xssf.streaming.SXSSFWorkbook(-1)
    }
    sheets foreach { sh ⇒
      val Sheet((name), (rows)) = sh
      val sheet = workbook createSheet name
      rows foreach { rw ⇒
        val Row((index), (cells)) = rw
        val row = sheet createRow index
        cells foreach { cl ⇒
          val poiCell = row createCell cl.index
          setPoiCell(sheet.getDefaultRowHeight,row, cl, poiCell)
        }
      }
    }
    workbook
  }

  private def applyStyling(wb: POIWorkbook, styles: Map[CellStyle, List[CellAddr]]) = {
    def pStyle(cs: CellStyle): POICellStyle = {
      val pStyle = wb.createCellStyle()
      pStyle setFont cs.font.appliedTo(wb.createFont)
      pStyle setDataFormat cs.dataFormat.appliedTo(wb.createDataFormat)
      pStyle
    }

    styles.keys.foreach { s ⇒
      val cellAddresses = styles(s)
      val cellStyle = pStyle(s)
      cellAddresses.foreach { addr ⇒
        val cell = wb.getSheet(addr.sheet).getRow(addr.row).getCell(addr.col)
        cell setCellStyle cellStyle
      }
    }
    wb
  }

  def styled(styles: Map[CellStyle, List[CellAddr]]): Workbook = {
    applyStyling(book, styles)
    this
  }

  def styled: Workbook = {
    val styles: Map[CellStyle, List[CellAddr]] = sheets.foldRight(Map[CellStyle, List[CellAddr]]()) {
      case (sheet, map) => map |+| sheet.styles
    }
    styled(styles)
  }

  /**
    * Fits column's width to maximum width of non-empty cell at cell address.
    * Quite expensive. Use as late as possible.
    *
    * @param addrs addresses of cells, which columns size should fit cells content
    */
  def autosizeColumns(addrs: Set[CellAddr]): Workbook = {
    addrs foreach { a ⇒ book.getSheet(a.sheet).autoSizeColumn(a.col) }
    this
  }

  def safeToFile(path: String): Result[Unit] = {
    def close(resource: {def close(): Unit}): IO[Unit] = IO { resource.close() }
    val action = IO { new FileOutputStream(new File(path)) }.bracket(close) { file ⇒
      IO { book write file }
    }
    EitherT(action.catchLeft)
  }

  def safeToStream(stream: OutputStream): Result[Unit] = {
    val action = IO { book write stream }
    EitherT(action.catchLeft)
  }

  def asPoi: POIWorkbook = book

  override def toString: String = Show[Workbook].shows(this)
  override def equals(obj: Any): Boolean =
    obj != null && obj.isInstanceOf[Workbook] && Equal[Workbook].equal(obj.asInstanceOf[Workbook], this)
  override def hashCode: Int = this.sheetMap.hashCode

}

object Workbook {

  def apply(sheets: Set[Sheet], format: WorkbookVersion = HSSF): Workbook =
    new Workbook(sheets.map( s => (s.name, s)).toMap, format)

  def apply(path: String): Result[Workbook] = {
    val action: IO[File] = IO { new File(path) }
    EitherT((action <*> fromFile(HSSF)).catchLeft)
  }

  def apply(path: String, format: WorkbookVersion): Result[Workbook] = {
    val action: IO[File] = IO { new File(path) }
    EitherT((action <*> fromFile(format)).catchLeft)
  }

  def apply(is: InputStream): Result[Workbook] =
    EitherT(fromInputStream(HSSF).map(f ⇒ f(is)).catchLeft)
  def apply(is: InputStream, format: WorkbookVersion): Result[Workbook] =
    EitherT(fromInputStream(format).map(f ⇒ f(is)).catchLeft)

  private def fromFile(format: WorkbookVersion) =
    readWorkbook[File](format, f => WorkbookFactory.create(f))

  private def fromInputStream(format: WorkbookVersion) =
    readWorkbook[InputStream](format, t => WorkbookFactory.create(t))

  private def readWorkbook[T](format: WorkbookVersion, workbookF: T => POIWorkbook) = IO { is: T ⇒
    val wb   = workbookF(is)
    val data = for {
      i     ← 0 until wb.getNumberOfSheets
      sheet = wb.getSheetAt(i) if (sheet != null)
      k     ← 0 to sheet.getLastRowNum
      row   = sheet.getRow(k) if (row != null)
      j     ← 0 until row.getLastCellNum
      cell  = row.getCell(j) if (cell != null)
        } yield (sheet, row, cell)
    val result = data.groupBy(_._1).mapValues { lst ⇒
      lst.map { case (s, r, c) ⇒ (r, c)}.groupBy(_._1)
        .mapValues(l ⇒ l.map { case (r, c) ⇒ c }.toList)
    }
    val sheets = result.map { case (sheet, rowLst) ⇒
      Sheet(sheet.getSheetName) {
        rowLst.map { case (row, cellLst) ⇒
          Row(row.getRowNum) {
            cellLst.flatMap { cell ⇒
              val index = cell.getColumnIndex
              cell.getCellType match {
                case POICell.CELL_TYPE_NUMERIC ⇒
                  Some(NumericCell(index, cell.getNumericCellValue))
                case POICell.CELL_TYPE_BOOLEAN ⇒
                  Some(BooleanCell(index, cell.getBooleanCellValue))
                case POICell.CELL_TYPE_FORMULA ⇒
                  Some(FormulaCell(index, cell.getCellFormula))
                case POICell.CELL_TYPE_STRING  ⇒
                  Some(StringCell(index, cell.getStringCellValue))
                case _                      ⇒ None
              }
            }.toSet
          }
        }.toSet
      }
    }.toSet
    Workbook(sheets)
  }
}

class Sheet(val name: String)(val rows: Set[Row]) {
  def styles: Map[CellStyle, List[CellAddr]] = rows.foldRight(Map[CellStyle, List[CellAddr]]()) {
    case (row, map) => map |+| row.styles(name)
  }
  override def toString: String = Show[Sheet].shows(this)
  override def equals(obj: Any): Boolean =
    obj != null && obj.isInstanceOf[Sheet] && Equal[Sheet].equal(obj.asInstanceOf[Sheet], this)
  override def hashCode: Int = name.hashCode + rows.hashCode
}
object Sheet {
  def apply(name: String)(rows: Set[Row]): Sheet = new Sheet(name)(rows)
  def unapply(sheet: Sheet): Option[(String, Set[Row])] = Some((sheet.name, sheet.rows))
}
class Row(val index: Int)(val cells: Set[Cell]) {
  def styles(sheet: String): Map[CellStyle, List[CellAddr]] = cells.foldRight(Map[CellStyle, List[CellAddr]]()) {
    case (cell, map) => map |+| cell.styles(sheet, index)
  }
  override def toString: String = Show[Row].shows(this)
  override def equals(obj: Any): Boolean =
    obj != null && obj.isInstanceOf[Row] && Equal[Row].equal(obj.asInstanceOf[Row], this)
  override def hashCode: Int = index.hashCode + cells.hashCode
}
object Row {
  def apply(index: Int)(cells: Set[Cell]): Row = new Row(index)(cells)
  def unapply(row: Row): Option[(Int, Set[Cell])] = Some((row.index, row.cells))
}
sealed abstract class Cell(val index: Int, val style: Option[CellStyle]) {
  def styles(sheet: String, row: Int): Map[CellStyle, List[CellAddr]] = style match {
    case None => Map()
    case Some(s) => Map(s -> List(CellAddr(sheet, row, index)))
  }
  override def toString: String = Show[Cell].shows(this)
}
case class StringCell(override val index: Int, data: String) extends Cell(index, None)
case class NumericCell(override val index: Int, data: Double) extends Cell(index, None)
case class BooleanCell(override val index: Int, data: Boolean) extends Cell(index, None)
class FormulaCell(override val index: Int, val data: String) extends Cell(index, None) {
  import equalities.formulaCellEqualInstance
  override def equals(obj: Any) =
    obj != null && obj.isInstanceOf[FormulaCell] && Equal[FormulaCell].equal(obj.asInstanceOf[FormulaCell], this)
  override def hashCode: Int = index.hashCode + data.hashCode
}
object FormulaCell {
  def apply(index: Int, data: String): FormulaCell =
    new FormulaCell(index, data.dropWhile(_ == '='))
  def unapply(cell: FormulaCell): Option[(Int, String)] = Some((cell.index, cell.data))
}
class StyledCell private (override val index: Int, override val style: Option[CellStyle], val nestedCell: Cell) extends Cell(index, style) {
  import equalities.styleCellEqualInstance
  def unstyledCell: Cell = if (nestedCell.isInstanceOf[StyledCell]) nestedCell.asInstanceOf[StyledCell].nestedCell else nestedCell
  override def equals(obj: Any) =
    obj != null && obj.isInstanceOf[StyledCell] && Equal[StyledCell].equal(obj.asInstanceOf[StyledCell], this)
  override def hashCode: Int = index.hashCode + style.hashCode + nestedCell.hashCode()
}
object StyledCell {
  def apply(cell: Cell, style: CellStyle): StyledCell = new StyledCell(cell.index, Some(style), cell)
  def unapply(cell: StyledCell): Option[(Cell, CellStyle)] = cell.style map { case style => (cell.nestedCell, style) }
}

case class CellAddr(sheet: String, row: Int, col: Int)

sealed abstract class WorkbookVersion
case object HSSF extends WorkbookVersion
case object XSSF extends WorkbookVersion
case object SXSSF extends WorkbookVersion
