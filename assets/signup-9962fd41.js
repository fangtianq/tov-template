/* empty css             */import{_ as U,E as M,a as B}from"./logo-c7596d2c.js";import"./popper-05a86f86.js";import{E as T}from"./popover-87d7eb8d.js";import{E as L}from"./button-89b799c3.js";import{o as w,P as V,Q as i,d as R,s as b,n as g,aa as D,a0 as j,r as z,a3 as t,w as r,a4 as o,R as h,S as u,U as A,C as Q,D as Z,cM as q,au as c,cN as G}from"./index-17a45ce3.js";/* empty css              */import{a as H}from"./index-f1c54c8b.js";import{E as J}from"./index-142fdb78.js";import{b as v}from"./route-block-83d24a4e.js";import"./constants-77335b9d.js";import"./use-form-item-c7fe8a98.js";import"./event-1da57d2d.js";import"./index-414d99d5.js";import"./_baseClone-24764351.js";import"./_Uint8Array-e2235e95.js";import"./_initCloneObject-b71613ce.js";import"./_getTag-cff77ea1.js";import"./favicon-d22aecf5.js";import"./isNil-c75b1b34.js";import"./focus-trap-19601dde.js";import"./index-8d1b25bc.js";import"./index-86a38320.js";const K={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},O=i("path",{fill:"currentColor",d:"M21 7L9 19l-5.5-5.5l1.41-1.41L9 16.17L19.59 5.59L21 7Z"},null,-1),W=[O];function X(k,e){return w(),V("svg",K,[...W])}const Y={name:"mdi-check",render:X},ee={class:"h-screen font-github"},se={class:"flex justify-center items-center flex-col"},oe=i("div",{class:"font-300 text-2xl tracking-github mb-4"}," Sign up to tov-template ",-1),te={class:"w-77 bg-github_bg dark:bg-github_bg_dark border-github_b rounded-xl border-1 p-4"},ae={class:"w-max h-max cursor-pointer"},ne=["src"],le={class:"mt-3 w-77 bg-white border-github_b rounded-xl border-1 p-4"},re={class:"text-github_a"},ie=R({__name:"signup",setup(k){H.get("api/article/all").then(n=>{});const e=b({username:"",password:"",checkPass:"",nickName:"",smsCodeInput:"",smsCode:"",smsCodeVisible:!1,smsCodeCanSend:!1,smsCodeTip:"刷新验证码",captcha:g()}),_=n=>{e.smsCodeVisible=n},S=()=>{_(!0),e.smsCodeCanSend=!1,q().then(n=>{e.smsCode=n.url,e.captcha=n})},f=D.debounce(S,1e3,{leading:!0,trailing:!1}),x=j(),P=()=>{var n;e.smsCodeInput==""||e.smsCodeInput.length!=4||(n=e.captcha)==null||n.verify(e.smsCodeInput).then(s=>{_(!1),e.smsCodeCanSend=!0,e.smsCodeVisible=!1},s=>{s.code=="800"?f():c.error(s.rawMessage)}).catch(s=>{c.error(s)})},E=b({password:[{validator:(n,s,a)=>{if(s==="")a(new Error("Please input the password"));else{if(e.checkPass!==""){if(!p.value)return;p.value.validateField("checkPass",()=>null)}a()}},trigger:"blur"}],checkPass:[{validator:(n,s,a)=>{s===""?a(new Error("Please input the password again")):s!==e.password?a(new Error("Two inputs don't match!")):a()},trigger:"blur"}],smsCodeInput:[{validator:(n,s,a)=>{e.smsCodeCanSend?a():a(new Error("SmsCode don't match!"))},trigger:"blur"}]}),p=g(),I=n=>{n&&n.validate(s=>{if(s)G()(e.username,e.password).then(a=>{c.success("注册成功"),x.push("login"),"注册成功。objectId：".concat(a.id)},a=>{c.error("注册失败：".concat(a.rawMessage||a.response.data))});else return!1})};return(n,s)=>{const a=U,m=J,d=M,y=Y,C=L,N=T,$=z("router-link"),F=B;return w(),V("div",ee,[t(F,{ref_key:"ruleFormRef",ref:p,model:o(e),"label-position":"top",rules:o(E)},{default:r(()=>[i("div",se,[t(a),oe,i("div",te,[t(d,{label:"Phone number"},{default:r(()=>[t(m,{modelValue:o(e).username,"onUpdate:modelValue":s[0]||(s[0]=l=>o(e).username=l)},null,8,["modelValue"])]),_:1}),t(d,{label:"Password",prop:"password"},{default:r(()=>[t(m,{modelValue:o(e).password,"onUpdate:modelValue":s[1]||(s[1]=l=>o(e).password=l),type:"password",autocomplete:"off"},null,8,["modelValue"])]),_:1}),t(d,{label:"Confirm",prop:"checkPass"},{default:r(()=>[t(m,{modelValue:o(e).checkPass,"onUpdate:modelValue":s[2]||(s[2]=l=>o(e).checkPass=l),type:"password",autocomplete:"off"},null,8,["modelValue"])]),_:1}),t(d,{label:"nickName"},{default:r(()=>[t(m,{modelValue:o(e).nickName,"onUpdate:modelValue":s[3]||(s[3]=l=>o(e).nickName=l)},null,8,["modelValue"])]),_:1}),t(d,{prop:"smsCodeInput"},{default:r(()=>[t(N,{visible:o(e).smsCodeVisible,placement:"top"},{reference:r(()=>[t(C,{id:"verify",class:h("text-github_a mb-1"),disabled:o(e).smsCodeCanSend,onClick:o(f)},{default:r(()=>[i("span",{class:h(o(e).smsCodeCanSend?"text-green-500":"")},[u(A(o(e).smsCodeTip)+" ",1),Q(t(y,null,null,512),[[Z,o(e).smsCodeCanSend]])],2)]),_:1},8,["disabled","onClick"])]),default:r(()=>[i("div",ae,[i("img",{src:o(e).smsCode},null,8,ne)])]),_:1},8,["visible"]),t(m,{modelValue:o(e).smsCodeInput,"onUpdate:modelValue":s[4]||(s[4]=l=>o(e).smsCodeInput=l),modelModifiers:{trim:!0},class:"w-8",disabled:!o(e).smsCodeVisible,onFocus:s[5]||(s[5]=l=>_(!0)),onInput:s[6]||(s[6]=l=>P())},null,8,["modelValue","disabled"])]),_:1}),t(d,null,{default:r(()=>[t(C,{class:"w-full rounded-2xl shadow-github_button",color:"#2da44e",type:"primary",onClick:s[7]||(s[7]=l=>I(o(p)))},{default:r(()=>[u("Sign up")]),_:1})]),_:1})]),i("div",le,[u(" Already have an account? "),i("a",re,[t($,{to:"login"},{default:r(()=>[u(" Sign in → ")]),_:1})]),u(" . ")])])]),_:1},8,["model","rules"])])}}});typeof v=="function"&&v(ie);export{ie as default};
