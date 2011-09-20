For now it can only create a new xls file, using the following DSL:

```Workbook {
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
        }.save("/home/georgii/ok.xls")```