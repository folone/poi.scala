package info.folone.poi

package impure

import java.io.File

class WorkbookImpure(private val wb: Workbook) extends AnyVal {

  def save(path: String): Unit =
    wb.toFile(path)

  def saveToStream(stream: java.io.OutputStream): Unit =
    wb.toStream(stream)

  def overwrite(path: String): Unit = {
    new File(path).delete()
    save(path)
  }

}

object load {

  def apply(path: String): Workbook =
    Workbook.fromFile(new File(path)) match {
      case Right(workbook) => workbook
      case Left(ex) => throw ex
    }

}
