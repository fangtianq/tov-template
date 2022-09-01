System.register(["./index-legacy.86089006.js","./lodash-legacy.280693a8.js","./favicon-legacy.00d145ca.js","./el-popover-legacy.6573060a.js","./el-popper-legacy.500630b1.js","./route-block-legacy.193b33bd.js","./plugin-vue_export-helper-legacy.dc3f4677.js","./index-legacy.1aa170c6.js","./icon-legacy.438e31bf.js"],(function(e){"use strict";var l,a,s,o,t,n,r,u,d,c,i,p,m,f,g,h,b,v,w,y,_,C,x,V;return{setters:[function(e){l=e.e,a=e.f,s=e.h,o=e.d,t=e.o,n=e.a1,r=e.m,u=e.j,d=e.w,c=e.C,i=e.q,p=e.R,m=e.k,f=e.n},function(e){g=e.c,h=e.s},function(e){b=e.E,v=e.a,w=e.b,y=e.c,_=e._,C=e.d},function(e){x=e.E},function(){},function(e){V=e.b},function(){},function(){},function(){}],execute:function(){const k={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},j=[s("path",{fill:"currentColor",d:"m13.3 19.26l5.66-5.65l2.12 2.12l-5.66 5.65l-2.12-2.12m3.2-8.13l-3.1-3.08a1.68 1.68 0 0 0-.4-.29l-1.12-4.29a1.001 1.001 0 0 0-1.94.49L11 8.03L8.67 3.19c-.23-.5-.83-.69-1.33-.48c-.5.24-.71.84-.47 1.34l1.69 3.54l-3.37-3.34c-.39-.39-1.03-.39-1.42 0c-.39.4-.38 1.03.01 1.42l3.72 3.7l-.7.27l-1.08.43l-1.91 1.32s-.81 1.05-.88 1.5c-.08.45.79 2.71.79 2.71h.01c.16.34.5.58.9.58a1 1 0 0 0 1-1c0-.1-.03-.18-.06-.27l.02-.01L5 13.17l1.23-.98c.47.02 1.48.1 1.97.13c2.73 2.45.15 3.41.15 3.41l-3.46 1.06l-.17.14a.94.94 0 0 0-.3.75l.02 1.07l6.43-.5c.38.01.74-.13 1.02-.4l4.61-4.6c.53-.54.55-1.55 0-2.12Z"},null,-1)];var P={name:"mdi-hand-okay",render:function(e,s){return l(),a("svg",k,j)}};const E={class:"bg-white h-screen font-github"},S={class:"flex justify-center items-center flex-col"},I=s("div",{class:"p-8"},[s("img",{src:_,class:"w-12 h-12",alt:"tov"})],-1),M=s("div",{class:"font-300 text-2xl tracking-github mb-4"}," Sign up to tov-template ",-1),U={class:"h-98 w-77 bg-github_bg border-github_b rounded-xl border-1 p-4"},F=m(" 输入验证码 "),L=["src"],R=m("Sign up"),A=s("div",{class:"mt-3 w-77 bg-white border-github_b rounded-xl border-1 p-4"},[m(" Already have an account? "),s("a",{href:"login",class:"text-github_a"}," Sign in → "),m(" . ")],-1),B=e("default",o({__name:"signup",setup(e){t((()=>{m()}));const o=n({username:"",password:"",checkPass:"",smsCodeInput:"",smsCode:"",smsCodeVisible:!1,smsCodeCanSend:!1,captcha:r(),loading:!0}),m=()=>{g().then((e=>{o.smsCode=e.url,o.captcha=e}))},_=f(),V=n({password:[{validator:(e,l,a)=>{if(""===l)a(new Error("Please input the password"));else{if(""!==o.checkPass){if(!k.value)return;k.value.validateField("checkPass",(()=>null))}a()}},trigger:"blur"}],checkPass:[{validator:(e,l,a)=>{""===l?a(new Error("Please input the password again")):l!==o.password?a(new Error("Two inputs don't match!")):a()},trigger:"blur"}]}),k=r();return(e,t)=>{const n=b,r=v,f=P,g=w,j=x,B=y;return l(),a("div",E,[u(B,{ref_key:"ruleFormRef",ref:k,model:o,"label-position":"top",rules:V},{default:d((()=>[s("div",S,[I,M,s("div",U,[u(r,{label:"Phone number"},{default:d((()=>[u(n,{modelValue:o.username,"onUpdate:modelValue":t[0]||(t[0]=e=>o.username=e)},null,8,["modelValue"])])),_:1}),u(r,{label:"Password",prop:"password"},{default:d((()=>[u(n,{modelValue:o.password,"onUpdate:modelValue":t[1]||(t[1]=e=>o.password=e),type:"password",autocomplete:"off"},null,8,["modelValue"])])),_:1}),u(r,{label:"Confirm",prop:"checkPass"},{default:d((()=>[u(n,{modelValue:o.checkPass,"onUpdate:modelValue":t[2]||(t[2]=e=>o.checkPass=e),type:"password",autocomplete:"off"},null,8,["modelValue"])])),_:1}),u(r,null,{default:d((()=>[u(j,{visible:o.smsCodeVisible,placement:"right"},{reference:d((()=>[u(g,{id:"verify",class:c("text-github_a mb-1"),disabled:"",loading:o.loading},{default:d((()=>[i(u(f,null,null,512),[[p,!o.loading]]),F])),_:1},8,["loading"])])),default:d((()=>[s("img",{src:o.smsCode,onClick:m},null,8,L)])),_:1},8,["visible"]),u(n,{modelValue:o.smsCodeInput,"onUpdate:modelValue":t[3]||(t[3]=e=>o.smsCodeInput=e),class:"w-8",onFocus:t[4]||(t[4]=e=>{return l=!0,void(o.smsCodeVisible=l);var l}),onBlur:t[5]||(t[5]=e=>{var l;o.loading&&(null===(l=o.captcha)||void 0===l||l.verify(o.smsCodeInput).then((e=>{o.loading=!1}),(e=>{800==e.code?m():C.error(e.rawMessage)})).catch((e=>{C.error(e)})))})},null,8,["modelValue"])])),_:1}),u(r,null,{default:d((()=>[u(g,{class:"w-full rounded-2xl shadow-github_button",color:"#2da44e",type:"primary",onClick:t[6]||(t[6]=e=>{var l;(l=k.value)&&l.validate((e=>{if(!e)return!1;h(o.username,o.password).then((e=>{C.success("注册成功"),_.push("login")}),(e=>{C.error(`注册失败：${e.rawMessage}`)}))}))})},{default:d((()=>[R])),_:1})])),_:1})]),A])])),_:1},8,["model","rules"])])}}}));"function"==typeof V&&V(B)}}}));
