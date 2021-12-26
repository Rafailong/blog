#! /bin/bash

pandoc src_haskell/$1.lhs -f markdown+lhs -t markdown -o blog/$1.md