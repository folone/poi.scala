package info.folone.scala.poi

class Sheet(
  val name: String,
  val rows: Set[Row],
  val frozenPane: Option[FreezePane] = None,
  val splitPane: Option[SplitPane] = None,
  val columnWidths: Map[Int, Int] = Map.empty,
  val rowHeights: Map[Int, Short] = Map.empty,
  val hiddenColumns: Set[Int] = Set.empty,
  val hiddenRows: Set[Int] = Set.empty,
  val rowGroups: List[RowGroup] = Nil,
  val columnGroups: List[ColumnGroup] = Nil,
  val header: Option[Header] = None,
  val footer: Option[Footer] = None,
  val pageSetup: Option[PageSetup] = None,
  val printArea: Option[CellRange] = None,
  val autoFilter: Option[CellRange] = None,
  val zoom: Option[Int] = None
) {

  def config: SheetConfig = SheetConfig(
    name = name,
    frozenPane = frozenPane,
    splitPane = splitPane,
    columnWidths = columnWidths,
    rowHeights = rowHeights,
    hiddenColumns = hiddenColumns,
    hiddenRows = hiddenRows,
    rowGroups = rowGroups,
    columnGroups = columnGroups,
    header = header,
    footer = footer,
    pageSetup = pageSetup,
    printArea = printArea,
    autoFilter = autoFilter,
    zoom = zoom
  )

  // Enhanced functionality methods
  def freeze(panes: FreezePane): Sheet =
    new Sheet(
      name,
      rows,
      Some(panes),
      splitPane,
      columnWidths,
      rowHeights,
      hiddenColumns,
      hiddenRows,
      rowGroups,
      columnGroups,
      header,
      footer,
      pageSetup,
      printArea,
      autoFilter,
      zoom
    )

  def split(panes: SplitPane): Sheet =
    new Sheet(
      name,
      rows,
      frozenPane,
      Some(panes),
      columnWidths,
      rowHeights,
      hiddenColumns,
      hiddenRows,
      rowGroups,
      columnGroups,
      header,
      footer,
      pageSetup,
      printArea,
      autoFilter,
      zoom
    )

  def setColumnWidth(columnIndex: Int, width: Int): Sheet =
    new Sheet(
      name,
      rows,
      frozenPane,
      splitPane,
      columnWidths + (columnIndex -> width),
      rowHeights,
      hiddenColumns,
      hiddenRows,
      rowGroups,
      columnGroups,
      header,
      footer,
      pageSetup,
      printArea,
      autoFilter,
      zoom
    )

  def setRowHeight(rowIndex: Int, height: Short): Sheet =
    new Sheet(
      name,
      rows,
      frozenPane,
      splitPane,
      columnWidths,
      rowHeights + (rowIndex -> height),
      hiddenColumns,
      hiddenRows,
      rowGroups,
      columnGroups,
      header,
      footer,
      pageSetup,
      printArea,
      autoFilter,
      zoom
    )

  def hideColumn(columnIndex: Int): Sheet =
    new Sheet(
      name,
      rows,
      frozenPane,
      splitPane,
      columnWidths,
      rowHeights,
      hiddenColumns + columnIndex,
      hiddenRows,
      rowGroups,
      columnGroups,
      header,
      footer,
      pageSetup,
      printArea,
      autoFilter,
      zoom
    )

  def hideRow(rowIndex: Int): Sheet =
    new Sheet(
      name,
      rows,
      frozenPane,
      splitPane,
      columnWidths,
      rowHeights,
      hiddenColumns,
      hiddenRows + rowIndex,
      rowGroups,
      columnGroups,
      header,
      footer,
      pageSetup,
      printArea,
      autoFilter,
      zoom
    )

  def groupRows(startRow: Int, endRow: Int): Sheet =
    new Sheet(
      name,
      rows,
      frozenPane,
      splitPane,
      columnWidths,
      rowHeights,
      hiddenColumns,
      hiddenRows,
      rowGroups :+ RowGroup(startRow, endRow),
      columnGroups,
      header,
      footer,
      pageSetup,
      printArea,
      autoFilter,
      zoom
    )

  def groupColumns(startCol: Int, endCol: Int): Sheet =
    new Sheet(
      name,
      rows,
      frozenPane,
      splitPane,
      columnWidths,
      rowHeights,
      hiddenColumns,
      hiddenRows,
      rowGroups,
      columnGroups :+ ColumnGroup(startCol, endCol),
      header,
      footer,
      pageSetup,
      printArea,
      autoFilter,
      zoom
    )

  def addHeader(h: Header): Sheet =
    new Sheet(
      name,
      rows,
      frozenPane,
      splitPane,
      columnWidths,
      rowHeights,
      hiddenColumns,
      hiddenRows,
      rowGroups,
      columnGroups,
      Some(h),
      footer,
      pageSetup,
      printArea,
      autoFilter,
      zoom
    )

  def addFooter(f: Footer): Sheet =
    new Sheet(
      name,
      rows,
      frozenPane,
      splitPane,
      columnWidths,
      rowHeights,
      hiddenColumns,
      hiddenRows,
      rowGroups,
      columnGroups,
      header,
      Some(f),
      pageSetup,
      printArea,
      autoFilter,
      zoom
    )

  def setPageSetup(setup: PageSetup): Sheet =
    new Sheet(
      name,
      rows,
      frozenPane,
      splitPane,
      columnWidths,
      rowHeights,
      hiddenColumns,
      hiddenRows,
      rowGroups,
      columnGroups,
      header,
      footer,
      Some(setup),
      printArea,
      autoFilter,
      zoom
    )

  def setPrintArea(range: CellRange): Sheet =
    new Sheet(
      name,
      rows,
      frozenPane,
      splitPane,
      columnWidths,
      rowHeights,
      hiddenColumns,
      hiddenRows,
      rowGroups,
      columnGroups,
      header,
      footer,
      pageSetup,
      Some(range),
      autoFilter,
      zoom
    )

  def setAutoFilter(range: CellRange): Sheet =
    new Sheet(
      name,
      rows,
      frozenPane,
      splitPane,
      columnWidths,
      rowHeights,
      hiddenColumns,
      hiddenRows,
      rowGroups,
      columnGroups,
      header,
      footer,
      pageSetup,
      printArea,
      Some(range),
      zoom
    )

  def setZoom(zoomLevel: Int): Sheet =
    new Sheet(
      name,
      rows,
      frozenPane,
      splitPane,
      columnWidths,
      rowHeights,
      hiddenColumns,
      hiddenRows,
      rowGroups,
      columnGroups,
      header,
      footer,
      pageSetup,
      printArea,
      autoFilter,
      Some(zoomLevel)
    )

  override def hashCode: Int = name.hashCode + rows.hashCode
}

