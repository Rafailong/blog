# blog

personal web blog based on Docusaurus.

## scala content

leveraging [mdoc](https://scalameta.org/mdoc/) to generate scala content.

- scala content lives in `src_scala` directory
- use [mdoc_build.sh](mdoc_build.sh) to build/generate **a** given blog post `./mdoc_build.sh my_scala_blog.md`
- use [mdoc_watch](mdoc_watch.sh) as a develop tool while wrating a scala blog post `./mdoc_watch.sh my_scala_blog.md`

> `mdoc_build.sh` and `mdoc_watch.sh` leverage `mdoc` through [coursier](https://scalameta.org/mdoc/docs/installation.html#command-line)

### haskell

- haskell content lives in `src_haskell` directory
- every haskell blog post should be a [literate haskell](https://wiki.haskell.org/Literate_programming) file
- use `lhs_build.sh` tp build/generate **a single** blog post (from lhs to md) `./lhs_build.sh my-haskell-post`
 (w/o file extension)
> `lhs_build.sh` leverages [pandoc](https://pandoc.org/) as a cli tool.