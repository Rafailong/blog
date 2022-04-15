"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[507],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(n),g=a,f=m["".concat(s,".").concat(g)]||m[g]||c[g]||l;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1195:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var r=n(3117),a=n(102),l=(n(7294),n(3905)),i=["components"],o={slug:"sum-triangle-from-array",title:"sum triangle from array",authors:["ravila"],tags:["scala","algo"]},s=void 0,u={permalink:"/blog/sum-triangle-from-array",editUrl:"https://github.com/Rafailong/blog/tree/main/docs/blog/2022-01-19-sum-triagle-from-array.md",source:"@site/blog/2022-01-19-sum-triagle-from-array.md",title:"sum triangle from array",description:"another week, another code challenge",date:"2022-01-19T00:00:00.000Z",formattedDate:"January 19, 2022",tags:[{label:"scala",permalink:"/blog/tags/scala"},{label:"algo",permalink:"/blog/tags/algo"}],readingTime:2.235,truncated:!1,authors:[{name:"Rafael Avila",url:"https://github.com/Rafailong",imageURL:"https://github.com/Rafailong.png",key:"ravila"}],frontMatter:{slug:"sum-triangle-from-array",title:"sum triangle from array",authors:["ravila"],tags:["scala","algo"]},prevItem:{title:"is the number a palindrome?",permalink:"/blog/number-is-palindrome"},nextItem:{title:"add two number",permalink:"/blog/add-two-numbers"}},p={authorsImageUrls:[void 0]},c=[{value:"description",id:"description",level:2},{value:"example",id:"example",level:3},{value:"solution",id:"solution",level:2}],m={toc:c};function g(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"another week, another code challenge"),(0,l.kt)("h2",{id:"description"},"description"),(0,l.kt)("p",null,"given an array of integers, print a sum triangle from it such that\nthe first level has all array elements.\nfrom then, at each level number of elements is one less than the previous level\nand elements at the level is be the ",(0,l.kt)("strong",{parentName:"p"},"sum")," of consecutive two elements in the previous level. "),(0,l.kt)("h3",{id:"example"},"example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"def sumTriangle(number: List[Int]): List[List[Int]] = ???\n\nval input = List(1, 2, 3, 4, 5)\n\nshow(\n  sumTriangle(input)\n)\n// stdout output\n// List(\n//   List(48),\n//   List(20, 28), \n//   List(8, 12, 16), \n//   List(3, 5, 7, 9), \n//   List(1, 2, 3, 4, 5)\n// )\n")),(0,l.kt)("h2",{id:"solution"},"solution"),(0,l.kt)("p",null,"first, we need to find a way to sum the elements of a list in pairs,\nsomething that does like:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"[1, 2, 3, 4, 5] -> [1 + 2, 2 + 3, 3 + 4, 4 + 5] = [3, 5, 7, 9]\n")),(0,l.kt)("p",null,"\ud83e\udd14 intresting enough, this looks like we need to ",(0,l.kt)("inlineCode",{parentName:"p"},"zip")," one element with its successor."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"def sum(ns: List[Int]): List[Int] =\n  ns.zip(ns.tail).map { case (a, b) => a + b }\n\nsum(List(1, 2, 3, 4, 5))\n// res0: List[Int] = List(3, 5, 7, 9)\n")),(0,l.kt)("p",null,"nice! this seems to work correctly. now that we can produce a level of\nour trigle from a base level next step is to produce the whole triangle\nfrom our input level (base level)."),(0,l.kt)("p",null,"but first, let's get a bit piky and define a type alias for our triangle"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"type Triangle = List[List[Int]]\n\nobject Triangle {\n  def apply(ns: List[Int]): Triangle = ns :: Nil\n}\n")),(0,l.kt)("p",null,"now we can implement our ",(0,l.kt)("em",{parentName:"p"},"main")," function:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"def sumTriangle(numbers: List[Int]): Triangle = {\n\n  @tailrec\n  def go(ns: List[Int], triangle: Triangle): Triangle =\n    ns match {\n      case _ :: _ =>\n        val level = sum(ns)\n        go(level, level :: triangle)\n      case Nil => triangle\n    }\n\n  go(numbers, Triangle(numbers))\n}\n")),(0,l.kt)("p",null,"as you may notice, this implementation is tail recursive (proved by the compiler)\nand it builds a triangle from bottom to top.\nlet's give it a try!"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"val triangle = sumTriangle(\n  List(1, 2, 3, 4, 5)\n)\n// triangle: Triangle = List(\n//   List(),\n//   List(48),\n//   List(20, 28),\n//   List(8, 12, 16),\n//   List(3, 5, 7, 9),\n//   List(1, 2, 3, 4, 5)\n// )\n")),(0,l.kt)("p",null,"as an extra let's try to pretty print our triangle"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},'def show(triangle: Triangle): String =\n  triangle.foldRight("") { case (ns, str) =>\n    s"${ns.mkString(",")}" ++ System.lineSeparator() ++ str\n  }\n\nshow(triangle)\n// res1: String = """\n// 48\n// 20,28\n// 8,12,16\n// 3,5,7,9\n// 1,2,3,4,5\n// """\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"PS. worth to mention that this blog post is a markdown file processed with the awesome ",(0,l.kt)("a",{parentName:"p",href:"https://scalameta.org/mdoc/"},"mdoc")," \ud83e\udd13")))}g.isMDXComponent=!0}}]);