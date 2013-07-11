import org.apache.poi._
import hssf.usermodel._
import ss.usermodel.Cell
import java.io.{ File, FileOutputStream, OutputStream, InputStream, FileInputStream }
import scala.util.control.Exception.allCatch
import scalaz._
import std.option._
import syntax.applicative._
import syntax.std.option._
import syntax.std.boolean._
import effect.IO

package info.folone.scala.poi {

  class Workbook(val sheets: Set[Sheet]) {
    private lazy val book = {
      val workbook = new HSSFWorkbook
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

    private def applyStyling(wb: HSSFWorkbook, styles: Map[CellStyle, List[CellAddr]]) = {
      def pStyle(cs: CellStyle) = {
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
    def toFile(path: String)           = safeToFile(path).unsafePerformIO
    @deprecated("Use safeToStream and unsafePerformIO where you need it", "2012-09-06")
    def toStream(stream: OutputStream) = safeToStream(stream).unsafePerformIO

    def safeToFile(path: String) = {
      def close(resource: {def close(): Unit}) = IO { resource.close() }
      val action = IO { new FileOutputStream(new File(path)) }.bracket(close) { file ⇒
        IO { book write file }
      }
      action.catchLeft
    }

    def safeToStream(stream: OutputStream) = {
      val action = IO { book write stream }
      action.catchLeft
    }

    def asPoi = book

    override def toString = Show[Workbook].shows(this)
    override def equals(obj: Any) =
      obj != null && obj.isInstanceOf[Workbook] && Equal[Workbook].equal(obj.asInstanceOf[Workbook], this)

  }

  object Workbook {
    def apply(sheets: Set[Sheet]): Workbook = new Workbook(sheets)
    def apply(path: String): IO[Throwable \/ Workbook] = {
      val action: IO[InputStream] = IO { new FileInputStream(path) }
      (action <*> fromInputStream).catchLeft
    }
    def apply(is: InputStream): IO[Throwable \/ Workbook] =
      fromInputStream.map(f ⇒ f(is)).catchLeft

    private def fromInputStream = IO { is: InputStream ⇒
      val wb   = new HSSFWorkbook(is)
      val data = for {
        i     ← 0 until wb.getNumberOfSheets
        sheet = wb.getSheetAt(i) if (sheet != null)
        k     ← 1 to sheet.getLastRowNum
        row   = sheet.getRow(k) if (row != null)
        j     ← 1 until row.getLastCellNum
        cell  = row.getCell(j) if (cell != null)
          } yield (sheet, row, cell)
      val result = data.groupBy(_._1).mapValues(lst ⇒
        lst map { case (s,r,c) ⇒ (r,c)} groupBy(_._1)
          mapValues(lst ⇒ lst map { case   (r,c) ⇒ c } toList))
      val sheets = result.map { case (sheet, rowLst) ⇒
          Sheet(sheet.getSheetName) {
            rowLst map { case (row, cellLst) ⇒
                Row(row.getRowNum) {
                  cellLst flatMap { cell ⇒
                    val index = cell.getColumnIndex
                    cell.getCellType match {
                      case Cell.CELL_TYPE_NUMERIC ⇒
                        Some(NumericCell(index, cell.getNumericCellValue))
                      case Cell.CELL_TYPE_BOOLEAN ⇒
                        Some(BooleanCell(index, cell.getBooleanCellValue))
                      case Cell.CELL_TYPE_FORMULA ⇒
                        Some(FormulaCell(index, cell.getCellFormula))
                      case Cell.CELL_TYPE_STRING  ⇒
                        Some(StringCell(index, cell.getStringCellValue))
                      case _                      ⇒ None
                    }
                  } toSet
                }
            } toSet
          }
      }.toSet
      Workbook(sheets)
    }
  }

  class Sheet(val name: String)(val rows: Set[Row]) {
    override def toString = Show[Sheet].shows(this)
    override def equals(obj: Any) =
      obj != null && obj.isInstanceOf[Sheet] && Equal[Sheet].equal(obj.asInstanceOf[Sheet], this)
  }
  object Sheet {
    def apply(name: String)(rows: Set[Row]) = new Sheet(name)(rows)
    def unapply(sheet: Sheet) = Some((sheet.name), (sheet.rows))
  }
  class Row(val index: Int)(val cells: Set[Cell]) {
    override def toString = Show[Row].shows(this)
    override def equals(obj: Any) =
      obj != null && obj.isInstanceOf[Row] && Equal[Row].equal(obj.asInstanceOf[Row], this)
  }
  object Row {
    def apply(index: Int)(cells: Set[Cell]) = new Row(index)(cells)
    def unapply(row: Row) = Some((row.index), (row.cells))
  }
  sealed abstract class Cell(val index: Int)
  case class StringCell(override  val index: Int, data: String)  extends Cell(index)
  case class NumericCell(override  val index: Int, data: Double) extends Cell(index)
  case class BooleanCell(override val index: Int, data: Boolean) extends Cell(index)
  case class FormulaCell(override val index: Int, data: String)  extends Cell(index)
  case class CellAddr(sheet: String, row: Int, col: Int)
}
