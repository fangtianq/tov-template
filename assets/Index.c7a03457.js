import{u as h,a as f,d as C,b as D,c,r as F,o as N,e as b,f as e,t as s,g as t,h as u,w as r,F as x,i}from"./index.7a5ae088.js";const d=h(),z=f(d);var B=()=>({isDark:d,toggleDark:z});const E=e("div",{class:"m-6"},"Hello\uFF0CThis is the tov template\uFF01\uFF01",-1),T=i("go >> test"),V=i("go >> about"),q=i("go >> fangtq"),$=C({__name:"Index",setup(w){const{t:n,locale:a}=D(),{isDark:g,toggleDark:m}=B(),v=()=>{a.value=a.value==="zh-CN"?"en":"zh-CN"},_=c(()=>a.value==="zh-CN"?"\u4E2D\u6587":"English"),p=c(()=>g.value?"dark":"light");return(y,o)=>{const l=F("router-link");return N(),b(x,null,[E,e("div",{class:"cursor-pointer m-6",onClick:o[0]||(o[0]=k=>t(m)())},"theme: "+s(t(p)),1),e("div",{class:"cursor-pointer mt-6 ml-6",onClick:o[1]||(o[1]=k=>v())},[e("div",null,"language: "+s(t(_)),1),e("div",null,"base: "+s(t(n)("about")),1),e("div",null,"nesting: "+s(t(n)("nesting.sir"))+" "+s(t(n)("nesting.lady")),1),e("div",null,[u(l,{to:"/test"},{default:r(()=>[T]),_:1})]),e("div",null,[u(l,{to:"/about"},{default:r(()=>[V]),_:1})]),e("div",null,[u(l,{to:"/demo/user/fangtq"},{default:r(()=>[q]),_:1})])])],64)}}});export{$ as default};
