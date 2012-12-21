# Poi Scala [![Build Status](https://secure.travis-ci.org/folone/poi.scala.png)](http://travis-ci.org/folone/poi.scala)

Apache poi dsl for scala

## Usage

```scala

scala> import info.folone.scala.poi._
import info.folone.scala.poi._

scala> import scalaz._
import scalaz._

// Yes, we have monoids
scala> import syntax.monoid._
import syntax.monoid._

scala> import syntax.foldable._
import syntax.foldable._

scala> import std.list._
import std.list._

// Creating a test workbook
scala> val sheetOne = Workbook {
     |         Set(Sheet("name") {
     |           Set(Row(1) {
     |             Set(Cell(1, "data"), Cell(2, "data2"))
     |           },
     |           Row(2) {
     |             Set(Cell(1, "data"), Cell(2, "data2"))
     |           })
     |         },
     |         Sheet("name2") {
     |           Set(Row(2) {
     |             Set(Cell(1, "data"), Cell(2, "data2"))
     |           })
     |         })
     |       }
sheetOne: info.folone.scala.poi.Workbook = Workbook(Set(Sheet ("name")(Set(Row (1)(Set(Cell(1,data), Cell(2,data2))), Row (2)(Set(Cell(1,data), Cell(2,data2))))), Sheet ("name2")(Set(Row (2)(Set(Cell(1,data), Cell(2,data2)))))))

scala> val path = "/home/folone/ok.xls"
path: java.lang.String = /home/folone/ok.xls

// Saving the result (yes, it does control side-effects via IO)
scala> sheetOne.safeToFile(path).unsafePerformIO

// Let's create another workbook
scala> val sheetTwo = Workbook {
     |         Set(Sheet("name") {
     |           Set(Row(1) {
     |             Set(Cell(1, "newdata"), Cell(2, "data2"), Cell(3, "data3"))
     |           },
     |           Row(2) {
     |             Set(Cell(1, "data"), Cell(2, "data2"))
     |           },
     |           Row(3) {
     |             Set(Cell(1, "data"), Cell(2, "data2"))
     |           })
     |         },
     |         Sheet("name") {
     |           Set(Row(2) {
     |             Set(Cell(1, "data"), Cell(2, "data2"))
     |           })
     |         })
     |       }
sheetTwo: info.folone.scala.poi.Workbook = Workbook(Set(Sheet ("name")(Set(Row (1)(Set(Cell(1,newdata), Cell(2,data2), Cell(3,data3))), Row (2)(Set(Cell(1,data), Cell(2,data2))), Row (3)(Set(Cell(1,data), Cell(2,data2))))), Sheet ("name")(Set(Row (2)(Set(Cell(1,data), Cell(2,data2)))))))

scala> import syntax.equal._
import syntax.equal._

// And let's merge the saved workbook from before with the new one using the Monoid instance
scala> (Workbook(path) /* load from file */ |+| sheetTwo) === (sheetOne |+| sheetTwo)
res1: Boolean = true

scala> List(Workbook(path), sheetOne, sheetTwo).suml === (sheetOne |+| sheetTwo)
res2: Boolean = true

// We also have some lenses, though they are not that ready yet. Some examples:
scala> cellLens.get(Cell(1, "data"))
res3: scalaz.Id.Id[String] = data

scala> cellLens.set(Cell(1, "data"), "new data")
res4: scalaz.Id.Id[info.folone.scala.poi.Cell] = Cell(1,new data)

scala> rowLens.contains(Cell(2, "data1")).get(Row(1)(Set(Cell(1,"data"), Cell(2, "data1"))))
res8: scalaz.Id.Id[Boolean] = true

scala> rowLens.contains(Cell(2, "data1")).get(Row(1)(Set(Cell(1,"data"), Cell(2, "data"))))
res9: scalaz.Id.Id[Boolean] = false

scala> (rowLens += Cell(2, "data1")).run(Row(1)(Set(Cell(1, "data"), Cell(3, "data3"))))
res14: (info.folone.scala.poi.Row, Set[info.folone.scala.poi.Cell]) = (Row (1)(Set(Cell(1,data), Cell(3,data3), Cell(2,data1))),Set(Cell(1,data), Cell(3,data3), Cell(2,data1)))

scala> (rowLens &= Set(Cell(2, "data1"))).run(Row(1)(Set(Cell(1, "data"), Cell(2, "data1"))))
res17: (info.folone.scala.poi.Row, Set[info.folone.scala.poi.Cell]) = (Row (1)(Set(Cell(2,data1))),Set(Cell(2,data1)))

scala> (rowLens &~= Set(Cell(2, "data1"))).run(Row(1)(Set(Cell(1, "data"), Cell(2, "data1"))))
res18: (info.folone.scala.poi.Row, Set[info.folone.scala.poi.Cell]) = (Row (1)(Set(Cell(1,data))),Set(Cell(1,data)))

scala> (rowLens |= Set(Cell(2, "data1"))).run(Row(1)(Set(Cell(1, "data"), Cell(2, "data1"))))
res20: (info.folone.scala.poi.Row, Set[info.folone.scala.poi.Cell]) = (Row (1)(Set(Cell(1,data), Cell(2,data1))),Set(Cell(1,data), Cell(2,data1)))

scala> (rowLens |= Set(Cell(2, "data1"))).run(Row(1)(Set(Cell(1, "data"), Cell(2, "data2"))))
res21: (info.folone.scala.poi.Row, Set[info.folone.scala.poi.Cell]) = (Row (1)(Set(Cell(1,data), Cell(2,data2), Cell(2,data1))),Set(Cell(1,data), Cell(2,data2), Cell(2,data1)))

scala> (rowLens -= Cell(2, "data1")).run(Row(1)(Set(Cell(1, "data"), Cell(2, "data1"))))
res23: (info.folone.scala.poi.Row, Set[info.folone.scala.poi.Cell]) = (Row (1)(Set(Cell(1,data))),Set(Cell(1,data)))

```


## Setup

### SBT:

`libraryDependencies += "info.folone.scala.poi" % "poi-scala" % "0.6"`

### Maven:

```xml
    <dependency>
        <groupId>info.folone.scala.poi</groupId>
        <artifactId>poi-scala</artifactId>
        <version>0.5</version>
    </dependency>
```
