package info.folone.scala.poi

import org.specs2._
import specification._

class PoiLoadFileSpec extends script.Specification with Grouped { def is=s2"""

# LoadWorkbook

| | A | B | C |
|:-----------:|:-----------:|:------------:|:------------:|
| 1 | A1 | B1 | C1 |
| 2 | A2 | B2 | C2 |
| 3 | A3 | B3 | C3 |
| 4 | A4 | B4 | C4 |

  is load
  + rows have size 4
    cell
    + count 12
    + and contains [A1...C4]
  """

  val testBook = Workbook(Set(Sheet("test")(
    Set(
      Row(0)(Set(
        StringCell(0, "A1"),
        StringCell(1, "B1"),
        StringCell(2, "C1"))),
      Row(1)(Set(
        StringCell(0, "A2"),
        StringCell(1, "B2"),
        StringCell(2, "C2"))),
      Row(2)(Set(
        StringCell(0, "A3"),
        StringCell(1, "B3"),
        StringCell(2, "C3"))),
      Row(3)(Set(
        StringCell(0, "A4"),
        StringCell(1, "B4"),
        StringCell(2, "C4")))
    )
  )), XSSF)

  val testBookPath = "/tmp/testBook.xlsx"

  val targetWorksheet = {
    new impure.WorkbookImpure(testBook).overwrite(testBookPath)
    impure.load(testBookPath).sheets.head
  }

  "loadworkbook" - new group {
    eg := targetWorksheet.rows must have size(4)
    eg := targetWorksheet.rows.toList.map{_.cells.size}.sum === 12
    eg := {
      val expect = Set(
        "A1", "A2", "A3", "A4",
        "B1", "B2", "B3", "B4",
        "C1", "C2", "C3", "C4")
      val actual = for(row <- targetWorksheet.rows;
          StringCell(_, cell) <- row.cells) yield cell

      actual === expect
    }
  }
}
