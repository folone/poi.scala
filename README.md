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
