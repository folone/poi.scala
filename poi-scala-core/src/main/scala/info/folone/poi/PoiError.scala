package info.folone.poi

sealed trait PoiError extends Throwable {
  def message: String
  override def getMessage: String = message
}

case class InvalidCellReference(ref: String) extends PoiError {
  def message = s"Invalid cell reference: $ref"
}

case class SheetNotFound(sheetName: String) extends PoiError {
  def message = s"Sheet not found: $sheetName"
}

case class InvalidFormula(formula: String, cause: Option[Throwable] = None) extends PoiError {
  def message = s"Invalid formula: $formula${cause.map(c => s" - ${c.getMessage}").getOrElse("")}"
}

case class UnsupportedOperation(operation: String) extends PoiError {
  def message = s"Unsupported operation: $operation"
}

case class InvalidDataType(expected: String, actual: String, cellRef: String) extends PoiError {
  def message = s"Invalid data type at $cellRef: expected $expected, got $actual"
}

case class WorkbookIOError(cause: Throwable) extends PoiError {
  def message = s"Workbook I/O error: ${cause.getMessage}"
}

case class ValidationError(violations: List[String]) extends PoiError {
  def message = s"Validation failed: ${violations.mkString(", ")}"
}
