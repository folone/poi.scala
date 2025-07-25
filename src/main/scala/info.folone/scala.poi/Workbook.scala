package info.folone.scala.poi

import org.apache.poi._
import ss.usermodel.{
  DateUtil,
  WorkbookFactory,
  Cell => POICell,
  CellType => POICellType,
  CellStyle => POICellStyle,
  Row => POIRow,
  Workbook => POIWorkbook
}
import java.io.{File, FileOutputStream, OutputStream, InputStream}

import scalaz._
import std.map._
import std.list._
import syntax.applicative._
import syntax.monoid._
import effect.IO
import scala.language.reflectiveCalls

class Workbook(val sheetMap: Map[String, Sheet], format: WorkbookVersion = HSSF) {
  val sheets: Set[Sheet] = sheetMap.values.toSet

  @annotation.tailrec
  private def setPoiCell(defaultRowHeight: Short, row: POIRow, cell: Cell, poiCell: POICell): Unit = {
    cell match {
      case StringCell(index, data) =>
        poiCell.setCellValue(data)
        val cellHeight = data.split("\n").length * defaultRowHeight
        if (cellHeight > row.getHeight)
          row setHeight cellHeight.asInstanceOf[Short]
      case BooleanCell(index, data) => poiCell.setCellValue(data)
      case DateCell(index, data) => poiCell.setCellValue(data)
      case NumericCell(index, data) => poiCell.setCellValue(data)
      case FormulaCell(index, data) => poiCell.setCellFormula(data)
      case BlankCell(index) => poiCell.setBlank()
      case ErrorCell(index, errorCode) => poiCell.setCellErrorValue(errorCode)
      case styledCell @ StyledCell(_, _) => {
        setPoiCell(defaultRowHeight, row, styledCell.nestedCell, poiCell)
      }
    }
  }

