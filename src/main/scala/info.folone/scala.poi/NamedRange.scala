package info.folone.scala.poi

import org.apache.poi.ss.usermodel.{Name => POIName, Workbook => POIWorkbook}
import org.apache.poi.ss.util.AreaReference

// Named ranges support for Excel workbooks
case class NamedRange(
  name: String,
  range: CellRange,
  scope: NamedRangeScope = WorkbookScope,
  comment: Option[String] = None,
  hidden: Boolean = false
) {
  def toReference: String = range.toCellRangeAddress

  def isValidName: Boolean = {
    // Excel naming rules:
    // - Must start with letter, underscore, or backslash
    // - Can contain letters, numbers, periods, underscores
    // - Cannot be a cell reference (like A1, B2, etc.)
    // - Cannot contain spaces
    val validPattern = """^[a-zA-Z_\\][a-zA-Z0-9._]*$""".r
    val cellRefPattern = """^[A-Z]+[0-9]+$""".r

    name.nonEmpty &&
    validPattern.pattern.matcher(name).matches() &&
    !cellRefPattern.pattern.matcher(name).matches() &&
    !name.contains(" ") &&
    name.length <= 255
  }

}

// Named range scope
sealed trait NamedRangeScope
case object WorkbookScope extends NamedRangeScope
case class SheetScope(sheetName: String) extends NamedRangeScope

// Named range manager for workbooks
class NamedRangeManager(workbook: Workbook) {
  private var namedRanges: Map[String, NamedRange] = Map.empty

  def addNamedRange(namedRange: NamedRange): Either[PoiError, NamedRangeManager] =
    if (!namedRange.isValidName) {
      Left(InvalidCellReference(s"Invalid named range name: ${namedRange.name}"))
    } else if (namedRanges.contains(namedRange.name)) {
      Left(UnsupportedOperation(s"Named range '${namedRange.name}' already exists"))
    } else {
      namedRanges = namedRanges + (namedRange.name -> namedRange)
      Right(this)
    }

  def removeNamedRange(name: String): NamedRangeManager = {
    namedRanges = namedRanges - name
    this
  }

  def getNamedRange(name: String): Option[NamedRange] =
    namedRanges.get(name)

  def getAllNamedRanges: List[NamedRange] =
    namedRanges.values.toList

  def getNamedRangesForSheet(sheetName: String): List[NamedRange] =
    namedRanges.values.filter { nr =>
      nr.scope match {
        case SheetScope(sheet) => sheet == sheetName
        case WorkbookScope => nr.range.sheet == sheetName
      }
    }.toList

  def updateNamedRange(name: String, newRange: CellRange): Either[PoiError, NamedRangeManager] =
    namedRanges.get(name) match {
      case Some(existing) =>
        namedRanges = namedRanges + (name -> existing.copy(range = newRange))
        Right(this)
      case None =>
        Left(InvalidCellReference(s"Named range '$name' not found"))
    }

  def renameNamedRange(oldName: String, newName: String): Either[PoiError, NamedRangeManager] =
    namedRanges.get(oldName) match {
      case Some(existing) if !namedRanges.contains(newName) =>
        namedRanges = namedRanges - oldName + (newName -> existing.copy(name = newName))
        Right(this)
      case Some(_) =>
        Left(UnsupportedOperation(s"Named range '$newName' already exists"))
      case None =>
        Left(InvalidCellReference(s"Named range '$oldName' not found"))
    }

}

// Named range builder for fluent API
class NamedRangeBuilder(name: String) {
  private var range: Option[CellRange] = None
  private var scope: NamedRangeScope = WorkbookScope
  private var comment: Option[String] = None
  private var hidden: Boolean = false

  def withRange(cellRange: CellRange): NamedRangeBuilder = {
    this.range = Some(cellRange)
    this
  }

  def withRange(sheetName: String, cellRef: String): NamedRangeBuilder = {
    this.range = Some(CellRange(sheetName, cellRef))
    this
  }

  def withRange(sheetName: String, startRow: Int, startCol: Int, endRow: Int, endCol: Int): NamedRangeBuilder = {
    this.range = Some(CellRange(sheetName, startRow, startCol, endRow, endCol))
    this
  }

  def withWorkbookScope(): NamedRangeBuilder = {
    this.scope = WorkbookScope
    this
  }

  def withSheetScope(sheetName: String): NamedRangeBuilder = {
    this.scope = SheetScope(sheetName)
    this
  }

  def withComment(comment: String): NamedRangeBuilder = {
    this.comment = Some(comment)
    this
  }

  def hidden(isHidden: Boolean = true): NamedRangeBuilder = {
    this.hidden = isHidden
    this
  }

  def build(): Either[PoiError, NamedRange] =
    range match {
      case Some(r) =>
        val namedRange = NamedRange(name, r, scope, comment, hidden)
        if (namedRange.isValidName) {
          Right(namedRange)
        } else {
          Left(InvalidCellReference(s"Invalid named range name: $name"))
        }
      case None =>
        Left(InvalidCellReference("Named range must have a cell range"))
    }

}

object NamedRangeBuilder {
  def apply(name: String): NamedRangeBuilder = new NamedRangeBuilder(name)
}

// Predefined common named ranges
object CommonNamedRanges {

  def printArea(sheetName: String, range: CellRange): NamedRange =
    NamedRange("Print_Area", range, SheetScope(sheetName), Some("Print area for the sheet"))

  def printTitles(sheetName: String, range: CellRange): NamedRange =
    NamedRange("Print_Titles", range, SheetScope(sheetName), Some("Print titles for the sheet"))

  def database(sheetName: String, range: CellRange): NamedRange =
    NamedRange("Database", range, WorkbookScope, Some("Database range"))

  def criteria(sheetName: String, range: CellRange): NamedRange =
    NamedRange("Criteria", range, WorkbookScope, Some("Criteria range"))

  def extract(sheetName: String, range: CellRange): NamedRange =
    NamedRange("Extract", range, WorkbookScope, Some("Extract range"))

}

// Extension for Workbook to support named ranges
trait NamedRangeSupport {
  def namedRangeManager: NamedRangeManager

  def addNamedRange(namedRange: NamedRange): Either[PoiError, Unit] =
    namedRangeManager.addNamedRange(namedRange).map(_ => ())

  def getNamedRange(name: String): Option[NamedRange] =
    namedRangeManager.getNamedRange(name)

  def removeNamedRange(name: String): Unit =
    namedRangeManager.removeNamedRange(name)

}
