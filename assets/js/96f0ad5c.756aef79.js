"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9652],{9613:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=i(r),m=a,g=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return r?n.createElement(g,l(l({ref:t},d),{},{components:r})):n.createElement(g,l({ref:t},d))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[c]="string"==typeof e?e:a,l[1]=p;for(var i=2;i<o;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1993:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>i});var n=r(2564),a=(r(9496),r(9613));const o={},l=void 0,p={unversionedId:"ox_target/Usage/Zones",id:"ox_target/Usage/Zones",title:"Zones",description:"The input for zones differs slightly from all other options, instead taking the zone properties and two additional properties (drawSprite, and options).",source:"@site/docs/ox_target/Usage/Zones.md",sourceDirName:"ox_target/Usage",slug:"/ox_target/Usage/Zones",permalink:"/docs/ox_target/Usage/Zones",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_target/Usage/Zones.md",tags:[],version:"current",lastUpdatedAt:1683587426,formattedLastUpdatedAt:"May 8, 2023",frontMatter:{},sidebar:"ox_target",previous:{title:"Target",permalink:"/docs/ox_target/Usage/Target"}},s={},i=[{value:"addSphereZone",id:"addspherezone",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Example",id:"example",level:3},{value:"addBoxZone",id:"addboxzone",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Example",id:"example-1",level:3},{value:"removeZone",id:"removezone",level:2}],d={toc:i},c="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The input for zones differs slightly from all other options, instead taking the ",(0,a.kt)("a",{parentName:"p",href:"/docs/ox_lib/Zones/Shared"},"zone")," properties and two additional properties (drawSprite, and options)."),(0,a.kt)("h2",{id:"addspherezone"},"addSphereZone"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"exports.ox_target:addSphereZone(parameters)\n")),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"{\n    coords = vector3,\n    radius = number,\n    debug? = boolean,\n    drawSprite? = boolean,\n    options = options,\n}\n")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"exports.ox_target:addSphereZone({\n    coords = vec3(440.5363, -1015.666, 28.85637),\n    radius = 1,\n    debug = drawZones,\n    options = {\n        {\n            name = 'sphere',\n            event = 'ox_target:debug',\n            icon = 'fa-solid fa-circle',\n            label = '(Debug) Sphere',\n        }\n    }\n})\n")),(0,a.kt)("h2",{id:"addboxzone"},"addBoxZone"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"exports.ox_target:addBoxZone(parameters)\n")),(0,a.kt)("h3",{id:"parameters-1"},"Parameters"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"{\n    coords = vector3,\n    size = vector3,\n    rotation = number,\n    debug? = boolean,\n    drawSprite? = boolean,\n    options = options,\n}\n")),(0,a.kt)("h3",{id:"example-1"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"exports.ox_target:addBoxZone({\n    coords = vec3(442.5363, -1017.666, 28.85637),\n    size = vec3(2, 2, 2),\n    rotation = 45,\n    debug = drawZones,\n    options = {\n        {\n            name = 'box',\n            event = 'ox_target:debug',\n            icon = 'fa-solid fa-cube',\n            label = '(Debug) Box',\n        }\n    }\n})\n")),(0,a.kt)("h2",{id:"removezone"},"removeZone"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"exports.ox_target:removeZone(id)\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," passed to removeZone is the return value from addBoxZone / addSphereZone."))}u.isMDXComponent=!0}}]);