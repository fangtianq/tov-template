System.register(["./index-legacy.12f2293c.js","./base-legacy.5aa23bc0.js","./button-legacy.67007427.js","./delete-legacy.4a3a32a3.js","./input-legacy.cc4d3812.js","./switch-legacy.990afcf1.js","./index-legacy.5e5d103f.js","./index-legacy.3954ca43.js","./index-legacy.c072eb27.js","./index-legacy.eb9f932c.js","./index-legacy.f780a3d8.js","./validator-legacy.01abccc1.js","./event-legacy.b2f9967b.js","./isNil-legacy.c6dc002d.js"],(function(e,t){"use strict";var a,n,s,l,c,o,i,d,u,r,y,v,b,g,D,A,G,f,x,m,k,O,h,j;return{setters:[e=>{a=e.d,n=e.bo,s=e.m,l=e.bp,c=e.bq,o=e.br,i=e.o,d=e.a,u=e.F,r=e.v,y=e.e,v=e.f,b=e.w,g=e.b,D=e.t,A=e.a1,G=e.bs,f=e.aZ,x=e.h,m=e.i},()=>{},e=>{k=e.E},e=>{O=e._},()=>{},e=>{h=e.E},e=>{j=e.E},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{}],execute:function(){const t={class:"flex justify-center items-center flex-col"},p=g("h1",{class:"text-7xl"},"LiveQuery",-1),E={class:"w-50 pl-2 pr-2 inline-block"},L={class:"inline-block"},R=m(" 点击添加"),B=g("div",{class:"cursor-move"},"👋 Drag here!",-1),T=g("div",{class:"text-xs opacity-50"},"Handle that triggers the drag event",-1),V={class:"text-sm opacity-50"};e("default",a({__name:"bronze",setup(e){const a=n(o.TODO.name);let m=s();a.find().then((e=>{m.value=e})),a.subscribe().then((e=>{e.on("create",(e=>{m.value.push(e)})),e.on("enter",((e,t)=>{})),e.on("update",((e,t)=>{const a=m.value.findIndex((t=>t.id==(null==e?void 0:e.id)));m.value[a]=e})),e.on("delete",(e=>{m.value=m.value.filter((t=>t.id!=(null==e?void 0:e.id)))}))}));const w=()=>{const e=new(G.Object.extend(o.TODO.name));e.set(o.TODO.keys.content,"Hello world!"),e.set(o.TODO.keys.done,!0),e.set(o.TODO.keys.user,f()()),e.save().then((e=>{}))},C=s(null);let _=l(C,{initialValue:{x:40,y:40}}),z=_.x,I=_.y,U=_.style;const W=[s(z),s(I)],H=W[0],M=W[1];let q=s();c([H,M],(()=>{const e=G.Object.createWithoutData(o.DRAGGABLE.name,q.value);e.set(o.DRAGGABLE.keys.x,H.value),e.set(o.DRAGGABLE.keys.y,M.value),e.save()}),{debounce:500});const F=n(o.DRAGGABLE.name),N=(e,t)=>{const a=new(G.Object.extend(o.DRAGGABLE.name));return a.set(o.DRAGGABLE.keys.name,"bronzeDrag"),a.set(o.DRAGGABLE.keys.x,e),a.set(o.DRAGGABLE.keys.y,t),a.save(),a},Q=e=>{if(e)return z.value=e.x,void(I.value=e.y);F.find().then((e=>{if(null!=e&&e.length){const t=e.filter((e=>"bronzeDrag"==e.get(o.DRAGGABLE.keys.name)))[0];z.value=t.get(o.DRAGGABLE.keys.x),I.value=t.get(o.DRAGGABLE.keys.y),q=s(t.id)}else Q(N(40,40))}),(e=>{"101"==e.code&&Q(N(40,40))}))};return F.subscribe().then((e=>{e.on("create",(e=>{q=s(e.id),z.value=e.get(o.DRAGGABLE.keys.x),I.value=e.get(o.DRAGGABLE.keys.y)})),e.on("enter",((e,t)=>{})),e.on("update",((e,t)=>{q=s(e.id),z.value=e.get(o.DRAGGABLE.keys.x),I.value=e.get(o.DRAGGABLE.keys.y)})),e.on("delete",(e=>{}))})),i((()=>{})),Q(null),(e,a)=>{const n=h,s=j,l=O,c=k;return x(),d("div",t,[p,(x(!0),d(u,null,r(y(m),(e=>(x(),d("div",{key:e.id,class:"flex items-center justify-center p-2"},[v(n,{modelValue:e.attributes.done,"onUpdate:modelValue":t=>e.attributes.done=t,onClick:t=>((e,t)=>{const a=G.Object.createWithoutData(o.TODO.name,e);a.set(o.TODO.keys.done,t),a.save()})(e.id,e.attributes.done)},null,8,["modelValue","onUpdate:modelValue","onClick"]),g("div",E,[v(s,{modelValue:e.attributes.content,"onUpdate:modelValue":t=>e.attributes.content=t,clearable:"",onInput:t=>((e,t)=>{const a=G.Object.createWithoutData(o.TODO.name,e);a.set(o.TODO.keys.content,t),a.save()})(e.id,e.attributes.content)},null,8,["modelValue","onUpdate:modelValue","onInput"])]),g("div",L,[v(l,{class:"mt-1",onClick:t=>{return a=e.id,void G.Object.createWithoutData(o.TODO.name,a).destroy();var a}},null,8,["onClick"])])])))),128)),v(c,{onClick:w},{default:b((()=>[R])),_:1}),g("div",{ref_key:"settingRef",ref:C,style:A(y(U)),class:"bg-light-50 fixed shadow select-none z-10 hover:shadow-lg px-4 py-2 border-gray-400/30 rounded fixed"},[B,T,g("div",V," I am at "+D(Math.round(y(z)))+", "+D(Math.round(y(I))),1)],4)])}}}))}}}));
