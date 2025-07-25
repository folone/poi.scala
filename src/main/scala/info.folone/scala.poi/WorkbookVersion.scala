package info.folone.scala.poi

sealed abstract class WorkbookVersion
case object HSSF extends WorkbookVersion
case object XSSF extends WorkbookVersion
case object SXSSF extends WorkbookVersion

// Enhanced streaming configuration
case class SXSSFConfig(
    rowAccessWindowSize: Int = 100,
    compressTmpFiles: Boolean = true,
    useSharedStringsTable: Boolean = false,
    encryptTmpFiles: Boolean = false
) extends WorkbookVersion

// Memory monitoring configuration
case class MemoryConfig(
    maxMemoryThreshold: Long = (Runtime.getRuntime.maxMemory() * 0.8).toLong,
    enableMonitoring: Boolean = false,
    logMemoryUsage: Boolean = false
)
