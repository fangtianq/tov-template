!function(){function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return r};var t,r={},n=Object.prototype,o=n.hasOwnProperty,a=Object.defineProperty||function(e,t,r){e[t]=r.value},i="function"==typeof Symbol?Symbol:{},u=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function s(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(t){s=function(e,t,r){return e[t]=r}}function f(e,t,r,n){var o=t&&t.prototype instanceof g?t:g,i=Object.create(o.prototype),u=new N(n||[]);return a(i,"_invoke",{value:P(e,r,u)}),i}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}r.wrap=f;var v="suspendedStart",p="suspendedYield",h="executing",y="completed",m={};function g(){}function w(){}function b(){}var E={};s(E,u,(function(){return this}));var L=Object.getPrototypeOf,O=L&&L(L(F([])));O&&O!==n&&o.call(O,u)&&(E=O);var j=b.prototype=g.prototype=Object.create(E);function x(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function S(e,t){function r(n,a,i,u){var c=d(e[n],e,a);if("throw"!==c.type){var l=c.arg,s=l.value;return s&&"object"==typeof s&&o.call(s,"__await")?t.resolve(s.__await).then((function(e){r("next",e,i,u)}),(function(e){r("throw",e,i,u)})):t.resolve(s).then((function(e){l.value=e,i(l)}),(function(e){return r("throw",e,i,u)}))}u(c.arg)}var n;a(this,"_invoke",{value:function(e,o){function a(){return new t((function(t,n){r(e,o,t,n)}))}return n=n?n.then(a,a):a()}})}function P(e,r,n){var o=v;return function(a,i){if(o===h)throw new Error("Generator is already running");if(o===y){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var u=n.delegate;if(u){var c=T(u,n);if(c){if(c===m)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===v)throw o=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=h;var l=d(e,r,n);if("normal"===l.type){if(o=n.done?y:p,l.arg===m)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=y,n.method="throw",n.arg=l.arg)}}}function T(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,T(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var a=d(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,m;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,m):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function _(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(_,this),this.reset(!0)}function F(e){if(e||""===e){var r=e[u];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function r(){for(;++n<e.length;)if(o.call(e,n))return r.value=e[n],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(typeof e+" is not iterable")}return w.prototype=b,a(j,"constructor",{value:b,configurable:!0}),a(b,"constructor",{value:w,configurable:!0}),w.displayName=s(b,l,"GeneratorFunction"),r.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===w||"GeneratorFunction"===(t.displayName||t.name))},r.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,s(e,l,"GeneratorFunction")),e.prototype=Object.create(j),e},r.awrap=function(e){return{__await:e}},x(S.prototype),s(S.prototype,c,(function(){return this})),r.AsyncIterator=S,r.async=function(e,t,n,o,a){void 0===a&&(a=Promise);var i=new S(f(e,t,n,o),a);return r.isGeneratorFunction(t)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},x(j),s(j,l,"Generator"),s(j,u,(function(){return this})),s(j,"toString",(function(){return"[object Generator]"})),r.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},r.values=F,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(k),!e)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(n,o){return u.type="throw",u.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],u=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),l=o.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),k(r),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:F(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),m}},r}function t(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,u=[],c=!0,l=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=a.call(r)).done)&&(u.push(n.value),u.length!==t);c=!0);}catch(e){l=!0,o=e}finally{try{if(!c&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(l)throw o}}return u}}(e,t)||i(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function n(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t,r){var n;return(t="symbol"==typeof(n=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?n:String(n))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=i(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return u=e.done,e},e:function(e){c=!0,a=e},f:function(){try{u||null==r.return||r.return()}finally{if(c)throw a}}}}function i(e,t){if(e){if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}System.register(["./index-legacy.7a69c0b7.js","./isNil-legacy.e248952d.js"],(function(r,o){"use strict";var i,u,c,l,s,f,d,v,p,h,y,m,g,w;return{setters:[e=>{i=e.h,u=e.aX,c=e.i,l=e.ay,s=e.e,f=e.az,d=e.d,v=e.p,p=e.Y,h=e.y,y=e.j,m=e.m,g=e.aK},e=>{w=e.i}],execute:function(){var o=[],b=e=>{var t=e;t.key===l.esc&&o.forEach((e=>e(t)))},E="focus-trap.focus-after-trapped",L="focus-trap.focus-after-released",O={cancelable:!0,bubbles:!1},j={cancelable:!0,bubbles:!1},x="focusAfterTrapped",S="focusAfterReleased",P=r("F",Symbol("elFocusTrap")),T=s(),_=s(0),k=s(0),N=0,F=e=>{for(var t=[],r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{var t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0||e===document.activeElement?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});r.nextNode();)t.push(r.currentNode);return t},I=(e,t)=>{var r,n=a(e);try{for(n.s();!(r=n.n()).done;){var o=r.value;if(!A(o,t))return o}}catch(i){n.e(i)}finally{n.f()}},A=(e,t)=>{if("hidden"===getComputedStyle(e).visibility)return!0;for(;e;){if(t&&e===t)return!1;if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1},R=(e,t)=>{if(e&&e.focus){var r=document.activeElement;e.focus({preventScroll:!0}),k.value=window.performance.now(),e!==r&&(e=>e instanceof HTMLInputElement&&"select"in e)(e)&&t&&e.select()}};function K(e,t){var r=[...e],n=e.indexOf(t);return-1!==n&&r.splice(n,1),r}var G,C=function(e){var t,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.activeElement,o=a(e);try{for(o.s();!(t=o.n()).done;){var i=t.value;if(R(i,r),document.activeElement!==n)return}}catch(u){o.e(u)}finally{o.f()}},D=(G=[],{push:e=>{var t=G[0];t&&e!==t&&t.pause(),(G=K(G,e)).unshift(e)},remove:e=>{var t,r;null==(r=null==(t=(G=K(G,e))[0])?void 0:t.resume)||r.call(t)}}),M=()=>{T.value="pointer",_.value=window.performance.now()},U=()=>{T.value="keyboard",_.value=window.performance.now()},Y=()=>(i((()=>{0===N&&(document.addEventListener("mousedown",M),document.addEventListener("touchstart",M),document.addEventListener("keydown",U)),N++})),c((()=>{--N<=0&&(document.removeEventListener("mousedown",M),document.removeEventListener("touchstart",M),document.removeEventListener("keydown",U))})),{focusReason:T,lastUserFocusTimestamp:_,lastAutomatedFocusTimestamp:k}),q=e=>new CustomEvent("focus-trap.focusout-prevented",n(n({},j),{},{detail:e})),B=d({name:"ElFocusTrap",inheritAttrs:!1,props:{loop:Boolean,trapped:Boolean,focusTrapEl:Object,focusStartEl:{type:[Object,String],default:"first"}},emits:[x,S,"focusin","focusout","focusout-prevented","release-requested"],setup(r,a){var f,d,y,j=a.emit,T=s(),N=Y().focusReason;y=e=>{r.trapped&&!A.paused&&j("release-requested",e)},i((()=>{0===o.length&&document.addEventListener("keydown",b),u&&o.push(y)})),c((()=>{0===(o=o.filter((e=>e!==y))).length&&u&&document.removeEventListener("keydown",b)}));var A={paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}},K=e=>{if((r.loop||r.trapped)&&!A.paused){var n=e.key,o=e.altKey,a=e.ctrlKey,i=e.metaKey,u=e.currentTarget,c=e.shiftKey,s=r.loop,f=n===l.tab&&!o&&!a&&!i,d=document.activeElement;if(f&&d){var v=u,p=(e=>{var t=F(e);return[I(t,e),I(t.reverse(),e)]})(v),h=t(p,2),y=h[0],m=h[1];if(y&&m)if(c||d!==m){if(c&&[y,v].includes(d)){var g=q({focusReason:N.value});j("focusout-prevented",g),g.defaultPrevented||(e.preventDefault(),s&&R(m,!0))}}else{var w=q({focusReason:N.value});j("focusout-prevented",w),w.defaultPrevented||(e.preventDefault(),s&&R(y,!0))}else if(d===v){var b=q({focusReason:N.value});j("focusout-prevented",b),b.defaultPrevented||e.preventDefault()}}}};v(P,{focusTrapRef:T,onKeydown:K}),p((()=>r.focusTrapEl),(e=>{e&&(T.value=e)}),{immediate:!0}),p([T],((e,r)=>{var n=t(e,1)[0],o=t(r,1)[0];n&&(n.addEventListener("keydown",K),n.addEventListener("focusin",U),n.addEventListener("focusout",B)),o&&(o.removeEventListener("keydown",K),o.removeEventListener("focusin",U),o.removeEventListener("focusout",B))}));var G=e=>{j(x,e)},M=e=>j(S,e),U=e=>{var t=h(T);if(t){var n=e.target,o=e.relatedTarget,a=n&&t.contains(n);if(!r.trapped)o&&t.contains(o)||(f=o);a&&j("focusin",e),A.paused||r.trapped&&(a?d=n:R(d,!0))}},B=e=>{var t=h(T);if(!A.paused&&t)if(r.trapped){var n=e.relatedTarget;w(n)||t.contains(n)||setTimeout((()=>{if(!A.paused&&r.trapped){var e=q({focusReason:N.value});j("focusout-prevented",e),e.defaultPrevented||R(d,!0)}}),0)}else{var o=e.target;o&&t.contains(o)||j("focusout",e)}};function H(){var t,n,o;return e().async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e().awrap(m());case 2:(t=h(T))&&(D.push(A),n=t.contains(document.activeElement)?f:document.activeElement,f=n,t.contains(n)||(o=new Event(E,O),t.addEventListener(E,G),t.dispatchEvent(o),o.defaultPrevented||m((()=>{var e=r.focusStartEl;g(e)||(R(e),document.activeElement!==e&&(e="first")),"first"===e&&C(F(t),!0),document.activeElement!==n&&"container"!==e||R(t)}))));case 4:case"end":return a.stop()}}),null,null,null,Promise)}function W(){var e=h(T);if(e){e.removeEventListener(E,G);var t=new CustomEvent(L,n(n({},O),{},{detail:{focusReason:N.value}}));e.addEventListener(L,M),e.dispatchEvent(t),t.defaultPrevented||"keyboard"!=N.value&&_.value>k.value&&!e.contains(document.activeElement)||R(null!=f?f:document.body),e.removeEventListener(L,M),D.remove(A)}}return i((()=>{r.trapped&&H(),p((()=>r.trapped),(e=>{e?H():W()}))})),c((()=>{r.trapped&&W()})),{onKeydown:K}}});r("E",f(B,[["render",function(e,t,r,n,o,a){return y(e.$slots,"default",{handleKeydown:e.onKeydown})}],["__file","focus-trap.vue"]]))}}}))}();