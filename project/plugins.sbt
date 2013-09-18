// Add the following to z_local.sbt (which is .gitignored), to perform a release.
//
// addSbtPlugin("com.typesafe.sbt" % "sbt-pgp" % "0.7")

addSbtPlugin("com.github.gseitz" % "sbt-release" % "0.7.1")

addSbtPlugin("org.ensime" % "ensime-sbt-cmd" % "0.1.2")

addSbtPlugin("org.scalastyle" %% "scalastyle-sbt-plugin" % "0.3.2")
