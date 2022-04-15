"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[525],{8665:function(e,t,a){a.d(t,{Z:function(){return E}});var r=a(102),n=a(7294),l=a(6010),i=a(3570),m=a(9960),c="sidebar_a9qW",s="sidebarItemTitle_uKok",o="sidebarItemList_Kvuv",u="sidebarItem_CF0Q",d="sidebarItemLink_miNk",g="sidebarItemLinkActive_RRTD",h=a(5999);function p(e){var t=e.sidebar;return 0===t.items.length?null:n.createElement("nav",{className:(0,l.Z)(c,"thin-scrollbar"),"aria-label":(0,h.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(s,"margin-bottom--md")},t.title),n.createElement("ul",{className:o},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:u},n.createElement(m.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:g},e.title))}))))}var v=["sidebar","toc","children"];function E(e){var t=e.sidebar,a=e.toc,m=e.children,c=(0,r.Z)(e,v),s=t&&t.items.length>0;return n.createElement(i.Z,c,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},s&&n.createElement("aside",{className:"col col--3"},n.createElement(p,{sidebar:t})),n.createElement("main",{className:(0,l.Z)("col",{"col--7":s,"col--9 col--offset-1":!s}),itemScope:!0,itemType:"http://schema.org/Blog"},m),a&&n.createElement("div",{className:"col col--2"},a))))}},8902:function(e,t,a){a.d(t,{Z:function(){return R}});var r=a(7294),n=a(6010),l=a(5999),i=a(9960),m=a(4996),c=a(8472),s=a(8780),o=a(4458),u=a(3117),d=a(102),g="iconEdit_dcUD",h=["className"];function p(e){var t=e.className,a=(0,d.Z)(e,h);return r.createElement("svg",(0,u.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,n.Z)(g,t),"aria-hidden":"true"},a),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function v(e){var t=e.editUrl;return r.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:c.kM.common.editThisPage},r.createElement(p,null),r.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var E="blogPostTitle_rzP5",f="blogPostData_Zg1s",b="blogPostDetailsFull_h6_j",Z=a(7774),N="tags_XVD_",_="tag_JSN8";function k(e){var t=e.tags;return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,n.Z)(N,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return r.createElement("li",{key:a,className:_},r.createElement(Z.Z,{name:t,permalink:a}))}))))}var T="image_o0gy";function y(e){return e.href?r.createElement(i.Z,e):r.createElement(r.Fragment,null,e.children)}function P(e){var t=e.author,a=t.name,n=t.title,l=t.url,i=t.imageURL,m=t.email,c=l||m&&"mailto:"+m||void 0;return r.createElement("div",{className:"avatar margin-bottom--sm"},i&&r.createElement("span",{className:"avatar__photo-link avatar__photo"},r.createElement(y,{href:c},r.createElement("img",{className:T,src:i,alt:a}))),a&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(y,{href:c,itemProp:"url"},r.createElement("span",{itemProp:"name"},a))),n&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},n)))}var L="authorCol_FlmR",w="imageOnlyAuthorRow_trpF",C="imageOnlyAuthorCol_S2np";function I(e){var t=e.authors,a=e.assets;if(0===t.length)return null;var l=t.every((function(e){return!e.name}));return r.createElement("div",{className:(0,n.Z)("margin-top--md margin-bottom--sm",l?w:"row")},t.map((function(e,t){var i;return r.createElement("div",{className:(0,n.Z)(!l&&"col col--6",l?C:L),key:t},r.createElement(P,{author:Object.assign({},e,{imageURL:null!=(i=a.authorsImageUrls[t])?i:e.imageURL})}))})))}function R(e){var t,a,u=(a=(0,c.c2)().selectMessage,function(e){var t=Math.ceil(e);return a(t,(0,l.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),d=(0,m.C)().withBaseUrl,g=e.children,h=e.frontMatter,p=e.assets,Z=e.metadata,N=e.truncated,_=e.isBlogPostPage,T=void 0!==_&&_,y=Z.date,P=Z.formattedDate,L=Z.permalink,w=Z.tags,C=Z.readingTime,R=Z.title,x=Z.editUrl,A=Z.authors,U=null!=(t=p.image)?t:h.image,D=!T&&N,F=w.length>0,O=T?"h1":"h2";return r.createElement("article",{className:T?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},r.createElement("header",null,r.createElement(O,{className:E,itemProp:"headline"},T?R:r.createElement(i.Z,{itemProp:"url",to:L},R)),r.createElement("div",{className:(0,n.Z)(f,"margin-vert--md")},r.createElement("time",{dateTime:y,itemProp:"datePublished"},P),void 0!==C&&r.createElement(r.Fragment,null," \xb7 ",u(C))),r.createElement(I,{authors:A,assets:p})),U&&r.createElement("meta",{itemProp:"image",content:d(U,{absolute:!0})}),r.createElement("div",{id:T?s.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},r.createElement(o.Z,null,g)),(F||N)&&r.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",T&&b)},F&&r.createElement("div",{className:(0,n.Z)("col",{"col--9":D})},r.createElement(k,{tags:w})),T&&x&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(v,{editUrl:x})),D&&r.createElement("div",{className:(0,n.Z)("col text--right",{"col--3":F})},r.createElement(i.Z,{to:Z.permalink,"aria-label":(0,l.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:R})},r.createElement("b",null,r.createElement(l.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},4458:function(e,t,a){a.d(t,{Z:function(){return y}});var r=a(7294),n=a(3905),l=a(3117),i=a(102),m=a(5742),c=["mdxType","originalType"];var s=a(254);var o=a(9960);var u=a(6010),d=a(8472),g="details_BAp3";function h(e){var t=Object.assign({},e);return r.createElement(d.PO,(0,l.Z)({},t,{className:(0,u.Z)("alert alert--info",g,t.className)}))}var p=a(5999),v="anchorWithStickyNavbar_mojV",E="anchorWithHideOnScrollNavbar_R0VQ",f=["as","id"],b=["as"];function Z(e){var t=e.as,a=e.id,n=(0,i.Z)(e,f),m=(0,d.LU)().navbar.hideOnScroll;return a?r.createElement(t,(0,l.Z)({},n,{className:(0,u.Z)("anchor",m?E:v),id:a}),n.children,r.createElement("a",{className:"hash-link",href:"#"+a,title:(0,p.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):r.createElement(t,n)}function N(e){var t=e.as,a=(0,i.Z)(e,b);return"h1"===t?r.createElement("h1",(0,l.Z)({},a,{id:void 0}),a.children):r.createElement(Z,(0,l.Z)({as:t},a))}function _(e){return r.createElement(N,e)}var k="img_E7b_";var T={head:function(e){var t=r.Children.map(e.children,(function(e){return function(e){var t,a;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(a=e.props)&&a.originalType){var n=e.props,l=(n.mdxType,n.originalType,(0,i.Z)(n,c));return r.createElement(e.props.originalType,l)}return e}(e)}));return r.createElement(m.Z,e,t)},code:function(e){var t=["a","b","big","i","span","em","strong","sup","sub","small"];return r.Children.toArray(e.children).every((function(e){return"string"==typeof e&&!e.includes("\n")||(0,r.isValidElement)(e)&&t.includes(e.props.mdxType)}))?r.createElement("code",e):r.createElement(s.Z,e)},a:function(e){return r.createElement(o.Z,e)},pre:function(e){var t;return r.createElement(s.Z,(0,r.isValidElement)(e.children)&&"code"===e.children.props.originalType?null==(t=e.children)?void 0:t.props:Object.assign({},e))},details:function(e){var t=r.Children.toArray(e.children),a=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),n=r.createElement(r.Fragment,null,t.filter((function(e){return e!==a})));return r.createElement(h,(0,l.Z)({},e,{summary:a}),n)},ul:function(e){return r.createElement("ul",(0,l.Z)({},e,{className:(t=e.className,(0,u.Z)(t,(null==t?void 0:t.includes("contains-task-list"))&&"contains-task-list_tsSF"))}));var t},img:function(e){return r.createElement("img",(0,l.Z)({loading:"lazy"},e,{className:(t=e.className,(0,u.Z)(t,k))}));var t},h1:function(e){return r.createElement(_,(0,l.Z)({as:"h1"},e))},h2:function(e){return r.createElement(_,(0,l.Z)({as:"h2"},e))},h3:function(e){return r.createElement(_,(0,l.Z)({as:"h3"},e))},h4:function(e){return r.createElement(_,(0,l.Z)({as:"h4"},e))},h5:function(e){return r.createElement(_,(0,l.Z)({as:"h5"},e))},h6:function(e){return r.createElement(_,(0,l.Z)({as:"h6"},e))}};function y(e){var t=e.children;return r.createElement(n.Zo,{components:T},t)}},1750:function(e,t,a){a.d(t,{Z:function(){return l}});var r=a(7294),n=a(9960);function l(e){var t=e.permalink,a=e.title,l=e.subLabel;return r.createElement(n.Z,{className:"pagination-nav__link",to:t},l&&r.createElement("div",{className:"pagination-nav__sublabel"},l),r.createElement("div",{className:"pagination-nav__label"},a))}},7774:function(e,t,a){a.d(t,{Z:function(){return s}});var r=a(7294),n=a(6010),l=a(9960),i="tag_hD8n",m="tagRegular_D6E_",c="tagWithCount_i0QQ";function s(e){var t=e.permalink,a=e.name,s=e.count;return r.createElement(l.Z,{href:t,className:(0,n.Z)(i,s?c:m)},a,s&&r.createElement("span",null,s))}}}]);