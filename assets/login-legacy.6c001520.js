!function(){function e(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}function t(t){for(var l=1;l<arguments.length;l++){var a=null!=arguments[l]?arguments[l]:{};l%2?e(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):e(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function r(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var l=r.call(e,t||"default");if("object"!=typeof l)return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}System.register(["./base-legacy.38854648.js","./logo-legacy.1bdcedcd.js","./button-legacy.f4bbbf8c.js","./input-legacy.ea5c2c98.js","./index-legacy.4a81f09d.js","./index-legacy.bfa02090.js","./route-block-legacy.509c7347.js","./constants-legacy.ec33dc26.js","./use-form-item-legacy.aca14bad.js","./event-legacy.7722cbb2.js","./_baseClone-legacy.c7384887.js","./_Uint8Array-legacy.fc07a08f.js","./_initCloneObject-legacy.c1ab9330.js","./_getTag-legacy.ff80ff66.js","./favicon-legacy.13288711.js","./index-legacy.969a3fd5.js","./index-legacy.b33c6eb8.js","./isNil-legacy.e248952d.js"],(function(e,r){"use strict";var l,a,n,o,u,s,i,c,d,f,b,g,p,y,m,j,v,w,_,h,O,x,P,S,k,E,V;return{setters:[null,e=>{l=e._,a=e.E,n=e.a},e=>{o=e.E},null,e=>{u=e.d,s=e.H,i=e.f,c=e.av,d=e.aw,f=e.I,b=e.ax,g=e.a7,p=e.j,y=e.x,m=e.y,j=e.w,v=e.m,w=e.p,_=e.a8,h=e.aB,O=e.aX,x=e.aY,P=e.aS,S=e.aV,k=e.aZ},e=>{E=e.E},e=>{V=e.b},null,null,null,null,null,null,null,null,null,null,null],execute:function(){var r={class:"h-screen font-github"},C={class:"flex justify-center items-center flex-col"},T=v("div",{class:"font-300 text-2xl tracking-github mb-4"}," Sign in to tov-template ",-1),U={class:"h-67 w-77 bg-github_bg dark:bg-github_bg_dark border-github_b rounded-xl border-1 p-4"},D={class:"mt-3 w-77 border-github_b rounded-xl border-1 p-4"},N={class:"text-github_a"},F=u({beforeRouteEnter(e,t,r){r((e=>{h.isEmpty(O().value)||e.router.replace(t.path)}))}}),H=e("default",u(t(t({},F),{},{__name:"login",setup(e,t){var u=t.expose,h=s({username:"",password:""}),V=i(),F=c(),H=d();f((()=>{H.params,H.query}));var R=(e,t)=>{t&&(h.username="大哥",h.password="110"),e&&e.validate((e=>{if(!e)return!1;x()(h.username,h.password).then((e=>{O().value=e.getSessionToken(),P.success(`登录成功，欢迎您${e.getUsername()}回来~`);var t=S(k()).fromParams;F.push(t.value.fromPath)}),(e=>{P.error(e.rawMessage)}))}))};return u({router:F,currentUser:b,route:H}),(e,t)=>{var u=l,s=E,i=a,c=o,d=g("router-link"),f=n;return p(),y("div",r,[m(f,{ref_key:"ruleFormRef",ref:V,model:w(h),"label-position":"top"},{default:j((()=>[v("div",C,[m(u),T,v("div",U,[m(i,{label:"Phone number"},{default:j((()=>[m(s,{modelValue:w(h).username,"onUpdate:modelValue":t[0]||(t[0]=e=>w(h).username=e)},null,8,["modelValue"])])),_:1}),m(i,{label:"Password"},{default:j((()=>[m(s,{modelValue:w(h).password,"onUpdate:modelValue":t[1]||(t[1]=e=>w(h).password=e),type:"password",autocomplete:"off"},null,8,["modelValue"])])),_:1}),m(i,null,{default:j((()=>[m(c,{class:"w-full rounded-2xl shadow-github_button",color:"#2da44e",type:"primary",onClick:t[2]||(t[2]=e=>R(w(V)))},{default:j((()=>[_("Sign in")])),_:1})])),_:1}),m(i,null,{default:j((()=>[m(c,{class:"w-full rounded-2xl shadow-github_button",color:"#2da44e",type:"primary",onClick:t[3]||(t[3]=e=>R(w(V),!0))},{default:j((()=>[_("匿名登陆")])),_:1})])),_:1})]),v("div",D,[_(" New to Tov? "),v("a",N,[m(d,{to:"signup"},{default:j((()=>[_("Create an account")])),_:1})]),_(" . ")])])])),_:1},8,["model"])])}}})));"function"==typeof V&&V(H)}}}))}();
