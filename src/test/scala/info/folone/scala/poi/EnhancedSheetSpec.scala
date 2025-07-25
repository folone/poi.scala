package info.folone.scala.poi

import org.specs2.mutable._
import org.specs2.specification.Scope

class EnhancedSheetSpec extends Specification {

  "Enhanced Sheet functionality" should {
    "create enhanced sheet with basic configuration" in new EnhancedSheetScope {
      val sheet = Sheet.enhanced("TestSheet")(testRows)

      sheet.name must beEqualTo("TestSheet")
      sheet.rows must beEqualTo(testRows)
      sheet.config.name must beEqualTo("TestSheet")
      sheet.config.frozenPane must beNone
      sheet.config.columnWidths must beEmpty
    }

    "support freeze panes" in new EnhancedSheetScope {
      val freezePane = FreezePane(2, 1) // Freeze first 2 columns and 1 row
      val sheet = Sheet.enhanced("TestSheet")(testRows).freeze(freezePane)

      sheet.config.frozenPane must beSome(freezePane)
    }

    "support split panes" in new EnhancedSheetScope {
      val splitPane = SplitPane(100, 200) // Split at position 100, 200
      val sheet = Sheet.enhanced("TestSheet")(testRows).split(splitPane)

      sheet.config.splitPane must beSome(splitPane)
    }

    "support column width settings" in new EnhancedSheetScope {
      val sheet = Sheet
        .enhanced("TestSheet")(testRows)
        .setColumnWidth(0, 20)
        .setColumnWidth(1, 30)

      sheet.config.columnWidths must haveSize(2)
      sheet.config.columnWidths(0) must beEqualTo(20)
      sheet.config.columnWidths(1) must beEqualTo(30)
    }

    "support row height settings" in new EnhancedSheetScope {
      val sheet = Sheet
        .enhanced("TestSheet")(testRows)
        .setRowHeight(0, 25)
        .setRowHeight(1, 30)

      sheet.config.rowHeights must haveSize(2)
      sheet.config.rowHeights(0) must beEqualTo(25)
      sheet.config.rowHeights(1) must beEqualTo(30)
    }

    "support hiding columns and rows" in new EnhancedSheetScope {
      val sheet = Sheet
        .enhanced("TestSheet")(testRows)
        .hideColumn(2)
        .hideRow(5)

      sheet.config.hiddenColumns must contain(2)
      sheet.config.hiddenRows must contain(5)
    }

    "support row grouping" in new EnhancedSheetScope {
      val sheet = Sheet
        .enhanced("TestSheet")(testRows)
        .groupRows(2, 5)
        .groupRows(8, 10)

      sheet.config.rowGroups must haveSize(2)
      sheet.config.rowGroups must contain(RowGroup(2, 5))
      sheet.config.rowGroups must contain(RowGroup(8, 10))
    }

    "support column grouping" in new EnhancedSheetScope {
      val sheet = Sheet
        .enhanced("TestSheet")(testRows)
        .groupColumns(1, 3)
        .groupColumns(5, 7)

      sheet.config.columnGroups must haveSize(2)
      sheet.config.columnGroups must contain(ColumnGroup(1, 3))
      sheet.config.columnGroups must contain(ColumnGroup(5, 7))
    }

    "support headers and footers" in new EnhancedSheetScope {
      val header = Header(Some("Left Header"), Some("Center Header"), Some("Right Header"))
      val footer = Footer(Some("Left Footer"), Some("Center Footer"), Some("Right Footer"))

      val sheet = Sheet
        .enhanced("TestSheet")(testRows)
        .addHeader(header)
        .addFooter(footer)

      sheet.config.header must beSome(header)
      sheet.config.footer must beSome(footer)
    }

    "support page setup" in new EnhancedSheetScope {
      val pageSetup = PageSetup(
        orientation = Landscape,
        paperSize = A4,
        scale = 80,
        margins = Some(PageMargins(0.5, 0.5, 0.6, 0.6))
      )

      val sheet = Sheet.enhanced("TestSheet")(testRows).setPageSetup(pageSetup)

      sheet.config.pageSetup must beSome(pageSetup)
    }

    "support print area and auto filter" in new EnhancedSheetScope {
      val printArea = CellRange("TestSheet", 0, 0, 9, 5)
      val autoFilter = CellRange("TestSheet", 0, 0, 0, 5)

      val sheet = Sheet
        .enhanced("TestSheet")(testRows)
        .setPrintArea(printArea)
        .setAutoFilter(autoFilter)

      sheet.config.printArea must beSome(printArea)
      sheet.config.autoFilter must beSome(autoFilter)
    }

    "support zoom level" in new EnhancedSheetScope {
      val sheet = Sheet.enhanced("TestSheet")(testRows).setZoom(150)

      sheet.config.zoom must beSome(150)
    }

    "chain multiple operations" in new EnhancedSheetScope {
      val sheet = Sheet
        .enhanced("TestSheet")(testRows)
        .freeze(FreezePane(1, 1))
        .setColumnWidth(0, 25)
        .setRowHeight(0, 20)
        .hideColumn(3)
        .groupRows(2, 5)
        .setZoom(120)

      sheet.config.frozenPane must beSome(FreezePane(1, 1))
      sheet.config.columnWidths(0) must beEqualTo(25)
      sheet.config.rowHeights(0) must beEqualTo(20)
      sheet.config.hiddenColumns must contain(3)
      sheet.config.rowGroups must contain(RowGroup(2, 5))
      sheet.config.zoom must beSome(120)
    }
  }

