"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[39391],{80282:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/social-card-7e038d19ea67c686e90e1f599f7256d0.png"},61132:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(24246),s=(n(27378),n(40624));const a={tabItem:"tabItem_pnkT"};function o({children:e,hidden:t,className:n}){return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.Z)(a.tabItem,n),hidden:t,children:e})}},97555:(e,t,n)=>{n.d(t,{Z:()=>S});var r=n(24246),s=n(27378),a=n(40624),o=n(75527),i=n(3620),l=n(44479),c=n(62821),u=n(52196),d=n(53589);function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function g(e){var t,n;return null!==(n=null===(t=s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===t?void 0:t.filter(Boolean))&&void 0!==n?n:[]}function b(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=null!=t?t:function(e){return g(e).map((({props:{value:e,label:t,attributes:n,default:r}})=>({value:e,label:t,attributes:n,default:r})))}(n);return function(e){const t=(0,u.lx)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m({value:e,tabValues:t}){return t.some((t=>t.value===e))}function f({queryString:e=!1,groupId:t}){const n=(0,i.k6)(),r=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t}),a=(0,c._X)(r),o=(0,s.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace(p(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){h(e,t,n[t])}))}return e}({},n.location),{search:t.toString()}))}),[r,n]);return[a,o]}function j(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=b(e),[o,i]=(0,s.useState)((()=>function({defaultValue:e,tabValues:t}){if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!m({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var n;const r=null!==(n=t.find((e=>e.default)))&&void 0!==n?n:t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[c,u]=f({queryString:n,groupId:r}),[h,p]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[n,r]=(0,d.Nk)(t);return[n,(0,s.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:r}),g=(()=>{const e=null!=c?c:h;return m({value:e,tabValues:a})?e:null})();(0,l.Z)((()=>{g&&i(g)}),[g]);return{selectedValue:o,selectValue:(0,s.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),p(e)}),[u,p,a]),tabValues:a}}var x=n(29088);const y={tabList:"tabList_Qoir",tabItem:"tabItem_AQgk"};function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){w(e,t,n[t])}))}return e}function O(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function k({className:e,block:t,selectedValue:n,selectValue:s,tabValues:i}){const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),u=e=>{const t=e.currentTarget,r=l.indexOf(t),a=i[r].value;a!==n&&(c(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;var n;t=null!==(n=l[r])&&void 0!==n?n:l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;var r;t=null!==(r=l[n])&&void 0!==r?r:l[l.length-1];break}}null==t||t.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},e),children:i.map((({value:e,label:t,attributes:s})=>(0,r.jsx)("li",O(v({role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,ref:e=>l.push(e),onKeyDown:d,onClick:u},s),{className:(0,a.Z)("tabs__item",y.tabItem,null==s?void 0:s.className,{"tabs__item--active":n===e}),children:null!=t?t:e}),e)))})}function P({lazy:e,children:t,selectedValue:n}){const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=o.find((e=>e.props.value===n));return e?(0,s.cloneElement)(e,{className:(0,a.Z)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function I(e){const t=j(e);return(0,r.jsxs)("div",{className:(0,a.Z)("tabs-container",y.tabList),children:[(0,r.jsx)(k,v({},t,e)),(0,r.jsx)(P,v({},t,e))]})}function S(e){const t=(0,x.Z)();return(0,r.jsx)(I,O(v({},e),{children:g(e.children)}),String(t))}},6698:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(24246),s=(n(27378),n(40624));const a={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function c({children:e,minHeight:t,url:n="http://localhost:3000",style:o,bodyStyle:c}){return(0,r.jsxs)("div",{className:a.browserWindow,style:l(i({},o),{minHeight:t}),children:[(0,r.jsxs)("div",{className:a.browserWindowHeader,children:[(0,r.jsxs)("div",{className:a.buttons,children:[(0,r.jsx)("span",{className:a.dot,style:{background:"#f25f58"}}),(0,r.jsx)("span",{className:a.dot,style:{background:"#fbbe3c"}}),(0,r.jsx)("span",{className:a.dot,style:{background:"#58cb42"}})]}),(0,r.jsx)("div",{className:(0,s.Z)(a.browserWindowAddressBar,"text--truncate"),children:n}),(0,r.jsx)("div",{className:a.browserWindowMenuIcon,children:(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{className:a.bar}),(0,r.jsx)("span",{className:a.bar}),(0,r.jsx)("span",{className:a.bar})]})})]}),(0,r.jsx)("div",{className:a.browserWindowBody,style:c,children:e})]})}},76398:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/social-card-7e038d19ea67c686e90e1f599f7256d0.png"},32537:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>l,metadata:()=>u,toc:()=>h});var r=n(24246),s=n(71670),a=n(6698),o=n(97555),i=n(61132);const l={title:"Docusaurus 2.3",authors:["slorber"],tags:["release"],image:"./img/social-card.png",date:new Date("2023-01-27T00:00:00.000Z")},c=void 0,u={permalink:"/blog/releases/2.3",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/releases/2.3/index.mdx",source:"@site/blog/releases/2.3/index.mdx",title:"Docusaurus 2.3",description:"We are happy to announce Docusaurus 2.3.",date:"2023-01-27T00:00:00.000Z",tags:[{inline:!1,label:"Release",permalink:"/blog/tags/release",description:"Blog posts about Docusaurus' new releases"}],readingTime:2.89,hasTruncateMarker:!0,authors:[{name:"S\xe9bastien Lorber",title:"Docusaurus maintainer, This Week In React editor",url:"https://thisweekinreact.com",socials:{x:"https://x.com/sebastienlorber",linkedin:"https://www.linkedin.com/in/sebastienlorber/",github:"https://github.com/slorber",newsletter:"https://thisweekinreact.com"},imageURL:"https://github.com/slorber.png",key:"slorber"}],frontMatter:{title:"Docusaurus 2.3",authors:["slorber"],tags:["release"],image:"./img/social-card.png",date:"2023-01-27T00:00:00.000Z"},unlisted:!1,lastUpdatedAt:1721903674e3,lastUpdatedBy:"ozaki",prevItem:{title:"Docusaurus 2.4",permalink:"/blog/releases/2.4"},nextItem:{title:"Docusaurus 2.2",permalink:"/blog/releases/2.2"}},d={image:n(80282).Z,authorsImageUrls:[void 0]},h=[{value:"Highlights",id:"highlights",level:2},{value:"Google Tag Manager plugin",id:"google-tag-manager-plugin",level:3},{value:"Tabs Query String Support",id:"tabs-query-string-support",level:3},{value:"Nested admonitions",id:"nested-admonitions",level:3},{value:"Blog <code>createFeedItems</code>",id:"blog-createfeeditems",level:3},{value:"Translations",id:"translations",level:3},{value:"Other changes",id:"other-changes",level:2}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["We are happy to announce ",(0,r.jsx)(t.strong,{children:"Docusaurus 2.3"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["The upgrade should be easy: as explained in our ",(0,r.jsx)(t.a,{href:"/community/release-process",children:"release process documentation"}),", minor versions respect ",(0,r.jsx)(t.a,{href:"https://semver.org/",children:"Semantic Versioning"}),"."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Docusaurus 2.2 social card",src:n(76398).Z+"",width:"1200",height:"600"})}),"\n",(0,r.jsx)(t.h2,{id:"highlights",children:"Highlights"}),"\n",(0,r.jsx)(t.h3,{id:"google-tag-manager-plugin",children:"Google Tag Manager plugin"}),"\n",(0,r.jsx)(t.p,{children:"Google Tag Manager is a tag management system that allows great flexibility. It enables analytics and marketing teams to easily load other third-party trackers and fire analytics tags."}),"\n",(0,r.jsxs)(t.p,{children:["We now have a ",(0,r.jsx)(t.a,{href:"/docs/api/plugins/@docusaurus/plugin-google-tag-manager/",children:(0,r.jsx)(t.code,{children:"@docusaurus/plugin-google-tag-manager"})})," package that you can use alongside or as an alternative to the existing ",(0,r.jsx)(t.a,{href:"/docs/api/plugins/@docusaurus/plugin-google-gtag/",children:"gtag.js plugin"})," (refer to ",(0,r.jsx)(t.a,{href:"https://support.google.com/tagmanager/answer/7582054",children:"this doc"})," to understand when to use which solution)."]}),"\n",(0,r.jsxs)(t.admonition,{title:"Google is sunsetting Universal Analytics",type:"warning",children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://blog.google/products/marketingplatform/analytics/prepare-for-future-with-google-analytics-4/",children:"Google will sunset its Universal Analytics"})," on ",(0,r.jsx)(t.strong,{children:"July 1, 2023"}),", and ask users to migrate to ",(0,r.jsx)(t.strong,{children:"Google Analytics 4"}),"."]}),(0,r.jsxs)(t.p,{children:["Therefore, we are also ",(0,r.jsxs)(t.strong,{children:["deprecating our existing ",(0,r.jsx)(t.a,{href:"/docs/api/plugins/@docusaurus/plugin-google-analytics",children:(0,r.jsx)(t.code,{children:"@docusaurus/plugin-google-analytics"})})]})," package. Docusaurus users should create a new Google Analytics 4 property, and migrate to the ",(0,r.jsx)(t.a,{href:"/docs/api/plugins/@docusaurus/plugin-google-gtag/",children:"gtag.js plugin"}),", or the ",(0,r.jsx)(t.a,{href:"/docs/api/plugins/@docusaurus/plugin-google-tag-manager/",children:"Google Tag Manager plugin"}),". Refer to the ",(0,r.jsx)(t.a,{href:"https://github.com/facebook/docusaurus/issues/7221",children:"dedicated Docusaurus issue"})," for details and questions."]})]}),"\n",(0,r.jsx)(t.h3,{id:"tabs-query-string-support",children:"Tabs Query String Support"}),"\n",(0,r.jsxs)(t.p,{children:["It is now possible to link a selected tab to a query string parameter. When a tab is selected, it will be stored in your browser URL as a ",(0,r.jsx)(t.code,{children:"?qs-param=tab-value"})," search parameter."]}),"\n",(0,r.jsx)(t.p,{children:"This feature allows deep-linking to a specific documentation tab that will pre-selected on page load."}),"\n",(0,r.jsxs)(t.p,{children:["When used alongside the ",(0,r.jsx)(t.code,{children:"groupId"})," prop, the query string tab value takes precedence over the ",(0,r.jsx)(t.code,{children:"localStorage"})," value."]}),"\n",(0,r.jsxs)(t.p,{children:["Make sure to check the ",(0,r.jsx)(t.a,{href:"/docs/markdown-features/tabs#query-string",children:"documentation"})," and the demo below to understand how it works:"]}),"\n","\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'<Tabs groupId="current-os" queryString>\n  <TabItem value="android" label="Android">\n    Android\n  </TabItem>\n  <TabItem value="ios" label="iOS">\n    iOS\n  </TabItem>\n</Tabs>\n'})}),"\n",(0,r.jsx)(a.Z,{children:(0,r.jsxs)(o.Z,{groupId:"current-os",queryString:!0,children:[(0,r.jsx)(i.Z,{value:"android",label:"Android",children:(0,r.jsx)(t.p,{children:"Android"})}),(0,r.jsx)(i.Z,{value:"ios",label:"iOS",children:(0,r.jsx)(t.p,{children:"iOS"})})]})}),"\n",(0,r.jsx)(t.h3,{id:"nested-admonitions",children:"Nested admonitions"}),"\n",(0,r.jsx)(t.p,{children:"It is now possible to nest one admonition within another by adding extra colons for the outer/enclosing admonition:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-md",children:"::::tip[nested admonitions]\n\nYou can now nest one admonition within another!\n\n:::danger\n\nUse this sparingly when it makes sense.\n\n:::\n\n::::\n"})}),"\n",(0,r.jsxs)(t.admonition,{title:"nested admonitions",type:"tip",children:[(0,r.jsx)(t.p,{children:"You can now nest one admonition within another!"}),(0,r.jsx)(t.admonition,{type:"danger",children:(0,r.jsx)(t.p,{children:"Use this sparingly when it makes sense."})})]}),"\n",(0,r.jsxs)(t.h3,{id:"blog-createfeeditems",children:["Blog ",(0,r.jsx)(t.code,{children:"createFeedItems"})]}),"\n",(0,r.jsxs)(t.p,{children:["A new blog plugin option ",(0,r.jsx)(t.a,{href:"/docs/api/plugins/@docusaurus/plugin-content-blog/#CreateFeedItemsFn",children:(0,r.jsx)(t.code,{children:"feedOptions.createFeedItems"})})," gives you more control over the RSS/Atom feed generation. It is now possible to transform/filter/limit feed items through a new callback."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",metastring:'title="docusaurus.config.js"',children:"[\n  '@docusaurus/preset-classic',\n  {\n    blog: {\n      feedOptions: {\n        // highlight-start\n        createFeedItems: async (params) => {\n          const {blogPosts, defaultCreateFeedItems, ...rest} = params;\n          return defaultCreateFeedItems({\n            // keep only the 10 most recent blog posts in the feed\n            blogPosts: blogPosts.filter((item, index) => index < 10),\n            ...rest,\n          });\n        },\n        // highlight-end\n      },\n    },\n  },\n];\n"})}),"\n",(0,r.jsx)(t.h3,{id:"translations",children:"Translations"}),"\n",(0,r.jsx)(t.p,{children:"We added or completed the default theme translation support for multiple languages:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\ud83c\uddf8\ud83c\uddee ",(0,r.jsx)(t.a,{href:"https://github.com/facebook/docusaurus/pull/8541",children:"#8541"})," Slovenian"]}),"\n",(0,r.jsxs)(t.li,{children:["\ud83c\uddf9\ud83c\uddf7 ",(0,r.jsx)(t.a,{href:"https://github.com/facebook/docusaurus/pull/8289",children:"#8289"})," Turkish"]}),"\n",(0,r.jsxs)(t.li,{children:["\ud83c\uddee\ud83c\uddf7 ",(0,r.jsx)(t.a,{href:"https://github.com/facebook/docusaurus/pull/8406",children:"#8406"})," Farsi"]}),"\n",(0,r.jsxs)(t.li,{children:["\ud83c\uddf5\ud83c\uddf1 ",(0,r.jsx)(t.a,{href:"https://github.com/facebook/docusaurus/pull/8525",children:"#8525"})," Polish"]}),"\n",(0,r.jsxs)(t.li,{children:["\ud83c\udde8\ud83c\uddf3 ",(0,r.jsx)(t.a,{href:"https://github.com/facebook/docusaurus/pull/8423",children:"#8423"})," Chinese"]}),"\n",(0,r.jsxs)(t.li,{children:["\ud83c\uddf8\ud83c\uddea ",(0,r.jsx)(t.a,{href:"https://github.com/facebook/docusaurus/pull/8312",children:"#8312"})," Swedish"]}),"\n",(0,r.jsxs)(t.li,{children:["\ud83c\uddfb\ud83c\uddf3 ",(0,r.jsx)(t.a,{href:"https://github.com/facebook/docusaurus/pull/8450",children:"#8450"})," Vietnamese"]}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["Completing theme translations is an ",(0,r.jsx)(t.a,{href:"https://github.com/facebook/docusaurus/issues/3526",children:"ongoing effort"})," and an easy way to contribute to Docusaurus. We add new theme features regularly, for which we often ",(0,r.jsx)(t.a,{href:"https://github.com/facebook/docusaurus/issues/3526",children:"need new translations"}),"."]})}),"\n",(0,r.jsx)(t.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,r.jsx)(t.p,{children:"Other notable changes include:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://github.com/facebook/docusaurus/pull/8463",children:"#8463"})," and ",(0,r.jsx)(t.a,{href:"https://github.com/facebook/docusaurus/pull/8328",children:"#8328"}),": fix some annoying Docusaurus layout issues"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://github.com/facebook/docusaurus/pull/8539",children:"#8539"}),": Algolia plugin ",(0,r.jsx)(t.code,{children:"options.searchPagePath"})," should be correctly applied to search modal footer"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://github.com/facebook/docusaurus/pull/8462",children:"#8462"}),": Algolia plugin now makes it easier to transform displayed search results with custom logic"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://github.com/facebook/docusaurus/pull/8397",children:"#8397"}),": the ",(0,r.jsx)(t.code,{children:"deploy"})," CLI now understands git url ",(0,r.jsx)(t.code,{children:"insteadOf"})," config"]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Check the ",(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.a,{href:"/changelog/2.3.0",children:"2.3.0 changelog entry"})})," for an exhaustive list of changes."]})]})}function g(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},71670:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>o});var r=n(27378);const s={},a=r.createContext(s);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);