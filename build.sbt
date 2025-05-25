val Scala212 = "2.12.20"

val isScala3 = Def.setting(
  CrossVersion.partialVersion(scalaVersion.value).exists(_._1 == 3)
)

lazy val buildSettings = Def.settings(
  organization := "info.folone",
  scalaVersion := Scala212,
  crossScalaVersions := Seq(Scala212, "2.13.15", "3.3.4"),
  (Compile / doc / scalacOptions) ++= {
    val base = (LocalRootProject / baseDirectory).value.getAbsolutePath
    if (isScala3.value) {
      Nil
    } else {
      val hash = sys.process.Process("git rev-parse HEAD").lineStream_!.head
      Seq(
        "-sourcepath",
        base,
        "-doc-source-url",
        "https://github.com/folone/poi.scala/tree/" + hash + "€{FILE_PATH}.scala"
      )
    }
  },
  scalacOptions := Seq(
    "-feature",
    "-encoding",
    "UTF-8",
    "-deprecation",
    "-unchecked"
  ),
  scalacOptions ++= {
    if (isScala3.value) {
      Seq()
    } else {
      Seq(
        "-explaintypes"
      )
    }
  },
  ThisBuild / publishTo := {
    val centralSnapshots = "https://central.sonatype.com/repository/maven-snapshots/"
    if (isSnapshot.value) Some("central-snapshots" at centralSnapshots)
    else localStaging.value
  },
  Compile / parallelExecution := true
)

val scalazVersion = "7.3.8"
val poiVersion = "5.3.0"

lazy val standardSettings = Def.settings(
  buildSettings,
  licenses := List("Apache-2.0" -> url("http://www.apache.org/licenses/LICENSE-2.0")),
  name := "poi-scala",
  Test / fork := true,
  libraryDependencies ++= {
    Seq(
      "org.apache.poi" % "poi" % poiVersion,
      "org.apache.poi" % "poi-ooxml" % poiVersion,
      "org.scalaz" %% "scalaz-effect" % scalazVersion,
      "org.scalaz" %% "scalaz-scalacheck-binding" % scalazVersion % "test",
      "org.specs2" %% "specs2-scalacheck" % "4.20.9" % "test"
    )
  },
  Test / publishArtifact := false,
  pomExtra := (
    <url>https://github.com/folone/poi.scala</url>
    <developers>
    {
      Seq(
        ("folone", "George Leontiev"),
        ("fedgehog", "Maxim Fedorov"),
        ("Michael Rans", "Michael Rans"),
        ("daneko", "Kouichi Akatsuka"),
        ("rintcius", "Rintcius Blok"),
        ("xuwei-k", "Kenji Yoshida")
      ).map { case (id, name) =>
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

lazy val poi = Project(
  id = "poi",
  base = file(".")
).settings(
  standardSettings
)
