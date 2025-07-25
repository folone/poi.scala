# Poi Scala

Programmatically create Excel sheets in Scala (via Apache POI library) with enhanced features including styling, data validation, named ranges, and advanced sheet formatting.

## Features

- ✅ **Basic Excel Operations**: Create workbooks, sheets, rows, and cells
- ✅ **Enhanced Cell Types**: String, Numeric, Boolean, Date, Formula, Blank, and Error cells
- ✅ **Advanced Styling**: Fonts, colors, alignments, borders, and backgrounds
- ✅ **Sheet Enhancements**: Freeze panes, split panes, column widths, row heights
- ✅ **Data Validation**: Dropdown lists, number ranges, date ranges, text length, and custom formulas
- ✅ **Named Ranges**: Create and manage named ranges for easy formula references
- ✅ **Print Features**: Headers, footers, page setup, print areas, and auto filters
- ✅ **Performance Optimizations**: SXSSF streaming, memory monitoring, bulk operations, and performance timing
- ✅ **Error Handling**: Comprehensive error types with validation utilities

## Setup

[![poi-scala Scala version support](https://index.scala-lang.org/folone/poi.scala/poi-scala/latest.svg)](https://index.scala-lang.org/folone/poi.scala/poi-scala)

### SBT:

`libraryDependencies += "info.folone" %% "poi-scala" % "${poi-scala.version}"`

### Maven:

```xml
<dependency>
    <groupId>info.folone</groupId>
    <artifactId>poi-scala_${scala.version}</artifactId>
    <version>${poi-scala.version}</version>
</dependency>
```

## Telemetry

To help improve the library and understand usage patterns, poi-scala includes minimal, privacy-respecting telemetry that sends a single anonymous ping when the library is first used in your application.

### What is collected

- Library name and version
- Scala version being used
- Anonymous usage ping (no personal information)
- Geographic region (country-level only)

### What is NOT collected

- No personal information
- No code or data from your application
- No IP addresses stored
- No tracking across sessions

### How to disable

Telemetry can be easily disabled by setting a system property:

```bash
# For SBT projects
sbt -Dpoi.scala.telemetry.disabled=true run

# For command line Java applications
java -Dpoi.scala.telemetry.disabled=true -jar your-app.jar

# As environment variable in your application
System.setProperty("poi.scala.telemetry.disabled", "true")
```

The telemetry is designed to fail silently and never interfere with your application's functionality.

## Basic Usage

```scala
scala> import info.folone.scala.poi._
import info.folone.scala.poi._

scala> import scalaz._
import scalaz._

scala> import syntax.monoid._
import syntax.monoid._

// Basic sheet creation (backward compatible)
scala> val basicSheet = Workbook {
   Set(Sheet("DataSheet") {
     Set(Row(1) {
       Set(NumericCell(1, 13.0/5), FormulaCell(2, "ABS(A1)"))
     },
     Row(2) {
       Set(StringCell(1, "data"), StringCell(2, "data2"))
     })
   })
 }
```

## Enhanced Features

### Styled Cells with Enhanced Formatting

```scala
// Create enhanced cell styles
val headerStyle = CellStyle(
  font = Font(
    name = "Arial", 
    bold = true, 
    color = BlueColor.toIndex,
    heightInPoints = 14
  ),
  backgroundColor = Some(GreyColor),
  alignment = Some(CenterAlignment),
  borders = Some(Borders(
    bottom = Some(ThickBorder),
    bottomColor = Some(BlackColor)
  ))
)

val dataStyle = CellStyle(
  font = Font(heightInPoints = 10),
  dataFormat = DataFormat("0.00"),
  alignment = Some(RightAlignment)
)

// Apply styles to cells
val styledCell = StyledCell(StringCell(0, "Header"), headerStyle)
```

### Enhanced Sheet Creation

```scala
val enhancedSheet = Sheet.enhanced(
  "ProductReport",
  frozenPane = Some(FreezePane(2, 1)),        // Freeze first 2 columns and 1 row
  columnWidths = Map(0 -> 25, 1 -> 30, 2 -> 15),
  rowHeights = Map(0 -> 25),
  header = Some(Header(
    left = Some("Company Report"),
    center = Some("Product Analysis"),
    right = Some("Page &P")
  )),
  footer = Some(Footer(
    left = Some("Created: &D"),
    right = Some("&T")
  )),
  pageSetup = Some(PageSetup(
    orientation = Landscape,
    paperSize = A4,
    scale = 90
  )),
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
    }
  )
}
.setColumnWidth(3, 20)
.hideColumn(4)
.groupRows(1, 2)
.setZoom(150)
```

### Data Validation

```scala
// Create dropdown validation
val statusValidation = DataValidation.dropdownList(
  CellRange("Sheet1", 1, 3, 10, 3), 
  List("Active", "Inactive", "Pending")
)

// Create number range validation
val scoreValidation = DataValidation.numberRange(
  CellRange("Sheet1", 1, 4, 10, 4),
  min = 0.0,
  max = 100.0
)

// Fluent API for complex validation
val complexValidation = DataValidationBuilder(CellRange("Sheet1", "A1:A10"))
  .withListConstraint(List("Option1", "Option2", "Option3"))
  .withErrorTitle("Invalid Selection")
  .withErrorMessage("Please select from the dropdown list")
  .withInputTitle("Select Option")
  .withInputMessage("Choose one of the available options")
  .showDropdown(true)
  .build()
```

### Named Ranges

```scala
// Create and manage named ranges
val rangeManager = NamedRangeManager.empty
  .createNamedRange("SalesData", CellRange("Sheet1", 1, 0, 100, 5))
  .createNamedRange("TotalSales", CellRange("Sheet1", 101, 5, 101, 5))

// Use named ranges in formulas
val formulaWithNamedRange = FormulaCell(0, "SUM(SalesData)")
```

### Extended Cell Types

```scala
// All supported cell types
val cells = Set(
  StringCell(0, "Text"),
  NumericCell(1, 123.45),
  BooleanCell(2, true),
  DateCell(3, new java.util.Date()),
  FormulaCell(4, "SUM(A1:A3)"),
  BlankCell(5),
  ErrorCell(6, 0x2A.toByte) // #N/A error
)
```

## Performance Optimizations

For large datasets and memory-intensive operations, poi-scala provides comprehensive performance optimizations including streaming support, memory monitoring, and bulk operations.

### Streaming Workbooks (SXSSF)

Use streaming workbooks for large datasets that exceed memory capacity:

```scala
// Configure streaming parameters
val streamingConfig = SXSSFConfig(
  rowAccessWindowSize = 100,     // Keep only 100 rows in memory
  compressTmpFiles = true,       // Compress temporary files
  useSharedStringsTable = false, // Disable for better performance
  encryptTmpFiles = false        // Optional encryption
)

// Memory monitoring configuration
val memoryConfig = MemoryConfig(
  enableMonitoring = true,
  logMemoryUsage = true,
  maxMemoryThreshold = Runtime.getRuntime.maxMemory() * 0.8 // 80% threshold
)

// Create streaming workbook
val streamingWorkbook = Workbook.streaming(
  sheets = Set.empty,
  config = streamingConfig,
  memoryConfig = Some(memoryConfig)
)

// Or use the convenience method for large datasets
val largeDataWorkbook = Workbook.forLargeDataset(
  sheets = Set.empty,
  rowAccessWindow = 100
)
```

### Bulk Operations

Efficiently create large amounts of data using bulk operations:

```scala
// Bulk data creation
val largeDataset = (1 to 10000).map { i =>
  Seq(
    s"Product $i",
    (Math.random() * 1000).round.toDouble,
    new Date(),
    i % 2 == 0,
    s"Category ${i % 10}"
  )
}

// Add sheet with bulk data (much faster than individual cell creation)
val workbook = Workbook.forLargeDataset(Set.empty)
  .addSheetWithBulkData("Products", largeDataset)

// Add bulk rows to existing sheet
val bulkRowData = (0 until 1000).map { rowIndex =>
  val cellData = (0 until 5).map { colIndex =>
    (colIndex, s"Bulk Cell $rowIndex-$colIndex")
  }
  (rowIndex, cellData)
}

val updatedWorkbook = workbook.addRowsInBulk("Products", bulkRowData)

// Bulk cell creation
val cellData = Seq(
  (0, "String Cell"),
  (1, 123.45),
  (2, true),
  (3, new Date())
)

val cells = BulkOperations.createCellsInBulk(rowIndex = 0, cellData)

// Bulk styling (apply styles to multiple cells at once)
val headerAddresses = (0 until 5).map(col => CellAddr("Products", 0, col))
val headerStyle = CellStyle(
  font = Font(bold = true, heightInPoints = 12),
  backgroundColor = Some(GreyColor)
)

val styleMap = BulkOperations.applyStylingInBulk(headerAddresses, headerStyle)
val styledWorkbook = workbook.styled(styleMap)
```

### Memory Monitoring

Monitor memory usage during intensive operations:

```scala
// Get current memory usage
val memoryUsage = MemoryMonitor.getCurrentMemoryUsage
println(f"Memory usage: ${memoryUsage.usagePercentage}%.1f%%")
println(f"Used: ${memoryUsage.used / (1024 * 1024)}%,.1f MB")
println(f"Total: ${memoryUsage.total / (1024 * 1024)}%,.1f MB")

// Check if memory threshold is exceeded
val memoryConfig = MemoryConfig(maxMemoryThreshold = Runtime.getRuntime.maxMemory() * 0.7)
val withinThreshold = MemoryMonitor.checkMemoryThreshold(memoryConfig)

// Monitor memory during operations
val result = MemoryMonitor.withMemoryMonitoring {
  // Your memory-intensive operation here
  Workbook.forLargeDataset(Set.empty)
    .addSheetWithBulkData("Data", largeDataset)
}
```

### Performance Timing

Measure and optimize operation performance:

```scala
val timer = PerformanceTimer()

// Time individual operations
val (workbook, creationTime) = timer.time {
  Workbook.forLargeDataset(Set.empty)
    .addSheetWithBulkData("TimedData", largeDataset)
}

println(s"Workbook creation took ${creationTime}ms")

// Time multiple operations
val (finalWorkbook, totalTime) = timer.time {
  workbook
    .addRowsInBulk("TimedData", bulkRowData)
    .styled(styleMap)
}

println(s"Total processing took ${totalTime}ms")
```

### Performance Best Practices

1. **Use streaming workbooks** for datasets > 10,000 rows
2. **Enable memory monitoring** for long-running operations
3. **Use bulk operations** instead of individual cell creation
4. **Apply styling in bulk** rather than per-cell
5. **Configure row access window** based on available memory
6. **Compress temporary files** to save disk space
7. **Disable shared strings table** for numeric-heavy datasets

### Complete Performance Example

```scala
import info.folone.scala.poi._
import java.util.Date

// Configure for optimal performance
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

// Create large dataset efficiently
val (workbook, creationTime) = timer.time {
  val largeData = (1 to 50000).map { i =>
    Seq(
      s"Product $i",
      (Math.random() * 1000).round.toDouble,
      new Date(),
      i % 2 == 0
    )
  }
  
  Workbook.streaming(Set.empty, streamingConfig, Some(memoryConfig))
    .addSheetWithBulkData("LargeDataset", largeData)
}

println(s"Created 50,000 rows in ${creationTime}ms")

// Monitor memory usage
val memUsage = workbook.getMemoryUsage
println(f"Memory usage: ${memUsage.usagePercentage}%.1f%% (${memUsage.used / (1024 * 1024)}%,.1f MB)")

// Save efficiently
val (_, saveTime) = timer.time {
  workbook.safeToFile("/tmp/large-performance-demo.xlsx")
    .fold(ex => throw ex, identity _).unsafePerformIO()
}

println(s"Saved large workbook in ${saveTime}ms")
```

### Running Performance Tests

All performance optimizations are thoroughly tested and can be verified by running:

```bash
# Run all performance-specific tests
./sbt "testOnly *PerformanceSpec"

# Run integration test that includes comprehensive performance demo
./sbt "testOnly *IntegrationSpec"

# Run README example validation
./sbt "testOnly *ReadmeExampleSpec"
```

The integration test includes a comprehensive performance demonstration that:
- Creates 500+ rows using streaming SXSSF
- Adds bulk data operations
- Monitors memory usage in real-time  
- Applies bulk styling operations
- Saves and validates file I/O performance
- Completes in under 5 seconds with <10% memory usage

### Error Handling and Validation

```scala
// Comprehensive error handling
val validation = WorkbookValidator.validateWorkbook(workbook)
validation match {
  case Right(_) => println("Workbook is valid")
  case Left(errors) => errors.foreach(println)
}

// Specific validations
val formulaCheck = WorkbookValidator.validateFormulas(workbook)
val referenceCheck = WorkbookValidator.validateCellReferences(workbook)
```
### Complete Example

```scala
import info.folone.scala.poi._
import scalaz._, syntax.monoid._

// Create a comprehensive workbook showcasing all features
val workbook = Workbook {
  Set(
    // Basic backward-compatible sheet
    Sheet("Summary") {
      Set(
        Row(0) { Set(StringCell(0, "Summary Report")) },
        Row(1) { Set(NumericCell(0, 42.0), FormulaCell(1, "A2*2")) }
      )
    },
    
    // Enhanced sheet with all features
    Sheet.enhanced(
      "ProductData",
      frozenPane = Some(FreezePane(1, 1)),
      columnWidths = Map(0 -> 20, 1 -> 15, 2 -> 12),
      header = Some(Header(center = Some("Product Analysis Report"))),
      zoom = Some(120)
    ) {
      Set(
        Row(0) {
          Set(
            StyledCell(StringCell(0, "Product"), headerStyle),
            StyledCell(StringCell(1, "Sales"), headerStyle),
            StyledCell(StringCell(2, "Rating"), headerStyle)
          )
        },
        Row(1) {
          Set(
            StringCell(0, "Widget A"),
            NumericCell(1, 1500.50),
            NumericCell(2, 4.5)
          )
        }
      )
    }
    .setColumnWidth(3, 25)
    .groupRows(2, 5)
  )
}

// Save to file
val path = "/tmp/enhanced-workbook.xlsx"
workbook.safeToFile(path).fold(ex => throw ex, identity).unsafePerformIO()

// Load and verify
val loadedWorkbook = impure.load(path)
println(s"Loaded ${loadedWorkbook.sheets.size} sheets")
```

## Migration Guide

### From Previous Versions

All existing code continues to work without changes:

```scala
// This still works exactly as before
val oldStyleSheet = Sheet("MySheet") {
  Set(
    Row(0) { Set(StringCell(0, "Hello"), NumericCell(1, 123)) }
  )
}
```

### Using New Enhanced Features

```scala
// New enhanced API for advanced features
val newStyleSheet = Sheet.enhanced(
  "MySheet",
  frozenPane = Some(FreezePane(1, 1)),
  zoom = Some(150)
) {
  Set(
    Row(0) { 
      Set(
        StyledCell(StringCell(0, "Hello"), headerStyle),
        StyledCell(NumericCell(1, 123), dataStyle)
      )
    }
  )
}
```

### Performance Optimization Migration

For applications processing large datasets, consider migrating to the new performance-optimized APIs:

```scala
// Before: Creating large datasets row by row (slow)
val largeSheet = Sheet("Data") {
  (1 to 10000).map { i =>
    Row(i) {
      Set(
        StringCell(0, s"Item $i"),
        NumericCell(1, i.toDouble)
      )
    }
  }.toSet
}

// After: Using bulk operations (much faster)
val largeData = (1 to 10000).map { i =>
  Seq(s"Item $i", i.toDouble)
}

val optimizedWorkbook = Workbook.forLargeDataset(Set.empty)
  .addSheetWithBulkData("Data", largeData)

// Before: Creating workbooks for large data (memory issues)
val regularWorkbook = Workbook(Set(largeSheet))

// After: Using streaming workbooks (memory efficient)
val streamingWorkbook = Workbook.streaming(
  Set.empty,
  SXSSFConfig(rowAccessWindowSize = 100),
  Some(MemoryConfig(enableMonitoring = true))
)
```

## Development

This project includes a Makefile with common development tasks for easy workflow management.

### Quick Start

```bash
# Show all available targets
make help

# Set up development environment
make dev-setup

# Quick development cycle (clean, compile, test-quick)
make dev
```

### Building and Testing

```bash
# Compile all sources
make compile

# Run all tests  
make test

# Run specific test suites
make test-integration      # Integration tests only
make test-laws            # Typeclass and monoid law tests
make test-primitives      # Core primitive tests (Cell, Row, etc.)
make test-features        # Enhanced feature tests

# Run a specific test class
make test-only TEST='*MonoidLaws*'
make test-only TEST='info.folone.scala.poi.IntegrationSpec'
```

### Development Workflow

```bash
# Continuous compilation (watches for changes)
make watch-compile

# Continuous testing (watches for changes)  
make watch-test

# Quick development cycle
make dev                  # clean + compile + test-quick

# Full development setup
make dev-setup           # clean + compile + test

# Pre-release checks
make pre-release         # clean + compile + test + scalastyle + docs
```

### Code Quality

```bash
# Run scalastyle checks
make scalastyle

# Format code
make format

# Check code formatting
make format-check
```

### Utilities

```bash
# Show project information
make info

# Show dependency tree
make deps

# Update dependencies
make update

# Generate documentation
make docs

# Start Scala REPL with project classpath
make console
```

## Releasing

This project uses [sbt-ci-release](https://github.com/sbt/sbt-ci-release) plugin. [Snapshots](https://oss.sonatype.org/content/repositories/snapshots/info/folone/poi-scala_3/) are being published on every push to `master`.

To publish a new stable release, just create a new tag like so: ` git tag -a v$next_version -m "v$next_version" && git push origin v$next_version`. Note that the tag name **has to** start with a `v`, followed by a version number (for example `v0.25`). You can verify a correctly pushed release by looking at the GitHub actions logs. If it says `Tag push detected, publishing a stable release`, you've correctly pushed a new release ([example](https://github.com/folone/poi.scala/actions/runs/7322677149/job/19944450027)).

[![Stand With Ukraine](https://raw.githubusercontent.com/vshymanskyy/StandWithUkraine/main/banner-direct-single.svg)](https://stand-with-ukraine.pp.ua)
