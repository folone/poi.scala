# Poi Scala [![Build Status](https://secure.travis-ci.org/thenewmotion/poi.scala.png)](http://travis-ci.org/thenewmotion/poi.scala)

Apache poi dsl for scala

## Usage

```scala
Workbook {
  Sheet("name") {
    Row(1) {
      Cell(1, "data") :: Cell(2, "data2") :: Nil
    } ::
    Row(2) {
      Cell(1, "data") :: Cell(2, "data2") :: Nil
    } :: Nil
  } ::
  Sheet("name2") {
    Row(2) {
      Cell(1, "data") :: Cell(2, "data2") :: Nil
    } :: Nil
  } :: Nil
}.safeToFile("/home/georgii/ok.xls")
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