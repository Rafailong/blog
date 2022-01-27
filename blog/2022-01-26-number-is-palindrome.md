---
slug: number-is-palindrome
title: is the number a palindrome?
authors: [ravila]
tags: [scala, algo]
---

## description

Given an integer `x`, return `true` if `x` is palindrome integer.
An integer is a palindrome when it reads the same backward as forward.
For example, `121` is a palindrome while `123` is not.

### constraints

- `x >= 0`
- usage of strings is prohibited

## solution


first idea is to decompose the given number in 3 parts:

```
x = 123321
first  = 1
last   = 1
others = 2332
```

with the number decoposition it would be possible to decompose the number till either:

1. `first != last`
2. or, it is not possible to decompose the number i.e. number of one digit `1`

so, let's try to implement a function to decompose a nuber:

```scala
def isOneDigit(n: Int): Boolean = n >= 0 && n < 10

def deconstruct(number: Int): (Int, Option[Int], Int) = {

  if (isOneDigit(number)) (number, None, number)
  else {

    val n = {
      val a = Math.log10(number).intValue()
      Math.pow(10, a).intValue()
    }

    val firstDigit = number / n
    val lastDigit = number % 10
    val left = {
      if (isOneDigit(number / 10)) None
      else Some((number % n) / 10)
    }

    (firstDigit, left, lastDigit)
  }
}
```

as you case `deconstruct` returns a three-tuple with an `Option` in the middle.
let's see how `deconstruct` behaves:

```scala
deconstruct(123)
// res0: (Int, Option[Int], Int) = (1, Some(value = 2), 3)
deconstruct(1)
// res1: (Int, Option[Int], Int) = (1, None, 1)
deconstruct(11)
// res2: (Int, Option[Int], Int) = (1, None, 1)
```

okay... it seems there are couple special cases here:

1. when we pass a 1-digit number: `first` and `last` will be _that_ and `others` will be a `None` 
2. and, when we pass a 2-digits number: `other` will be `None` too

so, it seems we kind of have a base case for a recursive function that will find out
if a number is a palindrome or not:

```scala
def isPalindrome(number: Int): Boolean = {
  @tailrec
  def recur(number: Int, acc: Boolean): Boolean = {
    val (h, ns, t) = deconstruct(number)
    val bool       = h == t && acc
    if (bool) {
      ns match {
        case Some(value) => recur(value, bool)
        case None        => bool
      }
    } else false
  }

  recur(number, true)
}

isPalindrome(1203021)
// res3: Boolean = false
isPalindrome(123421)
// res4: Boolean = false
isPalindrome(123321)
// res5: Boolean = true
isPalindrome(10001)
// res6: Boolean = true
isPalindrome(1000)
// res7: Boolean = false
isPalindrome(8)
// res8: Boolean = true
isPalindrome(0)
// res9: Boolean = true
```

welp... obviously something is not working as expects 😓
our `deconstruct` functions seem to be the suspected here.
so let's _debug_ it:

```scala
deconstruct(1203021) == (1, Some(20302), 1)
// res10: Boolean = true
deconstruct(20302)
// res11: (Int, Option[Int], Int) = (2, Some(value = 30), 2)
```

🤡 `deconstruct` has no respect for the leading zeros which is OK because `30 = 030` and we are working with `Int`s

time to try different approach. what bout an accumulative approach?

```scala
case class Acc private (org: List[Int], reversed: List[Int]) { self =>
  def add(digit: Int): Acc = Acc(
    org      = self.org :+ digit,
    reversed = digit +: self.reversed
  )
}
object Acc {
  def empty: Acc = Acc(List.empty, List.empty)
}
```

`Acc` is our accumulative structure. it does maintian 2 lists 
and every time we want to `add` a number to it:

1. it will append the digit to one list `org`
2. and, it will preppend the same digit to the other list `reversed`

time to implement our function to check if a number is palindrome or not
using `Acc`:

```scala
def lastDigit(n: Int): Int = n % 10

def isPalindromeAcc(x: Int): Boolean =
  if (isOneDigit(x)) true
  else {

    @tailrec
    def go(acc: Acc, n: Int): Acc =
      if (n > 0) go(((acc.add _) compose (lastDigit _))(n), n / 10)
      else acc

    val Acc(org, reversed) = go(Acc.empty, x)
    org sameElements reversed
  }
```

the function `isPalindromAcc`:

- check if `x` is a number of one digit (short-circuit)
- "deconstruct" `x` from right to left and `add`-em to an `Acc`
- and last step, it compares the list from `Acc` using `sameElements`
  which checks that both list contains the same elements at the same order

let's give it a try:

```scala
isPalindromeAcc(1203021)
// res12: Boolean = true
isPalindromeAcc(123421)
// res13: Boolean = false
isPalindromeAcc(10001)
// res14: Boolean = true
isPalindromeAcc(1000)
// res15: Boolean = false
isPalindromeAcc(8)
// res16: Boolean = true
isPalindromeAcc(0)
// res17: Boolean = true
```

this looks much better! 🥳 things to note:

- `isPalindrom` works perfectly for numbers without zeros in the middle and it is more efficient that `isPalindromAcc` in both time and space
- `isPalindromAcc` work great with any `x >= 0` but it is memory heavy
