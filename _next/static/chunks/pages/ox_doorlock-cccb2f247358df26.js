(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1046],{1047:function(e,n,r){"use strict";r.d(n,{Z:function(){return j}});var t=r(959),o=r(507),i=r.n(o),s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},l=Object.defineProperty,a=Object.defineProperties,d=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,n,r)=>n in e?l(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,x=(e,n)=>{for(var r in n||(n={}))h.call(n,r)&&p(e,r,n[r]);if(c)for(var r of c(n))u.call(n,r)&&p(e,r,n[r]);return e},v=(e,n)=>a(e,d(n)),f=(e,n)=>{var r={};for(var t in e)h.call(e,t)&&0>n.indexOf(t)&&(r[t]=e[t]);if(null!=e&&c)for(var t of c(e))0>n.indexOf(t)&&u.call(e,t)&&(r[t]=e[t]);return r},j=(e,n,r)=>{let o=(0,t.forwardRef)((n,o)=>{var{color:i="currentColor",size:l=24,stroke:a=2,children:d}=n,c=f(n,["color","size","stroke","children"]);return(0,t.createElement)("svg",x(v(x({ref:o},s),{width:l,height:l,stroke:i,strokeWidth:a,className:`tabler-icon tabler-icon-${e}`}),c),[...r.map(([e,n])=>(0,t.createElement)(e,n)),...d||[]])});return o.propTypes={color:i().string,size:i().oneOfType([i().string,i().number]),stroke:i().oneOfType([i().string,i().number])},o.displayName=`${n}`,o}},5537:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ox_doorlock",function(){return r(4541)}])},4541:function(e,n,r){"use strict";r.r(n),r.d(n,{__toc:function(){return a}});var t=r(1527),o=r(2059),i=r(3443),s=r(8242),l=r(4185);let a=[{depth:2,value:"Installation",id:"installation"},{depth:3,value:"Install all resource dependencies.",id:"install-all-resource-dependencies"},{depth:3,value:"Download a release or build the source code.",id:"download-a-release-or-build-the-source-code"},{depth:3,value:"Install optional dependencies.",id:"install-optional-dependencies"},{depth:2,value:"Opening the UI",id:"opening-the-ui"},{depth:2,value:"Convert doors",id:"convert-doors"},{depth:2,value:"Adding new native audio",id:"adding-new-native-audio"}];function d(e){let n=Object.assign({h1:"h1",p:"p",h2:"h2",strong:"strong",a:"a",h3:"h3",ul:"ul",li:"li",pre:"pre",code:"code",span:"span"},(0,i.a)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{children:"Ox Doorlock"}),"\n",(0,t.jsx)(l.Z,{repo:"https://github.com/overextended/ox_doorlock"}),"\n",(0,t.jsx)(n.p,{children:"A door management resource that can be used standalone or alongside ox_core, qb-core, and es_extended."}),"\n",(0,t.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(s.UW,{type:"info",children:(0,t.jsxs)(n.p,{children:["We ",(0,t.jsx)(n.strong,{children:"strongly"})," recommend referring to ",(0,t.jsx)(n.a,{href:"../guides",children:"Guides"})," for setting up Git, Node.js, and pnpm."]})}),"\n",(0,t.jsxs)(s.Rg,{children:[(0,t.jsx)(n.h3,{id:"install-all-resource-dependencies",children:"Install all resource dependencies."}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"../oxmysql",children:"oxmysql"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"../ox_lib/",children:"ox_lib"})}),"\n"]}),(0,t.jsxs)(n.h3,{id:"download-a-release-or-build-the-source-code",children:["Download a ",(0,t.jsx)(n.a,{href:"https://github.com/overextended/ox_doorlock/releases",children:"release"})," or build the source code."]}),(0,t.jsx)(n.pre,{"data-language":"bash","data-theme":"default",children:(0,t.jsxs)(n.code,{"data-language":"bash","data-theme":"default",children:[(0,t.jsxs)(n.span,{className:"line",children:[(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"git"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"clone"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"https://github.com/overextended/ox_doorlock.git"})]}),"\n",(0,t.jsxs)(n.span,{className:"line",children:[(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"cd"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"ox_doorlock/web"})]}),"\n",(0,t.jsxs)(n.span,{className:"line",children:[(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"pnpm"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"i"})]}),"\n",(0,t.jsxs)(n.span,{className:"line",children:[(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"pnpm"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"build"})]})]})}),(0,t.jsx)(n.h3,{id:"install-optional-dependencies",children:"Install optional dependencies."}),(0,t.jsx)(n.p,{children:"These resources aren't required but provide additional functionality."}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"../ox_target/",children:"ox_target"})," or ",(0,t.jsx)(n.a,{href:"https://github.com/qbcore-framework/qb-target",children:"qb-target"})]}),"\n"]})]}),"\n",(0,t.jsx)(n.h2,{id:"opening-the-ui",children:"Opening the UI"}),"\n",(0,t.jsxs)(n.p,{children:["If you have installed and started the resource, you can use ",(0,t.jsx)(n.code,{children:"/doorlock"})," to open the UI."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If the cursor is displayed but not the UI then you have not built it."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"You may not be authorised to use the command."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Enter ",(0,t.jsx)(n.code,{children:"test_ace player.1 command.doorlock"})," in the server console (replace 1 with your server id)."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"convert-doors",children:"Convert doors"}),"\n",(0,t.jsx)(n.p,{children:"Door configuration files written for nui_doorlock (and its fork, qb-doorlock) can be automatically added to your MySQL database."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Any files with the ",(0,t.jsx)(n.code,{children:".lua"})," extension placed in the ",(0,t.jsx)(n.code,{children:"ox_doorlock/convert"})," directory will be read on resource start."]}),"\n",(0,t.jsx)(n.li,{children:"If the directory doesn't exist, you can create it."}),"\n",(0,t.jsx)(n.li,{children:"Conversion cannot be guaranteed, especially if the config was not written for nui_doorlock."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"adding-new-native-audio",children:"Adding new native audio"}),"\n",(0,t.jsxs)(n.p,{children:["A guide can be found ",(0,t.jsx)(n.a,{href:"https://forum.cfx.re/t/how-to-make-a-simplesound-using-native-audio/5156001",children:"here"})," for adding new native audio."]})]})}n.default=(0,o.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.a)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)},pageOpts:{filePath:"pages/ox_doorlock.mdx",route:"/ox_doorlock",title:"Ox Doorlock",headings:a},pageNextRoute:"/ox_doorlock"})},3478:function(e,n,r){"use strict";r.d(n,{WR:function(){return u},o6:function(){return p},eX:function(){return h},aj:function(){return v},Vg:function(){return x}});var t=r(1527);r(959);var o=r(1047),i=(0,o.Z)("brand-github","IconBrandGithub",[["path",{d:"M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5",key:"svg-0"}]]),s=(0,o.Z)("file-text","IconFileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]]),l=(0,o.Z)("download","IconDownload",[["path",{d:"M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2",key:"svg-0"}],["path",{d:"M7 11l5 5l5 -5",key:"svg-1"}],["path",{d:"M12 4l0 12",key:"svg-2"}]]),a=(0,o.Z)("tag","IconTag",[["path",{d:"M7.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-0"}],["path",{d:"M3 6v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0l5.592 -5.592a2.41 2.41 0 0 0 0 -3.408l-7.71 -7.71a2 2 0 0 0 -1.414 -.586h-5.172a3 3 0 0 0 -3 3z",key:"svg-1"}]]),d=(0,o.Z)("brand-npm","IconBrandNpm",[["path",{d:"M1 8h22v7h-12v2h-4v-2h-6z",key:"svg-0"}],["path",{d:"M7 8v7",key:"svg-1"}],["path",{d:"M14 8v7",key:"svg-2"}],["path",{d:"M17 11v4",key:"svg-3"}],["path",{d:"M4 11v4",key:"svg-4"}],["path",{d:"M11 11v1",key:"svg-5"}],["path",{d:"M20 11v4",key:"svg-6"}]]);let c=e=>{let{side:n="left",children:r,icon:o,link:i}=e;return(0,t.jsx)("div",{className:"h-fit w-fit",children:(0,t.jsx)("a",{href:i,children:(0,t.jsxs)("div",{className:"flex w-26 items-center justify-center gap-1.5 rounded-sm border border-black p-1.5 text-black hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black mt-2",children:["left"===n&&(0,t.jsx)("div",{children:o}),r,"right"===n&&(0,t.jsx)("div",{children:o})]})})})};function h(e){return(0,t.jsx)(c,{icon:(0,t.jsx)(i,{}),side:e.side,link:e.link,children:e.label||"Github"})}function u(e){return(0,t.jsx)(c,{icon:(0,t.jsx)(s,{}),side:e.side,link:e.link,children:e.label||"Documentation"})}function p(e){return(0,t.jsx)(c,{icon:(0,t.jsx)(l,{}),side:e.side,link:e.link,children:e.label||"Download"})}function x(e){return(0,t.jsx)(c,{icon:(0,t.jsx)(a,{}),side:e.side,link:e.link,children:e.label||"Releases"})}function v(e){return(0,t.jsx)(c,{icon:(0,t.jsx)(d,{}),side:e.side,link:e.link,children:e.label||"Package"})}},4185:function(e,n,r){"use strict";var t=r(1527);r(959);var o=r(3478);n.Z=e=>{let{repo:n,docs:r}=e;return(0,t.jsxs)("div",{className:"flex flex-wrap gap-1",children:[(0,t.jsx)(o.eX,{link:n}),(0,t.jsx)(o.Vg,{link:"".concat(n,"/releases")}),r&&(0,t.jsx)(o.WR,{link:r})]})}},4049:function(e,n,r){"use strict";var t=r(6257);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,n,r,o,i,s){if(s!==t){var l=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function n(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:i,resetWarningCache:o};return r.PropTypes=r,r}},507:function(e,n,r){e.exports=r(4049)()},6257:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(e){e.O(0,[2059,9774,2888,179],function(){return e(e.s=5537)}),_N_E=e.O()}]);