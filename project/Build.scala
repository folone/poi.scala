import sbt._
import Project._
import Keys._

object Build extends Build {

  lazy val buildSettings = Seq(
    organization       := "folone",
    version            := "0.6-SNAPSHOT",

    scalaVersion       := "2.9.2",
    crossScalaVersions := Seq("2.9.2", "2.10.0-RC5"),
    crossVersion       := CrossVersion.full,

    scalacOptions      := Seq(
      "-encoding", "UTF-8",
      "-deprecation",
      "-unchecked",
      "-explaintypes"
    ),

    parallelExecution in Compile := true
  )

  lazy val repoSettings = Seq(
    resolvers += "Sonatype"  at "https://oss.sonatype.org/content/repositories/releases/"
  )

  lazy val baseSettings = super.settings ++ Defaults.defaultSettings ++ buildSettings ++ repoSettings

  lazy val standardSettings = baseSettings 

  lazy val parentSettings = standardSettings ++ Seq(
    name := "scala.poi",
    libraryDependencies ++= Seq(
      "org.apache.poi" %  "poi"                       % "3.8",
      "org.apache.poi" %  "poi-ooxml"                 % "3.8",
      "org.scalaz"     %% "scalaz-core"               % "7.0.0-M6"          cross CrossVersion.full,
      "org.scalaz"     %% "scalaz-effect"             % "7.0.0-M6"          cross CrossVersion.full,
      "org.specs2"     %% "specs2"                    % "1.12.3"   % "test" cross CrossVersion.full,
      "junit"          %  "junit"                     % "4.7"      % "test",
      "org.scalacheck" %% "scalacheck"                % "1.10.0"   % "test" cross CrossVersion.full,
      "org.scalaz"     %% "scalaz-scalacheck-binding" % "7.0.0-M6" % "test" cross CrossVersion.full
    )
  )

  override lazy val settings = super.settings ++ repoSettings  ++ Seq(
    shellPrompt := { s => Project.extract(s).currentProject.id + " > " }
  )

  lazy val excludedTestNames = SettingKey[Seq[String]]("excluded-tests", "temporary excluded tests")

  lazy val poi = Project(
    id = "poi",
    base = file("."),
    settings = parentSettings
  )

}
