import{d as _,bv as f,m as h,a as t,b as n,t as r,e,f as v,Z as u,i as y,h as o}from"./index.9c1a4eb1.js";/* empty css             *//* empty css              */import{E as V}from"./index.7aa7227b.js";import"./event.ff07fee5.js";import"./index.f5175b3b.js";import"./index.46b85885.js";import"./error.52cb36a5.js";import"./isNil.aac33454.js";const b={class:"flex items-center justify-center flex-col"},k={class:"w-80"},w=y(" Supported: "),x=n("p",null,"Please open this page in at least two tabs",-1),B={key:0,class:"w-80"},C={key:0},N={key:1},g={key:1},$=_({__name:"diamond",setup(E){const{isSupported:i,data:l,post:m,error:p}=f({name:"vueuse-demo-channel"}),a=h("");return(I,s)=>{const c=V;return o(),t("div",b,[n("div",k,[n("p",null,[w,n("b",null,r(e(i)),1)]),x]),e(i)?(o(),t("div",B,[v(c,{modelValue:a.value,"onUpdate:modelValue":s[0]||(s[0]=d=>a.value=d),onInput:s[1]||(s[1]=d=>e(m)(a.value))},null,8,["modelValue"]),e(l)?(o(),t("p",C,"received: "+r(e(l)),1)):u("",!0),e(p)?(o(),t("p",N,"error: "+r(e(p)),1)):u("",!0)])):(o(),t("div",g," Aww, snap! The Broadcast Channel Web API is not supported in your browser. "))])}}});export{$ as default};
