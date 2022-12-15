#!/bin/bash

set -eo pipefail

sbtver="1.7.1"
sbtjar="sbt-launch-$sbtver.jar"
sbtsha128="468efdd45baf58dbb575f9b4369c5234f8cd54ba"

sbtrepo="https://repo1.maven.org/maven2/org/scala-sbt/sbt-launch"

if [ ! -f "sbt-launch.jar" ]; then
  echo "downloading $PWD/$sbtjar" 1>&2
  if ! curl --location --silent --fail -o "sbt-launch.jar" "$sbtrepo/$sbtver/$sbtjar"; then
    exit 1
  fi
fi

checksum=`openssl dgst -sha1 sbt-launch.jar | awk '{ print $2 }'`
if [ "$checksum" != $sbtsha128 ]; then
  echo "bad $PWD/sbt-launch.jar.  delete $PWD/sbt-launch.jar and run $0 again."
  exit 1
fi

[ -f ~/.sbtconfig ] && . ~/.sbtconfig

java -ea                          \
  $SBT_OPTS                       \
  $JAVA_OPTS                      \
  -jar "sbt-launch.jar" "$@"