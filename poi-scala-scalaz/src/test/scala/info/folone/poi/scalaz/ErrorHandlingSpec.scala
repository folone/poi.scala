package info.folone.poi.scalaz

import _root_.scalaz._
import info.folone.poi._
import org.specs2.mutable._
import org.specs2.specification.Scope
import syntax.validation._

class ErrorHandlingSpec extends Specification {

  "PoiError hierarchy" should {
    "create InvalidCellReference error" in {
      val error = InvalidCellReference("XYZ123")
      error.message must beEqualTo("Invalid cell reference: XYZ123")
      error.getMessage must beEqualTo("Invalid cell reference: XYZ123")
    }

    "create SheetNotFound error" in {
      val error = SheetNotFound("NonExistentSheet")
      error.message must beEqualTo("Sheet not found: NonExistentSheet")
    }

    "create InvalidFormula error" in {
      val error = InvalidFormula("=INVALID()")
      error.message must beEqualTo("Invalid formula: =INVALID()")
    }

    "create InvalidFormula error with cause" in {
      val cause = new RuntimeException("Parse error")
      val error = InvalidFormula("=INVALID()", Some(cause))
      error.message must contain("Parse error")
    }

    "create UnsupportedOperation error" in {
      val error = UnsupportedOperation("pivot tables")
      error.message must beEqualTo("Unsupported operation: pivot tables")
    }

    "create InvalidDataType error" in {
      val error = InvalidDataType("Number", "String", "A1")
      error.message must beEqualTo("Invalid data type at A1: expected Number, got String")
    }

    "create WorkbookIOError error" in {
      val cause = new java.io.IOException("File not found")
      val error = WorkbookIOError(cause)
      error.message must beEqualTo("Workbook I/O error: File not found")
    }

    "create ValidationError with multiple violations" in {
      val violations = List("Invalid formula in A1", "Missing required data in B2")
      val error = ValidationError(violations)
      error.message must contain("Invalid formula in A1")
      error.message must contain("Missing required data in B2")
    }
  }

  "WorkbookValidator" should {
    "validate formulas successfully" in new ValidWorkbookScope {
      val result = WorkbookValidator.validateFormulas(validWorkbook)
      result must beSuccessful
    }

    "detect invalid formulas" in new InvalidWorkbookScope {
      val result = WorkbookValidator.validateFormulas(workbookWithInvalidFormula)
      result must beFailure
    }

    "validate cell references successfully" in new ValidWorkbookScope {
      val result = WorkbookValidator.validateCellReferences(validWorkbook)
      result must beSuccessful
    }

    "detect invalid sheet references" in new InvalidWorkbookScope {
      val result = WorkbookValidator.validateCellReferences(workbookWithInvalidSheetRef)
      result must beFailure
    }

    "validate data types successfully" in new ValidWorkbookScope {
      val result = WorkbookValidator.validateDataTypes(validWorkbook)
      result must beSuccessful
    }

    "detect invalid numeric data" in new InvalidWorkbookScope {
      val result = WorkbookValidator.validateDataTypes(workbookWithInvalidData)
      result must beFailure
    }

    "validate all aspects successfully" in new ValidWorkbookScope {
      val result = WorkbookValidator.validateAll(validWorkbook)
      result must beSuccessful
    }

    "detect multiple validation errors" in new InvalidWorkbookScope {
      val result = WorkbookValidator.validateAll(workbookWithMultipleErrors)
      result must beFailure

      // Should accumulate all errors
      val failures = result.fold(identity, _ => NonEmptyList(ValidationError(Nil)))
      failures.size must beGreaterThan(1)
    }
  }

