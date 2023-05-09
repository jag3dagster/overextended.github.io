"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6124],{9613:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=u(n),d=l,k=s["".concat(p,".").concat(d)]||s[d]||c[d]||r;return n?a.createElement(k,i(i({ref:t},m),{},{components:n})):a.createElement(k,i({ref:t},m))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:l,i[1]=o;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7366:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(9496),l=n(5924);const r={tabItem:"tabItem_b204"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r.tabItem,i),hidden:n},t)}},4310:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(2564),l=n(9496),r=n(5924),i=n(9857),o=n(3442),p=n(4944),u=n(1887),m=n(7130);function s(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:l}}=e;return{value:t,label:n,attributes:a,default:l}}))}function c(e){const{values:t,children:n}=e;return(0,l.useMemo)((()=>{const e=t??s(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,p._X)(r),(0,l.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=c(e),[i,o]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[p,u]=k({queryString:n,groupId:a}),[s,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,m.Nk)(n);return[a,(0,l.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),N=(()=>{const e=p??s;return d({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{N&&o(N)}),[N]);return{selectedValue:i,selectValue:(0,l.useCallback)((e=>{if(!d({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),b(e)}),[u,b,r]),tabValues:r}}var N=n(1063);const f={tabList:"tabList_KFiB",tabItem:"tabItem_KIg7"};function g(e){let{className:t,block:n,selectedValue:o,selectValue:p,tabValues:u}=e;const m=[],{blockElementScrollPositionUntilNextRender:s}=(0,i.o5)(),c=e=>{const t=e.currentTarget,n=m.indexOf(t),a=u[n].value;a!==o&&(s(t),p(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=m.indexOf(e.currentTarget)+1;t=m[n]??m[0];break}case"ArrowLeft":{const n=m.indexOf(e.currentTarget)-1;t=m[n]??m[m.length-1];break}}t?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>m.push(e),onKeyDown:d,onClick:c},i,{className:(0,r.Z)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":o===t})}),n??t)})))}function C(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=b(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",f.tabList)},l.createElement(g,(0,a.Z)({},e,t)),l.createElement(C,(0,a.Z)({},e,t)))}function v(e){const t=(0,N.Z)();return l.createElement(y,(0,a.Z)({key:String(t)},e))}},8936:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>k,frontMatter:()=>o,metadata:()=>u,toc:()=>s});var a=n(2564),l=(n(9496),n(9613)),r=n(4310),i=n(7366);const o={title:"Progress"},p=void 0,u={unversionedId:"ox_lib/Interface/Client/progress",id:"ox_lib/Interface/Client/progress",title:"Progress",description:"lib.progressBar",source:"@site/docs/ox_lib/Interface/Client/progress.md",sourceDirName:"ox_lib/Interface/Client",slug:"/ox_lib/Interface/Client/progress",permalink:"/docs/ox_lib/Interface/Client/progress",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_lib/Interface/Client/progress.md",tags:[],version:"current",lastUpdatedAt:1683587426,formattedLastUpdatedAt:"May 8, 2023",frontMatter:{title:"Progress"},sidebar:"ox_lib",previous:{title:"Notifications",permalink:"/docs/ox_lib/Interface/Client/notify"},next:{title:"Radial Menu",permalink:"/docs/ox_lib/Interface/Client/radial"}},m={},s=[{value:"lib.progressBar",id:"libprogressbar",level:2},{value:"Usage Example",id:"usage-example",level:3},{value:"lib.progressCircle",id:"libprogresscircle",level:2},{value:"Usage Example",id:"usage-example-1",level:3},{value:"lib.progressActive",id:"libprogressactive",level:2},{value:"lib.cancelProgress",id:"libcancelprogress",level:2}],c={toc:s},d="wrapper";function k(e){let{components:t,...n}=e;return(0,l.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"libprogressbar"},"lib.progressBar"),(0,l.kt)("p",null,"Displays a running progress bar."),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"Lua",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"lib.progressBar(data)\n"))),(0,l.kt)(i.Z,{value:"JS/TS",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import lib from '@overextended/ox_lib/client'\n\nlib.progressBar(data)\n")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"duration: ",(0,l.kt)("inlineCode",{parentName:"li"},"number")),(0,l.kt)("li",{parentName:"ul"},"label: ",(0,l.kt)("inlineCode",{parentName:"li"},"string")),(0,l.kt)("li",{parentName:"ul"},"useWhileDead?: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean")),(0,l.kt)("li",{parentName:"ul"},"allowRagdoll?: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean")),(0,l.kt)("li",{parentName:"ul"},"allowCuffed?: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean")),(0,l.kt)("li",{parentName:"ul"},"allowFalling?: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean")),(0,l.kt)("li",{parentName:"ul"},"canCancel?: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean")),(0,l.kt)("li",{parentName:"ul"},"anim?: ",(0,l.kt)("inlineCode",{parentName:"li"},"table")," (",(0,l.kt)("inlineCode",{parentName:"li"},"object"),")",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"dict?: ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Must specify either scenario or dict"))),(0,l.kt)("li",{parentName:"ul"},"clip: ",(0,l.kt)("inlineCode",{parentName:"li"},"string")),(0,l.kt)("li",{parentName:"ul"},"flag?: ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"49")))),(0,l.kt)("li",{parentName:"ul"},"blendIn?: ",(0,l.kt)("inlineCode",{parentName:"li"},"float"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"3.0")))),(0,l.kt)("li",{parentName:"ul"},"blendOut?: ",(0,l.kt)("inlineCode",{parentName:"li"},"float"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"1.0")))),(0,l.kt)("li",{parentName:"ul"},"duration?: ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),"\nDefault: ",(0,l.kt)("inlineCode",{parentName:"li"},"-1")),(0,l.kt)("li",{parentName:"ul"},"playbackRate?: ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),"\nDefault: ",(0,l.kt)("inlineCode",{parentName:"li"},"0")),(0,l.kt)("li",{parentName:"ul"},"lockX?: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean")),(0,l.kt)("li",{parentName:"ul"},"lockY?: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean")),(0,l.kt)("li",{parentName:"ul"},"lockZ?: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean")),(0,l.kt)("li",{parentName:"ul"},"scenario?: ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Must specify either scenario or dict"))),(0,l.kt)("li",{parentName:"ul"},"playEnter?: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"true")))))),(0,l.kt)("li",{parentName:"ul"},"prop?: ",(0,l.kt)("inlineCode",{parentName:"li"},"table")," (",(0,l.kt)("inlineCode",{parentName:"li"},"object")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"array"),")",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"[ If you want to define multiple props, you can pass them as individual tables (array of objects) ]"),(0,l.kt)("li",{parentName:"ul"},"model: ",(0,l.kt)("inlineCode",{parentName:"li"},"hash")),(0,l.kt)("li",{parentName:"ul"},"bone?: ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"60309")))),(0,l.kt)("li",{parentName:"ul"},"pos: ",(0,l.kt)("inlineCode",{parentName:"li"},"table"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"x: ",(0,l.kt)("inlineCode",{parentName:"li"},"number")),(0,l.kt)("li",{parentName:"ul"},"y: ",(0,l.kt)("inlineCode",{parentName:"li"},"number")),(0,l.kt)("li",{parentName:"ul"},"z: ",(0,l.kt)("inlineCode",{parentName:"li"},"number")))),(0,l.kt)("li",{parentName:"ul"},"rot: ",(0,l.kt)("inlineCode",{parentName:"li"},"table")," (",(0,l.kt)("inlineCode",{parentName:"li"},"object"),")",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"x: ",(0,l.kt)("inlineCode",{parentName:"li"},"number")),(0,l.kt)("li",{parentName:"ul"},"y: ",(0,l.kt)("inlineCode",{parentName:"li"},"number")),(0,l.kt)("li",{parentName:"ul"},"z: ",(0,l.kt)("inlineCode",{parentName:"li"},"number")))))),(0,l.kt)("li",{parentName:"ul"},"disable?: ",(0,l.kt)("inlineCode",{parentName:"li"},"table")," (",(0,l.kt)("inlineCode",{parentName:"li"},"object"),")",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"move?: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean")),(0,l.kt)("li",{parentName:"ul"},"car?: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean")),(0,l.kt)("li",{parentName:"ul"},"combat?: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean")),(0,l.kt)("li",{parentName:"ul"},"mouse?: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"))))),(0,l.kt)("h3",{id:"usage-example"},"Usage Example"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"Lua",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"if lib.progressBar({\n    duration = 2000,\n    label = 'Drinking water',\n    useWhileDead = false,\n    canCancel = true,\n    disable = {\n        car = true,\n    },\n    anim = {\n        dict = 'mp_player_intdrink',\n        clip = 'loop_bottle'\n    },\n    prop = {\n        model = `prop_ld_flow_bottle`,\n        pos = vec3(0.03, 0.03, 0.02),\n        rot = vec3(0.0, 0.0, -1.5)\n    },\n}) then print('Do stuff when complete') else print('Do stuff when cancelled') end\n"))),(0,l.kt)(i.Z,{value:"JS/TS",mdxType:"TabItem"},(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"This function is ",(0,l.kt)("strong",{parentName:"p"},"asynchronous")," requiring you to do a ",(0,l.kt)("inlineCode",{parentName:"p"},".then")," callback on the promise or make your function ",(0,l.kt)("inlineCode",{parentName:"p"},"async"),".")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import lib from '@overextended/ox_lib/client'\n\nif (await lib.progressBar({\n  duration: 2000,\n  label: 'Drinking water',\n  useWhileDead: false,\n  canCancel: true,\n  disable: {\n    car: true,\n  },\n  anim: {\n    dict: 'mp_player_intdrink',\n    clip: 'loop_bottle'\n  },\n  prop: {\n    model: `prop_ld_flow_bottle`,\n    pos: {x: 0.03, y: 0.03, z: 0.02},\n    rot: {x: 0.0, y: 0.0, z: -1.5}\n  },\n})) console.log('Do stuff when complete');\nelse console.log('Do stuff when cancelled')\n")))),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/7ZJgLjl.png",alt:"progress_bar"})),(0,l.kt)("h2",{id:"libprogresscircle"},"lib.progressCircle"),(0,l.kt)("p",null,"Similar to ",(0,l.kt)("inlineCode",{parentName:"p"},"lib.progressBar")," except it displays a circle and you can define a position."),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"Lua",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"lib.progressCircle(data)\n"))),(0,l.kt)(i.Z,{value:"JS/TS",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import lib from '@overextended/ox_lib/client'\n\nlib.progressCircle(data)\n")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"duration: ",(0,l.kt)("inlineCode",{parentName:"li"},"number")),(0,l.kt)("li",{parentName:"ul"},"label?: ",(0,l.kt)("inlineCode",{parentName:"li"},"string")),(0,l.kt)("li",{parentName:"ul"},"position?: ",(0,l.kt)("inlineCode",{parentName:"li"},"'middle'")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"'bottom'"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"'middle'")))),(0,l.kt)("li",{parentName:"ul"},"useWhileDead?: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean")),(0,l.kt)("li",{parentName:"ul"},"allowRagdoll?: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean")),(0,l.kt)("li",{parentName:"ul"},"allowCuffed?: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean")),(0,l.kt)("li",{parentName:"ul"},"allowFalling?: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean")),(0,l.kt)("li",{parentName:"ul"},"canCancel?: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean")),(0,l.kt)("li",{parentName:"ul"},"anim?: ",(0,l.kt)("inlineCode",{parentName:"li"},"table")," (",(0,l.kt)("inlineCode",{parentName:"li"},"object"),")",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"dict?: ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Must specify either scenario or dict"))),(0,l.kt)("li",{parentName:"ul"},"clip: ",(0,l.kt)("inlineCode",{parentName:"li"},"string")),(0,l.kt)("li",{parentName:"ul"},"flag?: ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"49")))),(0,l.kt)("li",{parentName:"ul"},"blendIn?: ",(0,l.kt)("inlineCode",{parentName:"li"},"float"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"3.0")))),(0,l.kt)("li",{parentName:"ul"},"blendOut?: ",(0,l.kt)("inlineCode",{parentName:"li"},"float"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"1.0")))),(0,l.kt)("li",{parentName:"ul"},"duration?: ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),"\nDefault: ",(0,l.kt)("inlineCode",{parentName:"li"},"-1")),(0,l.kt)("li",{parentName:"ul"},"playbackRate?: ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),"\nDefault: ",(0,l.kt)("inlineCode",{parentName:"li"},"0")),(0,l.kt)("li",{parentName:"ul"},"lockX?: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean")),(0,l.kt)("li",{parentName:"ul"},"lockY?: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean")),(0,l.kt)("li",{parentName:"ul"},"lockZ?: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean")),(0,l.kt)("li",{parentName:"ul"},"scenario?: ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Must specify either scenario or dict"))),(0,l.kt)("li",{parentName:"ul"},"playEnter?: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"true")))))),(0,l.kt)("li",{parentName:"ul"},"prop?: ",(0,l.kt)("inlineCode",{parentName:"li"},"table")," (",(0,l.kt)("inlineCode",{parentName:"li"},"object")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"array"),")",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"[ If you want to define multiple props, you can pass them as individual tables (array of objects) ]"),(0,l.kt)("li",{parentName:"ul"},"model: ",(0,l.kt)("inlineCode",{parentName:"li"},"hash")),(0,l.kt)("li",{parentName:"ul"},"bone?: ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"60309")))),(0,l.kt)("li",{parentName:"ul"},"pos: ",(0,l.kt)("inlineCode",{parentName:"li"},"table"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"x: ",(0,l.kt)("inlineCode",{parentName:"li"},"number")),(0,l.kt)("li",{parentName:"ul"},"y: ",(0,l.kt)("inlineCode",{parentName:"li"},"number")),(0,l.kt)("li",{parentName:"ul"},"z: ",(0,l.kt)("inlineCode",{parentName:"li"},"number")))),(0,l.kt)("li",{parentName:"ul"},"rot: ",(0,l.kt)("inlineCode",{parentName:"li"},"table")," (",(0,l.kt)("inlineCode",{parentName:"li"},"object"),")",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"x: ",(0,l.kt)("inlineCode",{parentName:"li"},"number")),(0,l.kt)("li",{parentName:"ul"},"y: ",(0,l.kt)("inlineCode",{parentName:"li"},"number")),(0,l.kt)("li",{parentName:"ul"},"z: ",(0,l.kt)("inlineCode",{parentName:"li"},"number")))))),(0,l.kt)("li",{parentName:"ul"},"disable?: ",(0,l.kt)("inlineCode",{parentName:"li"},"table")," (",(0,l.kt)("inlineCode",{parentName:"li"},"object"),")",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"move?: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean")),(0,l.kt)("li",{parentName:"ul"},"car?: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean")),(0,l.kt)("li",{parentName:"ul"},"combat?: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean")),(0,l.kt)("li",{parentName:"ul"},"mouse?: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"))))),(0,l.kt)("h3",{id:"usage-example-1"},"Usage Example"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"Lua",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"if lib.progressCircle({\n    duration = 2000,\n    position = 'bottom',\n    useWhileDead = false,\n    canCancel = true,\n    disable = {\n        car = true,\n    },\n    anim = {\n        dict = 'mp_player_intdrink',\n        clip = 'loop_bottle'\n    },\n    prop = {\n        model = `prop_ld_flow_bottle`,\n        pos = vec3(0.03, 0.03, 0.02),\n        rot = vec3(0.0, 0.0, -1.5)\n    },\n}) then print('Do stuff when complete') else print('Do stuff when cancelled') end\n"))),(0,l.kt)(i.Z,{value:"JS/TS",mdxType:"TabItem"},(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"This function is ",(0,l.kt)("strong",{parentName:"p"},"asynchronous")," requiring you to do a ",(0,l.kt)("inlineCode",{parentName:"p"},".then")," callback on the promise or make your function ",(0,l.kt)("inlineCode",{parentName:"p"},"async"),".")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import lib from '@overextended/ox_lib/client'\n\nif (await lib.progressCircle({\n  duration: 2000,\n  position: 'bottom',\n  useWhileDead: false,\n  canCancel: true,\n  disable: {\n    car: true,\n  },\n  anim: {\n    dict: 'mp_player_intdrink',\n    clip: 'loop_bottle'\n  },\n  prop: {\n    model: `prop_ld_flow_bottle`,\n    pos: {x: 0.03, y: 0.03, z: 0.02},\n    rot: {x: 0.0, y: 0.0, z: -1.5}\n  },\n})) console.log('Do stuff when complete')\nelse console.log('Do stuff when cancelled')\n")))),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/2tLbgrW.png",alt:"progress_circle"})),(0,l.kt)("h2",{id:"libprogressactive"},"lib.progressActive"),(0,l.kt)("p",null,"Returns true if a progress bar is currently active."),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"Lua",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"lib.progressActive()\n"))),(0,l.kt)(i.Z,{value:"JS/TS",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import lib from '@overextended/ox_lib/client'\n\nlib.progressActive()\n")))),(0,l.kt)("h2",{id:"libcancelprogress"},"lib.cancelProgress"),(0,l.kt)("p",null,"If there is a progress bar active and the\nprogress bar can be cancelled then it cancels it."),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"Lua",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"lib.cancelProgress()\n"))),(0,l.kt)(i.Z,{value:"JS/TS",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import lib from '@overextended/ox_lib/client'\n\nlib.cancelProgress()\n")))))}k.isMDXComponent=!0}}]);