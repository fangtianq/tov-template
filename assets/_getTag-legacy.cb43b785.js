System.register(["./index-legacy.7a69c0b7.js","./_Uint8Array-legacy.5a4c13c0.js"],(function(e,r){"use strict";var t,n,c,o,u,a,i,s,b,f;return{setters:[e=>{t=e.bY,n=e.bI,c=e.bN,o=e.bZ,u=e.bT,a=e.bX},e=>{i=e.o,s=e.b,b=e.c,f=e.d}],execute:function(){e({c:y,d:h,g:function(e){return h(e,v,g)},k:v,s:p});var r=t(n,"WeakMap"),j=i(Object.keys,Object),l=Object.prototype.hasOwnProperty;function v(e){return b(e)?f(e):function(e){if(!s(e))return j(e);var r=[];for(var t in Object(e))l.call(e,t)&&"constructor"!=t&&r.push(t);return r}(e)}function y(e,r){for(var t=-1,n=r.length,c=e.length;++t<n;)e[c+t]=r[t];return e}function p(){return[]}var w=Object.prototype.propertyIsEnumerable,O=Object.getOwnPropertySymbols,g=e("b",O?function(e){return null==e?[]:(e=Object(e),function(e,r){for(var t=-1,n=null==e?0:e.length,c=0,o=[];++t<n;){var u=e[t];r(u,t,e)&&(o[c++]=u)}return o}(O(e),(function(r){return w.call(e,r)})))}:p);function h(e,r,t){var n=r(e);return c(e)?n:y(n,t(e))}var m=t(n,"DataView"),d=t(n,"Promise"),k=t(n,"Set"),P="[object Map]",S="[object Promise]",M="[object Set]",x="[object WeakMap]",A="[object DataView]",D=o(m),I=o(a),V=o(d),W=o(k),B=o(r),E=u;(m&&E(new m(new ArrayBuffer(1)))!=A||a&&E(new a)!=P||d&&E(d.resolve())!=S||k&&E(new k)!=M||r&&E(new r)!=x)&&(E=function(e){var r=u(e),t="[object Object]"==r?e.constructor:void 0,n=t?o(t):"";if(n)switch(n){case D:return A;case I:return P;case V:return S;case W:return M;case B:return x}return r}),e("a",E)}}}));