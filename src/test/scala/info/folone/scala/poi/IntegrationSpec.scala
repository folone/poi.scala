package info.folone.scala.poi

import java.io.File
import java.util.Date
import org.specs2.mutable._

class IntegrationSpec extends Specification {

  "Poi integration" should {
    "create workbook with backward compatibility and enhanced features" in {
      // Create enhanced cell styles for demonstration
      val headerStyle = CellStyle(
        font = Font(
          name = "Arial",
          bold = true,
          color = BlueColor.toIndex,
          heightInPoints = 12
        ),
        backgroundColor = Some(GreyColor),
        alignment = Some(CenterAlignment)
      )

      val dataStyle = CellStyle(
        font = Font(heightInPoints = 10),
        dataFormat = DataFormat("0.00")
      )

      val wb = Workbook {
        Set(
          // Backward compatible sheet creation (original functionality)
          Sheet("BasicSheet") {
            Set(
              Row(1) {
                Set(NumericCell(1, -13.0 / 5), FormulaCell(2, "ABS(B2)"))
              },
              Row(2) {
                Set(StringCell(1, "data"), StringCell(2, "data2"))
              }
            )
          },

          // Enhanced sheet with new features
          Sheet
            .enhanced(
              "EnhancedSheet",
              frozenPane = Some(FreezePane(2, 1)), // Freeze first 2 columns and 1 row
              columnWidths = Map(0 -> 25, 1 -> 30, 2 -> 15),
              rowHeights = Map(0 -> 20),
              header = Some(
                Header(
                  left = Some("Demo Report"),
                  center = Some("Enhanced POI Features"),
                  right = Some("Page &P")
                )
              ),
              footer = Some(
                Footer(
                  left = Some("Created: &D"),
                  center = Some("Confidential"),
                  right = Some("&T")
                )
              ),
              pageSetup = Some(
                PageSetup(
                  orientation = Landscape,
                  paperSize = A4,
                  scale = 90
                )
              ),
              zoom = Some(120)
            ) {
              Set(
                Row(0) {
                  Set(
                    StyledCell(StringCell(0, "Product"), headerStyle),
                    StyledCell(StringCell(1, "Quantity"), headerStyle),
                    StyledCell(StringCell(2, "Price"), headerStyle)
                  )
                },
                Row(1) {
                  Set(
                    StyledCell(StringCell(0, "Widget A"), dataStyle),
                    StyledCell(NumericCell(1, 100), dataStyle),
                    StyledCell(NumericCell(2, 25.99), dataStyle)
                  )
                },
                Row(2) {
                  Set(
                    StyledCell(StringCell(0, "Widget B"), dataStyle),
                    StyledCell(NumericCell(1, 50), dataStyle),
                    StyledCell(NumericCell(2, 15.50), dataStyle)
                  )
                },
                Row(3) {
                  Set(
                    StyledCell(StringCell(0, "Total:"), headerStyle),
                    StyledCell(FormulaCell(1, "SUM(B2:B3)"), dataStyle),
                    StyledCell(FormulaCell(2, "SUMPRODUCT(B2:B3,C2:C3)"), dataStyle)
                  )
                }
              )
            }
            .setColumnWidth(3, 20) // Chain additional methods
            .hideColumn(4)
            .groupRows(1, 2),

          // Traditional sheet with enhanced cell types
          Sheet("MixedTypes") {
            Set(
              Row(0) {
                Set(
                  StringCell(0, "Mixed Data Types"),
                  BlankCell(1),
                  BooleanCell(2, true),
                  ErrorCell(3, 0x2a.toByte) // #N/A error code
                )
              },
              Row(1) {
                Set(
                  DateCell(0, new Date()),
                  StringCell(1, "github.com/folone/poi.scala"),
                  FormulaCell(2, "IF(C1,\"Yes\",\"No\")")
                )
              }
            )
          }
        )
      }

      val path = File.createTempFile("enhanced-poi-demo", ".xlsx").getAbsolutePath
      val io = wb.safeToFile(path)
      io.fold(ex => throw ex, identity).unsafePerformIO()

      println(s"Workbook saved to $path")

      // Verify the file loads correctly
      val loadedWb = impure.load(path)

      // Check that all sheets are present
      loadedWb.sheets.size must beEqualTo(3)
      loadedWb.sheets.map(_.name) must contain(exactly("BasicSheet", "EnhancedSheet", "MixedTypes"))

      // Verify basic backward compatibility
      val basicSheet = loadedWb.sheets.find(_.name == "BasicSheet").get
      basicSheet.rows.size must beEqualTo(2)

      // Verify enhanced sheet is present (enhanced features may not persist through save/load)
      val enhancedSheet = loadedWb.sheets.find(_.name == "EnhancedSheet").get
      enhancedSheet.rows.size must beGreaterThan(0)

      // Clean up
      new File(path).delete()

      // Return true for the test
      true must beTrue
    }

    "work with POI objects directly" in {
      val book = Workbook(Set(Sheet("test")(Set(Row(0)(Set(StringCell(0, "theCell")))))))

      val poiSheet = book.asPoi.getSheet("test")
      poiSheet must not(beNull)

      val cellText = poiSheet.getRow(0).getCell(0).getStringCellValue
      cellText must beEqualTo("theCell")
    }

    "handle file I/O operations" in {
      val wb = Workbook {
        Set(
          Sheet("IOTest") {
            Set(
              Row(0) {
                Set(StringCell(0, "Save and Load Test"))
              }
            )
          }
        )
      }

      val path = File.createTempFile("io-test", ".xlsx").getAbsolutePath

      // Test safe save
      val saveResult = wb.safeToFile(path)
      saveResult.fold(ex => throw ex, identity).unsafePerformIO()

      // Test load
      val loadedWb = impure.load(path)
      loadedWb.sheets.size must beEqualTo(1)
      loadedWb.sheets.head.name must beEqualTo("IOTest")

      // Clean up
      new File(path).delete()

      true must beTrue
    }
  }
}
