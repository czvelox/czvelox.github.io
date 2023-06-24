"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6689],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},m=Object.keys(e);for(a=0;a<m.length;a++)n=m[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(a=0;a<m.length;a++)n=m[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c="mdxType",i={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,m=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(n),d=r,g=c["".concat(u,".").concat(d)]||c[d]||i[d]||m;return n?a.createElement(g,l(l({ref:t},p),{},{components:n})):a.createElement(g,l({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var m=n.length,l=new Array(m);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<m;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3771:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>i,frontMatter:()=>m,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const m={},l="\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0432 \u043a\u043e\u043c\u0430\u043d\u0434\u0435",o={unversionedId:"modules/commands/command-setup/command-arguments",id:"modules/commands/command-setup/command-arguments",title:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0432 \u043a\u043e\u043c\u0430\u043d\u0434\u0435",description:"Evogram \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0443\u0434\u043e\u0431\u043d\u044b\u0439 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u043d\u0443\u0436\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u043e\u0442 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0434\u043b\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u044b. \u041d\u0430 \u0434\u0430\u043d\u043d\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 4 \u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0445 \u0442\u0438\u043f\u0430 \u043f\u0440\u0438\u043d\u044f\u0442\u0438\u044f \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u044b \u0438\u0437\u0443\u0447\u0438\u043c. \u0422\u0430\u043a\u0436\u0435 \u0440\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u043c, \u043a\u0430\u043a \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b \u043a\u043e\u043c\u0430\u043d\u0434\u044b.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/modules/commands/command-setup/command-arguments.md",sourceDirName:"modules/commands/command-setup",slug:"/modules/commands/command-setup/command-arguments",permalink:"/evogram/ru/docs/modules/commands/command-setup/command-arguments",draft:!1,editUrl:"https://github.com/czvelox/evogram/docs/docs/modules/commands/command-setup/command-arguments.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",permalink:"/evogram/ru/docs/modules/commands/command-setup/"},next:{title:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u044b",permalink:"/evogram/ru/docs/modules/commands/command-setup/command-description"}},u={},s=[{value:"\u041c\u0435\u0442\u043e\u0434\u044b \u043f\u0440\u0438\u043d\u044f\u0442\u0438\u044f \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432",id:"\u043c\u0435\u0442\u043e\u0434\u044b-\u043f\u0440\u0438\u043d\u044f\u0442\u0438\u044f-\u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432",level:2},{value:"Parameterized",id:"parameterized",level:3},{value:"Space",id:"space",level:3},{value:"FullText",id:"fulltext",level:3},{value:"STDIN",id:"stdin",level:3},{value:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0441\u0432\u043e\u0435\u0433\u043e \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430",id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430-\u0441\u0432\u043e\u0435\u0433\u043e-\u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f-\u0437\u0430\u043f\u0440\u043e\u0441\u0430-\u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430",level:4}],p={toc:s},c="wrapper";function i(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430-\u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432-\u0432-\u043a\u043e\u043c\u0430\u043d\u0434\u0435"},"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0432 \u043a\u043e\u043c\u0430\u043d\u0434\u0435"),(0,r.kt)("p",null,"Evogram \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0443\u0434\u043e\u0431\u043d\u044b\u0439 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u043d\u0443\u0436\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u043e\u0442 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0434\u043b\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u044b. \u041d\u0430 \u0434\u0430\u043d\u043d\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 4 \u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0445 \u0442\u0438\u043f\u0430 \u043f\u0440\u0438\u043d\u044f\u0442\u0438\u044f \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u044b \u0438\u0437\u0443\u0447\u0438\u043c. \u0422\u0430\u043a\u0436\u0435 \u0440\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u043c, \u043a\u0430\u043a \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b \u043a\u043e\u043c\u0430\u043d\u0434\u044b."),(0,r.kt)("p",null,"\u0414\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b \u043a\u043e\u043c\u0430\u043d\u0434\u044b, \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432 CommandHandler \u0443\u043a\u0430\u0437\u0430\u0442\u044c ",(0,r.kt)("strong",{parentName:"p"},"args"),", \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043e\u0442\u0432\u0435\u0447\u0430\u0435\u0442 \u0437\u0430 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b \u043a\u043e\u043c\u0430\u043d\u0434\u044b. \u0414\u0430\u0432\u0430\u0439\u0442\u0435 \u0440\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u043f\u0440\u0438\u043c\u0435\u0440:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'@CommandHandler({\n    name: "example",\n    args: {\n        // \u041c\u0435\u0442\u043e\u0434 \u043f\u0440\u0438\u043d\u044f\u0442\u0438\u044f \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432. \u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\n        method: "parameterized",\n        // \u0421\u043f\u0438\u0441\u043e\u043a \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c. \u0414\u0430\u043d\u043d\u044b\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u044e\u0442\u0441\u044f \u0441 \u0442\u0430\u043a\u0438\u043c \u0436\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435\u043c, \u043a\u0430\u043a \u0438 \u0431\u044b\u043b\u043e \u0443\u043a\u0430\u0437\u0430\u043d\u043e. \u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\n        value: ["argument1", "argument2"]\n    }\n})\nclass ExampleCommand extends Command {\n    execute(message: MessageContext, data: ICommandExecuteData) {\n        message.send(`\u0412\u044b \u0443\u043a\u0430\u0437\u0430\u043b\u0438 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b:\\n- argument1: ${data.args.value1}\\n- argument2: ${data.args.value2}`);\n    }\n}\n')),(0,r.kt)("p",null,"\u041c\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u043b\u0438 \u0432 \u043d\u0430\u0448\u0443 \u043a\u043e\u043c\u0430\u043d\u0434\u0443 \u0437\u0430\u043f\u0440\u043e\u0441 \u0434\u0432\u0443\u0445 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432 (",(0,r.kt)("strong",{parentName:"p"},"value1"),", ",(0,r.kt)("strong",{parentName:"p"},"value2"),"), \u0430 \u0442\u0430\u043a\u0436\u0435 \u0443\u043a\u0430\u0437\u0430\u043b\u0438 \u043c\u0435\u0442\u043e\u0434 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432: ",(0,r.kt)("strong",{parentName:"p"},"parameterized"),". \u041f\u0440\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u0441 \u0443\u043a\u0430\u0437\u0430\u043d\u0438\u0435\u043c \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432, \u0432 \u043e\u0442\u0432\u0435\u0442 \u0431\u043e\u0442 \u043d\u0430\u043c \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442 \u0442\u043e, \u0447\u0442\u043e \u043c\u044b \u0443\u043a\u0430\u0437\u0430\u043b\u0438."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u0417\u0430\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u043c\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0432\u043e \u0432\u0442\u043e\u0440\u043e\u043c \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0435 \u043c\u0435\u0442\u043e\u0434\u0430 execute, \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043a\u043b\u044e\u0447\u0430 args. \u0412 \u043e\u0431\u044a\u0435\u043a\u0442\u0435 \u0432\u0441\u0435 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u0435 \u043e\u0442 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'result="1"',result:'"1"'},'execute(message: MessageContext, data: ICommandExecuteData) {\n    console.log(data.args["argumentName"]);\n}\n'))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u041c\u043e\u0436\u043d\u043e \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043c\u0435\u0442\u043e\u0434\u043e\u0432 \u043f\u0440\u0438\u043d\u044f\u0442\u0438\u044f \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432, \u0434\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u043c\u0430\u0441\u0441\u0438\u0432 \u0432\u043c\u0435\u0441\u0442\u043e \u0441\u0442\u0440\u043e\u043a\u0438, \u0441 \u043f\u0435\u0440\u0435\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u0435\u043c \u043d\u0443\u0436\u043d\u044b\u0445 \u0432\u0430\u043c \u043c\u0435\u0442\u043e\u0434\u043e\u0432."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'@CommandHandler({\n    name: "example",\n    args: {\n        method: ["parameterized", "stdin"],\n        value: ["argument1", "argument2"]\n    }\n})\n'))),(0,r.kt)("h2",{id:"\u043c\u0435\u0442\u043e\u0434\u044b-\u043f\u0440\u0438\u043d\u044f\u0442\u0438\u044f-\u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432"},"\u041c\u0435\u0442\u043e\u0434\u044b \u043f\u0440\u0438\u043d\u044f\u0442\u0438\u044f \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432"),(0,r.kt)("p",null,"\u0421\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 4 \u043c\u0435\u0442\u043e\u0434\u0430 \u043f\u0440\u0438\u043d\u044f\u0442\u0438\u044f \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432, \u043a\u0430\u0436\u0434\u044b\u0439 \u0438\u0437 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u043c\u044b \u0441\u0435\u0439\u0447\u0430\u0441 \u0440\u0430\u0441\u043c\u043e\u0442\u0440\u0438\u043c."),(0,r.kt)("h3",{id:"parameterized"},"Parameterized"),(0,r.kt)("p",null,"\u0414\u0430\u043d\u043d\u044b\u0439 \u043c\u0435\u0442\u043e\u0434 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0442\u044c \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 ",(0,r.kt)("strong",{parentName:"p"},"--param=value"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-0",metastring:'title="\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u043f\u0440\u0438 \u0434\u0430\u043d\u043d\u043e\u043c \u043c\u0435\u0442\u043e\u0434\u0435"',title:'"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435',"\u043a\u043e\u043c\u0430\u043d\u0434\u044b":!0,"\u043f\u0440\u0438":!0,"\u0434\u0430\u043d\u043d\u043e\u043c":!0,'\u043c\u0435\u0442\u043e\u0434\u0435"':!0},"- \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c: /example --argument1=value1 --argument2=value2\n- \u0411\u043e\u0442: \u0412\u044b \u0443\u043a\u0430\u0437\u0430\u043b\u0438 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b:\n    - argument1: value1\n    - argument2: value2\n")),(0,r.kt)("h3",{id:"space"},"Space"),(0,r.kt)("p",null,"\u0421 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u044d\u0442\u043e\u0433\u043e \u043c\u0435\u0442\u043e\u0434\u0430 \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u0435\u0440\u0435\u0447\u0438\u0441\u043b\u044f\u044e\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437 \u043f\u0440\u043e\u0431\u0435\u043b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-0",metastring:'title="\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u043f\u0440\u0438 \u0434\u0430\u043d\u043d\u043e\u043c \u043c\u0435\u0442\u043e\u0434\u0435"',title:'"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435',"\u043a\u043e\u043c\u0430\u043d\u0434\u044b":!0,"\u043f\u0440\u0438":!0,"\u0434\u0430\u043d\u043d\u043e\u043c":!0,'\u043c\u0435\u0442\u043e\u0434\u0435"':!0},"- \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c: /example value1 value2\n- \u0411\u043e\u0442: \u0412\u044b \u0443\u043a\u0430\u0437\u0430\u043b\u0438 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b:\n    - argument1: value1\n    - argument2: value2\n")),(0,r.kt)("h3",{id:"fulltext"},"FullText"),(0,r.kt)("p",null,"\u0421\u0430\u043c\u044b\u0439 \u043f\u0440\u043e\u0441\u0442\u043e\u0439 \u043c\u0435\u0442\u043e\u0434 \u043f\u0440\u0438\u043d\u044f\u0442\u0438\u044f \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430. \u041e\u043d \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0442\u044c \u043b\u0438\u0448\u044c \u043e\u0434\u0438\u043d \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0432\u0441\u0435\u0439 \u0441\u0442\u0440\u043e\u043a\u043e\u0439, \u0447\u0442\u043e \u0438\u0434\u0435\u0442 \u043f\u043e\u0441\u043b\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-0",metastring:'title="\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u043f\u0440\u0438 \u0434\u0430\u043d\u043d\u043e\u043c \u043c\u0435\u0442\u043e\u0434\u0435"',title:'"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435',"\u043a\u043e\u043c\u0430\u043d\u0434\u044b":!0,"\u043f\u0440\u0438":!0,"\u0434\u0430\u043d\u043d\u043e\u043c":!0,'\u043c\u0435\u0442\u043e\u0434\u0435"':!0},"- \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c: /example \u0437\u0434\u0435\u0441\u044c \u0431\u0443\u0434\u0435\u0442 \u0442\u0435\u043a\u0441\u0442, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u0434\u043d\u0438\u043c \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u043c\n- \u0411\u043e\u0442: \u0412\u044b \u0443\u043a\u0430\u0437\u0430\u043b\u0438 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b:\n    - argument1: \u0437\u0434\u0435\u0441\u044c \u0431\u0443\u0434\u0435\u0442 \u0442\u0435\u043a\u0441\u0442, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u0434\u043d\u0438\u043c \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u043c\n")),(0,r.kt)("h3",{id:"stdin"},"STDIN"),(0,r.kt)("p",null,"\u041a\u043e\u0433\u0434\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0432\u0432\u043e\u0434\u0438\u0442 \u043a\u043e\u043c\u0430\u043d\u0434\u0443, \u0435\u043c\u0443 \u043d\u0435 \u043d\u0443\u0436\u043d\u043e \u043f\u043e\u0441\u043b\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044f \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0435 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b. \u0412\u0430\u0448 \u0431\u043e\u0442 \u0441\u0430\u043c \u0441\u043f\u0440\u043e\u0441\u0438\u0442 \u0432\u0441\u0435 \u043d\u0443\u0436\u043d\u044b\u0435 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b \u043f\u043e \u0441\u043f\u0438\u0441\u043a\u0443, \u0430 \u043f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442 \u043a\u043e\u043c\u0430\u043d\u0434\u044b."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-0",metastring:'title="\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u043f\u0440\u0438 \u0434\u0430\u043d\u043d\u043e\u043c \u043c\u0435\u0442\u043e\u0434\u0435"',title:'"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435',"\u043a\u043e\u043c\u0430\u043d\u0434\u044b":!0,"\u043f\u0440\u0438":!0,"\u0434\u0430\u043d\u043d\u043e\u043c":!0,'\u043c\u0435\u0442\u043e\u0434\u0435"':!0},'- \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c: /example\n- \u0411\u043e\u0442: The "argument1" parameter is required for the command to work. Send the value in the following message\n- \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c: value1\n- \u0411\u043e\u0442: The "argument2" parameter is required for the command to work. Send the value in the following message\n- \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c: value2\n- \u0411\u043e\u0442: \u0412\u044b \u0443\u043a\u0430\u0437\u0430\u043b\u0438 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b:\n    - argument1: value1\n    - argument2: value2\n')),(0,r.kt)("h4",{id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430-\u0441\u0432\u043e\u0435\u0433\u043e-\u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f-\u0437\u0430\u043f\u0440\u043e\u0441\u0430-\u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430"},"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0441\u0432\u043e\u0435\u0433\u043e \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430"),(0,r.kt)("p",null,"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0441\u0432\u043e\u0439 \u0442\u0435\u043a\u0441\u0442 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u043c\u043e\u0436\u043d\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0432 \u0432\u043c\u0435\u0441\u0442\u043e \u0441\u0442\u0440\u043e\u043a\u0438 \u0441 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435\u043c \u043c\u0430\u0441\u0441\u0438\u0432, \u0441\u043e\u0441\u0442\u043e\u044f\u0449\u0438\u0439 \u0438\u0437 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044f \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430 \u0438 \u0435\u0433\u043e \u0434\u043e\u043f. \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'@CommandHandler({\n    name: "example",\n    args: {\n        method: "stdin",\n        value: [["argument1", { question: "\u041a\u0430\u043a\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0412\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u0442\u044c?" }]]\n    }\n})\n')),(0,r.kt)("p",null,"\u041d\u0430 \u0434\u0430\u043d\u043d\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u043c\u043e\u0436\u043d\u043e \u0442\u043e\u043b\u044c\u043a\u043e ",(0,r.kt)("strong",{parentName:"p"},"question"),", \u0447\u0442\u043e \u0438\u0437\u043c\u0435\u043d\u044f\u0435\u0442 \u0442\u0435\u043a\u0441\u0442 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430."),(0,r.kt)("p",null,"\u041f\u0440\u0438 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0439 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0435 \u0432\u044b\u0437\u043e\u0432 \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u0433\u043b\u044f\u0434\u0438\u0442\u044c \u0442\u0430\u043a:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"- \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c: /example\n- \u0411\u043e\u0442: \u041a\u0430\u043a\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0412\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u0442\u044c?\n- \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c: value1\n- \u0411\u043e\u0442: \u0412\u044b \u0443\u043a\u0430\u0437\u0430\u043b\u0438 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b:\n    - argument1: value1\n")))}i.isMDXComponent=!0}}]);