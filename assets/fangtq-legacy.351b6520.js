System.register(["./index-legacy.035a4dce.js"],(function(e){"use strict";var t,s,n,i,c,a,r,l;return{setters:[function(e){t=e.p,s=e.d,n=e.s,i=e.a,c=e.c,a=e.b,r=e.t,l=e.i}],execute:function(){const m=t("myConst",{state:()=>({msg:"hello"}),getters:{},actions:{changeState(e){this.msg=e.msg}},persist:{enabled:!0}}),u={class:"flex flex-col text-red-500 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6"},d=["id"];e("default",s({__name:"fangtq",setup(e){let t=m(),s=n(m()).msg,o=()=>{t.changeState({msg:"ssss"})},g=()=>{t.$reset()};return(e,t)=>(i(),c("div",u,[a("div",{id:l(s),onClick:t[0]||(t[0]=function(){return l(o)&&l(o)(...arguments)})},r(l("点击切换pinia的值")),9,d),a("div",{onClick:t[1]||(t[1]=function(){return l(g)&&l(g)(...arguments)})},r(l("点击重置pinia的值")),1),a("div",null,"pinia数据:"+r(l(s)),1)]))}}))}}}));