object Sheet {
  // Backward compatible apply method - creates a simple sheet with default enhanced features
  def apply(name: String)(rows: Set[Row]): Sheet = new Sheet(name, rows)

  // Factory method for enhanced sheets with enhanced configuration
  def enhanced(
    name: String,
    frozenPane: Option[FreezePane] = None,
    splitPane: Option[SplitPane] = None,
    columnWidths: Map[Int, Int] = Map.empty,
    rowHeights: Map[Int, Short] = Map.empty,
    hiddenColumns: Set[Int] = Set.empty,
    hiddenRows: Set[Int] = Set.empty,
    rowGroups: List[RowGroup] = List.empty,
    columnGroups: List[ColumnGroup] = List.empty,
    header: Option[Header] = None,
    footer: Option[Footer] = None,
    pageSetup: Option[PageSetup] = None,
    printArea: Option[CellRange] = None,
    autoFilter: Option[CellRange] = None,
    zoom: Option[Int] = None
  )(rows: Set[Row]): Sheet =
    new Sheet(
      name = name,
      rows = rows,
      frozenPane = frozenPane,
      splitPane = splitPane,
      columnWidths = columnWidths,
      rowHeights = rowHeights,
      hiddenColumns = hiddenColumns,
      hiddenRows = hiddenRows,
      rowGroups = rowGroups,
      columnGroups = columnGroups,
      header = header,
      footer = footer,
      pageSetup = pageSetup,
      printArea = printArea,
      autoFilter = autoFilter,
      zoom = zoom
    )

