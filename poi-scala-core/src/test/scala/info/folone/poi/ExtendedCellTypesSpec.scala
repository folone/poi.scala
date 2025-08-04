package info.folone.poi

import java.io.File
import org.specs2.mutable._
import org.specs2.specification.Scope

class ExtendedCellTypesSpec extends Specification {

  "Extended Cell Types" should {
    "create BlankCell correctly" in {
      val blankCell = BlankCell(5)
      blankCell.index must beEqualTo(5)
    }

    "create ErrorCell correctly" in {
      val errorCell = ErrorCell(3, 7) // Error code 7 = #DIV/0!
      errorCell.index must beEqualTo(3)
      errorCell.errorCode must beEqualTo(7)
    }

    "support equality for BlankCell" in {
      val blank1 = BlankCell(1)
      val blank2 = BlankCell(1)
      val blank3 = BlankCell(2)

      blank1 must beEqualTo(blank2)
      blank1 must not(beEqualTo(blank3))
    }

    "support equality for ErrorCell" in {
      val error1 = ErrorCell(1, 7)
      val error2 = ErrorCell(1, 7)
      val error3 = ErrorCell(1, 15)
      val error4 = ErrorCell(2, 7)

      error1 must beEqualTo(error2)
      error1 must not(beEqualTo(error3))
      error1 must not(beEqualTo(error4))
    }
  }

  "Workbook with extended cell types" should {
    "write and read BlankCells correctly" in {
      val wb = Workbook(
        Set(
          Sheet("test")(
            Set(
              Row(0)(
                Set(
                  StringCell(0, "Text"),
                  BlankCell(1),
                  NumericCell(2, 42.0)
                )
              )
            )
          )
        )
      )

      val path = File.createTempFile("blank_test", ".xlsx").getAbsolutePath
      wb.toFile(path)

      val reloaded = Workbook.fromFile(new File(path)).toOption.get
      val cells = reloaded.sheets.head.rows.head.cells

      cells.size must beEqualTo(3)
      cells.exists(c => c.isInstanceOf[BlankCell]) must beTrue

      new File(path).delete()
      success
    }

    "write and read ErrorCells correctly" in {
      val wb = Workbook(
        Set(
          Sheet("test")(
            Set(
              Row(0)(
                Set(
                  StringCell(0, "Text"),
                  ErrorCell(1, 7), // #DIV/0!
                  NumericCell(2, 42.0)
                )
              )
            )
          )
        )
      )

      val path = File.createTempFile("error_test", ".xlsx").getAbsolutePath
      wb.toFile(path)

      val reloaded = Workbook.fromFile(new File(path)).toOption.get
      val cells = reloaded.sheets.head.rows.head.cells

      cells.size must beEqualTo(3)
      cells.exists(_.isInstanceOf[ErrorCell]) must beTrue

      val errorCell = cells.find(_.isInstanceOf[ErrorCell]).get.asInstanceOf[ErrorCell]
      errorCell.errorCode must beEqualTo(7)

      new File(path).delete()
      success
    }

    "handle mixed cell types in a sheet" in new MixedCellTypesScope {
      val path = File.createTempFile("mixed_test", ".xlsx").getAbsolutePath
      mixedWorkbook.toFile(path)

      val reloaded = Workbook.fromFile(new File(path)).toOption.get
      val cells = reloaded.sheets.head.rows.head.cells

      cells.size must beEqualTo(7)
      cells.exists(_.isInstanceOf[StringCell]) must beTrue
      cells.exists(_.isInstanceOf[NumericCell]) must beTrue
      cells.exists(_.isInstanceOf[BooleanCell]) must beTrue
      cells.exists(_.isInstanceOf[FormulaCell]) must beTrue
      cells.exists(_.isInstanceOf[BlankCell]) must beTrue
      cells.exists(_.isInstanceOf[ErrorCell]) must beTrue

      new File(path).delete()
      success
    }
  }

  trait MixedCellTypesScope extends Scope {

    val mixedWorkbook = Workbook(
      Set(
        Sheet("mixed")(
          Set(
            Row(0)(
              Set(
                StringCell(0, "Text"),
                NumericCell(1, 42.0),
                BooleanCell(2, true),
                FormulaCell(3, "SUM(A1:B1)"),
                BlankCell(4),
                ErrorCell(5, 7), // #DIV/0!
                DateCell(6, new java.util.Date())
              )
            )
          )
        )
      )
    )

  }

}
