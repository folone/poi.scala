package info.folone.scala.poi

package object impure {
  implicit def workbook2WorkbookImpure(wb: Workbook): WorkbookImpure =
    new WorkbookImpure(wb)
}