  "Validation utilities" should {
    "identify valid formulas" in {
      // Note: This tests the private method through public interface
      val validFormula = "SUM(A1:A10)"
      val workbook = Workbook(Set(Sheet("test")(Set(Row(0)(Set(FormulaCell(0, validFormula)))))))

      val result = WorkbookValidator.validateFormulas(workbook)
      result must beSuccessful
    }

    "identify invalid formulas" in {
      // Test extremely long formula (over 8192 characters)
      val longFormula = "A1+" * 3000 + "A1"
      val workbook = Workbook(Set(Sheet("test")(Set(Row(0)(Set(FormulaCell(0, longFormula)))))))

      val result = WorkbookValidator.validateFormulas(workbook)
      result must beFailure
    }

    "extract sheet references from formulas" in {
      val formula = "'Sheet1'!A1+'Sheet2'!B1+'Another Sheet'!C1"
      val workbook = Workbook(
        Set(
          Sheet("Sheet1")(Set(Row(0)(Set(StringCell(0, "test"))))),
          Sheet("MainSheet")(Set(Row(0)(Set(FormulaCell(0, formula)))))
        )
      )

      val result = WorkbookValidator.validateCellReferences(workbook)
      result must beFailure // Should fail because Sheet2 and 'Another Sheet' don't exist
    }
  }

  "Error handling in practical scenarios" should {
    "handle workbook I/O errors gracefully" in {
      // Test simulated I/O error handling
      val ioError = WorkbookIOError(new java.io.IOException("Simulated I/O error"))
      ioError.message must contain("Simulated I/O error")
      success
    }

    "handle validation errors in fluent API" in new InvalidWorkbookScope {
      // This demonstrates how validation errors could be used in a fluent API
      val validationResult = WorkbookValidator.validateAll(workbookWithInvalidFormula)

      validationResult must beFailure
    }
  }

  trait ValidWorkbookScope extends Scope {

    val validWorkbook = Workbook(
      Set(
        Sheet("Sheet1")(
          Set(
            Row(0)(
              Set(
                StringCell(0, "Header"),
                NumericCell(1, 100.0),
                FormulaCell(2, "B1*2")
              )
            ),
            Row(1)(
              Set(
                StringCell(0, "Data"),
                NumericCell(1, 200.0),
                FormulaCell(2, "SUM(B1:B2)")
              )
            )
          )
        )
      )
    )

  }

  trait InvalidWorkbookScope extends Scope {

    // Workbook with invalid formula (starts with =)
    val workbookWithInvalidFormula = Workbook(
      Set(
        Sheet("Sheet1")(
          Set(
            Row(0)(Set(FormulaCell(0, "=INVALID_FUNCTION()"))) // Invalid because it starts with =
          )
        )
      )
    )

    // Workbook with invalid sheet reference
    val workbookWithInvalidSheetRef = Workbook(
      Set(
        Sheet("Sheet1")(
          Set(
            Row(0)(Set(FormulaCell(0, "'NonExistentSheet'!A1")))
          )
        )
      )
    )

    // Workbook with invalid numeric data
    val workbookWithInvalidData = Workbook(
      Set(
        Sheet("Sheet1")(
          Set(
            Row(0)(
              Set(
                NumericCell(0, Double.NaN),
                NumericCell(1, Double.PositiveInfinity)
              )
            )
          )
        )
      )
    )

    // Workbook with multiple types of errors
    val workbookWithMultipleErrors = Workbook(
      Set(
        Sheet("Sheet1")(
          Set(
            Row(0)(
              Set(
                FormulaCell(0, "=STARTS_WITH_EQUALS"), // Invalid formula
                NumericCell(1, Double.NaN), // Invalid numeric
                FormulaCell(2, "'MissingSheet'!A1") // Invalid sheet reference
              )
            )
          )
        )
      )
    )

  }

  // Helper matchers for validation results
  def beSuccessful[A]: org.specs2.matcher.Matcher[ValidationNel[String, A]] =
    (result: ValidationNel[String, A]) => (result.isSuccess, s"Expected success but got: $result")

  def beFailure[A]: org.specs2.matcher.Matcher[ValidationNel[String, A]] =
    (result: ValidationNel[String, A]) => (result.isFailure, s"Expected failure but got: $result")

}
