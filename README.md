# Poi Scala

Programmaticly create Excel sheets in scala (via Apache poi library).

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

scala> sheetOne.safeToFile(path).fold(ex => throw ex, identity).unsafePerformIO()

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

scala> res.unsafePerformIO()
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

[![poi-scala Scala version support](https://index.scala-lang.org/folone/poi.scala/poi-scala/latest.svg)](https://index.scala-lang.org/folone/poi.scala/poi-scala)

### SBT:

`libraryDependencies += "info.folone" %% "poi-scala" % "${poi-scala.version}"`

### Maven:

```xml
<dependency>
    <groupId>info.folone</groupId>
    <artifactId>poi-scala_${scala.version}</artifactId>
    <version>${poi-scala.version}</version>
</dependency>
```

## Releasing

This project uses [sbt-ci-release](https://github.com/sbt/sbt-ci-release) plugin. Snapshots are being published on every push to `master`. To publish a new stable release, just create a new tag like so: ` git tag -a v$next_version -m "v$next_version" && git push origin v$next_version`.

[![Stand With Ukraine](https://raw.githubusercontent.com/vshymanskyy/StandWithUkraine/main/banner-direct-single.svg)](https://stand-with-ukraine.pp.ua)
