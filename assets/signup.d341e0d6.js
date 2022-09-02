import{e as b,f as g,h as r,d as F,a1 as _,m as C,j as a,w as l,C as h,i as B,k as m,t as M,q as $,R,n as T}from"./index.2be39f57.js";import{b as U,s as A}from"./av.4cdc99ed.js";import{_ as L}from"./lodash.d7946ac5.js";import{E as D,a as N,b as j,c as q,_ as z,d as u}from"./favicon.8eb2b981.js";import{E as Y}from"./el-popover.26be0755.js";import"./el-popper.e7accf3f.js";import{b as v}from"./route-block.b5bad31b.js";import"./plugin-vue_export-helper.c87c145b.js";import"./index.9e678198.js";import"./icon.974cf4cc.js";const Z={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},G=r("path",{fill:"currentColor",d:"M21 7L9 19l-5.5-5.5l1.41-1.41L9 16.17L19.59 5.59L21 7Z"},null,-1),H=[G];function J(w,e){return b(),g("svg",Z,H)}var K={name:"mdi-check",render:J};const O={class:"bg-white h-screen font-github"},Q={class:"flex justify-center items-center flex-col"},W=r("div",{class:"p-8"},[r("img",{src:z,class:"w-12 h-12",alt:"tov"})],-1),X=r("div",{class:"font-300 text-2xl tracking-github mb-4"}," Sign up to tov-template ",-1),ee={class:"h-98 w-77 bg-github_bg border-github_b rounded-xl border-1 p-4"},se={class:"w-max h-max cursor-pointer"},oe=["src"],te=m("Sign up"),ae=r("div",{class:"mt-3 w-77 bg-white border-github_b rounded-xl border-1 p-4"},[m(" Already have an account? "),r("a",{href:"login",class:"text-github_a"}," Sign in \u2192 "),m(" . ")],-1),re=F({__name:"signup",setup(w){const e=_({username:"",password:"",checkPass:"",smsCodeInput:"",smsCode:"",smsCodeVisible:!1,smsCodeCanSend:!1,smsCodeTip:"\u5237\u65B0\u9A8C\u8BC1\u7801",captcha:C()}),p=t=>{e.smsCodeVisible=t},S=()=>{p(!0),e.smsCodeCanSend=!1,U().then(t=>{e.smsCode=t.url,e.captcha=t})},c=L.debounce(S,1e3,{leading:!0,trailing:!1}),V=T(),x=()=>{var t;e.smsCodeInput==""||e.smsCodeInput.length!=4||(t=e.captcha)==null||t.verify(e.smsCodeInput).then(s=>{p(!1),e.smsCodeCanSend=!0,e.smsCodeVisible=!1},s=>{s.code==800?c():u.error(s.rawMessage)}).catch(s=>{u.error(s)})},P=_({password:[{validator:(t,s,o)=>{if(s==="")o(new Error("Please input the password"));else{if(e.checkPass!==""){if(!i.value)return;i.value.validateField("checkPass",()=>null)}o()}},trigger:"blur"}],checkPass:[{validator:(t,s,o)=>{s===""?o(new Error("Please input the password again")):s!==e.password?o(new Error("Two inputs don't match!")):o()},trigger:"blur"}],smsCodeInput:[{validator:(t,s,o)=>{e.smsCodeCanSend?o():o(new Error("SmsCode don't match!"))},trigger:"blur"}]}),i=C(),k=t=>{!t||t.validate(s=>{if(s)A(e.username,e.password).then(o=>{u.success("\u6CE8\u518C\u6210\u529F"),V.push("login")},o=>{u.error(`\u6CE8\u518C\u5931\u8D25\uFF1A${o.rawMessage}`)});else return!1})};return(t,s)=>{const o=D,d=N,E=K,f=j,y=Y,I=q;return b(),g("div",O,[a(I,{ref_key:"ruleFormRef",ref:i,model:e,"label-position":"top",rules:P},{default:l(()=>[r("div",Q,[W,X,r("div",ee,[a(d,{label:"Phone number"},{default:l(()=>[a(o,{modelValue:e.username,"onUpdate:modelValue":s[0]||(s[0]=n=>e.username=n)},null,8,["modelValue"])]),_:1}),a(d,{label:"Password",prop:"password"},{default:l(()=>[a(o,{modelValue:e.password,"onUpdate:modelValue":s[1]||(s[1]=n=>e.password=n),type:"password",autocomplete:"off"},null,8,["modelValue"])]),_:1}),a(d,{label:"Confirm",prop:"checkPass"},{default:l(()=>[a(o,{modelValue:e.checkPass,"onUpdate:modelValue":s[2]||(s[2]=n=>e.checkPass=n),type:"password",autocomplete:"off"},null,8,["modelValue"])]),_:1}),a(d,{prop:"smsCodeInput"},{default:l(()=>[a(y,{visible:e.smsCodeVisible,placement:"top"},{reference:l(()=>[a(f,{id:"verify",class:h("text-github_a mb-1"),onClick:B(c)},{default:l(()=>[r("span",{class:h(e.smsCodeCanSend?"text-green-500":"")},[m(M(e.smsCodeTip)+" ",1),$(a(E,null,null,512),[[R,e.smsCodeCanSend]])],2)]),_:1},8,["onClick"])]),default:l(()=>[r("div",se,[r("img",{src:e.smsCode},null,8,oe)])]),_:1},8,["visible"]),a(o,{modelValue:e.smsCodeInput,"onUpdate:modelValue":s[3]||(s[3]=n=>e.smsCodeInput=n),modelModifiers:{trim:!0},class:"w-8",disabled:!e.smsCodeVisible,onFocus:s[4]||(s[4]=n=>p(!0)),onInput:s[5]||(s[5]=n=>x())},null,8,["modelValue","disabled"])]),_:1}),a(d,null,{default:l(()=>[a(f,{class:"w-full rounded-2xl shadow-github_button",color:"#2da44e",type:"primary",onClick:s[6]||(s[6]=n=>k(i.value))},{default:l(()=>[te]),_:1})]),_:1})]),ae])]),_:1},8,["model","rules"])])}}});typeof v=="function"&&v(re);export{re as default};
