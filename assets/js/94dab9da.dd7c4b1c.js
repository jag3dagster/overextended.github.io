"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1660],{9613:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,b=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return r?n.createElement(b,o(o({ref:t},c),{},{components:r})):n.createElement(b,o({ref:t},c))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7366:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(9496),a=r(5924);const l={tabItem:"tabItem_b204"};function o(e){let{children:t,hidden:r,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(l.tabItem,o),hidden:r},t)}},4310:(e,t,r)=>{r.d(t,{Z:()=>x});var n=r(2564),a=r(9496),l=r(5924),o=r(9857),i=r(3442),s=r(4944),u=r(1887),c=r(7130);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function d(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:r}=e;const n=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function h(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,l=d(e),[o,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[s,u]=b({queryString:r,groupId:n}),[p,h]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,c.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:n}),f=(()=>{const e=s??p;return m({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),h(e)}),[u,h,l]),tabValues:l}}var f=r(1063);const v={tabList:"tabList_KFiB",tabItem:"tabItem_KIg7"};function g(e){let{className:t,block:r,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,r=c.indexOf(t),n=u[r].value;n!==i&&(p(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:o}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},o,{className:(0,l.Z)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":i===t})}),r??t)})))}function y(e){let{lazy:t,children:r,selectedValue:n}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function k(e){const t=h(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",v.tabList)},a.createElement(g,(0,n.Z)({},e,t)),a.createElement(y,(0,n.Z)({},e,t)))}function x(e){const t=(0,f.Z)();return a.createElement(k,(0,n.Z)({key:String(t)},e))}},4946:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>b,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var n=r(2564),a=(r(9496),r(9613)),l=r(4310),o=r(7366);const i={},s=void 0,u={unversionedId:"ox_lib/VehicleProperties/Client",id:"ox_lib/VehicleProperties/Client",title:"Client",description:"Mostly follows the format used by ESX and QBCore, with extra data such as damaged/missing props.",source:"@site/docs/ox_lib/VehicleProperties/Client.md",sourceDirName:"ox_lib/VehicleProperties",slug:"/ox_lib/VehicleProperties/Client",permalink:"/docs/ox_lib/VehicleProperties/Client",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_lib/VehicleProperties/Client.md",tags:[],version:"current",lastUpdatedAt:1683587426,formattedLastUpdatedAt:"May 8, 2023",frontMatter:{},sidebar:"ox_lib",previous:{title:"Shared",permalink:"/docs/ox_lib/Table/Shared"},next:{title:"Server",permalink:"/docs/ox_lib/Version/Server"}},c={},p=[{value:"lib.getVehicleProperties",id:"libgetvehicleproperties",level:3},{value:"lib.setVehicleProperties",id:"libsetvehicleproperties",level:3},{value:"Recommended usage",id:"recommended-usage",level:4}],d={toc:p},m="wrapper";function b(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Mostly follows the format used by ESX and QBCore, with extra data such as damaged/missing props.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/overextended/ox_lib/blob/master/resource/vehicleProperties/client.lua#L5"},"https://github.com/overextended/ox_lib/blob/master/resource/vehicleProperties/client.lua#L5")),(0,a.kt)("h3",{id:"libgetvehicleproperties"},"lib.getVehicleProperties"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"lib.getVehicleProperties(vehicle)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"vehicle: ",(0,a.kt)("inlineCode",{parentName:"li"},"entity"))),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Lua",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"lib.getVehicleProperties(GetVehiclePedIsUsing(PlayerPedId()))\n"))),(0,a.kt)(o.Z,{value:"JS/TS",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import lib from '@overextended/ox_lib/client'\n\nlib.getVehicleProperties(GetVehiclePedIsUsing(PlayerPedId()))\n")))),(0,a.kt)("h3",{id:"libsetvehicleproperties"},"lib.setVehicleProperties"),(0,a.kt)("p",null,"Requires the vehicle to belong to the client. ",(0,a.kt)("em",{parentName:"p"},"Do not use NetworkRequestControlOfEntity"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"lib.setVehicleProperties(vehicle, props)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"vehicle: ",(0,a.kt)("inlineCode",{parentName:"li"},"entity")),(0,a.kt)("li",{parentName:"ul"},"props: ",(0,a.kt)("inlineCode",{parentName:"li"},"table")," (",(0,a.kt)("inlineCode",{parentName:"li"},"object"),")")),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Lua",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"RegisterNetEvent('ox_lib:setVehicleProperties', function(netid, data)\n    lib.setVehicleProperties(NetToVeh(netid), data)\nend)\n"))),(0,a.kt)(o.Z,{value:"JS/TS",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import lib from '@overextended/ox_lib/client'\n\nonNet('ox_lib:setVehicleProperties', (netid, data) => {\n  lib.setVehicleProperties(NetToVeh(netid), data)\n})\n")))),(0,a.kt)("h4",{id:"recommended-usage"},"Recommended usage"),(0,a.kt)("p",null,"The server should tell the owner of the entity to set properties, using the following trigger."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"TriggerClientEvent('ox_lib:setVehicleProperties', entityOwner, vehNetId, data)\n")))}b.isMDXComponent=!0}}]);