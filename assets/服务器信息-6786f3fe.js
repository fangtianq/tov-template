/* empty css             */import{E as J,a as M,b as T}from"./main-52c25c7f.js";import{E as N,a as O,b as V,c as A}from"./table-column-0e3fc0de.js";import{E as L}from"./card-969ab641.js";import"./checkbox-bc390863.js";/* empty css                */import"./popper-490b1252.js";import"./scrollbar-c02d83c8.js";/* empty css            */import{E as P}from"./button-bfcc4e4a.js";import{a as U}from"./request-af25b9b6.js";import{d as D,e as H,g as R,h as W,i as q,a3 as v,o as y,a as h,w as e,x as t,y as n,A as C,F as G,D as K,au as Q,av as X,cy as Y,cz as Z,b as o,_ as $}from"./index-01622320.js";const p=u=>(Y("data-v-4a515bdd"),u=u(),Z(),u),ee=p(()=>o("div",{Slots:"header"},[o("span",null,"CPU信息")],-1)),te=p(()=>o("div",{Slots:"header"},[o("span",null,"内存信息")],-1)),ae=p(()=>o("div",{Slots:"header"},[o("span",null,"服务器信息")],-1)),le=p(()=>o("div",{Slots:"header"},[o("span",null,"Java虚拟机信息")],-1)),se=p(()=>o("div",{Slots:"header"},[o("span",null,"磁盘状态")],-1)),oe=D({__name:"服务器信息",setup(u){let i,m;const g={Authorization:"",ContentType:"text/LCObject"};let _=H(!1),a=R({cpu:[],mem:[],jvm:[],sys:[],sysFile:[]});const S=l=>{a.cpu=l.cpu,a.mem=l.mem,a.jvm=l.jvm,a.sys=l.sys,a.sysFile=l.sysFile},j=()=>{U.get("/socket/server",{}).then(l=>{const f=l.data.content;S(f)})},k=()=>{m=new Q("/notification"),i=X.over(m),i.connect(g,()=>{_.value=!0,v.success("服务器信息 websocket连接成功..."),i.subscribe("/topic/server",l=>{const f=JSON.parse(l.body);S(f)})},l=>{_.value=!1,v.error("服务器信息 websocket断线重连中..."+l)}),j()};W(()=>{k()}),q(()=>{E()});const E=()=>{i.disconnect(()=>{m.onclose,m.close(),_.value=!1,a.cpu=[],a.mem=[],a.jvm=[],a.sys=[],a.sysFile=[],v.success("服务器信息 websocket断开成功！")})};return(l,f)=>{const w=P,x=J,s=N,d=O,r=L,c=V,b=A,z=M,F=T;return y(),h("div",null,[e(F,null,{default:t(()=>[e(x,null,{default:t(()=>[e(w,{type:"primary",disabled:n(_),onClick:k},{default:t(()=>[C("手动连接")]),_:1},8,["disabled"]),e(w,{type:"danger",disabled:!n(_),onClick:E},{default:t(()=>[C("断开连接")]),_:1},8,["disabled"])]),_:1}),e(z,null,{default:t(()=>[e(b,{gutter:20},{default:t(()=>[e(c,{span:12},{default:t(()=>[e(r,null,{default:t(()=>[ee,e(d,{size:"small",border:"",data:n(a).cpu,style:{width:"100%"}},{default:t(()=>[e(s,{prop:"key",label:"属性"}),e(s,{prop:"value",label:"值"})]),_:1},8,["data"])]),_:1})]),_:1}),e(c,{span:12},{default:t(()=>[e(r,null,{default:t(()=>[te,e(d,{size:"small",border:"",data:n(a).mem,style:{width:"100%"}},{default:t(()=>[e(s,{prop:"key",label:"属性"}),e(s,{prop:"value",label:"值"})]),_:1},8,["data"])]),_:1})]),_:1})]),_:1}),e(b,{gutter:20},{default:t(()=>[e(c,{span:12},{default:t(()=>[e(r,null,{default:t(()=>[ae,e(d,{size:"small",border:"",data:n(a).sys,style:{width:"100%"}},{default:t(()=>[e(s,{prop:"key",label:"属性"}),e(s,{prop:"value",label:"值"})]),_:1},8,["data"])]),_:1})]),_:1}),e(c,{span:12},{default:t(()=>[e(r,null,{default:t(()=>[le,e(d,{size:"small",border:"",data:n(a).jvm,style:{width:"100%"}},{default:t(()=>[e(s,{prop:"key",label:"属性"}),e(s,{prop:"value",label:"值"})]),_:1},8,["data"])]),_:1})]),_:1})]),_:1}),e(b,null,{default:t(()=>[e(c,{span:24},{default:t(()=>[e(r,null,{default:t(()=>[se,(y(!0),h(G,null,K(n(a).sysFile,(B,I)=>(y(),h("div",{key:I,class:"sysFile"},[e(d,{size:"small",border:"",data:B,style:{with:"100%"}},{default:t(()=>[e(s,{prop:"key",label:"属性"}),e(s,{prop:"value",label:"值"})]),_:2},1032,["data"])]))),128))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])}}});const ne=$(oe,[["__scopeId","data-v-4a515bdd"]]),he=Object.freeze(Object.defineProperty({__proto__:null,default:ne},Symbol.toStringTag,{value:"Module"}));export{he as _};
