import sbt._
import Project._
import Keys._
import Defaults._

object Build extends Build {

  lazy val buildSettings = Seq(
    organization       := "info.folone",
    version            := "0.13-SNAPSHOT",

    scalaVersion       := "2.11.3",
    crossScalaVersions := Seq("2.10.4", "2.11.3"),

    scalacOptions      := Seq(
      "-encoding", "UTF-8",
      "-deprecation",
      "-unchecked",
      "-explaintypes"
    ),

    parallelExecution in Compile := true
  )

  lazy val publishSetting = publishTo <<= (version).apply { v ⇒
      val nexus = "https://oss.sonatype.org/"
      if (v.trim.endsWith("SNAPSHOT"))
        Some("snapshots" at nexus + "content/repositories/snapshots")
      else
        Some("staging" at nexus + "service/local/staging/deploy/maven2")
  }

  lazy val credentialsSetting = credentials += {
    Seq("build.publish.user", "build.publish.password").map(k ⇒ Option(System.getProperty(k))) match {
      case Seq(Some(user), Some(pass)) ⇒
        Credentials("Sonatype Nexus Repository Manager", "oss.sonatype.org", user, pass)
      case _                           ⇒
        Credentials(Path.userHome / ".ivy2" / ".credentials")
    }
  }

  val scalazVersion = "7.1.0"

  lazy val standardSettings = super.settings     ++
    Defaults.defaultSettings                     ++
    buildSettings                                ++
    sbtrelease.ReleasePlugin.releaseSettings     ++
    org.scalastyle.sbt.ScalastylePlugin.Settings ++
    Seq(
      name := "poi-scala",
      resolvers ++= Seq(Resolver.sonatypeRepo("releases"), Resolver.sonatypeRepo("snapshots")),
      libraryDependencies <++= (scalaVersion) { sv ⇒
        Seq(
          "org.apache.poi" %  "poi"                       % "3.10.1",
          "org.apache.poi" %  "poi-ooxml"                 % "3.10.1",
          "org.scalaz"     %% "scalaz-core"               % scalazVersion,
          "org.scalaz"     %% "scalaz-effect"             % scalazVersion,
          "org.specs2"     %% "specs2"                    % "2.4.1"        % "test",
          "org.scalacheck" %% "scalacheck"                % "1.11.5"       % "test",
          "org.scalaz"     %% "scalaz-scalacheck-binding" % scalazVersion  % "test"
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
