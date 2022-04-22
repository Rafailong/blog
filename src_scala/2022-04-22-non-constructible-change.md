---
slug: non-constructible-change
title: non-constructible change
authors: [ravila]
tags: [scala, algo]
---

## description


Given an array of positive integers representing the values of coins in your
possession, write a function that returns the minimum amount of change (the
minimum sum of money) that you **cannot**  create.

The given coins can have any positive integer value and
aren't necessarily unique (i.e., you can havemultiple coins of the same value).

For example, if you're given `coins = [1, 2, 5]`, the minimum amount of change that you can't create is `4`.
If you're given no coins, the minimum amount of change that you can't create is `1`.

**sample input**: `coins  = [5, 7, 1, 1, 2, 3, 22]`
**sample output**: `20`

<!--truncate-->

## solution

first of all, let's define our test data:

```scala mdoc:silent

val testData = List(
    1 -> List(),
    1 -> List(2),
    2 -> List(1),
    1 -> List(87),
    3 -> List(1, 1),
    4 -> List(1, 2, 5),
    6 -> List(1, 1, 1, 1, 1),
    3 -> List(6, 4, 5, 1, 1, 8, 9),
    29 -> List(1, 2, 3, 4, 5, 6, 7),
    20 -> List(1, 1, 2, 3, 5, 7, 22),
    32 -> List(5, 6, 1, 1, 2, 3, 4, 9),
    55 -> List(1, 5, 1, 1, 1, 10, 15, 20, 100)
)
```

our first approach is a brute-froce approach: iterating over collections and mutating state:

```scala mdoc:silent
import scala.annotation.tailrec
import scala.util.control.Breaks.*

def nonConstructibleChange1(coins: List[Int]): Int = {

  /**
   * as you can see, `helper` functions is a tail-rec function that
   * will check all natural numbers, one by one, and incremeting by 1,
   * until it does not find it in the sum of a give permutation of
   * our coins.
   */
  @tailrec
  def helper(n: Int, coins: List[Int]): Int = {
    if coins.contains(n) then helper(n + 1, coins)
    else
      // doing `coins.permutations` is super brute-force
      // the longer the list, the most permutations to check
      LazyList.from(coins.permutations).find { list =>
        // using mutable state in order to track sum number
        // up to a given condition.
        var acc = 0
        breakable {
          for { i <- list } {
            acc = acc + i
            if acc >= n then break
          }
        }
        acc == n
      } match
        case Some(_) => helper(n + 1, coins)
        case None    => n
  }

  coins match {
    // checking if we have inputs at all, if not, 1 is the min non-constructible change
    case Nil                     => 1
    // if input is not empty but the smallest coin is > than 1 then, again,
    // 1 is the min non-constructible change
    case h :: _ if coins.min > 1 => 1
    // if our input is not empty is has a 1 in it, we do the brute-force approach
    case _                       => helper(2, coins.sorted)
  }
}
```

let's give it try with out test data:

```scala mdoc
testData.map { case (expected, coins) =>
  expected == nonConstructibleChange1(coins)
}.forall(b => b) match
  case true => "yay! it's working!"
  case _    => "doh! let's debug :("
```

noice! it is working OK. now, let's try to improve a bit removing mutation and `breakable` usage. how to do that? I thing that we need to `fold` while holding our condition.
so, for this `fold` while thing, I have no idea if there is something alike in standard
library so, let's implement our own.

```scala mdoc
import $dep.`org.typelevel::cats-core:2.7.0`

import cats.kernel.Monoid
import cats.implicits.*

def foldWhile[A](as: List[A], p: A => Boolean)(implicit A: Monoid[A]): A = {

  def fold(acc: A, as: List[A]): A = {
    as match
      case Nil => acc
      case h :: t =>
        val aa = A.combine(acc, h)
        if p(aa) then fold(aa, t) else acc
  }

  fold(A.empty, as)
}

foldWhile(List(5, 7, 1, 1, 2, 3, 22), _ <= 20) === 19
```

and now let's leverage our `foldWhile` :)

```scala mdoc
def nonConstructibleChange2(coins: List[Int]): Int = {

  @tailrec
  def helper(n: Int, coins: List[Int]): Int = {

    if coins.contains(n) then helper(n + 1, coins)
    else
      LazyList
        .from(coins.permutations)
        .find(l => foldWhile[Int](l, _ <= n) === n) match {
          case Some(_) => helper(n + 1, coins)
          case None    => n
        }
  }

  coins match {
    case Nil                     => 1
    case h :: _ if coins.min > 1 => 1
    case _                       => helper(2, coins.sorted)
  }
}

testData.map { case (expected, coins) =>
  expected == nonConstructibleChange2(coins)
}.forall(b => b) match
  case true => "yay! it's working!"
  case _    => "doh! let's debug :("
```

note that this solution is not optimal at all.
there is a algorithmic solution that we will visit next time.