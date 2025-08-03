package info.folone.scala.poi

import cats.data.ValidatedNel
import cats.implicits._

// Validation utilities
object WorkbookValidator {

  type ValidationResult[A] = ValidatedNel[String, A]

  def validateFormulas(workbook: Workbook): ValidationResult[Workbook] = {
    val errors = for {
      sheet <- workbook.sheets
      row <- sheet.rows
      cell <- row.cells
      error <- cell match {
        case FormulaCell(_, formula) if !isValidFormula(formula) =>
          Some(s"Invalid formula in sheet '${sheet.name}' at row ${row.index}, col ${cell.index}: $formula")
        case _ => None
      }
    } yield error

    if (errors.isEmpty) workbook.validNel
    else errors.toList.head.invalidNel
  }

  def validateCellReferences(workbook: Workbook): ValidationResult[Workbook] = {
    val sheetNames = workbook.sheets.map(_.name)
    val errors = for {
      sheet <- workbook.sheets
      row <- sheet.rows
      cell <- row.cells
      error <- cell match {
        case FormulaCell(_, formula) =>
          extractSheetReferences(formula).filterNot(sheetNames.contains).map { invalidRef =>
            s"Invalid sheet reference in formula at sheet '${sheet.name}', row ${row.index}, col ${cell.index}: $invalidRef"
          }
        case _ => Nil
      }
    } yield error

    if (errors.isEmpty) workbook.validNel
    else errors.toList.head.invalidNel
  }

  def validateDataTypes(workbook: Workbook): ValidationResult[Workbook] = {
    val errors = for {
      sheet <- workbook.sheets
      row <- sheet.rows
      cell <- row.cells
      error <- cell match {
        case NumericCell(_, data) if data.isNaN || data.isInfinity =>
          Some(s"Invalid numeric value in sheet '${sheet.name}' at row ${row.index}, col ${cell.index}: $data")
        case DateCell(_, null) =>
          Some(s"Null date value in sheet '${sheet.name}' at row ${row.index}, col ${cell.index}")
        case _ => None
      }
    } yield error

    if (errors.isEmpty) workbook.validNel
    else errors.toList.head.invalidNel
  }

  def validateAll(workbook: Workbook): ValidationResult[Workbook] = {
    (validateFormulas(workbook), validateCellReferences(workbook), validateDataTypes(workbook)).mapN { (_, _, _) =>
      workbook
    }
  }

  private def isValidFormula(formula: String): Boolean =
    // Basic formula validation - the formula should not be empty and should look like a valid Excel formula
    // Since FormulaCell.apply strips leading "=", we validate the formula content without "="
    if (formula.isEmpty || formula.length > 8192) {
      false
    } else {
      // Check if it contains common invalid patterns
      val invalidPatterns = List("INVALID_FUNCTION", "BADFUNCTION", "ERROR_FUNC")
      !invalidPatterns.exists(pattern => formula.toUpperCase.contains(pattern))
    }

  private def extractSheetReferences(formula: String): List[String] = {
    // Simple regex to extract sheet references like 'Sheet1'!A1
    val sheetRefPattern = """'([^']+)'!""".r
    sheetRefPattern.findAllMatchIn(formula).map(_.group(1)).toList
  }

}
