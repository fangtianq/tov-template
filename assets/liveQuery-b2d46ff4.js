/* empty css             */import{E as I}from"./button-8bab4814.js";import{_ as N}from"./delete-9a444a7d.js";/* empty css              */import{d as h,l as T,Y as C,n as w,x,y as D,au as u,o as _,P as m,Q as c,F as E,a7 as J,S as f,U as Q,a3 as v,a4 as V,w as B,be as U,bf as F,aF as l,aG as M,a2 as L}from"./index-08a94d7c.js";import{a as P}from"./request-ca3158a4.js";import{E as R}from"./index-cb2a535a.js";const z={class:"main p-4"},A={class:"message-container"},q=c("h3",null,"后台：org.sang.socket.livequery.LiveQueryController",-1),Y=c("h3",null,"https://github.com/fangtianq/FTQPriSpringbootVueBlog",-1),$={class:"mdui-card-primary"},G={class:"mdui-card-content message-content inline-block"},H={class:"inline-block"},W=h({__name:"liveQuery",setup(K){const O=T(C.REFDANMU);let o,r;const i={Authorization:"",ContentType:"text/LCObject"};let d=null;const j=(e,t)=>{o.send("/app/updateObject",i,JSON.stringify({objectId:e,object:t}))},g=e=>{o.send("/app/deleteObject",i,JSON.stringify({objectId:e}))};let s=w([]);const y=()=>{d&&(u.success("liveQuery websocket重新连接成功..."),clearInterval(d),d=null),r=new U("/websocket"),o=F.over(r),o.connect(i,()=>{u.success("liveQuery websocket连接成功..."),o.subscribe("/create",e=>{s.value.push(JSON.parse(e.body))}),o.subscribe("/delete",e=>{const t=JSON.parse(e.body).objectId;s.value=s.value.filter(n=>n.objectId!=t)}),o.subscribe("/update",e=>{const t=JSON.parse(e.body).objectId,n=s.value.findIndex(p=>p.objectId==t);s.value[n]=JSON.parse(e.body),O.value.insert(JSON.parse(e.body).object)})},e=>{d=setInterval(()=>{y()},5e3),u.error("liveQuery websocket断线重连中...")}),P.post("/find",{className:l.TODO.name}).then(e=>{s.value=e.data.list})};x(()=>{y()}),D(()=>{o.disconnect(()=>{r.onclose,r.close(),u.success("liveQuery websocket断开成功！")})});const k=()=>{const e=M.Object.extend(l.TODO.name),t=new e;t.set(l.TODO.keys.content,"Hello world!"),t.set(l.TODO.keys.done,!0),t.set(l.TODO.keys.user,L()());const n=JSON.stringify({object:t.attributes,className:t.className});o.send("/app/saveInBackground",i,n)};return(e,t)=>{const n=R,p=N,S=I;return _(),m("div",z,[c("div",A,[q,Y,(_(!0),m(E,null,J(V(s),a=>(_(),m("div",{key:a.objectId,class:"mdui-card",style:{margin:"10px 0",width:"500px"}},[c("div",$,[c("div",G,[f(Q(a.object.user.username+"："),1),v(n,{modelValue:a.object.content,"onUpdate:modelValue":b=>a.object.content=b,clearable:"",onInput:b=>j(a.objectId,a.object)},null,8,["modelValue","onUpdate:modelValue","onInput"])]),c("div",H,[v(p,{class:"relative top-1",onClick:b=>g(a.objectId)},null,8,["onClick"])])])]))),128)),v(S,{type:"primary",size:"default",onClick:k},{default:B(()=>[f("发送")]),_:1})])])}}}),ae=Object.freeze(Object.defineProperty({__proto__:null,default:W},Symbol.toStringTag,{value:"Module"}));export{ae as _};
