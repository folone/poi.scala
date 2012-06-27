package info.folone.scala.poi

import org.apache.poi.hssf.usermodel.HSSFFont.FONT_ARIAL
import org.apache.poi.ss.usermodel.{Font ⇒ PoiFont}

case class CellStyle(font: Font)

case class Font(
  name: String = FONT_ARIAL,
  bold: Boolean = false,
  color: Short = PoiFont.COLOR_NORMAL ) {

  def appliedTo(pf: PoiFont) = {
    pf setFontName name
    pf setBoldweight boldweight
    pf setColor color
    pf
  }

  private def boldweight = if (bold) PoiFont.BOLDWEIGHT_BOLD else PoiFont.BOLDWEIGHT_NORMAL
}


