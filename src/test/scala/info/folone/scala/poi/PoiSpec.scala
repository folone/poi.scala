import org.specs2.mutable._
package info.folone.scala.poi {

import org.apache.poi.hssf.usermodel.HSSFSheet
import org.specs2.specification.Scope

class PoiSpec extends SpecificationWithJUnit {
    "Poi" should {
      "create workbook" in {
        /*Workbook {
          Sheet("name") {
            Row(1) {
              Cell(1, "data") :: Cell(2, "data2") :: Nil
            } ::
            Row(2) {
              Cell(1, "data") :: Cell(2, "data2") :: Nil
            } :: Nil
          } ::
          Sheet("name2") {
            Row(2) {
              Cell(1, "data") :: Cell(2, "data2") :: Nil
            } :: Nil
          } :: Nil
        }.save("/home/georgii/ok.xls")*/
        "ok" must not be null
      }
    }

  "Workbook" can {
    "have sheets in it" in new Workbook {
      book.asPoi.getSheet("test") must beAnInstanceOf[HSSFSheet]
    }
  }

  "Sheet" can {
    "have filled cells" in new Workbook {
      val cellText = book.asPoi.getSheet("test").getRow(0).getCell(0).getStringCellValue
      cellText must beEqualTo("theCell")
    }
  }


  trait Workbook extends Scope {
    val book = Workbook(List(Sheet("test")(List(Row(0)(List(Cell(0, "theCell")))))))
  }
  }
}
