System.register(["./index-legacy.67a8c80e.js","./base-legacy.983574b6.js","./input-legacy.3a43dd41.js","./index-legacy.fbe303ad.js","./event-legacy.7722cbb2.js","./index-legacy.3313e95a.js","./index-legacy.ff8623c8.js","./isNil-legacy.e248952d.js"],(function(e,l){"use strict";var n,s,t,a,u,r,i,o,c,d,p,y;return{setters:[e=>{n=e.d,s=e.bx,t=e.m,a=e.a,u=e.b,r=e.t,i=e.e,o=e.f,c=e.Z,d=e.i,p=e.h},null,null,e=>{y=e.E},null,null,null,null],execute:function(){const l={class:"flex items-center justify-center flex-col"},v={class:"w-80"},g=d(" Supported: "),m=u("p",null,"Please open this page in at least two tabs",-1),j={key:0,class:"w-80"},x={key:0},b={key:1},f={key:1};e("default",n({__name:"diamond",setup(e){const n=s({name:"vueuse-demo-channel"}),d=n.isSupported,w=n.data,h=n.post,k=n.error,S=t("");return(e,n)=>{const s=y;return p(),a("div",l,[u("div",v,[u("p",null,[g,u("b",null,r(i(d)),1)]),m]),i(d)?(p(),a("div",j,[o(s,{modelValue:S.value,"onUpdate:modelValue":n[0]||(n[0]=e=>S.value=e),onInput:n[1]||(n[1]=e=>i(h)(S.value))},null,8,["modelValue"]),i(w)?(p(),a("p",x,"received: "+r(i(w)),1)):c("",!0),i(k)?(p(),a("p",b,"error: "+r(i(k)),1)):c("",!0)])):(p(),a("div",f," Aww, snap! The Broadcast Channel Web API is not supported in your browser. "))])}}}))}}}));