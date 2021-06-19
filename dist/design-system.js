!function(e,r){for(var t in r)e[t]=r[t]}(exports,function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=0)}({"./src/index.js":function(e,r,t){"use strict";t.r(r),t.d(r,"colors",(function(){return a})),t.d(r,"typography",(function(){return l})),t.d(r,"twconfig",(function(){return i.a})),t.d(r,"Badge",(function(){return N})),t.d(r,"Button",(function(){return q})),t.d(r,"Card",(function(){return D})),t.d(r,"CtaLink",(function(){return _})),t.d(r,"Emoji",(function(){return H})),t.d(r,"Icon",(function(){return U})),t.d(r,"Logo",(function(){return Y})),t.d(r,"Nav",(function(){return $})),t.d(r,"Testimonial",(function(){return se})),t.d(r,"Text",(function(){return w})),t.d(r,"Timetable",(function(){return ce}));var n,o,a=t("./src/tokens/dist/colors.json"),l=t("./src/tokens/dist/typography.json"),s=t("./tailwind.config.js"),i=t.n(s),c=(t("core-js/modules/es.array.slice.js"),t("prop-types")),u=t.n(c),m=t("react"),d=t.n(m);function p(){return(p=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function g(e){return m.createElement("svg",p({width:22,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),n||(n=m.createElement("g",{filter:"url(#figmaCursor_svg__filter0_d)"},m.createElement("path",{d:"M14.5 17L17 4 6 10.5l5.5 1.5 3 5z",fill:"currentColor"}),m.createElement("path",{d:"M15 17.1l-.26 1.28-.67-1.12-2.9-4.83-5.3-1.45-1.14-.3 1.02-.61 11-6.5.95-.56-.2 1.08-2.5 13v.01z",stroke:"#fff",strokeLinecap:"square"}))),o||(o=m.createElement("defs",null,m.createElement("filter",{id:"figmaCursor_svg__filter0_d",x:.453,y:.022,width:20.938,height:23.722,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},m.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),m.createElement("feColorMatrix",{in:"SourceAlpha",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}),m.createElement("feOffset",{dy:1}),m.createElement("feGaussianBlur",{stdDeviation:1.5}),m.createElement("feColorMatrix",{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"}),m.createElement("feBlend",{in2:"BackgroundImageFix",result:"effect1_dropShadow"}),m.createElement("feBlend",{in:"SourceGraphic",in2:"effect1_dropShadow",result:"shape"})))))}t.p,t("core-js/modules/es.object.assign.js"),t("core-js/modules/es.object.keys.js");var f=t("classnames"),b=t.n(f),x=(t("core-js/modules/es.symbol.js"),t("core-js/modules/es.array.filter.js"),t("core-js/modules/es.object.get-own-property-descriptor.js"),t("core-js/modules/web.dom-collections.for-each.js"),t("core-js/modules/es.object.get-own-property-descriptors.js"),t("tailwindcss/resolveConfig")),j=t.n(x);function h(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function y(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?h(Object(t),!0).forEach((function(r){v(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function v(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}j()(i.a).theme;var X=["variant","children","as","className","highlight"];function B(){return(B=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var k=function(e){var r=e.variant,t=void 0===r?"base":r,n=e.children,o=e.as,a=void 0===o?"p":o,l=e.className,s=e.highlight,i=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,X),c="bg-highlight-"+s;return d.a.createElement(a,B({className:b()({"9xl":"text-9Xl font-9Xl tracking-9Xl leading-9Xl","8xl":"text-8Xl font-8Xl tracking-8Xl leading-8Xl","7xl":"text-7Xl font-7Xl tracking-7Xl leading-7Xl","6xl":"text-6Xl font-6Xl tracking-6Xl leading-6Xl","5xl":"text-5Xl font-5Xl tracking-5Xl leading-5Xl","4xl":"text-4Xl font-4Xl tracking-4Xl leading-4Xl","3xl":"text-3Xl font-3Xl tracking-3Xl leading-3Xl","2xl":"text-2Xl font-2Xl tracking-2Xl leading-2Xl",xl:"text-xl font-xl tracking-xl leading-xl",xlbolder:"text-xlBolder font-xlBolder tracking-xlBolder leading-xlBolder",lg:"text-lg font-lg tracking-lg leading-lg",lgbolder:"text-lgBolder font-lgBolder tracking-lgBolder leading-lgBolder",base:"text-base font-base tracking-base leading-base",basebolder:"text-baseBolder font-baseBolder tracking-baseBolder leading-baseBolder",sm:"text-sm font-sm tracking-sm leading-sm",smbolder:"text-smBolder font-smBolder tracking-smBolder leading-smBolder",xs:"text-xs font-xs tracking-xs leading-xs",xsbolder:"text-xsBolder font-xsBolder tracking-xsBolder leading-xsBolder"}[t.toLowerCase()],s?c:"",l)},i),n)};k.propTypes={as:u.a.node,children:u.a.node,variant:u.a.string,className:u.a.string,highlight:u.a.oneOf(Object.keys(function e(r,t){return Object.keys(r).reduce((function(n,o){var a,l=(t.length>0?t+"-":"")+o;if("string"==typeof r[o])return y(y({},n),{},((a={})[l]=r[o],a));var s=e(r[o],l);return y(y({},n),s)}),{})}(j()(i.a).theme.colors,"")))},k.defaultProps={as:"p"};var w=k;var O=function(e){var r,t=e.role,n=e.isHidden,o="developer"===t?"mr-4":"mb-",a="developer"===t?"ml-6 mt-4 text-accent-yellow":"ml-3 text-accent-green transform scale-x--1 scale-x-mirror scale-x-3",l="developer"===t?"bg-accent-yellow":"bg-accent-green text-light-background-900";return d.a.createElement("div",{className:b()(o,"flex flex-col items-start w-16")},!n&&d.a.createElement(d.a.Fragment,null,d.a.createElement(g,{className:a}),d.a.createElement(w,{as:"span",variant:"xs",className:b()(l,"p-1")},(r=t).charAt(0).toUpperCase()+r.slice(1))))};O.propTypes={isHidden:u.a.bool,role:u.a.string};var N=O,E=["href","label","children","size","className"];function M(){return(M=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var S={small:"py-2 px-3 text-baseBolder font-baseBolder tracking-baseBolder leading-baseBolder rounded-sm",big:"py-4 px-6 text-xlBolder font-xlBolder tracking-xlBolder leading-xlBolder rounded"},P=function(e){var r=e.href,t=e.label,n=e.children,o=e.size,a=e.className,l=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,E),s=r?"a":"button";return d.a.createElement(s,M({href:r,className:b()(o?S[o]:S.big,"bg-primary-500 text-light-background-900 inline-flex items-center",a)},l),t||n)};P.propTypes={label:u.a.string,children:u.a.node,href:u.a.string,size:u.a.string,className:u.a.string};var q=P,C=(t("core-js/modules/es.string.link.js"),["to","as","ref","children","className","arrow"]);function T(){return(T=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var z=function(e){var r=e.to,t=e.as,n=e.ref,o=e.children,a=e.className,l=e.arrow,s=void 0===l?"end":l,i=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,C),c=t,u="cursor-pointer text-light-on-background-900 inline-flex items-center group hover:text-light-on-background-700 focus:ring-primary-400 focus:ring-1";return c?d.a.createElement(c,{href:r},d.a.createElement(w,T({as:"a",variant:"lgBolder",className:b()(u,a),ref:n},i),"start"===s?" →"+o:o)):d.a.createElement(d.a.Fragment,null,d.a.createElement(w,T({as:"a",href:r,variant:"lgBolder",className:u,ref:n},i),"start"===s&&d.a.createElement("span",{className:"transition duration-200 transform group-hover:-translate-x-1 motion-reduce:transform-none"},"←"),d.a.createElement("span",null,"start"==s&&" ",o,"end"==s&&" "),"end"===s&&d.a.createElement("span",{className:"transition duration-200 transform group-hover:translate-x-1 motion-reduce:transform-none"},"→")))};z.propTypes={as:u.a.node,children:u.a.node,ref:u.a.node,to:u.a.string,className:u.a.string,arrow:u.a.oneOf(["start","end"])};var _=z,F=function(e){var r=e.heading,t=e.link,n=e.children,o=e.className,a=e.linkComponent,l=t?t.text:null;return d.a.createElement("div",{className:b()("flex flex-col h-full p-6 border border-light-on-background-900 hover:bg-primary-50 text-light-on-background-900 text-left hover:cursor-pointer",o)},r&&d.a.createElement(w,{as:"h3",variant:"2Xl",className:"mb-6 text-left"},r),n&&n,t&&l&&d.a.createElement("div",{className:"mt-auto"},d.a.createElement(_,{as:a||"a",to:t.href},t.text)))};F.propTypes={className:u.a.string,children:u.a.node,heading:u.a.string,linkComponent:u.a.elementType,link:u.a.shape({text:u.a.string,href:u.a.string})};var D=F,V=["label","symbol"];function I(){return(I=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var G=function(e){var r=e.label,t=e.symbol,n=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,V);return d.a.createElement("span",I({},n,{role:"img","aria-label":r||""}),t)};G.propTypes={label:u.a.string,symbol:u.a.string};var H=d.a.memo(G),L=(t("core-js/modules/es.function.name.js"),t("@carbon/icons-react")),W=function(e){var r=e.name,t=e.className,n=L[r];return n&&d.a.createElement("span",{className:b()("inline-flex p-4 bg-light-background-800",t)},d.a.createElement(n,{className:"text-light-on-background-800"}))};W.propTypes={name:u.a.string,className:u.a.string};var R,A,U=W;function J(){return(J=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function K(e){return m.createElement("svg",J({width:132,height:24,viewBox:"0 0 132 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),R||(R=m.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21.9 13.988c.195.6.459 1.166.792 1.697.82 1.285 1.974 2.284 3.46 2.996 1.487.697 3.198 1.045 5.133 1.045 1.657 0 3.09-.317 4.297-.952 1.223-.635 2.121-1.595 2.694-2.88l.349 3.46h2.694v-9.127H28.847v3.252h7.362c-.31.79-.906 1.362-1.788 1.718-.883.357-1.928.535-3.136.535-1.564 0-2.81-.387-3.739-1.162-.914-.774-1.37-1.889-1.37-3.344 0-1.471.472-2.586 1.416-3.345.945-.774 2.253-1.161 3.926-1.161 1.424 0 2.554.186 3.39.557.837.372 1.255.96 1.255 1.766h4.9c0-1.24-.425-2.339-1.277-3.299-.852-.96-2.02-1.703-3.507-2.23-1.487-.526-3.151-.789-4.994-.789-1.935 0-3.646.356-5.133 1.069-1.364.639-2.448 1.526-3.25 2.661l3.26 3.265-4.263 4.268zM83.911 6.79c-.913 0-1.594-.186-2.044-.558-.448-.371-.673-.983-.673-1.835 0-.851.225-1.463.674-1.834.449-.372 1.13-.558 2.043-.558.914 0 1.603.186 2.067.558.465.371.697.983.697 1.834 0 .852-.224 1.464-.673 1.835-.45.372-1.146.558-2.09.558zm-2.299.952h4.692v11.613h-4.692V7.742zM50.867 19.726c-1.486 0-2.795-.255-3.925-.766-1.115-.511-1.982-1.231-2.601-2.16-.62-.945-.93-2.028-.93-3.252 0-1.223.31-2.299.93-3.228.619-.945 1.486-1.672 2.6-2.183 1.131-.511 2.44-.767 3.926-.767 1.486 0 2.787.256 3.902.767 1.13.51 2.005 1.238 2.624 2.183.62.929.93 2.005.93 3.228 0 1.224-.31 2.307-.93 3.252-.619.929-1.494 1.649-2.624 2.16-1.115.51-2.416.766-3.902.766zm0-3.762c.898 0 1.618-.217 2.16-.65.557-.45.836-1.038.836-1.766 0-.727-.279-1.308-.836-1.742-.542-.449-1.262-.673-2.16-.673-.898 0-1.626.224-2.183.673-.542.434-.813 1.015-.813 1.742 0 .728.27 1.316.813 1.765.557.434 1.285.65 2.183.65zm23.13-12.867H60.876v16.258h4.692l-.023-6.55h3.02c.866 0 1.578.17 2.136.511.557.34 1.122.937 1.695 1.788.573.837 1.417 2.253 2.532 4.25h5.713c-.929-1.92-1.765-3.413-2.508-4.482-.743-1.068-1.572-1.881-2.485-2.438-.898-.558-2.005-.875-3.321-.953h1.672c1.595 0 2.864-.356 3.809-1.068.944-.728 1.417-1.734 1.417-3.02 0-1.285-.465-2.322-1.394-3.112-.913-.79-2.19-1.184-3.832-1.184zm.187 5.876c-.217.186-.55.279-.999.279h-7.641l-.023-2.393h7.664c.449 0 .782.101.999.302.232.186.348.488.348.906 0 .418-.116.72-.348.906zm15.68 14.353c1.842.45 4.01.674 6.503.674 2.446 0 4.374-.495 5.783-1.486 1.409-.991 2.113-2.509 2.113-4.553V7.741h-4.714l.371 3.764h-.395c-.247-1.24-.882-2.238-1.904-2.997-1.007-.758-2.207-1.138-3.6-1.138-1.161 0-2.191.256-3.09.767-.882.495-1.57 1.207-2.066 2.136-.48.914-.72 1.975-.72 3.182 0 1.843.526 3.275 1.58 4.297 1.052 1.007 2.469 1.51 4.25 1.51 1.455 0 2.686-.279 3.692-.836 1.022-.573 1.688-1.401 1.998-2.485v.139c-.078 1.13-.248 1.99-.511 2.578a2.262 2.262 0 01-1.3 1.231c-.59.232-1.449.348-2.579.348-1.161 0-2.245-.085-3.252-.255-1.006-.155-1.726-.34-2.16-.558v3.902zm8.314-7.966c-.635.402-1.409.604-2.322.604-.898 0-1.665-.202-2.3-.604-.635-.418-.952-1.037-.952-1.858 0-.805.317-1.401.952-1.789.635-.387 1.402-.58 2.3-.58.913 0 1.688.193 2.322.58.65.388.976.984.976 1.789 0 .82-.325 1.44-.976 1.858zm8.18-12.263h5.017l-.465 9.43h.232c.202-1.286.527-2.3.976-3.043a3.841 3.841 0 011.835-1.603c.774-.34 1.78-.51 3.019-.51 1.161.015 2.067.208 2.718.58.665.356 1.153 1.03 1.463 2.02.325.992.488 2.44.488 4.344v5.04h-4.692V14.71c0-1.007-.093-1.781-.279-2.323-.17-.557-.449-.944-.836-1.161-.372-.217-.89-.325-1.556-.325-.619 0-1.177.2-1.672.604-.48.387-.86.928-1.138 1.625-.279.697-.418 1.471-.418 2.323v3.902h-4.692V3.097zm19.464 16.095c.496.263 1.247.395 2.253.395 1.192 0 2.361-.155 3.507-.465v-2.787c-.495.031-.805.047-.929.047-.449 0-.766-.054-.952-.163a.8.8 0 01-.348-.534c-.047-.232-.07-.635-.07-1.208V11.18h2.299V7.742h-2.299V4.49l-4.227.465v2.787h-1.789v3.437h1.324v3.995c0 1.192.085 2.09.256 2.694.17.604.495 1.046.975 1.324z",fill:"#002080"})),A||(A=m.createElement("path",{d:"M13.532.013l9.694 9.707-9.694 9.706h-6.41l7.38-7.38H0V7.342h14.45L7.108 0l6.424.013z",fill:"#002080"})))}t.p;var Q=function(e){var r=e.className;return d.a.createElement("div",{className:b()("flex",r)},d.a.createElement(K,null))};Q.propTypes={className:u.a.string};var Y=Q,Z=(t("core-js/modules/es.array.map.js"),function(e){var r=e.items,t=e.linkComponent,n=e.className;return d.a.createElement("ul",{className:b()("inline-flex justify-between list-none text-light-on-background-900 dark:text-dark-on-background-900",n)},r&&r.map((function(e){return d.a.createElement("li",{key:e.href,className:"px-2"},d.a.createElement(w,{variant:"2Xl",as:t||"a",href:e.href},e.name))})))});Z.propTypes={className:u.a.string,linkComponent:u.a.elementType};var $=Z,ee=t("react-multi-carousel"),re=t.n(ee),te=["previous","next","carouselState"];var ne=function(){var e=j()(i.a).theme.screens,r={};for(var t in e)r[t]=parseInt(e[t]);return r}(),oe={bigdesktop:{breakpoint:{max:3e3,min:ne["2xl"]},items:3,paritialVisibilityGutter:70},desktop:{breakpoint:{max:ne["2xl"],min:ne.xl},items:2,paritialVisibilityGutter:120},tablet:{breakpoint:{max:ne.xl,min:ne.md},items:2,paritialVisibilityGutter:80},mobile:{breakpoint:{max:ne.md,min:0},items:1,paritialVisibilityGutter:70}},ae=function(e){var r=e.previous,t=e.next,n=e.carouselState,o=(function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t])}(e,te),n.currentSlide),a=0===o,l=o+n.slidesToShow>=n.totalItems;return d.a.createElement("div",{className:"absolute top-0 right-0 flex mr-16"},d.a.createElement("button",{disabled:a,className:b()("mr-14",a?"text-gray-100":"text-light-on-background-900 "),onClick:r},d.a.createElement(L.ArrowLeft32,null)),d.a.createElement("button",{disabled:l,className:b()(l?"text-gray-100":"text-light-on-background-900"),onClick:t},d.a.createElement(L.ArrowRight32,null)))},le=function(e){var r=e.testimonials;return d.a.createElement("div",{className:"relative"},d.a.createElement(re.a,{className:"relative",partialVisible:!0,containerClass:"container pt-16",sliderClass:"mt-16",customButtonGroup:d.a.createElement(ae,null),itemClass:"h-auto",arrows:!1,responsive:oe,renderButtonGroupOutside:!0},r.map((function(e){return d.a.createElement("div",{key:e.name,className:b()(e.colors,"p-10 mr-10 rounded-lg h-full flex flex-col")},d.a.createElement(w,{variant:"xlBolder",as:"p",className:"mb-6"},e.text),d.a.createElement("div",{className:"flex items-center mt-auto"},d.a.createElement("img",{src:e.avatar,alt:e.name,className:"w-12 h-12 mr-3 rounded-full"}),d.a.createElement(w,{variant:"xlBolder",as:"p"},e.name)))}))))};le.propTypes={testimonials:u.a.arrayOf(u.a.shape({name:u.a.string,avatar:u.a.string,text:u.a.string,colors:u.a.string}))};var se=le,ie=(t("core-js/modules/es.symbol.description.js"),function(e){var r=e.data,t=e.header,n=e.className;return r&&d.a.createElement(w,{as:"table",variant:"xlBolder",className:b()("text-light-on-background-900",n)},t&&d.a.createElement(w,{as:"caption",variant:"4Xl",className:"mb-5 text-left"},t),d.a.createElement("tbody",null,r.map((function(e,r){return d.a.createElement("tr",{key:e.name+r,className:"flex py-6 border-b-2 border-light-on-background-900"},d.a.createElement("th",{className:"text-left w-80"},d.a.createElement(w,{as:"span",variant:"smBolder",className:e.color+" text-light-on-background-50 p-1"},e.time)),d.a.createElement("th",{className:"w-1/2 p-0 text-left"},d.a.createElement(w,{as:"span",variant:"xlBolder"},e.name)),d.a.createElement("th",{className:"w-1/2 p-0 text-left"},d.a.createElement(w,{as:"span",variant:"xlBolder"},e.description)))}))))});ie.propTypes={header:u.a.string,className:u.a.string};var ce=ie},"./src/tokens/dist/colors.json":function(e){e.exports=JSON.parse('{"primary":{"50":"rgba(247, 250, 255, 1)","100":"rgba(198, 217, 255, 1)","200":"rgba(148, 181, 255, 1)","300":"rgba(99, 143, 255, 1)","400":"rgba(50, 106, 255, 1)","500":"rgba(0, 71, 255, 1)","600":"rgba(0, 60, 223, 1)","700":"rgba(0, 50, 191, 1)","800":"rgba(0, 50, 191, 1)"},"light":{"on-background":{"50":"rgba(255, 255, 255, 1)","100":"rgba(227, 232, 242, 1)","200":"rgba(198, 209, 229, 1)","300":"rgba(170, 185, 216, 1)","400":"rgba(142, 160, 202, 1)","500":"rgba(113, 135, 188, 1)","600":"rgba(85, 110, 173, 1)","700":"rgba(57, 84, 158, 1)","800":"rgba(28, 58, 143, 1)","900":"rgba(0, 32, 128, 1)"},"background":{"50":"rgba(0, 32, 128, 1)","100":"rgba(28, 58, 143, 1)","200":"rgba(57, 84, 158, 1)","300":"rgba(85, 110, 173, 1)","400":"rgba(113, 135, 188, 1)","500":"rgba(142, 160, 202, 1)","600":"rgba(170, 185, 216, 1)","700":"rgba(198, 209, 229, 1)","800":"rgba(227, 232, 242, 1)","900":"rgba(255, 255, 255, 1)"}},"dark":{"on-background":{"50":"rgba(0, 32, 128, 1)","100":"rgba(28, 58, 143, 1)","200":"rgba(57, 84, 158, 1)","300":"rgba(85, 110, 173, 1)","400":"rgba(113, 135, 188, 1)","500":"rgba(142, 160, 202, 1)","600":"rgba(170, 185, 216, 1)","700":"rgba(198, 209, 229, 1)","800":"rgba(227, 232, 242, 1)","900":"rgba(255, 255, 255, 1)"},"background":{"50":"rgba(255, 255, 255, 1)","100":"rgba(227, 232, 242, 1)","200":"rgba(198, 209, 229, 1)","300":"rgba(170, 185, 216, 1)","400":"rgba(142, 160, 202, 1)","500":"rgba(113, 135, 188, 1)","600":"rgba(85, 110, 173, 1)","700":"rgba(57, 84, 158, 1)","800":"rgba(28, 58, 143, 1)","900":"rgba(0, 32, 128, 1)"}},"gray":{"50":"rgba(247, 248, 250, 1)","100":"rgba(220, 224, 233, 1)","200":"rgba(194, 199, 214, 1)","300":"rgba(168, 173, 196, 1)","400":"rgba(143, 148, 176, 1)","500":"rgba(118, 123, 156, 1)","600":"rgba(93, 97, 136, 1)","700":"rgba(70, 72, 115, 1)","800":"rgba(47, 47, 93, 1)","900":"rgba(25, 24, 71, 1)"},"yellow":{"100":"rgba(255, 225, 198, 1)"},"accent":{"red":"rgba(244, 63, 94, 1)","purple":"rgba(99, 102, 241, 1)","blue":"rgba(14, 165, 233, 1)","turqoise":"rgba(20, 184, 166, 1)","green":"rgba(16, 185, 129, 1)","yellow":"rgba(250, 204, 21, 1)"}}')},"./src/tokens/dist/typography.json":function(e){e.exports=JSON.parse('{"fontSize":{"9Xl":"128px","8Xl":"96px","7Xl":"72px","6Xl":"60px","5Xl":"48px","4Xl":"36px","3Xl":"30px","2Xl":"24px","xl":"20px","xlBolder":"20px","lg":"18px","lgBolder":"18px","base":"16px","baseBolder":"16px","sm":"14px","smBolder":"14px","xs":"12px","xsBolder":"12px"},"textDecoration":{"9Xl":"none","8Xl":"none","7Xl":"none","6Xl":"none","5Xl":"none","4Xl":"none","3Xl":"none","2Xl":"none","xl":"none","xlBolder":"none","lg":"none","lgBolder":"none","base":"none","baseBolder":"none","sm":"none","smBolder":"none","xs":"none","xsBolder":"none"},"fontFamily":{"9Xl":"Neue Montreal","8Xl":"Neue Montreal","7Xl":"Neue Montreal","6Xl":"Neue Montreal","5Xl":"Neue Montreal","4Xl":"Neue Montreal","3Xl":"Neue Montreal","2Xl":"Neue Montreal","xl":"Neue Montreal","xlBolder":"Neue Montreal","lg":"Neue Montreal","lgBolder":"Neue Montreal","base":"Neue Montreal","baseBolder":"Neue Montreal","sm":"Neue Montreal","smBolder":"Neue Montreal","xs":"Neue Montreal","xsBolder":"Neue Montreal"},"fontWeight":{"9Xl":500,"8Xl":500,"7Xl":500,"6Xl":500,"5Xl":500,"4Xl":500,"3Xl":500,"2Xl":500,"xl":400,"xlBolder":500,"lg":400,"lgBolder":500,"base":400,"baseBolder":500,"sm":400,"smBolder":500,"xs":400,"xsBolder":500},"fontStyle":{"9Xl":"normal","8Xl":"normal","7Xl":"normal","6Xl":"normal","5Xl":"normal","4Xl":"normal","3Xl":"normal","2Xl":"normal","xl":"normal","xlBolder":"normal","lg":"normal","lgBolder":"normal","base":"normal","baseBolder":"normal","sm":"normal","smBolder":"normal","xs":"normal","xsBolder":"normal"},"fontStretch":{"9Xl":"normal","8Xl":"normal","7Xl":"normal","6Xl":"normal","5Xl":"normal","4Xl":"normal","3Xl":"normal","2Xl":"normal","xl":"normal","xlBolder":"normal","lg":"normal","lgBolder":"normal","base":"normal","baseBolder":"normal","sm":"normal","smBolder":"normal","xs":"normal","xsBolder":"normal"},"letterSpacing":{"9Xl":"-0.03em","8Xl":"-0.02em","7Xl":"-0.02em","6Xl":"-0.01em","5Xl":"-0.01em","4Xl":"-0.01em","3Xl":"0em","2Xl":"0em","xl":"0em","xlBolder":"0em","lg":"0em","lgBolder":"0em","base":"0em","baseBolder":"0em","sm":"0em","smBolder":"0em","xs":"0em","xsBolder":"0em"},"lineHeight":{"9Xl":"100%","8Xl":"100%","7Xl":"100%","6Xl":"100%","5Xl":"100%","4Xl":"100%","3Xl":"100%","2Xl":"100%","xl":"32px","xlBolder":"32px","lg":"32px","lgBolder":"32px","base":"24px","baseBolder":"24px","sm":"18px","smBolder":"18px","xs":"16px","xsBolder":"16px"},"paragraphIndent":{"9Xl":"0px","8Xl":"0px","7Xl":"0px","6Xl":"0px","5Xl":"0px","4Xl":"0px","3Xl":"0px","2Xl":"0px","xl":"0px","xlBolder":"0px","lg":"0px","lgBolder":"0px","base":"0px","baseBolder":"0px","sm":"0px","smBolder":"0px","xs":"0px","xsBolder":"0px"},"paragraphSpacing":{"9Xl":"0px","8Xl":"0px","7Xl":"0px","6Xl":"0px","5Xl":"0px","4Xl":"0px","3Xl":"0px","2Xl":"0px","xl":"0px","xlBolder":"0px","lg":"0px","lgBolder":"0px","base":"0px","baseBolder":"0px","sm":"0px","smBolder":"0px","xs":"0px","xsBolder":"0px"},"textCase":{"9Xl":"none","8Xl":"none","7Xl":"none","6Xl":"none","5Xl":"none","4Xl":"none","3Xl":"none","2Xl":"none","xl":"none","xlBolder":"none","lg":"none","lgBolder":"none","base":"none","baseBolder":"none","sm":"none","smBolder":"none","xs":"none","xsBolder":"none"}}')},"./tailwind.config.js":function(e,r,t){function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}t("core-js/modules/es.object.keys.js"),t("core-js/modules/es.array.iterator.js"),t("core-js/modules/es.object.from-entries.js"),t("core-js/modules/es.array.map.js"),t("core-js/modules/es.object.entries.js"),t("core-js/modules/es.array.join.js"),t("core-js/modules/es.array.concat.js"),t("core-js/modules/es.symbol.js"),t("core-js/modules/es.array.filter.js"),t("core-js/modules/es.object.get-own-property-descriptor.js"),t("core-js/modules/web.dom-collections.for-each.js"),t("core-js/modules/es.object.get-own-property-descriptors.js");var l=t("./src/tokens/dist/colors.json"),s=t("./src/tokens/dist/typography.json"),i=t("tailwindcss/defaultTheme"),c=["fontSize","textDecoration","fontFamily","fontWeight","fontStyle","letterSpacing","lineHeight","textCase"],u=function(e,r){return c.reduce((function(t,n){var a;return o(o({},t),{},((a={})[n]=r(n+"."+e),a))}),{})},m={theme:{fontSize:o({},s.fontSize),fontWeight:o({},s.fontWeight),lineHeight:o({},s.lineHeight),letterSpacing:o({},s.letterSpacing),extend:{width:{150:"150%"},colors:o({},l),backgroundImage:function(e){return function(e){return function e(r,t){return Object.keys(r).reduce((function(n,a){var l;if("string"==typeof r[a])return o(o({},n),{},((l={})[t+"-"+a]="linear-gradient(to top, transparent 8px, "+r[a]+" 8px, "+r[a]+" 19px, transparent 19px)",l));var s=e(r[a],t+"-"+a);return o(o({},n),s)}),{})}(e("colors"),"highlight")}(e)},fontFamily:Object.fromEntries(Object.entries(s.fontFamily).map((function(e){return[e[0],[e[1]].concat(i.fontFamily.sans).join(",")]}))),scale:{mirror:"-1"},typography:function(e){return{DEFAULT:{css:{color:e("colors.light['on-background'].900"),maxWidth:"72ch",p:o(o({},u("base",e)),{},{paddingBottom:"1rem"}),strong:{color:"inherit",fontWeight:500},thead:{color:"inherit",fontWeight:500},h1:o(o({},u("6Xl",e)),{},{color:e("colors.light['on-background'].900")}),h2:o(o({},u("4Xl",e)),{},{color:e("colors.light['on-background'].900")}),h3:o(o({},u("2Xl",e)),{},{color:e("colors.light['on-background'].900")}),h4:o(o({},u("xlBolder",e)),{},{color:e("colors.light['on-background'].900")}),h5:o(o({},u("base",e)),{},{color:e("colors.light['on-background'].900")}),h6:o(o({},u("smBolder",e)),{},{color:e("colors.light['on-background'].900")}),pre:{backgroundColor:e("colors.primary.100"),color:e("colors.light['on-background'].900"),padding:"1rem"},code:{backgroundColor:e("colors.primary.100")},"code:before, code:after":{content:""},blockquote:{backgroundColor:e("colors.light['on-background'].100"),color:e("colors.light['on-background'].900"),p:{paddingTop:"1rem",paddingRight:"0.5rem"}},"ul >li:before":{content:"-"},a:{color:e("colors.light['on-background'].900"),cursor:"pointer"}}}}}},fontFace:{"Neue Montreal":[{filename:"NeueMontreal-Regular",style:"normal",weight:400,display:"swap"},{filename:"NeueMontreal-Italic",style:"italic",weight:400,display:"swap"},{filename:"NeueMontreal-Medium",style:"normal",weight:500,display:"swap"},{filename:"NeueMontreal-MediumItalic",style:"italic",weight:500,display:"swap"},{filename:"NeueMontreal Regular "}]}},plugins:[t("@tailwindcss/typography"),t("./tailwindPlugins/font-face.js")()]};e.exports=m},"./tailwindPlugins/font-face.js":function(e,r,t){t("core-js/modules/web.dom-collections.for-each.js"),t("core-js/modules/es.object.entries.js"),t("core-js/modules/es.array.join.js"),e.exports=function(){return function(e){var r=e.addBase,t=(0,e.theme)("fontFace",{});Object.entries(t).forEach((function(e){var t=e[0];e[1].forEach((function(e){var n=e.filename,o=e.weight,a=void 0===o?400:o,l=e.style,s=void 0===l?"normal":l,i=e.display;r({"@font-face":{fontFamily:t,fontWeight:a,fontStyle:s,fontDisplay:void 0===i?"auto":i,src:['local("'+n+'")','url("/'+n+'.woff") format("woff")'].join(", ")}})}))}))}}},0:function(e,r,t){e.exports=t("./src/index.js")},"@carbon/icons-react":function(e,r){e.exports=require("@carbon/icons-react")},"@tailwindcss/typography":function(e,r){e.exports=require("@tailwindcss/typography")},classnames:function(e,r){e.exports=require("classnames")},"core-js/modules/es.array.concat.js":function(e,r){e.exports=require("core-js/modules/es.array.concat.js")},"core-js/modules/es.array.filter.js":function(e,r){e.exports=require("core-js/modules/es.array.filter.js")},"core-js/modules/es.array.iterator.js":function(e,r){e.exports=require("core-js/modules/es.array.iterator.js")},"core-js/modules/es.array.join.js":function(e,r){e.exports=require("core-js/modules/es.array.join.js")},"core-js/modules/es.array.map.js":function(e,r){e.exports=require("core-js/modules/es.array.map.js")},"core-js/modules/es.array.slice.js":function(e,r){e.exports=require("core-js/modules/es.array.slice.js")},"core-js/modules/es.function.name.js":function(e,r){e.exports=require("core-js/modules/es.function.name.js")},"core-js/modules/es.object.assign.js":function(e,r){e.exports=require("core-js/modules/es.object.assign.js")},"core-js/modules/es.object.entries.js":function(e,r){e.exports=require("core-js/modules/es.object.entries.js")},"core-js/modules/es.object.from-entries.js":function(e,r){e.exports=require("core-js/modules/es.object.from-entries.js")},"core-js/modules/es.object.get-own-property-descriptor.js":function(e,r){e.exports=require("core-js/modules/es.object.get-own-property-descriptor.js")},"core-js/modules/es.object.get-own-property-descriptors.js":function(e,r){e.exports=require("core-js/modules/es.object.get-own-property-descriptors.js")},"core-js/modules/es.object.keys.js":function(e,r){e.exports=require("core-js/modules/es.object.keys.js")},"core-js/modules/es.string.link.js":function(e,r){e.exports=require("core-js/modules/es.string.link.js")},"core-js/modules/es.symbol.description.js":function(e,r){e.exports=require("core-js/modules/es.symbol.description.js")},"core-js/modules/es.symbol.js":function(e,r){e.exports=require("core-js/modules/es.symbol.js")},"core-js/modules/web.dom-collections.for-each.js":function(e,r){e.exports=require("core-js/modules/web.dom-collections.for-each.js")},"prop-types":function(e,r){e.exports=require("prop-types")},react:function(e,r){e.exports=require("react")},"react-multi-carousel":function(e,r){e.exports=require("react-multi-carousel")},"tailwindcss/defaultTheme":function(e,r){e.exports=require("tailwindcss/defaultTheme")},"tailwindcss/resolveConfig":function(e,r){e.exports=require("tailwindcss/resolveConfig")}}));
//# sourceMappingURL=design-system.js.map