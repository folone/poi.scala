# Poi Scala [![Build Status](https://secure.travis-ci.org/thenewmotion/poi.scala.png)](http://travis-ci.org/thenewmotion/poi.scala)

Apache poi dsl for scala

## Usage

```scala

scala> import info.folone.scala.poi._
import info.folone.scala.poi._

scala> import scalaz.syntax.semigroup._
import scalaz.syntax.semigroup._

scala> val sheetOne = Workbook {
     |   Sheet("name") {
     |     Row(1) {
     |       Cell(1, "data") :: Cell(2, "data2") :: Nil
     |     } ::
     |     Row(2) {
     |       Cell(1, "data") :: Cell(2, "data2") :: Nil
     |     } :: Nil
     |   } ::
     |   Sheet("name2") {
     |     Row(2) {
     |       Cell(1, "data") :: Cell(2, "data2") :: Nil
     |     } :: Nil
     |   } :: Nil
     | }
sheetOne: info.folone.scala.poi.Workbook = info.folone.scala.poi.Workbook@71c65b27

scala> val sheetTwo = Workbook {
     |   Sheet("name") {
     |     Row(1) {
     |       Cell(1, "newdata") :: Cell(2, "data2") :: Cell(3, "data3") ::Nil
     |     } ::
     |     Row(2) {
     |       Cell(1, "data") :: Cell(2, "data2") :: Nil
     |     } ::
     |     Row(3) {
     |       Cell(1, "data") :: Cell(2, "data2") :: Nil
     |     } :: Nil
     |   } :: Nil
     |   Sheet("name") {
     |     Row(2) {
     |       Cell(1, "data") :: Cell(2, "data2") :: Nil
     |     } :: Nil
     |   } :: Nil
     | }
sheetTwo: info.folone.scala.poi.Workbook = info.folone.scala.poi.Workbook@15eaa372

scala> sheetOne |+| sheetTwo
res0: info.folone.scala.poi.Workbook = info.folone.scala.poi.Workbook@4b1bdd73

scala> .safeToFile("/home/georgii/ok.xls")
res1: scalaz.effect.IO[Unit] = scalaz.effect.IOFunctions$$anon$4@5c6d650f

scala> .unsafePerformIO // Actually write
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