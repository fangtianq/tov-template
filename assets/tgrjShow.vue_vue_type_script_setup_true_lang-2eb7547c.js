import{d as f,o as c,P as d,Q as n,n as U,ae as T,b6 as I,s as O,cH as F,g as M,a2 as h,x as N,cI as E,aF as u,cJ as G,ag as Z,C as v,a4 as r,c as p,S as H,U as K,a3 as y,D as L,au as V,aG as q}from"./index-17a45ce3.js";import{t as J,_ as P}from"./tongue-72b4aadb.js";const Q=()=>new Promise((l,o)=>{const s=document.createElement("script");s.type="text/javascript",s.charset="utf-8",s.async=!0,s.src="https://changyan.sohu.com/upload/changyan.js",s.onerror=o,s.onload=function(){window.changyan.api.config({appid:"cyw21b1ST",conf:"prod_d12b5b6925b0ef37e7b6a08c390ebc4e"})},document.head.appendChild(s)}),R=["sid"],Y=f({__name:"changyan",props:{sid:{type:String,default:"ssss"}},setup(l){return Q(),(o,s)=>(c(),d("div",null,[n("div",{id:"SOHUCS",sid:l.sid,class:""},null,8,R)]))}}),z={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},A=n("path",{fill:"currentColor",d:"M12 3C6.5 3 2 6.58 2 11a7.218 7.218 0 0 0 2.75 5.5c0 .6-.42 2.17-2.75 4.5c2.37-.11 4.64-1 6.47-2.5c1.14.33 2.34.5 3.53.5c5.5 0 10-3.58 10-8s-4.5-8-10-8m0 14c-4.42 0-8-2.69-8-6s3.58-6 8-6s8 2.69 8 6s-3.58 6-8 6Z"},null,-1),W=[A];function X(l,o){return c(),d("svg",z,[...W])}const ee={name:"mdi-chat-outline",render:X},te={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},ne=n("path",{fill:"currentColor",d:"M12 3c5.5 0 10 3.58 10 8s-4.5 8-10 8c-1.24 0-2.43-.18-3.53-.5C5.55 21 2 21 2 21c2.33-2.33 2.7-3.9 2.75-4.5C3.05 15.07 2 13.13 2 11c0-4.42 4.5-8 10-8Z"},null,-1),oe=[ne];function se(l,o){return c(),d("svg",te,[...oe])}const ce={name:"mdi-chat",render:se},ie={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},ae=n("path",{fill:"currentColor",d:"m12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3Z"},null,-1),re=[ae];function le(l,o){return c(),d("svg",ie,[...re])}const _e={name:"mdi-cards-heart-outline",render:le},de={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},pe=n("path",{fill:"currentColor",d:"m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z"},null,-1),he=[pe];function ue(l,o){return c(),d("svg",de,[...he])}const me={name:"mdi-cards-heart",render:ue},xe={class:"flex items-center flex-col h-[calc(100vh-120px)]"},ge={class:"flex w-screen-2xl text-4xl pt-12 font-HYTiaoTiao z-10"},ve={class:"absolute bottom-46 w-screen h-200px flex justify-center items-center"},ye={title:"喜欢"},fe=["src"],Ce={title:"复制"},$e=f({__name:"tgrjShow",setup(l){const o=U(!1),s=T(o),{copy:C}=I(),k=()=>{C(e.content),V.success("复制成功")},e=O({content:"",like:[],objectId:"",md5:"ssaa"}),w=F(async()=>await"tgrjShow.vue",""),$=M(()=>e.like.some(_=>_===h()().id));N(()=>{x()});const m=_=>{const t=q.Object.createWithoutData(u.FUCKDOG.name,e.objectId);if(_)e.like=[...e.like,h()().id];else{const i=e.like.findIndex(a=>a===h()().id);e.like.splice(i,1)}t.set(u.FUCKDOG.keys.like,e.like),t.save().then(i=>{})},x=()=>{const _=E()(u.FUCKDOG.name);_.count().then(t=>{_.skip(G(t)).first().then(i=>{const a=i==null?void 0:i.toJSON();e.content=a.content,e.like=a.like,e.objectId=a.objectId,e.md5=a.md5})})};return(_,t)=>{const i=me,a=_e,b=P,S=ce,D=ee,j=Y,B=Z("dompurify-html");return c(),d("div",xe,[v(n("div",ge,null,512),[[B,r(e).content]]),n("div",ve,[n("div",ye,[r($)?(c(),p(i,{key:0,class:"w-50px h-50px opacity-100 hover:opacity-25",onClick:t[0]||(t[0]=g=>m(!1))})):(c(),p(a,{key:1,class:"w-50px h-50px opacity-25 hover:opacity-100",onClick:t[1]||(t[1]=g=>m(!0))})),H(" "+K(r(e).like.length),1)]),n("img",{class:"w-200px h-200px",src:r(J),onClick:x},null,8,fe),n("div",Ce,[y(b,{class:"w-50px h-50px opacity-25 hover:opacity-100",onClick:k})]),n("div",{title:"评论",onClick:t[2]||(t[2]=g=>r(s)())},[r(o)?(c(),p(D,{key:1,class:"w-50px h-50px ml-100px opacity-25 hover:opacity-100"})):(c(),p(S,{key:0,class:"w-50px h-50px ml-100px opacity-25 hover:opacity-100"}))])]),v(y(j,{sid:r(w),class:"absolute right-8 top-46 w-400px"},null,8,["sid"]),[[L,r(o)]])])}}});export{$e as _};
