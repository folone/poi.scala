package info.folone.scala.poi

import org.apache.poi.hssf.usermodel.HSSFFont.FONT_ARIAL
import org.apache.poi.ss.usermodel.{Font ⇒ POIFont}

case class CellStyle(font: Font)

case class Font(
  name: String  = FONT_ARIAL,
  bold: Boolean = false,
  color: Short  = POIFont.COLOR_NORMAL ) {

  def appliedTo(pf: POIFont): POIFont = {
    pf setFontName   name
    pf setBoldweight boldweight
    pf setColor      color
    pf
  }

  private def boldweight = if (bold) POIFont.BOLDWEIGHT_BOLD else POIFont.BOLDWEIGHT_NORMAL
}


