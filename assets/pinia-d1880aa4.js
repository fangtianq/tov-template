import{d as u,a$ as a,aN as y,m as k,a as b,b as s,t as n,e,b0 as x,h as C}from"./index-3cd95e0c.js";const w={class:"flex flex-col text-red-500 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6"},B=["id"],T=u({__name:"pinia",setup(_){let g="点击切换pinia的值",h="点击重置pinia的值",o=a(),{msg:r}=y(a()),l=()=>{o.changeState({msg:"ssss"})},d=()=>{o.$reset()};a().$subscribe((p,t)=>{});const{on:v,emit:f}=x,c=["Su Bingtian broke the Asian record and entered the Olympic 100-meter race finals as the first person in China-RTHK","Comprehensive investigation in Zhengzhou to avoid further spread of the epidemic-RTHK","130 stroke experts after vaccination: nothing to do with the vaccine","China adds two gold medals in Olympic diving and weightlifting","Tokyo Olympic service provokes athletes sleeping in cardboard suitcases and eating canned food, reviewing the Beijing Olympics god-level arrangements"],m=k("");return v(p=>{m.value=c[Math.floor(Math.random()*c.length)]}),(p,t)=>(C(),b("div",w,[s("div",{id:e(r),onClick:t[0]||(t[0]=(...i)=>e(l)&&e(l)(...i))},n(e(g)),9,B),s("div",{onClick:t[1]||(t[1]=(...i)=>e(d)&&e(d)(...i))},n(e(h)),1),s("div",null,"pinia数据:"+n(e(r)),1),s("button",{class:"whitespace-nowrap",onClick:t[2]||(t[2]=i=>e(f)("sayHi","哈哈哈哈哈哈哈哈哈哈哈哈哈哈"))}," Broadcast "),s("div",null,n(m.value||"--- no signal ---"),1)]))}});export{T as default};
