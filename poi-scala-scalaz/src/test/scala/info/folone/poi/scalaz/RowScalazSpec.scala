package info.folone.poi.scalaz

import _root_.scalaz.syntax.equal._
import info.folone.poi._
import org.specs2.mutable._
import org.specs2.specification.Scope

class RowScalazSpec extends Specification {

  "Row equality" should {
    "work with Scalaz Equal instance" in {
      val cells: Set[Cell] = Set(StringCell(0, "test"))
      val row1 = Row(0)(cells)
      val row2 = Row(0)(cells)
      val row3 = Row(1)(cells)

      import _root_.scalaz.Equal
      val equalInstance = implicitly[Equal[Row]]
      equalInstance.equal(row1, row2) must beEqualTo(true)
      equalInstance.equal(row1, row3) must beEqualTo(false)
    }
  }

}
