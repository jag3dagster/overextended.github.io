"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1339],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,m=d["".concat(u,".").concat(f)]||d[f]||s[f]||l;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(7294);function a(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(7462),a=n(7294),l=n(2389),o=n(3725),i=n(6010),u="tabItem_LplD";function c(e){var t,n,l,c=e.lazy,p=e.block,s=e.defaultValue,d=e.values,f=e.groupId,m=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,o.lx)(v,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===s?s:null!=(t=null!=s?s:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=b[0])?void 0:l.props.value;if(null!==g&&!v.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,o.UB)(),y=k.tabGroupChoices,w=k.setTabGroupChoices,x=(0,a.useState)(g),N=x[0],T=x[1],O=[],C=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var E=y[f];null!=E&&E!==N&&v.some((function(e){return e.value===E}))&&T(E)}var I=function(e){var t=e.currentTarget,n=O.indexOf(t),r=v[n].value;r!==N&&(C(t),T(r),null!=f&&w(f,r))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=O.indexOf(e.currentTarget)+1;n=O[r]||O[0];break;case"ArrowLeft":var a=O.indexOf(e.currentTarget)-1;n=O[a]||O[O.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":p},m)},v.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return O.push(e)},onKeyDown:D,onFocus:I,onClick:I},l,{className:(0,i.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),c?(0,a.cloneElement)(b.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function p(e){var t=(0,l.Z)();return a.createElement(c,(0,r.Z)({key:String(t)},e))}},6789:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return s},assets:function(){return d},toc:function(){return f},default:function(){return b}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=n(9877),i=n(8215),u=["components"],c={title:"Input Dialog"},p=void 0,s={unversionedId:"ox_lib/Client/Interface/input",id:"ox_lib/Client/Interface/input",title:"Input Dialog",description:"The input dialog window allows you to take data from the user",source:"@site/docs/ox_lib/Client/Interface/input.md",sourceDirName:"ox_lib/Client/Interface",slug:"/ox_lib/Client/Interface/input",permalink:"/docs/ox_lib/Client/Interface/input",editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_lib/Client/Interface/input.md",tags:[],version:"current",frontMatter:{title:"Input Dialog"},sidebar:"docs",previous:{title:"Context Menu",permalink:"/docs/ox_lib/Client/Interface/context"},next:{title:"Notifications",permalink:"/docs/ox_lib/Client/Interface/notify"}},d={},f=[{value:"lib.inputDialog",id:"libinputdialog",level:3}],m={toc:f};function b(e){var t=e.components,n=(0,a.Z)(e,u);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The input dialog window allows you to take data from the user\nby setting input fields."),(0,l.kt)("h3",{id:"libinputdialog"},"lib.inputDialog"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"-- heading: string\n-- rows: strings table\n\nlib.inputDialog(heading, rows)\n")),(0,l.kt)("p",null,"The callback data is promise based meaning that the thread will\nnot continue executing until the user either sends the data\nor exits the popup."),(0,l.kt)("p",null,"The data returned will be a table, indexes represent the rows\nsent to the dialog, so if we want data from the first field that\nwould be index ",(0,l.kt)("inlineCode",{parentName:"p"},"1"),", if we want data from the third field, that would\nbe index ",(0,l.kt)("inlineCode",{parentName:"p"},"3"),", etc..."),(0,l.kt)("p",null,"The input rows will always return a string, if you want a row to be of\nnumber data type, you can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"tonumber")," function to convert it to\na number instead."),(0,l.kt)("p",null,"If a user left an input field empty it will return ",(0,l.kt)("inlineCode",{parentName:"p"},"nil"),"."),(0,l.kt)("p",null,"You can also add checkboxes that will return ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," if checked and ",(0,l.kt)("inlineCode",{parentName:"p"},"nil")," if unchecked.",(0,l.kt)("br",{parentName:"p"}),"\n","Look at the ",(0,l.kt)("em",{parentName:"p"},"Advanced")," example for it's usage."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example:")),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"basic",label:"Basic",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"local input = lib.inputDialog('Police locker', {'Locker number', 'Locker passcode'})\n\nif input then\n    local lockerNumber = tonumber(input[1])\n    local lockerPasscode = input[2]\n\n    print(lockerNumber, lockerPasscode)\nend\n")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/RvFFZqv.png",alt:"Example image"}))),(0,l.kt)(i.Z,{value:"advanced",label:"Advanced",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'local input = lib.inputDialog(\'Police locker\', {\n    { type = "input", label = "Locker number" },\n    { type = "checkbox", label = "Some checkbox" },\n    { type = "input", label = "Locker PIN" },\n    { type = "checkbox", label = "Some other checkbox" },\n})\nprint(json.encode(input, {indent=true}))\n')),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/2NM6yDQ.png",alt:"Example image"})))))}b.isMDXComponent=!0}}]);