import{d as _,bd as f,l as h,e as t,f as n,k as v,t as r,h as e,i as k,J as u,j as o}from"./index.f34240a3.js";import{E as y}from"./el-input.2c599987.js";import"./index.1bb8179e.js";import"./error.7e8331f1.js";const V={class:"flex items-center justify-center flex-col"},w={class:"w-80"},b=n("p",null,"Please open this page in at least two tabs",-1),x={key:0,class:"w-80"},B={key:0},C={key:1},N={key:1},P=_({__name:"diamond",setup(g){const{isSupported:l,data:d,post:c,error:i}=f({name:"vueuse-demo-channel"}),a=h("");return(E,s)=>{const m=y;return o(),t("div",V,[n("div",w,[n("p",null,[v(" Supported: "),n("b",null,r(e(l)),1)]),b]),e(l)?(o(),t("div",x,[k(m,{modelValue:a.value,"onUpdate:modelValue":s[0]||(s[0]=p=>a.value=p),onInput:s[1]||(s[1]=p=>e(c)(a.value))},null,8,["modelValue"]),e(d)?(o(),t("p",B,"received: "+r(e(d)),1)):u("",!0),e(i)?(o(),t("p",C,"error: "+r(e(i)),1)):u("",!0)])):(o(),t("div",N," Aww, snap! The Broadcast Channel Web API is not supported in your browser. "))])}}});export{P as default};
