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
- ✅ **Asynchronous Operations**: Future-based async operations, reactive streams, and backpressure handling
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

For large datasets and memory-intensive operations, poi-scala provides comprehensive performance optimizations including streaming support, and bulk operations.

### Streaming Workbooks (SXSSF)

Use streaming workbooks for large datasets that exceed memory capacity:

```scala
// Configure streaming parameters
val streamingConfig = SXSSF(
  rowAccessWindowSize = Some(100), // Keep only 100 rows in memory
  compressTmpFiles = true,         // Compress temporary files
  useSharedStringsTable = false,   // Disable for better performance
  encryptTmpFiles = false          // Optional encryption
)

// Create streaming workbook
val streamingWorkbook = Workbook.streaming(
  sheets = Set.empty,
  config = streamingConfig
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

### Performance Best Practices

1. **Use streaming workbooks** for datasets > 10,000 rows
2. **Use bulk operations** instead of individual cell creation
3. **Apply styling in bulk** rather than per-cell
4. **Configure row access window** based on available memory
5. **Compress temporary files** to save disk space
6. **Disable shared strings table** for numeric-heavy datasets

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

## Asynchronous and Reactive Operations

For applications requiring non-blocking Excel operations, poi-scala provides comprehensive asynchronous and reactive capabilities with Future-based operations, progressive building, reactive streams, and backpressure handling.

### Future-Based Async Operations

Create and manipulate workbooks asynchronously using Scala Futures:

```scala
import info.folone.scala.poi._
import info.folone.scala.poi.AsyncOperations._
import scala.concurrent.{Future, ExecutionContext}
import scala.concurrent.duration._

implicit val ec: ExecutionContext = ExecutionContext.global

// Create workbook asynchronously
val sheets = Set(
  Sheet("AsyncSheet")(Set(
    Row(0)(Set(StringCell(0, "Async Data")))
  ))
)

val futureWorkbook: Future[Workbook] = createWorkbookAsync(sheets, XSSF)

// Create workbook with bulk data asynchronously
val data = Seq(
  Seq("Name", "Age", "City"),
  Seq("Alice", 30, "New York"),
  Seq("Bob", 25, "London"),
  Seq("Charlie", 35, "Tokyo")
)

val bulkFuture: Future[Workbook] = createWorkbookWithBulkDataAsync(
  "People", data, XSSF
)

// Async file operations
val saveFuture: Future[Unit] = for {
  workbook <- futureWorkbook
  _ <- saveWorkbookAsync(workbook, "/tmp/async-workbook.xlsx")
} yield ()

val loadFuture: Future[Workbook] = loadWorkbookAsync("/tmp/async-workbook.xlsx")
```

### Stream Processing with Async

Process large data streams asynchronously with automatic batching:

```scala
// Define your data source
case class SalesRecord(product: String, amount: Double, date: String)

val salesStream = Stream.range(1, 10001).map { i =>
  SalesRecord(s"Product $i", Math.random() * 1000, s"2024-01-${i % 28 + 1}")
}

// Transform function
def transformSalesRecord(record: SalesRecord): Seq[Any] = 
  Seq(record.product, record.amount, record.date)

// Process stream asynchronously with batching
val streamFuture: Future[Workbook] = processDataStreamAsync(
  data = salesStream,
  transform = transformSalesRecord,
  sheetName = "SalesData",
  batchSize = 1000  // Process in batches of 1000 rows
)

// Use the result
streamFuture.foreach { workbook =>
  println(s"Processed ${workbook.sheets.head.rows.size} sales records")
}
```

### Progressive Workbook Building

Build workbooks progressively with real-time progress callbacks:

```scala
// Create progressive builder with progress tracking
val builder = new ProgressiveWorkbookBuilder(Set.empty[Sheet], XSSF)

