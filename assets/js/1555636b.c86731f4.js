"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5970],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),v=o,d=s["".concat(c,".").concat(v)]||s[v]||m[v]||i;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=v;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},8968:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(2564),o=(n(9496),n(9613));const i={},a=void 0,l={unversionedId:"ox_inventory/Functions/Server/Inventory/GetSlotForItem",id:"ox_inventory/Functions/Server/Inventory/GetSlotForItem",title:"GetSlotForItem",description:"Get the slot id of an existing item matching the given data, or an empty slot.",source:"@site/docs/ox_inventory/Functions/Server/Inventory/GetSlotForItem.md",sourceDirName:"ox_inventory/Functions/Server/Inventory",slug:"/ox_inventory/Functions/Server/Inventory/GetSlotForItem",permalink:"/docs/ox_inventory/Functions/Server/Inventory/GetSlotForItem",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_inventory/Functions/Server/Inventory/GetSlotForItem.md",tags:[],version:"current",lastUpdatedAt:1683587426,formattedLastUpdatedAt:"May 8, 2023",frontMatter:{},sidebar:"ox_inventory",previous:{title:"GetSlot",permalink:"/docs/ox_inventory/Functions/Server/Inventory/GetSlot"},next:{title:"GetSlotIdWithItem",permalink:"/docs/ox_inventory/Functions/Server/Inventory/GetSlotIdWithItem"}},c={},p=[],u={toc:p},s="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Get the slot id of an existing item matching the given data, or an empty slot."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"exports.ox_inventory:GetSlotForItem(inv, itemName, metadata)\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"inv: ",(0,o.kt)("inlineCode",{parentName:"li"},"table")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"number")),(0,o.kt)("li",{parentName:"ul"},"itemName: ",(0,o.kt)("inlineCode",{parentName:"li"},"string")),(0,o.kt)("li",{parentName:"ul"},"metadata: ",(0,o.kt)("inlineCode",{parentName:"li"},"table?"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"number?")))}m.isMDXComponent=!0}}]);