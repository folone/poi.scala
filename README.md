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
   Set(Sheet("name") {
     Set(Row(1) {
       Set(NumericCell(1, 13.0/5), FormulaCell(2, "ABS(A1)"))
     },
     Row(2) {
       Set(StringCell(1, "data"), StringCell(2, "data2"))
     })
   },
   Sheet("name2") {
     Set(Row(2) {
       Set(BooleanCell(1, true), NumericCell(2, 2.4))
     })
   })
 }
sheetOne: info.folone.scala.poi.Workbook = Workbook(Set(Sheet ("name")(Set(Row (1)(Set(NumericCell(1, 2.6), FormulaCell(2, "=ABS(A1)"))), Row (2)(Set(StringCell(1, "data"), StringCell(2, "data2"))))), Sheet ("name2")(Set(Row (2)(Set(BooleanCell(1, true), NumericCell(2, 2.4)))))))

scala> val path = "/tmp/workbook.xls"
path: String = /tmp/workbook.xls

// Saving the result (yes, it does control side-effects via scalaz.IO)
scala> sheetOne.safeToFile(path).unsafePerformIO
res0: scalaz.\/[Throwable,Unit] = \/-(())

// Let's create another workbook
scala> val sheetTwo = Workbook {
        Set(Sheet("name") {
          Set(Row(1) {
            Set(StringCell(1, "newdata"), StringCell(2, "data2"), StringCell(3, "data3"))
          },
          Row(2) {
            Set(StringCell(1, "data"), StringCell(2, "data2"))
          },
          Row(3) {
            Set(StringCell(1, "data"), StringCell(2, "data2"))
          })
        },
        Sheet("name") {
          Set(Row(2) {
            Set(StringCell(1, "data"), StringCell(2, "data2"))
          })
        })
      }
sheetTwo: info.folone.scala.poi.Workbook = Workbook(Set(Sheet ("name")(Set(Row (1)(Set(StringCell(1, "newdata"), StringCell(2, "data2"), StringCell(3, "data3"))), Row (2)(Set(StringCell(1, "data"), StringCell(2, "data2"))), Row (3)(Set(StringCell(1, "data"), StringCell(2, "data2"))))), Sheet ("name")(Set(Row (2)(Set(StringCell(1, "data"), StringCell(2, "data2")))))))

scala> import syntax.equal._
import syntax.equal._

// And let's merge the saved workbook from before with the new one using the Monoid instance
scala> val res0 = { Workbook(path).map {
  case \/-(workbook) => (workbook |+| sheetTwo) === (sheetOne |+| sheetTwo)
  case -\/(_)        => false
} }
res0: scalaz.effect.IO[Boolean] = scalaz.effect.IOFunctions$$anon$5@5fc1a208

scala> res0.unsafePerformIO
res1: Boolean = true

// The impure syntax:
scala> import impure._
import impure._

scala> sheetOne.overwrite(path)

scala> sheetOne
res3: info.folone.scala.poi.Workbook = Workbook(Set(Sheet ("name")(Set(Row (1)(Set(NumericCell(1, 2.6), FormulaCell(2, "=ABS(A1)"))), Row (2)(Set(StringCell(1, "data"), StringCell(2, "data2"))))), Sheet ("name2")(Set(Row (2)(Set(BooleanCell(1, true), NumericCell(2, 2.4)))))))

scala> val mergeSheets = sheetOne |+| sheetTwo
mergeSheets: info.folone.scala.poi.Workbook = Workbook(Set(Sheet ("name2")(Set(Row (2)(Set(BooleanCell(1, true), NumericCell(2, 2.4))))), Sheet ("name")(Set(Row (1)(Set(NumericCell(1, 2.6), FormulaCell(2, "=ABS(A1)"))), Row (2)(Set(StringCell(1, "data"), StringCell(2, "data2")))))))

scala> val sheetOneReloaded = load(path)
sheetOneReloaded: info.folone.scala.poi.Workbook = Workbook(Set(Sheet ("name")(Set(Row (1)(Set(NumericCell(1, 2.6), FormulaCell(2, "=ABS(A1)"))), Row (2)(Set(StringCell(1, "data"), StringCell(2, "data2"))))), Sheet ("name2")(Set(Row (2)(Set(BooleanCell(1, true), NumericCell(2, 2.4)))))))

scala> val mergeSheets2 = sheetOneReloaded |+| sheetTwo
mergeSheets2: info.folone.scala.poi.Workbook = Workbook(Set(Sheet ("name2")(Set(Row (2)(Set(BooleanCell(1, true), NumericCell(2, 2.4))))), Sheet ("name")(Set(Row (1)(Set(NumericCell(1, 2.6), FormulaCell(2, "=ABS(A1)"))), Row (2)(Set(StringCell(1, "data"), StringCell(2, "data2")))))))

scala> mergeSheets == mergeSheets2
res4: Boolean = true
```


## Setup

### SBT:

`libraryDependencies += "info.folone" %% "poi-scala" % "0.10"`

### Maven:

```xml
<dependency>
    <groupId>info.folone</groupId>
    <artifactId>poi-scala_${scala.version}</artifactId>
    <version>0.10</version>
</dependency>
```


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/folone/poi.scala/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