// Add progress callbacks
var progressUpdates = List.empty[Double]
builder.addProgressCallback { progress =>
  progressUpdates = progress :: progressUpdates
  println(f"Progress: ${progress * 100}%.1f%%")
}

// Build workbook step by step
val buildProcess: Future[Workbook] = for {
  // Add initial sheet
  step1 <- builder.addSheetAsync(Sheet("Config")(Set(
    Row(0)(Set(StringCell(0, "Configuration Data")))
  )))

  // Add bulk data with progress reporting
  step2 <- step1.addBulkDataAsync(
    "MainData", 
    data,
    progressInterval = 100  // Report progress every 100 rows
  )

  // Finalize workbook
  finalWorkbook <- step2.buildAsync()
} yield finalWorkbook

// Handle completion
buildProcess.onComplete {
  case Success(workbook) => 
    println(s"Built workbook with ${workbook.sheets.size} sheets")
  case Failure(exception) => 
    println(s"Build failed: ${exception.getMessage}")
}
```

### Reactive Streams with Backpressure

Handle high-throughput data processing with reactive streams and automatic backpressure management:

```scala
import AsyncOperations.ReactiveStreams._

// Create data source
val largeDataset = (1 to 100000).map { i =>
  SalesRecord(s"Product $i", Math.random() * 1000, s"2024-${i % 12 + 1}-01")
}

val dataSource = MemoryDataSource(largeDataset)

// Create backpressure processor
val processor = new BackpressureProcessor(
  source = dataSource,
  transform = transformSalesRecord,
  maxBufferSize = 1000  // Buffer up to 1000 rows before processing
)

// Process with backpressure handling
var finalWorkbook: Option[Workbook] = None
var processingComplete = false

processor.processWithBackpressure(
  sheetName = "BackpressureData",
  onProgress = { progress =>
    if (progress % 0.1 < 0.01) {  // Log every 10%
      println(f"Processing: ${progress * 100}%.0f%% complete")
    }
  },
  onComplete = { workbook =>
    finalWorkbook = Some(workbook)
    processingComplete = true
    println(s"Completed processing ${workbook.sheets.head.rows.size} records")
  },
  onError = { error =>
    processingComplete = true
    println(s"Error during processing: ${error.getMessage}")
  }
)

// Wait for completion (in real applications, use proper async patterns)
while (!processingComplete) {
  Thread.sleep(100)
}
```

### Java Interoperability

Seamless integration with Java applications using CompletableFuture:

```scala
import AsyncOperations.JavaInterop._
import java.util.concurrent.CompletableFuture
import scala.collection.JavaConverters._

// Create workbook with Java API
val javaSheets = Set(
  Sheet("JavaSheet")(Set(
    Row(0)(Set(StringCell(0, "Java Integration")))
  ))
).asJava

val javaFuture: CompletableFuture[Workbook] = 
  createWorkbookAsyncJava(javaSheets, XSSF)

// Save with Java API
val saveFuture: CompletableFuture[Void] = 
  saveWorkbookAsyncJava(workbook, "/tmp/java-async.xlsx")

// Process data with Java callback
val javaData = List(
  SalesRecord("Java Product 1", 100.0, "2024-01-01"),
  SalesRecord("Java Product 2", 200.0, "2024-01-02")
).asJava

val transformer = new java.util.function.Function[SalesRecord, java.util.List[Any]] {
  def apply(record: SalesRecord): java.util.List[Any] = 
    List(record.product, record.amount, record.date).asInstanceOf[List[Any]].asJava
}

val progressCallback = new java.util.function.Consumer[java.lang.Double] {
  def accept(progress: java.lang.Double): Unit = 
    println(f"Java progress: ${progress * 100}%.1f%%")
}

val processedFuture: CompletableFuture[Workbook] = processDataWithCallbackJava(
  javaData, transformer, "JavaProcessed", progressCallback
)
```

### Functional IO Operations

Pure functional approach using Scalaz IO for composable async operations:

```scala
import IOOperations._
import scalaz.effect.IO

