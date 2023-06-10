(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2288],{2686:function(s,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/oxmysql/Functions/transaction",function(){return n(3137)}])},3137:function(s,e,n){"use strict";n.r(e);var l=n(1527),r=n(6510),i=n(6736);n(5941);var o=n(6287);function a(s){let e=Object.assign({p:"p",br:"br",h2:"h2",pre:"pre",code:"code",span:"span",strong:"strong",ul:"ul",li:"li",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,i.ah)(),s.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(e.p,{children:["A transaction executes multiple queries and commits them only if all succeed.",(0,l.jsx)(e.br,{}),"\n","If one fails, none of the queries are committed."]}),"\n",(0,l.jsx)(e.p,{children:"The return value is a boolean, which is the result of the transaction."}),"\n",(0,l.jsx)(e.h2,{id:"specific-format",children:"Specific format"}),"\n",(0,l.jsxs)(e.p,{children:["When using this format, you must pass an array containing sets of queries and parameters to the transaction method.",(0,l.jsx)(e.br,{}),"\n","In this case, your queries do not necessarily match and the values are unique to each query."]}),"\n",(0,l.jsx)(e.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(e.code,{"data-language":"lua","data-theme":"default",children:[(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:'-- You might rename "values" as "parameters" for mysql-async compatibility.'})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" queries "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    { query "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'INSERT INTO `test` (id) VALUES (?)'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:", values "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" { "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" }},"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    { query "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'INSERT INTO `test` (id, name) VALUES (?, ?)'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:", values "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" { "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"2"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'bob' "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}},"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:" "}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"-- You can also pass an array of arrays."})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" queries "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  { "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'INSERT INTO `test` (id) VALUES (?)'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:", { "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" } },"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  { "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'INSERT INTO `test` (id, name) VALUES (?, ?)'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:", { "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"2"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'bob' "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"} },"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,l.jsx)(e.h2,{id:"shared-format",children:"Shared format"}),"\n",(0,l.jsxs)(e.p,{children:["When using this format, you must pass an array containing queries and a set containing shared parameters to the transaction method.",(0,l.jsx)(e.br,{}),"\n","In this case, your queries do not necessarily match and the values are unique to each query."]}),"\n",(0,l.jsx)(e.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(e.code,{"data-language":"lua","data-theme":"default",children:[(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:'-- You might rename "values" as "parameters" for mysql-async compatibility.'})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" queries "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'INSERT INTO `test` (id, name) VALUES (@someid, @somename)'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'SET `name` = @newname IN `test` WHERE `id` = @someid'"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" values "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    someid "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"2"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    somename "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'John Doe'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    newname "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'John Notdoe'"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,l.jsx)(e.h2,{id:"promise",children:"Promise"}),"\n",(0,l.jsxs)(o.mQ,{items:["Lua","JS"],children:[(0,l.jsx)(o.OK,{children:(0,l.jsx)(e.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(e.code,{"data-language":"lua","data-theme":"default",children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" success "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" MySQL.transaction."}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"await"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(queries, values "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"--[[leave nil for specific format]]"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"print"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(success)"})]})]})})}),(0,l.jsx)(o.OK,{children:(0,l.jsx)(e.pre,{"data-language":"js","data-theme":"default",children:(0,l.jsxs)(e.code,{"data-language":"js","data-theme":"default",children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"success"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"await"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"MySQL"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".transaction"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(queries"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" values "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"/*leave nil for specific format*/"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"console"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".log"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(success)"})]})]})})})]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"Aliases"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.code,{children:"MySQL.Sync.transaction"})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.code,{children:"exports.ghmattimysql.transaction"})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.code,{children:"exports.oxmysql.transaction_async"})}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"callback",children:"Callback"}),"\n",(0,l.jsxs)(o.mQ,{items:["Lua","JS"],children:[(0,l.jsx)(o.OK,{children:(0,l.jsx)(e.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(e.code,{"data-language":"lua","data-theme":"default",children:[(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"-- specific"})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"MySQL."}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"transaction"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(queries, values, "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-parameter)"},children:"success"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"print"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(success)"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:" "}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"-- shared"})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"MySQL."}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"transaction"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(queries, "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-parameter)"},children:"success"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"print"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(success)"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"})]})]})})}),(0,l.jsx)(o.OK,{children:(0,l.jsx)(e.pre,{"data-language":"js","data-theme":"default",children:(0,l.jsxs)(e.code,{"data-language":"js","data-theme":"default",children:[(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// specific"})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"MySQL"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".transaction"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(queries"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" (success) "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"console"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".log"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(success)"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"})"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:" "}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// shared"})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"MySQL"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".transaction"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(queries"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" values"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" (success) "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"console"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".log"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(success)"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"})"})})]})})})]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"Aliases"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.code,{children:"MySQL.Async.transaction"})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.code,{children:"exports.ghmattimysql.transaction"})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.code,{children:"exports.oxmysql.transaction"})}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"transaction-isolation-level",children:"Transaction Isolation Level"}),"\n",(0,l.jsxs)(e.p,{children:["This can be set through the convar ",(0,l.jsx)(e.code,{children:"mysql_transaction_isolation_level"}),", and is an integer ranging from ",(0,l.jsx)(e.code,{children:"1-4"}),".",(0,l.jsx)(e.br,{}),"\n","The default value is 2."]}),"\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"Convar Value"}),(0,l.jsx)(e.th,{children:"Result"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"1"}),(0,l.jsx)(e.td,{children:"Repeatable Read"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"2"}),(0,l.jsx)(e.td,{children:"Read Committed"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"3"}),(0,l.jsx)(e.td,{children:"Read Uncommitted"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"4"}),(0,l.jsx)(e.td,{children:"Serializable"})]})]})]})]})}e.default=(0,r.j)({MDXContent:function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,i.ah)(),s.components);return e?(0,l.jsx)(e,{...s,children:(0,l.jsx)(a,{...s})}):a(s)},pageOpts:{filePath:"pages/oxmysql/Functions/transaction.mdx",route:"/oxmysql/Functions/transaction",frontMatter:{title:"Transaction"},headings:[{depth:2,value:"Specific format",id:"specific-format"},{depth:2,value:"Shared format",id:"shared-format"},{depth:2,value:"Promise",id:"promise"},{depth:2,value:"Callback",id:"callback"},{depth:2,value:"Transaction Isolation Level",id:"transaction-isolation-level"}],title:"Transaction"},pageNextRoute:"/oxmysql/Functions/transaction"})}},function(s){s.O(0,[6510,9774,2888,179],function(){return s(s.s=2686)}),_N_E=s.O()}]);