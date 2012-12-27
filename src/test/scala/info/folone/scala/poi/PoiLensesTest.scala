package info.folone.scala.poi

import org.specs2.mutable._

class PoiLensesSpec extends Specification {
  "Lenses on poi classes" should {
    "cellLens getter" >> {
      cellLens.get(Cell(1, "data")) must beEqualTo("data")
    }
    "cellLens setter" >> {
      cellLens.set(Cell(1, "data"), "newData") must beEqualTo(Cell(1, "newData"))
    }
    "rowLens contains" >> {
      rowLens.contains(Cell(2, "data1")).get(Row(1)(Set(Cell(1,"data"), Cell(2, "data1")))) must beTrue
    }
    "rowLens does not contain" >> {
      rowLens.contains(Cell(2, "data1")).get(Row(1)(Set(Cell(1,"data"), Cell(2, "data")))) must beFalse
    }
    "rowLens +=" >> {
      (rowLens += Cell(2, "data1")).run(Row(1)(Set(Cell(1, "data"), Cell(3, "data3")))) mustEqual
      (Row(1)
       (Set(Cell(1,"data"), Cell(3, "data3"), Cell(2, "data1"))),
       Set(Cell(1, "data"), Cell(3, "data3"), Cell(2, "data1")))
    }
    "rowLens &=" >> {
      (rowLens &= Set(Cell(2, "data1"))).run(Row(1)(Set(Cell(1, "data"), Cell(2, "data1")))) mustEqual
      (Row(1)(Set(Cell(2, "data1"))),Set(Cell(2, "data1")))
    }
    "rowLens &~=" >> {
      (rowLens &~= Set(Cell(2, "data1"))).run(Row(1)(Set(Cell(1, "data"), Cell(2, "data1")))) mustEqual
      (Row(1)(Set(Cell(1, "data"))),Set(Cell(1, "data")))
    }
    "rowLens |=" >> {
      (rowLens |= Set(Cell(2, "data1"))).run(Row(1)(Set(Cell(1, "data"), Cell(2, "data1")))) mustEqual
      (Row(1)(Set(Cell(1, "data"), Cell(2, "data1"))),Set(Cell(1, "data"), Cell(2, "data1")))

      (rowLens |= Set(Cell(2, "data1"))).run(Row(1)(Set(Cell(1, "data"), Cell(2, "data2")))) mustEqual
      (Row(1)
       (Set(Cell(1, "data"), Cell(2, "data2"), Cell(2, "data1"))),
       Set(Cell(1, "data"), Cell(2, "data2"), Cell(2, "data1")))
    }
    "rowLens -=" >> {
      (rowLens -= Cell(2, "data1")).run(Row(1)(Set(Cell(1, "data"), Cell(2, "data1")))) mustEqual
      (Row(1)(Set(Cell(1, "data"))), Set(Cell(1, "data")))
    }
  }
}
