package info.folone.poi.scalaz

import _root_.scalaz.syntax.equal._
import info.folone.poi._
import org.specs2.mutable._

class WorkbookScalazSpec extends Specification {

  "Workbook" should {
    "support Scalaz Equal" in {
      val sheet = Sheet("EqualTest")(Set.empty[Row])
      val wb1 = Workbook(Set(sheet))
      val wb2 = Workbook(Set(sheet))
      val wb3 = Workbook(Set(Sheet("Different")(Set.empty[Row])))

      import _root_.scalaz.Equal
      val equalInstance = implicitly[Equal[Workbook]]
      equalInstance.equal(wb1, wb2) must beEqualTo(true)
      equalInstance.equal(wb1, wb3) must beEqualTo(false)
    }
  }
}
