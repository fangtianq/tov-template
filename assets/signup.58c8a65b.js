import{a as B}from"./index.9fe1b070.js";import{h as v,a as w,b as r,d as N,aF as C,m as h,aX as U,f as o,w as l,bF as M,Q as b,e as T,i as u,t as L,p as A,a8 as D,n as R,a$ as p,bG as j,r as z}from"./index.76f65fa7.js";/* empty css             */import{E as G,a as Q,_ as X}from"./logo.216fde50.js";import"./popper.8586c3a0.js";import{E as Z}from"./popover.2ae5dfc8.js";import{E as q}from"./button.cd566479.js";import{E as H}from"./input.225a5746.js";import{b as g}from"./route-block.6a611cbf.js";import"./error.52cb36a5.js";import"./index.20bed6b0.js";import"./favicon.eb9475ba.js";import"./isNil.aac33454.js";import"./index.2591af36.js";import"./index.a90e2e3e.js";import"./index.b49062f4.js";import"./event.ff07fee5.js";const J={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},K=r("path",{fill:"currentColor",d:"M21 7L9 19l-5.5-5.5l1.41-1.41L9 16.17L19.59 5.59L21 7Z"},null,-1),O=[K];function W(V,e){return v(),w("svg",J,O)}const Y={name:"mdi-check",render:W},ee={class:"h-screen font-github"},se={class:"flex justify-center items-center flex-col"},oe=r("div",{class:"font-300 text-2xl tracking-github mb-4"}," Sign up to tov-template ",-1),te={class:"w-77 bg-github_bg dark:bg-github_bg_dark border-github_b rounded-xl border-1 p-4"},ne={class:"w-max h-max cursor-pointer"},ae=["src"],le=u("Sign up"),re={class:"mt-3 w-77 bg-white border-github_b rounded-xl border-1 p-4"},ie=u(" Already have an account? "),de={class:"text-github_a"},ue=u(" Sign in \u2192 "),me=u(" . "),pe=N({__name:"signup",setup(V){B.get("api/article/all").then(t=>{});const e=C({username:"",password:"",checkPass:"",nickName:"",smsCodeInput:"",smsCode:"",smsCodeVisible:!1,smsCodeCanSend:!1,smsCodeTip:"\u5237\u65B0\u9A8C\u8BC1\u7801",captcha:h()}),c=t=>{e.smsCodeVisible=t},k=()=>{c(!0),e.smsCodeCanSend=!1,M().then(t=>{e.smsCode=t.url,e.captcha=t})},_=U.debounce(k,1e3,{leading:!0,trailing:!1}),S=R(),x=()=>{var t;e.smsCodeInput==""||e.smsCodeInput.length!=4||(t=e.captcha)==null||t.verify(e.smsCodeInput).then(s=>{c(!1),e.smsCodeCanSend=!0,e.smsCodeVisible=!1},s=>{s.code=="800"?_():p.error(s.rawMessage)}).catch(s=>{p.error(s)})},E=C({password:[{validator:(t,s,n)=>{if(s==="")n(new Error("Please input the password"));else{if(e.checkPass!==""){if(!m.value)return;m.value.validateField("checkPass",()=>null)}n()}},trigger:"blur"}],checkPass:[{validator:(t,s,n)=>{s===""?n(new Error("Please input the password again")):s!==e.password?n(new Error("Two inputs don't match!")):n()},trigger:"blur"}],smsCodeInput:[{validator:(t,s,n)=>{e.smsCodeCanSend?n():n(new Error("SmsCode don't match!"))},trigger:"blur"}]}),m=h(),P=t=>{!t||t.validate(s=>{if(s)j()(e.username,e.password).then(n=>{p.success("\u6CE8\u518C\u6210\u529F"),S.push("login")},n=>{p.error(`\u6CE8\u518C\u5931\u8D25\uFF1A${n.rawMessage}`)});else return!1})};return(t,s)=>{const n=X,d=H,i=G,F=Y,f=q,y=Z,I=z("router-link"),$=Q;return v(),w("div",ee,[o($,{ref_key:"ruleFormRef",ref:m,model:e,"label-position":"top",rules:E},{default:l(()=>[r("div",se,[o(n),oe,r("div",te,[o(i,{label:"Phone number"},{default:l(()=>[o(d,{modelValue:e.username,"onUpdate:modelValue":s[0]||(s[0]=a=>e.username=a)},null,8,["modelValue"])]),_:1}),o(i,{label:"Password",prop:"password"},{default:l(()=>[o(d,{modelValue:e.password,"onUpdate:modelValue":s[1]||(s[1]=a=>e.password=a),type:"password",autocomplete:"off"},null,8,["modelValue"])]),_:1}),o(i,{label:"Confirm",prop:"checkPass"},{default:l(()=>[o(d,{modelValue:e.checkPass,"onUpdate:modelValue":s[2]||(s[2]=a=>e.checkPass=a),type:"password",autocomplete:"off"},null,8,["modelValue"])]),_:1}),o(i,{label:"nickName"},{default:l(()=>[o(d,{modelValue:e.nickName,"onUpdate:modelValue":s[3]||(s[3]=a=>e.nickName=a)},null,8,["modelValue"])]),_:1}),o(i,{prop:"smsCodeInput"},{default:l(()=>[o(y,{visible:e.smsCodeVisible,placement:"top"},{reference:l(()=>[o(f,{id:"verify",class:b("text-github_a mb-1"),onClick:T(_)},{default:l(()=>[r("span",{class:b(e.smsCodeCanSend?"text-green-500":"")},[u(L(e.smsCodeTip)+" ",1),A(o(F,null,null,512),[[D,e.smsCodeCanSend]])],2)]),_:1},8,["onClick"])]),default:l(()=>[r("div",ne,[r("img",{src:e.smsCode},null,8,ae)])]),_:1},8,["visible"]),o(d,{modelValue:e.smsCodeInput,"onUpdate:modelValue":s[4]||(s[4]=a=>e.smsCodeInput=a),modelModifiers:{trim:!0},class:"w-8",disabled:!e.smsCodeVisible,onFocus:s[5]||(s[5]=a=>c(!0)),onInput:s[6]||(s[6]=a=>x())},null,8,["modelValue","disabled"])]),_:1}),o(i,null,{default:l(()=>[o(f,{class:"w-full rounded-2xl shadow-github_button",color:"#2da44e",type:"primary",onClick:s[7]||(s[7]=a=>P(m.value))},{default:l(()=>[le]),_:1})]),_:1})]),r("div",re,[ie,r("a",de,[o(I,{to:"login"},{default:l(()=>[ue]),_:1})]),me])])]),_:1},8,["model","rules"])])}}});typeof g=="function"&&g(pe);export{pe as default};