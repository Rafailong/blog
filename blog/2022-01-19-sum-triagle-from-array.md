---
slug: sum-triangle-from-array
title: sum triangle from array
authors: [ravila]
tags: [scala, algo]
---

another week, another code challenge

## description

given an array of integers, print a sum triangle from it such that
the first level has all array elements.
from then, at each level number of elements is one less than the previous level 
and elements at the level is be the **sum** of consecutive two elements in the previous level. 

<!--truncate-->

### example

```scala
def sumTriangle(number: List[Int]): List[List[Int]] = ???

val input = List(1, 2, 3, 4, 5)

show(
  sumTriangle(input)
)
// stdout output
// List(
//   List(48),
//   List(20, 28), 
//   List(8, 12, 16), 
//   List(3, 5, 7, 9), 
//   List(1, 2, 3, 4, 5)
// )
```

## solution


first, we need to find a way to sum the elements of a list in pairs, 
something that does like:

```haskell
[1, 2, 3, 4, 5] -> [1 + 2, 2 + 3, 3 + 4, 4 + 5] = [3, 5, 7, 9]
```

🤔 intresting enough, this looks like we need to `zip` one element with its successor.

```scala
def sum(ns: List[Int]): List[Int] =
  ns.zip(ns.tail).map { case (a, b) => a + b }

sum(List(1, 2, 3, 4, 5))
// res0: List[Int] = List(3, 5, 7, 9)
```

nice! this seems to work correctly. now that we can produce a level of
our trigle from a base level next step is to produce the whole triangle
from our input level (base level).

but first, let's get a bit piky and define a type alias for our triangle

```scala
type Triangle = List[List[Int]]

object Triangle {
  def apply(ns: List[Int]): Triangle = ns :: Nil
}
```

now we can implement our *main* function:

```scala
def sumTriangle(numbers: List[Int]): Triangle = {

  @tailrec
  def go(ns: List[Int], triangle: Triangle): Triangle =
    ns match {
      case _ :: _ =>
        val level = sum(ns)
        go(level, level :: triangle)
      case Nil => triangle
    }

  go(numbers, Triangle(numbers))
}
```

as you may notice, this implementation is tail recursive (proved by the compiler)
and it builds a triangle from bottom to top.
let's give it a try!

```scala
val triangle = sumTriangle(
  List(1, 2, 3, 4, 5)
)
// triangle: Triangle = List(
//   List(),
//   List(48),
//   List(20, 28),
//   List(8, 12, 16),
//   List(3, 5, 7, 9),
//   List(1, 2, 3, 4, 5)
// )
```

as an extra let's try to pretty print our triangle

```scala
def show(triangle: Triangle): String =
  triangle.foldRight("") { case (ns, str) =>
    s"${ns.mkString(",")}" ++ System.lineSeparator() ++ str
  }

show(triangle)
// res1: String = """
// 48
// 20,28
// 8,12,16
// 3,5,7,9
// 1,2,3,4,5
// """
```

> PS. worth to mention that this blog post is a markdown file processed with the awesome [mdoc](https://scalameta.org/mdoc/) 🤓