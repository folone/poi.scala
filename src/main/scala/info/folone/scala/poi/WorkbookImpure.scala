package info.folone.scala.poi

import java.io.File
import scalaz._

import scala.language.implicitConversions

class WorkbookImpure(wb: Workbook) {
  def save(path: String) =
    wb.safeToFile(path).unsafePerformIO

  def overwrite(path: String) = {
    new File(path).delete()
    save(path)
  }
}

object WorkbookImpure {
  implicit def workbook2WorkbookImpure(wb: Workbook) =
    new WorkbookImpure(wb)
}

object load {
  def apply(path: String) =
    Workbook(path).unsafePerformIO match {
      case -\/(ex)  ⇒ throw ex
      case \/-(res) ⇒ res
    }
}
