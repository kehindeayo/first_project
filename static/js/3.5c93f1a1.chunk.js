(this.webpackJsonpnewhorizons=this.webpackJsonpnewhorizons||[]).push([[3],{30:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(31);function c(e,t){if(e){if("string"===typeof e)return Object(r.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(e,t):void 0}}},31:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"a",(function(){return r}))},32:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(30);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,c=!1,a=void 0;try{for(var i,o=e[Symbol.iterator]();!(r=(i=o.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(s){c=!0,a=s}finally{try{r||null==o.return||o.return()}finally{if(c)throw a}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},35:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.d(t,"a",(function(){return a}))},37:function(e,t,n){},38:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var r=n(32),c=n(1),a=n(0),i=n(35),o=(n(37),function(e){var t=e.value;return Object(c.jsx)("div",Object(i.a)(Object(i.a)({className:"button"},e),{},{children:t}))}),s=(n(38),"kehinde"),u="00711";t.default=function(){var e=Object(a.useState)(""),t=Object(r.a)(e,2),n=t[0],i=t[1],l=Object(a.useState)(""),j=Object(r.a)(l,2),b=j[0],f=j[1],d=Object(a.useState)(),O=Object(r.a)(d,2),h=O[0],p=O[1],m=Object(a.useState)(0),v=Object(r.a)(m,2),y=v[0],x=v[1];return Object(c.jsxs)("div",{className:"main_container",children:[Object(c.jsx)("div",{children:y}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)(o,{value:"Increment",onClick:function(){x(y+1)}}),Object(c.jsx)(o,{value:"Decrement",onClick:function(){x(y-1)}})]}),Object(c.jsxs)("div",{className:"form_Container",children:[Object(c.jsx)("div",{className:"textInputContainer",children:Object(c.jsx)("input",{type:"text",className:"textInput",placeholder:"Username",onChange:function(e){return i(e.target.value)}})}),Object(c.jsx)("div",{className:"textInputContainer",children:Object(c.jsx)("input",{type:"password",className:"textInput",placeholder:"Password",onChange:function(e){return f(e.target.value)}})}),Object(c.jsx)("div",{className:"textInputContainer",onClick:function(){n!==s&&b!==u?p("You have input wrong password or wrong username"):window.location.href="/feeds"},children:Object(c.jsx)("div",{className:"submitButton",children:"Login!"})})]}),h&&Object(c.jsx)("div",{children:h}),Object(c.jsxs)("div",{className:"links",children:[Object(c.jsx)("div",{className:"adds",children:"check what i got"}),Object(c.jsx)("a",{href:"/figma_structure",children:Object(c.jsx)("div",{className:"first_button_figmal",children:"Figma Structure"})}),Object(c.jsx)("a",{href:"/chats",children:Object(c.jsx)("div",{className:"second_button_chat",children:"chart created"})})]})]})}}}]);
//# sourceMappingURL=3.5c93f1a1.chunk.js.map