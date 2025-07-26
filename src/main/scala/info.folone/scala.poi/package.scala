package info.folone.scala.poi

import scala.language.implicitConversions

package object impure {

  implicit def workbook2WorkbookImpure(wb: Workbook): WorkbookImpure =
    new WorkbookImpure(wb)

}
