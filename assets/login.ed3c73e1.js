import{d as b,ao as F,m as V,o as y,aZ as C,a as B,f as o,w as r,a_ as R,a$ as g,n as S,b0 as P,h as N,b as a,i,b1 as T,b2 as c,aX as U,b3 as M,r as $}from"./index.69fc3114.js";/* empty css             */import{E as I,a as j,_ as A}from"./logo.9e1a1ec3.js";import{E as D}from"./button.272ccfeb.js";/* empty css              */import{E as X}from"./index.e65f5c45.js";import{b as f}from"./route-block.6a611cbf.js";import"./event.ca9cda98.js";import"./index.75231c45.js";import"./_Uint8Array.2b611acc.js";import"./favicon.eb9475ba.js";import"./index.ab351347.js";import"./index.0e6a3da3.js";import"./index.b49062f4.js";import"./isNil.aac33454.js";const Z={class:"h-screen font-github"},q={class:"flex justify-center items-center flex-col"},z=a("div",{class:"font-300 text-2xl tracking-github mb-4"}," Sign in to tov-template ",-1),G={class:"h-57 w-77 bg-github_bg dark:bg-github_bg_dark border-github_b rounded-xl border-1 p-4"},H=i("Sign in"),J={class:"mt-3 w-77 border-github_b rounded-xl border-1 p-4"},K=i(" New to Tov? "),L={class:"text-github_a"},O=i("Create an account"),Q=i(" . "),W=b({name:"***",beforeRouteEnter(h,m,e){e(n=>{R.isEmpty(g().value)||n.router.replace(m.path)})}}),Y=b({...W,setup(h,{expose:m}){const e=F({username:"",password:""}),n=V(),p=S(),v=P();y(()=>{});const w=_=>{!_||_.validate(t=>{if(t)T()(e.username,e.password).then(s=>{g().value=s.getSessionToken(),c.success(`\u767B\u5F55\u6210\u529F\uFF0C\u6B22\u8FCE\u60A8${s.getUsername()}\u56DE\u6765~`);let{fromParams:l}=U(M());p.push(l.value.fromPath)},s=>{c.error(s.rawMessage)});else return!1})};return m({router:p,currentUser:C,route:v}),(_,t)=>{const s=A,l=X,d=I,k=D,x=$("router-link"),E=j;return N(),B("div",Z,[o(E,{ref_key:"ruleFormRef",ref:n,model:e,"label-position":"top"},{default:r(()=>[a("div",q,[o(s),z,a("div",G,[o(d,{label:"Phone number"},{default:r(()=>[o(l,{modelValue:e.username,"onUpdate:modelValue":t[0]||(t[0]=u=>e.username=u)},null,8,["modelValue"])]),_:1}),o(d,{label:"Password"},{default:r(()=>[o(l,{modelValue:e.password,"onUpdate:modelValue":t[1]||(t[1]=u=>e.password=u),type:"password",autocomplete:"off"},null,8,["modelValue"])]),_:1}),o(d,null,{default:r(()=>[o(k,{class:"w-full rounded-2xl shadow-github_button",color:"#2da44e",type:"primary",onClick:t[2]||(t[2]=u=>w(n.value))},{default:r(()=>[H]),_:1})]),_:1})]),a("div",J,[K,a("a",L,[o(x,{to:"signup"},{default:r(()=>[O]),_:1})]),Q])])]),_:1},8,["model"])])}}});typeof f=="function"&&f(Y);export{Y as default};