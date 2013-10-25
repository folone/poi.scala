package info.folone.scala.poi

package impure

import java.io.File
import scalaz._

class WorkbookImpure(wb: Workbook) {
  def save(path: String): Unit =
    wb.safeToFile(path).fold(ex ⇒ throw ex, identity).unsafePerformIO

  def saveToStream(stream: OutputStream): Unit =
    safeToStream(stream).fold(ex ⇒ throw ex, identity).unsafePerformIO

  def overwrite(path: String): Unit = {
    new File(path).delete()
    save(path)
  }
}

object load {
  def apply(path: String): Workbook =
    Workbook(path).fold(ex  ⇒ throw ex, identity).unsafePerformIO
}
