"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[678],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),i=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):m(m({},t),e)),r},l=function(e){var t=i(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=i(r),p=n,f=d["".concat(s,".").concat(p)]||d[p]||u[p]||a;return r?o.createElement(f,m(m({ref:t},l),{},{components:r})):o.createElement(f,m({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,m=new Array(a);m[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:n,m[1]=c;for(var i=2;i<a;i++)m[i]=r[i];return o.createElement.apply(null,m)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8438:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>m,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var o=r(7462),n=(r(7294),r(3905));const a={},m="Commands Module",c={unversionedId:"modules/commands/commands",id:"modules/commands/commands",title:"Commands Module",description:"This module allows you to create bot commands and add them to processing. It allows automatically requesting the required arguments for your work, registering commands in the bot through the Telegram API.",source:"@site/docs/modules/commands/commands.md",sourceDirName:"modules/commands",slug:"/modules/commands/",permalink:"/evogram/docs/modules/commands/",draft:!1,editUrl:"https://github.com/czvelox/evogram/docs/docs/modules/commands/commands.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"First Evogram Bot",permalink:"/evogram/docs/getting-started/your-first-bot"},next:{title:"Class CommandManager",permalink:"/evogram/docs/modules/commands/command-manager"}},s={},i=[],l={toc:i},d="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,o.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"commands-module"},"Commands Module"),(0,n.kt)("p",null,"This module allows you to create bot commands and add them to processing. It allows automatically requesting the required arguments for your work, registering commands in the bot through the Telegram API."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"It is recommended to create a separate directory in your project for your commands, where each file will represent a separate command.")))}u.isMDXComponent=!0}}]);