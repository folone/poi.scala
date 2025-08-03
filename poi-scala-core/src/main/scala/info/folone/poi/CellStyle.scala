package info.folone.poi

import org.apache.poi.hssf.usermodel.HSSFFont.FONT_ARIAL
import org.apache.poi.ss.usermodel.{
  BorderStyle => POIBorderStyle,
  DataFormat => POIDataFormat,
  FillPatternType => POIFillPatternType,
  Font => POIFont,
  HorizontalAlignment => POIHorizontalAlignment,
  IndexedColors,
  VerticalAlignment => POIVerticalAlignment
}

case class CellStyle(
  font: Font = Font(),
  dataFormat: DataFormat = DataFormat("General"),
  alignment: Option[HorizontalAlignment] = None,
  verticalAlignment: Option[VerticalAlignment] = None,
  backgroundColor: Option[Color] = None,
  foregroundColor: Option[Color] = None,
  borders: Option[Borders] = None,
  wrapText: Boolean = false,
  locked: Boolean = true,
  hidden: Boolean = false,
  rotation: Short = 0,
  indent: Short = 0
)

case class Font(
  name: String = FONT_ARIAL,
  bold: Boolean = false,
  italic: Boolean = false,
  underline: Boolean = false,
  strikeout: Boolean = false,
  color: Short = POIFont.COLOR_NORMAL,
  heightInPoints: Short = 10
) {

  def appliedTo(pf: POIFont): POIFont = {
    pf setFontName name
    pf setBold bold
    pf setItalic italic
    pf setUnderline (if (underline) POIFont.U_SINGLE.toByte else POIFont.U_NONE.toByte)
    pf setStrikeout strikeout
    pf setColor color
    pf setFontHeightInPoints heightInPoints
    pf
  }

}

case class DataFormat(format: String) {

  def appliedTo(poiDataFormat: POIDataFormat): Short =
    poiDataFormat.getFormat(format)

}

// Alignment enums
sealed trait HorizontalAlignment { def toPOI: POIHorizontalAlignment }
case object LeftAlignment extends HorizontalAlignment { def toPOI = POIHorizontalAlignment.LEFT }
case object CenterAlignment extends HorizontalAlignment { def toPOI = POIHorizontalAlignment.CENTER }
case object RightAlignment extends HorizontalAlignment { def toPOI = POIHorizontalAlignment.RIGHT }
case object JustifyAlignment extends HorizontalAlignment { def toPOI = POIHorizontalAlignment.JUSTIFY }
case object FillAlignment extends HorizontalAlignment { def toPOI = POIHorizontalAlignment.FILL }

sealed trait VerticalAlignment { def toPOI: POIVerticalAlignment }
case object TopAlignment extends VerticalAlignment { def toPOI = POIVerticalAlignment.TOP }
case object MiddleAlignment extends VerticalAlignment { def toPOI = POIVerticalAlignment.CENTER }
case object BottomAlignment extends VerticalAlignment { def toPOI = POIVerticalAlignment.BOTTOM }
case object JustifyVerticalAlignment extends VerticalAlignment { def toPOI = POIVerticalAlignment.JUSTIFY }

// Color support
sealed trait Color { def toIndex: Short }
case object BlackColor extends Color { def toIndex = IndexedColors.BLACK.getIndex }
case object WhiteColor extends Color { def toIndex = IndexedColors.WHITE.getIndex }
case object RedColor extends Color { def toIndex = IndexedColors.RED.getIndex }
case object GreenColor extends Color { def toIndex = IndexedColors.GREEN.getIndex }
case object BlueColor extends Color { def toIndex = IndexedColors.BLUE.getIndex }
case object YellowColor extends Color { def toIndex = IndexedColors.YELLOW.getIndex }
case object OrangeColor extends Color { def toIndex = IndexedColors.ORANGE.getIndex }
case object GreyColor extends Color { def toIndex = IndexedColors.GREY_25_PERCENT.getIndex }
case class CustomColor(index: Short) extends Color { def toIndex = index }

// Border support
case class Borders(
  top: Option[BorderStyle] = None,
  bottom: Option[BorderStyle] = None,
  left: Option[BorderStyle] = None,
  right: Option[BorderStyle] = None,
  topColor: Option[Color] = None,
  bottomColor: Option[Color] = None,
  leftColor: Option[Color] = None,
  rightColor: Option[Color] = None
)

sealed trait BorderStyle { def toPOI: POIBorderStyle }
case object ThinBorder extends BorderStyle { def toPOI = POIBorderStyle.THIN }
case object MediumBorder extends BorderStyle { def toPOI = POIBorderStyle.MEDIUM }
case object ThickBorder extends BorderStyle { def toPOI = POIBorderStyle.THICK }
case object DottedBorder extends BorderStyle { def toPOI = POIBorderStyle.DOTTED }
case object DashedBorder extends BorderStyle { def toPOI = POIBorderStyle.DASHED }
case object DoubleBorder extends BorderStyle { def toPOI = POIBorderStyle.DOUBLE }
