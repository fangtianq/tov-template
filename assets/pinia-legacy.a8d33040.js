System.register(["./index-legacy.df3de3de.js"],(function(e){"use strict";var t,s,n,i,a,c,r,l;return{setters:[function(e){t=e.a3,s=e.d,n=e.a4,i=e.f,a=e.h,c=e.i,r=e.t,l=e.j}],execute:function(){const d=t("myConst",{state:()=>({msg:"hello"}),getters:{},actions:{changeState(e){this.msg=e.msg}},persist:{enabled:!0}}),m={class:"flex flex-col text-red-500 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6"},u=["id"];e("default",s({__name:"pinia",setup(e){let t=d(),s=n(d()).msg,o=()=>{t.changeState({msg:"ssss"})},f=()=>{t.$reset()};return(e,t)=>(i(),a("div",m,[c("div",{id:l(s),onClick:t[0]||(t[0]=function(){return l(o)&&l(o)(...arguments)})},r(l("点击切换pinia的值")),9,u),c("div",{onClick:t[1]||(t[1]=function(){return l(f)&&l(f)(...arguments)})},r(l("点击重置pinia的值")),1),c("div",null,"pinia数据:"+r(l(s)),1)]))}}))}}}));
