!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("design-system",[],t):"object"==typeof exports?exports["design-system"]=t():e["design-system"]=t()}(this,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}({"./node_modules/css-loader/index.js!./src/global.css":function(e,t,n){(e.exports=n("./node_modules/css-loader/lib/css-base.js")(!1)).push([e.i,"/* Reset table styles */\n\ntable, caption, tbody, tfoot, thead, tr, th, td {\n  margin: 0;\n  padding: 0;\n  border-width: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n@tailwind base;\n@tailwind components;\n@tailwind utilities;",""])},"./node_modules/css-loader/lib/css-base.js":function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var a=(l=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(l))))+" */"),o=r.sources.map((function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"}));return[n].concat(o).concat([a]).join("\n")}var l;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},a=0;a<this.length;a++){var o=this[a][0];"number"==typeof o&&(r[o]=!0)}for(a=0;a<e.length;a++){var l=e[a];"number"==typeof l[0]&&r[l[0]]||(n&&!l[2]?l[2]=n:n&&(l[2]="("+l[2]+") and ("+n+")"),t.push(l))}},t}},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":function(e,t,n){"use strict";var r,a=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),l=[];function s(e){for(var t=-1,n=0;n<l.length;n++)if(l[n].identifier===e){t=n;break}return t}function i(e,t){for(var n={},r=[],a=0;a<e.length;a++){var o=e[a],i=t.base?o[0]+t.base:o[0],c=n[i]||0,u="".concat(i," ").concat(c);n[i]=c+1;var d=s(u),f={css:o[1],media:o[2],sourceMap:o[3]};-1!==d?(l[d].references++,l[d].updater(f)):l.push({identifier:u,updater:h(f,t),references:1}),r.push(u)}return r}function c(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var a=n.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var l=o(e.insert||"head");if(!l)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");l.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function f(e,t,n,r){var a=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,a);else{var o=document.createTextNode(a),l=e.childNodes;l[t]&&e.removeChild(l[t]),l.length?e.insertBefore(o,l[t]):e.appendChild(o)}}function m(e,t,n){var r=n.css,a=n.media,o=n.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,g=0;function h(e,t){var n,r,a;if(t.singleton){var o=g++;n=p||(p=c(t)),r=f.bind(null,n,o,!1),a=f.bind(null,n,o,!0)}else n=c(t),r=m.bind(null,n,t),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else a()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=a());var n=i(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var a=s(n[r]);l[a].references--}for(var o=i(e,t),c=0;c<n.length;c++){var u=s(n[c]);0===l[u].references&&(l[u].updater(),l.splice(u,1))}n=o}}}},"./src/global.css":function(e,t,n){var r=n("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),a=n("./node_modules/css-loader/index.js!./src/global.css");"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};r(a,o);e.exports=a.locals||{}},"./src/index.js":function(e,t,n){"use strict";n.r(t),n.d(t,"Badge",(function(){return b})),n.d(t,"Button",(function(){return j})),n.d(t,"Card",(function(){return N})),n.d(t,"CtaLink",(function(){return w})),n.d(t,"Icon",(function(){return M})),n.d(t,"Logo",(function(){return z})),n.d(t,"Nav",(function(){return L})),n.d(t,"Text",(function(){return g})),n.d(t,"Timetable",(function(){return P}));n("./src/global.css"),n("core-js/modules/es.array.slice.js");var r,a,o=n("prop-types"),l=n.n(o),s=n("react"),i=n.n(s);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e){return s.createElement("svg",c({width:22,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),r||(r=s.createElement("g",{filter:"url(#figmaCursor_svg__filter0_d)"},s.createElement("path",{d:"M14.5 17L17 4 6 10.5l5.5 1.5 3 5z",fill:"currentColor"}),s.createElement("path",{d:"M15 17.1l-.26 1.28-.67-1.12-2.9-4.83-5.3-1.45-1.14-.3 1.02-.61 11-6.5.95-.56-.2 1.08-2.5 13v.01z",stroke:"#fff",strokeLinecap:"square"}))),a||(a=s.createElement("defs",null,s.createElement("filter",{id:"figmaCursor_svg__filter0_d",x:.453,y:.022,width:20.938,height:23.722,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},s.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),s.createElement("feColorMatrix",{in:"SourceAlpha",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}),s.createElement("feOffset",{dy:1}),s.createElement("feGaussianBlur",{stdDeviation:1.5}),s.createElement("feColorMatrix",{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"}),s.createElement("feBlend",{in2:"BackgroundImageFix",result:"effect1_dropShadow"}),s.createElement("feBlend",{in:"SourceGraphic",in2:"effect1_dropShadow",result:"shape"})))))}n.p,n("core-js/modules/es.object.keys.js"),n("core-js/modules/es.object.assign.js");var d=n("classnames"),f=n.n(d);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var p=function(e){var t=e.variant,n=e.children,r=e.as,a=void 0===r?"p":r,o=e.className,l=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["variant","children","as","className"]);return i.a.createElement(a,m({className:f()({"9xl":"text-9Xl font-9Xl tracking-9Xl leading-9Xl","8xl":"text-8Xl font-8Xl tracking-8Xl leading-8Xl","7xl":"text-7Xl font-7Xl tracking-7Xl leading-7Xl","6xl":"text-6Xl font-6Xl tracking-6Xl leading-6Xl","5xl":"text-5Xl font-5Xl tracking-5Xl leading-5Xl","4xl":"text-4Xl font-4Xl tracking-4Xl leading-4Xl","3xl":"text-3Xl font-3Xl tracking-3Xl leading-3Xl","2xl":"text-2Xl font-2Xl tracking-2Xl leading-2Xl",xl:"text-xl font-xl tracking-xl leading-xl",xlbolder:"text-xlBolder font-xlBolder tracking-xlBolder leading-xlBolder",lg:"text-lg font-lg tracking-lg leading-lg",lgbolder:"text-lgBolder font-lgBolder tracking-lgBolder leading-lgBolder",base:"text-base font-base tracking-base leading-base",basebolder:"text-baseBolder font-baseBolder tracking-baseBolder leading-baseBolder",sm:"text-sm font-sm tracking-sm leading-sm",smbolder:"text-smBolder font-smBolder tracking-smBolder leading-smBolder",xs:"text-xs font-xs tracking-xs leading-xs",xsbolder:"text-xsBolder font-xsBolder tracking-xsBolder leading-xsBolder"}[t.toLowerCase()],o)},l),n)};p.propTypes={as:l.a.node,children:l.a.node,variant:l.a.string,className:l.a.string};var g=p;var h=function(e){var t,n=e.role,r=e.isHidden,a="developer"===n?"mr-4":"mb-",o="developer"===n?"ml-6 mt-4 text-accent-yellow":"ml-3 text-accent-green transform scale-x--1 scale-x-mirror scale-x-3",l="developer"===n?"bg-accent-yellow":"bg-accent-green text-light-background-900";return i.a.createElement("div",{className:f()(a,"flex flex-col items-start w-16")},!r&&i.a.createElement(i.a.Fragment,null,i.a.createElement(u,{className:o}),i.a.createElement(g,{as:"span",variant:"xs",className:f()(l,"p-1")},(t=n).charAt(0).toUpperCase()+t.slice(1))))};h.propTypes={isHidden:l.a.bool,role:l.a.string};var b=h;function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var x={small:"py-2 px-3  text-baseBolder font-baseBolder tracking-baseBolder leading-baseBolder rounded-sm",big:"py-4 px-6 text-xlBolder font-xlBolder tracking-xlBolder leading-xlBolder rounded"},y=function(e){var t=e.href,n=e.label,r=e.children,a=e.size,o=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["href","label","children","size"]),l=t?"a":"button";return i.a.createElement(l,v({href:t,className:f()(a?x[a]:x.big,"bg-primary-500 text-light-background-900 inline-flex items-center")},o),n||r)};y.propTypes={label:l.a.string,children:l.a.node,href:l.a.string,size:l.a.string};var j=y;n("core-js/modules/es.string.link.js");function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var E=function(e){var t=e.to,n=e.as,r=e.ref,a=e.children,o=e.className,l=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["to","as","ref","children","className"]),s=n,c="cursor-pointer text-light-on-background-900 inline-flex items-center group hover:text-light-on-background-700 focus:ring-primary-400 focus:ring-1";return s?i.a.createElement(s,{href:t},i.a.createElement(g,k({as:"a",variant:"lgBolder",className:f()(c,o),ref:r},l),a,"\\u00a0→")):i.a.createElement(i.a.Fragment,null,i.a.createElement(g,k({as:"a",href:t,variant:"lgBolder",className:c,ref:r},l),i.a.createElement("span",null,a," "),i.a.createElement("span",{className:"transition duration-200 transform group-hover:translate-x-1 motion-reduce:transform-none"},"→")))};E.propTypes={as:l.a.node,children:l.a.node,ref:l.a.node,to:l.a.string,className:l.a.string};var w=E,B=function(e){var t=e.heading,n=e.link,r=e.children,a=n.text;return i.a.createElement("div",{className:"flex flex-col p-6 border border-light-on-background-900 hover:bg-primary-50 text-light-on-background-900"},t&&i.a.createElement(g,{as:"h3",variant:"2Xl",className:"mb-6"},t),r&&r,n&&a&&i.a.createElement("div",{className:"mt-auto"},i.a.createElement(w,{to:n.href},n.text)))};B.propTypes={children:l.a.node,heading:l.a.string,link:l.a.shape({text:l.a.string,href:l.a.string})};var N=B,O=(n("core-js/modules/es.function.name.js"),n("@carbon/icons-react")),X=function(e){var t=e.name,n=O[t];return n&&i.a.createElement("span",{className:"inline-flex p-4 bg-light-background-800"},i.a.createElement(n,{className:"text-light-on-background-800"}))};X.propTypes={name:l.a.string};var _,S,M=X;function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function C(e){return s.createElement("svg",T({width:132,height:24,viewBox:"0 0 132 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),_||(_=s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21.9 13.988c.195.6.459 1.166.792 1.697.82 1.285 1.974 2.284 3.46 2.996 1.487.697 3.198 1.045 5.133 1.045 1.657 0 3.09-.317 4.297-.952 1.223-.635 2.121-1.595 2.694-2.88l.349 3.46h2.694v-9.127H28.847v3.252h7.362c-.31.79-.906 1.362-1.788 1.718-.883.357-1.928.535-3.136.535-1.564 0-2.81-.387-3.739-1.162-.914-.774-1.37-1.889-1.37-3.344 0-1.471.472-2.586 1.416-3.345.945-.774 2.253-1.161 3.926-1.161 1.424 0 2.554.186 3.39.557.837.372 1.255.96 1.255 1.766h4.9c0-1.24-.425-2.339-1.277-3.299-.852-.96-2.02-1.703-3.507-2.23-1.487-.526-3.151-.789-4.994-.789-1.935 0-3.646.356-5.133 1.069-1.364.639-2.448 1.526-3.25 2.661l3.26 3.265-4.263 4.268zM83.911 6.79c-.913 0-1.594-.186-2.044-.558-.448-.371-.673-.983-.673-1.835 0-.851.225-1.463.674-1.834.449-.372 1.13-.558 2.043-.558.914 0 1.603.186 2.067.558.465.371.697.983.697 1.834 0 .852-.224 1.464-.673 1.835-.45.372-1.146.558-2.09.558zm-2.299.952h4.692v11.613h-4.692V7.742zM50.867 19.726c-1.486 0-2.795-.255-3.925-.766-1.115-.511-1.982-1.231-2.601-2.16-.62-.945-.93-2.028-.93-3.252 0-1.223.31-2.299.93-3.228.619-.945 1.486-1.672 2.6-2.183 1.131-.511 2.44-.767 3.926-.767 1.486 0 2.787.256 3.902.767 1.13.51 2.005 1.238 2.624 2.183.62.929.93 2.005.93 3.228 0 1.224-.31 2.307-.93 3.252-.619.929-1.494 1.649-2.624 2.16-1.115.51-2.416.766-3.902.766zm0-3.762c.898 0 1.618-.217 2.16-.65.557-.45.836-1.038.836-1.766 0-.727-.279-1.308-.836-1.742-.542-.449-1.262-.673-2.16-.673-.898 0-1.626.224-2.183.673-.542.434-.813 1.015-.813 1.742 0 .728.27 1.316.813 1.765.557.434 1.285.65 2.183.65zm23.13-12.867H60.876v16.258h4.692l-.023-6.55h3.02c.866 0 1.578.17 2.136.511.557.34 1.122.937 1.695 1.788.573.837 1.417 2.253 2.532 4.25h5.713c-.929-1.92-1.765-3.413-2.508-4.482-.743-1.068-1.572-1.881-2.485-2.438-.898-.558-2.005-.875-3.321-.953h1.672c1.595 0 2.864-.356 3.809-1.068.944-.728 1.417-1.734 1.417-3.02 0-1.285-.465-2.322-1.394-3.112-.913-.79-2.19-1.184-3.832-1.184zm.187 5.876c-.217.186-.55.279-.999.279h-7.641l-.023-2.393h7.664c.449 0 .782.101.999.302.232.186.348.488.348.906 0 .418-.116.72-.348.906zm15.68 14.353c1.842.45 4.01.674 6.503.674 2.446 0 4.374-.495 5.783-1.486 1.409-.991 2.113-2.509 2.113-4.553V7.741h-4.714l.371 3.764h-.395c-.247-1.24-.882-2.238-1.904-2.997-1.007-.758-2.207-1.138-3.6-1.138-1.161 0-2.191.256-3.09.767-.882.495-1.57 1.207-2.066 2.136-.48.914-.72 1.975-.72 3.182 0 1.843.526 3.275 1.58 4.297 1.052 1.007 2.469 1.51 4.25 1.51 1.455 0 2.686-.279 3.692-.836 1.022-.573 1.688-1.401 1.998-2.485v.139c-.078 1.13-.248 1.99-.511 2.578a2.262 2.262 0 01-1.3 1.231c-.59.232-1.449.348-2.579.348-1.161 0-2.245-.085-3.252-.255-1.006-.155-1.726-.34-2.16-.558v3.902zm8.314-7.966c-.635.402-1.409.604-2.322.604-.898 0-1.665-.202-2.3-.604-.635-.418-.952-1.037-.952-1.858 0-.805.317-1.401.952-1.789.635-.387 1.402-.58 2.3-.58.913 0 1.688.193 2.322.58.65.388.976.984.976 1.789 0 .82-.325 1.44-.976 1.858zm8.18-12.263h5.017l-.465 9.43h.232c.202-1.286.527-2.3.976-3.043a3.841 3.841 0 011.835-1.603c.774-.34 1.78-.51 3.019-.51 1.161.015 2.067.208 2.718.58.665.356 1.153 1.03 1.463 2.02.325.992.488 2.44.488 4.344v5.04h-4.692V14.71c0-1.007-.093-1.781-.279-2.323-.17-.557-.449-.944-.836-1.161-.372-.217-.89-.325-1.556-.325-.619 0-1.177.2-1.672.604-.48.387-.86.928-1.138 1.625-.279.697-.418 1.471-.418 2.323v3.902h-4.692V3.097zm19.464 16.095c.496.263 1.247.395 2.253.395 1.192 0 2.361-.155 3.507-.465v-2.787c-.495.031-.805.047-.929.047-.449 0-.766-.054-.952-.163a.8.8 0 01-.348-.534c-.047-.232-.07-.635-.07-1.208V11.18h2.299V7.742h-2.299V4.49l-4.227.465v2.787h-1.789v3.437h1.324v3.995c0 1.192.085 2.09.256 2.694.17.604.495 1.046.975 1.324z",fill:"#002080"})),S||(S=s.createElement("path",{d:"M13.532.013l9.694 9.707-9.694 9.706h-6.41l7.38-7.38H0V7.342h14.45L7.108 0l6.424.013z",fill:"#002080"})))}n.p;var z=function(){return i.a.createElement("div",{className:"flex"},i.a.createElement(C,null))},q=(n("core-js/modules/es.array.map.js"),function(e){var t=e.items;return i.a.createElement("ul",{className:"inline-flex justify-between w-full list-none text-light-on-background-900 dark:text-dark-on-background-900"},t.map((function(e){return i.a.createElement("li",{key:e.href},i.a.createElement(g,{variant:"2Xl",as:"a",href:e.href},e.name))})))});q.propTypes={items:l.a.shape({map:l.a.func})};var L=q,I=(n("core-js/modules/es.symbol.js"),n("core-js/modules/es.symbol.description.js"),function(e){var t=e.data,n=e.header;return t&&i.a.createElement(g,{as:"table",variant:"xlBolder",className:"w-full text-light-on-background-900"},n&&i.a.createElement(g,{as:"caption",variant:"4Xl",className:"mb-5 text-left"},n),i.a.createElement("tbody",null,t.map((function(e,t){return i.a.createElement("tr",{key:e.name+t,className:"flex py-6 border-b-2 border-light-on-background-900"},i.a.createElement("th",{className:"text-left w-80"},i.a.createElement(g,{as:"span",variant:"smBolder",className:e.color+" text-light-on-background-50 p-1"},e.time)),i.a.createElement("th",{className:"w-1/2 p-0 text-left"},e.name),i.a.createElement("th",{className:"w-1/2 p-0 text-left"},e.description))}))))});I.propTypes={data:l.a.arrayOf(l.a.shape({time:l.a.string,name:l.a.string,description:l.a.string,color:l.a.string})),header:l.a.string};var P=I},0:function(e,t,n){e.exports=n("./src/index.js")},"@carbon/icons-react":function(e,t){e.exports=require("@carbon/icons-react")},classnames:function(e,t){e.exports=require("classnames")},"core-js/modules/es.array.map.js":function(e,t){e.exports=require("core-js/modules/es.array.map.js")},"core-js/modules/es.array.slice.js":function(e,t){e.exports=require("core-js/modules/es.array.slice.js")},"core-js/modules/es.function.name.js":function(e,t){e.exports=require("core-js/modules/es.function.name.js")},"core-js/modules/es.object.assign.js":function(e,t){e.exports=require("core-js/modules/es.object.assign.js")},"core-js/modules/es.object.keys.js":function(e,t){e.exports=require("core-js/modules/es.object.keys.js")},"core-js/modules/es.string.link.js":function(e,t){e.exports=require("core-js/modules/es.string.link.js")},"core-js/modules/es.symbol.description.js":function(e,t){e.exports=require("core-js/modules/es.symbol.description.js")},"core-js/modules/es.symbol.js":function(e,t){e.exports=require("core-js/modules/es.symbol.js")},"prop-types":function(e,t){e.exports=require("prop-types")},react:function(e,t){e.exports=require("react")}})}));
//# sourceMappingURL=design-system.js.map