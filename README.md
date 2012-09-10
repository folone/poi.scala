# Poi Scala [![Build Status](https://secure.travis-ci.org/thenewmotion/poi.scala.png)](http://travis-ci.org/thenewmotion/poi.scala)

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

scala> sheetOne.safeToFile(path).unsafePerformIO

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

scala> (Workbook(path) /* load from file */ |+| sheetTwo) === (sheetOne |+| sheetTwo) // Merging
res1: Boolean = true

scala> List(Workbook(path), sheetOne, sheetTwo).suml === (sheetOne |+| sheetTwo)
res2: Boolean = true

```


## Setup

1. Add this repository to your pom.xml:
```xml
    <repository>
        <id>thenewmotion</id>
        <name>The New Motion Repository</name>
        <url>http://nexus.thenewmotion.com/content/repositories/releases-public</url>
    </repository>
```

2. Add dependency to your pom.xml:
```xml
    <dependency>
        <groupId>info.folone.scala.poi</groupId>
        <artifactId>poi-scala</artifactId>
        <version>0.5</version>
    </dependency>
```