  def unapply(sheet: Sheet): Some[(String, Set[Row])] = Some((sheet.name, sheet.rows))
}

// Configuration for sheet
case class SheetConfig(
  name: String,
  frozenPane: Option[FreezePane] = None,
  splitPane: Option[SplitPane] = None,
  columnWidths: Map[Int, Int] = Map.empty,
  rowHeights: Map[Int, Short] = Map.empty,
  hiddenColumns: Set[Int] = Set.empty,
  hiddenRows: Set[Int] = Set.empty,
  rowGroups: List[RowGroup] = List.empty,
  columnGroups: List[ColumnGroup] = List.empty,
  header: Option[Header] = None,
  footer: Option[Footer] = None,
  pageSetup: Option[PageSetup] = None,
  printArea: Option[CellRange] = None,
  autoFilter: Option[CellRange] = None,
  zoom: Option[Int] = None
)

// Supporting case classes moved here from EnhancedSheet
case class FreezePane(colSplit: Int, rowSplit: Int, leftmostColumn: Int = 0, topRow: Int = 0)
case class SplitPane(xSplitPos: Int, ySplitPos: Int, leftmostColumn: Int = 0, topRow: Int = 0)

case class RowGroup(startRow: Int, endRow: Int, collapsed: Boolean = false)
case class ColumnGroup(startCol: Int, endCol: Int, collapsed: Boolean = false)

case class Header(
  left: Option[String] = None,
  center: Option[String] = None,
  right: Option[String] = None
)

case class Footer(
  left: Option[String] = None,
  center: Option[String] = None,
  right: Option[String] = None
)

case class PageMargins(
  left: Double,
  right: Double,
  top: Double,
  bottom: Double,
  header: Double = 0.3,
  footer: Double = 0.3
)

case class FitToPage(width: Int, height: Int)

// Page setup and printing options
case class PageSetup(
  orientation: PageOrientation = Portrait,
  paperSize: PaperSize = A4,
  scale: Int = 100,
  fitToPage: Option[FitToPage] = None,
  margins: Option[PageMargins] = None,
  leftMargin: Double = 0.75,
  rightMargin: Double = 0.75,
  topMargin: Double = 1.0,
  bottomMargin: Double = 1.0,
  headerMargin: Double = 0.3,
  footerMargin: Double = 0.3,
  fitToWidth: Option[Int] = None,
  fitToHeight: Option[Int] = None
)

// Enumerations for page setup
sealed trait PageOrientation
case object Portrait extends PageOrientation
case object Landscape extends PageOrientation

sealed trait PaperSize
case object A4 extends PaperSize
case object A3 extends PaperSize
case object A5 extends PaperSize
case object Letter extends PaperSize
case object Legal extends PaperSize
case object Tabloid extends PaperSize

// Cell range for print areas, auto filters, etc.
case class CellRange(
  sheetName: String,
  startRow: Int,
  startCol: Int,
  endRow: Int,
  endCol: Int
) {
  def cellReference: String = s"${columnToLetter(startCol)}${startRow + 1}:${columnToLetter(endCol)}${endRow + 1}"

  def toCellRangeAddress: String = s"$sheetName!$cellReference"

  def sheet: String = sheetName

  private def columnToLetter(col: Int): String =
    if (col < 26) (65 + col).toChar.toString
    else columnToLetter(col / 26 - 1) + columnToLetter(col % 26)

}

object CellRange {

  def apply(sheetName: String, cellRef: String): CellRange = {
    // Parse cell reference like "A1:C5"
    val parts = cellRef.split(":")
    val startCell = parseCell(parts(0))
    val endCell = parseCell(parts(1))
    CellRange(sheetName, startCell._1, startCell._2, endCell._1, endCell._2)
  }

  private def parseCell(cellRef: String): (Int, Int) = {
    val letterPart = cellRef.takeWhile(_.isLetter)
    val numberPart = cellRef.dropWhile(_.isLetter).toInt - 1
    val col = letterPart.foldLeft(0)((acc, c) => acc * 26 + (c - 'A' + 1)) - 1
    (numberPart, col)
  }

}
