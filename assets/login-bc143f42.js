/* empty css             */import{_ as V,E as C,a as R}from"./logo-00452795.js";import{E as S}from"./button-6767a647.js";/* empty css              */import{g as w,J as F,j as P,ay as B,az as M,K as N,aA as T,r as U,o as $,z as j,A as o,w as r,p as m,s as a,a9 as i,aD as z,a_ as v,a$ as A,aV as g,aY as I,b0 as D}from"./index-c20bf65e.js";import{E as J}from"./index-967dde3a.js";import{b as h}from"./route-block-83d24a4e.js";import"./constants-b8fbfe6b.js";import"./use-form-item-bf39cbcc.js";import"./event-1da57d2d.js";import"./_baseClone-8996f64a.js";import"./_Uint8Array-32b6a550.js";import"./_initCloneObject-9b0c010c.js";import"./_getTag-b7fb87b2.js";import"./favicon-d22aecf5.js";import"./index-8376ffd6.js";import"./index-86a38320.js";import"./isNil-c75b1b34.js";const K={class:"h-screen font-github"},Y={class:"flex justify-center items-center flex-col"},q=m("div",{class:"font-300 text-2xl tracking-github mb-4"}," Sign in to tov-template ",-1),G={class:"h-67 w-77 bg-github_bg dark:bg-github_bg_dark border-github_b rounded-xl border-1 p-4"},H={class:"mt-3 w-77 border-github_b rounded-xl border-1 p-4"},L={class:"text-github_a"},O=w({beforeRouteEnter(k,d,e){e(l=>{z.isEmpty(v().value)||l.router.replace(d.path)})}}),Q=w({...O,__name:"login",setup(k,{expose:d}){const e=F({username:"",password:""}),l=P(),c=B(),x=M();N(()=>{});const f=(p,t)=>{t&&(e.username="大哥",e.password="110"),p&&p.validate(_=>{if(_)A()(e.username,e.password).then(s=>{v().value=s.getSessionToken(),g.success("登录成功，欢迎您".concat(s.getUsername(),"回来~"));let{fromParams:n}=I(D());c.push(n.value.fromPath)},s=>{s.rawMessage&&g.error(s.rawMessage)});else return!1})};return d({router:c,currentUser:T,route:x}),(p,t)=>{const _=V,s=J,n=C,b=S,y=U("router-link"),E=R;return $(),j("div",K,[o(E,{ref_key:"ruleFormRef",ref:l,model:a(e),"label-position":"top"},{default:r(()=>[m("div",Y,[o(_),q,m("div",G,[o(n,{label:"Phone number"},{default:r(()=>[o(s,{modelValue:a(e).username,"onUpdate:modelValue":t[0]||(t[0]=u=>a(e).username=u)},null,8,["modelValue"])]),_:1}),o(n,{label:"Password"},{default:r(()=>[o(s,{modelValue:a(e).password,"onUpdate:modelValue":t[1]||(t[1]=u=>a(e).password=u),type:"password",autocomplete:"off"},null,8,["modelValue"])]),_:1}),o(n,null,{default:r(()=>[o(b,{class:"w-full rounded-2xl shadow-github_button",color:"#2da44e",type:"primary",onClick:t[2]||(t[2]=u=>f(a(l)))},{default:r(()=>[i("Sign in")]),_:1})]),_:1}),o(n,null,{default:r(()=>[o(b,{class:"w-full rounded-2xl shadow-github_button",color:"#2da44e",type:"primary",onClick:t[3]||(t[3]=u=>f(a(l),!0))},{default:r(()=>[i("匿名登陆")]),_:1})]),_:1})]),m("div",H,[i(" New to Tov? "),m("a",L,[o(y,{to:"signup"},{default:r(()=>[i("Create an account")]),_:1})]),i(" . ")])])]),_:1},8,["model"])])}}});typeof h=="function"&&h(Q);export{Q as default};
