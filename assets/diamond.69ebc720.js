import{d as _,be as f,m as h,a as t,b as a,i as v,t as r,e,f as b,bf as y,$ as u,h as o}from"./index.e2680d94.js";/* empty css             */import{E as V}from"./input.6cc53ceb.js";import"./event.776e7e11.js";import"./index.2331036c.js";import"./index.1f13e4e9.js";import"./error.7e8331f1.js";import"./isNil.98bb3b88.js";const k={class:"flex items-center justify-center flex-col"},w={class:"w-80"},x=a("p",null,"Please open this page in at least two tabs",-1),B={key:0,class:"w-80"},C={key:0},N={key:1},g={key:1},U=_({__name:"diamond",setup(E){const{isSupported:i,data:l,post:m,error:p}=f({name:"vueuse-demo-channel"}),s=h("");return(I,n)=>{const c=V;return o(),t("div",k,[a("div",w,[a("p",null,[v(" Supported: "),a("b",null,r(e(i)),1)]),x]),e(i)?(o(),t("div",B,[b(c,{modelValue:e(s),"onUpdate:modelValue":n[0]||(n[0]=d=>y(s)?s.value=d:null),onInput:n[1]||(n[1]=d=>e(m)(e(s)))},null,8,["modelValue"]),e(l)?(o(),t("p",C,"received: "+r(e(l)),1)):u("",!0),e(p)?(o(),t("p",N,"error: "+r(e(p)),1)):u("",!0)])):(o(),t("div",g," Aww, snap! The Broadcast Channel Web API is not supported in your browser. "))])}}});export{U as default};
