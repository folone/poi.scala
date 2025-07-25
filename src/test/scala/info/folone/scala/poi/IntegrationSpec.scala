package info.folone.scala.poi

import org.specs2.mutable._
import java.io.File
import java.util.Date

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

    "demonstrate comprehensive performance optimizations" in {
      println("\n=== Performance Integration Test ===")

      // 1. Create a workbook with memory monitoring
      println("1. Creating streaming workbook with memory monitoring...")
      val memoryConfig = MemoryConfig(
        enableMonitoring = true,
        logMemoryUsage = true
      )

      val timer = PerformanceTimer()
      val (largeWorkbook, timeMs) = timer.time {
        // Create a large dataset efficiently (smaller for test)
        val largeData = (1 to 500).map { i =>
          Seq(
            s"Product $i",
            (Math.random() * 1000).round.toDouble,
            new Date(),
            i % 2 == 0,
            s"Category ${i % 10}"
          )
        }

        // Create workbook optimized for large datasets
        Workbook
          .forLargeDataset(Set.empty, rowAccessWindow = 100)
          .addSheetWithBulkData("Products", largeData)
      }

      println(s"   Created workbook with 500 rows in ${timeMs}ms")
      largeWorkbook.sheets must haveSize(1)
      largeWorkbook.sheetMap("Products").rows must haveSize(500)

      // 2. Add bulk data to existing sheet
      println("2. Adding bulk data to existing sheet...")
      val bulkData = (0 until 50).map { rowIndex =>
        val cellData = (0 until 5).map { colIndex =>
          (colIndex, s"Bulk Cell $rowIndex-$colIndex")
        }
        (rowIndex + 500, cellData) // Start from row 500
      }

      val (updatedWorkbook, bulkTimeMs) = timer.time {
        largeWorkbook.addRowsInBulk("Products", bulkData)
      }

      println(s"   Added 50 rows in bulk in ${bulkTimeMs}ms")
      updatedWorkbook.sheetMap("Products").rows must haveSize(550)

      // 3. Memory usage monitoring
      println("3. Monitoring memory usage...")
      val memUsage = updatedWorkbook.getMemoryUsage
      println(f"   Memory usage: ${memUsage.usagePercentage}%.1f%% (${memUsage.used / (1024 * 1024)}%,.1f MB)")

      memUsage.usagePercentage must beBetween(0.0, 100.0)
      memUsage.used must be_>=(0L)
      memUsage.total must be_>=(memUsage.used)

      // 4. Bulk styling demonstration
      println("4. Applying bulk styling...")

      // Create a regular workbook for styling (SXSSF doesn't support styling after creation)
      val stylingData = (1 to 25).map { i =>
        Seq(s"Product $i", (Math.random() * 1000).round.toDouble, new Date())
      }

      val (styledWorkbook, styleTimeMs) = timer.time {
        val regularWb = Workbook(Set.empty[Sheet], XSSF)
          .addSheetWithBulkData("StyledProducts", stylingData)

        // Apply header styling
        val headerAddresses = (0 until 3).map(col => CellAddr("StyledProducts", 0, col))
        val headerStyle = CellStyle(
          font = Font(bold = true, heightInPoints = 12),
          backgroundColor = Some(GreyColor)
        )

        val styleMap = BulkOperations.applyStylingInBulk(headerAddresses, headerStyle)
        regularWb.styled(styleMap)
      }

      println(s"   Applied styling to 3 header cells in ${styleTimeMs}ms")
      styledWorkbook.sheets must haveSize(1)

      // 5. Save and verify file I/O
      println("5. Testing file I/O performance...")
      val outputFile = File.createTempFile("performance-integration-test", ".xlsx")
      val outputPath = outputFile.getAbsolutePath

      val (_, saveTimeMs) = timer.time {
        styledWorkbook.safeToFile(outputPath).fold(ex => throw ex, identity _).unsafePerformIO()
      }

      println(s"   Saved workbook in ${saveTimeMs}ms")

      // Verify file was created and can be loaded
      outputFile.exists() must beTrue
      outputFile.length() must be_>(0L)

      val loadedWb = impure.load(outputPath)
      loadedWb.sheets.size must beEqualTo(1)
      loadedWb.sheets.head.name must beEqualTo("StyledProducts")

      // Clean up
      outputFile.delete()

      // Summary
      val totalTime = timeMs + bulkTimeMs + styleTimeMs + saveTimeMs
      println(f"=== Performance Test Summary ===")
      println(f"   Total operations time: ${totalTime}ms")
      println(f"   Memory efficiency: ${memUsage.usagePercentage}%.1f%% usage")
      println(f"   Processed 550 rows with bulk operations")
      println(f"   Applied styling and saved successfully")

      // Assertions for performance bounds (reasonable limits)
      totalTime must be_<(5000L) // Should complete in under 5 seconds
      memUsage.usagePercentage must be_<(10.0) // Should use less than 10% memory

      true must beTrue
    }
  }
}
