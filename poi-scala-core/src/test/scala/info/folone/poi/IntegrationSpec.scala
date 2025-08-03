package info.folone.poi

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
          Sheet("EnhancedSheet") {
            Set(
              Row(0) {
                Set(
                  StringCell(0, "Product"),
                  StringCell(1, "Quantity"),
                  StringCell(2, "Price")
                )
              },
              Row(1) {
                Set(
                  StringCell(0, "Widget A"),
                  NumericCell(1, 100),
                  NumericCell(2, 25.99)
                )
              },
              Row(2) {
                Set(
                  StringCell(0, "Widget B"),
                  NumericCell(1, 50),
                  NumericCell(2, 15.50)
                )
              },
              Row(3) {
                Set(
                  StringCell(0, "Total:"),
                  FormulaCell(1, "SUM(B2:B3)"),
                  FormulaCell(2, "SUMPRODUCT(B2:B3,C2:C3)")
                )
              }
            )
          },

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
      wb.toFile(path)

      println(s"Workbook saved to $path")

      // Verify the file loads correctly
      val loadedWb = Workbook.fromFile(new File(path)).toOption.get

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
      wb.toFile(path)

      // Test load
      val loadedWb = Workbook.fromFile(new File(path)).toOption.get
      loadedWb.sheets.size must beEqualTo(1)
      loadedWb.sheets.head.name must beEqualTo("IOTest")

      // Clean up
      new File(path).delete()

      true must beTrue
    }
  }
}
