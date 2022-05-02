---
slug: balanced-brackets
title: balanced brackets
authors: [ravila]
tags: [scala, interview]
---

## description

this _problem_ is a classic.
i got this one from an interview.

you’re given the string as input consisting solely of `(`, `)`,
and any alpha lower case chars `a-z`.
determine whether the parentheses are balanced.

<!--truncate-->

## solution

there are multiple solution to this challenge, but we will try to use scala feats.

first, we define out test data:

```scala mdoc:silent
// test data
val testData = List(
  "()",
  "(()",
  "(())",
  ")(",
  ")()",
  "(((this(is)(my(test)(string(and)I)want)to)know((if)it)is)balanced)"
)
```

this solution levarege:

- scala's `tailrec` optimization
- scala's `immutable.List` as a stack (last-in first-out)
- and, some kind of short-circuiting i.e. `str = ")("`

```scala mdoc
import scala.annotation.tailrec

def isBalanced(str: String): Boolean = {
  @tailrec
  def validate(cs: List[Char], queue: List[Char]): Boolean = {
    cs match {
      case Nil         => queue.isEmpty
      case '(' :: next => validate(next, '(' +: queue)
      case ')' :: next =>
        if (queue.headOption.contains('(') && queue.nonEmpty) validate(next, queue.tail)
        else false
      case _ :: next => validate(next, queue)
    }
  }

  validate(str.toList, List.empty)
}

testData.map { str =>
  s"""is "$str" balanced? = ${isBalanced(str)}"""
}
```

this looks nice and dandy but, let's handle more types of brackets:

```scala mdoc:silent
val testData2 = List(
  "(a)[b]{c}",
  "([{}])",
  "([{]})",
  "( ([{}]) {} [] )"
)
```

we should be able to just improve our previous solution
and preserve the 3 scala' feats listed above

```scala mdoc:silent
val open  = Set('(','[','{')
val close = Set(')',']','}')

def isBalanced2(str: String): Boolean = {
  @tailrec
  def validate(cs: List[Char], queue: List[Char]): Boolean = {
    cs match {
      case Nil => queue.isEmpty
      case h :: next if open.contains(h) => validate(next, h +: queue)
      case h :: next if close.contains(h) =>

        if queue.isEmpty then false
        else
          queue.headOption match {
            case Some(o) =>
              (o, h) match {
                case ('(', ')') => validate(next, queue.tail)
                case ('[', ']') => validate(next, queue.tail)
                case ('{', '}') => validate(next, queue.tail)
                case (_, _) => false
              }
            case None => false
          }

      case _ :: next => validate(next, queue)
    }
  }

  validate(str.toList, List.empty)
}
```

okie dokie, `isBalanced2` preserves the 3 feats listed above.
let's give it a shot:

```scala mdoc
testData2.map { str =>
  s"""is "$str" balanced? = ${isBalanced2(str)}"""
}
```

