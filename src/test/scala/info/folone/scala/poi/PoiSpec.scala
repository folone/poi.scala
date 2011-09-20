import org.specs2.mutable._
package info.folone.scala.poi {
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
  }
}
