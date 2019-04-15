import sbt._
import Project._
import Keys._
import Defaults._
import sbtrelease.ReleasePlugin.autoImport._
import com.typesafe.sbt.pgp.PgpKeys

object Build extends Build {

  lazy val buildSettings = Seq(
    organization       := "info.folone",
    scalaVersion       := "2.12.8",
    crossScalaVersions := Seq(scalaVersion.value, "2.11.12", "2.10.7", "2.13.0-RC1"),

    scalacOptions      := Seq(
      "-encoding", "UTF-8",
      "-deprecation",
      "-unchecked",
      "-explaintypes"
    ),

    parallelExecution in Compile := true
  )

  lazy val publishSetting = {
    publishTo := {
      val nexus = "https://oss.sonatype.org/"
      if (isSnapshot.value)
        Some("snapshots" at nexus + "content/repositories/snapshots")
      else
        Some("staging" at nexus + "service/local/staging/deploy/maven2")
    }
  }

  lazy val credentialsSetting = credentials += {
    Seq("build.publish.user", "build.publish.password").map(k ⇒ Option(System.getProperty(k))) match {
      case Seq(Some(user), Some(pass)) ⇒
        Credentials("Sonatype Nexus Repository Manager", "oss.sonatype.org", user, pass)
      case _                           ⇒
        Credentials(Path.userHome / ".ivy2" / ".credentials")
    }
  }

  val scalazVersion = "7.2.27"
  val poiVersion = "3.14"
  val specsVersion = Def.setting(
    CrossVersion.partialVersion(scalaVersion.value) match {
      case Some((2, 10)) =>
        "3.9.5"
      case _ =>
        "4.5.1"
    }
  )

  lazy val standardSettings = super.settings     ++
    buildSettings                                ++
    org.scalastyle.sbt.ScalastylePlugin.Settings ++
    Seq(
      name := "poi-scala",
      releaseCrossBuild := true,
      releasePublishArtifactsAction := PgpKeys.publishSigned.value,
      resolvers ++= Seq(Resolver.sonatypeRepo("releases"), Resolver.sonatypeRepo("snapshots")),
      libraryDependencies ++= {
        Seq(
          "org.apache.poi" %  "poi"                       % poiVersion,
          "org.apache.poi" %  "poi-ooxml"                 % poiVersion,
          "org.scalaz"     %% "scalaz-core"               % scalazVersion,
          "org.scalaz"     %% "scalaz-effect"             % scalazVersion,
          "org.specs2"     %% "specs2-core"               % specsVersion.value % "test",
          "org.specs2"     %% "specs2-scalacheck"         % specsVersion.value % "test",
          "org.scalacheck" %% "scalacheck"                % "1.14.0"       % "test",
          "org.scalaz"     %% "scalaz-scalacheck-binding" % s"${scalazVersion}-scalacheck-1.14" % "test"
        )
      },
      publishMavenStyle := true,
      publishArtifact in Test := false,
      credentialsSetting,
      publishSetting,
         pomExtra := (
           <url>https://github.com/folone/poi.scala</url>
           <licenses>
             <license>
               <name>Apache License</name>
               <url>http://opensource.org/licenses/Apache-2.0</url>
               <distribution>repo</distribution>
             </license>
           </licenses>
           <scm>
             <url>git@github.com:folone/poi.scala.git</url>
             <connection>scm:git:git@github.com:folone/poi.scala.git</connection>
           </scm>
           <developers>
           {
             Seq(
               ("folone",       "George Leontiev"),
               ("fedgehog",     "Maxim Fedorov"),
               ("Michael Rans", "Michael Rans"),
               ("daneko",       "Kouichi Akatsuka"),
               ("rintcius",     "Rintcius Blok")
             ).map { case (id, name) ⇒
               <developer>
                 <id>{id}</id>
                 <name>{name}</name>
                 <url>http://github.com/{id}</url>
               </developer>
             }
           }
           </developers>
         )
    )

  override lazy val settings = super.settings ++ Seq(
    shellPrompt := { s ⇒ Project.extract(s).currentProject.id + " > " }
  )

  lazy val excludedTestNames = SettingKey[Seq[String]]("excluded-tests", "temporary excluded tests")

  lazy val poi = Project(
    id = "poi",
    base = file("."),
    settings = standardSettings
  )
}
