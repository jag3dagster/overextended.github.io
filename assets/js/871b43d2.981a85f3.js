"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4772],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,y=d["".concat(i,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(y,l(l({ref:t},u),{},{components:r})):n.createElement(y,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9619:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(4250),a=(r(9496),r(9613));const o={},l="Usage",s={unversionedId:"oxmysql/Usage/index",id:"oxmysql/Usage/index",title:"Usage",description:"lib/MySQL",source:"@site/docs/oxmysql/Usage/index.md",sourceDirName:"oxmysql/Usage",slug:"/oxmysql/Usage/",permalink:"/docs/oxmysql/Usage/",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/oxmysql/Usage/index.md",tags:[],version:"current",lastUpdatedAt:1682810473,formattedLastUpdatedAt:"Apr 29, 2023",frontMatter:{},sidebar:"oxmysql",previous:{title:"Using the Debug UI",permalink:"/docs/oxmysql/Getting Started/ui"},next:{title:"Insert",permalink:"/docs/oxmysql/Usage/insert"}},i={},p=[{value:"lib/MySQL",id:"libmysql",level:2},{value:"Lua",id:"lua",level:3},{value:"JavaScript",id:"javascript",level:3},{value:"Placeholders",id:"placeholders",level:2},{value:"Upsert",id:"upsert",level:2}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"usage"},"Usage"),(0,a.kt)("h2",{id:"libmysql"},"lib/MySQL"),(0,a.kt)("p",null,"Resources can import oxmysql methods by including our library, granting some type-checking and minor performance improvements over raw export calls."),(0,a.kt)("h3",{id:"lua"},"Lua"),(0,a.kt)("p",null,"Modify ",(0,a.kt)("inlineCode",{parentName:"p"},"fxmanifest.lua")," for your resource, and add the following above any other script files."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"server_script '@oxmysql/lib/MySQL.lua'\n")),(0,a.kt)("p",null,"If you are using VSCode with ",(0,a.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=sumneko.lua"},"sumneko Lua")," you can get access to some basic types and intellisense."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"Lua.workspace.library": [\n  "C:\\\\pathtoserver\\\\resources\\\\oxmysql\\\\lib\\\\define.lua",\n]\n')),(0,a.kt)("h3",{id:"javascript"},"JavaScript"),(0,a.kt)("p",null,"Use your favourite package manager to install our ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@overextended/oxmysql"},"node package"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# With pnpm\npnpm add @overextended/oxmysql\n\n# With Yarn\nyarn add @overextended/oxmysql\n\n# With npm\nnpm install @overextended/oxmysql\n")),(0,a.kt)("p",null,"Import the oxmysql object into your resource."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { oxmysql as MySQL } from '@overextended/oxmysql';\n")),(0,a.kt)("h2",{id:"placeholders"},"Placeholders"),(0,a.kt)("p",null,"Safely format queries by using placeholders in the query, and sending arguments in an array or object.",(0,a.kt)("br",{parentName:"p"}),"\n","Named placeholders are not recommended, and unsupported when using MySQL.prepare."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"MySQL.query('SELECT * FROM users WHERE identifier = ?', { 'license:abcdefg' })\nMySQL.query('SELECT * FROM users WHERE identifier = :identifier', { identifier = 'license:abcdefg' })\n")),(0,a.kt)("h2",{id:"upsert"},"Upsert"),(0,a.kt)("p",null,"When uncertain if a row should be inserted into the database, or an existing row should be updated, queries should check for duplicate keys."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"MySQL.prepare('INSERT INTO ox_inventory (owner, name, data) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE data = VALUES(data)', { owner, dbId, inventory })\n")),(0,a.kt)("p",null,"This is preferred over checking the existence of a row, then inserting or updating depending on the result.",(0,a.kt)("br",{parentName:"p"}),"\n","Furthermore, unlike using 'REPLACE INTO', the row is not deleted and re-inserted."))}c.isMDXComponent=!0}}]);