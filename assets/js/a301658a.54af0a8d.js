"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4467],{9613:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),y=u(n),f=o,v=y["".concat(s,".").concat(f)]||y[f]||p[f]||i;return n?r.createElement(v,a(a({ref:t},l),{},{components:n})):r.createElement(v,a({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=y;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},8825:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var r=n(5443),o=n(3010),i=(n(9496),n(9613)),a=["components"],c={},s=void 0,u={unversionedId:"ox_inventory/Functions/Server/setPlayerInventory",id:"ox_inventory/Functions/Server/setPlayerInventory",title:"setPlayerInventory",description:"Creates and sets the player's inventory.",source:"@site/docs/ox_inventory/Functions/Server/setPlayerInventory.md",sourceDirName:"ox_inventory/Functions/Server",slug:"/ox_inventory/Functions/Server/setPlayerInventory",permalink:"/docs/ox_inventory/Functions/Server/setPlayerInventory",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_inventory/Functions/Server/setPlayerInventory.md",tags:[],version:"current",lastUpdatedAt:1662600256,formattedLastUpdatedAt:"9/8/2022",frontMatter:{},sidebar:"ox_inventory",previous:{title:"Items",permalink:"/docs/ox_inventory/Functions/Server/Items"},next:{title:"Guides",permalink:"/docs/ox_inventory/Guides/"}},l={},p=[],y={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Creates and sets the player's inventory."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"-- player: table\n    -- source: number\n    -- identifier: string\n    -- name: string\n    -- groups: table (optional)\n    -- sex: string (optional)\n    -- dateofbirth: string (optional)\n-- data: table\nexports.ox_inventory:setPlayerInventory(player, data)\n")))}f.isMDXComponent=!0}}]);