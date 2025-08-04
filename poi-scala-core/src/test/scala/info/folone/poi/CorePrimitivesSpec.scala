package info.folone.poi

import org.specs2.mutable._
import org.specs2.specification.Scope

class CorePrimitivesSpec extends Specification {

  "CellAddr" should {
    "create with correct properties" in {
      val addr = CellAddr("Sheet1", 5, 10)

      addr.sheet must beEqualTo("Sheet1")
      addr.row must beEqualTo(5)
      addr.col must beEqualTo(10)
    }

    "support equality" in {
      val addr1 = CellAddr("Sheet1", 0, 0)
      val addr2 = CellAddr("Sheet1", 0, 0)
      val addr3 = CellAddr("Sheet2", 0, 0)
      val addr4 = CellAddr("Sheet1", 1, 0)
      val addr5 = CellAddr("Sheet1", 0, 1)

      addr1 must beEqualTo(addr2)
      addr1 must not(beEqualTo(addr3))
      addr1 must not(beEqualTo(addr4))
      addr1 must not(beEqualTo(addr5))
    }

    "have consistent hashCode" in {
      val addr1 = CellAddr("Sheet1", 2, 3)
      val addr2 = CellAddr("Sheet1", 2, 3)

      addr1.hashCode must beEqualTo(addr2.hashCode)
    }

    "work as map keys" in {
      val addr1 = CellAddr("Sheet1", 0, 0)
      val addr2 = CellAddr("Sheet1", 0, 1)
      val addr3 = CellAddr("Sheet1", 0, 0) // Same as addr1

      val map = Map(
        addr1 -> "A1",
        addr2 -> "B1"
      )

      map must haveSize(2)
      map(addr1) must beEqualTo("A1")
      map(addr2) must beEqualTo("B1")
      map(addr3) must beEqualTo("A1") // Should find same value as addr1
    }
  }

  "CellRange functionality" should {
    "create range with coordinates" in {
      val range = CellRange("Sheet1", 0, 0, 5, 3)

      range.sheetName must beEqualTo("Sheet1")
      range.startRow must beEqualTo(0)
      range.startCol must beEqualTo(0)
      range.endRow must beEqualTo(5)
      range.endCol must beEqualTo(3)
    }

    "generate correct cell reference" in {
      val range = CellRange("Sheet1", 0, 0, 2, 2)
      range.cellReference must beEqualTo("A1:C3")
    }

    "generate cell range address" in {
      val range = CellRange("Sheet1", 1, 1, 3, 3)
      range.toCellRangeAddress must beEqualTo("Sheet1!B2:D4")
    }

    "provide sheet name" in {
      val range = CellRange("TestSheet", 0, 0, 1, 1)
      range.sheet must beEqualTo("TestSheet")
    }

    "parse cell reference string" in {
      val range = CellRange("Sheet1", "B2:D4")

      range.sheetName must beEqualTo("Sheet1")
      range.startRow must beEqualTo(1) // B2 -> row 1 (0-based)
      range.startCol must beEqualTo(1) // B2 -> col 1 (0-based)
      range.endRow must beEqualTo(3) // D4 -> row 3 (0-based)
      range.endCol must beEqualTo(3) // D4 -> col 3 (0-based)
    }

    "handle single cell reference" in {
      val range = CellRange("Sheet1", "A1:A1")

      range.startRow must beEqualTo(0)
      range.startCol must beEqualTo(0)
      range.endRow must beEqualTo(0)
      range.endCol must beEqualTo(0)
    }

    "convert column letters correctly" in {
      // Test column letter conversion through cell references
      val rangeA = CellRange("Sheet1", "A1:A1")
      rangeA.startCol must beEqualTo(0)

      val rangeZ = CellRange("Sheet1", "Z1:Z1")
      rangeZ.startCol must beEqualTo(25)

      val rangeAA = CellRange("Sheet1", "AA1:AA1")
      rangeAA.startCol must beEqualTo(26)
    }

    "handle large ranges" in {
      val range = CellRange("Data", 0, 0, 999, 25) // A1:Z1000

      range.startRow must beEqualTo(0)
      range.endRow must beEqualTo(999)
      range.startCol must beEqualTo(0)
      range.endCol must beEqualTo(25)
    }
  }

