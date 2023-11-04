(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1159],{7918:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ox_lib/Modules/Logger/Server",function(){return n(5696)}])},5696:function(e,s,n){"use strict";n.r(s),n.d(s,{__toc:function(){return o}});var r=n(1527),i=n(2059),a=n(3443),l=n(8242);let o=[{depth:2,value:"lib.logger",id:"liblogger"},{depth:3,value:"Example",id:"example"},{depth:2,value:"Datadog",id:"datadog"},{depth:3,value:"Create your Datadog account",id:"create-your-datadog-account"},{depth:3,value:"Create an API key",id:"create-an-api-key"},{depth:3,value:"Config",id:"config"},{depth:2,value:"Grafana Loki",id:"grafana-loki"},{depth:3,value:"Create your Grafana account",id:"create-your-grafana-account"},{depth:3,value:"Head to My Account",id:"head-to-my-account"},{depth:3,value:"Setup Loki",id:"setup-loki"},{depth:3,value:"Config",id:"config-1"}];function t(e){let s=Object.assign({h1:"h1",h2:"h2",pre:"pre",code:"code",span:"span",ul:"ul",li:"li",h3:"h3",a:"a",p:"p",br:"br"},(0,a.a)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{children:"Server"}),"\n",(0,r.jsx)(s.h2,{id:"liblogger",children:"lib.logger"}),"\n",(0,r.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,r.jsx)(s.code,{"data-language":"lua","data-theme":"default",children:(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"lib."}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"logger"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(source, event, message, "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"..."}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})]})})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["source: ",(0,r.jsx)(s.code,{children:"number"})," or ",(0,r.jsx)(s.code,{children:"string"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Preferably an active player id, otherwise an identifier, or wherever else it originated from."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["event: ",(0,r.jsx)(s.code,{children:"string"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"A name for the log event (i.e. the trigerring event or a description)"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["message: ",(0,r.jsx)(s.code,{children:"string"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"The content for the log."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["vararg: ",(0,r.jsx)(s.code,{children:"string"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Additional arguments are converted to tags for additional filtering and searching."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"example",children:"Example"}),"\n",(0,r.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,r.jsxs)(s.code,{"data-language":"lua","data-theme":"default",children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" vehicle "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" Ox."}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"CreateVehicle"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"false"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"`sultanrs`"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"vector4"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"-"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"56.479122"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"-"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1116.870362"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"26.432250"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"0.000030517578"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"))"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"lib."}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"logger"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"-"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'CreateVehicle'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", json."}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"encode"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(vehicle))"})]})]})}),"\n",(0,r.jsx)(s.h2,{id:"datadog",children:"Datadog"}),"\n",(0,r.jsxs)(l.Rg,{children:[(0,r.jsxs)(s.h3,{id:"create-your-datadog-account",children:["Create your ",(0,r.jsx)(s.a,{href:"https://www.datadoghq.com/",children:"Datadog"})," account"]}),(0,r.jsxs)(s.p,{children:["You will receive a free 14 day trial, otherwise refer to their ",(0,r.jsx)(s.a,{href:"https://www.datadoghq.com/pricing/",children:"pricing"})," guide.",(0,r.jsx)(s.br,{}),"\n","Free accounts are limited, however logs will still be retained for 14 days."]}),(0,r.jsxs)(s.h3,{id:"create-an-api-key",children:["Create an ",(0,r.jsx)(s.a,{href:"https://app.datadoghq.com/organization-settings/api-keys",children:"API key"})]}),(0,r.jsx)(s.p,{children:"This is a UUID used to submit logs to your Datadog organisation."}),(0,r.jsx)(s.h3,{id:"config",children:"Config"}),(0,r.jsxs)(s.p,{children:["Set your API key and ",(0,r.jsx)(s.a,{href:"https://docs.datadoghq.com/getting_started/site/",children:"Datadog site"})," using the following convars."]}),(0,r.jsx)(s.pre,{"data-language":"bash","data-theme":"default",children:(0,r.jsxs)(s.code,{"data-language":"bash","data-theme":"default",children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"set"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"datadog:key"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"yourapikey"'})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"set"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"datadog:site"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"datadoghq.com"'})]})]})})]}),"\n",(0,r.jsx)(s.h2,{id:"grafana-loki",children:"Grafana Loki"}),"\n",(0,r.jsxs)(s.p,{children:["Loki is a horizontally scalable, highly available, multi-tenant log aggregation system inspired by Prometheus.",(0,r.jsx)(s.br,{}),"\n","It is designed to be very cost effective and easy to operate."]}),"\n",(0,r.jsxs)(l.mQ,{items:["Cloud","Self-hosted"],children:[(0,r.jsxs)(l.OK,{children:[(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Has free tier with some restrictions"}),"\n",(0,r.jsx)(s.li,{children:"Easy to manage"}),"\n",(0,r.jsx)(s.li,{children:"Easier to setup"}),"\n",(0,r.jsx)(s.li,{children:"Mostly managed by Grafana"}),"\n"]}),(0,r.jsxs)(l.Rg,{children:[(0,r.jsxs)(s.h3,{id:"create-your-grafana-account",children:["Create your ",(0,r.jsx)(s.a,{href:"https://grafana.com/",children:"Grafana"})," account"]}),(0,r.jsxs)(s.h3,{id:"head-to-my-account",children:["Head to ",(0,r.jsx)(s.a,{href:"https://grafana.com/auth/sign-in/?plcmt=top-nav&cta=myaccount",children:"My Account"})]}),(0,r.jsx)(s.h3,{id:"setup-loki",children:"Setup Loki"}),(0,r.jsxs)(s.p,{children:['Find the Loki section in your account panel, and click "Details".\nGenerate a password and save the API key, as well as your ',(0,r.jsx)(s.code,{children:"user"})," and ",(0,r.jsx)(s.code,{children:"url"}),"."]})]})]}),(0,r.jsxs)(l.OK,{children:[(0,r.jsxs)(s.p,{children:["To setup a grafana instance you'll need docker, and knowledge on containers or kubernetes.",(0,r.jsx)(s.br,{}),"\n","Please find a guide to setup a grafana stack (min requirement grafana and grafana loki) and follow that."]}),(0,r.jsx)(s.p,{children:"Once done, setup authentication and use the username and password securing your endpoint."}),(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"By default self-hosted loki instances do not provide any authentication layers and will require an external authentication layer such as NGINX basic auth or Cloudflare Access."}),"\n"]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"config-1",children:"Config"}),"\n",(0,r.jsx)(s.p,{children:"Use the following convars to set your logging service, endpoint, and authentication details."}),"\n",(0,r.jsx)(s.pre,{"data-language":"bash","data-theme":"default",children:(0,r.jsxs)(s.code,{"data-language":"bash","data-theme":"default",children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"set"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"ox:logger"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"loki"'})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"set"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"loki:user"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"<insert your user>"'})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"set"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"loki:password"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"<insert the api key or password>"'})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"set"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"loki:endpoint"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"<insert loki url without http:// or https://>"'})]})]})})]})}s.default=(0,i.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,a.a)(),e.components);return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(t,{...e})}):t(e)},pageOpts:{filePath:"pages/ox_lib/Modules/Logger/Server.mdx",route:"/ox_lib/Modules/Logger/Server",title:"Server",headings:o},pageNextRoute:"/ox_lib/Modules/Logger/Server"})}},function(e){e.O(0,[2059,9774,2888,179],function(){return e(e.s=7918)}),_N_E=e.O()}]);