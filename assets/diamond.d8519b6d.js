import{d as m,M as v,l as f,e as t,f as n,k as h,t as l,h as e,i as k,N as u,r as y,j as s}from"./index.1f85ee33.js";const V={class:"flex items-center justify-center flex-col"},w={class:"w-80"},x=n("p",null,"Please open this page in at least two tabs",-1),B={key:0,class:"w-80"},C={key:0},N={key:1},b={key:1},A=m({__name:"diamond",setup(g){const{isSupported:r,data:d,post:c,error:i}=v({name:"vueuse-demo-channel"}),a=f("");return(S,o)=>{const _=y("el-input");return s(),t("div",V,[n("div",w,[n("p",null,[h(" Supported: "),n("b",null,l(e(r)),1)]),x]),e(r)?(s(),t("div",B,[k(_,{modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=p=>a.value=p),onInput:o[1]||(o[1]=p=>e(c)(a.value))},null,8,["modelValue"]),e(d)?(s(),t("p",C,"received: "+l(e(d)),1)):u("",!0),e(i)?(s(),t("p",N,"error: "+l(e(i)),1)):u("",!0)])):(s(),t("div",b," Aww, snap! The Broadcast Channel Web API is not supported in your browser. "))])}}});export{A as default};