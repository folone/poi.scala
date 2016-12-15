# Poi Scala [![Build Status](https://secure.travis-ci.org/folone/poi.scala.png)](http://travis-ci.org/folone/poi.scala)

Apache poi dsl for scala

## Usage

```scala
scala> import info.folone.scala.poi._
import info.folone.scala.poi._

scala> import scalaz._
import scalaz._

scala> import syntax.monoid._
import syntax.monoid._

scala> import syntax.foldable._
import syntax.foldable._

scala> import std.list._
import std.list._

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

scala> sheetOne.safeToFile(path).fold(ex ⇒ throw ex, identity).unsafePerformIO

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

scala> val res = Workbook(path).fold(
  ex       => false,
  workbook => (workbook |+| sheetTwo) === (sheetOne |+| sheetTwo)
)
res: scalaz.effect.IO[Boolean] = scalaz.effect.IOFunctions$$anon$5@7ad4ad93

scala> res.unsafePerformIO
res5: Boolean = true

scala> import impure._
import impure._

scala> sheetOne.overwrite(path)

scala> sheetOne
res7: info.folone.scala.poi.Workbook = Workbook(Set(Sheet ("name")(Set(Row (1)(Set(NumericCell(1, 2.6), FormulaCell(2, "=ABS(A1)"))), Row (2)(Set(StringCell(1, "data"), StringCell(2, "data2"))))), Sheet ("name2")(Set(Row (2)(Set(BooleanCell(1, true), NumericCell(2, 2.4)))))))

scala> val mergeSheets = sheetOne |+| sheetTwo
mergeSheets: info.folone.scala.poi.Workbook = Workbook(Set(Sheet ("name2")(Set(Row (2)(Set(BooleanCell(1, true), NumericCell(2, 2.4))))), Sheet ("name")(Set(Row (1)(Set(NumericCell(1, 2.6), FormulaCell(2, "=ABS(A1)"))), Row (2)(Set(StringCell(1, "data"), StringCell(2, "data2")))))))

scala> val sheetOneReloaded = load(path)
sheetOneReloaded: info.folone.scala.poi.Workbook = Workbook(Set(Sheet ("name2")(Set(Row (2)(Set(BooleanCell(1, true), NumericCell(2, 2.4))))), Sheet ("name")(Set(Row (2)(Set(StringCell(1, "data"), StringCell(2, "data2"))), Row (1)(Set(NumericCell(1, 2.6), FormulaCell(2, "=ABS(A1)")))))))

scala> val mergeSheets2 = sheetOneReloaded |+| sheetTwo
mergeSheets2: info.folone.scala.poi.Workbook = Workbook(Set(Sheet ("name2")(Set(Row (2)(Set(BooleanCell(1, true), NumericCell(2, 2.4))))), Sheet ("name")(Set(Row (1)(Set(NumericCell(1, 2.6), FormulaCell(2, "=ABS(A1)"))), Row (2)(Set(StringCell(1, "data"), StringCell(2, "data2")))))))

scala> mergeSheets == mergeSheets2
res8: Boolean = true
```


## Setup

### SBT:

`libraryDependencies += "info.folone" %% "poi-scala" % "0.17"`

### Maven:

```xml
<dependency>
    <groupId>info.folone</groupId>
    <artifactId>poi-scala_${scala.version}</artifactId>
    <version>0.17</version>
</dependency>
```


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/folone/poi.scala/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

