"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4268],{9613:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var a=r(9496);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,l=function(e,t){if(null==e)return{};var r,a,l={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var u=a.createContext({}),c=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,l=e.mdxType,n=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(r),d=l,k=m["".concat(u,".").concat(d)]||m[d]||s[d]||n;return r?a.createElement(k,o(o({ref:t},p),{},{components:r})):a.createElement(k,o({ref:t},p))}));function d(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=r.length,o=new Array(n);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var c=2;c<n;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4468:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>s,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var a=r(4250),l=(r(9496),r(9613));const n={},o="Door Settings",i={unversionedId:"ox_doorlock/settings",id:"ox_doorlock/settings",title:"Door Settings",description:"General",source:"@site/docs/ox_doorlock/settings.md",sourceDirName:"ox_doorlock",slug:"/ox_doorlock/settings",permalink:"/docs/ox_doorlock/settings",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_doorlock/settings.md",tags:[],version:"current",lastUpdatedAt:1677039360,formattedLastUpdatedAt:"Feb 22, 2023",frontMatter:{},sidebar:"ox_doorlock",previous:{title:"Door Conversion",permalink:"/docs/ox_doorlock/convert"}},u={},c=[{value:"General",id:"general",level:3},{value:"Characters",id:"characters",level:3},{value:"Groups",id:"groups",level:3},{value:"Items",id:"items",level:3},{value:"Lockpick",id:"lockpick",level:3}],p={toc:c};function s(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"door-settings"},"Door Settings"),(0,l.kt)("h3",{id:"general"},"General"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Door name",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Used to easily identify the door."))),(0,l.kt)("li",{parentName:"ul"},"Passcode",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Door can be unlocked by anybody by using the code or phrase."))),(0,l.kt)("li",{parentName:"ul"},"Autolock interval",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Door will be locked after x seconds."))),(0,l.kt)("li",{parentName:"ul"},"Interact distance",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Door can only be used when within x metres."))),(0,l.kt)("li",{parentName:"ul"},"Door rate",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Door movement speed for sliding/garage/automatic doors, or swinging doors when locked."))),(0,l.kt)("li",{parentName:"ul"},"Locked",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Sets the door as locked by default."))),(0,l.kt)("li",{parentName:"ul"},"Double",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Door is a set of two doors, controlled together."))),(0,l.kt)("li",{parentName:"ul"},"Automatic",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Sliding/garage/automatic door."))),(0,l.kt)("li",{parentName:"ul"},"Lockpick",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Door can be lockpicked when interacting with a targeting resource."))),(0,l.kt)("li",{parentName:"ul"},"Hide UI",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"No indicators (i.e. icon, text) will display on the door.")))),(0,l.kt)("h3",{id:"characters"},"Characters"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Character Id",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Character identifier used by a framework (i.e. player.charid, xPlayer.identifier, Player.CitizenId).")))),(0,l.kt)("h3",{id:"groups"},"Groups"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Group",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Framework dependent, referring to jobs, gangs, etc."))),(0,l.kt)("li",{parentName:"ul"},"Grade",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"The minimum grade to allow access for the group (0 to allow all).")))),(0,l.kt)("h3",{id:"items"},"Items"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Item",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Name of the item."))),(0,l.kt)("li",{parentName:"ul"},"Metadata type",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Requires metadata support (i.e. ox_inventory) to check slot.metadata.type")))),(0,l.kt)("h3",{id:"lockpick"},"Lockpick"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Difficulty",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Sets the skillcheck difficulty (see ",(0,l.kt)("a",{parentName:"li",href:"https://overextended.github.io/docs/ox_lib/Interface/Client/skillcheck"},"docs"),")."))),(0,l.kt)("li",{parentName:"ul"},"Area size",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Custom difficulty area size."))),(0,l.kt)("li",{parentName:"ul"},"Speed multiplier",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Custom difficulty idicator speed.")))))}s.isMDXComponent=!0}}]);