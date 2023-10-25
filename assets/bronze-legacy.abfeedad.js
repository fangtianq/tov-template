System.register(["./base-legacy.38854648.js","./button-legacy.0a7cc68f.js","./delete-legacy.53e84b21.js","./input-legacy.13394860.js","./switch-legacy.054cbb33.js","./index-legacy.c981faa3.js","./index-legacy.374df017.js","./index-legacy.0a240aa0.js","./use-form-item-legacy.17cd8959.js","./constants-legacy.0dd8db45.js","./index-legacy.b33c6eb8.js","./validator-legacy.090c3b4d.js","./event-legacy.7722cbb2.js","./isNil-legacy.e248952d.js"],(function(e,t){"use strict";var a,l,n,s,u,r,i,o,d,c,v,y,g,D,G,A,b,m,x,k,O,f,h,j;return{setters:[null,e=>{a=e.E},e=>{l=e._},null,e=>{n=e.E},e=>{s=e.d,u=e.aC,r=e.n,i=e.aD,o=e.aE,d=e.aF,c=e.x,v=e.o,y=e.P,g=e.F,D=e.a7,G=e.a3,A=e.Q,b=e.a4,m=e.w,x=e.S,k=e.U,O=e.a9,f=e.aG,h=e.a2},e=>{j=e.E},null,null,null,null,null,null,null],execute:function(){var t={class:"flex justify-center items-center flex-col"},E=A("h1",{class:"text-7xl"},"LiveQuery",-1),p={class:"w-50 pl-2 pr-2 inline-block"},L={class:"inline-block"},R=A("div",{class:"cursor-move"},"👋 Drag here!",-1),B=A("div",{class:"text-xs opacity-50"},"Handle that triggers the drag event",-1),T={class:"text-sm opacity-50"};e("default",s({__name:"bronze",setup(e){var s=u(d.TODO.name),V=r();s.find().then((e=>{V.value=e})),s.subscribe().then((e=>{e.on("create",(e=>{V.value.push(e)})),e.on("enter",((e,t)=>{})),e.on("update",((e,t)=>{var a=V.value.findIndex((t=>t.id==(null==e?void 0:e.id)));V.value[a]=e})),e.on("delete",(e=>{V.value=V.value.filter((t=>t.id!=(null==e?void 0:e.id)))}))}));var w=()=>{var e=new(f.Object.extend(d.TODO.name));e.set(d.TODO.keys.content,"Hello world!"),e.set(d.TODO.keys.done,!0),e.set(d.TODO.keys.user,h()()),e.save().then((e=>{}))},C=r(null),_=i(C,{initialValue:{x:40,y:40}}),U=_.x,z=_.y,I=_.style,W=[r(U),r(z)],F=W[0],H=W[1],M=r();o([F,H],(()=>{M.value;var e=f.Object.createWithoutData(d.DRAGGABLE.name,M.value);e.set(d.DRAGGABLE.keys.x,F.value),e.set(d.DRAGGABLE.keys.y,H.value),e.save()}),{debounce:500});var Q=u(d.DRAGGABLE.name),S=(e,t)=>{var a=new(f.Object.extend(d.DRAGGABLE.name));return a.set(d.DRAGGABLE.keys.name,"bronzeDrag"),a.set(d.DRAGGABLE.keys.x,e),a.set(d.DRAGGABLE.keys.y,t),a.save(),a},q=e=>{if(e)return U.value=e.x,void(z.value=e.y);Q.find().then((e=>{if(null!=e&&e.length){var t=e.filter((e=>"bronzeDrag"==e.get(d.DRAGGABLE.keys.name)))[0];U.value=t.get(d.DRAGGABLE.keys.x),z.value=t.get(d.DRAGGABLE.keys.y),M=r(t.id)}else q(S(40,40))}),(e=>{"101"==e.code&&q(S(40,40))}))};return Q.subscribe().then((e=>{e.on("create",(e=>{M=r(e.id),U.value=e.get(d.DRAGGABLE.keys.x),z.value=e.get(d.DRAGGABLE.keys.y)})),e.on("enter",((e,t)=>{})),e.on("update",((e,t)=>{M=r(e.id),U.value=e.get(d.DRAGGABLE.keys.x),z.value=e.get(d.DRAGGABLE.keys.y)})),e.on("delete",(e=>{}))})),c((()=>{})),q(null),(e,s)=>{var u=n,r=j,i=l,o=a;return v(),y("div",t,[E,(v(!0),y(g,null,D(b(V),(e=>(v(),y("div",{key:e.id,class:"flex items-center justify-center p-2"},[G(u,{modelValue:e.attributes.done,"onUpdate:modelValue":t=>e.attributes.done=t,onClick:t=>{return a=e.id,l=e.attributes.done,(n=f.Object.createWithoutData(d.TODO.name,a)).set(d.TODO.keys.done,l),void n.save();var a,l,n}},null,8,["modelValue","onUpdate:modelValue","onClick"]),A("div",p,[G(r,{modelValue:e.attributes.content,"onUpdate:modelValue":t=>e.attributes.content=t,clearable:"",onInput:t=>{return a=e.id,l=e.attributes.content,(n=f.Object.createWithoutData(d.TODO.name,a)).set(d.TODO.keys.content,l),void n.save();var a,l,n}},null,8,["modelValue","onUpdate:modelValue","onInput"])]),A("div",L,[G(i,{class:"mt-1",onClick:t=>{return a=e.id,void f.Object.createWithoutData(d.TODO.name,a).destroy();var a}},null,8,["onClick"])])])))),128)),G(o,{onClick:w},{default:m((()=>[x(" 点击添加")])),_:1}),A("div",{ref_key:"settingRef",ref:C,style:O(b(I)),class:"bg-light-50 fixed shadow select-none z-10 hover:shadow-lg px-4 py-2 border-gray-400/30 rounded fixed"},[R,B,A("div",T," I am at "+k(Math.round(b(U)))+", "+k(Math.round(b(z))),1)],4)])}}}))}}}));
