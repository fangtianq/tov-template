System.register(["./index-legacy.d974566c.js","./el-input-legacy.ab2ec05c.js","./el-popover-legacy.7a69ae3e.js","./el-popper-legacy.c41dd7f6.js","./el-button-legacy.65c7019b.js","./favicon-legacy.0f209190.js","./route-block-legacy.416ddcc8.js","./index-legacy.ca9b60ce.js","./isNil-legacy.e59e30e8.js","./index-legacy.4248481f.js"],(function(e){"use strict";var s,l,a,o,t,n,r,d,i,u,c,m,p,f,b,g,h,C,v,w,y,_,x,V,k,j;return{setters:[function(e){s=e.e,l=e.f,a=e.h,o=e.d,t=e.al,n=e.l,r=e.an,d=e.j,i=e.w,u=e.J,c=e.i,m=e.k,p=e.t,f=e.p,b=e.a8,g=e.bd,h=e.m,C=e.ar,v=e.be},function(e){w=e.E,y=e.a,_=e.b},function(e){x=e.E},function(){},function(e){V=e.E},function(e){k=e._},function(e){j=e.b},function(){},function(){},function(){}],execute:function(){const P={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},S=[a("path",{fill:"currentColor",d:"M21 7L9 19l-5.5-5.5l1.41-1.41L9 16.17L19.59 5.59L21 7Z"},null,-1)];var I={name:"mdi-check",render:function(e,a){return s(),l("svg",P,S)}};const E={class:"bg-white h-screen font-github"},M={class:"flex justify-center items-center flex-col"},L=a("div",{class:"p-8"},[a("img",{src:k,class:"w-12 h-12",alt:"tov"})],-1),U=a("div",{class:"font-300 text-2xl tracking-github mb-4"}," Sign up to tov-template ",-1),F={class:"h-98 w-77 bg-github_bg border-github_b rounded-xl border-1 p-4"},T={class:"w-max h-max cursor-pointer"},A=["src"],R=m("Sign up"),B=a("div",{class:"mt-3 w-77 bg-white border-github_b rounded-xl border-1 p-4"},[m(" Already have an account? "),a("a",{href:"login",class:"text-github_a"}," Sign in → "),m(" . ")],-1),J=e("default",o({__name:"signup",setup(e){const o=t({username:"",password:"",checkPass:"",smsCodeInput:"",smsCode:"",smsCodeVisible:!1,smsCodeCanSend:!1,smsCodeTip:"刷新验证码",captcha:n()}),k=e=>{o.smsCodeVisible=e},j=r.debounce((()=>{k(!0),o.smsCodeCanSend=!1,g().then((e=>{o.smsCode=e.url,o.captcha=e}))}),1e3,{leading:!0,trailing:!1}),P=h(),S=t({password:[{validator:(e,s,l)=>{if(""===s)l(new Error("Please input the password"));else{if(""!==o.checkPass){if(!J.value)return;J.value.validateField("checkPass",(()=>null))}l()}},trigger:"blur"}],checkPass:[{validator:(e,s,l)=>{""===s?l(new Error("Please input the password again")):s!==o.password?l(new Error("Two inputs don't match!")):l()},trigger:"blur"}],smsCodeInput:[{validator:(e,s,l)=>{o.smsCodeCanSend?l():l(new Error("SmsCode don't match!"))},trigger:"blur"}]}),J=n();return(e,t)=>{const n=w,r=y,g=I,h=V,N=x,Y=_;return s(),l("div",E,[d(Y,{ref_key:"ruleFormRef",ref:J,model:o,"label-position":"top",rules:S},{default:i((()=>[a("div",M,[L,U,a("div",F,[d(r,{label:"Phone number"},{default:i((()=>[d(n,{modelValue:o.username,"onUpdate:modelValue":t[0]||(t[0]=e=>o.username=e)},null,8,["modelValue"])])),_:1}),d(r,{label:"Password",prop:"password"},{default:i((()=>[d(n,{modelValue:o.password,"onUpdate:modelValue":t[1]||(t[1]=e=>o.password=e),type:"password",autocomplete:"off"},null,8,["modelValue"])])),_:1}),d(r,{label:"Confirm",prop:"checkPass"},{default:i((()=>[d(n,{modelValue:o.checkPass,"onUpdate:modelValue":t[2]||(t[2]=e=>o.checkPass=e),type:"password",autocomplete:"off"},null,8,["modelValue"])])),_:1}),d(r,{prop:"smsCodeInput"},{default:i((()=>[d(N,{visible:o.smsCodeVisible,placement:"top"},{reference:i((()=>[d(h,{id:"verify",class:u("text-github_a mb-1"),onClick:c(j)},{default:i((()=>[a("span",{class:u(o.smsCodeCanSend?"text-green-500":"")},[m(p(o.smsCodeTip)+" ",1),f(d(g,null,null,512),[[b,o.smsCodeCanSend]])],2)])),_:1},8,["onClick"])])),default:i((()=>[a("div",T,[a("img",{src:o.smsCode},null,8,A)])])),_:1},8,["visible"]),d(n,{modelValue:o.smsCodeInput,"onUpdate:modelValue":t[3]||(t[3]=e=>o.smsCodeInput=e),modelModifiers:{trim:!0},class:"w-8",disabled:!o.smsCodeVisible,onFocus:t[4]||(t[4]=e=>k(!0)),onInput:t[5]||(t[5]=e=>{var s;""!=o.smsCodeInput&&4==o.smsCodeInput.length&&(null===(s=o.captcha)||void 0===s||s.verify(o.smsCodeInput).then((e=>{k(!1),o.smsCodeCanSend=!0,o.smsCodeVisible=!1}),(e=>{800==e.code?j():C.error(e.rawMessage)})).catch((e=>{C.error(e)})))})},null,8,["modelValue","disabled"])])),_:1}),d(r,null,{default:i((()=>[d(h,{class:"w-full rounded-2xl shadow-github_button",color:"#2da44e",type:"primary",onClick:t[6]||(t[6]=e=>{var s;(s=J.value)&&s.validate((e=>{if(!e)return!1;v(o.username,o.password).then((e=>{C.success("注册成功"),P.push("login")}),(e=>{C.error(`注册失败：${e.rawMessage}`)}))}))})},{default:i((()=>[R])),_:1})])),_:1})]),B])])),_:1},8,["model","rules"])])}}}));"function"==typeof j&&j(J)}}}));
