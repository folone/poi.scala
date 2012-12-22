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

```


## Setup

### SBT:

`libraryDependencies += "info.folone" %% "poi-scala" % "0.6-SNAPSHOT"`

### Maven:

```xml
    <dependency>
        <groupId>info.folone.scala.poi</groupId>
        <artifactId>poi-scala_${scala.version}</artifactId>
        <version>0.6-SNAPSHOT</version>
    </dependency>
```
