"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[103],{9360:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var n=a(7294),l=a(8665),i=a(8902),o=a(3117),r=a(5999),s=a(1750);function c(e){var t=e.nextItem,a=e.prevItem;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,r.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(s.Z,(0,o.Z)({},a,{subLabel:n.createElement(r.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")}))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&n.createElement(s.Z,(0,o.Z)({},t,{subLabel:n.createElement(r.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")}))))}var m=a(8472),u=a(4853),d=a(6010);function g(e){var t,a=e.content,l=a.assets,i=a.metadata,o=i.title,r=i.description,s=i.date,c=i.tags,u=i.authors,d=i.frontMatter,g=d.keywords,v=null!=(t=l.image)?t:d.image;return n.createElement(m.d,{title:o,description:r,keywords:g,image:v},n.createElement("meta",{property:"og:type",content:"article"}),n.createElement("meta",{property:"article:published_time",content:s}),u.some((function(e){return e.url}))&&n.createElement("meta",{property:"article:author",content:u.map((function(e){return e.url})).filter(Boolean).join(",")}),c.length>0&&n.createElement("meta",{property:"article:tag",content:c.map((function(e){return e.label})).join(",")}))}function v(e){var t=e.content,a=e.sidebar,o=t.assets,r=t.metadata,s=r.nextItem,m=r.prevItem,d=r.frontMatter,g=d.hide_table_of_contents,v=d.toc_min_heading_level,p=d.toc_max_heading_level;return n.createElement(l.Z,{sidebar:a,toc:!g&&t.toc&&t.toc.length>0?n.createElement(u.Z,{toc:t.toc,minHeadingLevel:v,maxHeadingLevel:p}):void 0},n.createElement(i.Z,{frontMatter:d,assets:o,metadata:r,isBlogPostPage:!0},n.createElement(t,null)),(s||m)&&n.createElement(c,{nextItem:s,prevItem:m}))}function p(e){return n.createElement(m.FG,{className:(0,d.Z)(m.kM.wrapper.blogPages,m.kM.page.blogPostPage)},n.createElement(g,e),n.createElement(v,e))}},4853:function(e,t,a){a.d(t,{Z:function(){return g}});var n=a(3117),l=a(102),i=a(7294),o=a(6010),r=a(8472),s=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function c(e){var t=e.toc,a=e.className,n=e.linkClassName,l=e.isChild;return t.length?i.createElement("ul",{className:l?void 0:a},t.map((function(e){return i.createElement("li",{key:e.id},i.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),i.createElement(c,{isChild:!0,toc:e.children,className:a,linkClassName:n}))}))):null}function m(e){var t=e.toc,a=e.className,o=void 0===a?"table-of-contents table-of-contents__left-border":a,m=e.linkClassName,u=void 0===m?"table-of-contents__link":m,d=e.linkActiveClassName,g=void 0===d?void 0:d,v=e.minHeadingLevel,p=e.maxHeadingLevel,b=(0,l.Z)(e,s),f=(0,r.LU)(),h=null!=v?v:f.tableOfContents.minHeadingLevel,E=null!=p?p:f.tableOfContents.maxHeadingLevel,N=(0,r.b9)({toc:t,minHeadingLevel:h,maxHeadingLevel:E}),_=(0,i.useMemo)((function(){if(u&&g)return{linkClassName:u,linkActiveClassName:g,minHeadingLevel:h,maxHeadingLevel:E}}),[u,g,h,E]);return(0,r.Si)(_),i.createElement(c,(0,n.Z)({toc:N,className:o,linkClassName:u},b))}var u="tableOfContents_cNA8",d=["className"];function g(e){var t=e.className,a=(0,l.Z)(e,d);return i.createElement("div",{className:(0,o.Z)(u,"thin-scrollbar",t)},i.createElement(m,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}}}]);