System.register(["./index-legacy.59b70af2.js","./useDarks-legacy.17a42e25.js"],(function(t,e){"use strict";var l,a,n,o,u,i,s,r,d,c,g,v,h,p,f,m,b,k;return{setters:[t=>{l=t.d,a=t.q,n=t.u,o=t.c,u=t.o,i=t.g,s=t.a,r=t.b,d=t.t,c=t.e,g=t.f,v=t.w,h=t.F,p=t.r,f=t.h,m=t.i,b=t.j},t=>{k=t.u}],execute:function(){const e={class:"m-6"},_=m("go >> test"),C=m("go >> about"),j=m("go >> pinia"),y=m("go >> 青铜(须登录)");t("default",l({__name:"index",setup(t){a()("TestObject").then((t=>{}));const l=n(),m=l.t,z=l.locale,$=k(),x=$.isDark,D=$.toggleDark,N=b.append,O=o((()=>"zh-CN"===z.value?"中文":"English")),T=o((()=>x.value?"dark":"light"));u((()=>{}));const q=i.全局变量();return(t,l)=>{const a=p("router-link");return f(),s(h,null,[r("div",e,"Hello，This is the tov template！！"+d(c(q)),1),r("div",{class:"cursor-pointer m-6",onClick:l[0]||(l[0]=t=>c(D)())},"theme: "+d(c(T)),1),r("div",{class:"cursor-pointer mt-6 ml-6",onClick:l[1]||(l[1]=t=>{z.value="zh-CN"===z.value?"en":"zh-CN"})},[r("div",null,"language: "+d(c(O)),1),r("div",null,"base: "+d(c(m)("about")),1),r("div",null,"nesting: "+d(c(m)("nesting.sir"))+" "+d(c(m)("nesting.lady")),1),r("div",null,[g(a,{to:c(N)(t.$route.path,"test")},{default:v((()=>[_])),_:1},8,["to"])]),r("div",null,[g(a,{to:c(N)(t.$route.path,"about")},{default:v((()=>[C])),_:1},8,["to"])]),r("div",null,[g(a,{to:c(N)(t.$route.path,"demo/user/pinia")},{default:v((()=>[j])),_:1},8,["to"])]),r("div",null,[g(a,{to:c(N)(t.$route.path,"pri/arenaOfValor/bronze")},{default:v((()=>[y])),_:1},8,["to"])])])],64)}}}))}}}));
