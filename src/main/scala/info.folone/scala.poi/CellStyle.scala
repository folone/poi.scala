package info.folone.scala.poi

import org.apache.poi.hssf.usermodel.HSSFFont.FONT_ARIAL
import org.apache.poi.ss.usermodel.{Font => POIFont, DataFormat => POIDataFormat}

case class CellStyle(font: Font, dataFormat: DataFormat)

case class Font(name: String = FONT_ARIAL, bold: Boolean = false, color: Short = POIFont.COLOR_NORMAL) {

  def appliedTo(pf: POIFont): POIFont = {
    pf setFontName name
    pf setBold bold
    pf setColor color
    pf
  }

}

case class DataFormat(format: String) {

  def appliedTo(poiDataFormat: POIDataFormat): Short = {
    poiDataFormat.getFormat(format)
  }
}
