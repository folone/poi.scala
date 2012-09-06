import sbt._
import Project._
import Keys._

object Build extends Build {

  lazy val buildSettings = Seq(
    organization       := "thenewmotion",
    version            := "0.6-SNAPSHOT",

    scalaVersion       := "2.9.2",
    crossScalaVersions := Seq("2.9.2", "2.10.0-M7"),
    crossVersion       := CrossVersion.full,

    scalacOptions      := Seq(
      "-encoding", "UTF-8",
      "-Ydependent-method-types",
      "-deprecation",
      "-unchecked",
      "-explaintypes"
    ),

    parallelExecution in Compile := true
  ) ++ externalPom()

  lazy val repoSettings = Seq(
    resolvers += "Releases"  at "http://nexus.thenewmotion.com/content/repositories/releases",
    resolvers += "Snapshots" at "http://nexus.thenewmotion.com/content/repositories/snapshots"
  )

  lazy val baseSettings = super.settings ++ Defaults.defaultSettings ++ buildSettings ++ repoSettings

  lazy val standardSettings = baseSettings 

  lazy val parentSettings = standardSettings ++ Seq(
    fork in Test := false,
    javaOptions in Test += "-Drun.mode=dev"
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
