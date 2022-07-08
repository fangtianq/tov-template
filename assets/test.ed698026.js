import{d as Ie,m as qe,n as ke,o as Me,e as He,f as B,t as H,g as J,F as Je}from"./index.20418ff2.js";const Ve=r=>r==null,we=typeof window=="undefined",We=()=>{var r;return we||Ve((r=window.document)===null||r===void 0?void 0:r.visibilityState)?!0:window.document.visibilityState==="visible"};var V;const ze=new Set,Xe=new Set,Ke=new Set,W=r=>{r.forEach(e=>{e()})};!we&&(V=window)!==null&&V!==void 0&&V.addEventListener&&(window.addEventListener("visibilitychange",()=>{We()&&W(Xe)},!1),window.addEventListener("focus",()=>W(ze),!1),window.addEventListener("online",()=>W(Ke),!1));var Re={exports:{}},be=function(e,t){return function(){for(var n=new Array(arguments.length),s=0;s<n.length;s++)n[s]=arguments[s];return e.apply(t,n)}},Qe=be,Z=Object.prototype.toString,ee=function(r){return function(e){var t=Z.call(e);return r[t]||(r[t]=t.slice(8,-1).toLowerCase())}}(Object.create(null));function S(r){return r=r.toLowerCase(),function(t){return ee(t)===r}}function re(r){return Array.isArray(r)}function g(r){return typeof r=="undefined"}function Ye(r){return r!==null&&!g(r)&&r.constructor!==null&&!g(r.constructor)&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r)}var Oe=S("ArrayBuffer");function Ge(r){var e;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?e=ArrayBuffer.isView(r):e=r&&r.buffer&&Oe(r.buffer),e}function Ze(r){return typeof r=="string"}function er(r){return typeof r=="number"}function Se(r){return r!==null&&typeof r=="object"}function L(r){if(ee(r)!=="object")return!1;var e=Object.getPrototypeOf(r);return e===null||e===Object.prototype}var rr=S("Date"),tr=S("File"),nr=S("Blob"),ir=S("FileList");function te(r){return Z.call(r)==="[object Function]"}function sr(r){return Se(r)&&te(r.pipe)}function ar(r){var e="[object FormData]";return r&&(typeof FormData=="function"&&r instanceof FormData||Z.call(r)===e||te(r.toString)&&r.toString()===e)}var or=S("URLSearchParams");function ur(r){return r.trim?r.trim():r.replace(/^\s+|\s+$/g,"")}function fr(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function ne(r,e){if(!(r===null||typeof r=="undefined"))if(typeof r!="object"&&(r=[r]),re(r))for(var t=0,i=r.length;t<i;t++)e.call(null,r[t],t,r);else for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.call(null,r[n],n,r)}function Y(){var r={};function e(n,s){L(r[s])&&L(n)?r[s]=Y(r[s],n):L(n)?r[s]=Y({},n):re(n)?r[s]=n.slice():r[s]=n}for(var t=0,i=arguments.length;t<i;t++)ne(arguments[t],e);return r}function lr(r,e,t){return ne(e,function(n,s){t&&typeof n=="function"?r[s]=Qe(n,t):r[s]=n}),r}function cr(r){return r.charCodeAt(0)===65279&&(r=r.slice(1)),r}function dr(r,e,t,i){r.prototype=Object.create(e.prototype,i),r.prototype.constructor=r,t&&Object.assign(r.prototype,t)}function hr(r,e,t){var i,n,s,a={};e=e||{};do{for(i=Object.getOwnPropertyNames(r),n=i.length;n-- >0;)s=i[n],a[s]||(e[s]=r[s],a[s]=!0);r=Object.getPrototypeOf(r)}while(r&&(!t||t(r,e))&&r!==Object.prototype);return e}function pr(r,e,t){r=String(r),(t===void 0||t>r.length)&&(t=r.length),t-=e.length;var i=r.indexOf(e,t);return i!==-1&&i===t}function vr(r){if(!r)return null;var e=r.length;if(g(e))return null;for(var t=new Array(e);e-- >0;)t[e]=r[e];return t}var mr=function(r){return function(e){return r&&e instanceof r}}(typeof Uint8Array!="undefined"&&Object.getPrototypeOf(Uint8Array)),h={isArray:re,isArrayBuffer:Oe,isBuffer:Ye,isFormData:ar,isArrayBufferView:Ge,isString:Ze,isNumber:er,isObject:Se,isPlainObject:L,isUndefined:g,isDate:rr,isFile:tr,isBlob:nr,isFunction:te,isStream:sr,isURLSearchParams:or,isStandardBrowserEnv:fr,forEach:ne,merge:Y,extend:lr,trim:ur,stripBOM:cr,inherits:dr,toFlatObject:hr,kindOf:ee,kindOfTest:S,endsWith:pr,toArray:vr,isTypedArray:mr,isFileList:ir},C=h;function ue(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var Ae=function(e,t,i){if(!t)return e;var n;if(i)n=i(t);else if(C.isURLSearchParams(t))n=t.toString();else{var s=[];C.forEach(t,function(f,d){f===null||typeof f=="undefined"||(C.isArray(f)?d=d+"[]":f=[f],C.forEach(f,function(l){C.isDate(l)?l=l.toISOString():C.isObject(l)&&(l=JSON.stringify(l)),s.push(ue(d)+"="+ue(l))}))}),n=s.join("&")}if(n){var a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+n}return e},Er=h;function F(){this.handlers=[]}F.prototype.use=function(e,t,i){return this.handlers.push({fulfilled:e,rejected:t,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1};F.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};F.prototype.forEach=function(e){Er.forEach(this.handlers,function(i){i!==null&&e(i)})};var yr=F,wr=h,Rr=function(e,t){wr.forEach(e,function(n,s){s!==t&&s.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[s])})},Ce=h;function x(r,e,t,i,n){Error.call(this),this.message=r,this.name="AxiosError",e&&(this.code=e),t&&(this.config=t),i&&(this.request=i),n&&(this.response=n)}Ce.inherits(x,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var _e=x.prototype,xe={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(r){xe[r]={value:r}});Object.defineProperties(x,xe);Object.defineProperty(_e,"isAxiosError",{value:!0});x.from=function(r,e,t,i,n,s){var a=Object.create(_e);return Ce.toFlatObject(r,a,function(f){return f!==Error.prototype}),x.call(a,r.message,e,t,i,n),a.name=r.name,s&&Object.assign(a,s),a};var P=x,Ne={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},w=h;function br(r,e){e=e||new FormData;var t=[];function i(s){return s===null?"":w.isDate(s)?s.toISOString():w.isArrayBuffer(s)||w.isTypedArray(s)?typeof Blob=="function"?new Blob([s]):Buffer.from(s):s}function n(s,a){if(w.isPlainObject(s)||w.isArray(s)){if(t.indexOf(s)!==-1)throw Error("Circular reference detected in "+a);t.push(s),w.forEach(s,function(f,d){if(!w.isUndefined(f)){var o=a?a+"."+d:d,l;if(f&&!a&&typeof f=="object"){if(w.endsWith(d,"{}"))f=JSON.stringify(f);else if(w.endsWith(d,"[]")&&(l=w.toArray(f))){l.forEach(function(m){!w.isUndefined(m)&&e.append(o,i(m))});return}}n(f,o)}}),t.pop()}else e.append(a,i(s))}return n(r),e}var Te=br,z=P,Or=function(e,t,i){var n=i.config.validateStatus;!i.status||!n||n(i.status)?e(i):t(new z("Request failed with status code "+i.status,[z.ERR_BAD_REQUEST,z.ERR_BAD_RESPONSE][Math.floor(i.status/100)-4],i.config,i.request,i))},$=h,Sr=$.isStandardBrowserEnv()?function(){return{write:function(t,i,n,s,a,u){var f=[];f.push(t+"="+encodeURIComponent(i)),$.isNumber(n)&&f.push("expires="+new Date(n).toGMTString()),$.isString(s)&&f.push("path="+s),$.isString(a)&&f.push("domain="+a),u===!0&&f.push("secure"),document.cookie=f.join("; ")},read:function(t){var i=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return i?decodeURIComponent(i[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),Ar=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)},Cr=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e},_r=Ar,xr=Cr,Pe=function(e,t){return e&&!_r(t)?xr(e,t):t},X=h,Nr=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],Tr=function(e){var t={},i,n,s;return e&&X.forEach(e.split(`
`),function(u){if(s=u.indexOf(":"),i=X.trim(u.substr(0,s)).toLowerCase(),n=X.trim(u.substr(s+1)),i){if(t[i]&&Nr.indexOf(i)>=0)return;i==="set-cookie"?t[i]=(t[i]?t[i]:[]).concat([n]):t[i]=t[i]?t[i]+", "+n:n}}),t},fe=h,Pr=fe.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a"),i;function n(s){var a=s;return e&&(t.setAttribute("href",a),a=t.href),t.setAttribute("href",a),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:t.pathname.charAt(0)==="/"?t.pathname:"/"+t.pathname}}return i=n(window.location.href),function(a){var u=fe.isString(a)?n(a):a;return u.protocol===i.protocol&&u.host===i.host}}():function(){return function(){return!0}}(),G=P,Dr=h;function De(r){G.call(this,r==null?"canceled":r,G.ERR_CANCELED),this.name="CanceledError"}Dr.inherits(De,G,{__CANCEL__:!0});var j=De,$r=function(e){var t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""},D=h,Br=Or,Lr=Sr,Ur=Ae,gr=Pe,Fr=Tr,jr=Pr,Ir=Ne,R=P,qr=j,kr=$r,le=function(e){return new Promise(function(i,n){var s=e.data,a=e.headers,u=e.responseType,f;function d(){e.cancelToken&&e.cancelToken.unsubscribe(f),e.signal&&e.signal.removeEventListener("abort",f)}D.isFormData(s)&&D.isStandardBrowserEnv()&&delete a["Content-Type"];var o=new XMLHttpRequest;if(e.auth){var l=e.auth.username||"",m=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";a.Authorization="Basic "+btoa(l+":"+m)}var p=gr(e.baseURL,e.url);o.open(e.method.toUpperCase(),Ur(p,e.params,e.paramsSerializer),!0),o.timeout=e.timeout;function ae(){if(!!o){var y="getAllResponseHeaders"in o?Fr(o.getAllResponseHeaders()):null,A=!u||u==="text"||u==="json"?o.responseText:o.response,O={data:A,status:o.status,statusText:o.statusText,headers:y,config:e,request:o};Br(function(M){i(M),d()},function(M){n(M),d()},O),o=null}}if("onloadend"in o?o.onloadend=ae:o.onreadystatechange=function(){!o||o.readyState!==4||o.status===0&&!(o.responseURL&&o.responseURL.indexOf("file:")===0)||setTimeout(ae)},o.onabort=function(){!o||(n(new R("Request aborted",R.ECONNABORTED,e,o)),o=null)},o.onerror=function(){n(new R("Network Error",R.ERR_NETWORK,e,o,o)),o=null},o.ontimeout=function(){var A=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",O=e.transitional||Ir;e.timeoutErrorMessage&&(A=e.timeoutErrorMessage),n(new R(A,O.clarifyTimeoutError?R.ETIMEDOUT:R.ECONNABORTED,e,o)),o=null},D.isStandardBrowserEnv()){var oe=(e.withCredentials||jr(p))&&e.xsrfCookieName?Lr.read(e.xsrfCookieName):void 0;oe&&(a[e.xsrfHeaderName]=oe)}"setRequestHeader"in o&&D.forEach(a,function(A,O){typeof s=="undefined"&&O.toLowerCase()==="content-type"?delete a[O]:o.setRequestHeader(O,A)}),D.isUndefined(e.withCredentials)||(o.withCredentials=!!e.withCredentials),u&&u!=="json"&&(o.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&o.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&o.upload&&o.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(f=function(y){!o||(n(!y||y&&y.type?new qr:y),o.abort(),o=null)},e.cancelToken&&e.cancelToken.subscribe(f),e.signal&&(e.signal.aborted?f():e.signal.addEventListener("abort",f))),s||(s=null);var k=kr(p);if(k&&["http","https","file"].indexOf(k)===-1){n(new R("Unsupported protocol "+k+":",R.ERR_BAD_REQUEST,e));return}o.send(s)})},Mr=null,c=h,ce=Rr,de=P,Hr=Ne,Jr=Te,Vr={"Content-Type":"application/x-www-form-urlencoded"};function he(r,e){!c.isUndefined(r)&&c.isUndefined(r["Content-Type"])&&(r["Content-Type"]=e)}function Wr(){var r;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(r=le),r}function zr(r,e,t){if(c.isString(r))try{return(e||JSON.parse)(r),c.trim(r)}catch(i){if(i.name!=="SyntaxError")throw i}return(t||JSON.stringify)(r)}var I={transitional:Hr,adapter:Wr(),transformRequest:[function(e,t){if(ce(t,"Accept"),ce(t,"Content-Type"),c.isFormData(e)||c.isArrayBuffer(e)||c.isBuffer(e)||c.isStream(e)||c.isFile(e)||c.isBlob(e))return e;if(c.isArrayBufferView(e))return e.buffer;if(c.isURLSearchParams(e))return he(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var i=c.isObject(e),n=t&&t["Content-Type"],s;if((s=c.isFileList(e))||i&&n==="multipart/form-data"){var a=this.env&&this.env.FormData;return Jr(s?{"files[]":e}:e,a&&new a)}else if(i||n==="application/json")return he(t,"application/json"),zr(e);return e}],transformResponse:[function(e){var t=this.transitional||I.transitional,i=t&&t.silentJSONParsing,n=t&&t.forcedJSONParsing,s=!i&&this.responseType==="json";if(s||n&&c.isString(e)&&e.length)try{return JSON.parse(e)}catch(a){if(s)throw a.name==="SyntaxError"?de.from(a,de.ERR_BAD_RESPONSE,this,null,this.response):a}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Mr},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};c.forEach(["delete","get","head"],function(e){I.headers[e]={}});c.forEach(["post","put","patch"],function(e){I.headers[e]=c.merge(Vr)});var ie=I,Xr=h,Kr=ie,Qr=function(e,t,i){var n=this||Kr;return Xr.forEach(i,function(a){e=a.call(n,e,t)}),e},$e=function(e){return!!(e&&e.__CANCEL__)},pe=h,K=Qr,Yr=$e,Gr=ie,Zr=j;function Q(r){if(r.cancelToken&&r.cancelToken.throwIfRequested(),r.signal&&r.signal.aborted)throw new Zr}var et=function(e){Q(e),e.headers=e.headers||{},e.data=K.call(e,e.data,e.headers,e.transformRequest),e.headers=pe.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),pe.forEach(["delete","get","head","post","put","patch","common"],function(n){delete e.headers[n]});var t=e.adapter||Gr.adapter;return t(e).then(function(n){return Q(e),n.data=K.call(e,n.data,n.headers,e.transformResponse),n},function(n){return Yr(n)||(Q(e),n&&n.response&&(n.response.data=K.call(e,n.response.data,n.response.headers,e.transformResponse))),Promise.reject(n)})},E=h,Be=function(e,t){t=t||{};var i={};function n(o,l){return E.isPlainObject(o)&&E.isPlainObject(l)?E.merge(o,l):E.isPlainObject(l)?E.merge({},l):E.isArray(l)?l.slice():l}function s(o){if(E.isUndefined(t[o])){if(!E.isUndefined(e[o]))return n(void 0,e[o])}else return n(e[o],t[o])}function a(o){if(!E.isUndefined(t[o]))return n(void 0,t[o])}function u(o){if(E.isUndefined(t[o])){if(!E.isUndefined(e[o]))return n(void 0,e[o])}else return n(void 0,t[o])}function f(o){if(o in t)return n(e[o],t[o]);if(o in e)return n(void 0,e[o])}var d={url:a,method:a,data:a,baseURL:u,transformRequest:u,transformResponse:u,paramsSerializer:u,timeout:u,timeoutMessage:u,withCredentials:u,adapter:u,responseType:u,xsrfCookieName:u,xsrfHeaderName:u,onUploadProgress:u,onDownloadProgress:u,decompress:u,maxContentLength:u,maxBodyLength:u,beforeRedirect:u,transport:u,httpAgent:u,httpsAgent:u,cancelToken:u,socketPath:u,responseEncoding:u,validateStatus:f};return E.forEach(Object.keys(e).concat(Object.keys(t)),function(l){var m=d[l]||s,p=m(l);E.isUndefined(p)&&m!==f||(i[l]=p)}),i},Le={version:"0.27.2"},rt=Le.version,b=P,se={};["object","boolean","number","function","string","symbol"].forEach(function(r,e){se[r]=function(i){return typeof i===r||"a"+(e<1?"n ":" ")+r}});var ve={};se.transitional=function(e,t,i){function n(s,a){return"[Axios v"+rt+"] Transitional option '"+s+"'"+a+(i?". "+i:"")}return function(s,a,u){if(e===!1)throw new b(n(a," has been removed"+(t?" in "+t:"")),b.ERR_DEPRECATED);return t&&!ve[a]&&(ve[a]=!0,console.warn(n(a," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(s,a,u):!0}};function tt(r,e,t){if(typeof r!="object")throw new b("options must be an object",b.ERR_BAD_OPTION_VALUE);for(var i=Object.keys(r),n=i.length;n-- >0;){var s=i[n],a=e[s];if(a){var u=r[s],f=u===void 0||a(u,s,r);if(f!==!0)throw new b("option "+s+" must be "+f,b.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new b("Unknown option "+s,b.ERR_BAD_OPTION)}}var nt={assertOptions:tt,validators:se},Ue=h,it=Ae,me=yr,Ee=et,q=Be,st=Pe,ge=nt,_=ge.validators;function N(r){this.defaults=r,this.interceptors={request:new me,response:new me}}N.prototype.request=function(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=q(this.defaults,t),t.method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var i=t.transitional;i!==void 0&&ge.assertOptions(i,{silentJSONParsing:_.transitional(_.boolean),forcedJSONParsing:_.transitional(_.boolean),clarifyTimeoutError:_.transitional(_.boolean)},!1);var n=[],s=!0;this.interceptors.request.forEach(function(p){typeof p.runWhen=="function"&&p.runWhen(t)===!1||(s=s&&p.synchronous,n.unshift(p.fulfilled,p.rejected))});var a=[];this.interceptors.response.forEach(function(p){a.push(p.fulfilled,p.rejected)});var u;if(!s){var f=[Ee,void 0];for(Array.prototype.unshift.apply(f,n),f=f.concat(a),u=Promise.resolve(t);f.length;)u=u.then(f.shift(),f.shift());return u}for(var d=t;n.length;){var o=n.shift(),l=n.shift();try{d=o(d)}catch(m){l(m);break}}try{u=Ee(d)}catch(m){return Promise.reject(m)}for(;a.length;)u=u.then(a.shift(),a.shift());return u};N.prototype.getUri=function(e){e=q(this.defaults,e);var t=st(e.baseURL,e.url);return it(t,e.params,e.paramsSerializer)};Ue.forEach(["delete","get","head","options"],function(e){N.prototype[e]=function(t,i){return this.request(q(i||{},{method:e,url:t,data:(i||{}).data}))}});Ue.forEach(["post","put","patch"],function(e){function t(i){return function(s,a,u){return this.request(q(u||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:s,data:a}))}}N.prototype[e]=t(),N.prototype[e+"Form"]=t(!0)});var at=N,ot=j;function T(r){if(typeof r!="function")throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(n){e=n});var t=this;this.promise.then(function(i){if(!!t._listeners){var n,s=t._listeners.length;for(n=0;n<s;n++)t._listeners[n](i);t._listeners=null}}),this.promise.then=function(i){var n,s=new Promise(function(a){t.subscribe(a),n=a}).then(i);return s.cancel=function(){t.unsubscribe(n)},s},r(function(n){t.reason||(t.reason=new ot(n),e(t.reason))})}T.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};T.prototype.subscribe=function(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]};T.prototype.unsubscribe=function(e){if(!!this._listeners){var t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}};T.source=function(){var e,t=new T(function(n){e=n});return{token:t,cancel:e}};var ut=T,ft=function(e){return function(i){return e.apply(null,i)}},lt=h,ct=function(e){return lt.isObject(e)&&e.isAxiosError===!0},ye=h,dt=be,U=at,ht=Be,pt=ie;function Fe(r){var e=new U(r),t=dt(U.prototype.request,e);return ye.extend(t,U.prototype,e),ye.extend(t,e),t.create=function(n){return Fe(ht(r,n))},t}var v=Fe(pt);v.Axios=U;v.CanceledError=j;v.CancelToken=ut;v.isCancel=$e;v.VERSION=Le.version;v.toFormData=Te;v.AxiosError=P;v.Cancel=v.CanceledError;v.all=function(e){return Promise.all(e)};v.spread=ft;v.isAxiosError=ct;Re.exports=v;Re.exports.default=v;const vt=B("div",{class:"bg-red-500 text-white"},"\u6211\u662F\u9996\u9875sda1",-1),Et=Ie({__name:"test",setup(r){const{x:e,y:t}=qe(),i=ke();return(n,s)=>(Me(),He(Je,null,[vt,B("div",null,"x\u5750\u6807 "+H(J(e)),1),B("div",null,"y\u5750\u6807 "+H(J(t)),1),B("div",null,"fps "+H(J(i)),1)],64))}});export{Et as default};