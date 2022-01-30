"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=c(t),d=r,k=p["".concat(s,".").concat(d)]||p[d]||u[d]||i;return t?a.createElement(k,l(l({ref:n},m),{},{components:t})):a.createElement(k,l({ref:n},m))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=p;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3832:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return m},toc:function(){return u},default:function(){return d}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),l=["components"],o={slug:"roman-to-decimal",title:"roman number to decimal number",authors:["ravila"],tags:["scala","algo"]},s=void 0,c={permalink:"/blog/roman-to-decimal",editUrl:"https://github.com/Rafailong/blog/tree/main/docs/blog/2022-01-31-roman-to-decimal.md",source:"@site/blog/2022-01-31-roman-to-decimal.md",title:"roman number to decimal number",description:"description",date:"2022-01-31T00:00:00.000Z",formattedDate:"January 31, 2022",tags:[{label:"scala",permalink:"/blog/tags/scala"},{label:"algo",permalink:"/blog/tags/algo"}],readingTime:3.45,truncated:!1,authors:[{name:"Rafael Avila",url:"https://github.com/Rafailong",imageURL:"https://github.com/Rafailong.png",key:"ravila"}],nextItem:{title:"is the number a palindrome?",permalink:"/blog/number-is-palindrome"}},m={authorsImageUrls:[void 0]},u=[{value:"description",id:"description",children:[{value:"constraints",id:"constraints",children:[],level:3}],level:2},{value:"solution",id:"solution",children:[{value:"scala as a better java",id:"scala-as-a-better-java",children:[],level:3},{value:"scala-ish?",id:"scala-ish",children:[],level:3}],level:2}],p={toc:u};function d(e){var n=e.components,t=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"description"},"description"),(0,i.kt)("p",null,"roman numerals are represented by seven different symbols: ",(0,i.kt)("inlineCode",{parentName:"p"},"I"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"V"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"X"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"L"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"C"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"D")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"M"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Symbol       Value\nI             1\nV             5\nX             10\nL             50\nC             100\nD             500\nM             1000\n")),(0,i.kt)("p",null,"for example, 2 is written as ",(0,i.kt)("inlineCode",{parentName:"p"},"II")," in roman numeral, just two one's added together. 12 is written as ",(0,i.kt)("inlineCode",{parentName:"p"},"XII"),", which is simply ",(0,i.kt)("inlineCode",{parentName:"p"},"X + II"),".\nthe number 27 is written as ",(0,i.kt)("inlineCode",{parentName:"p"},"XXVII"),", which is ",(0,i.kt)("inlineCode",{parentName:"p"},"XX + V + II"),"."),(0,i.kt)("p",null,"roman numerals are usually written largest to smallest from left to right. however, the numeral for four is not ",(0,i.kt)("inlineCode",{parentName:"p"},"IIII"),".\ninstead, the number four is written as ",(0,i.kt)("inlineCode",{parentName:"p"},"IV"),". because the one is before the five we subtract it making four.\nthe same principle applies to the number nine, which is written as ",(0,i.kt)("inlineCode",{parentName:"p"},"IX"),".\nthere are six instances where subtraction is used:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"I")," can be placed before ",(0,i.kt)("inlineCode",{parentName:"li"},"V")," (5) and ",(0,i.kt)("inlineCode",{parentName:"li"},"X")," (10) to make 4 and 9. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"X")," can be placed before ",(0,i.kt)("inlineCode",{parentName:"li"},"L")," (50) and ",(0,i.kt)("inlineCode",{parentName:"li"},"C")," (100) to make 40 and 90. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"C")," can be placed before ",(0,i.kt)("inlineCode",{parentName:"li"},"D")," (500) and ",(0,i.kt)("inlineCode",{parentName:"li"},"M")," (1000) to make 400 and 900.")),(0,i.kt)("p",null,"given a roman numeral, convert it to an integer."),(0,i.kt)("h3",{id:"constraints"},"constraints"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= s.length <= 15")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"s")," contains only the characters (",(0,i.kt)("inlineCode",{parentName:"li"},"I"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"V"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"X"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"L"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"C"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"D"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"M"),")."),(0,i.kt)("li",{parentName:"ul"},"it is guaranteed that s is a valid roman numeral in the range ","[1, 3999]",".")),(0,i.kt)("h2",{id:"solution"},"solution"),(0,i.kt)("p",null,"this time we are going to try to solve the challenge in 3 different ways.\nbut firts, let's define two support ",(0,i.kt)("inlineCode",{parentName:"p"},"Map"),"s:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"val symbolAndValue = Map(\n    'I' -> 1,\n    'V' -> 5,\n    'X' -> 10,\n    'L' -> 50,\n    'C' -> 100,\n    'D' -> 500,\n    'M' -> 1000\n  )\n\nval specialSymbols = Map(\n  \"IV\" -> 4,\n  \"IX\" -> 9,\n  \"XL\" -> 40,\n  \"XC\" -> 90,\n  \"CD\" -> 400,\n  \"CM\" -> 900\n)\n")),(0,i.kt)("h3",{id:"scala-as-a-better-java"},"scala as a better java"),(0,i.kt)("p",null,"let's implement a function using scala as a better java).\nso, our function should:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"mutate state"),(0,i.kt)("li",{parentName:"ul"},"and, iterate not recurs")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'def romanToIntJavaLike(s: String): Int = {\n  var sum = 0\n  val size = s.length\n  var i = 0\n  while (i < size) {\n    val a = s(i)\n\n    // extracting next char\n    val j = i + 1\n    if (j < size) {\n      val str = s"$a${s(j)}"\n\n      // and finding if the pair of current and next is s special case\n      specialSymbols.get(str) match {\n        case Some(n) =>\n          sum = sum + n\n          i = i + 2\n        case None =>\n          symbolAndValue.get(a).foreach { n =>\n            sum = sum + n\n            i = i + 1\n          }\n      }\n    } else {\n      symbolAndValue.get(a).foreach { n =>\n        sum = sum + n\n        i = i + 1\n      }\n    }\n\n  }\n\n  sum\n}\n')),(0,i.kt)("p",null,"as you can see, ",(0,i.kt)("inlineCode",{parentName:"p"},"ronamToIntJavaLike"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"defines a accumulator ",(0,i.kt)("inlineCode",{parentName:"li"},"sum")," "),(0,i.kt)("li",{parentName:"ul"},"iterate its input string ",(0,i.kt)("inlineCode",{parentName:"li"},"s")," char-by-char"),(0,i.kt)("li",{parentName:"ul"},"crusial part is checking if there is a next char from our current char so we can check if the pair is a special case")),(0,i.kt)("p",null,"let's give it a try:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'romanToIntJavaLike("III")     // 3\n// res0: Int = 3     // 3\nromanToIntJavaLike("LVIII")   // 58\n// res1: Int = 58   // 58\nromanToIntJavaLike("MCMXCIV") // 1994\n// res2: Int = 1994\n')),(0,i.kt)("p",null,"welp, implementation seems to work."),(0,i.kt)("h3",{id:"scala-ish"},"scala-ish?"),(0,i.kt)("p",null,"the scala-ish solution should:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"be tail recursive"),(0,i.kt)("li",{parentName:"ul"},"leverage pattern matching")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'def romanToInt(s: String): Int = {\n  val valueOfSymbol: Char => Int = symbolAndValue.getOrElse(_, 0)\n\n  @tailrec\n  def go(chars: List[Char], sum: Int): Int = {\n    chars match {\n      case c1 :: c2 :: tail =>\n        specialSymbols.get(s"$c1$c2") match {\n          case Some(n) => go(tail, sum + n)\n          // note that if c1 and c2 pair was not an specil sumbol i.e. IV\n          // we only discard c1 and c2 is part of our collection for the next\n          // recursive call\n          case None    => go(c2 :: tail, valueOfSymbol(c1) + sum)\n        }\n      case c1 :: tail => go(tail, valueOfSymbol(c1) + sum)\n      case Nil        => sum\n    }\n  }\n\n  go(s.toList, 0)\n}\n')),(0,i.kt)("p",null,"let's give it a try:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'romanToInt("III")\n// res3: Int = 3\nromanToInt("LVIII")\n// res4: Int = 58\nromanToInt("MCMXCIV")\n// res5: Int = 1994\n')),(0,i.kt)("p",null,"welp, this implementation seem to work correctly too! yay!"))}d.isMDXComponent=!0}}]);