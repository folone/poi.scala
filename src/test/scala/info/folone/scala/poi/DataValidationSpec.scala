package info.folone.scala.poi

import java.util.Date
import org.specs2.mutable._
import org.specs2.specification.Scope

class DataValidationSpec extends Specification {

  "DataValidation" should {
    "create list validation" in new DataValidationScope {
      val validation = ValidationHelper.dropdownList(testRange, List("Option1", "Option2", "Option3"))

      validation.validationType must beEqualTo(ListValidation)
      validation.constraint must beAnInstanceOf[ListConstraint]
      validation.cellRange must beEqualTo(testRange)
      validation.suppressDropDown must beFalse
    }

    "create number range validation" in new DataValidationScope {
      val validation = ValidationHelper.numberRange(testRange, 1.0, 100.0)

      validation.validationType must beEqualTo(NumberValidation)
      validation.constraint must beAnInstanceOf[NumberConstraint]

      val constraint = validation.constraint.asInstanceOf[NumberConstraint]
      constraint.operator must beEqualTo(Between)
      constraint.value1 must beEqualTo(1.0)
      constraint.value2 must beSome(100.0)
    }

    "create date range validation" in new DataValidationScope {
      import java.util.Calendar
      val cal1 = Calendar.getInstance()
      cal1.set(2023, 0, 1, 0, 0, 0)
      cal1.set(Calendar.MILLISECOND, 0)
      val startDate = cal1.getTime

      val cal2 = Calendar.getInstance()
      cal2.set(2023, 11, 31, 0, 0, 0)
      cal2.set(Calendar.MILLISECOND, 0)
      val endDate = cal2.getTime

      val validation = ValidationHelper.dateRange(testRange, startDate, endDate)

      validation.validationType must beEqualTo(DateValidation)
      validation.constraint must beAnInstanceOf[DateConstraint]

      val constraint = validation.constraint.asInstanceOf[DateConstraint]
      constraint.operator must beEqualTo(Between)
      constraint.value1 must beEqualTo(startDate)
      constraint.value2 must beSome(endDate)
    }

    "create text length validation" in new DataValidationScope {
      val validation = ValidationHelper.textLength(testRange, 5, 50)

      validation.validationType must beEqualTo(TextLengthValidation)
      validation.constraint must beAnInstanceOf[TextLengthConstraint]

      val constraint = validation.constraint.asInstanceOf[TextLengthConstraint]
      constraint.operator must beEqualTo(Between)
      constraint.length1 must beEqualTo(5)
      constraint.length2 must beSome(50)
    }

    "create formula validation" in new DataValidationScope {
      val formula = "ISTEXT(A1)"
      val validation = ValidationHelper.formulaValidation(testRange, formula)

      validation.validationType must beEqualTo(FormulaValidation)
      validation.constraint must beAnInstanceOf[FormulaConstraint]

      val constraint = validation.constraint.asInstanceOf[FormulaConstraint]
      constraint.formula must beEqualTo(formula)
    }

    "create integer range validation" in new DataValidationScope {
      val validation = ValidationHelper.integerRange(testRange, 1, 10)

      validation.validationType must beEqualTo(IntegerValidation)
      validation.constraint must beAnInstanceOf[NumberConstraint]

      val constraint = validation.constraint.asInstanceOf[NumberConstraint]
      constraint.operator must beEqualTo(Between)
      constraint.value1 must beEqualTo(1.0)
      constraint.value2 must beSome(10.0)
    }
  }

  "DataValidationBuilder" should {
    "build list validation with fluent API" in new DataValidationScope {
      val validation = DataValidationBuilder(testRange)
        .withList(List("A", "B", "C"))
        .withErrorMessage("Error", "Please select from the list")
        .withPromptMessage("Prompt", "Select an option")
        .showErrorBox(true)
        .showPromptBox(true)
        .suppressDropDown(false)
        .build()

      validation.validationType must beEqualTo(ListValidation)
      validation.errorTitle must beSome("Error")
      validation.errorText must beSome("Please select from the list")
      validation.promptTitle must beSome("Prompt")
      validation.promptText must beSome("Select an option")
      validation.showErrorBox must beTrue
      validation.showPromptBox must beTrue
      validation.suppressDropDown must beFalse
    }

    "build number constraint validation" in new DataValidationScope {
      val validation = DataValidationBuilder(testRange)
        .withNumberConstraint(GreaterThan, 0.0)
        .allowEmpty(false)
        .build()

      validation.validationType must beEqualTo(NumberValidation)
      validation.allowEmpty must beFalse

      val constraint = validation.constraint.asInstanceOf[NumberConstraint]
      constraint.operator must beEqualTo(GreaterThan)
      constraint.value1 must beEqualTo(0.0)
      constraint.value2 must beNone
    }

    "build formula constraint validation" in new DataValidationScope {
      val formula = "LEN(A1)<=10"
      val validation = DataValidationBuilder(testRange)
        .withFormulaConstraint(formula)
        .build()

      validation.validationType must beEqualTo(FormulaValidation)

      val constraint = validation.constraint.asInstanceOf[FormulaConstraint]
      constraint.formula must beEqualTo(formula)
    }

    "fail to build without constraint" in new DataValidationScope {
      DataValidationBuilder(testRange).build() must throwA[IllegalArgumentException]
    }
  }

  "ComparisonOperator" should {
    "provide all standard operators" in {
      val operators =
        List(Equal, NotEqual, GreaterThan, LessThan, GreaterThanOrEqual, LessThanOrEqual, Between, NotBetween)
      operators.size must beEqualTo(8)
    }
  }

  "ValidationConstraint hierarchy" should {
    "support different constraint types" in new DataValidationScope {
      val listConstraint: ValidationConstraint = ListConstraint(List("A", "B"))
      val numberConstraint: ValidationConstraint = NumberConstraint(Between, 1.0, Some(10.0))
      val dateConstraint: ValidationConstraint = DateConstraint(GreaterThan, new Date())
      val formulaConstraint: ValidationConstraint = FormulaConstraint("ISTEXT(A1)")

      listConstraint must beAnInstanceOf[ListConstraint]
      numberConstraint must beAnInstanceOf[NumberConstraint]
      dateConstraint must beAnInstanceOf[DateConstraint]
      formulaConstraint must beAnInstanceOf[FormulaConstraint]
    }
  }

  trait DataValidationScope extends Scope {
    val testRange = CellRange("Sheet1", 0, 0, 9, 0) // A1:A10
  }

}
