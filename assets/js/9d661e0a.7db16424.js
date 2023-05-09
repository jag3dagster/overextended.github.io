"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4764],{9613:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var a=r(9496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),s=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(r),m=n,b=p["".concat(u,".").concat(m)]||p[m]||d[m]||l;return r?a.createElement(b,i(i({ref:t},c),{},{components:r})):a.createElement(b,i({ref:t},c))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7366:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(9496),n=r(5924);const l={tabItem:"tabItem_b204"};function i(e){let{children:t,hidden:r,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,i),hidden:r},t)}},4310:(e,t,r)=>{r.d(t,{Z:()=>N});var a=r(2564),n=r(9496),l=r(5924),i=r(9857),o=r(3442),u=r(4944),s=r(1887),c=r(7130);function p(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function d(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:r}=e;const a=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,l=d(e),[i,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[u,s]=b({queryString:r,groupId:a}),[p,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,c.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:a}),v=(()=>{const e=u??p;return m({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{v&&o(v)}),[v]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),s(e),f(e)}),[s,f,l]),tabValues:l}}var v=r(1063);const g={tabList:"tabList_KFiB",tabItem:"tabItem_KIg7"};function k(e){let{className:t,block:r,selectedValue:o,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,r=c.indexOf(t),a=s[r].value;a!==o&&(p(t),u(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},t)},s.map((e=>{let{value:t,label:r,attributes:i}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},i,{className:(0,l.Z)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":o===t})}),r??t)})))}function y(e){let{lazy:t,children:r,selectedValue:a}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function h(e){const t=f(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",g.tabList)},n.createElement(k,(0,a.Z)({},e,t)),n.createElement(y,(0,a.Z)({},e,t)))}function N(e){const t=(0,v.Z)();return n.createElement(h,(0,a.Z)({key:String(t)},e))}},576:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>b,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=r(2564),n=(r(9496),r(9613)),l=r(4310),i=r(7366);const o={},u=void 0,s={unversionedId:"ox_lib/ACL/Server",id:"ox_lib/ACL/Server",title:"Server",description:"Wrapper around the built-in ACL system. Handles lib.addCommand and ox_groups permissions.",source:"@site/docs/ox_lib/ACL/Server.md",sourceDirName:"ox_lib/ACL",slug:"/ox_lib/ACL/Server",permalink:"/docs/ox_lib/ACL/Server",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_lib/ACL/Server.md",tags:[],version:"current",lastUpdatedAt:1683587426,formattedLastUpdatedAt:"May 8, 2023",frontMatter:{},sidebar:"ox_lib",previous:{title:"Getting Started",permalink:"/docs/ox_lib/"},next:{title:"Server",permalink:"/docs/ox_lib/AddCommand/Server"}},c={},p=[{value:"lib.addAce",id:"libaddace",level:3},{value:"lib.removeAce",id:"libremoveace",level:3},{value:"lib.addPrincipal",id:"libaddprincipal",level:3},{value:"lib.removePrincipal",id:"libremoveprincipal",level:3}],d={toc:p},m="wrapper";function b(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Wrapper around the built-in ACL system. Handles lib.addCommand and ox_groups permissions.",(0,n.kt)("br",{parentName:"p"}),"\n","Refer to ",(0,n.kt)("a",{parentName:"p",href:"https://forum.cfx.re/t/basic-aces-principals-overview-guide/90917"},"Basic Aces & Principals overview/guide")," for more information."),(0,n.kt)("h3",{id:"libaddace"},"lib.addAce"),(0,n.kt)("p",null,"Assigns the ace permission to a principal. Third parameter defaults to 'allow', while false sets the permission to 'deny'."),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Lua",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"lib.addAce(principal, ace, allow)\n\nlib.addAce('group.admin', 'command.say')\n"))),(0,n.kt)(i.Z,{value:"JS/TS",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"import lib from '@overextended/ox_lib/server'\n\nlib.addAce(principal, ace, allow)\n\nlib.addAce('group.admin', 'command.say')\n")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"principal: ",(0,n.kt)("inlineCode",{parentName:"li"},"string")),(0,n.kt)("li",{parentName:"ul"},"ace: ",(0,n.kt)("inlineCode",{parentName:"li"},"string")),(0,n.kt)("li",{parentName:"ul"},"allow: ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"))),(0,n.kt)("h3",{id:"libremoveace"},"lib.removeAce"),(0,n.kt)("p",null,"Removes the ace permission from a principal. Third parameter defaults to 'allow', while false sets the permission to 'deny'."),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Lua",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"lib.removeAce(principal, ace, allow)\n\nlib.removeAce('group.admin', 'command.say')\n"))),(0,n.kt)(i.Z,{value:"JS/TS",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"import lib from '@overextended/ox_lib/server'\n\nlib.removeAce(principal, ace, allow)\n\nlib.removeAce('group.admin', 'command.say')\n")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"principal: ",(0,n.kt)("inlineCode",{parentName:"li"},"string")),(0,n.kt)("li",{parentName:"ul"},"ace: ",(0,n.kt)("inlineCode",{parentName:"li"},"string")),(0,n.kt)("li",{parentName:"ul"},"allow: ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"))),(0,n.kt)("h3",{id:"libaddprincipal"},"lib.addPrincipal"),(0,n.kt)("p",null,"Assigns a principal to a parent principal. Children inherit permissions from the parent."),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Lua",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"lib.addPrincipal(child, parent)\n\nlib.addPrincipal('player.1', 'group.moderator')\n"))),(0,n.kt)(i.Z,{value:"JS/TS",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"import lib from '@overextended/ox_lib/server'\n\nlib.addPrincipal(child, parent)\n\nlib.addPrincipal('player.1', 'group.moderator')\n")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"child: ",(0,n.kt)("inlineCode",{parentName:"li"},"string")),(0,n.kt)("li",{parentName:"ul"},"parent: ",(0,n.kt)("inlineCode",{parentName:"li"},"string"))),(0,n.kt)("h3",{id:"libremoveprincipal"},"lib.removePrincipal"),(0,n.kt)("p",null,"Removes a principal from a parent principal."),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Lua",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"lib.removePrincipal(child, parent)\n\nlib.removePrincipal('player.1', 'group.moderator')\n"))),(0,n.kt)(i.Z,{value:"JS/TS",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"import lib from '@overextended/ox_lib/server'\n\nlib.removePrincipal(child, parent)\n\nlib.removePrincipal('player.1', 'group.moderator')\n")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"child: ",(0,n.kt)("inlineCode",{parentName:"li"},"string")),(0,n.kt)("li",{parentName:"ul"},"parent: ",(0,n.kt)("inlineCode",{parentName:"li"},"string"))))}b.isMDXComponent=!0}}]);