  "SheetConfig supporting classes" should {
    "create FreezePane correctly" in {
      val freezePane = FreezePane(2, 3, 1, 2)

      freezePane.colSplit must beEqualTo(2)
      freezePane.rowSplit must beEqualTo(3)
      freezePane.leftmostColumn must beEqualTo(1)
      freezePane.topRow must beEqualTo(2)
    }

    "create SplitPane correctly" in {
      val splitPane = SplitPane(100, 200, 50, 75)

      splitPane.xSplitPos must beEqualTo(100)
      splitPane.ySplitPos must beEqualTo(200)
      splitPane.leftmostColumn must beEqualTo(50)
      splitPane.topRow must beEqualTo(75)
    }

    "create RowGroup and ColumnGroup" in {
      val rowGroup = RowGroup(2, 5, collapsed = true)
      val columnGroup = ColumnGroup(1, 3, collapsed = false)

      rowGroup.startRow must beEqualTo(2)
      rowGroup.endRow must beEqualTo(5)
      rowGroup.collapsed must beTrue

      columnGroup.startCol must beEqualTo(1)
      columnGroup.endCol must beEqualTo(3)
      columnGroup.collapsed must beFalse
    }

    "create Header and Footer" in {
      val header = Header(Some("Left"), Some("Center"), Some("Right"))
      val footer = Footer(Some("Footer Left"), None, Some("Footer Right"))

      header.left must beSome("Left")
      header.center must beSome("Center")
      header.right must beSome("Right")

      footer.left must beSome("Footer Left")
      footer.center must beNone
      footer.right must beSome("Footer Right")
    }

    "create PageSetup with all options" in {
      val margins = PageMargins(0.8, 0.8, 1.0, 1.0, 0.4, 0.4)
      val fitToPage = FitToPage(1, 2)
      val pageSetup = PageSetup(
        orientation = Portrait,
        paperSize = Letter,
        scale = 75,
        fitToPage = Some(fitToPage),
        margins = Some(margins)
      )

      pageSetup.orientation must beEqualTo(Portrait)
      pageSetup.paperSize must beEqualTo(Letter)
      pageSetup.scale must beEqualTo(75)
      pageSetup.fitToPage must beSome(fitToPage)
      pageSetup.margins must beSome(margins)
    }
  }

  "PageOrientation and PaperSize enums" should {
    "provide all standard options" in {
      val orientations = List(Portrait, Landscape)
      val paperSizes = List(A4, A3, Letter, Legal)

      orientations.size must beEqualTo(2)
      paperSizes.size must beEqualTo(4)
    }
  }

  trait EnhancedSheetScope extends Scope {
    val testRows = Set(
      Row(0)(Set(StringCell(0, "Header1"), StringCell(1, "Header2"), StringCell(2, "Header3"))),
      Row(1)(Set(StringCell(0, "Data1"), NumericCell(1, 100.0), BooleanCell(2, true))),
      Row(2)(Set(StringCell(0, "Data2"), NumericCell(1, 200.0), BooleanCell(2, false)))
    )
  }
}
