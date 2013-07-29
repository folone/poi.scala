package info.folone.scala.poi

package object impure {

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

  implicit def workbook2WorkbookImpure(wb: Workbook) =
    new WorkbookImpure(wb)

  object load {
    def apply(path: String) =
      Workbook(path).unsafePerformIO match {
        case -\/(ex)  ⇒ throw ex
        case \/-(res) ⇒ res
      }
  }
}
