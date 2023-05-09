"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8802],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var i=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,b=c["".concat(p,".").concat(m)]||c[m]||d[m]||l;return n?i.createElement(b,a(a({ref:t},u),{},{components:n})):i.createElement(b,a({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:r,a[1]=o;for(var s=2;s<l;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9129:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var i=n(2564),r=(n(9496),n(9613));const l={},a="Points",o={unversionedId:"ox_lib/Points/Lua/Client",id:"ox_lib/Points/Lua/Client",title:"Points",description:"Simple and centralised distance checking, supporting callbacks when entering, leaving, and standing in-range of set coordinates.",source:"@site/docs/ox_lib/Points/Lua/Client.md",sourceDirName:"ox_lib/Points/Lua",slug:"/ox_lib/Points/Lua/Client",permalink:"/docs/ox_lib/Points/Lua/Client",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_lib/Points/Lua/Client.md",tags:[],version:"current",lastUpdatedAt:1683587426,formattedLastUpdatedAt:"May 8, 2023",frontMatter:{},sidebar:"ox_lib",previous:{title:"Points",permalink:"/docs/ox_lib/Points/JavaScript/Client"},next:{title:"Client",permalink:"/docs/ox_lib/Raycast/Client"}},p={},s=[{value:"CPoint",id:"cpoint",level:3},{value:"lib.points.new",id:"libpointsnew",level:3},{value:"lib.points.getAllPoints",id:"libpointsgetallpoints",level:3},{value:"lib.points.getNearbyPoints",id:"libpointsgetnearbypoints",level:3},{value:"lib.points.getClosestPoint",id:"libpointsgetclosestpoint",level:3}],u={toc:s},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"points"},"Points"),(0,r.kt)("p",null,"Simple and centralised distance checking, supporting callbacks when entering, leaving, and standing in-range of set coordinates."),(0,r.kt)("h3",{id:"cpoint"},"CPoint"),(0,r.kt)("p",null,"A table representing a point, with the following properties."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"id: ",(0,r.kt)("inlineCode",{parentName:"li"},"number")),(0,r.kt)("li",{parentName:"ul"},"coords: ",(0,r.kt)("inlineCode",{parentName:"li"},"vector3")),(0,r.kt)("li",{parentName:"ul"},"distance: ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'The distance for the player to be "inside" a point (i.e. the point\'s radius).'))),(0,r.kt)("li",{parentName:"ul"},"currentDistance: ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The players current distance from the centre of the point."))),(0,r.kt)("li",{parentName:"ul"},"isClosest?: ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean")),(0,r.kt)("li",{parentName:"ul"},"remove: ",(0,r.kt)("inlineCode",{parentName:"li"},"function()"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Removes the point from the points registry.")))),(0,r.kt)("h3",{id:"libpointsnew"},"lib.points.new"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"lib.points.new(data)\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"data: ",(0,r.kt)("inlineCode",{parentName:"li"},"table"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"coords: ",(0,r.kt)("inlineCode",{parentName:"li"},"vector3")),(0,r.kt)("li",{parentName:"ul"},"distance: ",(0,r.kt)("inlineCode",{parentName:"li"},"number"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")," CPoint"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"local point = lib.points.new({\n    coords = GetEntityCoords(cache.ped),\n    distance = 5,\n    dunak = 'nerd',\n})\n\nfunction point:onEnter()\n    print('entered range of point', self.id)\nend\n\nfunction point:onExit()\n    print('left range of point', self.id)\nend\n\nfunction point:nearby()\n    DrawMarker(2, self.coords.x, self.coords.y, self.coords.z, 0.0, 0.0, 0.0, 0.0, 180.0, 0.0, 1.0, 1.0, 1.0, 200, 20, 20, 50, false, true, 2, false, nil, nil, false)\n\n    if self.currentDistance < 1 and IsControlJustReleased(0, 38) then\n        print('inside marker', self.id, 'dunak is a '.. self.dunak)\n    end\nend\n")),(0,r.kt)("h3",{id:"libpointsgetallpoints"},"lib.points.getAllPoints"),(0,r.kt)("p",null,"Get a table of all points created in the resource."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"lib.points.getAllPoints()\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"table<number, CPoint>")),(0,r.kt)("h3",{id:"libpointsgetnearbypoints"},"lib.points.getNearbyPoints"),(0,r.kt)("p",null,"Get an array of all points in range of the player."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"lib.points.getNearbyPoints()\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"CPoint[]")),(0,r.kt)("h3",{id:"libpointsgetclosestpoint"},"lib.points.getClosestPoint"),(0,r.kt)("p",null,"Get the data for the closest point to the player."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"lib.points.getClosestPoint()\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"CPoint")))}d.isMDXComponent=!0}}]);