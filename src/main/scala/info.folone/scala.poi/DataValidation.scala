package info.folone.scala.poi

import org.apache.poi.ss.usermodel.{
  DataValidation => POIDataValidation,
  DataValidationConstraint => POIDataValidationConstraint,
  DataValidationHelper => POIDataValidationHelper
}
import org.apache.poi.ss.util.CellRangeAddressList

// Data validation support for Excel sheets
case class DataValidation(
  cellRange: CellRange,
  validationType: ValidationType,
  constraint: ValidationConstraint,
  errorTitle: Option[String] = None,
  errorText: Option[String] = None,
  promptTitle: Option[String] = None,
  promptText: Option[String] = None,
  showErrorBox: Boolean = true,
  showPromptBox: Boolean = true,
  allowEmpty: Boolean = true,
  suppressDropDown: Boolean = false
)

// Validation types
sealed trait ValidationType
case object ListValidation extends ValidationType
case object NumberValidation extends ValidationType
case object DateValidation extends ValidationType
case object TimeValidation extends ValidationType
case object FormulaValidation extends ValidationType
case object TextLengthValidation extends ValidationType
case object DecimalValidation extends ValidationType
case object IntegerValidation extends ValidationType

// Validation constraints
sealed trait ValidationConstraint

// List constraint for dropdown validation
case class ListConstraint(values: List[String]) extends ValidationConstraint
case class ListFormulaConstraint(formula: String) extends ValidationConstraint

// Number constraints
case class NumberConstraint(
  operator: ComparisonOperator,
  value1: Double,
  value2: Option[Double] = None
) extends ValidationConstraint

// Date constraints
case class DateConstraint(
  operator: ComparisonOperator,
  value1: java.util.Date,
  value2: Option[java.util.Date] = None
) extends ValidationConstraint

// Time constraints
case class TimeConstraint(
  operator: ComparisonOperator,
  value1: String, // Time as string like "09:00"
  value2: Option[String] = None
) extends ValidationConstraint

// Text length constraints
case class TextLengthConstraint(
  operator: ComparisonOperator,
  length1: Int,
  length2: Option[Int] = None
) extends ValidationConstraint

// Formula constraint
case class FormulaConstraint(formula: String) extends ValidationConstraint

// Comparison operators for validation
sealed trait ComparisonOperator
case object Equal extends ComparisonOperator
case object NotEqual extends ComparisonOperator
case object GreaterThan extends ComparisonOperator
case object LessThan extends ComparisonOperator
case object GreaterThanOrEqual extends ComparisonOperator
case object LessThanOrEqual extends ComparisonOperator
case object Between extends ComparisonOperator
case object NotBetween extends ComparisonOperator

// Helper object for creating common validations
object ValidationHelper {

  def dropdownList(range: CellRange, values: List[String]): DataValidation =
    DataValidation(
      cellRange = range,
      validationType = ListValidation,
      constraint = ListConstraint(values),
      suppressDropDown = false
    )

  def numberRange(range: CellRange, min: Double, max: Double): DataValidation =
    DataValidation(
      cellRange = range,
      validationType = NumberValidation,
      constraint = NumberConstraint(Between, min, Some(max))
    )

  def dateRange(range: CellRange, startDate: java.util.Date, endDate: java.util.Date): DataValidation =
    DataValidation(
      cellRange = range,
      validationType = DateValidation,
      constraint = DateConstraint(Between, startDate, Some(endDate))
    )

  def textLength(range: CellRange, minLength: Int, maxLength: Int): DataValidation =
    DataValidation(
      cellRange = range,
      validationType = TextLengthValidation,
      constraint = TextLengthConstraint(Between, minLength, Some(maxLength))
    )

  def formulaValidation(range: CellRange, formula: String): DataValidation =
    DataValidation(
      cellRange = range,
      validationType = FormulaValidation,
      constraint = FormulaConstraint(formula)
    )

  def integerRange(range: CellRange, min: Int, max: Int): DataValidation =
    DataValidation(
      cellRange = range,
      validationType = IntegerValidation,
      constraint = NumberConstraint(Between, min.toDouble, Some(max.toDouble))
    )

}

// Extension to Sheet to support data validation
trait DataValidationSupport {
  def addDataValidation(validation: DataValidation): Unit
  def removeDataValidation(range: CellRange): Unit
  def getDataValidations: List[DataValidation]
}

// Data validation builder for fluent API
class DataValidationBuilder(cellRange: CellRange) {
  private var validationType: ValidationType = ListValidation
  private var constraint: Option[ValidationConstraint] = None
  private var errorTitle: Option[String] = None
  private var errorText: Option[String] = None
  private var promptTitle: Option[String] = None
  private var promptText: Option[String] = None
  private var showErrorBox: Boolean = true
  private var showPromptBox: Boolean = true
  private var allowEmpty: Boolean = true
  private var suppressDropDown: Boolean = false

  def withList(values: List[String]): DataValidationBuilder = {
    this.validationType = ListValidation
    this.constraint = Some(ListConstraint(values))
    this
  }

  def withListFormula(formula: String): DataValidationBuilder = {
    this.validationType = ListValidation
    this.constraint = Some(ListFormulaConstraint(formula))
    this
  }

  def withNumberConstraint(
    operator: ComparisonOperator,
    value1: Double,
    value2: Option[Double] = None
  ): DataValidationBuilder = {
    this.validationType = NumberValidation
    this.constraint = Some(NumberConstraint(operator, value1, value2))
    this
  }

  def withDateConstraint(
    operator: ComparisonOperator,
    value1: java.util.Date,
    value2: Option[java.util.Date] = None
  ): DataValidationBuilder = {
    this.validationType = DateValidation
    this.constraint = Some(DateConstraint(operator, value1, value2))
    this
  }

  def withTextLengthConstraint(
    operator: ComparisonOperator,
    length1: Int,
    length2: Option[Int] = None
  ): DataValidationBuilder = {
    this.validationType = TextLengthValidation
    this.constraint = Some(TextLengthConstraint(operator, length1, length2))
    this
  }

  def withFormulaConstraint(formula: String): DataValidationBuilder = {
    this.validationType = FormulaValidation
    this.constraint = Some(FormulaConstraint(formula))
    this
  }

  def withErrorMessage(title: String, text: String): DataValidationBuilder = {
    this.errorTitle = Some(title)
    this.errorText = Some(text)
    this
  }

  def withPromptMessage(title: String, text: String): DataValidationBuilder = {
    this.promptTitle = Some(title)
    this.promptText = Some(text)
    this
  }

  def showErrorBox(show: Boolean): DataValidationBuilder = {
    this.showErrorBox = show
    this
  }

  def showPromptBox(show: Boolean): DataValidationBuilder = {
    this.showPromptBox = show
    this
  }

  def allowEmpty(allow: Boolean): DataValidationBuilder = {
    this.allowEmpty = allow
    this
  }

  def suppressDropDown(suppress: Boolean): DataValidationBuilder = {
    this.suppressDropDown = suppress
    this
  }

  def build(): DataValidation = {
    require(constraint.isDefined, "Validation constraint must be specified")
    DataValidation(
      cellRange = cellRange,
      validationType = validationType,
      constraint = constraint.get,
      errorTitle = errorTitle,
      errorText = errorText,
      promptTitle = promptTitle,
      promptText = promptText,
      showErrorBox = showErrorBox,
      showPromptBox = showPromptBox,
      allowEmpty = allowEmpty,
      suppressDropDown = suppressDropDown
    )
  }

}

object DataValidationBuilder {
  def apply(range: CellRange): DataValidationBuilder = new DataValidationBuilder(range)
}
