package info.folone.scala.poi

import org.apache.poi._
import ss.usermodel.{Workbook ⇒ POIWorkbook, WorkbookFactory}
import ss.usermodel.{ Cell ⇒ POICell, CellStyle ⇒ POICellStyle }
import java.io.{ File, FileOutputStream, OutputStream, InputStream, FileInputStream }

import scalaz._
import std.option._
import syntax.applicative._
import syntax.std.option._
import syntax.std.boolean._
import effect.IO


class Workbook(val sheets: Set[Sheet], format: WorkbookVersion = HSSF) {
  private lazy val book = {
    val workbook = format match {
      case HSSF ⇒ new org.apache.poi.hssf.usermodel.HSSFWorkbook
      case XSSF ⇒ new org.apache.poi.xssf.usermodel.XSSFWorkbook
    }
    sheets foreach { sh ⇒
      val Sheet((name), (rows)) = sh
      val sheet = workbook createSheet name
      rows foreach { rw ⇒
        val Row((index), (cells)) = rw
        val row = sheet createRow index
        cells foreach { cl ⇒
          val index = cl.index
          val cell = row createCell index
          cl match {
            case StringCell(index, data)  ⇒
              cell.setCellValue(data)
              val height = data.split("\n").size * row.getHeight
              row setHeight height.asInstanceOf[Short]
            case BooleanCell(index, data) ⇒ cell.setCellValue(data)
            case NumericCell(index, data) ⇒ cell.setCellValue(data)
            case FormulaCell(index, data) ⇒ cell.setCellFormula(data)
          }
        }
      }
    }
    workbook
  }

  private def applyStyling(wb: POIWorkbook, styles: Map[CellStyle, List[CellAddr]]) = {
    def pStyle(cs: CellStyle): POICellStyle = {
      val pStyle = wb.createCellStyle()
      pStyle setFont cs.font.appliedTo(wb.createFont)
      pStyle
    }

    styles.keys.foreach { s ⇒
      val cellAdrresses = styles(s)
      cellAdrresses.foreach { addr ⇒
        val cell = wb.getSheet(addr.sheet).getRow(addr.row).getCell(addr.col)
        cell setCellStyle pStyle(s)
      }
    }
    wb
  }

  def styled(styles: Map[CellStyle, List[CellAddr]]): Workbook = {
    applyStyling(book, styles)
    this
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

  @deprecated("Use safeToFile and unsafePerformIO where you need it", "2012-09-06")
  def toFile(path: String): Unit           = safeToFile(path).unsafePerformIO
  @deprecated("Use safeToStream and unsafePerformIO where you need it", "2012-09-06")
  def toStream(stream: OutputStream): Unit = safeToStream(stream).unsafePerformIO

  def safeToFile(path: String): IO[Throwable \/ Unit] = {
    def close(resource: {def close(): Unit}): IO[Unit] = IO { resource.close() }
    val action = IO { new FileOutputStream(new File(path)) }.bracket(close) { file ⇒
      IO { book write file }
    }
    action.catchLeft
  }

  def safeToStream(stream: OutputStream): IO[Throwable \/ Unit] = {
    val action = IO { book write stream }
    action.catchLeft
  }

  def asPoi: POIWorkbook = book

  override def toString: String = Show[Workbook].shows(this)
  override def equals(obj: Any): Boolean =
    obj != null && obj.isInstanceOf[Workbook] && Equal[Workbook].equal(obj.asInstanceOf[Workbook], this)
  override def hashCode: Int = this.sheets.hashCode

}

object Workbook {
  def apply(sheets: Set[Sheet], format: WorkbookVersion = HSSF): Workbook = new Workbook(sheets, format)

  def apply(path: String): IO[Throwable \/ Workbook] = {
    val action: IO[InputStream] = IO { new FileInputStream(path) }
      (action <*> fromInputStream(HSSF)).catchLeft
  }
  def apply(path: String, format: WorkbookVersion): IO[Throwable \/ Workbook] = {
    val action: IO[InputStream] = IO { new FileInputStream(path) }
      (action <*> fromInputStream(format)).catchLeft
  }

  def apply(is: InputStream): IO[Throwable \/ Workbook] =
    fromInputStream(HSSF).map(f ⇒ f(is)).catchLeft
  def apply(is: InputStream, format: WorkbookVersion): IO[Throwable \/ Workbook] =
    fromInputStream(format).map(f ⇒ f(is)).catchLeft

  private def fromInputStream(format: WorkbookVersion) = IO { is: InputStream ⇒
    val wb   = WorkbookFactory.create(is)
    val data = for {
      i     ← 0 until wb.getNumberOfSheets
      sheet = wb.getSheetAt(i) if (sheet != null)
      k     ← 1 to sheet.getLastRowNum
      row   = sheet.getRow(k) if (row != null)
      j     ← 1 until row.getLastCellNum
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
  override def toString: String = Show[Row].shows(this)
  override def equals(obj: Any): Boolean =
    obj != null && obj.isInstanceOf[Row] && Equal[Row].equal(obj.asInstanceOf[Row], this)
  override def hashCode: Int = index.hashCode + cells.hashCode
}
object Row {
  def apply(index: Int)(cells: Set[Cell]): Row = new Row(index)(cells)
  def unapply(row: Row): Option[(Int, Set[Cell])] = Some((row.index, row.cells))
}
sealed abstract class Cell(val index: Int) {
  override def toString: String = Show[Cell].shows(this)
}
case class StringCell(override  val index: Int, data: String)  extends Cell(index)
case class NumericCell(override  val index: Int, data: Double) extends Cell(index)
case class BooleanCell(override val index: Int, data: Boolean) extends Cell(index)
class FormulaCell(override val index: Int, val data: String)   extends Cell(index)
object FormulaCell {
  def apply(index: Int, data: String): FormulaCell =
    new FormulaCell(index, data.dropWhile(_ == '='))
  def unapply(cell: FormulaCell): Option[(Int, String)] = Some((cell.index, cell.data))
}

case class CellAddr(sheet: String, row: Int, col: Int)

sealed abstract class WorkbookVersion
case object HSSF extends WorkbookVersion
case object XSSF extends WorkbookVersion
