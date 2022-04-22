"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[649],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(t),m=r,N=u["".concat(s,".").concat(m)]||u[m]||c[m]||l;return t?a.createElement(N,o(o({ref:n},p),{},{components:t})):a.createElement(N,o({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=u;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2794:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return c}});var a=t(3117),r=t(102),l=(t(7294),t(3905)),o=["components"],i={slug:"add-two-numbers",title:"add two number",authors:["ravila"],tags:["scala","algo"]},s=void 0,d={permalink:"/blog/add-two-numbers",editUrl:"https://github.com/Rafailong/blog/tree/main/docs/blog/2022-01-10-add-two-numbers.md",source:"@site/blog/2022-01-10-add-two-numbers.md",title:"add two number",description:"time to solve another coding challenge.",date:"2022-01-10T00:00:00.000Z",formattedDate:"January 10, 2022",tags:[{label:"scala",permalink:"/blog/tags/scala"},{label:"algo",permalink:"/blog/tags/algo"}],readingTime:5.73,truncated:!0,authors:[{name:"Rafael Avila",url:"https://github.com/Rafailong",imageURL:"https://github.com/Rafailong.png",key:"ravila"}],frontMatter:{slug:"add-two-numbers",title:"add two number",authors:["ravila"],tags:["scala","algo"]},prevItem:{title:"sum triangle from array",permalink:"/blog/sum-triangle-from-array"},nextItem:{title:"sorted squared array",permalink:"/blog/sorted-squared-array"}},p={authorsImageUrls:[void 0]},c=[{value:"description",id:"description",level:2},{value:"example",id:"example",level:3},{value:"constraints",id:"constraints",level:3},{value:"linked list representations",id:"linked-list-representations",level:3},{value:"solution",id:"solution",level:2}],u={toc:c};function m(e){var n=e.components,t=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"time to solve another coding challenge."),(0,l.kt)("h2",{id:"description"},"description"),(0,l.kt)("p",null,"You are given two non-empty linked lists representing two non-negative integers.\nThe digits are stored in reverse order, and each of their nodes contains a single digit.\nAdd the two numbers and return the sum as a linked list."),(0,l.kt)("p",null,"You may assume the two numbers do not contain any leading zero,\nexcept the number 0 itself."),(0,l.kt)("h3",{id:"example"},"example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"l1 = [2, 4, 3] -- 342\nl2 = [5, 6, 4] -- 465\n\naddTwoNumbers l1 l2 == [7, 0, 8] -- 807 == 342 + 465\n")),(0,l.kt)("h3",{id:"constraints"},"constraints"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"the number of nodes in each linked list is in the range ",(0,l.kt)("inlineCode",{parentName:"li"},"[1, 100]")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"0 <= ListNode.x <= 9")),(0,l.kt)("li",{parentName:"ol"},"it is guaranteed that the list represents a number that does not have leading zeros")),(0,l.kt)("h3",{id:"linked-list-representations"},"linked list representations"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"// yes. this is no idiomatic scala. but for now, bear with me please!\n\ncase class ListNode(_x: Int = 0, _next: ListNode = null) {\n  var next: ListNode = _next\n  var x: Int = _x\n}\n")),(0,l.kt)("h2",{id:"solution"},"solution"),(0,l.kt)("p",null,"first, we need to define a function signature:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"def addTwoNumbers(l1: ListNode, l2: ListNode): ListNode = ???\n")),(0,l.kt)("p",null,"then, let's create input for our function."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"val n1 = new ListNode(2, new ListNode(4, new ListNode(3)))\nval n2 = new ListNode(5, new ListNode(6, new ListNode(4)))\n")),(0,l.kt)("p",null,"what comes to my mind is a recursive solution so we do as follow"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"(2 + 5) == 7\n(4 + 6) == 0 // 10 - we need to presereve the most-left digit (0) only and carry the other one (1) to the next operation\n(3 + 4) == 7 + 1 == 8\n")),(0,l.kt)("p",null,"first thing first. we need a way to work with a number ",(0,l.kt)("inlineCode",{parentName:"p"},"x")," given that ",(0,l.kt)("inlineCode",{parentName:"p"},"x = number_of_list_1 + number_of_list_2"),"\nand ",(0,l.kt)("inlineCode",{parentName:"p"},"x >= 10")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"// terrible name :(\ndef helper(n: Int): (Int, Int) =\n  if (n >= 10) (1, n % 10)\n  else (0, n)\n")),(0,l.kt)("p",null,"time to code our recursive helper functions"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},'/**\n* @param as list 1\n* @param bs list 2\n* @param acc our seed/accumulator list\n* @param r the digit to carry for the next operation\n*          if the sum of two numbers is 10 then r = 1\n*          for the next iteration \n*/\n@tailrec\nfinal def loop(as: ListNode, bs: ListNode, acc: ListNode, r: Int): ListNode = {\n  (as, bs) match {\n    // base case, when both lists are "empty"\n    // BUT we have an r to include as last digit (not leading zero)\n    case (null, null) if r > 0 => new ListNode(r, acc)\n\n    // base case, when both lists are "empty" but without r\n    case (null, null)          => acc\n\n    // following two cases are similar and handle\n    // the scenario where one of the 2 lists have elements\n    // but the other list is empty\n    case (_, null) =>\n      val (nr, a) = helper(as.x + r)\n      loop(\n        as.next,\n        bs = null,\n        acc = new ListNode(a, acc),\n        nr\n      )\n    case (null, _) =>\n      val (nr, b) = helper(bs.x + r)\n      loop(\n        as = null,\n        bs.next,\n        acc = new ListNode(b, acc),\n        nr\n      )\n\n    // when both lists have elements\n    case (_, _) =>\n      val a = as.x\n      val b = bs.x\n      val (nr, c) = helper(a + b + r)\n      loop(\n        as.next,\n        bs.next,\n        acc = new ListNode(c, acc),\n        nr\n      )\n  }\n}\n')),(0,l.kt)("p",null,'it\'s time to implement our "main" function'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"def addTwoNumbers(l1: ListNode, l2: ListNode): ListNode = {\n  // this is safe given the constraints above\n  val a = l1.x\n  val b = l2.x\n  val (r, c) = helper(a + b)\n  loop(\n    l1.next,\n    l2.next,\n    acc = new ListNode(c),\n    r\n  )\n}\n")),(0,l.kt)("p",null,"time to give it a try to our solution:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"val listNode = addTwoNumbers(n1, n2)\n// listNode: ListNode = ListNode(\n//   _x = 8,\n//   _next = ListNode(_x = 0, _next = ListNode(_x = 7, _next = null))\n// )\n")),(0,l.kt)("p",null,"hmm? maybe we can define a utility function to pretty print our list"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},'@tailrec\nprivate def toList(ln: ListNode, acc: List[Int]): List[Int] =\n  if (ln == null) acc\n  else toList(ln.next, acc :+ ln.x)\n\ndef show(listNode: ListNode): String =\n  toList(listNode, List.empty).mkString(" -> ")\n\nshow(listNode)\n// res0: String = "8 -> 0 -> 7"\n')),(0,l.kt)("p",null,"once again ",(0,l.kt)("em",{parentName:"p"},"hmm?")," our resulting list is not in good order, rigth?\nwhy don't we reverse it?"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},'def reverse(listNode: ListNode): ListNode = {\n\n  @tailrec\n  def loop(ln: ListNode, acc: ListNode): ListNode =\n    if (ln == null) acc\n    else loop(ln.next, new ListNode(ln.x, acc))\n\n  loop(listNode.next, new ListNode(listNode.x))\n}\n\nshow(\n  reverse(listNode)\n)\n// res1: String = "7 -> 0 -> 8"\n')),(0,l.kt)("p",null,"now that look better!"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"def addTwoNumbersImproved(l1: ListNode, l2: ListNode): ListNode = {\n  // this is safe given the constraints above\n  val a = l1.x\n  val b = l2.x\n  val (r, c) = helper(a + b)\n  reverse(\n    loop(\n      l1.next,\n      l2.next,\n      acc = new ListNode(c),\n      r\n    )\n  )\n}\n")),(0,l.kt)("p",null,"but... that was a pretty simplistic way to test our solution, don't you think?"),(0,l.kt)("p",null,"we can do better with a great library:\n",(0,l.kt)("a",{parentName:"p",href:"https://scalacheck.org/index.html"},"scalacheck")),(0,l.kt)("p",null,"let's start importing what we need from scalacheck"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"import org.scalacheck._\nimport org.scalacheck.Prop._\n")),(0,l.kt)("p",null,"scalacheck work require us to define ",(0,l.kt)("inlineCode",{parentName:"p"},"Prop"),"s. our ",(0,l.kt)("inlineCode",{parentName:"p"},"Prop")," will look\nsomething like:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"val myProp = forAll { (input: (ListNode, ListNode, Int)) => ??? }\n")),(0,l.kt)("p",null,"now it is time to define ",(0,l.kt)("inlineCode",{parentName:"p"},"Gen"),"s and ",(0,l.kt)("inlineCode",{parentName:"p"},"Arbitrary")," required for our ",(0,l.kt)("inlineCode",{parentName:"p"},"Prop"),"\nfirst, a ",(0,l.kt)("inlineCode",{parentName:"p"},"Gen[ListNode]")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"//generates pair like:\n// (\n//   10,\n//   ListNode(0, ListNode(1))\n// )\nval listNodeGen: Gen[(Int, ListNode)] = for {\n  size <- Gen.chooseNum(1, 8) // our lists will have up to 8 nodes\n  head <- Gen.chooseNum(1, 9) // we do this hold constraint no. 3\n  tail <- Gen.listOfN(size - 1, Gen.chooseNum(0, 9)) // trailing digits can be 0-9\n  _list = head :: tail\n  n = _list.mkString.toInt\n  listNode = tail.reverse.foldRight(new ListNode(head)) { (i, ln) =>\n    new ListNode(i, ln)\n  }\n} yield (n, listNode)\n")),(0,l.kt)("p",null,"now we need to define an ",(0,l.kt)("inlineCode",{parentName:"p"},"Arbitrary")," for out ",(0,l.kt)("inlineCode",{parentName:"p"},"(ListNode, ListNode, Int)")," type"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"type Input = (ListNode, ListNode, Int)\n\n// generates tuples like:\n// (\n//   ListNode(1),\n//   ListNode(0, ListNode(1)),\n//   11\n// )\nval inputGen: Gen[Input] =\n  for {\n    (n1, l1) <- listNodeGen\n    (n2, l2) <- listNodeGen\n  } yield (l1, l2, n1 + n2)\n\nimplicit val arb: Arbitrary[Input] = Arbitrary(inputGen)\n")),(0,l.kt)("p",null,"we have all we need to define our ",(0,l.kt)("inlineCode",{parentName:"p"},"Prop")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"val prop = forAll { (input: Input) =>\n\n  // unapplying our input to avoid `._1` syntax\n  val (l1, l2, n) = input\n\n  // applying our solution\n  val result = addTwoNumbersImproved(l1, l2)\n\n  // we need to do this in order to prove our solution\n  val nn = {\n    val reversed = reverse(result)\n    // ListNode to immutable.List to Int\n    toList(reversed, List.empty).mkString.toInt\n  }\n\n  n == nn\n}\n// prop: Prop = Prop\n\nprop.check()\n// + OK, passed 100 tests.\n")),(0,l.kt)("p",null,'now with "random" inputs to our solution and 100 test\nwe can be somehow sure that it works! yay!'))}m.isMDXComponent=!0}}]);