package info.folone.scala.poi

import org.specs2.mutable._

class WorkbookSpec extends Specification {

  "Workbook" should {
    "create workbook with Set of sheets" in {
      val sheet1 = Sheet("A")(Set.empty[Row])
      val sheet2 = Sheet("B")(Set.empty[Row])
      val sheetSet = Set(sheet1, sheet2)
      val wb = Workbook(sheetSet)

      wb.sheets must haveSize(2)
      wb.sheets must beEqualTo(sheetSet)
    }

    "create workbook with single sheet in Set" in {
      val sheet = Sheet("TestSheet")(Set.empty[Row])
      val wb = Workbook(Set(sheet))

      wb.sheets must haveSize(1)
      wb.sheets.head must beEqualTo(sheet)
    }

    "support equality" in {
      val sheet1 = Sheet("Test1")(Set.empty[Row])
      val sheet2 = Sheet("Test2")(Set.empty[Row])

      val wb1 = Workbook(Set(sheet1, sheet2))
      val wb2 = Workbook(Set(sheet1, sheet2))
      val wb3 = Workbook(Set(sheet2)) // Different sheets

      wb1 must beEqualTo(wb2)
      wb1 must not(beEqualTo(wb3))
    }

    "have consistent hashCode" in {
      val sheet = Sheet("HashTest")(Set.empty[Row])
      val wb1 = Workbook(Set(sheet))
      val wb2 = Workbook(Set(sheet))

      wb1.hashCode must beEqualTo(wb2.hashCode)
    }

    "work with complex sheets" in {
      val cell1 = StringCell(0, "A1")
      val cell2 = StringCell(1, "B2")
      val row1 = Row(0)(Set[Cell](cell1))
      val row2 = Row(1)(Set[Cell](cell2))

      val sheet1 = Sheet("Data")(Set(row1, row2))
      val sheet2 = Sheet("Summary")(Set.empty[Row])

      val wb = Workbook(Set(sheet1, sheet2))

      wb.sheets must haveSize(2)
      val dataSheet = wb.sheets.find(_.name == "Data").get
      dataSheet.rows must haveSize(2)
      val summarySheet = wb.sheets.find(_.name == "Summary").get
      summarySheet.rows must beEmpty
    }

    "preserve sheet collection" in {
      val sheets = (1 to 5).map(i => Sheet(s"Sheet$i")(Set.empty[Row])).toSet
      val wb = Workbook(sheets)

      wb.sheets must beEqualTo(sheets)
    }

    "handle empty Set of sheets" in {
      val wb = Workbook(Set.empty[Sheet])

      wb.sheets must beEmpty
    }

    "support workbook with styled sheets" in {
      val cellStyle = CellStyle(
        font = Font(bold = true),
        backgroundColor = Some(RedColor)
      )

      val styledCell = StyledCell(StringCell(0, "Styled"), cellStyle)
      val styledRow = Row(0)(Set[Cell](styledCell))
      val styledSheet = Sheet("StyledSheet")(Set(styledRow))

      val wb = Workbook(Set(styledSheet))

      wb.sheets must haveSize(1)
      wb.sheets.head.rows must haveSize(1)
      val retrievedCell = wb.sheets.head.rows.head.cells.head.asInstanceOf[StyledCell]
      retrievedCell.style must beSome(cellStyle)
    }

    "work with enhanced sheet features" in {
      val validation = DataValidation(
        cellRange = CellRange("Sheet1", 0, 0, 0, 0),
        validationType = ListValidation,
        constraint = ListConstraint(List("Option1", "Option2", "Option3"))
      )

      val enhancedSheet = Sheet.enhanced(
        name = "Enhanced",
        autoFilter = Some(CellRange("Enhanced", 0, 0, 10, 5))
      )(Set.empty[Row])

      val wb = Workbook(Set(enhancedSheet))

      wb.sheets must haveSize(1)
      wb.sheets.head.autoFilter must beSome
    }

    "maintain immutability" in {
      val originalSheet = Sheet("Original")(Set.empty[Row])
      val wb1 = Workbook(Set(originalSheet))
      val newSheet = Sheet("New")(Set.empty[Row])
      val wb2 = Workbook(Set(newSheet))

      wb1.sheets.head.name must beEqualTo("Original")
      wb2.sheets.head.name must beEqualTo("New")
      wb1 must not(beEqualTo(wb2))
    }
  }
}
