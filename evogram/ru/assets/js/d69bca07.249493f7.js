"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1540],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):m(m({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),l=p(n),d=o,g=l["".concat(i,".").concat(d)]||l[d]||u[d]||a;return n?r.createElement(g,m(m({ref:t},s),{},{components:n})):r.createElement(g,m({ref:t},s))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,m=new Array(a);m[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[l]="string"==typeof e?e:o,m[1]=c;for(var p=2;p<a;p++)m[p]=n[p];return r.createElement.apply(null,m)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9069:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>m,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={},m="\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u044b",c={unversionedId:"modules/commands/command-setup/command-description",id:"modules/commands/command-setup/command-description",title:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u044b",description:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0434\u043b\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u0432 \u0441\u043f\u0438\u0441\u043e\u043a \u043a\u043e\u043c\u0430\u043d\u0434 \u0431\u043e\u0442\u0430 \u0432 Telegram. Evogram \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u0432 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430\u0445 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u043d\u0430 \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e \u044f\u0437\u044b\u043a\u043e\u0432, \u0430 \u043f\u043e\u0441\u043b\u0435 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0432\u0441\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u0432 \u0431\u043e\u0442\u0435, \u0441 \u0443\u0447\u0435\u0442\u043e\u043c \u043b\u043e\u043a\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/modules/commands/command-setup/command-description.md",sourceDirName:"modules/commands/command-setup",slug:"/modules/commands/command-setup/command-description",permalink:"/evogram/ru/docs/modules/commands/command-setup/command-description",draft:!1,editUrl:"https://github.com/czvelox/evogram/docs/docs/modules/commands/command-setup/command-description.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0432 \u043a\u043e\u043c\u0430\u043d\u0434\u0435",permalink:"/evogram/ru/docs/modules/commands/command-setup/command-arguments"},next:{title:"\u041c\u043e\u0434\u0443\u043b\u044c Questions",permalink:"/evogram/ru/docs/modules/questions/"}},i={},p=[],s={toc:p},l="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(l,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430-\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u044f-\u043a\u043e\u043c\u0430\u043d\u0434\u044b"},"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u044b"),(0,o.kt)("p",null,"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0434\u043b\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u0432 \u0441\u043f\u0438\u0441\u043e\u043a \u043a\u043e\u043c\u0430\u043d\u0434 \u0431\u043e\u0442\u0430 \u0432 Telegram. Evogram \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u0432 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430\u0445 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u043d\u0430 \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e \u044f\u0437\u044b\u043a\u043e\u0432, \u0430 \u043f\u043e\u0441\u043b\u0435 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0432\u0441\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u0432 \u0431\u043e\u0442\u0435, \u0441 \u0443\u0447\u0435\u0442\u043e\u043c \u043b\u043e\u043a\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438."),(0,o.kt)("p",null,"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0432 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430\u0445 \u0441\u0430\u043c\u043e\u0439 \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u0442\u0430\u043a\u0438\u043c \u0441\u043f\u043e\u0441\u043e\u0431\u043e\u043c:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'@CommandHandler({\n    name: "example",\n    description: [{\n        text: "\u042d\u0442\u043e \u0442\u0435\u0441\u0442\u043e\u0432\u0430\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u0430",\n        language: "ru"\n    }, {\n        text: "It\'s a test command",\n        language: "en"\n    }]\n})\n')),(0,o.kt)("p",null,"\u0417\u0434\u0435\u0441\u044c \u043c\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u043b\u0438 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043d\u0430 \u0434\u0432\u0430 \u044f\u0437\u044b\u043a\u0430, \u044d\u0442\u043e \u0440\u0443\u0441\u0441\u043a\u0438\u0439 \u0438 \u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u0438\u0439. \u0422\u0435\u043f\u0435\u0440\u044c, \u043a\u043e\u0433\u0434\u0430 \u0431\u0443\u0434\u0443\u0442 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0431\u043e\u0442\u043e\u043c, \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u0438\u0445 \u044f\u0437\u044b\u043a\u0430 \u0432 Telegram \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u0434\u0430\u0432\u0430\u0442\u044c\u0441\u044f \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435."),(0,o.kt)("p",null,"\u0412 ",(0,o.kt)("inlineCode",{parentName:"p"},"description")," \u043f\u0435\u0440\u0435\u0434\u0430\u0435\u0442\u0441\u044f \u043c\u0430\u0441\u0441\u0438\u0432, \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0449\u0438\u0439 ",(0,o.kt)("inlineCode",{parentName:"p"},"text")," \u0438 ",(0,o.kt)("em",{parentName:"p"},"\u043d\u0435\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440")," ",(0,o.kt)("inlineCode",{parentName:"p"},"language"),".\n",(0,o.kt)("inlineCode",{parentName:"p"},"text")," \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b, \u0430 ",(0,o.kt)("inlineCode",{parentName:"p"},"language")," \u044f\u0437\u044b\u043a, \u0434\u043b\u044f \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u044d\u0442\u043e \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435."),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"\u0414\u0430\u043d\u043d\u044b\u0439 \u043f\u0440\u0438\u043c\u0435\u0440 \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0430 \u0440\u0443\u0441\u0441\u043a\u0438\u0439 \u0438 \u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u0438\u0439 \u044f\u0437\u044b\u043a. \u0415\u0441\u043b\u0438 \u0443 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0431\u0443\u0434\u0435\u0442 \u0434\u0440\u0443\u0433\u043e\u0439 \u044f\u0437\u044b\u043a \u0432 Telegram, \u043e\u043d \u043d\u0435 \u0443\u0432\u0438\u0434\u0438\u0442 \u0434\u0430\u043d\u043d\u0443\u044e \u043a\u043e\u043c\u0430\u043d\u0434\u0443 \u0432 \u0441\u043f\u0438\u0441\u043a\u0435 \u043a\u043e\u043c\u0430\u043d\u0434. \u0414\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u0412\u0430\u043c \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0431\u0435\u0437 \u0443\u043a\u0430\u0437\u0430\u043d\u0438\u044f ",(0,o.kt)("strong",{parentName:"p"},"language"))))}u.isMDXComponent=!0}}]);