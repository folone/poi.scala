package info.folone.scala.poi

package impure

import java.io.File

class WorkbookImpure(private val wb: Workbook) extends AnyVal {

  def save(path: String): Unit =
    wb.safeToFile(path).fold(ex => throw ex, identity).unsafePerformIO()

  def saveToStream(stream: java.io.OutputStream): Unit =
    wb.safeToStream(stream).fold(ex => throw ex, identity).unsafePerformIO()

  def overwrite(path: String): Unit = {
    new File(path).delete()
    save(path)
  }

}

object load {

  def apply(path: String): Workbook =
    Workbook(path).fold(ex => throw ex, identity).unsafePerformIO()

}
