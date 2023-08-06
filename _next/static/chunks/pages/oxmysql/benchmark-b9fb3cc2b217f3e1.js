(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1643],{7994:function(s,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/oxmysql/benchmark",function(){return r(8798)}])},8798:function(s,e,r){"use strict";r.r(e);var l=r(1527),n=r(6510),i=r(6736);function o(s){let e=Object.assign({h1:"h1",p:"p",br:"br",strong:"strong",ul:"ul",li:"li",code:"code",blockquote:"blockquote",pre:"pre",span:"span"},(0,i.ah)(),s.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h1,{children:"Benchmark"}),"\n",(0,l.jsxs)(e.p,{children:["Benchmarking is based on the time spent when to receive a response from exports.",(0,l.jsx)(e.br,{}),"\n","Real query speeds will be reported in the debug UI and in the server console."]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"Direct query"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.code,{children:"SELECT username FROM test_table WHERE id = 68 LIMIT 1"})}),"\n",(0,l.jsx)(e.li,{children:"Takes ~0.184ms"}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"Export"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.code,{children:"MySQL.query.await('SELECT username FROM test_table WHERE id = ? LIMIT 1', { 68 }"})}),"\n",(0,l.jsx)(e.li,{children:"Takes ~1.956ms"}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"Speeds will vary greatly based on system hardware, database settings, and the current workload."}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsxs)(e.p,{children:["[         script:test] initialise test_table",(0,l.jsx)(e.br,{}),"\n","[         script:test] Executed 3 queries in 25.2018ms",(0,l.jsx)(e.br,{}),"\n","[         script:test] insert test users",(0,l.jsx)(e.br,{}),"\n","[         script:test] Executed 10000 queries in 2411.9601ms",(0,l.jsx)(e.br,{}),"\n","[         script:test] select every 4th userid",(0,l.jsx)(e.br,{}),"\n","[         script:test] Executed 2500 queries in 2891.9658ms"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(e.code,{"data-language":"lua","data-theme":"default",children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"CreateThread"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"execQuery"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-parameter)"},children:"fn"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-parameter)"},children:"tbl"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-parameter)"},children:"query"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" start "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" os."}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"nanotime"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" result "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"fn"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(query "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"or"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" tbl, tbl)"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" finish "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" os."}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"nanotime"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"print"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Executed ' "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:".."}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"#"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"tbl "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:".."}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"' queries in ' "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:".."}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" (finish "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"-"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" start) "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"/"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"1e6"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:".."}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'ms'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" result"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" initTable "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"[[CREATE TABLE IF NOT EXISTS `test_table` ("})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"        `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"        `username` VARCHAR(50) NOT NULL DEFAULT '0',"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"        `identifier` VARCHAR(50) NOT NULL DEFAULT '0',"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"        PRIMARY KEY (`id`)"})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"        );]]"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'TRUNCATE `test_table`'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'ALTER TABLE `test_table` AUTO_INCREMENT = 1'"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    }"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"print"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'initialise test_table'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"execQuery"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(MySQL.transaction.await, initTable)"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" insertUsers "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {}"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"for"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" i "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"10000"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"do"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        insertUsers[i] "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" { "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'INSERT INTO `test_table` (username, identifier) VALUES (?, ?)'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:", { "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Testuser_'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:".."}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"i, "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'abcdef'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:".."}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"i }}"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"print"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'insert test users'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"execQuery"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(MySQL.transaction.await, insertUsers)"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" selectUserIds "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {}"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"for"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" i "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"10000"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"do"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" i "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"%"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"4"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"then"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            selectUserIds["}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"math.tointeger"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(i"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"/"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"4"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")] "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" { "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'abcdef'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:".."}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"i }"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"print"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'select every 4th userid'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"execQuery"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(MySQL.prepare.await, selectUserIds, "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'SELECT `id` FROM `test_table` WHERE `identifier` = ? LIMIT 1'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"})]})]})})]})}r(5941),e.default=(0,n.j)({MDXContent:function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,i.ah)(),s.components);return e?(0,l.jsx)(e,{...s,children:(0,l.jsx)(o,{...s})}):o(s)},pageOpts:{filePath:"pages/oxmysql/benchmark.mdx",route:"/oxmysql/benchmark",headings:[{depth:1,value:"Benchmark",id:"benchmark"}],title:"Benchmark"},pageNextRoute:"/oxmysql/benchmark"})}},function(s){s.O(0,[6510,9774,2888,179],function(){return s(s.s=7994)}),_N_E=s.O()}]);