(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5673],{4074:function(s,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ox_lib/Modules/AddCommand/Server",function(){return r(7557)}])},7557:function(s,e,r){"use strict";r.r(e);var l=r(1527),n=r(6510),i=r(6736);function o(s){let e=Object.assign({h1:"h1",p:"p",pre:"pre",code:"code",span:"span",ul:"ul",li:"li"},(0,i.ah)(),s.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h1,{children:"Server"}),"\n",(0,l.jsx)(e.p,{children:"Registers commands and simplifies argument validation, permissions, and chat suggestions."}),"\n",(0,l.jsx)(e.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsx)(e.code,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"lib."}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"addCommand"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(commandName, properties, cb)"})]})})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["commandName: ",(0,l.jsx)(e.code,{children:"string"})," or ",(0,l.jsx)(e.code,{children:"string[]"})]}),"\n",(0,l.jsxs)(e.li,{children:["properties: ",(0,l.jsx)(e.code,{children:"table"})," or ",(0,l.jsx)(e.code,{children:"false"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["help?: ",(0,l.jsx)(e.code,{children:"string"})]}),"\n",(0,l.jsxs)(e.li,{children:["restricted?: ",(0,l.jsx)(e.code,{children:"boolean"})," or ",(0,l.jsx)(e.code,{children:"string"})," or ",(0,l.jsx)(e.code,{children:"string[]"})]}),"\n",(0,l.jsxs)(e.li,{children:["params?: ",(0,l.jsx)(e.code,{children:"table[]"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["name: ",(0,l.jsx)(e.code,{children:"string"})]}),"\n",(0,l.jsxs)(e.li,{children:["help?: ",(0,l.jsx)(e.code,{children:"string"})]}),"\n",(0,l.jsxs)(e.li,{children:["type?: ",(0,l.jsx)(e.code,{children:"'number'"})," or ",(0,l.jsx)(e.code,{children:"'playerId'"})," or ",(0,l.jsx)(e.code,{children:"'string'"})]}),"\n",(0,l.jsxs)(e.li,{children:["optional?: ",(0,l.jsx)(e.code,{children:"boolean"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(e.code,{"data-language":"lua","data-theme":"default",children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"lib."}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"addCommand"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'giveitem'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:", {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    help "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Gives an item to a player'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    params "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        {"})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            name "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'target'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            type "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'playerId'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            help "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Target player\\'s server id'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        },"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        {"})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            name "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'item'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            type "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'string'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            help "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Name of the item to give'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        },"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        {"})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            name "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'count'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            type "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'number'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            help "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Amount of the item to give, or blank to give 1'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            optional "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        },"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        {"})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            name "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'metatype'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            help "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Sets the item\\'s \"metadata.type\"'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            optional "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        },"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    },"})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    restricted "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'group.admin'"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}, "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-parameter)"},children:"source"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-parameter)"},children:"args"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-parameter)"},children:"raw"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" item "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"Items"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(args.item)"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" item "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"then"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        Inventory."}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"AddItem"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(args.target, item.name, args.count "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"or"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:", args.metatype)"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"})]})]})})]})}r(5941),e.default=(0,n.j)({MDXContent:function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,i.ah)(),s.components);return e?(0,l.jsx)(e,{...s,children:(0,l.jsx)(o,{...s})}):o(s)},pageOpts:{filePath:"pages/ox_lib/Modules/AddCommand/Server.mdx",route:"/ox_lib/Modules/AddCommand/Server",headings:[{depth:1,value:"Server",id:"server"}],title:"Server"},pageNextRoute:"/ox_lib/Modules/AddCommand/Server"})}},function(s){s.O(0,[6510,9774,2888,179],function(){return s(s.s=4074)}),_N_E=s.O()}]);