  private lazy val book = {
    val workbook = format match {
      case HSSF => new org.apache.poi.hssf.usermodel.HSSFWorkbook
      case XSSF => new org.apache.poi.xssf.usermodel.XSSFWorkbook
      case SXSSF => new org.apache.poi.xssf.streaming.SXSSFWorkbook(-1)
    }
    sheets foreach { sh =>
      val Sheet(name, rows) = sh
      val sheet = workbook.createSheet(name)
      rows foreach { rw =>
        val Row(index, cells) = rw
        val row = sheet.createRow(index)
        cells foreach { cl =>
          val poiCell = row.createCell(cl.index)
          setPoiCell(sheet.getDefaultRowHeight, row, cl, poiCell)
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

      // Apply alignment
      cs.alignment.foreach(a => pStyle.setAlignment(a.toPOI))
      cs.verticalAlignment.foreach(va => pStyle.setVerticalAlignment(va.toPOI))

      // Apply colors
      cs.backgroundColor.foreach { color =>
        pStyle.setFillForegroundColor(color.toIndex)
        pStyle.setFillPattern(org.apache.poi.ss.usermodel.FillPatternType.SOLID_FOREGROUND)
      }
      cs.foregroundColor.foreach(color => pStyle.setFillForegroundColor(color.toIndex))

      // Apply borders
      cs.borders.foreach { borders =>
        borders.top.foreach(b => pStyle.setBorderTop(b.toPOI))
        borders.bottom.foreach(b => pStyle.setBorderBottom(b.toPOI))
        borders.left.foreach(b => pStyle.setBorderLeft(b.toPOI))
        borders.right.foreach(b => pStyle.setBorderRight(b.toPOI))

        borders.topColor.foreach(c => pStyle.setTopBorderColor(c.toIndex))
        borders.bottomColor.foreach(c => pStyle.setBottomBorderColor(c.toIndex))
        borders.leftColor.foreach(c => pStyle.setLeftBorderColor(c.toIndex))
        borders.rightColor.foreach(c => pStyle.setRightBorderColor(c.toIndex))
      }

      // Apply other properties
      pStyle.setWrapText(cs.wrapText)
      pStyle.setLocked(cs.locked)
      pStyle.setHidden(cs.hidden)
      pStyle.setRotation(cs.rotation)
      pStyle.setIndention(cs.indent)

      pStyle
    }

    styles.keys.foreach { s =>
      val cellAddresses = styles(s)
      val cellStyle = pStyle(s)
      cellAddresses.foreach { addr =>
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

  /** Fits column's width to maximum width of non-empty cell at cell address. Quite expensive. Use as late as possible.
    *
    * @param addrs
    *   addresses of cells, which columns size should fit cells content
    */
  def autosizeColumns(addrs: Set[CellAddr]): Workbook = {
    addrs foreach { a => book.getSheet(a.sheet).autoSizeColumn(a.col) }
    this
  }

  def safeToFile(path: String): Result[Unit] = {
    def close(resource: FileOutputStream): IO[Unit] = IO { resource.close() }
    val action = IO { new FileOutputStream(new File(path)) }.bracket(close) { file =>
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
    obj != null && obj.isInstanceOf[Workbook] && scalaz.Equal[Workbook].equal(obj.asInstanceOf[Workbook], this)
  override def hashCode: Int = this.sheetMap.hashCode

}

object Workbook {

  def apply(sheets: Set[Sheet], format: WorkbookVersion = HSSF): Workbook =
    new Workbook(sheets.map(s => (s.name, s)).toMap, format)

  def apply(path: String): Result[Workbook] = {
    val action: IO[File] = IO { new File(path) }
    EitherT((action <*> fromFile(HSSF)).catchLeft)
  }

  def apply(path: String, format: WorkbookVersion): Result[Workbook] = {
    val action: IO[File] = IO { new File(path) }
    EitherT((action <*> fromFile(format)).catchLeft)
  }

  def apply(is: InputStream): Result[Workbook] =
    EitherT(fromInputStream(HSSF).map(f => f(is)).catchLeft)
  def apply(is: InputStream, format: WorkbookVersion): Result[Workbook] =
    EitherT(fromInputStream(format).map(f => f(is)).catchLeft)

  private def fromFile(format: WorkbookVersion) =
    readWorkbook[File](format, f => WorkbookFactory.create(f))

  private def fromInputStream(format: WorkbookVersion) =
    readWorkbook[InputStream](format, t => WorkbookFactory.create(t))

  private def readWorkbook[T](format: WorkbookVersion, workbookF: T => POIWorkbook) =
    IO { (is: T) =>
      val wb = workbookF(is)
      val data = for {
        i <- 0 until wb.getNumberOfSheets
        sheet = wb.getSheetAt(i) if (sheet != null)
        k <- 0 to sheet.getLastRowNum
        row = sheet.getRow(k) if (row != null)
        j <- 0 until row.getLastCellNum
        cell = row.getCell(j) if (cell != null)
      } yield (sheet, row, cell)
      val result = data.groupBy(_._1).mapValues { lst =>
        lst
          .map { case (s, r, c) => (r, c) }
          .groupBy(_._1)
          .mapValues(l => l.map { case (r, c) => c }.toList)
      }
      val sheets = result.map { case (sheet, rowLst) =>
        Sheet(sheet.getSheetName) {
          rowLst.map { case (row, cellLst) =>
            Row(row.getRowNum) {
              cellLst.flatMap { cell =>
                val index = cell.getColumnIndex
                cell.getCellType match {
                  case POICellType.NUMERIC =>
                    if (DateUtil.isCellDateFormatted(cell))
                      Some(DateCell(index, cell.getDateCellValue))
                    else
                      Some(NumericCell(index, cell.getNumericCellValue))
                  case POICellType.BOOLEAN =>
                    Some(BooleanCell(index, cell.getBooleanCellValue))
                  case POICellType.FORMULA =>
                    Some(FormulaCell(index, cell.getCellFormula))
                  case POICellType.STRING =>
                    Some(StringCell(index, cell.getStringCellValue))
                  case POICellType.BLANK =>
                    Some(BlankCell(index))
                  case POICellType.ERROR =>
                    Some(ErrorCell(index, cell.getErrorCellValue))
                  case _ => None
                }
              }.toSet
            }
          }.toSet
        }
      }.toSet
      Workbook(sheets)
    }
}
