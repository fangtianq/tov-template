System.register(["./index-legacy.2b5b3f6c.js","./foo-legacy.91604c54.js"],(function(t){"use strict";var e,a,n,l,o,i,u,s,r,c,d,g,v,h,f,p,b,k,m;return{setters:[function(t){e=t.ag,a=t.ah,n=t.d,l=t.ai,o=t.aj,i=t.v,u=t.o,s=t.ak,r=t.a,c=t.c,d=t.b,g=t.t,v=t.i,h=t.g,f=t.h,p=t.F,b=t.C,k=t.a2},function(t){m=t.f}],execute:function(){const C=e(),_=a(C);var j=()=>({isDark:C,toggleDark:_});const y={class:"m-6"},z=b("go >> test"),D=b("go >> about"),$=b("go >> pinia"),x=b("go >> 青铜(须登录)");t("default",n({__name:"Index",setup(t){l("TestObject").find().then((t=>{}));const e=o(),a=e.t,n=e.locale,b=j(),C=b.isDark,_=b.toggleDark,N=m.append,O=i((()=>"zh-CN"===n.value?"中文":"English")),T=i((()=>C.value?"dark":"light"));u((()=>{}));const E=s.全局变量();return(t,e)=>{const l=k("router-link");return r(),c(p,null,[d("div",y,"Hello，This is the tov template！！"+g(v(E)),1),d("div",{class:"cursor-pointer m-6",onClick:e[0]||(e[0]=t=>v(_)())},"theme: "+g(v(T)),1),d("div",{class:"cursor-pointer mt-6 ml-6",onClick:e[1]||(e[1]=t=>{n.value="zh-CN"===n.value?"en":"zh-CN"})},[d("div",null,"language: "+g(v(O)),1),d("div",null,"base: "+g(v(a)("about")),1),d("div",null,"nesting: "+g(v(a)("nesting.sir"))+" "+g(v(a)("nesting.lady")),1),d("div",null,[h(l,{to:v(N)(t.$route.path,"test")},{default:f((()=>[z])),_:1},8,["to"])]),d("div",null,[h(l,{to:v(N)(t.$route.path,"about")},{default:f((()=>[D])),_:1},8,["to"])]),d("div",null,[h(l,{to:v(N)(t.$route.path,"demo/user/pinia")},{default:f((()=>[$])),_:1},8,["to"])]),d("div",null,[h(l,{to:v(N)(t.$route.path,"pri/arenaOfValor/bronze")},{default:f((()=>[x])),_:1},8,["to"])])])],64)}}}))}}}));
