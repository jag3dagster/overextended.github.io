(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8762],{5349:function(s,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ox_lib/Modules/Points/Lua/Client",function(){return e(6254)}])},6254:function(s,n,e){"use strict";e.r(n);var l=e(1527),i=e(6510),o=e(6736);function r(s){let n=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",code:"code",pre:"pre",span:"span",h3:"h3"},(0,o.ah)(),s.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{children:"Client"}),"\n",(0,l.jsx)(n.p,{children:"Simple and centralised distance checking, supporting callbacks when entering, leaving, and standing in-range of set coordinates."}),"\n",(0,l.jsx)(n.h2,{id:"cpoint-class",children:"CPoint Class"}),"\n",(0,l.jsx)(n.p,{children:"A table representing a point with the following properties."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["id: ",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsxs)(n.li,{children:["coords: ",(0,l.jsx)(n.code,{children:"vector3"})]}),"\n",(0,l.jsxs)(n.li,{children:["distance: ",(0,l.jsx)(n.code,{children:"number"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:'The distance for the player to be "inside" a point (i.e. the point\'s radius).'}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["currentDistance: ",(0,l.jsx)(n.code,{children:"number"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"The players current distance from the centre of the point."}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["isClosest?: ",(0,l.jsx)(n.code,{children:"boolean"})]}),"\n",(0,l.jsxs)(n.li,{children:["remove: ",(0,l.jsx)(n.code,{children:"function()"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Removes the point from the points registry."}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["onEnter?: ",(0,l.jsx)(n.code,{children:"function(self: CPoint)"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Function triggered when player gets within ",(0,l.jsx)(n.code,{children:"distance"})," of the point"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["onExit?: ",(0,l.jsx)(n.code,{children:"function(self: CPoint)"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Function triggered when player goes beyond ",(0,l.jsx)(n.code,{children:"distance"})," of the point"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["nearby?: ",(0,l.jsx)(n.code,{children:"function(self: CPoint)"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Function triggered on frame when within ",(0,l.jsx)(n.code,{children:"distance"})," of the point"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"libpointsnew",children:"lib.points.new"}),"\n",(0,l.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"lib.points."}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"new"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(data)"})]})})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["data: ",(0,l.jsx)(n.code,{children:"table"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["coords: ",(0,l.jsx)(n.code,{children:"vector3"})]}),"\n",(0,l.jsxs)(n.li,{children:["distance: ",(0,l.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Returns:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["point: ",(0,l.jsx)(n.code,{children:"CPoint"})]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,l.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(n.code,{"data-language":"lua","data-theme":"default",children:[(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" point "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" lib.points."}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"new"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    coords "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"GetEntityCoords"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(cache.ped),"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    distance "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"5"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    dunak "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'nerd'"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,l.jsx)(n.span,{className:"line",children:(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"})"})}),"\n",(0,l.jsx)(n.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" point:"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"onEnter"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"print"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'entered range of point'"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:", self.id)"})]}),"\n",(0,l.jsx)(n.span,{className:"line",children:(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"})}),"\n",(0,l.jsx)(n.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" point:"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"onExit"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"print"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'left range of point'"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:", self.id)"})]}),"\n",(0,l.jsx)(n.span,{className:"line",children:(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"})}),"\n",(0,l.jsx)(n.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" point:"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"nearby"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"DrawMarker"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"2"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:", self.coords.x, self.coords.y, self.coords.z, "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"0.0"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"0.0"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"0.0"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"0.0"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"180.0"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"0.0"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"1.0"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"1.0"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"1.0"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"200"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"20"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"20"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"50"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"false"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"2"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"false"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"nil"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"nil"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"false"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,l.jsx)(n.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" self.currentDistance "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"and"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"IsControlJustReleased"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"38"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"then"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"print"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'inside marker'"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:", self.id, "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'dunak is a '"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:".."}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" self.dunak)"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"})]}),"\n",(0,l.jsx)(n.span,{className:"line",children:(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"})})]})}),"\n",(0,l.jsx)(n.h2,{id:"libpointsgetallpoints",children:"lib.points.getAllPoints"}),"\n",(0,l.jsx)(n.p,{children:"Get a table of all points created in the resource."}),"\n",(0,l.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"lib.points."}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"getAllPoints"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]})})}),"\n",(0,l.jsx)(n.p,{children:"Return:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["points: ",(0,l.jsx)(n.code,{children:"CPoint[]"})]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"libpointsgetnearbypoints",children:"lib.points.getNearbyPoints"}),"\n",(0,l.jsx)(n.p,{children:"Get an array of all points in range of the player."}),"\n",(0,l.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"lib.points."}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"getNearbyPoints"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]})})}),"\n",(0,l.jsx)(n.p,{children:"Return:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["nearbyPoints: ",(0,l.jsx)(n.code,{children:"CPoint[]"})]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"libpointsgetclosestpoint",children:"lib.points.getClosestPoint"}),"\n",(0,l.jsx)(n.p,{children:"Get the data for the closest point to the player."}),"\n",(0,l.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"lib.points."}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"getClosestPoint"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]})})}),"\n",(0,l.jsx)(n.p,{children:"Return:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["closestPoint?: ",(0,l.jsx)(n.code,{children:"CPoint"})]}),"\n"]})]})}e(5941),n.default=(0,i.j)({MDXContent:function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,o.ah)(),s.components);return n?(0,l.jsx)(n,{...s,children:(0,l.jsx)(r,{...s})}):r(s)},pageOpts:{filePath:"pages/ox_lib/Modules/Points/Lua/Client.mdx",route:"/ox_lib/Modules/Points/Lua/Client",headings:[{depth:1,value:"Client",id:"client"},{depth:2,value:"CPoint Class",id:"cpoint-class"},{depth:2,value:"lib.points.new",id:"libpointsnew"},{depth:3,value:"Example",id:"example"},{depth:2,value:"lib.points.getAllPoints",id:"libpointsgetallpoints"},{depth:2,value:"lib.points.getNearbyPoints",id:"libpointsgetnearbypoints"},{depth:2,value:"lib.points.getClosestPoint",id:"libpointsgetclosestpoint"}],title:"Client"},pageNextRoute:"/ox_lib/Modules/Points/Lua/Client"})}},function(s){s.O(0,[6510,9774,2888,179],function(){return s(s.s=5349)}),_N_E=s.O()}]);