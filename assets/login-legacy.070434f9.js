!function(){function e(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}function t(t){for(var l=1;l<arguments.length;l++){var n=null!=arguments[l]?arguments[l]:{};l%2?e(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):e(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function r(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}System.register(["./index-legacy.52305db0.js","./base-legacy.983574b6.js","./logo-legacy.7a2599c7.js","./button-legacy.9e3d8a1a.js","./input-legacy.3a43dd41.js","./index-legacy.6d985236.js","./route-block-legacy.509c7347.js","./event-legacy.7722cbb2.js","./index-legacy.6c7c5c28.js","./_Uint8Array-legacy.0c4ca44b.js","./favicon-legacy.13288711.js","./index-legacy.39ae09e6.js","./index-legacy.ed37cbe3.js","./index-legacy.1d32fce8.js","./isNil-legacy.e248952d.js"],(function(e,r){"use strict";var l,n,a,o,u,s,c,i,d,b,f,g,p,y,m,j,h,w,v,O,_,x,P,k,E,S;return{setters:[e=>{l=e.d,n=e.ao,a=e.m,o=e.n,u=e.b0,s=e.o,c=e.aO,i=e.r,d=e.a,b=e.b,f=e.h,g=e.w,p=e.b1,y=e.b2,m=e.e,j=e.j,h=e.b3,w=e.aP,v=e.aM,O=e.b4},null,e=>{_=e.E,x=e.a,P=e._},e=>{k=e.E},null,e=>{E=e.E},e=>{S=e.b},null,null,null,null,null,null,null,null],execute:function(){const r={class:"h-screen font-github"},V={class:"flex justify-center items-center flex-col"},U=m("div",{class:"font-300 text-2xl tracking-github mb-4"}," Sign in to tov-template ",-1),D={class:"h-67 w-77 bg-github_bg dark:bg-github_bg_dark border-github_b rounded-xl border-1 p-4"},C=j("Sign in"),R=j("匿名登陆"),T={class:"mt-3 w-77 border-github_b rounded-xl border-1 p-4"},A=j(" New to Tov? "),M={class:"text-github_a"},N=j("Create an account"),B=j(" . "),F=l({name:"***",beforeRouteEnter(e,t,r){r((e=>{p.isEmpty(y().value)||e.router.replace(t.path)}))}}),G=e("default",l(t(t({},F),{},{setup(e,t){let l=t.expose;const p=n({username:"",password:""}),j=a(),S=o(),F=u();s((()=>{}));const G=(e,t)=>{t&&(p.username="大哥",p.password="110"),e&&e.validate((e=>{if(!e)return!1;h()(p.username,p.password).then((e=>{y().value=e.getSessionToken(),w.success(`登录成功，欢迎您${e.getUsername()}回来~`);let t=v(O()).fromParams;S.push(t.value.fromPath)}),(e=>{w.error(e.rawMessage)}))}))};return l({router:S,currentUser:c,route:F}),(e,t)=>{const l=P,n=E,a=_,o=k,u=i("router-link"),s=x;return d(),b("div",r,[f(s,{ref_key:"ruleFormRef",ref:j,model:p,"label-position":"top"},{default:g((()=>[m("div",V,[f(l),U,m("div",D,[f(a,{label:"Phone number"},{default:g((()=>[f(n,{modelValue:p.username,"onUpdate:modelValue":t[0]||(t[0]=e=>p.username=e)},null,8,["modelValue"])])),_:1}),f(a,{label:"Password"},{default:g((()=>[f(n,{modelValue:p.password,"onUpdate:modelValue":t[1]||(t[1]=e=>p.password=e),type:"password",autocomplete:"off"},null,8,["modelValue"])])),_:1}),f(a,null,{default:g((()=>[f(o,{class:"w-full rounded-2xl shadow-github_button",color:"#2da44e",type:"primary",onClick:t[2]||(t[2]=e=>G(j.value))},{default:g((()=>[C])),_:1})])),_:1}),f(a,null,{default:g((()=>[f(o,{class:"w-full rounded-2xl shadow-github_button",color:"#2da44e",type:"primary",onClick:t[3]||(t[3]=e=>G(j.value,!0))},{default:g((()=>[R])),_:1})])),_:1})]),m("div",T,[A,m("a",M,[f(u,{to:"signup"},{default:g((()=>[N])),_:1})]),B])])])),_:1},8,["model"])])}}})));"function"==typeof S&&S(G)}}}))}();
