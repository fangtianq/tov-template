/* empty css             */import{E as g}from"./button-6ca74421.js";import{_ as N}from"./delete-48ed6f71.js";/* empty css              */import{d as h,e as x,as as C,f as T,I as w,o as D,aS as u,j as b,x as _,m as c,F as E,an as J,p as V,y as f,w as B,a8 as O,by as U,bz as F,b1 as r,b2 as L,ax as M,a9 as R}from"./index-dc3531f8.js";import{a as z}from"./request-ad98816e.js";import{E as A}from"./index-d602e332.js";import"./index-b24ab73b.js";import"./use-form-item-0b48f4ce.js";import"./constants-aa97fbe0.js";import"./index-86a38320.js";import"./index-dea562f7.js";import"./event-e06a23af.js";import"./isNil-c75b1b34.js";const Q={class:"main"},q={class:"message-container"},P=c("h3",null,"后台：org.sang.socket.livequery.LiveQueryController",-1),$=c("h3",null,"https://github.com/fangtianq/FTQPriSpringbootVueBlog",-1),H={class:"mdui-card-primary"},W={class:"mdui-card-content message-content inline-block"},Y={class:"inline-block"},ue=h({__name:"silver",setup(G){const j=x(C.REFDANMU);let s,l;const i={Authorization:"",ContentType:"text/LCObject"};let d=null;const y=(e,t)=>{s.send("/app/updateObject",i,JSON.stringify({objectId:e,object:t}))},k=e=>{s.send("/app/deleteObject",i,JSON.stringify({objectId:e}))};let o=T([]);const v=()=>{d&&(u.success("websocket重新连接成功..."),clearInterval(d),d=null),l=new U("/websocket"),s=F.over(l),s.connect(i,()=>{u.success("websocket连接成功..."),s.subscribe("/create",e=>{o.value.push(JSON.parse(e.body))}),s.subscribe("/delete",e=>{const t=JSON.parse(e.body).objectId;o.value=o.value.filter(n=>n.objectId!=t)}),s.subscribe("/update",e=>{const t=JSON.parse(e.body).objectId,n=o.value.findIndex(p=>p.objectId==t);o.value[n]=JSON.parse(e.body),j.value.insert(JSON.parse(e.body).object)})},e=>{d=setInterval(()=>{v()},5e3),u.error("websocket断线重连中...")}),z.post("/find",{className:r.TODO.name}).then(e=>{o.value=e.data.list})};w(()=>{v()}),D(()=>{s.disconnect(()=>{l.onclose,l.close(),u.success("websocket断开成功！")})});const I=()=>{const e=L.Object.extend(r.TODO.name),t=new e;t.set(r.TODO.keys.content,"Hello world!"),t.set(r.TODO.keys.done,!0),t.set(r.TODO.keys.user,M()());const n=JSON.stringify({object:t.attributes,className:t.className});s.send("/app/saveInBackground",i,n)};return(e,t)=>{const n=A,p=N,S=g;return b(),_("div",Q,[c("div",q,[P,$,(b(!0),_(E,null,J(V(o),a=>(b(),_("div",{key:a.objectId,class:"mdui-card",style:{margin:"10px 0",width:"500px"}},[c("div",H,[c("div",W,[O(R(a.object.user.username+"："),1),f(n,{modelValue:a.object.content,"onUpdate:modelValue":m=>a.object.content=m,clearable:"",onInput:m=>y(a.objectId,a.object)},null,8,["modelValue","onUpdate:modelValue","onInput"])]),c("div",Y,[f(p,{class:"relative top-1",onClick:m=>k(a.objectId)},null,8,["onClick"])])])]))),128)),f(S,{type:"primary",size:"default",onClick:I},{default:B(()=>[O("发送")]),_:1})])])}}});export{ue as default};
