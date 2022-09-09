System.register(["./index-legacy.952e5319.js","./route-block-legacy.416ddcc8.js"],(function(e){"use strict";var t,n,r,o,i,s,a,u,c,f;return{setters:[function(e){t=e.d,n=e.bg,r=e.bh,o=e.e,i=e.f,s=e.h,a=e.t,u=e.i,c=e.F},function(e){f=e.b}],execute:function(){var l,d={exports:{}},p=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}},h=p,m=Object.prototype.toString,v=(l=Object.create(null),function(e){var t=m.call(e);return l[t]||(l[t]=t.slice(8,-1).toLowerCase())});function y(e){return e=e.toLowerCase(),function(t){return v(t)===e}}function g(e){return Array.isArray(e)}function E(e){return void 0===e}var w=y("ArrayBuffer");function b(e){return null!==e&&"object"==typeof e}function O(e){if("object"!==v(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}var R=y("Date"),S=y("File"),A=y("Blob"),T=y("FileList");function j(e){return"[object Function]"===m.call(e)}var x=y("URLSearchParams");function N(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),g(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}var _,C=(_="undefined"!=typeof Uint8Array&&Object.getPrototypeOf(Uint8Array),function(e){return _&&e instanceof _}),P={isArray:g,isArrayBuffer:w,isBuffer:function(e){return null!==e&&!E(e)&&null!==e.constructor&&!E(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){var t="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||m.call(e)===t||j(e.toString)&&e.toString()===t)},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&w(e.buffer)},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:b,isPlainObject:O,isUndefined:E,isDate:R,isFile:S,isBlob:A,isFunction:j,isStream:function(e){return b(e)&&j(e.pipe)},isURLSearchParams:x,isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:N,merge:function e(){var t={};function n(n,r){O(t[r])&&O(n)?t[r]=e(t[r],n):O(n)?t[r]=e({},n):g(n)?t[r]=n.slice():t[r]=n}for(var r=0,o=arguments.length;r<o;r++)N(arguments[r],n);return t},extend:function(e,t,n){return N(t,(function(t,r){e[r]=n&&"function"==typeof t?h(t,n):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e},inherits:function(e,t,n,r){e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,n&&Object.assign(e.prototype,n)},toFlatObject:function(e,t,n){var r,o,i,s={};t=t||{};do{for(o=(r=Object.getOwnPropertyNames(e)).length;o-- >0;)s[i=r[o]]||(t[i]=e[i],s[i]=!0);e=Object.getPrototypeOf(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:v,kindOfTest:y,endsWith:function(e,t,n){e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;var r=e.indexOf(t,n);return-1!==r&&r===n},toArray:function(e){if(!e)return null;var t=e.length;if(E(t))return null;for(var n=new Array(t);t-- >0;)n[t]=e[t];return n},isTypedArray:C,isFileList:T},U=P;function B(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var D=function(e,t,n){if(!t)return e;var r;if(n)r=n(t);else if(U.isURLSearchParams(t))r=t.toString();else{var o=[];U.forEach(t,(function(e,t){null!=e&&(U.isArray(e)?t+="[]":e=[e],U.forEach(e,(function(e){U.isDate(e)?e=e.toISOString():U.isObject(e)&&(e=JSON.stringify(e)),o.push(B(t)+"="+B(e))})))})),r=o.join("&")}if(r){var i=e.indexOf("#");-1!==i&&(e=e.slice(0,i)),e+=(-1===e.indexOf("?")?"?":"&")+r}return e},L=P;function k(){this.handlers=[]}k.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},k.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},k.prototype.forEach=function(e){L.forEach(this.handlers,(function(t){null!==t&&e(t)}))};var F=k,q=P,I=P;function J(e,t,n,r,o){Error.call(this),this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}I.inherits(J,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var M=J.prototype,H={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach((function(e){H[e]={value:e}})),Object.defineProperties(J,H),Object.defineProperty(M,"isAxiosError",{value:!0}),J.from=function(e,t,n,r,o,i){var s=Object.create(M);return I.toFlatObject(e,s,(function(e){return e!==Error.prototype})),J.call(s,e.message,t,n,r,o),s.name=e.name,i&&Object.assign(s,i),s};var W=J,z={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},V=P,X=function(e,t){t=t||new FormData;var n=[];function r(e){return null===e?"":V.isDate(e)?e.toISOString():V.isArrayBuffer(e)||V.isTypedArray(e)?"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}return function e(o,i){if(V.isPlainObject(o)||V.isArray(o)){if(-1!==n.indexOf(o))throw Error("Circular reference detected in "+i);n.push(o),V.forEach(o,(function(n,o){if(!V.isUndefined(n)){var s,a=i?i+"."+o:o;if(n&&!i&&"object"==typeof n)if(V.endsWith(o,"{}"))n=JSON.stringify(n);else if(V.endsWith(o,"[]")&&(s=V.toArray(n)))return void s.forEach((function(e){!V.isUndefined(e)&&t.append(a,r(e))}));e(n,a)}})),n.pop()}else t.append(i,r(o))}(e),t},K=W,$=P,Q=$.isStandardBrowserEnv()?{write:function(e,t,n,r,o,i){var s=[];s.push(e+"="+encodeURIComponent(t)),$.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),$.isString(r)&&s.push("path="+r),$.isString(o)&&s.push("domain="+o),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}},G=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)},Y=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e},Z=function(e,t){return e&&!G(t)?Y(e,t):t},ee=P,te=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],ne=P,re=ne.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function r(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=r(window.location.href),function(t){var n=ne.isString(t)?r(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0},oe=W;function ie(e){oe.call(this,null==e?"canceled":e,oe.ERR_CANCELED),this.name="CanceledError"}P.inherits(ie,oe,{__CANCEL__:!0});var se=ie,ae=P,ue=function(e,t,n){var r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new K("Request failed with status code "+n.status,[K.ERR_BAD_REQUEST,K.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)},ce=Q,fe=D,le=Z,de=function(e){var t,n,r,o={};return e?(ee.forEach(e.split("\n"),(function(e){if(r=e.indexOf(":"),t=ee.trim(e.substr(0,r)).toLowerCase(),n=ee.trim(e.substr(r+1)),t){if(o[t]&&te.indexOf(t)>=0)return;o[t]="set-cookie"===t?(o[t]?o[t]:[]).concat([n]):o[t]?o[t]+", "+n:n}})),o):o},pe=re,he=z,me=W,ve=se,ye=function(e){var t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""},ge=function(e){return new Promise((function(t,n){var r,o=e.data,i=e.headers,s=e.responseType;function a(){e.cancelToken&&e.cancelToken.unsubscribe(r),e.signal&&e.signal.removeEventListener("abort",r)}ae.isFormData(o)&&ae.isStandardBrowserEnv()&&delete i["Content-Type"];var u=new XMLHttpRequest;if(e.auth){var c=e.auth.username||"",f=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.Authorization="Basic "+btoa(c+":"+f)}var l=le(e.baseURL,e.url);function d(){if(u){var r="getAllResponseHeaders"in u?de(u.getAllResponseHeaders()):null,o={data:s&&"text"!==s&&"json"!==s?u.response:u.responseText,status:u.status,statusText:u.statusText,headers:r,config:e,request:u};ue((function(e){t(e),a()}),(function(e){n(e),a()}),o),u=null}}if(u.open(e.method.toUpperCase(),fe(l,e.params,e.paramsSerializer),!0),u.timeout=e.timeout,"onloadend"in u?u.onloadend=d:u.onreadystatechange=function(){u&&4===u.readyState&&(0!==u.status||u.responseURL&&0===u.responseURL.indexOf("file:"))&&setTimeout(d)},u.onabort=function(){u&&(n(new me("Request aborted",me.ECONNABORTED,e,u)),u=null)},u.onerror=function(){n(new me("Network Error",me.ERR_NETWORK,e,u,u)),u=null},u.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",r=e.transitional||he;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new me(t,r.clarifyTimeoutError?me.ETIMEDOUT:me.ECONNABORTED,e,u)),u=null},ae.isStandardBrowserEnv()){var p=(e.withCredentials||pe(l))&&e.xsrfCookieName?ce.read(e.xsrfCookieName):void 0;p&&(i[e.xsrfHeaderName]=p)}"setRequestHeader"in u&&ae.forEach(i,(function(e,t){void 0===o&&"content-type"===t.toLowerCase()?delete i[t]:u.setRequestHeader(t,e)})),ae.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),s&&"json"!==s&&(u.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&u.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&u.upload&&u.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(r=function(e){u&&(n(!e||e&&e.type?new ve:e),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(r),e.signal&&(e.signal.aborted?r():e.signal.addEventListener("abort",r))),o||(o=null);var h=ye(l);h&&-1===["http","https","file"].indexOf(h)?n(new me("Unsupported protocol "+h+":",me.ERR_BAD_REQUEST,e)):u.send(o)}))},Ee=P,we=function(e,t){q.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))},be=W,Oe=X,Re={"Content-Type":"application/x-www-form-urlencoded"};function Se(e,t){!Ee.isUndefined(e)&&Ee.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var Ae,Te={transitional:z,adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(Ae=ge),Ae),transformRequest:[function(e,t){if(we(t,"Accept"),we(t,"Content-Type"),Ee.isFormData(e)||Ee.isArrayBuffer(e)||Ee.isBuffer(e)||Ee.isStream(e)||Ee.isFile(e)||Ee.isBlob(e))return e;if(Ee.isArrayBufferView(e))return e.buffer;if(Ee.isURLSearchParams(e))return Se(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var n,r=Ee.isObject(e),o=t&&t["Content-Type"];if((n=Ee.isFileList(e))||r&&"multipart/form-data"===o){var i=this.env&&this.env.FormData;return Oe(n?{"files[]":e}:e,i&&new i)}return r||"application/json"===o?(Se(t,"application/json"),function(e,t,n){if(Ee.isString(e))try{return(t||JSON.parse)(e),Ee.trim(e)}catch(r){if("SyntaxError"!==r.name)throw r}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||Te.transitional,n=t&&t.silentJSONParsing,r=t&&t.forcedJSONParsing,o=!n&&"json"===this.responseType;if(o||r&&Ee.isString(e)&&e.length)try{return JSON.parse(e)}catch(i){if(o){if("SyntaxError"===i.name)throw be.from(i,be.ERR_BAD_RESPONSE,this,null,this.response);throw i}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:null},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};Ee.forEach(["delete","get","head"],(function(e){Te.headers[e]={}})),Ee.forEach(["post","put","patch"],(function(e){Te.headers[e]=Ee.merge(Re)}));var je=Te,xe=P,Ne=je,_e=function(e){return!(!e||!e.__CANCEL__)},Ce=P,Pe=function(e,t,n){var r=this||Ne;return xe.forEach(n,(function(n){e=n.call(r,e,t)})),e},Ue=_e,Be=je,De=se;function Le(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new De}var ke=P,Fe=function(e,t){t=t||{};var n={};function r(e,t){return ke.isPlainObject(e)&&ke.isPlainObject(t)?ke.merge(e,t):ke.isPlainObject(t)?ke.merge({},t):ke.isArray(t)?t.slice():t}function o(n){return ke.isUndefined(t[n])?ke.isUndefined(e[n])?void 0:r(void 0,e[n]):r(e[n],t[n])}function i(e){if(!ke.isUndefined(t[e]))return r(void 0,t[e])}function s(n){return ke.isUndefined(t[n])?ke.isUndefined(e[n])?void 0:r(void 0,e[n]):r(void 0,t[n])}function a(n){return n in t?r(e[n],t[n]):n in e?r(void 0,e[n]):void 0}var u={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a};return ke.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=u[e]||o,r=t(e);ke.isUndefined(r)&&t!==a||(n[e]=r)})),n},qe="0.27.2",Ie=qe,Je=W,Me={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){Me[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));var He={};Me.transitional=function(e,t,n){function r(e,t){return"[Axios v"+Ie+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return function(n,o,i){if(!1===e)throw new Je(r(o," has been removed"+(t?" in "+t:"")),Je.ERR_DEPRECATED);return t&&!He[o]&&(He[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,o,i)}};var We={assertOptions:function(e,t,n){if("object"!=typeof e)throw new Je("options must be an object",Je.ERR_BAD_OPTION_VALUE);for(var r=Object.keys(e),o=r.length;o-- >0;){var i=r[o],s=t[i];if(s){var a=e[i],u=void 0===a||s(a,i,e);if(!0!==u)throw new Je("option "+i+" must be "+u,Je.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new Je("Unknown option "+i,Je.ERR_BAD_OPTION)}},validators:Me},ze=P,Ve=D,Xe=F,Ke=function(e){return Le(e),e.headers=e.headers||{},e.data=Pe.call(e,e.data,e.headers,e.transformRequest),e.headers=Ce.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),Ce.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||Be.adapter)(e).then((function(t){return Le(e),t.data=Pe.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return Ue(t)||(Le(e),t&&t.response&&(t.response.data=Pe.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))},$e=Fe,Qe=Z,Ge=We,Ye=Ge.validators;function Ze(e){this.defaults=e,this.interceptors={request:new Xe,response:new Xe}}Ze.prototype.request=function(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},(t=$e(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var n=t.transitional;void 0!==n&&Ge.assertOptions(n,{silentJSONParsing:Ye.transitional(Ye.boolean),forcedJSONParsing:Ye.transitional(Ye.boolean),clarifyTimeoutError:Ye.transitional(Ye.boolean)},!1);var r=[],o=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(o=o&&e.synchronous,r.unshift(e.fulfilled,e.rejected))}));var i,s=[];if(this.interceptors.response.forEach((function(e){s.push(e.fulfilled,e.rejected)})),!o){var a=[Ke,void 0];for(Array.prototype.unshift.apply(a,r),a=a.concat(s),i=Promise.resolve(t);a.length;)i=i.then(a.shift(),a.shift());return i}for(var u=t;r.length;){var c=r.shift(),f=r.shift();try{u=c(u)}catch(l){f(l);break}}try{i=Ke(u)}catch(l){return Promise.reject(l)}for(;s.length;)i=i.then(s.shift(),s.shift());return i},Ze.prototype.getUri=function(e){e=$e(this.defaults,e);var t=Qe(e.baseURL,e.url);return Ve(t,e.params,e.paramsSerializer)},ze.forEach(["delete","get","head","options"],(function(e){Ze.prototype[e]=function(t,n){return this.request($e(n||{},{method:e,url:t,data:(n||{}).data}))}})),ze.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,o){return this.request($e(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}Ze.prototype[e]=t(),Ze.prototype[e+"Form"]=t(!0)}));var et=Ze,tt=se;function nt(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;this.promise.then((function(e){if(n._listeners){var t,r=n._listeners.length;for(t=0;t<r;t++)n._listeners[t](e);n._listeners=null}})),this.promise.then=function(e){var t,r=new Promise((function(e){n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e){n.reason||(n.reason=new tt(e),t(n.reason))}))}nt.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},nt.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},nt.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},nt.source=function(){var e;return{token:new nt((function(t){e=t})),cancel:e}};var rt=nt,ot=P,it=P,st=p,at=et,ut=Fe,ct=function e(t){var n=new at(t),r=st(at.prototype.request,n);return it.extend(r,at.prototype,n),it.extend(r,n),r.create=function(n){return e(ut(t,n))},r}(je);ct.Axios=at,ct.CanceledError=se,ct.CancelToken=rt,ct.isCancel=_e,ct.VERSION=qe,ct.toFormData=X,ct.AxiosError=W,ct.Cancel=ct.CanceledError,ct.all=function(e){return Promise.all(e)},ct.spread=function(e){return function(t){return e.apply(null,t)}},ct.isAxiosError=function(e){return ot.isObject(e)&&!0===e.isAxiosError},d.exports=ct,d.exports.default=ct;const ft="undefined"==typeof window;var lt;const dt=new Set,pt=new Set,ht=new Set,mt=e=>{e.forEach((e=>{e()}))};!ft&&null!==(lt=window)&&void 0!==lt&&lt.addEventListener&&(window.addEventListener("visibilitychange",(()=>{var e;(ft||null==(null===(e=window.document)||void 0===e?void 0:e.visibilityState)||"visible"===window.document.visibilityState)&&mt(pt)}),!1),window.addEventListener("focus",(()=>mt(dt)),!1),window.addEventListener("online",(()=>mt(ht)),!1));const vt=s("div",{class:"bg-red-500 text-white"},"我是首页sda1",-1),yt=e("default",t({__name:"test",setup(e){const t=n(),f=t.x,l=t.y,d=r();return(e,t)=>(o(),i(c,null,[vt,s("div",null,"x坐标 "+a(u(f)),1),s("div",null,"y坐标 "+a(u(l)),1),s("div",null,"fps "+a(u(d)),1)],64))}}));"function"==typeof f&&f(yt)}}}));