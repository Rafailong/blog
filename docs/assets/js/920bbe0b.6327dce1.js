"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[229],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(t),d=r,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return t?a.createElement(f,l(l({ref:n},p),{},{components:t})):a.createElement(f,l({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=u;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7544:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return p},toc:function(){return m},default:function(){return d}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),l=["components"],o={slug:"number-is-palindrome",title:"is the number a palindrome?",authors:["ravila"],tags:["scala","algo"]},s=void 0,c={permalink:"/blog/number-is-palindrome",editUrl:"https://github.com/Rafailong/blog/tree/main/docs/blog/2022-01-26-number-is-palindrome.md",source:"@site/blog/2022-01-26-number-is-palindrome.md",title:"is the number a palindrome?",description:"description",date:"2022-01-26T00:00:00.000Z",formattedDate:"January 26, 2022",tags:[{label:"scala",permalink:"/blog/tags/scala"},{label:"algo",permalink:"/blog/tags/algo"}],readingTime:3.89,truncated:!1,authors:[{name:"Rafael Avila",url:"https://github.com/Rafailong",imageURL:"https://github.com/Rafailong.png",key:"ravila"}],nextItem:{title:"sum triangle from array",permalink:"/blog/sum-triangle-from-array"}},p={authorsImageUrls:[void 0]},m=[{value:"description",id:"description",children:[{value:"constraints",id:"constraints",children:[],level:3}],level:2},{value:"solution",id:"solution",children:[],level:2}],u={toc:m};function d(e){var n=e.components,t=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"description"},"description"),(0,i.kt)("p",null,"Given an integer ",(0,i.kt)("inlineCode",{parentName:"p"},"x"),", return ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," if ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," is palindrome integer.\nAn integer is a palindrome when it reads the same backward as forward.\nFor example, ",(0,i.kt)("inlineCode",{parentName:"p"},"121")," is a palindrome while ",(0,i.kt)("inlineCode",{parentName:"p"},"123")," is not."),(0,i.kt)("h3",{id:"constraints"},"constraints"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"x >= 0")),(0,i.kt)("li",{parentName:"ul"},"usage of strings is prohibited")),(0,i.kt)("h2",{id:"solution"},"solution"),(0,i.kt)("p",null,"first idea is to decompose the given number in 3 parts:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"x = 123321\nfirst  = 1\nlast   = 1\nothers = 2332\n")),(0,i.kt)("p",null,"with the number decoposition it would be possible to decompose the number till either:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"first != last")),(0,i.kt)("li",{parentName:"ol"},"or, it is not possible to decompose the number i.e. number of one digit ",(0,i.kt)("inlineCode",{parentName:"li"},"1"))),(0,i.kt)("p",null,"so, let's try to implement a function to decompose a nuber:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"def isOneDigit(n: Int): Boolean = n >= 0 && n < 10\n\ndef deconstruct(number: Int): (Int, Option[Int], Int) = {\n\n  if (isOneDigit(number)) (number, None, number)\n  else {\n\n    val n = {\n      val a = Math.log10(number).intValue()\n      Math.pow(10, a).intValue()\n    }\n\n    val firstDigit = number / n\n    val lastDigit = number % 10\n    val left = {\n      if (isOneDigit(number / 10)) None\n      else Some((number % n) / 10)\n    }\n\n    (firstDigit, left, lastDigit)\n  }\n}\n")),(0,i.kt)("p",null,"as you case ",(0,i.kt)("inlineCode",{parentName:"p"},"deconstruct")," returns a three-tuple with an ",(0,i.kt)("inlineCode",{parentName:"p"},"Option")," in the middle.\nlet's see how ",(0,i.kt)("inlineCode",{parentName:"p"},"deconstruct")," behaves:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"deconstruct(123)\n// res0: (Int, Option[Int], Int) = (1, Some(value = 2), 3)\ndeconstruct(1)\n// res1: (Int, Option[Int], Int) = (1, None, 1)\ndeconstruct(11)\n// res2: (Int, Option[Int], Int) = (1, None, 1)\n")),(0,i.kt)("p",null,"okay... it seems there are couple special cases here:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"when we pass a 1-digit number: ",(0,i.kt)("inlineCode",{parentName:"li"},"first")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"last")," will be ",(0,i.kt)("em",{parentName:"li"},"that")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"others")," will be a ",(0,i.kt)("inlineCode",{parentName:"li"},"None")," "),(0,i.kt)("li",{parentName:"ol"},"and, when we pass a 2-digits number: ",(0,i.kt)("inlineCode",{parentName:"li"},"other")," will be ",(0,i.kt)("inlineCode",{parentName:"li"},"None")," too")),(0,i.kt)("p",null,"so, it seems we kind of have a base case for a recursive function that will find out\nif a number is a palindrome or not:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"def isPalindrome(number: Int): Boolean = {\n  @tailrec\n  def recur(number: Int, acc: Boolean): Boolean = {\n    val (h, ns, t) = deconstruct(number)\n    val bool       = h == t && acc\n    if (bool) {\n      ns match {\n        case Some(value) => recur(value, bool)\n        case None        => bool\n      }\n    } else false\n  }\n\n  recur(number, true)\n}\n\nisPalindrome(1203021)\n// res3: Boolean = false\nisPalindrome(123421)\n// res4: Boolean = false\nisPalindrome(123321)\n// res5: Boolean = true\nisPalindrome(10001)\n// res6: Boolean = true\nisPalindrome(1000)\n// res7: Boolean = false\nisPalindrome(8)\n// res8: Boolean = true\nisPalindrome(0)\n// res9: Boolean = true\n")),(0,i.kt)("p",null,"welp... obviously something is not working as expects \ud83d\ude13\nour ",(0,i.kt)("inlineCode",{parentName:"p"},"deconstruct")," functions seem to be the suspected here.\nso let's ",(0,i.kt)("em",{parentName:"p"},"debug")," it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"deconstruct(1203021) == (1, Some(20302), 1)\n// res10: Boolean = true\ndeconstruct(20302)\n// res11: (Int, Option[Int], Int) = (2, Some(value = 30), 2)\n")),(0,i.kt)("p",null,"\ud83e\udd21 ",(0,i.kt)("inlineCode",{parentName:"p"},"deconstruct")," has no respect for the leading zeros which is OK because ",(0,i.kt)("inlineCode",{parentName:"p"},"30 = 030")," and we are working with ",(0,i.kt)("inlineCode",{parentName:"p"},"Int"),"s"),(0,i.kt)("p",null,"time to try different approach. what bout an accumulative approach?"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"case class Acc private (org: List[Int], reversed: List[Int]) { self =>\n  def add(digit: Int): Acc = Acc(\n    org      = self.org :+ digit,\n    reversed = digit +: self.reversed\n  )\n}\nobject Acc {\n  def empty: Acc = Acc(List.empty, List.empty)\n}\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Acc")," is our accumulative structure. it does maintian 2 lists\nand every time we want to ",(0,i.kt)("inlineCode",{parentName:"p"},"add")," a number to it:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"it will append the digit to one list ",(0,i.kt)("inlineCode",{parentName:"li"},"org")),(0,i.kt)("li",{parentName:"ol"},"and, it will preppend the same digit to the other list ",(0,i.kt)("inlineCode",{parentName:"li"},"reversed"))),(0,i.kt)("p",null,"time to implement our function to check if a number is palindrome or not\nusing ",(0,i.kt)("inlineCode",{parentName:"p"},"Acc"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"def lastDigit(n: Int): Int = n % 10\n\ndef isPalindromeAcc(x: Int): Boolean =\n  if (isOneDigit(x)) true\n  else {\n\n    @tailrec\n    def go(acc: Acc, n: Int): Acc =\n      if (n > 0) go(((acc.add _) compose (lastDigit _))(n), n / 10)\n      else acc\n\n    val Acc(org, reversed) = go(Acc.empty, x)\n    org sameElements reversed\n  }\n")),(0,i.kt)("p",null,"the function ",(0,i.kt)("inlineCode",{parentName:"p"},"isPalindromAcc"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"check if ",(0,i.kt)("inlineCode",{parentName:"li"},"x")," is a number of one digit (short-circuit)"),(0,i.kt)("li",{parentName:"ul"},'"deconstruct" ',(0,i.kt)("inlineCode",{parentName:"li"},"x")," from right to left and ",(0,i.kt)("inlineCode",{parentName:"li"},"add"),"-em to an ",(0,i.kt)("inlineCode",{parentName:"li"},"Acc")),(0,i.kt)("li",{parentName:"ul"},"and last step, it compares the list from ",(0,i.kt)("inlineCode",{parentName:"li"},"Acc")," using ",(0,i.kt)("inlineCode",{parentName:"li"},"sameElements"),"\nwhich checks that both list contains the same elements at the same order")),(0,i.kt)("p",null,"let's give it a try:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"isPalindromeAcc(1203021)\n// res12: Boolean = true\nisPalindromeAcc(123421)\n// res13: Boolean = false\nisPalindromeAcc(10001)\n// res14: Boolean = true\nisPalindromeAcc(1000)\n// res15: Boolean = false\nisPalindromeAcc(8)\n// res16: Boolean = true\nisPalindromeAcc(0)\n// res17: Boolean = true\n")),(0,i.kt)("p",null,"this looks much better! \ud83e\udd73 things to note:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"isPalindrom")," works perfectly for numbers without zeros in the middle and it is more efficient that ",(0,i.kt)("inlineCode",{parentName:"li"},"isPalindromAcc")," in both time and space"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"isPalindromAcc")," work great with any ",(0,i.kt)("inlineCode",{parentName:"li"},"x >= 0")," but it is memory heavy")))}d.isMDXComponent=!0}}]);