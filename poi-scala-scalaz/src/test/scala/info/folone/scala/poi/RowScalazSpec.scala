package info.folone.scala.poi

import org.specs2.mutable._
import org.specs2.specification.Scope
import scalaz.syntax.equal._

class RowScalazSpec extends Specification {

  "Row equality" should {
    "work with Scalaz Equal instance" in {
      val cells: Set[Cell] = Set(StringCell(0, "test"))
      val row1 = Row(0)(cells)
      val row2 = Row(0)(cells)
      val row3 = Row(1)(cells)

      import scalaz.Equal
      val equalInstance = implicitly[Equal[Row]]
      equalInstance.equal(row1, row2) must beEqualTo(true)
      equalInstance.equal(row1, row3) must beEqualTo(false)
    }
  }

}
