System.register(["./index-legacy.a5c0605c.js"],(function(t){"use strict";var e,n,l,i,u,a,o,s,r,c,d,g,v,h,m;return{setters:[function(t){e=t.f,n=t.g,l=t.d,i=t.h,u=t.i,a=t.a,o=t.c,s=t.b,r=t.t,c=t.j,d=t.k,g=t.w,v=t.F,h=t.l,m=t.m}],execute:function(){const f=e(),k=n(f);var p=()=>({isDark:f,toggleDark:k}),b=function(t,e){return t+(t.endsWith("/")?"":"/")+e};const C=s("div",{class:"m-6"},"Hello，This is the tov template！！",-1),_=m("go >> test"),D=m("go >> about"),x=m("go >> pinia");t("default",l({__name:"index",setup(t){const e=i(),n=e.t,l=e.locale,m=p(),f=m.isDark,k=m.toggleDark,y=b,z=u((()=>"zh-CN"===l.value?"中文":"English")),N=u((()=>f.value?"dark":"light"));return(t,e)=>{const i=h("router-link");return a(),o(v,null,[C,s("div",{class:"cursor-pointer m-6",onClick:e[0]||(e[0]=t=>c(k)())},"theme: "+r(c(N)),1),s("div",{class:"cursor-pointer mt-6 ml-6",onClick:e[1]||(e[1]=t=>{l.value="zh-CN"===l.value?"en":"zh-CN"})},[s("div",null,"language: "+r(c(z)),1),s("div",null,"base: "+r(c(n)("about")),1),s("div",null,"nesting: "+r(c(n)("nesting.sir"))+" "+r(c(n)("nesting.lady")),1),s("div",null,[d(i,{to:c(y)(t.$route.path,"test")},{default:g((()=>[_])),_:1},8,["to"])]),s("div",null,[d(i,{to:c(y)(t.$route.path,"about")},{default:g((()=>[D])),_:1},8,["to"])]),s("div",null,[d(i,{to:c(y)(t.$route.path,"demo/user/pinia")},{default:g((()=>[x])),_:1},8,["to"])])])],64)}}}))}}}));
