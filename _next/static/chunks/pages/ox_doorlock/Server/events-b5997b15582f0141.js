(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[577],{1693:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ox_doorlock/Server/events",function(){return r(6251)}])},6251:function(e,s,r){"use strict";r.r(s);var n=r(1527),o=r(6510),t=r(6736);function l(e){let s=Object.assign({h1:"h1",h2:"h2",p:"p",h3:"h3",pre:"pre",code:"code",span:"span",ul:"ul",li:"li"},(0,t.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{children:"Events"}),"\n",(0,n.jsx)(s.h2,{id:"triggers",children:"Triggers"}),"\n",(0,n.jsx)(s.p,{children:"These events are safe to trigger and handle in other scripts."}),"\n",(0,n.jsx)(s.h3,{id:"ox_doorlocksetstate",children:"ox_doorlock:setState"}),"\n",(0,n.jsx)(s.p,{children:"Can be triggered to lock or unlock a door."}),"\n",(0,n.jsx)(s.pre,{"data-language":"text","data-theme":"default",children:(0,n.jsx)(s.code,{"data-language":"text","data-theme":"default",children:(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"TriggerEvent('ox_doorlock:setState', doorId, state)"})})})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["doorId: ",(0,n.jsx)(s.code,{children:"number"})]}),"\n",(0,n.jsxs)(s.li,{children:["state: ",(0,n.jsx)(s.code,{children:"0"})," or ",(0,n.jsx)(s.code,{children:"1"})]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"handlers",children:"Handlers"}),"\n",(0,n.jsx)(s.p,{children:"These events shouldn't be triggered by any other scripts."}),"\n",(0,n.jsx)(s.h3,{id:"ox_doorlockstatechanged",children:"ox_doorlock:stateChanged"}),"\n",(0,n.jsx)(s.p,{children:"Triggered when a doors state is updated."}),"\n",(0,n.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,n.jsx)(s.code,{"data-language":"lua","data-theme":"default",children:(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"AddEventHandler"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'ox_doorlock:stateChanged'"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-parameter)"},children:"source"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-parameter)"},children:"doorId"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-parameter)"},children:"state"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-parameter)"},children:"usedItem"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})]})})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["source: ",(0,n.jsx)(s.code,{children:"number"})," or ",(0,n.jsx)(s.code,{children:"nil"})]}),"\n",(0,n.jsxs)(s.li,{children:["doorId: ",(0,n.jsx)(s.code,{children:"number"})]}),"\n",(0,n.jsxs)(s.li,{children:["state: ",(0,n.jsx)(s.code,{children:"0"})," or ",(0,n.jsx)(s.code,{children:"1"})]}),"\n",(0,n.jsxs)(s.li,{children:["usedItem: ",(0,n.jsx)(s.code,{children:"string"})," or ",(0,n.jsx)(s.code,{children:"false"})]}),"\n"]})]})}r(5941),s.default=(0,o.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,t.ah)(),e.components);return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)},pageOpts:{filePath:"pages/ox_doorlock/Server/events.mdx",route:"/ox_doorlock/Server/events",headings:[{depth:1,value:"Events",id:"events"},{depth:2,value:"Triggers",id:"triggers"},{depth:3,value:"ox_doorlock:setState",id:"ox_doorlocksetstate"},{depth:2,value:"Handlers",id:"handlers"},{depth:3,value:"ox_doorlock:stateChanged",id:"ox_doorlockstatechanged"}],title:"Events"},pageNextRoute:"/ox_doorlock/Server/events"})}},function(e){e.O(0,[6510,9774,2888,179],function(){return e(e.s=1693)}),_N_E=e.O()}]);