#! /bin/bash
cs launch org.scalameta:mdoc_2.13:2.2.24 -- \
  --site.VERSION 1.0.0 \
  --in src_scala/$1 \
  --out blog/$1 \
  --classpath $(coursier fetch -p org.scalacheck:scalacheck_2.13:1.15.4)
