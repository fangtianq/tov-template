import{u as D,a as F,d as b,q as N,b as $,c as p,o as y,g as B,e as q,f as z,h as t,t as o,i as e,j as l,w as r,F as T,k as i,r as V}from"./index.a5ffe1ae.js";import{f as E}from"./foo.789ad9ce.js";const g=D(),j=F(g);var w=()=>({isDark:g,toggleDark:j});const O={class:"m-6"},S=i("go >> test"),x=i("go >> about"),H=i("go >> pinia"),I=i("go >> \u9752\u94DC(\u987B\u767B\u5F55)"),G=b({__name:"index",setup(L){N("TestObject").find().then(s=>{});const{t:d,locale:c}=$(),{isDark:m,toggleDark:v}=w(),h=()=>{c.value=c.value==="zh-CN"?"en":"zh-CN"},a=E.append,_=p(()=>c.value==="zh-CN"?"\u4E2D\u6587":"English"),C=p(()=>m.value?"dark":"light");y(()=>{});const f=B.\u5168\u5C40\u53D8\u91CF();return(s,n)=>{const u=V("router-link");return q(),z(T,null,[t("div",O,"Hello\uFF0CThis is the tov template\uFF01\uFF01"+o(e(f)),1),t("div",{class:"cursor-pointer m-6",onClick:n[0]||(n[0]=k=>e(v)())},"theme: "+o(e(C)),1),t("div",{class:"cursor-pointer mt-6 ml-6",onClick:n[1]||(n[1]=k=>h())},[t("div",null,"language: "+o(e(_)),1),t("div",null,"base: "+o(e(d)("about")),1),t("div",null,"nesting: "+o(e(d)("nesting.sir"))+" "+o(e(d)("nesting.lady")),1),t("div",null,[l(u,{to:e(a)(s.$route.path,"test")},{default:r(()=>[S]),_:1},8,["to"])]),t("div",null,[l(u,{to:e(a)(s.$route.path,"about")},{default:r(()=>[x]),_:1},8,["to"])]),t("div",null,[l(u,{to:e(a)(s.$route.path,"demo/user/pinia")},{default:r(()=>[H]),_:1},8,["to"])]),t("div",null,[l(u,{to:e(a)(s.$route.path,"pri/arenaOfValor/bronze")},{default:r(()=>[I]),_:1},8,["to"])])])],64)}}});export{G as default};