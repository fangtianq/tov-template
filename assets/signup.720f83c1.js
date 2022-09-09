import{e as b,f as g,h as r,d as F,al as _,l as h,an as B,j as a,w as n,J as C,i as M,k as m,t as $,p as T,a8 as U,be as A,m as L,ar as u,bf as R}from"./index.a5ffe1ae.js";import{E as D,a as N}from"./el-form-item.385862c4.js";import{E as j}from"./el-popover.c82a0e03.js";import"./el-popper.ab98c338.js";import{E as z}from"./el-button.e7a1384f.js";import{E as J}from"./el-input.02a749f4.js";import{_ as Y}from"./favicon.a1ca0290.js";import{b as v}from"./route-block.1e6a8648.js";import"./error.7e8331f1.js";import"./index.02e9a362.js";import"./index.8bfffa1c.js";const Z={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},q=r("path",{fill:"currentColor",d:"M21 7L9 19l-5.5-5.5l1.41-1.41L9 16.17L19.59 5.59L21 7Z"},null,-1),G=[q];function H(w,e){return b(),g("svg",Z,G)}var K={name:"mdi-check",render:H};const O={class:"bg-white h-screen font-github"},Q={class:"flex justify-center items-center flex-col"},W=r("div",{class:"p-8"},[r("img",{src:Y,class:"w-12 h-12",alt:"tov"})],-1),X=r("div",{class:"font-300 text-2xl tracking-github mb-4"}," Sign up to tov-template ",-1),ee={class:"h-98 w-77 bg-github_bg border-github_b rounded-xl border-1 p-4"},se={class:"w-max h-max cursor-pointer"},oe=["src"],te=m("Sign up"),ae=r("div",{class:"mt-3 w-77 bg-white border-github_b rounded-xl border-1 p-4"},[m(" Already have an account? "),r("a",{href:"login",class:"text-github_a"}," Sign in \u2192 "),m(" . ")],-1),re=F({__name:"signup",setup(w){const e=_({username:"",password:"",checkPass:"",smsCodeInput:"",smsCode:"",smsCodeVisible:!1,smsCodeCanSend:!1,smsCodeTip:"\u5237\u65B0\u9A8C\u8BC1\u7801",captcha:h()}),p=t=>{e.smsCodeVisible=t},S=()=>{p(!0),e.smsCodeCanSend=!1,A().then(t=>{e.smsCode=t.url,e.captcha=t})},c=B.debounce(S,1e3,{leading:!0,trailing:!1}),V=L(),x=()=>{var t;e.smsCodeInput==""||e.smsCodeInput.length!=4||(t=e.captcha)==null||t.verify(e.smsCodeInput).then(s=>{p(!1),e.smsCodeCanSend=!0,e.smsCodeVisible=!1},s=>{s.code==800?c():u.error(s.rawMessage)}).catch(s=>{u.error(s)})},E=_({password:[{validator:(t,s,o)=>{if(s==="")o(new Error("Please input the password"));else{if(e.checkPass!==""){if(!i.value)return;i.value.validateField("checkPass",()=>null)}o()}},trigger:"blur"}],checkPass:[{validator:(t,s,o)=>{s===""?o(new Error("Please input the password again")):s!==e.password?o(new Error("Two inputs don't match!")):o()},trigger:"blur"}],smsCodeInput:[{validator:(t,s,o)=>{e.smsCodeCanSend?o():o(new Error("SmsCode don't match!"))},trigger:"blur"}]}),i=h(),P=t=>{!t||t.validate(s=>{if(s)R(e.username,e.password).then(o=>{u.success("\u6CE8\u518C\u6210\u529F"),V.push("login")},o=>{u.error(`\u6CE8\u518C\u5931\u8D25\uFF1A${o.rawMessage}`)});else return!1})};return(t,s)=>{const o=J,d=D,k=K,f=z,y=j,I=N;return b(),g("div",O,[a(I,{ref_key:"ruleFormRef",ref:i,model:e,"label-position":"top",rules:E},{default:n(()=>[r("div",Q,[W,X,r("div",ee,[a(d,{label:"Phone number"},{default:n(()=>[a(o,{modelValue:e.username,"onUpdate:modelValue":s[0]||(s[0]=l=>e.username=l)},null,8,["modelValue"])]),_:1}),a(d,{label:"Password",prop:"password"},{default:n(()=>[a(o,{modelValue:e.password,"onUpdate:modelValue":s[1]||(s[1]=l=>e.password=l),type:"password",autocomplete:"off"},null,8,["modelValue"])]),_:1}),a(d,{label:"Confirm",prop:"checkPass"},{default:n(()=>[a(o,{modelValue:e.checkPass,"onUpdate:modelValue":s[2]||(s[2]=l=>e.checkPass=l),type:"password",autocomplete:"off"},null,8,["modelValue"])]),_:1}),a(d,{prop:"smsCodeInput"},{default:n(()=>[a(y,{visible:e.smsCodeVisible,placement:"top"},{reference:n(()=>[a(f,{id:"verify",class:C("text-github_a mb-1"),onClick:M(c)},{default:n(()=>[r("span",{class:C(e.smsCodeCanSend?"text-green-500":"")},[m($(e.smsCodeTip)+" ",1),T(a(k,null,null,512),[[U,e.smsCodeCanSend]])],2)]),_:1},8,["onClick"])]),default:n(()=>[r("div",se,[r("img",{src:e.smsCode},null,8,oe)])]),_:1},8,["visible"]),a(o,{modelValue:e.smsCodeInput,"onUpdate:modelValue":s[3]||(s[3]=l=>e.smsCodeInput=l),modelModifiers:{trim:!0},class:"w-8",disabled:!e.smsCodeVisible,onFocus:s[4]||(s[4]=l=>p(!0)),onInput:s[5]||(s[5]=l=>x())},null,8,["modelValue","disabled"])]),_:1}),a(d,null,{default:n(()=>[a(f,{class:"w-full rounded-2xl shadow-github_button",color:"#2da44e",type:"primary",onClick:s[6]||(s[6]=l=>P(i.value))},{default:n(()=>[te]),_:1})]),_:1})]),ae])]),_:1},8,["model","rules"])])}}});typeof v=="function"&&v(re);export{re as default};
