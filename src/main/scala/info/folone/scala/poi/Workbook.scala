import org.apache.poi._
import hssf.usermodel._
import java.io.{ File, FileOutputStream }
import scalaz._, Scalaz._
import scalaz.effects._

package info.folone.scala.poi {

  class Workbook(sheets: List[Sheet]) {
    def saveIO(wb: HSSFWorkbook, path: String) = io {
      val file = new FileOutputStream(new File(path))
      wb write file
      file close
    }

    @deprecated("Use safeCreate and unsafePerformIO here you need IO to be evaluated")
    def save(path: String) = saveIO(createWorkbook, path).unsafePerformIO

    def safeSave(path: String) = saveIO(createWorkbook, path)

    def createWorkbook = {
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
            sheet autoSizeColumn index
            val height = data.split("\n").size * row.getHeight
            row setHeight height.toShort
          }
        }
      }
      workbook
    }

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
}
