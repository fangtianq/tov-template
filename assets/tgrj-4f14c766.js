import{d as p,bY as _,ao as m,o as u,c4 as d,bs as f,c5 as h,ce as x,p as v,a as b,b as y,q as k,e as s,f as g,h as j,aP as C}from"./index-b70f4fc5.js";import{t as D,_ as w}from"./tongue-b41b2a05.js";import{b as a}from"./route-block-83d24a4e.js";const N={class:"flex items-center flex-col h-[calc(100vh-120px)]"},T={class:"flex text-4xl pt-12 px-4 font-HYTiaoTiao z-10"},q={class:"absolute bottom-20vh w-screen h-200px flex justify-center items-center"},B=["src"],E={title:"复制"},I=p({__name:"tgrj",setup(S){const{copy:r}=_(),l=()=>{r(e.content),C.success("复制成功")},e=m({content:"",like:[],objectId:"",md5:"ssaa"});u(()=>{n()});const n=()=>{const c=d()(f.FUCKDOG.name);c.count().then(i=>{c.skip(h(i)).first().then(o=>{const t=o==null?void 0:o.toJSON();e.content=t.content,e.like=t.like,e.objectId=t.objectId,e.md5=t.md5})})};return x("日记"),(c,i)=>{const o=w,t=v("dompurify-html");return b(),y("div",N,[k(s("div",T,null,512),[[t,e.content]]),s("div",q,[s("img",{class:"w-200px h-200px",src:g(D),onClick:n},null,8,B),s("div",E,[j(o,{class:"w-50px h-50px opacity-25 hover:opacity-100",onClick:l})])])])}}});typeof a=="function"&&a(I);export{I as default};