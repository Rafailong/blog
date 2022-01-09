"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[477],{10:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"add-two-numbers","metadata":{"permalink":"/blog/add-two-numbers","editUrl":"https://github.com/Rafailong/blog/tree/main/docs/blog/2022-01-10-add-two-numbers.md","source":"@site/blog/2022-01-10-add-two-numbers.md","title":"add two number","description":"time to solve another coding challenge.","date":"2022-01-10T00:00:00.000Z","formattedDate":"January 10, 2022","tags":[{"label":"scala","permalink":"/blog/tags/scala"},{"label":"algo","permalink":"/blog/tags/algo"}],"readingTime":5.725,"truncated":false,"authors":[{"name":"Rafael Avila","url":"https://github.com/Rafailong","imageURL":"https://github.com/Rafailong.png","key":"ravila"}],"nextItem":{"title":"sorted squared array","permalink":"/blog/sorted-squared-array"}},"content":"time to solve another coding challenge.\\n\\n## description\\n\\nYou are given two non-empty linked lists representing two non-negative integers.\\nThe digits are stored in reverse order, and each of their nodes contains a single digit.\\nAdd the two numbers and return the sum as a linked list.\\n\\nYou may assume the two numbers do not contain any leading zero,\\nexcept the number 0 itself.\\n\\n### example\\n\\n```haskell\\nl1 = [2, 4, 3] -- 342\\nl2 = [5, 6, 4] -- 465\\n\\naddTwoNumbers l1 l2 == [7, 0, 8] -- 807 == 342 + 465\\n```\\n\\n### constraints\\n\\n1. the number of nodes in each linked list is in the range `[1, 100]`\\n2. `0 <= ListNode.x <= 9`\\n3. it is guaranteed that the list represents a number that does not have leading zeros\\n\\n### linked list representations\\n\\n```scala\\n// yes. this is no idiomatic scala. but for now, bear with me please!\\n\\ncase class ListNode(_x: Int = 0, _next: ListNode = null) {\\n  var next: ListNode = _next\\n  var x: Int = _x\\n}\\n```\\n\\n## solution\\n\\n\\nfirst, we need to define a function signature:\\n\\n```scala\\ndef addTwoNumbers(l1: ListNode, l2: ListNode): ListNode = ???\\n```\\n\\nthen, let\'s create input for our function.\\n\\n```scala\\nval n1 = new ListNode(2, new ListNode(4, new ListNode(3)))\\nval n2 = new ListNode(5, new ListNode(6, new ListNode(4)))\\n```\\n\\nwhat comes to my mind is a recursive solution so we do as follow\\n\\n```scala\\n(2 + 5) == 7\\n(4 + 6) == 0 // 10 - we need to presereve the most-left digit (0) only and carry the other one (1) to the next operation\\n(3 + 4) == 7 + 1 == 8\\n```\\n\\nfirst thing first. we need a way to work with a number `x` given that `x = number_of_list_1 + number_of_list_2` \\nand `x >= 10`\\n\\n```scala\\n// terrible name :(\\ndef helper(n: Int): (Int, Int) =\\n  if (n >= 10) (1, n % 10)\\n  else (0, n)\\n```\\n\\ntime to code our recursive helper functions\\n\\n```scala\\n/**\\n* @param as list 1\\n* @param bs list 2\\n* @param acc our seed/accumulator list\\n* @param r the digit to carry for the next operation\\n*          if the sum of two numbers is 10 then r = 1\\n*          for the next iteration \\n*/\\n@tailrec\\nfinal def loop(as: ListNode, bs: ListNode, acc: ListNode, r: Int): ListNode = {\\n  (as, bs) match {\\n    // base case, when both lists are \\"empty\\"\\n    // BUT we have an r to include as last digit (not leading zero)\\n    case (null, null) if r > 0 => new ListNode(r, acc)\\n\\n    // base case, when both lists are \\"empty\\" but without r\\n    case (null, null)          => acc\\n\\n    // following two cases are similar and handle\\n    // the scenario where one of the 2 lists have elements\\n    // but the other list is empty\\n    case (_, null) =>\\n      val (nr, a) = helper(as.x + r)\\n      loop(\\n        as.next,\\n        bs = null,\\n        acc = new ListNode(a, acc),\\n        nr\\n      )\\n    case (null, _) =>\\n      val (nr, b) = helper(bs.x + r)\\n      loop(\\n        as = null,\\n        bs.next,\\n        acc = new ListNode(b, acc),\\n        nr\\n      )\\n\\n    // when both lists have elements\\n    case (_, _) =>\\n      val a = as.x\\n      val b = bs.x\\n      val (nr, c) = helper(a + b + r)\\n      loop(\\n        as.next,\\n        bs.next,\\n        acc = new ListNode(c, acc),\\n        nr\\n      )\\n  }\\n}\\n```\\n\\nit\'s time to implement our \\"main\\" function\\n\\n```scala\\ndef addTwoNumbers(l1: ListNode, l2: ListNode): ListNode = {\\n  // this is safe given the constraints above\\n  val a = l1.x\\n  val b = l2.x\\n  val (r, c) = helper(a + b)\\n  loop(\\n    l1.next,\\n    l2.next,\\n    acc = new ListNode(c),\\n    r\\n  )\\n}\\n```\\n\\ntime to give it a try to our solution:\\n\\n```scala\\nval listNode = addTwoNumbers(n1, n2)\\n// listNode: ListNode = ListNode(\\n//   _x = 8,\\n//   _next = ListNode(_x = 0, _next = ListNode(_x = 7, _next = null))\\n// )\\n```\\n\\nhmm? maybe we can define a utility function to pretty print our list\\n\\n```scala\\n@tailrec\\nprivate def toList(ln: ListNode, acc: List[Int]): List[Int] =\\n  if (ln == null) acc\\n  else toList(ln.next, acc :+ ln.x)\\n\\ndef show(listNode: ListNode): String =\\n  toList(listNode, List.empty).mkString(\\" -> \\")\\n\\nshow(listNode)\\n// res0: String = \\"8 -> 0 -> 7\\"\\n```\\n\\nonce again *hmm?* our resulting list is not in good order, rigth?\\nwhy don\'t we reverse it?\\n\\n```scala\\ndef reverse(listNode: ListNode): ListNode = {\\n\\n  @tailrec\\n  def loop(ln: ListNode, acc: ListNode): ListNode =\\n    if (ln == null) acc\\n    else loop(ln.next, new ListNode(ln.x, acc))\\n\\n  loop(listNode.next, new ListNode(listNode.x))\\n}\\n\\nshow(\\n  reverse(listNode)\\n)\\n// res1: String = \\"7 -> 0 -> 8\\"\\n```\\n\\nnow that look better!\\n\\n```scala\\ndef addTwoNumbersImproved(l1: ListNode, l2: ListNode): ListNode = {\\n  // this is safe given the constraints above\\n  val a = l1.x\\n  val b = l2.x\\n  val (r, c) = helper(a + b)\\n  reverse(\\n    loop(\\n      l1.next,\\n      l2.next,\\n      acc = new ListNode(c),\\n      r\\n    )\\n  )\\n}\\n```\\n\\nbut... that was a pretty simplistic way to test our solution, don\'t you think?\\n\\nwe can do better with a great library:\\n[scalacheck](https://scalacheck.org/index.html)\\n\\nlet\'s start importing what we need from scalacheck\\n\\n```scala\\nimport org.scalacheck._\\nimport org.scalacheck.Prop._\\n```\\n\\nscalacheck work require us to define `Prop`s. our `Prop` will look\\nsomething like:\\n\\n```scala\\nval myProp = forAll { (input: (ListNode, ListNode, Int)) => ??? }\\n```\\n\\nnow it is time to define `Gen`s and `Arbitrary` required for our `Prop`\\nfirst, a `Gen[ListNode]`\\n\\n```scala\\n//generates pair like:\\n// (\\n//   10,\\n//   ListNode(0, ListNode(1))\\n// )\\nval listNodeGen: Gen[(Int, ListNode)] = for {\\n  size <- Gen.chooseNum(1, 8) // our lists will have up to 8 nodes\\n  head <- Gen.chooseNum(1, 9) // we do this hold constraint no. 3\\n  tail <- Gen.listOfN(size - 1, Gen.chooseNum(0, 9)) // trailing digits can be 0-9\\n  _list = head :: tail\\n  n = _list.mkString.toInt\\n  listNode = tail.reverse.foldRight(new ListNode(head)) { (i, ln) =>\\n    new ListNode(i, ln)\\n  }\\n} yield (n, listNode)\\n```\\n\\nnow we need to define an `Arbitrary` for out `(ListNode, ListNode, Int)` type\\n\\n```scala\\ntype Input = (ListNode, ListNode, Int)\\n\\n// generates tuples like:\\n// (\\n//   ListNode(1),\\n//   ListNode(0, ListNode(1)),\\n//   11\\n// )\\nval inputGen: Gen[Input] =\\n  for {\\n    (n1, l1) <- listNodeGen\\n    (n2, l2) <- listNodeGen\\n  } yield (l1, l2, n1 + n2)\\n\\nimplicit val arb: Arbitrary[Input] = Arbitrary(inputGen)\\n```\\n\\nwe have all we need to define our `Prop`\\n\\n```scala\\nval prop = forAll { (input: Input) =>\\n\\n  // unapplying our input to avoid `._1` syntax\\n  val (l1, l2, n) = input\\n\\n  // applying our solution\\n  val result = addTwoNumbersImproved(l1, l2)\\n\\n  // we need to do this in order to prove our solution\\n  val nn = {\\n    val reversed = reverse(result)\\n    // ListNode to immutable.List to Int\\n    toList(reversed, List.empty).mkString.toInt\\n  }\\n\\n  n == nn\\n}\\n// prop: Prop = Prop\\n\\nprop.check()\\n// + OK, passed 100 tests.\\n```\\n\\nnow with \\"random\\" inputs to our solution and 100 test\\nwe can be somehow sure that it works! yay!"},{"id":"sorted-squared-array","metadata":{"permalink":"/blog/sorted-squared-array","editUrl":"https://github.com/Rafailong/blog/tree/main/docs/blog/2022-01-03-sorted-squared-array/index.mdx","source":"@site/blog/2022-01-03-sorted-squared-array/index.mdx","title":"sorted squared array","description":"this time we will try to (satisfactory) solve a coding challenge.","date":"2022-01-03T00:00:00.000Z","formattedDate":"January 3, 2022","tags":[{"label":"algo","permalink":"/blog/tags/algo"},{"label":"kotlin","permalink":"/blog/tags/kotlin"}],"readingTime":1.605,"truncated":false,"authors":[{"name":"Rafael Avila","url":"https://github.com/Rafailong","imageURL":"https://github.com/Rafailong.png","key":"ravila"}],"prevItem":{"title":"add two number","permalink":"/blog/add-two-numbers"},"nextItem":{"title":"haskell dollar-sign operator","permalink":"/blog/dollar-sign-operator"}},"content":"import CodeBlock from \'@theme/CodeBlock\';\\nimport Tabs from \'@theme/Tabs\';\\nimport TabItem from \'@theme/TabItem\';\\n\\nimport FirstAttempt from \'!!raw-loader!./solutions/first-attempt.kts\';\\nimport SecondAttempt from \'!!raw-loader!./solutions/second-attempt.kts\';\\nimport BonusAttempt from \'!!raw-loader!./solutions/bonus-attempt.kts\';\\nimport BonusScalaSolution from \'!!raw-loader!./solutions/scala-bonus.worksheet.sc\';\\n\\nthis time we will try to (satisfactory) solve a coding challenge.\\n\\n### description\\n\\nwrite a function that takes in a non-empty array of integers that are sorted\\nin ascending order and returns a new array of the same length with the squares\\nof the original integers also sorted in ascending order.\\n\\n### first attempt\\n\\nfirst attempt (which fails when `array` includes negative numbers)\\ngiven `array = [-2, -1]` as input, output is `[4, 1]` which is wrong\\nbecause correct output should be sorted in ascending order:\\n\\n<CodeBlock className=\\"language-kotlin\\" title=\\"first-attempt.kts\\">{FirstAttempt}</CodeBlock>\\n\\nwhat i like from `first-attempt` (failed) solution is that\\n**we have no state** (we are not mutating anything), we are only\\ntraversing our input array once and generating a new array as our output.\\n\\n### second attempt\\n\\nan _optimal_ solution would be to use a data structure that preserves\\nthe order of its elements i.e binary tree; but, given that we have no b-tree at our disposal we can leverage\\nKotlin native [BinarySearch](https://kotlinlang.org/docs/list-operations.html#binary-search-in-sorted-lists)\\nmethods in `List`. we need to be careful with the return value of \\nsuch a function in order to prevent index bound exceptions:\\n\\n<CodeBlock className=\\"language-kotlin\\" title=\\"second-attempt.kts\\">{SecondAttempt}</CodeBlock>\\n\\nwhat i **dislike** from `second-attempt` solution is that: we have state mutations.\\non the other hand, i like that we are still traversing our input array once \\nmeaning `O(n)` complexity which I think is nice!\\n\\n### bonus\\n\\nas a bonus here is a 3rd optional solution that is not as efficient as the previous one\\nbut this third solution is based on immutable data structures which is always good:\\n\\n<Tabs>\\n  <TabItem value=\\"kotlin\\" label=\\"Kotlin\\" default>\\n    <CodeBlock className=\\"language-kotlin\\" title=\\"bonus-attempt.kts\\">{BonusAttempt}</CodeBlock>\\n  </TabItem>\\n  <TabItem value=\\"scala\\" label=\\"Scala\\">\\n    <CodeBlock className=\\"language-scala\\" title=\\"scala-bonus.worksheet.sc\\">{BonusScalaSolution}</CodeBlock>\\n  </TabItem>\\n</Tabs>\\n\\n> PD. in case you are wondering bout the `kscript` in the codeblocks take a look at:\\n> [holgerbrandl/kscript](https://github.com/holgerbrandl/kscript)"},{"id":"dollar-sign-operator","metadata":{"permalink":"/blog/dollar-sign-operator","editUrl":"https://github.com/Rafailong/blog/tree/main/docs/blog/2021-12-27-dollar-sign-operator.md","source":"@site/blog/2021-12-27-dollar-sign-operator.md","title":"haskell dollar-sign operator","description":"The ($) operator is a convenience for when you want to express","date":"2021-12-27T00:00:00.000Z","formattedDate":"December 27, 2021","tags":[{"label":"haskell","permalink":"/blog/tags/haskell"}],"readingTime":0.74,"truncated":false,"authors":[{"name":"Rafael Avila","url":"https://github.com/Rafailong","imageURL":"https://github.com/Rafailong.png","key":"ravila"}],"prevItem":{"title":"sorted squared array","permalink":"/blog/sorted-squared-array"},"nextItem":{"title":"Welcome","permalink":"/blog/welcome"}},"content":"The `($)` operator is a convenience for when you want to express\\nsomething with less pairs of parenths.\\n\\nType of `($)` is:\\n\\n``` haskell\\n($) :: (a -> b) -> a -> b -- Defined in \u2018GHC.Base\u2019\\ninfixr 0 $\\n```\\n\\nWhich means that:\\n\\n1.  it is a infix operator\\n2.  it associates to the right\\n3.  and, it has the lowest possibile precedence\\n\\nUsage example:\\n\\n```haskell\\n_ =(2^) (2 + 2) -- 16\\n```\\n\\nAbove code we need all the parenths because we want to first evaluate\\n`(2 + 2)`. If we remove the parenths the result is different:\\n\\n```haskell\\n_ = (2^) 2 + 2 -- 6\\n```\\n\\nHere is where `($)` comes handy:\\n\\n```haskell\\n_ = (2^) $ 2 + 2 -- 16\\n```\\n\\nThis happens because of how `($)` associates.\\nSo, first `(2 + 2)` is evaluted and its results is used in `(2^)`."},{"id":"welcome","metadata":{"permalink":"/blog/welcome","editUrl":"https://github.com/Rafailong/blog/tree/main/docs/blog/2021-12-25-welcome.md","source":"@site/blog/2021-12-25-welcome.md","title":"Welcome","description":"Hi there and welcome to my blog!","date":"2021-12-25T00:00:00.000Z","formattedDate":"December 25, 2021","tags":[],"readingTime":0.19,"truncated":false,"authors":[{"name":"Rafael Avila","url":"https://github.com/Rafailong","imageURL":"https://github.com/Rafailong.png","key":"ravila"}],"prevItem":{"title":"haskell dollar-sign operator","permalink":"/blog/dollar-sign-operator"}},"content":"Hi there and welcome to my blog!\\n\\nAt a glance you will find content about things I like,\\nthings I dislike, and things I might be learning/interested on.\\n\\nSo, that is all for now. Have a good one!"}]}')}}]);