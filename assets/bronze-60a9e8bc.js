/* empty css             */import{E as C}from"./button-6ca74421.js";import{_ as I}from"./delete-48ed6f71.js";/* empty css              */import{E as U}from"./switch-d830cb0b.js";import{d as z,a_ as b,f as l,a$ as S,b0 as K,b1 as n,I as W,j as f,x as G,F as $,an as M,p as _,y,w as N,a8 as j,m as d,a9 as E,q,b2 as p,ax as F}from"./index-dc3531f8.js";import{E as H}from"./index-d602e332.js";import"./index-b24ab73b.js";import"./use-form-item-0b48f4ce.js";import"./constants-aa97fbe0.js";import"./index-86a38320.js";import"./validator-561fe088.js";import"./event-e06a23af.js";import"./isNil-c75b1b34.js";const Y={class:"flex justify-center items-center flex-col"},J=d("h1",{class:"text-7xl"},"LiveQuery",-1),P={class:"w-50 pl-2 pr-2 inline-block"},X={class:"inline-block"},Z=d("div",{class:"cursor-move"},"👋 Drag here!",-1),Q=d("div",{class:"text-xs opacity-50"},"Handle that triggers the drag event",-1),ee={class:"text-sm opacity-50"},De=z({__name:"bronze",setup(te){const g=b(n.TODO.name);let r=l();g.find().then(t=>{r.value=t}),g.subscribe().then(t=>{t.on("create",e=>{r.value.push(e)}),t.on("enter",(e,o)=>{}),t.on("update",(e,o)=>{const s=r.value.findIndex(A=>A.id==(e==null?void 0:e.id));r.value[s]=e}),t.on("delete",e=>{r.value=r.value.filter(o=>o.id!=(e==null?void 0:e.id))})});const L=()=>{const t=p.Object.extend(n.TODO.name),e=new t;e.set(n.TODO.keys.content,"Hello world!"),e.set(n.TODO.keys.done,!0),e.set(n.TODO.keys.user,F()()),e.save().then(o=>{})},B=(t,e)=>{const o=p.Object.createWithoutData(n.TODO.name,t);o.set(n.TODO.keys.done,e),o.save()},R=(t,e)=>{const o=p.Object.createWithoutData(n.TODO.name,t);o.set(n.TODO.keys.content,e),o.save()},T=t=>{p.Object.createWithoutData(n.TODO.name,t).destroy()},k=l(null);let{x:c,y:i,style:V}=S(k,{initialValue:{x:40,y:40}});const[D,v]=[l(c),l(i)];let m=l();K([D,v],()=>{m.value;const t=p.Object.createWithoutData(n.DRAGGABLE.name,m.value);t.set(n.DRAGGABLE.keys.x,D.value),t.set(n.DRAGGABLE.keys.y,v.value),t.save()},{debounce:500});const x=b(n.DRAGGABLE.name),O=(t,e)=>{const o=p.Object.extend(n.DRAGGABLE.name),s=new o;return s.set(n.DRAGGABLE.keys.name,"bronzeDrag"),s.set(n.DRAGGABLE.keys.x,t),s.set(n.DRAGGABLE.keys.y,e),s.save(),s},h=t=>{if(t){c.value=t.x,i.value=t.y;return}x.find().then(e=>{if(!(e!=null&&e.length))h(O(40,40));else{const o=e.filter(s=>s.get(n.DRAGGABLE.keys.name)=="bronzeDrag")[0];c.value=o.get(n.DRAGGABLE.keys.x),i.value=o.get(n.DRAGGABLE.keys.y),m=l(o.id)}},e=>{e.code=="101"&&h(O(40,40))})};return x.subscribe().then(t=>{t.on("create",e=>{m=l(e.id),c.value=e.get(n.DRAGGABLE.keys.x),i.value=e.get(n.DRAGGABLE.keys.y)}),t.on("enter",(e,o)=>{}),t.on("update",(e,o)=>{m=l(e.id),c.value=e.get(n.DRAGGABLE.keys.x),i.value=e.get(n.DRAGGABLE.keys.y)}),t.on("delete",e=>{})}),W(()=>{}),h(null),(t,e)=>{const o=U,s=H,A=I,w=C;return f(),G("div",Y,[J,(f(!0),G($,null,M(_(r),a=>(f(),G("div",{key:a.id,class:"flex items-center justify-center p-2"},[y(o,{modelValue:a.attributes.done,"onUpdate:modelValue":u=>a.attributes.done=u,onClick:u=>B(a.id,a.attributes.done)},null,8,["modelValue","onUpdate:modelValue","onClick"]),d("div",P,[y(s,{modelValue:a.attributes.content,"onUpdate:modelValue":u=>a.attributes.content=u,clearable:"",onInput:u=>R(a.id,a.attributes.content)},null,8,["modelValue","onUpdate:modelValue","onInput"])]),d("div",X,[y(A,{class:"mt-1",onClick:u=>T(a.id)},null,8,["onClick"])])]))),128)),y(w,{onClick:L},{default:N(()=>[j(" 点击添加")]),_:1}),d("div",{ref_key:"settingRef",ref:k,style:q(_(V)),class:"bg-light-50 fixed shadow select-none z-10 hover:shadow-lg px-4 py-2 border-gray-400/30 rounded fixed"},[Z,Q,d("div",ee," I am at "+E(Math.round(_(c)))+", "+E(Math.round(_(i))),1)],4)])}}});export{De as default};
