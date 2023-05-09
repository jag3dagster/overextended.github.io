"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2097],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,y=m["".concat(p,".").concat(d)]||m[d]||s[d]||o;return n?r.createElement(y,i(i({ref:t},c),{},{components:n})):r.createElement(y,i({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},836:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(2564),a=(n(9496),n(9613));const o={},i=void 0,l={unversionedId:"ox_inventory/Functions/Client/getCurrentWeapon",id:"ox_inventory/Functions/Client/getCurrentWeapon",title:"getCurrentWeapon",description:"Get data for the currently equipped weapon.",source:"@site/docs/ox_inventory/Functions/Client/getCurrentWeapon.md",sourceDirName:"ox_inventory/Functions/Client",slug:"/ox_inventory/Functions/Client/getCurrentWeapon",permalink:"/docs/ox_inventory/Functions/Client/getCurrentWeapon",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_inventory/Functions/Client/getCurrentWeapon.md",tags:[],version:"current",lastUpdatedAt:1683587426,formattedLastUpdatedAt:"May 8, 2023",frontMatter:{},sidebar:"ox_inventory",previous:{title:"displayMetadata",permalink:"/docs/ox_inventory/Functions/Client/displayMetadata"},next:{title:"openInventory",permalink:"/docs/ox_inventory/Functions/Client/openInventory"}},p={},u=[],c={toc:u},m="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Get data for the currently equipped weapon."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"exports.ox_inventory:getCurrentWeapon()\n")),(0,a.kt)("p",null,"You can also listen for changes to the current weapon using an event handler."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"AddEventHandler('ox_inventory:currentWeapon', function(currentWeapon)\n    CurrentWeapon = currentWeapon\nend)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"currentWeapon?: ",(0,a.kt)("inlineCode",{parentName:"li"},"table"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"ammo?: ",(0,a.kt)("inlineCode",{parentName:"li"},"string")," Name of the item used as ammo."),(0,a.kt)("li",{parentName:"ul"},"hash: ",(0,a.kt)("inlineCode",{parentName:"li"},"number")),(0,a.kt)("li",{parentName:"ul"},"label: ",(0,a.kt)("inlineCode",{parentName:"li"},"string")),(0,a.kt)("li",{parentName:"ul"},"melee: ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean")),(0,a.kt)("li",{parentName:"ul"},"metadata: ",(0,a.kt)("inlineCode",{parentName:"li"},"table"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"ammo?: ",(0,a.kt)("inlineCode",{parentName:"li"},"number")," Amount of ammo loaded into the weapon."),(0,a.kt)("li",{parentName:"ul"},"components?: ",(0,a.kt)("inlineCode",{parentName:"li"},"table")," Array of component item names, used to apply weapon components."),(0,a.kt)("li",{parentName:"ul"},"durability?: ",(0,a.kt)("inlineCode",{parentName:"li"},"number")),(0,a.kt)("li",{parentName:"ul"},"registered?: ",(0,a.kt)("inlineCode",{parentName:"li"},"string")," Name of the player that bought the weapon at a shop."),(0,a.kt)("li",{parentName:"ul"},"serial?: ",(0,a.kt)("inlineCode",{parentName:"li"},"string")))),(0,a.kt)("li",{parentName:"ul"},"name: ",(0,a.kt)("inlineCode",{parentName:"li"},"string")," Name of the item."),(0,a.kt)("li",{parentName:"ul"},"slot: ",(0,a.kt)("inlineCode",{parentName:"li"},"number")),(0,a.kt)("li",{parentName:"ul"},"weight: ",(0,a.kt)("inlineCode",{parentName:"li"},"number"))))))}s.isMDXComponent=!0}}]);