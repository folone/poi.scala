package info.folone.scala.poi

import org.specs2.mutable._

class PoiLensesSpec extends Specification {
  "Lenses on poi classes" should {

    "cellLens getter" >> {
      stringCellLens.get(StringCell(1, "data")) must beEqualTo("data")
    }
    "cellLens setter" >> {
      stringCellLens.set(StringCell(1, "data"), "newData") must beEqualTo(StringCell(1, "newData"))
    }

    // "rowLens contains" >> {
    //   rowLens.contains(StringCell(2, "data1"))
    //     .get(Row(1)(Set(StringCell(1,"data"), StringCell(2, "data1")))) must beTrue
    // }

    // "rowLens does not contain" >> {
    //   rowLens.contains(StringCell(2, "data1")).get(Row(1)(Set(StringCell(1,"data"), StringCell(2, "data")))) must beFalse
    // }
    // "rowLens +=" >> {
    //   (rowLens += StringCell(2, "data1")).run(Row(1)(Set(StringCell(1, "data"), StringCell(3, "data3")))) mustEqual
    //   (Row(1)
    //    (Set(StringCell(1,"data"), StringCell(3, "data3"), StringCell(2, "data1"))),
    //    Set(StringCell(1, "data"), StringCell(3, "data3"), StringCell(2, "data1")))
    // }
    // "rowLens &=" >> {
    //   (rowLens &= Set(StringCell(2, "data1"))).run(Row(1)(Set(StringCell(1, "data"), StringCell(2, "data1")))) mustEqual
    //   (Row(1)(Set(StringCell(2, "data1"))),Set(StringCell(2, "data1")))
    // }
    // "rowLens &~=" >> {
    //   (rowLens &~= Set(StringCell(2, "data1"))).run(Row(1)(Set(StringCell(1, "data"), StringCell(2, "data1")))) mustEqual
    //   (Row(1)(Set(StringCell(1, "data"))),Set(StringCell(1, "data")))
    // }
    // "rowLens |=" >> {
    //   (rowLens |= Set(StringCell(2, "data1"))).run(Row(1)(Set(StringCell(1, "data"), StringCell(2, "data1")))) mustEqual
    //   (Row(1)(Set(StringCell(1, "data"), StringCell(2, "data1"))),Set(StringCell(1, "data"), StringCell(2, "data1")))
    //   (rowLens |= Set(StringCell(2, "data1"))).run(Row(1)(Set(StringCell(1, "data"), StringCell(2, "data2")))) mustEqual
    //   (Row(1)
    //    (Set(StringCell(1, "data"), StringCell(2, "data2"), StringCell(2, "data1"))),
    //    Set(StringCell(1, "data"), StringCell(2, "data2"), StringCell(2, "data1")))
    // }
    // "rowLens -=" >> {
    //   (rowLens -= StringCell(2, "data1")).run(Row(1)(Set(StringCell(1, "data"), StringCell(2, "data1")))) mustEqual
    //   (Row(1)(Set(StringCell(1, "data"))), Set(StringCell(1, "data")))
    // }

  }

}
