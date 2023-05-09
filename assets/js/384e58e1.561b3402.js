"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2597],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),v=o,y=u["".concat(p,".").concat(v)]||u[v]||m[v]||i;return n?r.createElement(y,a(a({ref:t},c),{},{components:n})):r.createElement(y,a({ref:t},c))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=v;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},6765:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(2564),o=(n(9496),n(9613));const i={},a=void 0,l={unversionedId:"ox_inventory/Functions/Server/Inventory/CanSwapItem",id:"ox_inventory/Functions/Server/Inventory/CanSwapItem",title:"CanSwapItem",description:"Returns true if the item swap is possible based on inventory weight.",source:"@site/docs/ox_inventory/Functions/Server/Inventory/CanSwapItem.md",sourceDirName:"ox_inventory/Functions/Server/Inventory",slug:"/ox_inventory/Functions/Server/Inventory/CanSwapItem",permalink:"/docs/ox_inventory/Functions/Server/Inventory/CanSwapItem",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_inventory/Functions/Server/Inventory/CanSwapItem.md",tags:[],version:"current",lastUpdatedAt:1683587426,formattedLastUpdatedAt:"May 8, 2023",frontMatter:{},sidebar:"ox_inventory",previous:{title:"CanCarryWeight",permalink:"/docs/ox_inventory/Functions/Server/Inventory/CanCarryWeight"},next:{title:"ClearInventory",permalink:"/docs/ox_inventory/Functions/Server/Inventory/ClearInventory"}},p={},s=[],c={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Returns true if the item swap is possible based on inventory weight."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"exports.ox_inventory:CanSwapItem(inv, firstItem, firstItemCount, testItem, testItemCount)\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"inv: ",(0,o.kt)("inlineCode",{parentName:"li"},"table")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"number")),(0,o.kt)("li",{parentName:"ul"},"firstItem: ",(0,o.kt)("inlineCode",{parentName:"li"},"string")),(0,o.kt)("li",{parentName:"ul"},"firstItemCount: ",(0,o.kt)("inlineCode",{parentName:"li"},"number")),(0,o.kt)("li",{parentName:"ul"},"testItem: ",(0,o.kt)("inlineCode",{parentName:"li"},"string")),(0,o.kt)("li",{parentName:"ul"},"testItemCount: ",(0,o.kt)("inlineCode",{parentName:"li"},"number"))))}m.isMDXComponent=!0}}]);