// Pure functional workbook creation
val createWorkbookIO: IO[Workbook] = createWorkbookIO(sheets, XSSF)

// Composable IO operations
val saveAndLoadIO: IO[Workbook] = for {
  workbook <- createWorkbookIO
  _ <- saveWorkbookIO(workbook, "/tmp/io-workbook.xlsx")
  loadedWorkbook <- loadWorkbookIO("/tmp/io-workbook.xlsx")
} yield loadedWorkbook

// Process multiple sheets functionally
val multiSheetData = Map(
  "Sales" -> Seq(Seq("Product", "Amount"), Seq("Widget", 100.0)),
  "Inventory" -> Seq(Seq("Item", "Quantity"), Seq("Widget", 50)),
  "Customers" -> Seq(Seq("Name", "Email"), Seq("John", "john@example.com"))
)

val multiSheetIO: IO[Workbook] = processMultipleSheetsIO(multiSheetData, XSSF)

// Execute IO operations
val result: Workbook = saveAndLoadIO.unsafePerformIO()
val multiSheetResult: Workbook = multiSheetIO.unsafePerformIO()
```

### Async Best Practices

1. **Use appropriate batch sizes** for stream processing (1000-5000 rows typically optimal)
2. **Implement proper error handling** with Future.recover or IO error handling
3. **Monitor progress** for long-running operations to provide user feedback
4. **Configure backpressure** based on available memory and processing capacity
5. **Use ExecutionContext.global** or custom thread pools based on workload
6. **Combine with performance optimizations** (streaming, memory monitoring) for best results

### Complete Async Example

```scala
import info.folone.scala.poi._
import info.folone.scala.poi.AsyncOperations._
import scala.concurrent.{Future, ExecutionContext, Await}
import scala.concurrent.duration._
import scala.util.{Success, Failure}

implicit val ec: ExecutionContext = ExecutionContext.global

// Comprehensive async workflow
def processLargeDatasetAsync(): Future[String] = {
  // 1. Generate large dataset
  val largeDataset = (1 to 25000).map { i =>
    Seq(
      s"Product $i",
      Math.random() * 1000,
      s"Category ${i % 10}",
      new java.util.Date(),
      i % 3 == 0
    )
  }

  // 2. Create workbook with progress tracking
  val builder = new ProgressiveWorkbookBuilder(Set.empty[Sheet], XSSF)
  builder.addProgressCallback(progress => 
    if (progress % 0.2 < 0.01) println(f"Building: ${progress * 100}%.0f%%")
  )

  // 3. Build and save asynchronously
  val result = for {
    // Create initial structure
    step1 <- builder.addSheetAsync(Sheet("Summary")(Set(
      Row(0)(Set(StringCell(0, "Large Dataset Summary")))
    )))

    // Add bulk data
    step2 <- step1.addBulkDataAsync("Products", largeDataset, progressInterval = 1000)

    // Finalize workbook
    workbook <- step2.buildAsync()

    // Save asynchronously
    path = "/tmp/large-async-dataset.xlsx"
    _ <- saveWorkbookAsync(workbook, path)

    // Load back to verify
    verifiedWorkbook <- loadWorkbookAsync(path)

  } yield {
    val rowCount = verifiedWorkbook.sheets.find(_.name == "Products").map(_.rows.size).getOrElse(0)
    s"Successfully processed $rowCount rows asynchronously"
  }

  result.recover {
    case exception => s"Async processing failed: ${exception.getMessage}"
  }
}

// Execute the async workflow
val futureResult = processLargeDatasetAsync()

futureResult.onComplete {
  case Success(message) => println(message)
  case Failure(exception) => println(s"Workflow failed: ${exception.getMessage}")
}

// For demo purposes, wait for completion
val result = Await.result(futureResult, 30.seconds)
println(result)
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
  SXSSF(rowAccessWindowSize = 100)
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
