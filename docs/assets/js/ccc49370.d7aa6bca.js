"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[103],{8902:function(e,t,a){a.d(t,{Z:function(){return w}});var n=a(7294),l=a(6010),r=a(3905),i=a(5999),m=a(9960),o=a(4996),s=a(3810),c=a(6309),g=a(7462),d=a(3366),u="iconEdit_mS5F",p=["className"];var v=function(e){var t=e.className,a=(0,d.Z)(e,p);return n.createElement("svg",(0,g.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,l.Z)(u,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function h(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:s.kM.common.editThisPage},n.createElement(v,null),n.createElement(i.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var E="blogPostTitle_d4p0",b="blogPostData_-Im+",_="blogPostDetailsFull_xD8n",f=a(7774),N="tags_NBRY",k="tag_F03v";function Z(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(N,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:k},n.createElement(f.Z,{name:t,permalink:a}))}))))}var P="image_9q7L";var C=function(e){var t=e.author,a=t.name,l=t.title,r=t.url,i=t.imageURL;return n.createElement("div",{className:"avatar margin-bottom--sm"},i&&n.createElement(m.Z,{className:"avatar__photo-link avatar__photo",href:r},n.createElement("img",{className:P,src:i,alt:a})),a&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(m.Z,{href:r,itemProp:"url"},n.createElement("span",{itemProp:"name"},a))),l&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},l)))},L="authorCol_8c0z";function T(e){var t=e.authors,a=e.assets;return 0===t.length?null:n.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map((function(e,t){var r;return n.createElement("div",{className:(0,l.Z)("col col--6",L),key:t},n.createElement(C,{author:Object.assign({},e,{imageURL:null!=(r=a.authorsImageUrls[t])?r:e.imageURL})}))})))}var w=function(e){var t,a,g,d,u=(g=(0,s.c2)().selectMessage,function(e){var t=Math.ceil(e);return g(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),p=(0,o.C)().withBaseUrl,v=e.children,f=e.frontMatter,N=e.assets,k=e.metadata,P=e.truncated,C=e.isBlogPostPage,L=void 0!==C&&C,w=k.date,x=k.formattedDate,y=k.permalink,H=k.tags,I=k.readingTime,M=k.title,U=k.editUrl,B=k.authors,A=null!=(t=N.image)?t:f.image,R=!L&&P,F=H.length>0;return n.createElement("article",{className:L?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(d=L?"h1":"h2",n.createElement("header",null,n.createElement(d,{className:E,itemProp:"headline"},L?M:n.createElement(m.Z,{itemProp:"url",to:y},M)),n.createElement("div",{className:(0,l.Z)(b,"margin-vert--md")},n.createElement("time",{dateTime:w,itemProp:"datePublished"},x),void 0!==I&&n.createElement(n.Fragment,null," \xb7 ",u(I))),n.createElement(T,{authors:B,assets:N}))),A&&n.createElement("meta",{itemProp:"image",content:p(A,{absolute:!0})}),n.createElement("div",{className:"markdown",itemProp:"articleBody"},n.createElement(r.Zo,{components:c.Z},v)),(F||P)&&n.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",(a={},a[_]=L,a))},F&&n.createElement("div",{className:(0,l.Z)("col",{"col--9":R})},n.createElement(Z,{tags:H})),L&&U&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(h,{editUrl:U})),R&&n.createElement("div",{className:(0,l.Z)("col text--right",{"col--3":F})},n.createElement(m.Z,{to:k.permalink,"aria-label":"Read more about "+M},n.createElement("b",null,n.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},9360:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var n=a(7294),l=a(1217),r=a(8665),i=a(8902),m=a(5999),o=a(9960);var s=function(e){var t=e.nextItem,a=e.prevItem;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,m.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(o.Z,{className:"pagination-nav__link",to:a.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(m.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",a.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&n.createElement(o.Z,{className:"pagination-nav__link",to:t.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(m.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")),n.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))},c=a(3810),g=a(4853);var d=function(e){var t,a=e.content,m=e.sidebar,o=a.frontMatter,d=a.assets,u=a.metadata,p=u.title,v=u.description,h=u.nextItem,E=u.prevItem,b=u.date,_=u.tags,f=u.authors,N=o.hide_table_of_contents,k=o.keywords,Z=o.toc_min_heading_level,P=o.toc_max_heading_level,C=null!=(t=d.image)?t:o.image;return n.createElement(r.Z,{wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogPostPage,sidebar:m,toc:!N&&a.toc&&a.toc.length>0?n.createElement(g.Z,{toc:a.toc,minHeadingLevel:Z,maxHeadingLevel:P}):void 0},n.createElement(l.Z,{title:p,description:v,keywords:k,image:C},n.createElement("meta",{property:"og:type",content:"article"}),n.createElement("meta",{property:"article:published_time",content:b}),f.some((function(e){return e.url}))&&n.createElement("meta",{property:"article:author",content:f.map((function(e){return e.url})).filter(Boolean).join(",")}),_.length>0&&n.createElement("meta",{property:"article:tag",content:_.map((function(e){return e.label})).join(",")})),n.createElement(i.Z,{frontMatter:o,assets:d,metadata:u,isBlogPostPage:!0},n.createElement(a,null)),(h||E)&&n.createElement(s,{nextItem:h,prevItem:E}))}},4853:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(7462),l=a(3366),r=a(7294),i=a(6010),m=a(3810),o=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function s(e){var t=e.toc,a=e.className,n=e.linkClassName,l=e.isChild;return t.length?r.createElement("ul",{className:l?void 0:a},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(s,{isChild:!0,toc:e.children,className:a,linkClassName:n}))}))):null}function c(e){var t=e.toc,a=e.className,i=void 0===a?"table-of-contents table-of-contents__left-border":a,c=e.linkClassName,g=void 0===c?"table-of-contents__link":c,d=e.linkActiveClassName,u=void 0===d?void 0:d,p=e.minHeadingLevel,v=e.maxHeadingLevel,h=(0,l.Z)(e,o),E=(0,m.LU)(),b=null!=p?p:E.tableOfContents.minHeadingLevel,_=null!=v?v:E.tableOfContents.maxHeadingLevel,f=(0,m.DA)({toc:t,minHeadingLevel:b,maxHeadingLevel:_}),N=(0,r.useMemo)((function(){if(g&&u)return{linkClassName:g,linkActiveClassName:u,minHeadingLevel:b,maxHeadingLevel:_}}),[g,u,b,_]);return(0,m.Si)(N),r.createElement(s,(0,n.Z)({toc:f,className:i,linkClassName:g},h))}var g="tableOfContents_vrFS",d=["className"];var u=function(e){var t=e.className,a=(0,l.Z)(e,d);return r.createElement("div",{className:(0,i.Z)(g,"thin-scrollbar",t)},r.createElement(c,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}}}]);