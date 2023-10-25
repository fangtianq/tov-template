System.register(["./base-legacy.38854648.js","./logo-legacy.073bd705.js","./popper-legacy.d28f3926.js","./popover-legacy.34a555c6.js","./button-legacy.0a7cc68f.js","./index-legacy.c981faa3.js","./input-legacy.13394860.js","./index-legacy.f259f3fb.js","./index-legacy.374df017.js","./route-block-legacy.509c7347.js","./constants-legacy.0dd8db45.js","./use-form-item-legacy.17cd8959.js","./event-legacy.7722cbb2.js","./index-legacy.97cc394a.js","./_baseClone-legacy.1ba53110.js","./_Uint8Array-legacy.8bbe4e68.js","./_initCloneObject-legacy.5a723c33.js","./_getTag-legacy.e9b9e99b.js","./favicon-legacy.13288711.js","./isNil-legacy.e248952d.js","./focus-trap-legacy.480a5c43.js","./index-legacy.0a240aa0.js","./index-legacy.b33c6eb8.js"],(function(e,l){"use strict";var s,a,n,o,t,d,r,u,i,c,m,p,g,b,f,h,C,y,v,w,_,j,k,x,V,S,P,I;return{setters:[null,e=>{s=e._,a=e.E,n=e.a},null,e=>{o=e.E},e=>{t=e.E},e=>{d=e.o,r=e.P,u=e.Q,i=e.d,c=e.s,m=e.n,p=e.aa,g=e.a0,b=e.r,f=e.a3,h=e.w,C=e.a4,y=e.R,v=e.S,w=e.U,_=e.C,j=e.D,k=e.cM,x=e.au,V=e.cN},null,e=>{S=e.a},e=>{P=e.E},e=>{I=e.b},null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var l={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},E=[u("path",{fill:"currentColor",d:"M21 7L9 19l-5.5-5.5l1.41-1.41L9 16.17L19.59 5.59L21 7Z"},null,-1)],U={name:"mdi-check",render:function(e,s){return d(),r("svg",l,[...E])}},N={class:"h-screen font-github"},M={class:"flex justify-center items-center flex-col"},F=u("div",{class:"font-300 text-2xl tracking-github mb-4"}," Sign up to tov-template ",-1),L={class:"w-77 bg-github_bg dark:bg-github_bg_dark border-github_b rounded-xl border-1 p-4"},T={class:"w-max h-max cursor-pointer"},A=["src"],R={class:"mt-3 w-77 bg-white border-github_b rounded-xl border-1 p-4"},Z={class:"text-github_a"},B=e("default",i({__name:"signup",setup(e){S.get("api/article/all").then((e=>{}));var l=c({username:"",password:"",checkPass:"",nickName:"",smsCodeInput:"",smsCode:"",smsCodeVisible:!1,smsCodeCanSend:!1,smsCodeTip:"刷新验证码",captcha:m()}),i=e=>{l.smsCodeVisible=e},I=p.debounce((()=>{i(!0),l.smsCodeCanSend=!1,k().then((e=>{l.smsCode=e.url,l.captcha=e}))}),1e3,{leading:!0,trailing:!1}),E=g(),B=c({password:[{validator:(e,s,a)=>{if(""===s)a(new Error("Please input the password"));else{if(""!==l.checkPass){if(!D.value)return;D.value.validateField("checkPass",(()=>null))}a()}},trigger:"blur"}],checkPass:[{validator:(e,s,a)=>{""===s?a(new Error("Please input the password again")):s!==l.password?a(new Error("Two inputs don't match!")):a()},trigger:"blur"}],smsCodeInput:[{validator:(e,s,a)=>{l.smsCodeCanSend?a():a(new Error("SmsCode don't match!"))},trigger:"blur"}]}),D=m();return(e,c)=>{var m=s,p=P,g=a,k=U,S=t,G=o,H=b("router-link"),J=n;return d(),r("div",N,[f(J,{ref_key:"ruleFormRef",ref:D,model:C(l),"label-position":"top",rules:C(B)},{default:h((()=>[u("div",M,[f(m),F,u("div",L,[f(g,{label:"Phone number"},{default:h((()=>[f(p,{modelValue:C(l).username,"onUpdate:modelValue":c[0]||(c[0]=e=>C(l).username=e)},null,8,["modelValue"])])),_:1}),f(g,{label:"Password",prop:"password"},{default:h((()=>[f(p,{modelValue:C(l).password,"onUpdate:modelValue":c[1]||(c[1]=e=>C(l).password=e),type:"password",autocomplete:"off"},null,8,["modelValue"])])),_:1}),f(g,{label:"Confirm",prop:"checkPass"},{default:h((()=>[f(p,{modelValue:C(l).checkPass,"onUpdate:modelValue":c[2]||(c[2]=e=>C(l).checkPass=e),type:"password",autocomplete:"off"},null,8,["modelValue"])])),_:1}),f(g,{label:"nickName"},{default:h((()=>[f(p,{modelValue:C(l).nickName,"onUpdate:modelValue":c[3]||(c[3]=e=>C(l).nickName=e)},null,8,["modelValue"])])),_:1}),f(g,{prop:"smsCodeInput"},{default:h((()=>[f(G,{visible:C(l).smsCodeVisible,placement:"top"},{reference:h((()=>[f(S,{id:"verify",class:y("text-github_a mb-1"),disabled:C(l).smsCodeCanSend,onClick:C(I)},{default:h((()=>[u("span",{class:y(C(l).smsCodeCanSend?"text-green-500":"")},[v(w(C(l).smsCodeTip)+" ",1),_(f(k,null,null,512),[[j,C(l).smsCodeCanSend]])],2)])),_:1},8,["disabled","onClick"])])),default:h((()=>[u("div",T,[u("img",{src:C(l).smsCode},null,8,A)])])),_:1},8,["visible"]),f(p,{modelValue:C(l).smsCodeInput,"onUpdate:modelValue":c[4]||(c[4]=e=>C(l).smsCodeInput=e),modelModifiers:{trim:!0},class:"w-8",disabled:!C(l).smsCodeVisible,onFocus:c[5]||(c[5]=e=>i(!0)),onInput:c[6]||(c[6]=e=>{var s;""!=l.smsCodeInput&&4==l.smsCodeInput.length&&(null===(s=l.captcha)||void 0===s||s.verify(l.smsCodeInput).then((e=>{i(!1),l.smsCodeCanSend=!0,l.smsCodeVisible=!1}),(e=>{"800"==e.code?I():x.error(e.rawMessage)})).catch((e=>{x.error(e)})))})},null,8,["modelValue","disabled"])])),_:1}),f(g,null,{default:h((()=>[f(S,{class:"w-full rounded-2xl shadow-github_button",color:"#2da44e",type:"primary",onClick:c[7]||(c[7]=e=>{var s;(s=C(D))&&s.validate((e=>{if(!e)return!1;V()(l.username,l.password).then((e=>{x.success("注册成功"),E.push("login"),e.id}),(e=>{x.error(`注册失败：${e.rawMessage||e.response.data}`)}))}))})},{default:h((()=>[v("Sign up")])),_:1})])),_:1})]),u("div",R,[v(" Already have an account? "),u("a",Z,[f(H,{to:"login"},{default:h((()=>[v(" Sign in → ")])),_:1})]),v(" . ")])])])),_:1},8,["model","rules"])])}}}));"function"==typeof I&&I(B)}}}));
