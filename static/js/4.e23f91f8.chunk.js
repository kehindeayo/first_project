(this.webpackJsonpnewhorizons=this.webpackJsonpnewhorizons||[]).push([[4],{30:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(31);function c(e,t){if(e){if("string"===typeof e)return Object(n.a)(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Object(n.a)(e,t):void 0}}},31:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.d(t,"a",(function(){return n}))},32:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(30);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,c=!1,i=void 0;try{for(var o,a=e[Symbol.iterator]();!(n=(o=a.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(s){c=!0,i=s}finally{try{n||null==a.return||a.return()}finally{if(c)throw i}}return r}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},35:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r.d(t,"a",(function(){return i}))},41:function(e,t,r){},42:function(e,t,r){},64:function(e,t,r){"use strict";r.r(t);var n=r(32),c=r(1),i=r(0),o=(r(41),r(35)),a=(r(42),function(e){var t=e.value;return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",Object(o.a)(Object(o.a)({className:"Button"},e),{},{children:[" ",t]}))})}),s="kehinde",u="00711";t.default=function(){var e=Object(i.useState)(""),t=Object(n.a)(e,2),r=t[0],o=t[1],l=Object(i.useState)(""),b=Object(n.a)(l,2),j=b[0],f=b[1],O=Object(i.useState)(),d=Object(n.a)(O,2),p=d[0],h=d[1],v=Object(i.useState)(0),y=Object(n.a)(v,2),m=y[0],g=y[1];return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"main_container",children:[Object(c.jsx)("div",{children:m}),Object(c.jsxs)("div",{children:[Object(c.jsx)(a,{value:"Increasment",onClick:function(){g(m+1)}}),Object(c.jsx)(a,{value:"Decreasment",onClick:function(){g(m-1)}})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"",children:Object(c.jsx)("input",{type:"text",className:"input",placeholder:"Username",onChange:function(e){return o(e.target.value)}})}),Object(c.jsx)("div",{children:Object(c.jsx)("input",{type:"password",className:"input",placeholder:"password",onChange:function(e){return f(e.target.value)}})}),Object(c.jsx)("div",{className:"result",onClick:function(){r!==s&&j!==u?h("you have enter incorrect password or username"):window.location.href="/feeds"},children:"Login"})]}),p&&Object(c.jsxs)("div",{children:[p," ",Object(c.jsx)("br",{}),"Username : ",r," ",Object(c.jsx)("br",{}),"Password : ",j]})]})})}}}]);
//# sourceMappingURL=4.e23f91f8.chunk.js.map