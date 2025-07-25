package info.folone.scala.poi

import org.specs2.mutable._
import java.util.Date

class ReadmeExampleSpec extends Specification {
  
  "README Performance Examples" should {
    
    "work as documented in the README" in {
      // This example is taken directly from the README
      val streamingConfig = SXSSFConfig(
        rowAccessWindowSize = 100,
        compressTmpFiles = true,
        useSharedStringsTable = false
      )

      val memoryConfig = MemoryConfig(
        enableMonitoring = true,
        logMemoryUsage = true
      )

      val timer = PerformanceTimer()

      // Create large dataset efficiently (smaller for test)
      val (workbook, creationTime) = timer.time {
        val largeData = (1 to 100).map { i =>
          Seq(
            s"Product $i",
            (Math.random() * 1000).round.toDouble,
            new Date(),
            i % 2 == 0
          )
        }
        
        Workbook.streaming(Set.empty[Sheet], streamingConfig, Some(memoryConfig))
          .addSheetWithBulkData("LargeDataset", largeData)
      }

      // Verify results
      workbook.sheets must haveSize(1)
      creationTime must be_>=(0L)
      
      // Monitor memory usage (example from README)
      val memUsage = workbook.getMemoryUsage
      memUsage.usagePercentage must beBetween(0.0, 100.0)
      
      success
    }
    
    "demonstrate bulk operations as shown in README" in {
      // Bulk data creation example from README
      val largeDataset = (1 to 50).map { i =>
        Seq(
          s"Product $i",
          (Math.random() * 1000).round.toDouble,
          new Date(),
          i % 2 == 0,
          s"Category ${i % 10}"
        )
      }

      // Add sheet with bulk data (from README example)
      val workbook = Workbook.forLargeDataset(Set.empty)
        .addSheetWithBulkData("Products", largeDataset)

      workbook.sheets must haveSize(1)
      workbook.sheetMap("Products").rows must haveSize(50)
      
      // Bulk styling example from README
      val headerAddresses = (0 until 5).map(col => CellAddr("Products", 0, col))
      val headerStyle = CellStyle(
        font = Font(bold = true, heightInPoints = 12),
        backgroundColor = Some(GreyColor)
      )

      val styleMap = BulkOperations.applyStylingInBulk(headerAddresses, headerStyle)
      val styledWorkbook = workbook.styled(styleMap)
      
      styledWorkbook.sheets must haveSize(1)
      success
    }
  }
}
