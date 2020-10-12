package info.folone.scala.poi

import org.specs2._
import java.io.File

class PoiLoadFileSpec extends Specification {
  def is =
    "LoadWorkbook" ^
      """
|   | A  | B  | C  |
|:-:|:--:|:--:|:--:|
| 1 | A1 | B1 | C1 |
| 2 | A2 | B2 | C2 |
| 3 | A3 | B3 | C3 |
| 4 | A4 | B4 | C4 |
""" ^
      "is load" ^ loadWorkbookTest ^ end

  def loadWorkbookTest = s2"""
    rows have size 4        $e1
    cell have size 12       $e2
    and contains [A1...C4]  $e3
  """

  val testBook = Workbook(
    Set(
      Sheet("test")(
        Set(
          Row(0)(Set(StringCell(0, "A1"), StringCell(1, "B1"), StringCell(2, "C1"))),
          Row(1)(Set(StringCell(0, "A2"), StringCell(1, "B2"), StringCell(2, "C2"))),
          Row(2)(Set(StringCell(0, "A3"), StringCell(1, "B3"), StringCell(2, "C3"))),
          Row(3)(Set(StringCell(0, "A4"), StringCell(1, "B4"), StringCell(2, "C4")))
        )
      )
    ),
    XSSF
  )

  val targetWorksheet = {
    val testBookFile = File.createTempFile("tmp", "xlsx")
    val testBookPath = testBookFile.getAbsolutePath
    try {
      new impure.WorkbookImpure(testBook).overwrite(testBookPath)
      impure.load(testBookPath).sheets.head
    } finally {
      testBookFile.delete()
    }
  }

  def e1 = targetWorksheet.rows must have size (4)
  def e2 = targetWorksheet.rows.toList.map { _.cells.size }.sum === 12
  def e3 = {
    val expect = Set("A1", "A2", "A3", "A4", "B1", "B2", "B3", "B4", "C1", "C2", "C3", "C4")
    val actual =
      for (
        row <- targetWorksheet.rows;
        StringCell(_, cell) <- row.cells
      ) yield cell

    actual === expect
  }
}
