package info.folone.scala.poi

import java.io.File
import org.specs2.mutable._
import org.specs2.specification.Scope

class EnhancedStylingSpec extends Specification {

  "Enhanced CellStyle" should {
    "create basic style with default values" in {
      val style = CellStyle()
      style.font.name must beEqualTo("Arial")
      style.dataFormat.format must beEqualTo("General")
      style.alignment must beNone
      style.wrapText must beEqualTo(false)
      style.locked must beEqualTo(true)
    }

    "create style with custom alignment" in {
      val style = CellStyle(alignment = Some(CenterAlignment), verticalAlignment = Some(MiddleAlignment))
      style.alignment must beSome[HorizontalAlignment](CenterAlignment)
      style.verticalAlignment must beSome[VerticalAlignment](MiddleAlignment)
    }

    "create style with colors" in {
      val style = CellStyle(backgroundColor = Some(YellowColor), foregroundColor = Some(RedColor))
      style.backgroundColor must beSome[Color](YellowColor)
      style.foregroundColor must beSome[Color](RedColor)
    }

    "create style with borders" in {
      val borders = Borders(
        top = Some(ThinBorder),
        bottom = Some(ThickBorder),
        topColor = Some(BlackColor),
        bottomColor = Some(RedColor)
      )
      val style = CellStyle(borders = Some(borders))
      style.borders must beSome(borders)
    }
  }

  "Enhanced Font" should {
    "create font with all properties" in {
      val font = Font(
        name = "Times New Roman",
        bold = true,
        italic = true,
        underline = true,
        strikeout = true,
        heightInPoints = 12
      )

      font.name must beEqualTo("Times New Roman")
      font.bold must beEqualTo(true)
      font.italic must beEqualTo(true)
      font.underline must beEqualTo(true)
      font.strikeout must beEqualTo(true)
      font.heightInPoints must beEqualTo(12)
    }
  }

  "Color enums" should {
    "provide correct color indices" in {
      BlackColor.toIndex must beEqualTo(8) // IndexedColors.BLACK
      WhiteColor.toIndex must beEqualTo(9) // IndexedColors.WHITE
      RedColor.toIndex must beEqualTo(10) // IndexedColors.RED
    }

    "support custom colors" in {
      val customColor = CustomColor(42)
      customColor.toIndex must beEqualTo(42)
    }
  }

  "Border styles" should {
    "convert to POI border styles correctly" in {
      ThinBorder.toPOI.toString must beEqualTo("THIN")
      ThickBorder.toPOI.toString must beEqualTo("THICK")
      DottedBorder.toPOI.toString must beEqualTo("DOTTED")
    }
  }

  "Workbook with enhanced styling" should {
    "apply enhanced styles to cells" in new StyledWorkbookScope {
      val cellAddr = CellAddr("test", 0, 0)
      val styles = Map(enhancedStyle -> List(cellAddr))
      val styledCell = StyledCell(StringCell(0, "Styled Text"), enhancedStyle)
      val wb = Workbook(Set(Sheet("test")(Set(Row(0)(Set(styledCell)))))).styled(styles)

      val path = File.createTempFile("styled_test", ".xlsx").getAbsolutePath
      wb.toFile(path)

      // Verify the file was created
      new File(path).exists() must beEqualTo(true)
      new File(path).delete()
      success
    }
  }

  trait StyledWorkbookScope extends Scope {

    val enhancedStyle = CellStyle(
      font = Font(name = "Arial", bold = true, heightInPoints = 14),
      alignment = Some(CenterAlignment),
      verticalAlignment = Some(MiddleAlignment),
      backgroundColor = Some(YellowColor),
      borders = Some(
        Borders(
          top = Some(ThinBorder),
          bottom = Some(ThinBorder),
          left = Some(ThinBorder),
          right = Some(ThinBorder),
          topColor = Some(BlackColor),
          bottomColor = Some(BlackColor),
          leftColor = Some(BlackColor),
          rightColor = Some(BlackColor)
        )
      ),
      wrapText = true
    )

  }

}
