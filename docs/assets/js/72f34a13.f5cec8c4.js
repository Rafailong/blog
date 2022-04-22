"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[538],{8215:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(3117),r=n(7294),i=n(2389),l=n(8472),s=n(6010),o="tabItem_LplD";function u(e){var t,n,i,u=e.lazy,d=e.block,c=e.defaultValue,p=e.values,m=e.groupId,h=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=p?p:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,l.lx)(v,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===c?c:null!=(t=null!=c?c:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=f[0])?void 0:i.props.value;if(null!==g&&!v.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,l.UB)(),y=k.tabGroupChoices,w=k.setTabGroupChoices,I=(0,r.useState)(g),x=I[0],N=I[1],T=[],L=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var q=y[m];null!=q&&q!==x&&v.some((function(e){return e.value===q}))&&N(q)}var C=function(e){var t=e.currentTarget,n=T.indexOf(t),a=v[n].value;a!==x&&(L(t),N(a),null!=m&&w(m,a))},Z=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;n=T[a]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.currentTarget)-1;n=T[r]||T[T.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":d},h)},v.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return T.push(e)},onKeyDown:Z,onFocus:C,onClick:C},i,{className:(0,s.Z)("tabs__item",o,null==i?void 0:i.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),u?(0,r.cloneElement)(f.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function d(e){var t=(0,i.Z)();return r.createElement(u,(0,a.Z)({key:String(t)},e))}},9362:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return h}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),l=n(254),s=n(9877),o=n(8215),u=["components"],d={slug:"sorted-squared-array",title:"sorted squared array",authors:["ravila"],tags:["algo","kotlin"]},c=void 0,p={permalink:"/blog/sorted-squared-array",editUrl:"https://github.com/Rafailong/blog/tree/main/docs/blog/2022-01-03-sorted-squared-array/index.mdx",source:"@site/blog/2022-01-03-sorted-squared-array/index.mdx",title:"sorted squared array",description:"this time we will try to (satisfactory) solve a coding challenge.",date:"2022-01-03T00:00:00.000Z",formattedDate:"January 3, 2022",tags:[{label:"algo",permalink:"/blog/tags/algo"},{label:"kotlin",permalink:"/blog/tags/kotlin"}],readingTime:1.61,truncated:!0,authors:[{name:"Rafael Avila",url:"https://github.com/Rafailong",imageURL:"https://github.com/Rafailong.png",key:"ravila"}],frontMatter:{slug:"sorted-squared-array",title:"sorted squared array",authors:["ravila"],tags:["algo","kotlin"]},prevItem:{title:"add two number",permalink:"/blog/add-two-numbers"},nextItem:{title:"haskell dollar-sign operator",permalink:"/blog/dollar-sign-operator"}},m={authorsImageUrls:[void 0]},h=[{value:"description",id:"description",level:3},{value:"first attempt",id:"first-attempt",level:3},{value:"second attempt",id:"second-attempt",level:3},{value:"bonus",id:"bonus",level:3}],f={toc:h};function v(e){var t=e.components,n=(0,r.Z)(e,u);return(0,i.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"this time we will try to (satisfactory) solve a coding challenge."),(0,i.kt)("h3",{id:"description"},"description"),(0,i.kt)("p",null,"write a function that takes in a non-empty array of integers that are sorted\nin ascending order and returns a new array of the same length with the squares\nof the original integers also sorted in ascending order."),(0,i.kt)("h3",{id:"first-attempt"},"first attempt"),(0,i.kt)("p",null,"first attempt (which fails when ",(0,i.kt)("inlineCode",{parentName:"p"},"array")," includes negative numbers)\ngiven ",(0,i.kt)("inlineCode",{parentName:"p"},"array = [-2, -1]")," as input, output is ",(0,i.kt)("inlineCode",{parentName:"p"},"[4, 1]")," which is wrong\nbecause correct output should be sorted in ascending order:"),(0,i.kt)(l.Z,{className:"language-kotlin",title:"first-attempt.kts",mdxType:"CodeBlock"},"#!/usr/bin/env kscript\n\nfun sortedSquaredArray(array: List<Int>): List<Int> {\n    return array.map { n -> n * n }\n}"),(0,i.kt)("p",null,"what i like from ",(0,i.kt)("inlineCode",{parentName:"p"},"first-attempt")," (failed) solution is that\n",(0,i.kt)("strong",{parentName:"p"},"we have no state")," (we are not mutating anything), we are only\ntraversing our input array once and generating a new array as our output."),(0,i.kt)("h3",{id:"second-attempt"},"second attempt"),(0,i.kt)("p",null,"an ",(0,i.kt)("em",{parentName:"p"},"optimal")," solution would be to use a data structure that preserves\nthe order of its elements i.e binary tree; but, given that we have no b-tree at our disposal we can leverage\nKotlin native ",(0,i.kt)("a",{parentName:"p",href:"https://kotlinlang.org/docs/list-operations.html#binary-search-in-sorted-lists"},"BinarySearch"),"\nmethods in ",(0,i.kt)("inlineCode",{parentName:"p"},"List"),". we need to be careful with the return value of\nsuch a function in order to prevent index bound exceptions:"),(0,i.kt)(l.Z,{className:"language-kotlin",title:"second-attempt.kts",mdxType:"CodeBlock"},"#!/usr/bin/env kscript\n\nfun sortedSquaredArray(array: List<Int>): List<Int> {\n    val acc = mutableListOf<Int>()\n\n    for (n in array) {\n        val sqr = n * n\n\n        if (acc.isEmpty()) acc.add(sqr)\n        else {\n            val i = (acc.binarySearch(sqr, 0, acc.size) + 1).absoluteValue\n            acc.add(i, sqr)\n        }\n    }\n\n    return acc\n}"),(0,i.kt)("p",null,"what i ",(0,i.kt)("strong",{parentName:"p"},"dislike")," from ",(0,i.kt)("inlineCode",{parentName:"p"},"second-attempt")," solution is that: we have state mutations.\non the other hand, i like that we are still traversing our input array once\nmeaning ",(0,i.kt)("inlineCode",{parentName:"p"},"O(n)")," complexity which I think is nice!"),(0,i.kt)("h3",{id:"bonus"},"bonus"),(0,i.kt)("p",null,"as a bonus here is a 3rd optional solution that is not as efficient as the previous one\nbut this third solution is based on immutable data structures which is always good:"),(0,i.kt)(s.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"kotlin",label:"Kotlin",default:!0,mdxType:"TabItem"},(0,i.kt)(l.Z,{className:"language-kotlin",title:"bonus-attempt.kts",mdxType:"CodeBlock"},"#!/urs/bin/env kscript\n\nfun sortedSquaredArray(array: List<Int>): List<Int> {\n\n    fun add(n: Int, list: List<Int>): List<Int> {\n        val (l, g) = list.partition { x -> x <= n }\n        return l.plus(n).plus(g)\n    }\n\n    return array.fold(listOf()) { acc, n ->\n        add(n * n, acc)\n    }\n}")),(0,i.kt)(o.Z,{value:"scala",label:"Scala",mdxType:"TabItem"},(0,i.kt)(l.Z,{className:"language-scala",title:"scala-bonus.worksheet.sc",mdxType:"CodeBlock"},"/**\n * scala 3.1.0\n */\n\n// binary-search based (not stack-safe)\nfinal def add(list: List[Int], n: Int): List[Int] =\n   list match\n     case Nil => List(n)\n     case x :: Nil if n >= x => list :+ n\n     case x :: Nil if n < x  => n +: list\n     case _ =>\n       val size = list.size\n       val middleIndex: Int = size  / 2\n       val middleValue: Int = list(middleIndex)\n       val (l, g) = list.splitAt(middleIndex)\n       if n > middleValue then\n         l ++ add(list.slice(middleIndex, size), n)\n       else\n         add(list.slice(0, middleIndex), n) ++ g\n\ndef sortedSquaredArray(list: List[Int]): List[Int] =\n  list.foldLeft(List.empty) { (acc, n) =>\n    add(acc, n * n)\n  }\n\nval result =sortedSquaredArray(List(-3, -2, 1))\nassert(result == List(1, 4, 9))\n"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"PD. in case you are wondering bout the ",(0,i.kt)("inlineCode",{parentName:"p"},"kscript")," in the codeblocks take a look at:\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/holgerbrandl/kscript"},"holgerbrandl/kscript"))))}v.isMDXComponent=!0}}]);