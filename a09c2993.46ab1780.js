(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{206:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(2),o=r(11),a=(r(0),r(242)),i={id:"introduction",title:"Hello World!"},c={id:"introduction",isDocsHomePage:!1,title:"Hello World!",description:"Dark is a language and framework for building web backends: REST API endpoints,",source:"@site/docs/introduction.md",permalink:"/introduction",sidebar:"docs",next:{title:"Your First App",permalink:"/your-first"}},l=[{value:"Hello World",id:"hello-world",children:[]}],p={rightToc:l};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Dark is a language and framework for building web backends: REST API endpoints,\nasynchronous background workers, scheduled jobs, and persistent storage. Dark's\nframework is tightly coupled to the infrastructure, and as you write code you're\nable to develop from real incoming requests/traces."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Note: for now, Dark is only supported for Chrome with browser extensions\ndisabled, or using our ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"/desktop-client"}),"Desktop Client"),".")),Object(a.b)("h2",{id:"hello-world"},"Hello World"),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/img/helloworld.gif",alt:"Hello World"}))),Object(a.b)("p",null,"Above, you can see the simplest app in Dark: the hello world app. It shows\nstarting with an empty canvas, creating a HTTP endpoint (",Object(a.b)("inlineCode",{parentName:"p"},"GET /hello"),"), running\ncode (",Object(a.b)("inlineCode",{parentName:"p"},'"Hello world"'),") and opening that page."))}u.isMDXComponent=!0},242:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(r),b=n,f=s["".concat(i,".").concat(b)]||s[b]||d[b]||a;return r?o.a.createElement(f,c(c({ref:t},p),{},{components:r})):o.a.createElement(f,c({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);