import org.apache.poi._
import hssf.usermodel._
import java.io.{ File, FileOutputStream, OutputStream }
import scalaz.effect.IO

package info.folone.scala.poi {

  class Workbook(sheets: List[Sheet]) {

    private lazy val book = {
      val workbook = new HSSFWorkbook
      sheets foreach { sh ⇒
        val Sheet((name), (rows)) = sh
        val sheet = workbook createSheet name
        rows foreach { rw ⇒
          val Row((index), (cells)) = rw
          val row = sheet createRow index
          cells foreach { cl ⇒
            val Cell(index, data) = cl
            val cell = row createCell index
            cell setCellValue data
            val height = data.split("\n").size * row.getHeight
            row setHeight height.asInstanceOf[Short]
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

    def styled(styles: Map[CellStyle, List[CellAddr]]): Workbook = { applyStyling(book, styles); this }

    /**
     * Fits column's width to maximum width of non-empty cell at cell address.
     * Quite expensive. Use as late as possible.
     *
     * @param addrs addresses of cells whose columns should be sized to fit cells content
     */
    def autosizeColumns(addrs: List[CellAddr]): Workbook = {
      addrs foreach { a ⇒ book.getSheet(a.sheet).autoSizeColumn(a.col) }
      this
    }

    @deprecated("Use safeToFile and unsafePerformIO where you need it")
    def toFile(path: String)           = safeToFile(path).unsafePerformIO
    @deprecated("Use safeToFile and unsafePerformIO where you need it")
    def toStream(stream: OutputStream) = safeToStream(stream).unsafePerformIO

    def safeToFile(path: String) = IO {
      val file = new FileOutputStream(new File(path))
      book write file
      file.close()
    }

    def safeToStream(stream: OutputStream) = IO {
      book write stream
    }

    def asPoi = book
  }

  object Workbook {
    def apply(sheets: List[Sheet]) = new Workbook(sheets)
  }

  class Sheet(nm: String)(rw: List[Row]) {
    val (name, rows) = (nm, rw)
  }
  object Sheet {
    def apply(name: String)(rows: List[Row]) = new Sheet(name)(rows)
    def unapply(sheet: Sheet) = Some((sheet.name), (sheet.rows))
  }
  class Row(idx: Int)(cl: List[Cell]) {
    val (index, cells) = (idx, cl)
  }
  object Row {
    def apply(index: Int)(cells: List[Cell]) = new Row(index)(cells)
    def unapply(row: Row) = Some((row.index), (row.cells))
  }
  case class Cell(index: Int, data: String)
  case class CellAddr(sheet: String, row: Int, col: Int)
}
