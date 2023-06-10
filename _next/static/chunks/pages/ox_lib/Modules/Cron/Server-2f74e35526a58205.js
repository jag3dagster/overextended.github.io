(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9482],{4502:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ox_lib/Modules/Cron/Server",function(){return s(5423)}])},5423:function(e,n,s){"use strict";s.r(n);var i=s(1527),r=s(6510),d=s(6736);function t(e){let n=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",strong:"strong",h3:"h3",a:"a",pre:"pre",span:"span",ul:"ul",li:"li"},(0,d.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{children:"Cron"}),"\n",(0,i.jsx)(n.p,{children:"A Lua implementation of cron, allowing tasks to be scheduled to run periodically at fixed times, dates, and intervals."}),"\n",(0,i.jsx)(n.h2,{id:"cron-expression",children:"Cron expression"}),"\n",(0,i.jsx)(n.p,{children:"A string containing five values separated by white spaces, representing a set of times to execute a task."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Field"}),(0,i.jsx)(n.th,{children:"Valid values"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Minutes"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"0-59"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Hours"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"0-23"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Day of month"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"1-31"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Month"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"1-12"})," or ",(0,i.jsx)(n.code,{children:"jan-dec"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Day of week"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"1-7"})," or ",(0,i.jsx)(n.code,{children:"sun-sat"})]})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," Day of the week is set to match ",(0,i.jsx)(n.code,{children:"os.date"})," and starts at 1, unlike the cron-standard which starts at 0."]}),"\n",(0,i.jsxs)(n.h3,{id:"-wildcards",children:[(0,i.jsx)(n.code,{children:"*"})," Wildcards"]}),"\n",(0,i.jsxs)(n.p,{children:["Represents all values, e.g. ",(0,i.jsx)(n.code,{children:"* * * * *"})," will run every minute, or ",(0,i.jsx)(n.code,{children:"* * * * 1"})," will run every minute on Sunday."]}),"\n",(0,i.jsxs)(n.h3,{id:"-lists",children:[(0,i.jsx)(n.code,{children:","})," Lists"]}),"\n",(0,i.jsxs)(n.p,{children:["Commas can be used to create a list of values, e.g. ",(0,i.jsx)(n.code,{children:"* * * * sun,mon,tue"})," will run every minute on Sunday, Monday, and Tuesday."]}),"\n",(0,i.jsxs)(n.h3,{id:"--ranges",children:[(0,i.jsx)(n.code,{children:"-"})," Ranges"]}),"\n",(0,i.jsxs)(n.p,{children:["Dashes define a range of values, e.g. ",(0,i.jsx)(n.code,{children:"10-30 * * * *"})," will start running the task at the 10th minute, and every minute until the 30th minute."]}),"\n",(0,i.jsxs)(n.h3,{id:"-steps",children:[(0,i.jsx)(n.code,{children:"/"})," Steps"]}),"\n",(0,i.jsxs)(n.p,{children:["Slashes can be used for step values, e.g. ",(0,i.jsx)(n.code,{children:"* */4 * * *"})," will run every 4 hours and is shorthand for ",(0,i.jsx)(n.code,{children:"* 0,4,8,12,16,20 * * *"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n",(0,i.jsx)(n.h3,{id:"libcronnew",children:"lib.cron.new"}),"\n",(0,i.jsxs)(n.p,{children:["Creates a new ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Cron",children:"cronjob"}),", scheduling a task to run at fixed times or intervals."]}),"\n",(0,i.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,i.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"lib.cron."}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"new"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(expression, job, options)"})]})})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["expression:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["string A cron expression such as ",(0,i.jsx)(n.code,{children:"* * * * *"})," representing minute, hour, day, month, and day of the week"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["job:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["fun(task: ",(0,i.jsx)(n.code,{children:"OxTask"}),", date: ",(0,i.jsx)(n.code,{children:"osdate"}),")"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["options?:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["debug?: ",(0,i.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"returns"}),": OxTask"]})]})}s(5941),n.default=(0,r.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,d.ah)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(t,{...e})}):t(e)},pageOpts:{filePath:"pages/ox_lib/Modules/Cron/Server.mdx",route:"/ox_lib/Modules/Cron/Server",headings:[{depth:1,value:"Cron",id:"cron"},{depth:2,value:"Cron expression",id:"cron-expression"},{depth:3,value:"* Wildcards",id:"-wildcards"},{depth:3,value:", Lists",id:"-lists"},{depth:3,value:"- Ranges",id:"--ranges"},{depth:3,value:"/ Steps",id:"-steps"},{depth:2,value:"Functions",id:"functions"},{depth:3,value:"lib.cron.new",id:"libcronnew"}],title:"Cron"},pageNextRoute:"/ox_lib/Modules/Cron/Server"})}},function(e){e.O(0,[6510,9774,2888,179],function(){return e(e.s=4502)}),_N_E=e.O()}]);