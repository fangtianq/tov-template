!function(){function e(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function t(t){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?e(Object(o),!0).forEach((function(e){r(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):e(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function r(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}System.register(["./index-legacy.12f2293c.js","./base-legacy.5aa23bc0.js","./logo-legacy.4394ab4c.js","./button-legacy.67007427.js","./input-legacy.cc4d3812.js","./index-legacy.5e5d103f.js","./route-block-legacy.6f0c4e8e.js","./event-legacy.b2f9967b.js","./index-legacy.eb9f932c.js","./_Uint8Array-legacy.b984f571.js","./favicon-legacy.99295790.js","./index-legacy.3954ca43.js","./index-legacy.c072eb27.js","./index-legacy.f780a3d8.js","./isNil-legacy.c6dc002d.js"],(function(e,r){"use strict";var a,o,n,l,s,c,u,i,b,d,f,g,p,y,m,j,h,v,w,O,_,x,P,k,E,S;return{setters:[e=>{a=e.d,o=e.ao,n=e.m,l=e.o,s=e.aZ,c=e.a,u=e.f,i=e.w,b=e.a_,d=e.a$,f=e.n,g=e.b0,p=e.h,y=e.b,m=e.i,j=e.b1,h=e.b2,v=e.aX,w=e.b3,O=e.r},()=>{},e=>{_=e.E,x=e.a,P=e._},e=>{k=e.E},()=>{},e=>{E=e.E},e=>{S=e.b},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{}],execute:function(){const r={class:"h-screen font-github"},V={class:"flex justify-center items-center flex-col"},U=y("div",{class:"font-300 text-2xl tracking-github mb-4"}," Sign in to tov-template ",-1),D={class:"h-57 w-77 bg-github_bg dark:bg-github_bg_dark border-github_b rounded-xl border-1 p-4"},C=m("Sign in"),N={class:"mt-3 w-77 border-github_b rounded-xl border-1 p-4"},R=m(" New to Tov? "),T={class:"text-github_a"},$=m("Create an account"),A=m(" . "),F=a({name:"***",beforeRouteEnter(e,t,r){r((e=>{b.isEmpty(d().value)||e.router.replace(t.path)}))}}),M=e("default",a(t(t({},F),{},{setup(e,t){let a=t.expose;const b=o({username:"",password:""}),m=n(),S=f(),F=g();l((()=>{}));return a({router:S,currentUser:s,route:F}),(e,t)=>{const a=P,o=E,n=_,l=k,s=O("router-link"),f=x;return p(),c("div",r,[u(f,{ref_key:"ruleFormRef",ref:m,model:b,"label-position":"top"},{default:i((()=>[y("div",V,[u(a),U,y("div",D,[u(n,{label:"Phone number"},{default:i((()=>[u(o,{modelValue:b.username,"onUpdate:modelValue":t[0]||(t[0]=e=>b.username=e)},null,8,["modelValue"])])),_:1}),u(n,{label:"Password"},{default:i((()=>[u(o,{modelValue:b.password,"onUpdate:modelValue":t[1]||(t[1]=e=>b.password=e),type:"password",autocomplete:"off"},null,8,["modelValue"])])),_:1}),u(n,null,{default:i((()=>[u(l,{class:"w-full rounded-2xl shadow-github_button",color:"#2da44e",type:"primary",onClick:t[2]||(t[2]=e=>{var t;(t=m.value)&&t.validate((e=>{if(!e)return!1;j()(b.username,b.password).then((e=>{d().value=e.getSessionToken(),h.success(`登录成功，欢迎您${e.getUsername()}回来~`);let t=v(w()).fromParams;S.push(t.value.fromPath)}),(e=>{h.error(e.rawMessage)}))}))})},{default:i((()=>[C])),_:1})])),_:1})]),y("div",N,[R,y("a",T,[u(s,{to:"signup"},{default:i((()=>[$])),_:1})]),A])])])),_:1},8,["model"])])}}})));"function"==typeof S&&S(M)}}}))}();
