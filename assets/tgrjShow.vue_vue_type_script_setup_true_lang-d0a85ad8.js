import{d as g,a as c,b as _,e as o,m as O,l as T,bY as U,ao as I,c3 as M,c as N,aO as h,o as E,c4 as F,bs as u,c5 as Z,p as q,q as f,f as d,X as p,j as G,t as K,h as y,a6 as L,bt as V,aP as Y}from"./index-020e6f8f.js";import{t as H,_ as P}from"./tongue-bb4d27b7.js";const R=()=>new Promise((r,n)=>{const s=document.createElement("script");s.type="text/javascript",s.charset="utf-8",s.async=!0,s.src="https://changyan.sohu.com/upload/changyan.js",s.onerror=n,s.onload=function(){window.changyan.api.config({appid:"cyw21b1ST",conf:"prod_d12b5b6925b0ef37e7b6a08c390ebc4e"})},document.head.appendChild(s)}),z=["sid"],A=g({__name:"changyan",props:{sid:{type:String,default:"ssss"}},setup(r){return R(),(n,s)=>(c(),_("div",null,[o("div",{id:"SOHUCS",sid:r.sid,class:""},null,8,z)]))}}),J={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Q=o("path",{fill:"currentColor",d:"M12 3C6.5 3 2 6.58 2 11a7.218 7.218 0 0 0 2.75 5.5c0 .6-.42 2.17-2.75 4.5c2.37-.11 4.64-1 6.47-2.5c1.14.33 2.34.5 3.53.5c5.5 0 10-3.58 10-8s-4.5-8-10-8m0 14c-4.42 0-8-2.69-8-6s3.58-6 8-6s8 2.69 8 6s-3.58 6-8 6Z"},null,-1),W=[Q];function X(r,n){return c(),_("svg",J,W)}const ee={name:"mdi-chat-outline",render:X},te={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},oe=o("path",{fill:"currentColor",d:"M12 3c5.5 0 10 3.58 10 8s-4.5 8-10 8c-1.24 0-2.43-.18-3.53-.5C5.55 21 2 21 2 21c2.33-2.33 2.7-3.9 2.75-4.5C3.05 15.07 2 13.13 2 11c0-4.42 4.5-8 10-8Z"},null,-1),ne=[oe];function se(r,n){return c(),_("svg",te,ne)}const ce={name:"mdi-chat",render:se},ie={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},ae=o("path",{fill:"currentColor",d:"m12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3Z"},null,-1),re=[ae];function le(r,n){return c(),_("svg",ie,re)}const _e={name:"mdi-cards-heart-outline",render:le},de={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},pe=o("path",{fill:"currentColor",d:"m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z"},null,-1),he=[pe];function ue(r,n){return c(),_("svg",de,he)}const me={name:"mdi-cards-heart",render:ue},ve={class:"flex items-center flex-col h-[calc(100vh-120px)]"},xe={class:"flex w-screen-2xl text-4xl pt-12 font-HYTiaoTiao z-10"},fe={class:"absolute bottom-46 w-screen h-200px flex justify-center items-center"},ye={title:"喜欢"},ge=["src"],Ce={title:"复制"},$e=g({__name:"tgrjShow",setup(r){const n=O(!1),s=T(n),{copy:C}=U(),k=()=>{C(e.content),Y.success("复制成功")},e=I({content:"",like:[],objectId:"",md5:"ssaa"}),w=M(async()=>await"tgrjShow.vue",""),$=N(()=>e.like.some(l=>l===h()().id));E(()=>{v()});const m=l=>{const t=V.Object.createWithoutData(u.FUCKDOG.name,e.objectId);if(l)e.like=[...e.like,h()().id];else{const i=e.like.findIndex(a=>a===h()().id);e.like.splice(i,1)}t.set(u.FUCKDOG.keys.like,e.like),t.save().then(i=>{})},v=()=>{const l=F()(u.FUCKDOG.name);l.count().then(t=>{l.skip(Z(t)).first().then(i=>{const a=i==null?void 0:i.toJSON();e.content=a.content,e.like=a.like,e.objectId=a.objectId,e.md5=a.md5})})};return(l,t)=>{const i=me,a=_e,b=P,j=ce,S=ee,D=A,B=q("dompurify-html");return c(),_("div",ve,[f(o("div",xe,null,512),[[B,e.content]]),o("div",fe,[o("div",ye,[d($)?(c(),p(i,{key:0,class:"w-50px h-50px opacity-100 hover:opacity-25",onClick:t[0]||(t[0]=x=>m(!1))})):(c(),p(a,{key:1,class:"w-50px h-50px opacity-25 hover:opacity-100",onClick:t[1]||(t[1]=x=>m(!0))})),G(" "+K(e.like.length),1)]),o("img",{class:"w-200px h-200px",src:d(H),onClick:v},null,8,ge),o("div",Ce,[y(b,{class:"w-50px h-50px opacity-25 hover:opacity-100",onClick:k})]),o("div",{title:"评论",onClick:t[2]||(t[2]=x=>d(s)())},[n.value?(c(),p(S,{key:1,class:"w-50px h-50px ml-100px opacity-25 hover:opacity-100"})):(c(),p(j,{key:0,class:"w-50px h-50px ml-100px opacity-25 hover:opacity-100"}))])]),f(y(D,{sid:d(w),class:"absolute right-8 top-46 w-400px"},null,8,["sid"]),[[L,n.value]])])}}});export{$e as _};
