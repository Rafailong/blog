---
slug: add-two-numbers
title: add two number
authors: [ravila]
tags: [scala, algo]
---

time to solve another coding challenge.

## description

You are given two non-empty linked lists representing two non-negative integers.
The digits are stored in reverse order, and each of their nodes contains a single digit.
Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero,
except the number 0 itself.

### example

```haskell
l1 = [2, 4, 3] -- 342
l2 = [5, 6, 4] -- 465

addTwoNumbers l1 l2 == [7, 0, 8] -- 807 == 342 + 465
```

### constraints

1. the number of nodes in each linked list is in the range `[1, 100]`
2. `0 <= ListNode.x <= 9`
3. it is guaranteed that the list represents a number that does not have leading zeros

### linked list representations

```scala
// yes. this is no idiomatic scala. but for now, bear with me please!

case class ListNode(_x: Int = 0, _next: ListNode = null) {
  var next: ListNode = _next
  var x: Int = _x
}
```

## solution


first, we need to define a function signature:

```scala
def addTwoNumbers(l1: ListNode, l2: ListNode): ListNode = ???
```

then, let's create input for our function.

```scala
val n1 = new ListNode(2, new ListNode(4, new ListNode(3)))
val n2 = new ListNode(5, new ListNode(6, new ListNode(4)))
```

what comes to my mind is a recursive solution so we do as follow

```scala
(2 + 5) == 7
(4 + 6) == 0 // 10 - we need to presereve the most-left digit (0) only and carry the other one (1) to the next operation
(3 + 4) == 7 + 1 == 8
```

first thing first. we need a way to work with a number `x` given that `x = number_of_list_1 + number_of_list_2` 
and `x >= 10`

```scala
// terrible name :(
def helper(n: Int): (Int, Int) = {
  if (n >= 10) {
    val r = n % 10
    (1, r)
  } else (0, n)
}
```

time to code our recursive helper functions

```scala
/**
* @param as list 1
* @param bs list 2
* @param acc our seed/accumulator list
* @param r the digit to carry for the next operation
*          if the sum of two numbers is 10 then r = 1
*          for the next iteration 
*/
@tailrec
final def loop(as: ListNode, bs: ListNode, acc: ListNode, r: Int): ListNode = {
  (as, bs) match {
    // base case, when both lists are "empty"
    // BUT we have an r to include as last digit (not leading zero)
    case (null, null) if r > 0 => new ListNode(r, acc)

    // base case, when both lists are "empty" but without r
    case (null, null)          => acc

    // following two cases are similar and handle
    // the scenario where one of the 2 lists have elements
    // but the other list is empty
    case (_, null) =>
      val (nr, a) = helper(as.x + r)
      loop(
        as.next,
        bs = null,
        acc = new ListNode(a, acc),
        nr
      )
    case (null, _) =>
      val (nr, b) = helper(bs.x + r)
      loop(
        as = null,
        bs.next,
        acc = new ListNode(b, acc),
        nr
      )

    // when both lists have elements
    case (_, _) =>
      val a = as.x
      val b = bs.x
      val (nr, c) = helper(a + b + r)
      loop(
        as.next,
        bs.next,
        acc = new ListNode(c, acc),
        nr
      )
  }
}
```

it's time to asseble out "main" function

```scala
def addTwoNumbers(l1: ListNode, l2: ListNode): ListNode = {
  // this is safe given the constraints above
  val a = l1.x
  val b = l2.x
  val (r, c) = helper(a + b)
  loop(
    l1.next,
    l2.next,
    acc = new ListNode(c),
    r
  )
}
```

time to give it a try to our solution:

```scala
val listNode = addTwoNumbers(n1, n2)
// listNode: ListNode = ListNode(
//   _x = 8,
//   _next = ListNode(_x = 0, _next = ListNode(_x = 7, _next = null))
// )
```

hmm? maybe we can define a utility function to pretty print our list

```scala
@tailrec
private def toList(ln: ListNode, acc: List[Int]): List[Int] =
  if (ln == null) acc
  else toList(ln.next, acc :+ ln.x)

def show(listNode: ListNode): String =
  toList(listNode, List.empty).mkString(" -> ")

show(listNode)
// res0: String = "8 -> 0 -> 7"
```

once again **hmm?** our resulting list is not in good order, rigth?
why don't we reverse it?

```scala
def reverse(listNode: ListNode): ListNode = {

  @tailrec
  def loop(ln: ListNode, acc: ListNode): ListNode =
    if (ln == null) acc
    else loop(ln.next, new ListNode(ln.x, acc))

  loop(listNode.next, new ListNode(listNode.x))
}

show(
  reverse(listNode)
)
// res1: String = "7 -> 0 -> 8"
```

now that look better!
