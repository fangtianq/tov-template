import{d as C,u as b,c,o as N,g as $,r as z,a as D,b as V,e as t,t as o,f as e,h as i,w as r,F as B,i as w,j as u}from"./index-e6abbe05.js";import{u as E}from"./useDarks-1aa04b8b.js";const F={class:"m-6"},T=u("go >> test"),j=u("go >> about"),x=u("go >> pinia"),y=u("go >> 青铜(须登录)"),M=C({__name:"index",setup(H){const{t:d,locale:p}=b(),{isDark:g,toggleDark:m}=E(),v=()=>{p.value=p.value==="zh-CN"?"en":"zh-CN"},s=w.append,_=c(()=>p.value==="zh-CN"?"中文":"English"),h=c(()=>g.value?"dark":"light");N(()=>{});const f=$.全局变量();return(n,a)=>{const l=z("router-link");return D(),V(B,null,[t("div",F,"Hello，This is the tov template！！"+o(e(f)),1),t("div",{class:"cursor-pointer m-6",onClick:a[0]||(a[0]=k=>e(m)())},"theme: "+o(e(h)),1),t("div",{class:"cursor-pointer mt-6 ml-6",onClick:a[1]||(a[1]=k=>v())},[t("div",null,"language: "+o(e(_)),1),t("div",null,"base: "+o(e(d)("about")),1),t("div",null,"nesting: "+o(e(d)("nesting.sir"))+" "+o(e(d)("nesting.good")),1),t("div",null,[i(l,{to:e(s)(n.$route.path,"test")},{default:r(()=>[T]),_:1},8,["to"])]),t("div",null,[i(l,{to:e(s)(n.$route.path,"about")},{default:r(()=>[j]),_:1},8,["to"])]),t("div",null,[i(l,{to:e(s)(n.$route.path,"demo/user/pinia")},{default:r(()=>[x]),_:1},8,["to"])]),t("div",null,[i(l,{to:e(s)(n.$route.path,"pri/arenaOfValor/bronze")},{default:r(()=>[y]),_:1},8,["to"])])])],64)}}});export{M as default};
