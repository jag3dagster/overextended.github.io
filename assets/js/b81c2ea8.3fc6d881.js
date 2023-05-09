"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8299],{9613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),p=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(m.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,m=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=p(n),u=a,g=s["".concat(m,".").concat(u)]||s[u]||c[u]||i;return n?r.createElement(g,o(o({ref:t},d),{},{components:n})):r.createElement(g,o({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l[s]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9815:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(2564),a=(n(9496),n(9613));const i={},o=void 0,l={unversionedId:"ox_lib/AddCommand/Server",id:"ox_lib/AddCommand/Server",title:"Server",description:"Registers commands and simplifies argument validation, permissions, and chat suggestions.",source:"@site/docs/ox_lib/AddCommand/Server.md",sourceDirName:"ox_lib/AddCommand",slug:"/ox_lib/AddCommand/Server",permalink:"/docs/ox_lib/AddCommand/Server",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_lib/AddCommand/Server.md",tags:[],version:"current",lastUpdatedAt:1683587426,formattedLastUpdatedAt:"May 8, 2023",frontMatter:{},sidebar:"ox_lib",previous:{title:"Server",permalink:"/docs/ox_lib/ACL/Server"},next:{title:"Client",permalink:"/docs/ox_lib/AddKeybind/Client"}},m={},p=[],d={toc:p},s="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Registers commands and simplifies argument validation, permissions, and chat suggestions."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"lib.addCommand(commandName, properties, cb)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"commandName: ",(0,a.kt)("inlineCode",{parentName:"li"},"string")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"string[]")),(0,a.kt)("li",{parentName:"ul"},"properties: ",(0,a.kt)("inlineCode",{parentName:"li"},"table")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"help?: ",(0,a.kt)("inlineCode",{parentName:"li"},"string")),(0,a.kt)("li",{parentName:"ul"},"restricted?: ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"string")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"string[]")),(0,a.kt)("li",{parentName:"ul"},"params?: ",(0,a.kt)("inlineCode",{parentName:"li"},"table[]"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"name: ",(0,a.kt)("inlineCode",{parentName:"li"},"string")),(0,a.kt)("li",{parentName:"ul"},"help?: ",(0,a.kt)("inlineCode",{parentName:"li"},"string")),(0,a.kt)("li",{parentName:"ul"},"type?: ",(0,a.kt)("inlineCode",{parentName:"li"},"'number'")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"'playerId'")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"'string'")),(0,a.kt)("li",{parentName:"ul"},"optional?: ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"))))))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"lib.addCommand('giveitem', {\n    help = 'Gives an item to a player',\n    params = {\n        {\n            name = 'target',\n            type = 'playerId',\n            help = 'Target player\\'s server id', },\n        {\n            name = 'item',\n            type = 'string',\n            help = 'Name of the item to give',\n        },\n        {\n            name = 'count',\n            type = 'number',\n            help = 'Amount of the item to give, or blank to give 1',\n            optional = true,\n        },\n        {\n            name = 'metatype',\n            help = 'Sets the item\\'s \"metadata.type\"',\n            optional = true,\n        },\n    },\n    restricted = 'group.admin'\n}, function(source, args, raw)\n    local item = Items(args.item)\n\n    if item then\n        Inventory.AddItem(args.target, item.name, args.count or 1, args.metatype)\n    end\nend)\n")))}c.isMDXComponent=!0}}]);