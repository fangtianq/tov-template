System.register(["./index-legacy.a0a0f763.js","./base-legacy.983574b6.js","./button-legacy.9aade1ed.js","./delete-legacy.a77ea947.js","./input-legacy.3a43dd41.js","./switch-legacy.efe40e2b.js","./index-legacy.24e1bed2.js","./index-legacy.3031c776.js","./index-legacy.5e80c7fd.js","./index-legacy.ae060c44.js","./index-legacy.1d32fce8.js","./validator-legacy.bc60f379.js","./event-legacy.7722cbb2.js","./isNil-legacy.e248952d.js"],(function(e,t){"use strict";var l,n,a,s,o,u,i,c,d,r,y,v,g,b,D,A,G,x,m,O,k,h,f,j;return{setters:[e=>{l=e.d,n=e.bq,a=e.m,s=e.br,o=e.bs,u=e.bt,i=e.o,c=e.a,d=e.F,r=e.v,y=e.e,v=e.f,g=e.w,b=e.b,D=e.t,A=e.a1,G=e.bu,x=e.aP,m=e.h,O=e.i},null,e=>{k=e.E},e=>{h=e._},null,e=>{f=e.E},e=>{j=e.E},null,null,null,null,null,null,null],execute:function(){const t={class:"flex justify-center items-center flex-col"},E=b("h1",{class:"text-7xl"},"LiveQuery",-1),p={class:"w-50 pl-2 pr-2 inline-block"},B={class:"inline-block"},L=O(" 点击添加"),R=b("div",{class:"cursor-move"},"👋 Drag here!",-1),T=b("div",{class:"text-xs opacity-50"},"Handle that triggers the drag event",-1),V={class:"text-sm opacity-50"};e("default",l({__name:"bronze",setup(e){const l=n(u.TODO.name);let O=a();l.find().then((e=>{O.value=e})),l.subscribe().then((e=>{e.on("create",(e=>{O.value.push(e)})),e.on("enter",((e,t)=>{})),e.on("update",((e,t)=>{const l=O.value.findIndex((t=>t.id==(null==e?void 0:e.id)));O.value[l]=e})),e.on("delete",(e=>{O.value=O.value.filter((t=>t.id!=(null==e?void 0:e.id)))}))}));const w=()=>{const e=new(G.Object.extend(u.TODO.name));e.set(u.TODO.keys.content,"Hello world!"),e.set(u.TODO.keys.done,!0),e.set(u.TODO.keys.user,x()()),e.save().then((e=>{}))},z=a(null);let C=s(z,{initialValue:{x:40,y:40}}),U=C.x,_=C.y,I=C.style;const W=[a(U),a(_)],M=W[0],F=W[1];let H=a();o([M,F],(()=>{const e=G.Object.createWithoutData(u.DRAGGABLE.name,H.value);e.set(u.DRAGGABLE.keys.x,M.value),e.set(u.DRAGGABLE.keys.y,F.value),e.save()}),{debounce:500});const N=n(u.DRAGGABLE.name),q=(e,t)=>{const l=new(G.Object.extend(u.DRAGGABLE.name));return l.set(u.DRAGGABLE.keys.name,"bronzeDrag"),l.set(u.DRAGGABLE.keys.x,e),l.set(u.DRAGGABLE.keys.y,t),l.save(),l},J=e=>{if(e)return U.value=e.x,void(_.value=e.y);N.find().then((e=>{if(null!=e&&e.length){const t=e.filter((e=>"bronzeDrag"==e.get(u.DRAGGABLE.keys.name)))[0];U.value=t.get(u.DRAGGABLE.keys.x),_.value=t.get(u.DRAGGABLE.keys.y),H=a(t.id)}else J(q(40,40))}),(e=>{"101"==e.code&&J(q(40,40))}))};return N.subscribe().then((e=>{e.on("create",(e=>{H=a(e.id),U.value=e.get(u.DRAGGABLE.keys.x),_.value=e.get(u.DRAGGABLE.keys.y)})),e.on("enter",((e,t)=>{})),e.on("update",((e,t)=>{H=a(e.id),U.value=e.get(u.DRAGGABLE.keys.x),_.value=e.get(u.DRAGGABLE.keys.y)})),e.on("delete",(e=>{}))})),i((()=>{})),J(null),(e,l)=>{const n=f,a=j,s=h,o=k;return m(),c("div",t,[E,(m(!0),c(d,null,r(y(O),(e=>(m(),c("div",{key:e.id,class:"flex items-center justify-center p-2"},[v(n,{modelValue:e.attributes.done,"onUpdate:modelValue":t=>e.attributes.done=t,onClick:t=>((e,t)=>{const l=G.Object.createWithoutData(u.TODO.name,e);l.set(u.TODO.keys.done,t),l.save()})(e.id,e.attributes.done)},null,8,["modelValue","onUpdate:modelValue","onClick"]),b("div",p,[v(a,{modelValue:e.attributes.content,"onUpdate:modelValue":t=>e.attributes.content=t,clearable:"",onInput:t=>((e,t)=>{const l=G.Object.createWithoutData(u.TODO.name,e);l.set(u.TODO.keys.content,t),l.save()})(e.id,e.attributes.content)},null,8,["modelValue","onUpdate:modelValue","onInput"])]),b("div",B,[v(s,{class:"mt-1",onClick:t=>{return l=e.id,void G.Object.createWithoutData(u.TODO.name,l).destroy();var l}},null,8,["onClick"])])])))),128)),v(o,{onClick:w},{default:g((()=>[L])),_:1}),b("div",{ref_key:"settingRef",ref:z,style:A(y(I)),class:"bg-light-50 fixed shadow select-none z-10 hover:shadow-lg px-4 py-2 border-gray-400/30 rounded fixed"},[R,T,b("div",V," I am at "+D(Math.round(y(U)))+", "+D(Math.round(y(_))),1)],4)])}}}))}}}));
