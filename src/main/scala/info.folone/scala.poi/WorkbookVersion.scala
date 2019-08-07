package info.folone.scala.poi

sealed abstract class WorkbookVersion
case object HSSF extends WorkbookVersion
case object XSSF extends WorkbookVersion
case object SXSSF extends WorkbookVersion
