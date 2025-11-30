val Scala212 = "2.12.20"

val isScala3 = Def.setting(
  CrossVersion.partialVersion(scalaVersion.value).exists(_._1 == 3)
)

lazy val buildSettings = Def.settings(
  organization := "info.folone",
  scalaVersion := Scala212,
  crossScalaVersions := Seq(Scala212, "2.13.18", "3.3.7"),
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
  Compile / parallelExecution := true
)

val scalazVersion = "7.3.8"
val poiVersion = "5.5.1"
val jmhVersion = "1.37"

lazy val standardSettings = Def.settings(
  buildSettings,
  licenses := List("Apache-2.0" -> url("http://www.apache.org/licenses/LICENSE-2.0")),
  Test / fork := true,
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

lazy val root = Project(
  id = "root",
  base = file(".")
).settings(
  standardSettings,
  name := "poi-scala-aggregate",
  publishArtifact := false
).aggregate(core, scalaz, cats, async, benchmarks, fatjar)

lazy val fatjar = Project(
  id = "fatjar",
  base = file("poi-scala-fatjar")
).enablePlugins(AssemblyPlugin)
  .settings(
    standardSettings,
    name := "poi-scala",
    assembly / assemblyJarName := s"${name.value}_${scalaBinaryVersion.value}-${version.value}.jar",
    assembly / assemblyMergeStrategy := {
      case PathList("META-INF", _ @_*) => MergeStrategy.discard
      case "reference.conf" => MergeStrategy.concat
      case _ => MergeStrategy.first
    },
    addArtifact(assembly / artifact, assembly)
  )
  .dependsOn(core, scalaz, async)

lazy val core = Project(
  id = "core",
  base = file("poi-scala-core")
).settings(
  standardSettings,
  name := "poi-scala-core",
  libraryDependencies ++=
    Seq(
      "org.apache.poi" % "poi" % poiVersion,
      "org.apache.poi" % "poi-ooxml" % poiVersion,
      "org.specs2" %% "specs2-scalacheck" % "4.23.0" % "test",
      "org.scalacheck" %% "scalacheck" % "1.19.0" % "test"
    )
)

lazy val scalaz = Project(
  id = "scalaz",
  base = file("poi-scala-scalaz")
).settings(
  standardSettings,
  name := "poi-scala-scalaz",
  libraryDependencies ++= Seq(
    "org.scalaz" %% "scalaz-effect" % scalazVersion,
    "org.scalaz" %% "scalaz-scalacheck-binding" % scalazVersion % "test",
    "org.specs2" %% "specs2-scalacheck" % "4.23.0" % "test",
    "org.scalacheck" %% "scalacheck" % "1.19.0" % "test"
  )
).dependsOn(core % "test->test;compile->compile")

lazy val cats = Project(
  id = "cats",
  base = file("poi-scala-cats")
).settings(
  standardSettings,
  name := "poi-scala-cats",
  libraryDependencies ++= Seq(
    "org.typelevel" %% "cats-core" % "2.13.0",
    "org.typelevel" %% "cats-effect" % "3.6.3",
    "org.typelevel" %% "cats-laws" % "2.13.0" % "test",
    "org.typelevel" %% "discipline-specs2" % "1.5.0" % "test",
    "org.specs2" %% "specs2-scalacheck" % "4.23.0" % "test",
    "org.scalacheck" %% "scalacheck" % "1.19.0" % "test"
  )
).dependsOn(core % "test->test;compile->compile")

lazy val async = Project(
  id = "async",
  base = file("poi-scala-async")
).settings(
  standardSettings,
  name := "poi-scala-async",
  libraryDependencies ++= Seq(
    "org.specs2" %% "specs2-scalacheck" % "4.23.0" % "test",
    "org.scalacheck" %% "scalacheck" % "1.19.0" % "test"
  )
).dependsOn(core)

lazy val benchmarks = Project(
  id = "benchmarks",
  base = file("benchmarks")
).enablePlugins(JmhPlugin)
  .settings(
    standardSettings,
    name := "poi-scala-benchmarks",
    publishArtifact := false,
    libraryDependencies ++= Seq(
      "org.openjdk.jmh" % "jmh-core" % jmhVersion,
      "org.openjdk.jmh" % "jmh-generator-annprocess" % jmhVersion
    ),
    Jmh / dependencyClasspath := (Compile / dependencyClasspath).value ++ (Test / dependencyClasspath).value ++ (scalaz / Compile / dependencyClasspath).value ++ (cats / Compile / dependencyClasspath).value ++ (async / Compile / dependencyClasspath).value
  )
  .dependsOn(core, scalaz, cats, async)
