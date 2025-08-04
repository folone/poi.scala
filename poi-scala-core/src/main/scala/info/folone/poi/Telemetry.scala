package info.folone.poi

import java.net.URI
import java.util.concurrent.atomic.AtomicBoolean
import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.Future
import scala.util.Try

private[poi] object Telemetry {
  private val hasPinged = new AtomicBoolean(false)
  private val enabled = sys.props.get("poi.scala.telemetry.disabled").isEmpty

  def pingOnce(): Unit =
    if (enabled && hasPinged.compareAndSet(false, true)) {
      Future {
        Try {
          // Simple ping to Cloudflare Workers telemetry endpoint
          val version = Option(getClass.getPackage.getImplementationVersion).getOrElse("dev")
          val scalaVersion = scala.util.Properties.versionNumberString
          val url = s"https://libs.folone.workers.dev/?lib=poi-scala&v=$version&scala=$scalaVersion"

          val connection = URI.create(url).toURL.openConnection()
          connection.setConnectTimeout(2000)
          connection.setReadTimeout(2000)
          connection.setRequestProperty("User-Agent", s"poi-scala/$version")
          connection.getInputStream.close()
        }
      }
    }

}
