"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[64212],{69473:(e,t,r)=>{r.d(t,{in:()=>c,OU:()=>N,Ki:()=>k,kJ:()=>d,x:()=>i,e7:()=>u,J_:()=>O,Gx:()=>x});var n=r(62540),o=r(63696),a=r(2550),l=r(15789);function i(){var e;let t=(0,l.A)(),r=null==t?void 0:null===(e=t.data)||void 0===e?void 0:e.blogMetadata;if(!r)throw Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return r}let s=o.createContext(null);function c({children:e,content:t,isBlogPostPage:r=!1}){let a=function({content:e,isBlogPostPage:t}){return(0,o.useMemo)(()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,toc:e.toc,isBlogPostPage:t}),[e,t])}({content:t,isBlogPostPage:r});return(0,n.jsx)(s.Provider,{value:a,children:e})}function u(){let e=(0,o.useContext)(s);if(null===e)throw new a.dV("BlogPostProvider");return e}var p=r(27167),b=r(99468);function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}let m=e=>new Date(e).toISOString();function f(e){let t=e.map(j);return{author:1===t.length?t[0]:t}}function g(e,t,r){return e?{image:function({imageUrl:e,caption:t}){return{"@type":"ImageObject","@id":e,url:e,contentUrl:e,caption:t}}({imageUrl:t(e,{absolute:!0}),caption:`title image for the blog post: ${r}`})}:{}}function d(e){let{siteConfig:t}=(0,b.A)(),{withBaseUrl:r}=(0,p.hH)(),{metadata:{blogDescription:n,blogTitle:o,permalink:a}}=e,l=`${t.url}${a}`;return{"@context":"https://schema.org","@type":"Blog","@id":l,mainEntityOfPage:l,headline:o,description:n,blogPost:e.items.map(e=>(function(e,t,r){var n,o;let{assets:a,frontMatter:l,metadata:i}=e,{date:s,title:c,description:u,lastUpdatedAt:p}=i,b=null!==(n=a.image)&&void 0!==n?n:l.image,d=null!==(o=l.keywords)&&void 0!==o?o:[],O=`${t.url}${i.permalink}`,j=p?m(p):void 0;return h({"@type":"BlogPosting","@id":O,mainEntityOfPage:O,url:O,headline:c,name:c,description:u,datePublished:s},j?{dateModified:j}:{},f(i.authors),g(b,r,c),d?{keywords:d}:{})})(e.content,t,r))}}function O(){var e,t,r,n;let o=i(),{assets:a,metadata:l}=u(),{siteConfig:s}=(0,b.A)(),{withBaseUrl:c}=(0,p.hH)(),{date:d,title:O,description:j,frontMatter:y,lastUpdatedAt:v}=l,w=null!==(e=a.image)&&void 0!==e?e:y.image,P=null!==(t=y.keywords)&&void 0!==t?t:[],x=v?m(v):void 0,k=`${s.url}${l.permalink}`;return r=h({"@context":"https://schema.org","@type":"BlogPosting","@id":k,mainEntityOfPage:k,url:k,headline:O,name:O,description:j,datePublished:d},x?{dateModified:x}:{},f(l.authors),g(w,c,O),P?{keywords:P}:{}),n=n={isPartOf:{"@type":"Blog","@id":`${s.url}${o.blogBasePath}`,name:o.blogTitle}},Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(n)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))}),r}function j(e){return h({"@type":"Person"},e.name?{name:e.name}:{},e.title?{description:e.title}:{},e.url?{url:e.url}:{},e.email?{email:e.email}:{},e.imageURL?{image:e.imageURL}:{})}var y=r(49519),v=r(36372),w=r(66904),P=r(3107);function x(e){let{pathname:t}=(0,y.zy)();return(0,o.useMemo)(()=>e.filter(e=>!e.unlisted||!!(0,P.ys)(e.permalink,t)),[e,t])}function k(e){let t=Object.entries((0,w.$z)(e,e=>`${new Date(e.date).getFullYear()}`));return t.reverse(),t}function N({items:e,ulClassName:t,liClassName:r,linkClassName:o,linkActiveClassName:a}){return(0,n.jsx)("ul",{className:t,children:e.map(e=>(0,n.jsx)("li",{className:r,children:(0,n.jsx)(v.A,{isNavLink:!0,to:e.permalink,className:o,activeClassName:a,children:e.title})},e.permalink))})}},6205:(e,t,r)=>{r.d(t,{A:()=>d});var n=r(62540);r(63696);var o=r(11750),a=r(36372);let l=function(e){var t,r;return(0,n.jsxs)("svg",(t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},e),r=r={children:[(0,n.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,n.jsx)("path",{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"}),(0,n.jsx)("path",{d:"M3.6 9h16.8"}),(0,n.jsx)("path",{d:"M3.6 15h16.8"}),(0,n.jsx)("path",{d:"M11.5 3a17 17 0 0 0 0 18"}),(0,n.jsx)("path",{d:"M12.5 3a17 17 0 0 1 0 18"})]},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}),t))},i="authorSocialLink_hEWM",s={twitter:{Icon:function(e){var t,r;return(0,n.jsx)("svg",(t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({viewBox:"0 0 256 209",width:"1em",height:"1em",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid"},e),r=r={children:(0,n.jsx)("path",{d:"M256 25.45c-9.42 4.177-19.542 7-30.166 8.27 10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52 0 4.117.465 8.125 1.36 11.97-43.65-2.191-82.35-23.1-108.255-54.876-4.52 7.757-7.11 16.78-7.11 26.404 0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661 0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475-17.975 14.086-40.622 22.483-65.228 22.483-4.24 0-8.42-.249-12.529-.734 23.243 14.902 50.85 23.597 80.51 23.597 96.607 0 149.434-80.031 149.434-149.435 0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45",fill:"#55acee"})},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}),t))},label:"Twitter"},github:{Icon:function(e){var t,r;return(0,n.jsx)("svg",(t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({viewBox:"0 0 256 250",width:"1em",height:"1em"},e),r=r={className:(0,o.A)(e.className,"githubSvg_jqE4"),xmlns:"http://www.w3.org/2000/svg",style:{"--dark":"#000","--light":"#fff"},preserveAspectRatio:"xMidYMid",children:(0,n.jsx)("path",{d:"M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z"})},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}),t))},label:"GitHub"},stackoverflow:{Icon:function(e){var t,r;return(0,n.jsxs)("svg",(t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 169.61 200",width:"1em",height:"1em"},e),r=r={children:[(0,n.jsx)("path",{d:"M140.44 178.38v-48.65h21.61V200H0v-70.27h21.61v48.65z",fill:"#bcbbbb"}),(0,n.jsx)("path",{d:"M124.24 140.54l4.32-16.22-86.97-17.83-3.78 17.83zM49.7 82.16L130.72 120l7.56-16.22-81.02-37.83zm22.68-40l68.06 57.3 11.35-13.51-68.6-57.3-11.35 13.51zM116.14 0l-14.59 10.81 53.48 71.89 14.58-10.81zM37.81 162.16h86.43v-16.21H37.81z",fill:"#f48024"})]},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}),t))},label:"Stack Overflow"},linkedin:{Icon:function(e){var t,r;return(0,n.jsx)("svg",(t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({width:"1em",height:"1em",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid",viewBox:"0 0 256 256"},e),r=r={children:(0,n.jsx)("path",{d:"M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453",fill:"#0A66C2"})},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}),t))},label:"LinkedIn"},x:{Icon:function(e){var t,r;return(0,n.jsx)("svg",(t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 1200 1227"},e),r=r={className:(0,o.A)(e.className,"xSvg_Q0g7"),style:{"--dark":"#000","--light":"#fff"},children:(0,n.jsx)("path",{d:"M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"})},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}),t))},label:"X"}};function c({platform:e,link:t}){var r;let{Icon:c,label:u}=null!==(r=s[e])&&void 0!==r?r:{Icon:l,label:e};return(0,n.jsx)(a.A,{className:i,href:t,title:u,children:(0,n.jsx)(c,{className:(0,o.A)(i)})})}function u({author:e}){var t;let r=Object.entries(null!==(t=e.socials)&&void 0!==t?t:{});return(0,n.jsx)("div",{className:"authorSocials_tPnL",children:r.map(([e,t])=>(0,n.jsx)(c,{platform:e,link:t},e))})}var p=r(37425);let b={authorImage:"authorImage_p8ow","author-as-h1":"author-as-h1_Pd3R","author-as-h2":"author-as-h2_UaZL",authorDetails:"authorDetails_dWdF",authorName:"authorName_Y8Hr",authorTitle:"authorTitle_Slpj",authorBlogPostCount:"authorBlogPostCount_FxU_"};function h(e){return e.href?(0,n.jsx)(a.A,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({},e)):(0,n.jsx)(n.Fragment,{children:e.children})}function m({title:e}){return(0,n.jsx)("small",{className:b.authorTitle,title:e,children:e})}function f({name:e,as:t}){return t?(0,n.jsx)(p.A,{as:t,className:b.authorName,children:e}):(0,n.jsx)("span",{className:b.authorName,children:e})}function g({count:e}){return(0,n.jsx)("span",{className:(0,o.A)(b.authorBlogPostCount),children:e})}function d({as:e,author:t,className:r,count:a}){let{name:l,title:i,url:s,imageURL:c,email:p,page:d}=t,O=(null==d?void 0:d.permalink)||s||p&&`mailto:${p}`||void 0;return(0,n.jsxs)("div",{className:(0,o.A)("avatar margin-bottom--sm",r,b[`author-as-${e}`]),children:[c&&(0,n.jsx)(h,{href:O,className:"avatar__photo-link",children:(0,n.jsx)("img",{className:(0,o.A)("avatar__photo",b.authorImage),src:c,alt:l})}),(l||i)&&(0,n.jsxs)("div",{className:(0,o.A)("avatar__intro",b.authorDetails),children:[(0,n.jsxs)("div",{className:"avatar__name",children:[l&&(0,n.jsx)(h,{href:O,children:(0,n.jsx)(f,{name:l,as:e})}),void 0!==a&&(0,n.jsx)(g,{count:a})]}),!!i&&(0,n.jsx)(m,{title:i}),(0,n.jsx)(u,{author:t})]})]})}},34917:(e,t,r)=>{r.r(t),r.d(t,{default:()=>f});var n=r(62540);r(63696);var o=r(11750),a=r(37554),l=r(12653),i=r(13239),s=r(94389),c=r(3113),u=r(37425),p=r(6205);let b={authorListItem:"authorListItem_Y1Zl"};function h({author:e}){return(0,n.jsx)("li",{className:b.authorListItem,children:(0,n.jsx)(p.A,{as:"h2",author:e,count:e.count})})}function m({authors:e}){return(0,n.jsx)("section",{className:(0,o.A)("margin-vert--lg",b.authorsListSection),children:(0,n.jsx)("ul",{children:e.map(e=>(0,n.jsx)(h,{author:e},e.key))})})}function f({authors:e,sidebar:t}){let r=(0,i.uz)();return(0,n.jsxs)(a.e3,{className:(0,o.A)(l.G.wrapper.blogPages,l.G.page.blogAuthorsListPage),children:[(0,n.jsx)(a.be,{title:r}),(0,n.jsx)(c.A,{tag:"blog_authors_list"}),(0,n.jsxs)(s.A,{sidebar:t,children:[(0,n.jsx)(u.A,{as:"h1",children:r}),(0,n.jsx)(m,{authors:e})]})]})}},94389:(e,t,r)=>{r.d(t,{A:()=>v});var n=r(62540),o=r(63696),a=r(11750),l=r(99849),i=r(85975),s=r(81912),c=r(69473),u=r(25436),p=r(37425);function b({year:e,yearGroupHeadingClassName:t,children:r}){return(0,n.jsxs)("div",{role:"group",children:[(0,n.jsx)(p.A,{as:"h3",className:t,children:e}),r]})}let h=(0,o.memo)(function({items:e,yearGroupHeadingClassName:t,ListComponent:r}){if(!(0,u.p)().blog.sidebar.groupByYear)return(0,n.jsx)(r,{items:e});{let o=(0,c.Ki)(e);return(0,n.jsx)(n.Fragment,{children:o.map(([e,o])=>(0,n.jsx)(b,{year:e,yearGroupHeadingClassName:t,children:(0,n.jsx)(r,{items:o})},e))})}}),m=({items:e})=>(0,n.jsx)(c.OU,{items:e,ulClassName:(0,a.A)("sidebarItemList_OSkG","clean-list"),liClassName:"sidebarItem_WJ0y",linkClassName:"sidebarItemLink_Qrfg",linkActiveClassName:"sidebarItemLinkActive_nUeK"}),f=(0,o.memo)(function({sidebar:e}){let t=(0,c.Gx)(e.items);return(0,n.jsx)("aside",{className:"col col--3",children:(0,n.jsxs)("nav",{className:(0,a.A)("sidebar_P3nc","thin-scrollbar"),"aria-label":(0,s.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,n.jsx)("div",{className:(0,a.A)("sidebarItemTitle_VrjY","margin-bottom--md"),children:e.title}),(0,n.jsx)(h,{items:t,ListComponent:m,yearGroupHeadingClassName:"yearGroupHeading_lECJ"})]})})});var g=r(2454);let d=({items:e})=>(0,n.jsx)(c.OU,{items:e,ulClassName:"menu__list",liClassName:"menu__list-item",linkClassName:"menu__link",linkActiveClassName:"menu__link--active"});function O({sidebar:e}){let t=(0,c.Gx)(e.items);return(0,n.jsx)(h,{items:t,ListComponent:d,yearGroupHeadingClassName:"yearGroupHeading_Ruz9"})}let j=(0,o.memo)(function(e){return(0,n.jsx)(g.GX,{component:O,props:e})});function y({sidebar:e}){let t=(0,i.l)();return(null==e?void 0:e.items.length)?"mobile"===t?(0,n.jsx)(j,{sidebar:e}):(0,n.jsx)(f,{sidebar:e}):null}function v(e){var t,r;let{sidebar:o,toc:i,children:s}=e,c=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,["sidebar","toc","children"]),u=o&&o.items.length>0;return(0,n.jsx)(l.A,(t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({},c),r=r={children:(0,n.jsx)("div",{className:"container margin-vert--lg",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)(y,{sidebar:o}),(0,n.jsx)("main",{className:(0,a.A)("col",{"col--7":u,"col--9 col--offset-1":!u}),children:s}),i&&(0,n.jsx)("div",{className:"col col--2",children:i})]})})},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}),t))}},13239:(e,t,r)=>{r.d(t,{Y4:()=>p,ZD:()=>i,np:()=>u,uz:()=>c,wI:()=>s});var n=r(62540);r(63696);var o=r(81912),a=r(13111);function l(){let{selectMessage:e}=(0,a.W)();return t=>e(t,(0,o.T)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}function i(e){let t=l();return(0,o.T)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function s(e){let t=l();return(0,o.T)({id:"theme.blog.author.pageTitle",description:"The title of the page for a blog author",message:"{authorName} - {nPosts}"},{nPosts:t(e.count),authorName:e.name||e.key})}let c=()=>(0,o.T)({id:"theme.blog.authorsList.pageTitle",message:"Authors",description:"The title of the authors page"});function u(){return(0,n.jsx)(o.A,{id:"theme.blog.authorsList.viewAll",description:"The label of the link targeting the blog authors page",children:"View all authors"})}function p(){return(0,n.jsx)(o.A,{id:"theme.blog.author.noPosts",description:"The text for authors with 0 blog post",children:"This author has not written any posts yet."})}},13111:(e,t,r)=>{r.d(t,{W:()=>s});var n=r(63696),o=r(99468);let a=["zero","one","two","few","many","other"];function l(e){return a.filter(t=>e.includes(t))}let i={locale:"en",pluralForms:l(["one","other"]),select:e=>1===e?"one":"other"};function s(){let e=function(){let{i18n:{currentLocale:e}}=(0,o.A)();return(0,n.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:l(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),i}},[e])}();return{selectMessage:(t,r)=>(function(e,t,r){let n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);let o=r.select(t);return n[Math.min(r.pluralForms.indexOf(o),n.length-1)]})(r,t,e)}}}}]);