import{aI as te,A as ae,C as Y,B as ne,D as P,a4 as U,aZ as M,d as q,aJ as se,E as oe,c as A,aT as ie,l as m,G as le,P as F,o as ee,j as r,e as y,f as b,h as a,I as g,b6 as ce,H as B,w as I,aR as K,aW as N,J as k,t as L,i as S,aV as re,a7 as H,b5 as ue,_ as de,Q as ve,a3 as pe,b7 as X,M as fe,b8 as Q,b9 as he,ba as me,bb as o,F as ye,s as be,bc as C,al as ge,k as _e}from"./index.808f03c1.js";import{E as ke}from"./el-button.e9a467e9.js";import{u as De,a as Ee,E as Ae}from"./el-input.fbf131ff.js";import{U as W,C as j,I as J}from"./event.776e7e11.js";import{u as Be}from"./index.bb21726f.js";import{d as we,t as Ve}from"./error.7e8331f1.js";import"./index.8bfffa1c.js";import"./index.736962b5.js";const Ce=u=>["",...te].includes(u),Te=ae({modelValue:{type:[Boolean,String,Number],default:!1},value:{type:[Boolean,String,Number],default:!1},disabled:{type:Boolean,default:!1},width:{type:[String,Number],default:""},inlinePrompt:{type:Boolean,default:!1},activeIcon:{type:Y},inactiveIcon:{type:Y},activeText:{type:String,default:""},inactiveText:{type:String,default:""},activeColor:{type:String,default:""},inactiveColor:{type:String,default:""},borderColor:{type:String,default:""},activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},name:{type:String,default:""},validateEvent:{type:Boolean,default:!0},id:String,loading:{type:Boolean,default:!1},beforeChange:{type:ne(Function)},size:{type:String,validator:Ce},tabindex:{type:[String,Number]}}),Ge={[W]:u=>P(u)||U(u)||M(u),[j]:u=>P(u)||U(u)||M(u),[J]:u=>P(u)||U(u)||M(u)},Oe=["onClick"],Ie=["id","aria-checked","aria-disabled","name","true-value","false-value","disabled","tabindex","onKeydown"],Se=["aria-hidden"],Le=["aria-hidden"],xe=["aria-hidden"],Z="ElSwitch",Re=q({name:Z}),Ne=q({...Re,props:Te,emits:Ge,setup(u,{expose:T,emit:d}){const s=u,$=ve(),{formItem:w}=De(),z=se(),l=oe("switch");Be({from:'"value"',replacement:'"model-value" or "v-model"',scope:Z,version:"2.3.0",ref:"https://element-plus.org/en-US/component/switch.html#attributes",type:"Attribute"},A(()=>{var e;return!!((e=$.vnode.props)!=null&&e.value)}));const{inputId:D}=Ee(s,{formItemContext:w}),h=ie(A(()=>s.loading)),G=m(s.modelValue!==!1),E=m(),x=m(),V=A(()=>[l.b(),l.m(z.value),l.is("disabled",h.value),l.is("checked",c.value)]),R=A(()=>({width:le(s.width)}));F(()=>s.modelValue,()=>{G.value=!0}),F(()=>s.value,()=>{G.value=!1});const O=A(()=>G.value?s.modelValue:s.value),c=A(()=>O.value===s.activeValue);[s.activeValue,s.inactiveValue].includes(O.value)||(d(W,s.inactiveValue),d(j,s.inactiveValue),d(J,s.inactiveValue)),F(c,e=>{var v;E.value.checked=e,s.validateEvent&&((v=w==null?void 0:w.validate)==null||v.call(w,"change").catch(f=>we()))});const n=()=>{const e=c.value?s.inactiveValue:s.activeValue;d(W,e),d(j,e),d(J,e),pe(()=>{E.value.checked=c.value})},t=()=>{if(h.value)return;const{beforeChange:e}=s;if(!e){n();return}const v=e();[X(v),P(v)].includes(!0)||Ve(Z,"beforeChange must return type `Promise<boolean>` or `boolean`"),X(v)?v.then(_=>{_&&n()}).catch(_=>{}):v&&n()},i=A(()=>l.cssVarBlock({...s.activeColor?{"on-color":s.activeColor}:null,...s.inactiveColor?{"off-color":s.inactiveColor}:null,...s.borderColor?{"border-color":s.borderColor}:null})),p=()=>{var e,v;(v=(e=E.value)==null?void 0:e.focus)==null||v.call(e)};return ee(()=>{E.value.checked=c.value}),T({focus:p,checked:c}),(e,v)=>(r(),y("div",{class:g(a(V)),style:H(a(i)),onClick:ue(t,["prevent"])},[b("input",{id:a(D),ref_key:"input",ref:E,class:g(a(l).e("input")),type:"checkbox",role:"switch","aria-checked":a(c),"aria-disabled":a(h),name:e.name,"true-value":e.activeValue,"false-value":e.inactiveValue,disabled:a(h),tabindex:e.tabindex,onChange:n,onKeydown:ce(t,["enter"])},null,42,Ie),!e.inlinePrompt&&(e.inactiveIcon||e.inactiveText)?(r(),y("span",{key:0,class:g([a(l).e("label"),a(l).em("label","left"),a(l).is("active",!a(c))])},[e.inactiveIcon?(r(),B(a(N),{key:0},{default:I(()=>[(r(),B(K(e.inactiveIcon)))]),_:1})):k("v-if",!0),!e.inactiveIcon&&e.inactiveText?(r(),y("span",{key:1,"aria-hidden":a(c)},L(e.inactiveText),9,Se)):k("v-if",!0)],2)):k("v-if",!0),b("span",{ref_key:"core",ref:x,class:g(a(l).e("core")),style:H(a(R))},[e.inlinePrompt?(r(),y("div",{key:0,class:g(a(l).e("inner"))},[e.activeIcon||e.inactiveIcon?(r(),B(a(N),{key:0,class:g(a(l).is("icon"))},{default:I(()=>[(r(),B(K(a(c)?e.activeIcon:e.inactiveIcon)))]),_:1},8,["class"])):e.activeText||e.inactiveText?(r(),y("span",{key:1,class:g(a(l).is("text")),"aria-hidden":!a(c)},L(a(c)?e.activeText:e.inactiveText),11,Le)):k("v-if",!0)],2)):k("v-if",!0),b("div",{class:g(a(l).e("action"))},[e.loading?(r(),B(a(N),{key:0,class:g(a(l).is("loading"))},{default:I(()=>[S(a(re))]),_:1},8,["class"])):k("v-if",!0)],2)],6),!e.inlinePrompt&&(e.activeIcon||e.activeText)?(r(),y("span",{key:1,class:g([a(l).e("label"),a(l).em("label","right"),a(l).is("active",a(c))])},[e.activeIcon?(r(),B(a(N),{key:0},{default:I(()=>[(r(),B(K(e.activeIcon)))]),_:1})):k("v-if",!0),!e.activeIcon&&e.activeText?(r(),y("span",{key:1,"aria-hidden":!a(c)},L(e.activeText),9,xe)):k("v-if",!0)],2)):k("v-if",!0)],14,Oe))}});var Pe=de(Ne,[["__file","/home/runner/work/element-plus/element-plus/packages/components/switch/src/switch.vue"]]);const $e=fe(Pe),ze={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Ue=b("path",{fill:"currentColor",d:"M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12Z"},null,-1),Me=[Ue];function Fe(u,T){return r(),y("svg",ze,Me)}const Ke={name:"mdi-delete",render:Fe};const He={class:"flex justify-center items-center flex-col"},We=b("h1",{class:"text-7xl"},"LiveQuery",-1),je={class:"w-50 pl-2 pr-2 inline-block"},Je={class:"inline-block"},Ze=b("div",{class:"cursor-move"},"\u{1F44B} Drag here!",-1),qe=b("div",{class:"text-xs opacity-50"},"Handle that triggers the drag event",-1),Ye={class:"text-sm opacity-50"},it=q({__name:"bronze",setup(u){const T=Q(o.TODO.name);let d=m();T.find().then(n=>{d.value=n}),T.subscribe().then(n=>{n.on("create",t=>{d.value.push(t)}),n.on("enter",(t,i)=>{}),n.on("update",(t,i)=>{const p=d.value.findIndex(e=>e.id==(t==null?void 0:t.id));d.value[p]=t}),n.on("delete",t=>{d.value=d.value.filter(i=>i.id!=(t==null?void 0:t.id))})});const s=()=>{const n=C.Object.extend(o.TODO.name),t=new n;t.set(o.TODO.keys.content,"Hello world!"),t.set(o.TODO.keys.done,!0),t.set(o.TODO.keys.user,ge()()),t.save().then(i=>{})},$=(n,t)=>{const i=C.Object.createWithoutData(o.TODO.name,n);i.set(o.TODO.keys.done,t),i.save()},w=(n,t)=>{const i=C.Object.createWithoutData(o.TODO.name,n);i.set(o.TODO.keys.content,t),i.save()},z=n=>{C.Object.createWithoutData(o.TODO.name,n).destroy()},l=m(null);let{x:D,y:h,style:G}=he(l,{initialValue:{x:40,y:40}});const[E,x]=[m(D),m(h)];let V=m();me([E,x],()=>{const n=C.Object.createWithoutData(o.DRAGGABLE.name,V.value);n.set(o.DRAGGABLE.keys.x,E.value),n.set(o.DRAGGABLE.keys.y,x.value),n.save()},{debounce:500});const R=Q(o.DRAGGABLE.name),O=(n,t)=>{const i=C.Object.extend(o.DRAGGABLE.name),p=new i;return p.set(o.DRAGGABLE.keys.name,"bronzeDrag"),p.set(o.DRAGGABLE.keys.x,n),p.set(o.DRAGGABLE.keys.y,t),p.save(),p},c=n=>{if(n){D.value=n.x,h.value=n.y;return}R.find().then(t=>{if(!(t!=null&&t.length))c(O(40,40));else{const i=t.filter(p=>p.get(o.DRAGGABLE.keys.name)=="bronzeDrag")[0];D.value=i.get(o.DRAGGABLE.keys.x),h.value=i.get(o.DRAGGABLE.keys.y),V=m(i.id)}},t=>{t.code=="101"&&c(O(40,40))})};return R.subscribe().then(n=>{n.on("create",t=>{V=m(t.id),D.value=t.get(o.DRAGGABLE.keys.x),h.value=t.get(o.DRAGGABLE.keys.y)}),n.on("enter",(t,i)=>{}),n.on("update",(t,i)=>{V=m(t.id),D.value=t.get(o.DRAGGABLE.keys.x),h.value=t.get(o.DRAGGABLE.keys.y)}),n.on("delete",t=>{})}),ee(()=>{}),c(null),(n,t)=>{const i=$e,p=Ae,e=Ke,v=ke;return r(),y("div",He,[We,(r(!0),y(ye,null,be(a(d),f=>(r(),y("div",{key:f.id,class:"flex items-center justify-center p-2"},[S(i,{modelValue:f.attributes.done,"onUpdate:modelValue":_=>f.attributes.done=_,onClick:_=>$(f.id,f.attributes.done)},null,8,["modelValue","onUpdate:modelValue","onClick"]),b("div",je,[S(p,{modelValue:f.attributes.content,"onUpdate:modelValue":_=>f.attributes.content=_,clearable:"",onInput:_=>w(f.id,f.attributes.content)},null,8,["modelValue","onUpdate:modelValue","onInput"])]),b("div",Je,[S(e,{class:"mt-1",onClick:_=>z(f.id)},null,8,["onClick"])])]))),128)),S(v,{onClick:s},{default:I(()=>[_e(" \u70B9\u51FB\u6DFB\u52A0")]),_:1}),b("div",{ref_key:"settingRef",ref:l,style:H(a(G)),class:"bg-light-50 fixed shadow select-none z-10 hover:shadow-lg px-4 py-2 border-gray-400/30 rounded fixed"},[Ze,qe,b("div",Ye," I am at "+L(Math.round(a(D)))+", "+L(Math.round(a(h))),1)],4)])}}});export{it as default};