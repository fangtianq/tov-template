System.register(["./index-legacy.a5c0605c.js","./route-block-legacy.193b33bd.js"],(function(e){"use strict";var t,s,n,i,c,a,r,l,o;return{setters:[function(e){t=e.q,s=e.d,n=e.s,i=e.a,c=e.c,a=e.b,r=e.t,l=e.j},function(e){o=e.b}],execute:function(){const u=t("myConst",{state:()=>({msg:"hello"}),getters:{},actions:{changeState(e){this.msg=e.msg}},persist:{enabled:!0}}),m={class:"flex flex-col text-red-500 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6"},d=["id"],f=e("default",s({__name:"pinia",setup(e){let t=u(),s=n(u()).msg,o=()=>{t.changeState({msg:"ssss"})},f=()=>{t.$reset()};return(e,t)=>(i(),c("div",m,[a("div",{id:l(s),onClick:t[0]||(t[0]=function(){return l(o)&&l(o)(...arguments)})},r(l("点击切换pinia的值")),9,d),a("div",{onClick:t[1]||(t[1]=function(){return l(f)&&l(f)(...arguments)})},r(l("点击重置pinia的值")),1),a("div",null,"pinia数据:"+r(l(s)),1)]))}}));"function"==typeof o&&o(f)}}}));
