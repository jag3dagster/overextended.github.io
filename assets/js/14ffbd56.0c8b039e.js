"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9519],{9613:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>v});var n=t(9496);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),i=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},s=function(e){var r=i(e.components);return n.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),u=i(t),v=a,y=u["".concat(c,".").concat(v)]||u[v]||p[v]||o;return t?n.createElement(y,l(l({ref:r},s),{},{components:t})):n.createElement(y,l({ref:r},s))}));function v(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=u;var d={};for(var c in r)hasOwnProperty.call(r,c)&&(d[c]=r[c]);d.originalType=e,d.mdxType="string"==typeof e?e:a,l[1]=d;for(var i=2;i<o;i++)l[i]=t[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},491:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>i});var n=t(4250),a=(t(9496),t(9613));const o={title:"Events"},l=void 0,d={unversionedId:"ox_core/Player/Server/events",id:"ox_core/Player/Server/events",title:"Events",description:"Server events",source:"@site/docs/ox_core/Player/Server/events.md",sourceDirName:"ox_core/Player/Server",slug:"/ox_core/Player/Server/events",permalink:"/docs/ox_core/Player/Server/events",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_core/Player/Server/events.md",tags:[],version:"current",lastUpdatedAt:1682810473,formattedLastUpdatedAt:"Apr 29, 2023",frontMatter:{title:"Events"},sidebar:"ox_core",previous:{title:"Server",permalink:"/docs/ox_core/Player/Server/"},next:{title:"Methods",permalink:"/docs/ox_core/Player/Server/methods"}},c={},i=[{value:"Server events",id:"server-events",level:2},{value:"ox:playerLoaded",id:"oxplayerloaded",level:3},{value:"ox:setGroup",id:"oxsetgroup",level:3},{value:"ox:playerLogout",id:"oxplayerlogout",level:3},{value:"ox:characterDeleted",id:"oxcharacterdeleted",level:3},{value:"ox:licenseAdded",id:"oxlicenseadded",level:3},{value:"ox:licenseRemoved",id:"oxlicenseremoved",level:3},{value:"Networked events",id:"networked-events",level:2},{value:"ox:playerDeath",id:"oxplayerdeath",level:3},{value:"ox:setPlayerInService",id:"oxsetplayerinservice",level:3}],s={toc:i};function p(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"server-events"},"Server events"),(0,a.kt)("h3",{id:"oxplayerloaded"},"ox:playerLoaded"),(0,a.kt)("p",null,"Triggered after a player has selected a character."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"AddEventHandler('ox:playerLoaded', function(source, userid, charid) end)\n")),(0,a.kt)("h3",{id:"oxsetgroup"},"ox:setGroup"),(0,a.kt)("p",null,"Triggered when a player's grade in a group is modified with ",(0,a.kt)("inlineCode",{parentName:"p"},"player.setGroup"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"AddEventHandler('ox:setGroup', function(source, group, grade) end)\n")),(0,a.kt)("h3",{id:"oxplayerlogout"},"ox:playerLogout"),(0,a.kt)("p",null,"Triggered when a player logs out from their current character or disconnects from the server."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"AddEventHandler('ox:playerLogout', function(source, userid, charid) end)\n")),(0,a.kt)("h3",{id:"oxcharacterdeleted"},"ox:characterDeleted"),(0,a.kt)("p",null,"Triggered when a player has deleted a character."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"AddEventHandler('ox:characterDeleted', function(source, userid, charid) end)\n")),(0,a.kt)("h3",{id:"oxlicenseadded"},"ox:licenseAdded"),(0,a.kt)("p",null,"Triggered when a player has been granted a license."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"AddEventHandler('ox:licenseAdded', function(source, name) end)\n")),(0,a.kt)("h3",{id:"oxlicenseremoved"},"ox:licenseRemoved"),(0,a.kt)("p",null,"Triggered when a player's license is revoked."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"AddEventHandler('ox:licenseRemoved', function(source, name) end)\n")),(0,a.kt)("h2",{id:"networked-events"},"Networked events"),(0,a.kt)("h3",{id:"oxplayerdeath"},"ox:playerDeath"),(0,a.kt)("p",null,"Triggered on player death and revival."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"RegisterNetEvent('ox:playerDeath', function(isDead) end)\n")),(0,a.kt)("h3",{id:"oxsetplayerinservice"},"ox:setPlayerInService"),(0,a.kt)("p",null,'Can be triggered to set a player as "in service" for a specific group they are a member of.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"RegisterNetEvent('ox:setPlayerInService', function(group) end)\n")))}p.isMDXComponent=!0}}]);