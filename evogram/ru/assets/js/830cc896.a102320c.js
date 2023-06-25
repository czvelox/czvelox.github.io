"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[677],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function m(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?m(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},m=Object.keys(e);for(r=0;r<m.length;r++)t=m[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(r=0;r<m.length;r++)t=m[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},i=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,m=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),i=a,g=u["".concat(l,".").concat(i)]||u[i]||d[i]||m;return t?r.createElement(g,o(o({ref:n},c),{},{components:t})):r.createElement(g,o({ref:n},c))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var m=t.length,o=new Array(m);o[0]=i;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<m;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}i.displayName="MDXCreateElement"},6036:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>m,metadata:()=>s,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const m={},o="\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",s={unversionedId:"modules/commands/command-setup/command-setup",id:"modules/commands/command-setup/command-setup",title:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",description:"\u0414\u0435\u043a\u043e\u0440\u0430\u0442\u043e\u0440 CommandHandler \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0435\u0435 \u0432 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u0438\u044f \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 \u043a\u043e\u043c\u0430\u043d\u0434\u044b.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/modules/commands/command-setup/command-setup.md",sourceDirName:"modules/commands/command-setup",slug:"/modules/commands/command-setup/",permalink:"/evogram/ru/docs/modules/commands/command-setup/",draft:!1,editUrl:"https://github.com/czvelox/evogram/docs/docs/modules/commands/command-setup/command-setup.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"onError",permalink:"/evogram/ru/docs/modules/commands/command-methods/onError"},next:{title:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0432 \u043a\u043e\u043c\u0430\u043d\u0434\u0435",permalink:"/evogram/ru/docs/modules/commands/command-setup/command-arguments"}},l={},p=[{value:"\u041f\u0440\u043e\u0441\u0442\u0430\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430",id:"\u043f\u0440\u043e\u0441\u0442\u0430\u044f-\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430",level:2},{value:"\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u043d\u0430\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430",id:"\u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u043d\u0430\u044f-\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430",level:2}],c={toc:p},u="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-\u043a\u043e\u043c\u0430\u043d\u0434\u044b"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043a\u043e\u043c\u0430\u043d\u0434\u044b"),(0,a.kt)("p",null,"\u0414\u0435\u043a\u043e\u0440\u0430\u0442\u043e\u0440 CommandHandler \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0435\u0435 \u0432 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u0438\u044f \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 \u043a\u043e\u043c\u0430\u043d\u0434\u044b.\n\u0412 \u043d\u0435\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u043f\u0435\u0440\u0435\u0433\u0440\u0443\u0437\u043a\u0430, \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0449\u0430\u044f \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044c \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u043c \u043b\u0438\u0431\u043e \u0441\u0442\u0440\u043e\u043a\u0443, \u0447\u0442\u043e \u0431\u0443\u0434\u0435\u0442 \u044f\u0432\u043b\u044f\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435\u043c \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u0434\u043b\u044f \u0430\u043a\u0442\u0438\u0432\u0430\u0446\u0438\u0438, \u043b\u0438\u0431\u043e \u043e\u0431\u044a\u0435\u043a\u0442 \u0441 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430\u043c\u0438."),(0,a.kt)("h2",{id:"\u043f\u0440\u043e\u0441\u0442\u0430\u044f-\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430"},"\u041f\u0440\u043e\u0441\u0442\u0430\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'@CommandHandler("example")\nclass ExampleCommand extends Command {}\n')),(0,a.kt)("p",null,"\u0414\u0430\u043d\u043d\u044b\u0439 \u043f\u0440\u0438\u043c\u0435\u0440 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0441\u0430\u043c\u044b\u043c \u043f\u0440\u043e\u0441\u0442\u044b\u043c, \u0437\u0434\u0435\u0441\u044c \u043c\u044b \u0441\u043e\u0437\u0434\u0430\u043b\u0438 \u043a\u043e\u043c\u0430\u043d\u0434\u0443 ",(0,a.kt)("strong",{parentName:"p"},"example"),". \u0422\u0435\u043f\u0435\u0440\u044c \u0431\u043e\u0442 \u0431\u0443\u0434\u0435\u0442 \u043e\u0431\u0440\u0430\u0449\u0430\u0442\u044c\u0441\u044f \u043a \u044d\u0442\u043e\u043c\u0443 \u043a\u043b\u0430\u0441\u0441\u0443, \u0435\u0441\u043b\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043d\u0430\u043f\u0438\u0441\u0430\u043b ",(0,a.kt)("strong",{parentName:"p"},"/example")),(0,a.kt)("h2",{id:"\u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u043d\u0430\u044f-\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430"},"\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u043d\u0430\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'@CommandHandler({\n    name: "example",\n    args: {\n        method: "stdin",\n        value: [\n            ["argument1", { question: "\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u0412\u0430\u0448 \u043f\u0435\u0440\u0432\u044b\u0439 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442:" }]\n            ["argument2", { question: "\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u0412\u0430\u0448 \u043f\u0435\u0440\u0432\u044b\u0439 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442:" }]\n        ]\n    },\n    description: [\n        { text: "\u042d\u0442\u043e \u0442\u0435\u0441\u0442\u043e\u0432\u0430\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u0430", language: "ru" }, \n        { text: "It\'s a test command",  language: "en" },\n    ]\n})\nclass ExampleCommand extends Command {}\n')),(0,a.kt)("p",null,"\u0417\u0434\u0435\u0441\u044c \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u044b \u0432\u0441\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043a\u043e\u043c\u0430\u043d\u0434\u044b. \u041a\u043e\u043c\u0430\u043d\u0434\u0430 \u043a\u0430\u043a \u0438 \u0432 \u043f\u0435\u0440\u0432\u043e\u043c \u043f\u0440\u0438\u043c\u0435\u0440\u0435 \u0440\u0435\u0430\u0433\u0438\u0440\u0443\u0435\u0442 \u043d\u0430 ",(0,a.kt)("strong",{parentName:"p"},"/example"),", \u043d\u043e \u0441 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u043c\u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u044f\u043c\u0438."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"\u0418\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432, \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u043c\u044b\u0439 \u0434\u0435\u043a\u043e\u0440\u0430\u0442\u043e\u0440\u043e\u043c"),(0,a.kt)("p",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface ICommandParams {\n    // \u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b, \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u0431\u0443\u0434\u0435\u0442 \u0440\u0435\u0430\u0433\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0431\u043e\u0442\n    name: string;\n    // \u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b \u043a\u043e\u043c\u0430\u043d\u0434\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b \u0434\u043b\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u044b\n    args?: ICommandArguments;\n    // \u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b, \u043c\u043e\u0436\u043d\u043e \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u043d\u0430 \u0440\u0430\u0437\u043d\u044b\u0445 \u044f\u0437\u044b\u043a\u0430\u0445, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0431\u0443\u0434\u0435\u0442 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e Telegram \u0434\u043b\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0432 \u0441\u043f\u0438\u0441\u043e\u043a \u043a\u043e\u043c\u0430\u043d\u0434\n    description?: ICommandDescription[];\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface ICommandDescription {\n    // \u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b, \u043e\u0442 1 \u0434\u043e 256 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432\n    text: string;\n    // \u0414\u0432\u0443\u0445\u0431\u0443\u043a\u0432\u0435\u043d\u043d\u044b\u0439 \u043a\u043e\u0434 \u044f\u0437\u044b\u043a\u0430 ISO 639-1. \u0415\u0441\u043b\u0438 \u043f\u0443\u0441\u0442\u043e, \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u0431\u0443\u0434\u0443\u0442 \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0442\u044c\u0441\u044f \u043a\u043e \u0432\u0441\u0435\u043c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f\u043c \u0438\u0437 \u0434\u0430\u043d\u043d\u043e\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438, \u0434\u043b\u044f \u044f\u0437\u044b\u043a\u0430 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u043d\u0435\u0442 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0445 \u043a\u043e\u043c\u0430\u043d\u0434.\n    language?: string;\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'type ICommandArgumentType = "parameterized" | "space" | "stdin" | "fulltext";\n\ninterface ICommandArguments {\n    /**\n     * \u0423\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442, \u043a\u0430\u043a \u0431\u0443\u0434\u0443\u0442 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0442\u044c\u0441\u044f \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b \u0434\u043b\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u044b\n     * \n     * @param parameterized - \u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u043f\u0435\u0440\u0435\u0434\u0430\u044e\u0442\u0441\u044f \u0432 \u0432\u0438\u0434\u0435 --\u043a\u043b\u044e\u0447=\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\n     * @example\n     *  User: /command --param1=value --param2=value\n     * \n     * @param space - \u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u043f\u0435\u0440\u0435\u0434\u0430\u044e\u0442\u0441\u044f \u0432 \u0432\u0438\u0434\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439, \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0445 \u043f\u0440\u043e\u0431\u0435\u043b\u0430\u043c\u0438\n     * @example\n     *  User: /command value1 value2\n     * \n     * @param stdin - \u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u0437\u0430\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u044e\u0442\u0441\u044f \u043f\u043e\u0441\u043b\u0435 \u0432\u044b\u0437\u043e\u0432\u0430 \u043a\u043e\u043c\u0430\u043d\u0434\u044b, \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u044e\u0442\u0441\u044f \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u043c\u0438 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f\u043c\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0437\u0430\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u0442 \u0431\u043e\u0442\n     * @example\n     *  User: /command\n     *  Bot: What value do you want to specify?\n     *  User: value\n     * \n     * @param fulltext - \u041f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u0434\u0438\u043d \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442, \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0432\u0435\u0441\u044c \u0442\u0435\u043a\u0441\u0442 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f\n     * @example\n     *  User: /command \u0437\u0434\u0435\u0441\u044c \u043c\u043d\u043e\u0433\u043e \u0442\u0435\u043a\u0441\u0442\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u043f\u0435\u0440\u0435\u043d\u043e\u0441\u0438\u0442\u0441\u044f \u0432 \u043e\u0434\u0438\u043d \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\n     */\n    method: ICommandArgumentType | ICommandArgumentType[];\n    /**\n     * @type {string[]} \u041c\u0430\u0441\u0441\u0438\u0432 \u0441\u043e\u0441\u0442\u043e\u044f\u0449\u0438\u0439 \u0438\u0437 \u043f\u0435\u0440\u0435\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0439 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c\n     * @type {[string, { question?: string }][]} \u041c\u0430\u0441\u0441\u0438\u0432 \u0438\u0437 \u043c\u0430\u0441\u0441\u0438\u0432\u043e\u0432, \u0433\u0434\u0435 \u0441\u043d\u0430\u0447\u0430\u043b\u0430 \u043f\u0435\u0440\u0435\u0434\u0430\u0435\u0442\u0441\u044f \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430, \u0430 \u043f\u043e\u0442\u043e\u043c \u0435\u0433\u043e \u0434\u043e\u043f. \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b\n     * \n     * @param question \u0422\u0435\u043a\u0441\u0442 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430. \u0415\u0441\u043b\u0438 \u0442\u0435\u043a\u0441\u0442 \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d, \u0431\u0443\u0434\u0435\u0442 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435\n     */\n    value: string[] | [string, {\n        question?: string\n    }][];\n}\n')))))}d.isMDXComponent=!0}}]);