!function(){function e(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function t(t){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?e(Object(o),!0).forEach((function(e){r(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):e(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function r(e,t,r){var n;return(t="symbol"==typeof(n=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?n:String(n))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}System.register(["./index-legacy.7a69c0b7.js","./index-legacy.641d2b89.js"],(function(e,r){"use strict";var n,o,i,a,u,c;return{setters:[e=>{n=e.a3,o=e.a6,i=e.c9,a=e.v,u=e.ca},e=>{c=e.a}],execute:function(){var r=()=>{var e=o(u());return{headers:{Authorization:e.SpringBootSecurityAuthorization.value.token||e.SpringBootShiroAuthorization.value.token}}},s={jsonToQueryString:e=>Object.keys(e).map((function(t){return t+"="+e[t]})).join("&"),getQueryString(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),r=window.location.search.substr(1).match(t);return null!=r?decodeURI(r[2].toUpperCase()):null}};e("r",(function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"301284",u=t({},e.header),s=e.method||"get",l=o(i()).ajaxTimes,p=a()();u.Authorization=p.getSessionToken,l.value++;var g=n({message:"Loading",type:"success"}),v=`http://rap2api.taobao.org/app/mock/${r}/${s}`;return new Promise(((r,n)=>{c(t(t({},e),{},{header:u,url:v+e.url})).then((e=>{r(e.data)})).catch((e=>{n(e)})).then((()=>{l.value--,0!==l.value&&0===l.value||g.close()}))}))})),e("a",{get:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return c.get(`/api${e}?${s.jsonToQueryString(t)}`,r()).catch((e=>{n.error(e.response.data)}))},post:function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return c.post(`/api${e}${0===Object.keys(i).length?"":"?"+s.jsonToQueryString(i)}`,t({},o),r()).catch((e=>{n.error(e.response.data)}))}})}}}))}();