  "Page setup enums" should {
    "provide orientation options" in {
      val portrait: PageOrientation = Portrait
      val landscape: PageOrientation = Landscape

      portrait must not(beEqualTo(landscape))
    }

    "provide paper size options" in {
      val sizes = List(A4, A3, A5, Letter, Legal, Tabloid)

      sizes must haveSize(6)
      sizes.distinct must haveSize(6) // All should be unique
    }
  }

  "Supporting case classes" should {
    "create FreezePane correctly" in {
      val freeze1 = FreezePane(2, 1)
      freeze1.colSplit must beEqualTo(2)
      freeze1.rowSplit must beEqualTo(1)
      freeze1.leftmostColumn must beEqualTo(0) // default
      freeze1.topRow must beEqualTo(0) // default

      val freeze2 = FreezePane(3, 2, 1, 1)
      freeze2.colSplit must beEqualTo(3)
      freeze2.rowSplit must beEqualTo(2)
      freeze2.leftmostColumn must beEqualTo(1)
      freeze2.topRow must beEqualTo(1)
    }

    "create SplitPane correctly" in {
      val split1 = SplitPane(100, 200)
      split1.xSplitPos must beEqualTo(100)
      split1.ySplitPos must beEqualTo(200)
      split1.leftmostColumn must beEqualTo(0) // default
      split1.topRow must beEqualTo(0) // default

      val split2 = SplitPane(150, 250, 2, 3)
      split2.xSplitPos must beEqualTo(150)
      split2.ySplitPos must beEqualTo(250)
      split2.leftmostColumn must beEqualTo(2)
      split2.topRow must beEqualTo(3)
    }

    "create RowGroup and ColumnGroup correctly" in {
      val rowGroup1 = RowGroup(2, 5)
      rowGroup1.startRow must beEqualTo(2)
      rowGroup1.endRow must beEqualTo(5)
      rowGroup1.collapsed must beFalse // default

      val rowGroup2 = RowGroup(1, 3, collapsed = true)
      rowGroup2.collapsed must beTrue

      val colGroup = ColumnGroup(0, 2, collapsed = true)
      colGroup.startCol must beEqualTo(0)
      colGroup.endCol must beEqualTo(2)
      colGroup.collapsed must beTrue
    }

    "create Header and Footer correctly" in {
      val header1 = Header()
      header1.left must beNone
      header1.center must beNone
      header1.right must beNone

      val header2 = Header(
        left = Some("Left Header"),
        center = Some("Center"),
        right = Some("Right")
      )
      header2.left must beSome("Left Header")
      header2.center must beSome("Center")
      header2.right must beSome("Right")

      val footer = Footer(
        left = Some("Footer"),
        center = None,
        right = Some("Page &P")
      )
      footer.left must beSome("Footer")
      footer.center must beNone
      footer.right must beSome("Page &P")
    }

    "create PageMargins correctly" in {
      val margins1 = PageMargins(0.8, 0.8, 1.0, 1.0)
      margins1.left must beEqualTo(0.8)
      margins1.right must beEqualTo(0.8)
      margins1.top must beEqualTo(1.0)
      margins1.bottom must beEqualTo(1.0)
      margins1.header must beEqualTo(0.3) // default
      margins1.footer must beEqualTo(0.3) // default

      val margins2 = PageMargins(0.5, 0.5, 0.7, 0.7, 0.2, 0.2)
      margins2.header must beEqualTo(0.2)
      margins2.footer must beEqualTo(0.2)
    }

    "create FitToPage correctly" in {
      val fitToPage = FitToPage(1, 2)
      fitToPage.width must beEqualTo(1)
      fitToPage.height must beEqualTo(2)
    }

    "create PageSetup with all options" in {
      val margins = PageMargins(0.8, 0.8, 1.0, 1.0)
      val fitToPage = FitToPage(1, 1)

      val pageSetup = PageSetup(
        orientation = Landscape,
        paperSize = Letter,
        scale = 75,
        fitToPage = Some(fitToPage),
        margins = Some(margins)
      )

      pageSetup.orientation must beEqualTo(Landscape)
      pageSetup.paperSize must beEqualTo(Letter)
      pageSetup.scale must beEqualTo(75)
      pageSetup.fitToPage must beSome(fitToPage)
      pageSetup.margins must beSome(margins)
    }
  }
}
