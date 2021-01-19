val Scala212 = "2.12.12"

lazy val buildSettings = Def.settings(
  organization := "info.folone",
  scalaVersion := Scala212,
  crossScalaVersions := Seq(Scala212, "2.11.12", "2.13.4"),
  scalacOptions in (Compile, doc) ++= {
    val base = (LocalRootProject / baseDirectory).value.getAbsolutePath
    if (isDotty.value) {
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
    if (isDotty.value) {
      Seq()
    } else {
      Seq(
        "-explaintypes"
      )
    }
  },
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
  Seq("build.publish.user", "build.publish.password").map(k => Option(System.getProperty(k))) match {
    case Seq(Some(user), Some(pass)) =>
      Credentials("Sonatype Nexus Repository Manager", "oss.sonatype.org", user, pass)
    case _ =>
      Credentials(Path.userHome / ".ivy2" / ".credentials")
  }
}

val scalazVersion = "7.3.2"
val poiVersion = "5.0.0"

lazy val standardSettings = Def.settings(
  buildSettings,
  name := "poi-scala",
  fork in Test := true,
  releaseCrossBuild := true,
  releasePublishArtifactsAction := PgpKeys.publishSigned.value,
  libraryDependencies ++= {
    Seq(
      "org.apache.poi" % "poi" % poiVersion,
      "org.apache.poi" % "poi-ooxml" % poiVersion,
      "org.scalaz" %% "scalaz-effect" % scalazVersion withDottyCompat scalaVersion.value,
      "org.specs2" %% "specs2-core" % "4.10.5" % "test" withDottyCompat scalaVersion.value,
      "org.specs2" %% "specs2-scalacheck" % "4.10.5" % "test" withDottyCompat scalaVersion.value,
      "org.scalaz" %% "scalaz-scalacheck-binding" % scalazVersion % "test" withDottyCompat scalaVersion.value
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
        ("folone", "George Leontiev"),
        ("fedgehog", "Maxim Fedorov"),
        ("Michael Rans", "Michael Rans"),
        ("daneko", "Kouichi Akatsuka"),
        ("rintcius", "Rintcius Blok")
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
