"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9191],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,l=m(e,["components","mdxType","originalType","parentName"]),d=c(n),p=o,h=d["".concat(s,".").concat(p)]||d[p]||u[p]||r;return n?a.createElement(h,i(i({ref:t},l),{},{components:n})):a.createElement(h,i({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var m={};for(var s in t)hasOwnProperty.call(t,s)&&(m[s]=t[s]);m.originalType=e,m[d]="string"==typeof e?e:o,i[1]=m;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7987:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>m,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const r={},i="Method isExecutable",m={unversionedId:"modules/commands/command-methods/isExecutable",id:"modules/commands/command-methods/isExecutable",title:"Method isExecutable",description:"Method isExecutable is a method in the Command class that checks whether the given command can be executed based on the incoming message. This method takes one argument - a user message object.",source:"@site/docs/modules/commands/command-methods/isExecutable.md",sourceDirName:"modules/commands/command-methods",slug:"/modules/commands/command-methods/isExecutable",permalink:"/evogram/docs/modules/commands/command-methods/isExecutable",draft:!1,editUrl:"https://github.com/czvelox/evogram/docs/docs/modules/commands/command-methods/isExecutable.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Method execute",permalink:"/evogram/docs/modules/commands/command-methods/execute"},next:{title:"onError",permalink:"/evogram/docs/modules/commands/command-methods/onError"}},s={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Default Logic",id:"default-logic",level:2},{value:"Overriding",id:"overriding",level:2}],l={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"method-isexecutable"},"Method ",(0,o.kt)("inlineCode",{parentName:"h1"},"isExecutable")),(0,o.kt)("p",null,"Method ",(0,o.kt)("inlineCode",{parentName:"p"},"isExecutable")," is a method in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Command")," class that checks whether the given command can be executed based on the incoming message. This method takes one argument - a user message object."),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"message")," - an object of the ",(0,o.kt)("inlineCode",{parentName:"li"},"UserMessageContext")," class, which contains information about the incoming user message such as the text of the message, chat ID, etc.")),(0,o.kt)("h2",{id:"default-logic"},"Default Logic"),(0,o.kt)("p",null,"Initially, the ",(0,o.kt)("inlineCode",{parentName:"p"},"isExecutable")," method returns a boolean value that is equal to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," if the incoming message has the same command name as the ",(0,o.kt)("inlineCode",{parentName:"p"},"Command")," instance and ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," otherwise. If the ",(0,o.kt)("inlineCode",{parentName:"p"},"isExecutable")," method returns ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", then the ",(0,o.kt)("inlineCode",{parentName:"p"},"execute")," method of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Command")," instance will be called to execute the command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"public isExecutable(message: UserMessageContext): boolean {\n    return message.hasCommand === this.params.name;\n}\n")),(0,o.kt)("h2",{id:"overriding"},"Overriding"),(0,o.kt)("p",null,"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"Command")," class, the ",(0,o.kt)("inlineCode",{parentName:"p"},"isExecutable")," method can be overridden to change the logic for determining whether a command can be executed. For example, depending on the specific requirements of the command, additional message parameters can be verified rather than just comparing the command name."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"isExecutable")," method can be extended as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import { Command, UserMessageContext, CommandHandler } from "evogram";\n\n@CommandHandler("start")\nclass GreetingCommand extends Command {\n    public isExecutable(message: MessageContext): boolean {\n        return message.hasCommand === this.params.name && message.chat.type === "private";\n    }\n\n    public execute(message: MessageContext) {\n        // Command execution logic\n    }\n}\n')),(0,o.kt)("p",null,"In the example above, the ",(0,o.kt)("inlineCode",{parentName:"p"},"isExecutable")," method was overridden in the ",(0,o.kt)("inlineCode",{parentName:"p"},"GreetingCommand")," class to add a check for the chat type for which this command will be available. Now the command will only be executed in private chats with users."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This approach allows for flexible customization of command behavior, which is particularly useful when creating bots with various functional capabilities. As a result, more logical, readable, and intuitive commands can be created for users.")))}u.isMDXComponent=!0}}]);