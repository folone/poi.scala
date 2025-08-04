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

## Table of Contents

- [Architecture](#architecture) - Modular design and dependencies
- [Setup](#setup) - Installation and configuration
- [Basic Usage](#basic-usage) - Getting started examples
- [Module Imports](#module-imports) - Import patterns for different modules
- [Enhanced Features](#enhanced-features) - Advanced Excel operations
  - [Styled Cells](#styled-cells-with-enhanced-formatting)
  - [Enhanced Sheets](#enhanced-sheet-creation)
  - [Data Validation](#data-validation)
  - [Named Ranges](#named-ranges)
- [Performance Optimizations](#performance-optimizations) - Streaming and bulk operations
- [Error Handling](#error-handling-and-validation) - Safe operations and validation
- [Asynchronous Operations](#asynchronous-and-reactive-operations) - Future-based and reactive patterns
- [Functional Programming](#functional-io-operations) - Cats and Scalaz integration
- [Quick Reference](#quick-reference) - Common operations cheat sheet
- [Development](#development) - Building and testing

## Architecture

Poi Scala is organized into several modules for better modularity and dependency management:

- **`poi-scala-core`** - Core Excel operations and data structures (required)
- **`poi-scala-cats`** - [Cats](https://typelevel.org/cats/) functional programming integration
- **`poi-scala-scalaz`** - [Scalaz](https://github.com/scalaz/scalaz) functional programming integration
- **`poi-scala-async`** - Asynchronous operations with Future and reactive streams support
- **`poi-scala-fatjar`** - Assembly plugin for creating fat JARs with all dependencies

You only need to include the modules you actually use in your project.

## Setup

[![poi-scala Scala version support](https://index.scala-lang.org/folone/poi.scala/poi-scala/latest.svg)](https://index.scala-lang.org/folone/poi.scala/poi-scala)
[![Maven Central](https://img.shields.io/maven-central/v/info.folone/poi-scala-core_2.13.svg)](https://maven-badges.herokuapp.com/maven-central/info.folone/poi-scala-core_2.13)

Replace `LATEST_VERSION` with the version shown in the badges above.

### SBT:

**Core library (required):**
```scala
libraryDependencies += "info.folone" %% "poi-scala-core" % "LATEST_VERSION"
```

**Optional integrations:**
```scala
// For Cats functional programming integration
libraryDependencies += "info.folone" %% "poi-scala-cats" % "LATEST_VERSION"

// For Scalaz functional programming integration
libraryDependencies += "info.folone" %% "poi-scala-scalaz" % "LATEST_VERSION"

// For asynchronous operations
libraryDependencies += "info.folone" %% "poi-scala-async" % "LATEST_VERSION"
```

### Maven:

**Core library:**
```xml
<dependency>
    <groupId>info.folone</groupId>
    <artifactId>poi-scala-core_${scala.version}</artifactId>
    <version>LATEST_VERSION</version>
</dependency>
```

**Optional integrations:**
```xml
<!-- For Cats integration -->
<dependency>
    <groupId>info.folone</groupId>
    <artifactId>poi-scala-cats_${scala.version}</artifactId>
    <version>LATEST_VERSION</version>
</dependency>

<!-- For Scalaz integration -->
<dependency>
    <groupId>info.folone</groupId>
    <artifactId>poi-scala-scalaz_${scala.version}</artifactId>
    <version>LATEST_VERSION</version>
</dependency>

<!-- For async operations -->
<dependency>
    <groupId>info.folone</groupId>
    <artifactId>poi-scala-async_${scala.version}</artifactId>
    <version>LATEST_VERSION</version>
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
import info.folone.poi._

// Basic sheet creation
val sheet = Sheet("DataSheet") {
  Set(
    Row(1)(Set(NumericCell(1, 13.0/5), FormulaCell(2, "ABS(B2)"))),
    Row(2)(Set(StringCell(1, "data"), StringCell(2, "data2"))))
}

// Create a workbook and save it to a file
val workbook = Workbook(Set(sheet))
workbook.toFile("datasheet.xlsx")
```

## Module Imports

Depending on which modules you've included, you'll need different imports:

### Core Functionality
```scala
import info.folone.poi._  // Core types: Workbook, Sheet, Cell, etc.
```

### Functional Programming Integration
```scala
// For Cats integration
import info.folone.poi.cats._  // Cats typeclass instances and effect operations

// For Scalaz integration
import info.folone.poi.scalaz._ // Scalaz typeclass instances and effect operations
```

### Asynchronous Operations
```scala
import info.folone.poi.async._  // Async operations and reactive streams
```

## Enhanced Features

### Styled Cells with Enhanced Formatting

```scala
import info.folone.poi._

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
  )))

val dataStyle = CellStyle(
  font = Font(heightInPoints = 10),
  dataFormat = DataFormat("0.00"),
  alignment = Some(RightAlignment)
)

// Apply styles to cells
val styledCell = StyledCell(StringCell(0, "Header"), Some(headerStyle))
```

### Enhanced Sheet Creation

```scala
import info.folone.poi._

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
        StyledCell(StringCell(0, "Product"), Some(headerStyle)),
        StyledCell(StringCell(1, "Quantity"), Some(headerStyle)),
        StyledCell(StringCell(2, "Price"), Some(headerStyle)))
    },
    Row(1) {
      Set(
        StyledCell(NumericCell(1, 100), Some(dataStyle)),
        StyledCell(NumericCell(2, 25.99), Some(dataStyle)))
    })
}
.setColumnWidth(3, 20)
.hideColumn(4)
.groupRows(1, 2)
.setZoom(150)
```

### Data Validation

```scala
import info.folone.poi._

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
import info.folone.poi._

// Create and manage named ranges
val workbookWithRanges = Workbook(Set.empty)
  .createNamedRange("SalesData", "Sheet1!$A$2:$F$101")
  .createNamedRange("TotalSales", "Sheet1!$G$102")

// Use named ranges in formulas
val formulaWithNamedRange = FormulaCell(0, "SUM(SalesData)")
```

### Extended Cell Types

```scala
import info.folone.poi._
import java.util.Date

// All supported cell types
val cells = Set(
  StringCell(0, "Text"),
  NumericCell(1, 123.45),
  BooleanCell(2, true),
  DateCell(3, new Date()),
  FormulaCell(4, "SUM(A2:A4)"),
  BlankCell(5),
  ErrorCell(6, 0x2A.toByte) // #N/A error
)
```

## Performance Optimizations

For large datasets and memory-intensive operations, poi-scala provides comprehensive performance optimizations including streaming support, and bulk operations.

### Streaming Workbooks (SXSSF)

```scala
import info.folone.poi._

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

```scala
import info.folone.poi._
import java.util.Date

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
import info.folone.poi._
import info.folone.poi.impure.load // For file loading functionality
import java.io.File
import scala.util.{Try, Success, Failure}

// Safe file loading with error handling
val workbookResult: Try[Workbook] = Try {
  Workbook.fromFile(new File("/path/to/workbook.xlsx"))
}.flatten

workbookResult match {
  case Success(workbook) =>
    println(s"Successfully loaded workbook with ${workbook.sheets.size} sheets")
  case Failure(exception) =>
    println(s"Failed to load workbook: ${exception.getMessage}")
}

// Validate workbook structure
def validateWorkbook(workbook: Workbook): Either[String, Workbook] = {
  if (workbook.sheets.isEmpty) {
    Left("Workbook must contain at least one sheet")
  } else if (workbook.sheets.exists(_.name.trim.isEmpty)) {
    Left("All sheets must have non-empty names")
  } else {
    Right(workbook)
  }
}

// Validate cell data before creation
def createSafeNumericCell(index: Int, value: String): Either[String, NumericCell] = {
  Try(value.toDouble) match {
    case Success(numValue) => Right(NumericCell(index, numValue))
    case Failure(_) => Left(s"Invalid numeric value: '$value'")
  }
}

// Example usage
val cellResult = createSafeNumericCell(0, "123.45")
cellResult match {
  case Right(cell) => println(s"Created cell: $cell")
  case Left(error) => println(s"Cell creation failed: $error")
}

// Comprehensive validation for sheet data
case class ValidationError(message: String, row: Option[Int] = None, column: Option[Int] = None)

def validateSheetData(data: Seq[Seq[Any]]): Either[List[ValidationError], Seq[Seq[Any]]] = {
  val errors = data.zipWithIndex.flatMap { case (row, rowIndex) =>
    row.zipWithIndex.flatMap { case (cell, colIndex) =>
      cell match {
        case s: String if s.length > 32767 =>
          Some(ValidationError(s"String too long (${s.length} chars, max 32767)", Some(rowIndex), Some(colIndex)))
        case d: Double if d.isNaN || d.isInfinite =>
          Some(ValidationError("Invalid numeric value (NaN or Infinite)", Some(rowIndex), Some(colIndex)))
        case _ => None
      }
    }
  }.toList

  if (errors.nonEmpty) Left(errors) else Right(data)
}

// Safe workbook operations with validation
def createValidatedWorkbook(sheetName: String, data: Seq[Seq[Any]]): Either[String, Workbook] = {
  for {
    validatedData <- validateSheetData(data).left.map(errors =>
      s"Validation errors: ${errors.map(_.message).mkString(", ")}")
    workbook = Workbook.forLargeDataset(Set.empty).addSheetWithBulkData(sheetName, validatedData)
    validatedWorkbook <- validateWorkbook(workbook)
  } yield validatedWorkbook
}
```

### Complete Example

```scala
import info.folone.poi._
import java.io.File

// Create a comprehensive workbook showcasing all features
val headerStyle = CellStyle(font = Font(bold = true))
val workbook = Workbook(
  Set(
    // Basic backward-compatible sheet
    Sheet("Summary") {
      Set(
        Row(0)(Set(StringCell(0, "Summary Report"))),
        Row(1)(Set(NumericCell(0, 42.0), FormulaCell(1, "A2*2"))))
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
            StyledCell(StringCell(0, "Product"), Some(headerStyle)),
            StyledCell(StringCell(1, "Sales"), Some(headerStyle)),
            StyledCell(StringCell(2, "Rating"), Some(headerStyle)))
        },
        Row(1) {
          Set(
            StringCell(0, "Widget A"),
            NumericCell(1, 1500.50),
            NumericCell(2, 4.5))
        })
    }
    .setColumnWidth(3, 25)
    .groupRows(2, 5)
  ))

// Save to file
val path = "/tmp/enhanced-workbook.xlsx"
workbook.toFile(path) // Updated from safeToFile

// Load and verify
val loadedWorkbook = Workbook.fromFile(new File(path)) // Updated from impure.load
loadedWorkbook.foreach(wb => println(s"Loaded ${wb.sheets.size} sheets"))
```

## Asynchronous and Reactive Operations

For applications requiring non-blocking Excel operations, poi-scala provides comprehensive asynchronous and reactive capabilities with Future-based operations, progressive building, reactive streams, and backpressure handling.

### Future-Based Async Operations

```scala
import info.folone.poi._
import info.folone.poi.async._ // Import the async package
import scala.concurrent.{Future, ExecutionContext}
import scala.concurrent.duration._ // Needed for Await.result
import scala.util.{Success, Failure} // Needed for onComplete

implicit val ec: ExecutionContext = ExecutionContext.global

// Create workbook asynchronously
val sheets = Set(
  Sheet("AsyncSheet")(Set(
    Row(0)(Set(StringCell(0, "Async Data")))))
)

val futureWorkbook: Future[Workbook] = AsyncOperations.createWorkbookAsync(sheets, XSSF)

// Create workbook with bulk data asynchronously
val data = Seq(
  Seq("Name", "Age", "City"),
  Seq("Alice", 30, "New York"),
  Seq("Bob", 25, "London"),
  Seq("Charlie", 35, "Tokyo")
)

val bulkFuture: Future[Workbook] = AsyncOperations.createWorkbookWithBulkDataAsync(
  "People", data, XSSF
)

// Async file operations
val saveFuture: Future[Unit] = for {
  workbook <- futureWorkbook
  _ <- AsyncOperations.saveWorkbookAsync(workbook, "/tmp/async-workbook.xlsx")
} yield ()

val loadFuture: Future[Workbook] = AsyncOperations.loadWorkbookAsync("/tmp/async-workbook.xlsx")
```

### Stream Processing with Async

```scala
import info.folone.poi._
import info.folone.poi.async.AsyncOperations._ // Import AsyncOperations for processDataStreamAsync
import info.folone.poi.async.AsyncOperations.ReactiveStreams._ // Import ReactiveStreams for MemoryDataSource, BackpressureProcessor
import scala.concurrent.{Future, ExecutionContext}
import scala.concurrent.duration._
import scala.util.{Success, Failure}

implicit val ec: ExecutionContext = ExecutionContext.global

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

```scala
import info.folone.poi._
import info.folone.poi.async._ // Import async package for ProgressiveWorkbookBuilder
import scala.concurrent.{Future, ExecutionContext}
import scala.concurrent.duration._
import scala.util.{Success, Failure}

implicit val ec: ExecutionContext = ExecutionContext.global

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
    Row(0)(Set(StringCell(0, "Configuration Data")))))
  )

  // Add bulk data
  step2 <- step1.addBulkDataAsync(
    "MainData", 
    data, // Assuming 'data' is defined from previous example
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

```scala
import info.folone.poi._
import info.folone.poi.async.AsyncOperations._ // Import AsyncOperations for processDataStreamAsync
import info.folone.poi.async.AsyncOperations.ReactiveStreams._ // Import ReactiveStreams for MemoryDataSource, BackpressureProcessor
import scala.concurrent.{Future, ExecutionContext}
import scala.concurrent.duration._
import scala.util.{Success, Failure}

implicit val ec: ExecutionContext = ExecutionContext.global

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

```scala
import info.folone.poi._
import info.folone.poi.async.AsyncOperations.JavaInterop._ // Import JavaInterop
import java.util.concurrent.CompletableFuture
import scala.collection.JavaConverters._ // For .asJava conversion

// Create workbook with Java API
val javaSheets = Set(
  Sheet("JavaSheet")(Set(
    Row(0)(Set(StringCell(0, "Java Integration")))))
  ).asJava

val javaFuture: CompletableFuture[Workbook] = 
  createWorkbookAsyncJava(javaSheets, XSSF)

// Save with Java API
// Assuming 'workbook' is defined from a previous example
val saveFuture: CompletableFuture[Void] = 
  saveWorkbookAsyncJava(workbook, "/tmp/java-async.xlsx")

// Process data with Java callback
// Note: SalesRecord case class defined earlier in async examples
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

```scala
import info.folone.poi._
import info.folone.poi.scalaz.IOOperations
import scalaz.effect.IO

val sheets = Set(Sheet("Sheet 1")(Set(Row(0)(Set(StringCell(0, "data"))))))

// Pure functional workbook creation
val createWorkbookIO: IO[Workbook] = IOOperations.createWorkbookIO(sheets, XSSF)

// Composable IO operations
val saveAndLoadIO: IO[Workbook] = for {
  workbook <- createWorkbookIO
  _ <- IOOperations.saveWorkbookIO(workbook, "/tmp/io-workbook.xlsx")
  loadedWorkbook <- IOOperations.loadWorkbookIO("/tmp/io-workbook.xlsx")
} yield loadedWorkbook

// Process multiple sheets functionally
val multiSheetData = Map(
  "Sales" -> Seq(Seq("Product", "Amount"), Seq("Widget", 100.0)),
  "Inventory" -> Seq(Seq("Item", "Quantity"), Seq("Widget", 50)),
  "Customers" -> Seq(Seq("Name", "Email"), Seq("John", "john@example.com"))
)

val multiSheetIO: IO[Workbook] = IOOperations.processMultipleSheetsIO(multiSheetData, XSSF)

// Execute IO operations
val result: Workbook = saveAndLoadIO.unsafePerformIO()
val multiSheetResult: Workbook = multiSheetIO.unsafePerformIO()
```

### Cats Functional Programming Integration

The `poi-scala-cats` module provides integration with the [Cats](https://typelevel.org/cats/) functional programming library, offering typeclass instances and effect-based operations.

```scala
import info.folone.poi._
import info.folone.poi.cats.IOOperations
import cats.effect.IO
import cats.implicits._

val sheets = Set(Sheet("Cats Sheet")(Set(Row(0)(Set(StringCell(0, "Cats data"))))))

// Pure functional workbook creation with Cats IO
val createWorkbookIO: IO[Workbook] = IOOperations.createWorkbookIO(sheets, XSSF)

// Composable IO operations
val saveAndLoadIO: IO[Workbook] = for {
  workbook <- createWorkbookIO
  _ <- IOOperations.saveWorkbookIO(workbook, "/tmp/cats-workbook.xlsx")
  loadedWorkbook <- IOOperations.loadWorkbookIO("/tmp/cats-workbook.xlsx")
} yield loadedWorkbook

// Process multiple sheets with Cats effects
val multiSheetData = Map(
  "Sales" -> Seq(Seq("Product", "Amount"), Seq("Widget", 100.0)),
  "Inventory" -> Seq(Seq("Item", "Quantity"), Seq("Widget", 50))
)

val multiSheetIO: IO[Workbook] = IOOperations.processMultipleSheetsIO(multiSheetData, XSSF)

// Execute IO operations safely
import cats.effect.unsafe.implicits.global
val result: Workbook = saveAndLoadIO.unsafeRunSync()
val multiSheetResult: Workbook = multiSheetIO.unsafeRunSync()

// Using cats typeclass instances (automatically available when importing poi.cats.*)
val equalCells = StringCell(0, "test") === StringCell(0, "test")  // true
val orderedCells = List(NumericCell(1, 2.0), NumericCell(0, 1.0)).sorted
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
import info.folone.poi._
import info.folone.poi.async.AsyncOperations._
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
      Row(0)(Set(StringCell(0, "Large Dataset Summary")))))
    )

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

## Performance Optimization for Large Datasets

For applications processing large datasets, choose the right approach based on your data size:

```scala
// ❌ AVOID: Creating large datasets row by row (slow and memory intensive)
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

// ✅ RECOMMENDED: Using bulk operations (much faster)
val largeData = (1 to 10000).map { i =>
  Seq(s"Item $i", i.toDouble)
}

val optimizedWorkbook = Workbook.forLargeDataset(Set.empty)
  .addSheetWithBulkData("Data", largeData)

// ❌ AVOID: Creating workbooks for large data (memory issues)
val regularWorkbook = Workbook(Set(largeSheet))

// ✅ RECOMMENDED: Using streaming workbooks (memory efficient)
val streamingWorkbook = Workbook.streaming(
  Set.empty,
  SXSSF(rowAccessWindowSize = 100)
)
```

## Quick Reference

### Common Operations
```scala
// Create basic workbook
val workbook = Workbook(Set(
  Sheet("MySheet")(Set(
    Row(0)(Set(StringCell(0, "Hello"), NumericCell(1, 42.0)))
  ))
))

// Save to file
workbook.toFile("output.xlsx")

// Load from file
val loaded = Workbook.fromFile(new File("input.xlsx"))

// Add styling
val styled = StyledCell(StringCell(0, "Header"), Some(CellStyle(font = Font(bold = true))))

// Bulk data operations
val workbook = Workbook.forLargeDataset(Set.empty)
  .addSheetWithBulkData("Data", Seq(Seq("Name", "Age"), Seq("John", 30)))

// Async operations (requires poi-scala-async)
val future = AsyncOperations.createWorkbookAsync(sheets, XSSF)
```

### Module Dependencies
```scala
// Core (always required)
"info.folone" %% "poi-scala-core" % "VERSION"

// Choose functional programming style (optional)
"info.folone" %% "poi-scala-cats" % "VERSION"     // For Cats
"info.folone" %% "poi-scala-scalaz" % "VERSION"   // For Scalaz

// Async operations (optional)
"info.folone" %% "poi-scala-async" % "VERSION"
```

## Development

This project includes a Makefile with common development tasks for easy workflow management.

### Project Structure

The project is organized into the following modules:

- **core**: The core module containing the main poi-scala library
- **cats**: The Cats functional programming integration module
- **scalaz**: The Scalaz functional programming integration module
- **async**: The module for asynchronous operations
- **fatjar**: Assembly module for creating fat JARs with all dependencies
- **benchmarks**: The module for performance benchmarks

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
make test-only TEST='info.folone.poi.IntegrationSpec'
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

### Benchmarks

```bash
# Run benchmarks
make benchmarks/Jmh/run
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
