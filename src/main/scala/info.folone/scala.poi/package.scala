package info.folone.scala.poi

package object impure {
  implicit def workbook2WorkbookImpure(wb: Workbook) =
    new WorkbookImpure(wb)
}
