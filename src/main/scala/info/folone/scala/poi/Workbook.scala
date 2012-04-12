import org.apache.poi._
import hssf.usermodel._
import java.io.{File,FileOutputStream, OutputStream}

package info.folone.scala.poi {


class Workbook(sheets: List[Sheet]) {

    private def book = {
      val workbook = new HSSFWorkbook
      sheets foreach { sh =>
        val Sheet((name),(rows)) = sh
        val sheet = workbook createSheet name
        rows foreach { rw =>
          val Row((index),(cells)) = rw
          val row = sheet createRow index
          cells foreach { cl =>
            val Cell(index,data) = cl
            val cell = row createCell index
            cell setCellValue data
            sheet autoSizeColumn index
            val height = data.split("\n").size * row.getHeight
            row setHeight height.asInstanceOf[Short]
          }
        }
      }
      workbook
    }

    def toFile(path: String) {
      val file = new FileOutputStream(new File(path))
      book write file
      file.close()
    }

    def toStream(stream: OutputStream) {
      book write stream
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
    def unapply(sheet: Sheet) = Some((sheet.name),(sheet.rows))
  }
  class Row(idx: Int)(cl: List[Cell]) {
    val (index, cells) = (idx, cl)
  }
  object Row {
    def apply(index: Int)(cells: List[Cell]) = new Row(index)(cells)
    def unapply(row: Row) = Some((row.index),(row.cells))
  }
  case class Cell(index: Int, data: String)
}
