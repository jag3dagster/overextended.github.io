"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[212],{9613:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=s(n),d=l,k=p["".concat(u,".").concat(d)]||p[d]||c[d]||r;return n?a.createElement(k,i(i({ref:t},m),{},{components:n})):a.createElement(k,i({ref:t},m))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7366:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(9496),l=n(5924);const r={tabItem:"tabItem_b204"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r.tabItem,i),hidden:n},t)}},4310:(e,t,n)=>{n.d(t,{Z:()=>x});var a=n(2564),l=n(9496),r=n(5924),i=n(9857),o=n(3442),u=n(4944),s=n(1887),m=n(7130);function p(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:l}}=e;return{value:t,label:n,attributes:a,default:l}}))}function c(e){const{values:t,children:n}=e;return(0,l.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(r),(0,l.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=c(e),[i,o]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[u,s]=k({queryString:n,groupId:a}),[p,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,m.Nk)(n);return[a,(0,l.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),h=(()=>{const e=u??p;return d({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{h&&o(h)}),[h]);return{selectedValue:i,selectValue:(0,l.useCallback)((e=>{if(!d({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),s(e),b(e)}),[s,b,r]),tabValues:r}}var h=n(1063);const g={tabList:"tabList_KFiB",tabItem:"tabItem_KIg7"};function N(e){let{className:t,block:n,selectedValue:o,selectValue:u,tabValues:s}=e;const m=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),c=e=>{const t=e.currentTarget,n=m.indexOf(t),a=s[n].value;a!==o&&(p(t),u(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=m.indexOf(e.currentTarget)+1;t=m[n]??m[0];break}case"ArrowLeft":{const n=m.indexOf(e.currentTarget)-1;t=m[n]??m[m.length-1];break}}t?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:i}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>m.push(e),onKeyDown:d,onClick:c},i,{className:(0,r.Z)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":o===t})}),n??t)})))}function f(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=b(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",g.tabList)},l.createElement(N,(0,a.Z)({},e,t)),l.createElement(f,(0,a.Z)({},e,t)))}function x(e){const t=(0,h.Z)();return l.createElement(v,(0,a.Z)({key:String(t)},e))}},8271:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>k,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(2564),l=(n(9496),n(9613)),r=n(4310),i=n(7366);const o={title:"Context Menu"},u=void 0,s={unversionedId:"ox_lib/Interface/Client/context",id:"ox_lib/Interface/Client/context",title:"Context Menu",description:"lib.registerContext",source:"@site/docs/ox_lib/Interface/Client/context.md",sourceDirName:"ox_lib/Interface/Client",slug:"/ox_lib/Interface/Client/context",permalink:"/docs/ox_lib/Interface/Client/context",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_lib/Interface/Client/context.md",tags:[],version:"current",lastUpdatedAt:1683587426,formattedLastUpdatedAt:"May 8, 2023",frontMatter:{title:"Context Menu"},sidebar:"ox_lib",previous:{title:"Clipboard",permalink:"/docs/ox_lib/Interface/Client/clipboard"},next:{title:"Input Dialog",permalink:"/docs/ox_lib/Interface/Client/input"}},m={},p=[{value:"lib.registerContext",id:"libregistercontext",level:3},{value:"lib.showContext",id:"libshowcontext",level:3},{value:"lib.hideContext",id:"libhidecontext",level:3},{value:"lib.getOpenContextMenu",id:"libgetopencontextmenu",level:3},{value:"Usage Example",id:"usage-example",level:3}],c={toc:p},d="wrapper";function k(e){let{components:t,...n}=e;return(0,l.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"libregistercontext"},"lib.registerContext"),(0,l.kt)("p",null,"Used for registering a context menu."),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"Lua",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"lib.registerContext(context)\n"))),(0,l.kt)(i.Z,{value:"JS/TS",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import lib from '@overextended/ox_lib/client'\n\nlib.registerContext(context)\n")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"id: ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Unique menu identifier, will be used to open the menu."))),(0,l.kt)("li",{parentName:"ul"},"title: ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Title display in the menu; has markdown support."))),(0,l.kt)("li",{parentName:"ul"},"menu?: ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Menu identifier - if defined there will be a back arrow next to the menu title that will take you to the menu you defined."))),(0,l.kt)("li",{parentName:"ul"},"canClose: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"If set to false the user won't be able to exit the menu without pressing one of the buttons."))),(0,l.kt)("li",{parentName:"ul"},"onExit?: ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Function that will be ran when the user closes their context menu with ESC."))),(0,l.kt)("li",{parentName:"ul"},"onBack?: ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Function that will be ran when the user presses the back button to return to a previous menu."))),(0,l.kt)("li",{parentName:"ul"},"options: ",(0,l.kt)("inlineCode",{parentName:"li"},"table")," (",(0,l.kt)("inlineCode",{parentName:"li"},"object")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"array"),")",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"item: ",(0,l.kt)("inlineCode",{parentName:"li"},"key")," (",(0,l.kt)("inlineCode",{parentName:"li"},"string"),") or ",(0,l.kt)("inlineCode",{parentName:"li"},"table")," (",(0,l.kt)("inlineCode",{parentName:"li"},"object"),")",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"title?: ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"If not using keys then sets the title for the button; has markdown support."))),(0,l.kt)("li",{parentName:"ul"},"disabled?: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Grays out the button and makes it unclickable."))),(0,l.kt)("li",{parentName:"ul"},"menu?: ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Menu identifier that the button will take you to, when defined an arrow."))),(0,l.kt)("li",{parentName:"ul"},"onSelect: ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Function that's ran when the button is clicked."))),(0,l.kt)("li",{parentName:"ul"},"icon?: ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"FontAwesome icon that will be displayed on the left side, works the same as notification and textui icons."),(0,l.kt)("li",{parentName:"ul"},"Also supports image urls, png and webp files but are not recommend to use over font awesome icons."))),(0,l.kt)("li",{parentName:"ul"},"iconColor?: ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Colour of the displayed icon."))),(0,l.kt)("li",{parentName:"ul"},"progress?: ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Adds a progress bar filled to this percentage"))),(0,l.kt)("li",{parentName:"ul"},"colorScheme?: ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Sets the color scheme of the progress bar. Current options can be found here:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://mantine.dev/theming/colors/#default-colors"},"https://mantine.dev/theming/colors/#default-colors")),(0,l.kt)("li",{parentName:"ul"},"For example: ",(0,l.kt)("inlineCode",{parentName:"li"},"blue")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"teal")))))),(0,l.kt)("li",{parentName:"ul"},"arrow?: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Shows an arrow on the right side like ",(0,l.kt)("inlineCode",{parentName:"li"},"menu")," does, useful when you are opening a menu from an event. Can be set to false to hide it."))),(0,l.kt)("li",{parentName:"ul"},"description?: ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Description that will appear under the button title that is defined as a key; has markdown support."))),(0,l.kt)("li",{parentName:"ul"},"image?: ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Url to an image that will be displayed in the button's metadata."))),(0,l.kt)("li",{parentName:"ul"},"metadata?: ",(0,l.kt)("inlineCode",{parentName:"li"},"string[]")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"object")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"array"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Information that will display on the side upon hovering a button."),(0,l.kt)("li",{parentName:"ul"},"label: ",(0,l.kt)("inlineCode",{parentName:"li"},"string")),(0,l.kt)("li",{parentName:"ul"},"value: ",(0,l.kt)("inlineCode",{parentName:"li"},"any")),(0,l.kt)("li",{parentName:"ul"},"progress?: ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Display a progress bar in the metadata."))))),(0,l.kt)("li",{parentName:"ul"},"event?: ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Event that the button is going to trigger."))),(0,l.kt)("li",{parentName:"ul"},"serverEvent?: ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Server event that the button is going to trigger."))),(0,l.kt)("li",{parentName:"ul"},"args?: ",(0,l.kt)("inlineCode",{parentName:"li"},"any"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Arguments that will be sent to the events or onSelect function.")))))))),(0,l.kt)("p",null,"You can register as many context menus in one ",(0,l.kt)("inlineCode",{parentName:"p"},"lib.registerContext")," function\nas you'd like."),(0,l.kt)("p",null,"The menu can be either in the order you write it in, or sorted alphabetically.",(0,l.kt)("br",{parentName:"p"}),"\n","To sort the menu alphabetically the buttons (and/or metadata) need to be defined as keys, otherwise not using keys and instead using tables will make the menu be in the order you define it as."),(0,l.kt)("h3",{id:"libshowcontext"},"lib.showContext"),(0,l.kt)("p",null,"Opens a registered context menu by it's id."),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"Lua",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"lib.showContext(id)\n"))),(0,l.kt)(i.Z,{value:"JS/TS",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import lib from '@overextended/ox_lib/client'\n\nlib.showContext(id)\n")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"id: ",(0,l.kt)("inlineCode",{parentName:"li"},"string"))),(0,l.kt)("h3",{id:"libhidecontext"},"lib.hideContext"),(0,l.kt)("p",null,"Hides any currently visible context menu."),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"Lua",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"lib.hideContext(onExit)\n"))),(0,l.kt)(i.Z,{value:"JS/TS",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import lib from '@overextended/ox_lib/client'\n\nlib.hideContext(onExit)\n")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"onExit: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Defines whether the onExit function for the menu should be ran or not.")))),(0,l.kt)("h3",{id:"libgetopencontextmenu"},"lib.getOpenContextMenu"),(0,l.kt)("p",null,"Returns the id of the currently open context menu."),(0,l.kt)("p",null,"If no context menu is open returns ",(0,l.kt)("inlineCode",{parentName:"p"},"nil"),"."),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"Lua",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"lib.getOpenContextMenu()\n"))),(0,l.kt)(i.Z,{value:"JS/TS",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import lib from '@overextended/ox_lib/client'\n\nlib.getOpenContextMenu()\n")))),(0,l.kt)("h3",{id:"usage-example"},"Usage Example"),(0,l.kt)("p",null,"First we register the menu with our specified options then we call the show function in the command."),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"Avoid constantly re-registering a menu that does not depend on any outside values (A.K.A a static menu).")),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"Lua",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"lib.registerContext({\n  id = 'some_menu',\n  title = 'Some context menu',\n  options = {\n    {\n      title = 'Empty button',\n    },\n    {\n      title = 'Disabled button',\n      description = 'This button is disabled',\n      icon = 'hand',\n      disabled = true\n    },\n    {\n      title = 'Example button',\n      description = 'Example button description',\n      icon = 'circle',\n      onSelect = function()\n        print(\"Pressed the button!\")\n      end,\n      metadata = {\n        {label = 'Value 1', value = 'Some value'},\n        {label = 'Value 2', value = 300}\n      },\n    },\n    {\n      title = 'Menu button',\n      description = 'Takes you to another menu!',\n      menu = 'other_menu',\n      icon = 'bars'\n    },\n    {\n      title = 'Event button',\n      description = 'Open a menu from the event and send event data',\n      icon = 'check',\n      event = 'test_event',\n      arrow = true,\n      args = {\n        someValue = 500\n      }\n    }\n  }\n})\n"))),(0,l.kt)(i.Z,{value:"JS/TS",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import lib from '@overextended/ox_lib/client'\n\nlib.registerContext({\n  id: 'some_menu',\n  title: 'Some context menu',\n  options: [\n    {\n      title: 'Empty button',\n    },\n    {\n      title: 'Disabled button',\n      description: 'This button is disabled',\n      icon: 'hand',\n      disabled: true\n    },\n    {\n      title: 'Example button',\n      description: 'Example button description',\n      icon: 'circle',\n      onSelect: () => {\n        console.log(\"Pressed the button!\")\n      },\n      metadata: [\n        {label: 'Value 1', value: 'Some value'},\n        {label: 'Value 2', value: 300}\n      ],\n    },\n    {\n      title: 'Menu button',\n      description: 'Takes you to another menu!',\n      menu: 'other_menu',\n      icon: 'bars'\n    },\n    {\n      title: 'Event button',\n      description: 'Open a menu from the event and send event data',\n      icon: 'check',\n      event: 'test_event',\n      arrow: true,\n      args: {\n        someValue: 500\n      }\n    }\n  ]\n})\n")))),(0,l.kt)("p",null,"Then we can also register our second menu called ",(0,l.kt)("inlineCode",{parentName:"p"},"other_menu")),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"Lua",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"lib.registerContext({\n  id = 'other_menu',\n  title = 'Other context menu',\n  menu = 'some_menu',\n  onBack = function()\n    print('Went back!')\n  end,\n  options = {\n    {\n      title = 'Nothing here'\n    }\n  }\n})\n"))),(0,l.kt)(i.Z,{value:"JS/TS",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"lib.registerContext({\n  id: 'other_menu',\n  title: 'Other context menu',\n  menu: 'some_menu',\n  onBack: () => {\n    console.log('Went back!')\n  },\n  options: [\n    {\n      title: 'Nothing here'\n    }\n  ]\n})\n")))),(0,l.kt)("p",null,"And the event that we are going to run from the ",(0,l.kt)("inlineCode",{parentName:"p"},"some_menu")," menu, which is going to open another menu."),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"Lua",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"RegisterNetEvent('test_event', function(args)\n  lib.registerContext({\n    id = 'event_menu',\n    title = 'Event menu',\n    menu = 'some_menu',\n    options = {\n      {\n        title = 'Event value: '..args.someValue,\n      }\n    }\n  })\n\n  lib.showContext('event_menu')\nend)\n"))),(0,l.kt)(i.Z,{value:"JS/TS",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"onNet('test_event', (args: {someValue: number}) => {\n  lib.registerContext({\n    id:'event_menu',\n    title:'Event menu',\n    menu:'some_menu',\n    options: [\n      {\n        title: `Event value: ${args.someValue}`,\n      }\n    ]\n  })\n\n  lib.showContext('event_menu')\n})\n")))),(0,l.kt)("p",null,"Lastly we register a test command to show the ",(0,l.kt)("inlineCode",{parentName:"p"},"some_menu")," menu."),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"Lua",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"RegisterCommand('testcontext', function()\n  lib.showContext('some_menu')\nend)\n"))),(0,l.kt)(i.Z,{value:"JS/TS",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"RegisterCommand('testcontext', () => {\n  lib.showContext('some_menu')\n})\n")))),(0,l.kt)("p",null,"The data from the ",(0,l.kt)("inlineCode",{parentName:"p"},"args")," table in the menu is passed as a first argument to the event you register."),(0,l.kt)("p",null,"Using this event we also register a new context menu with it's own options."),(0,l.kt)("p",null,"By defining a ",(0,l.kt)("inlineCode",{parentName:"p"},"menu")," param to be the id of the first menu we can get the back arrow button next to the menu title that will take us back."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/TkaH2P9.png",alt:"menu_example"}),"\n",(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/0mMmwgi.png",alt:"metadata"}),"\n",(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/RbT1tKX.png",alt:"sub_menu"}),"\n",(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/zjIiROj.png",alt:"event_menu"})))}k.isMDXComponent=!0}}]);