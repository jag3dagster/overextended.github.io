(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4491],{7636:function(e,s,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ox_lib/Modules/Callback/Lua/Server",function(){return l(8970)}])},8970:function(e,s,l){"use strict";l.r(s);var r=l(1527),n=l(6510),i=l(6736);function a(e){let s=Object.assign({h2:"h2",h3:"h3",p:"p",pre:"pre",code:"code",span:"span",ul:"ul",li:"li"},(0,i.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h2,{id:"trigger-client-callback",children:"Trigger Client Callback"}),"\n",(0,r.jsx)(s.h3,{id:"libcallback",children:"lib.callback"}),"\n",(0,r.jsx)(s.p,{children:"The response is handled in a separate coroutine."}),"\n",(0,r.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,r.jsx)(s.code,{"data-language":"lua","data-theme":"default",children:(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"lib."}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"callback"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(name, playerId, cb, "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"..."}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})]})})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["name: ",(0,r.jsx)(s.code,{children:"string"})]}),"\n",(0,r.jsxs)(s.li,{children:["playerId: ",(0,r.jsx)(s.code,{children:"number"})]}),"\n",(0,r.jsxs)(s.li,{children:["cb: ",(0,r.jsx)(s.code,{children:"function"})]}),"\n",(0,r.jsxs)(s.li,{children:["...: ",(0,r.jsx)(s.code,{children:"any"})]}),"\n"]}),"\n",(0,r.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,r.jsxs)(s.code,{"data-language":"lua","data-theme":"default",children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"lib."}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"callback"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'ox:getNearbyVehicles'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", source, "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-parameter)"},children:"vehicles"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"for"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" i "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"#"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"vehicles "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"do"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"DeleteEntity"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(entity)"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", args.radius)"})]})]})}),"\n",(0,r.jsx)(s.h3,{id:"libcallbackawait",children:"lib.callback.await"}),"\n",(0,r.jsx)(s.p,{children:"The current coroutine is yielded until a response is received."}),"\n",(0,r.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,r.jsx)(s.code,{"data-language":"lua","data-theme":"default",children:(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"lib.callback."}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"await"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(name, playerId, "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"..."}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})]})})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["name: ",(0,r.jsx)(s.code,{children:"string"})]}),"\n",(0,r.jsxs)(s.li,{children:["playerId: ",(0,r.jsx)(s.code,{children:"number"})]}),"\n",(0,r.jsxs)(s.li,{children:["...: ",(0,r.jsx)(s.code,{children:"any"})]}),"\n"]}),"\n",(0,r.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,r.jsxs)(s.code,{"data-language":"lua","data-theme":"default",children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" vehicles "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" lib.callback."}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"await"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'ox:getNearbyVehicles'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", source, args.radius)"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"for"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" i "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"#"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"vehicles "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"do"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"DeleteEntity"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(entity)"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"})})]})}),"\n",(0,r.jsx)(s.h2,{id:"register-server-callback",children:"Register Server Callback"}),"\n",(0,r.jsx)(s.h3,{id:"libcallbackregister",children:"lib.callback.register"}),"\n",(0,r.jsx)(s.p,{children:"Register an event handler for responding to client requests."}),"\n",(0,r.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,r.jsx)(s.code,{"data-language":"lua","data-theme":"default",children:(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"lib.callback."}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"register"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(name, cb)"})]})})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["name: ",(0,r.jsx)(s.code,{children:"string"})]}),"\n",(0,r.jsxs)(s.li,{children:["cb: ",(0,r.jsx)(s.code,{children:"function"})]}),"\n"]}),"\n",(0,r.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,r.jsxs)(s.code,{"data-language":"lua","data-theme":"default",children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"lib.callback."}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"register"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'ox_inventory:getItemCount'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-parameter)"},children:"source"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-parameter)"},children:"item"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-parameter)"},children:"metadata"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-parameter)"},children:"target"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" inventory "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" target "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"and"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Inventory"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(target) "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"or"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Inventory"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(source)"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" (inventory "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"and"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" Inventory."}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"GetItem"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(inventory, item, metadata, "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")) "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"or"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"0"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})]})]})})]})}l(5941),s.default=(0,n.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,i.ah)(),e.components);return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(a,{...e})}):a(e)},pageOpts:{filePath:"pages/ox_lib/Modules/Callback/Lua/Server.mdx",route:"/ox_lib/Modules/Callback/Lua/Server",headings:[{depth:2,value:"Trigger Client Callback",id:"trigger-client-callback"},{depth:3,value:"lib.callback",id:"libcallback"},{depth:3,value:"lib.callback.await",id:"libcallbackawait"},{depth:2,value:"Register Server Callback",id:"register-server-callback"},{depth:3,value:"lib.callback.register",id:"libcallbackregister"}],title:"Server"},pageNextRoute:"/ox_lib/Modules/Callback/Lua/Server"})}},function(e){e.O(0,[6510,9774,2888,179],function(){return e(e.s=7636)}),_N_E=e.O()}]);