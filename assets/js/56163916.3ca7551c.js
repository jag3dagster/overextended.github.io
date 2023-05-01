"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6995],{9613:(e,r,a)=>{a.d(r,{Zo:()=>p,kt:()=>f});var t=a(9496);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function l(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?l(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function i(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=t.createContext({}),c=function(e){var r=t.useContext(o),a=r;return e&&(a="function"==typeof e?e(r):s(s({},r),e)),a},p=function(e){var r=c(e.components);return t.createElement(o.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(a),f=n,d=m["".concat(o,".").concat(f)]||m[f]||u[f]||l;return a?t.createElement(d,s(s({ref:r},p),{},{components:a})):t.createElement(d,s({ref:r},p))}));function f(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=a.length,s=new Array(l);s[0]=m;var i={};for(var o in r)hasOwnProperty.call(r,o)&&(i[o]=r[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<l;c++)s[c]=a[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3506:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var t=a(4250),n=(a(9496),a(9613));const l={},s="Scalar",i={unversionedId:"oxmysql/Usage/scalar",id:"oxmysql/Usage/scalar",title:"Scalar",description:"Returns the first column for a single row.",source:"@site/docs/oxmysql/Usage/scalar.md",sourceDirName:"oxmysql/Usage",slug:"/oxmysql/Usage/scalar",permalink:"/docs/oxmysql/Usage/scalar",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/oxmysql/Usage/scalar.md",tags:[],version:"current",lastUpdatedAt:1682810473,formattedLastUpdatedAt:"Apr 29, 2023",frontMatter:{},sidebar:"oxmysql",previous:{title:"Query",permalink:"/docs/oxmysql/Usage/query"},next:{title:"Single",permalink:"/docs/oxmysql/Usage/single"}},o={},c=[{value:"Lua",id:"lua",level:2},{value:"Callback",id:"callback",level:3},{value:"Promise",id:"promise",level:3},{value:"JavaScript",id:"javascript",level:2},{value:"Callback",id:"callback-1",level:3},{value:"Promise",id:"promise-1",level:3}],p={toc:c};function u(e){let{components:r,...a}=e;return(0,n.kt)("wrapper",(0,t.Z)({},p,a,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"scalar"},"Scalar"),(0,n.kt)("p",null,"Returns the first column for a single row."),(0,n.kt)("h2",{id:"lua"},"Lua"),(0,n.kt)("h3",{id:"callback"},"Callback"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"-- alias: exports.oxmysql:scalar\n-- alias: MySQL.Async.fetchScalar\n-- alias: exports.ghmattimysql:scalar\n\nMySQL.scalar('SELECT firstname FROM users WHERE identifier = ?', {playerIdentifier}, function(firstname)\n    print(firstname)\nend)\n")),(0,n.kt)("h3",{id:"promise"},"Promise"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"-- alias: exports.oxmysql:scalar_async\n-- alias: MySQL.Sync.fetchScalar\n-- alias: exports.ghmattimysql:scalarSync\n\nlocal firstname = MySQL.scalar.await('SELECT firstname FROM users WHERE identifier = ?', {playerIdentifier})\nprint(firstname)\n")),(0,n.kt)("h2",{id:"javascript"},"JavaScript"),(0,n.kt)("h3",{id:"callback-1"},"Callback"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"// alias: exports.oxmysql.scalar\n\nMySQL.scalar('SELECT firstname FROM users WHERE identifier = ?', [playerIdentifier], (firstname) => {\n  console.log(firstname)\n})\n")),(0,n.kt)("h3",{id:"promise-1"},"Promise"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"// alias: exports.oxmysql.scalar_async\n\nconst firstname = await MySQL.scalar('SELECT firstname FROM users WHERE identifier = ?', [playerIdentifier])\nconsole.log(firstname)\n")))}u.isMDXComponent=!0}}]);