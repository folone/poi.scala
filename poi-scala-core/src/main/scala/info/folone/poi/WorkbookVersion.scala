package info.folone.poi

sealed abstract class WorkbookVersion
case object HSSF extends WorkbookVersion
case object XSSF extends WorkbookVersion

case class SXSSF(
  rowAccessWindowSize: Option[Int] = None,
  compressTmpFiles: Boolean = true,
  useSharedStringsTable: Boolean = false,
  encryptTmpFiles: Boolean = false
) extends WorkbookVersion
