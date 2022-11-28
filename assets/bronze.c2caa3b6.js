import{aJ as te,M as ae,af as X,y as ne,E as P,a2 as K,a_ as $,d as J,aK as se,P as oe,c as A,aV as ie,m as h,ag as le,A as F,o as ee,h as c,a as b,b as g,e as a,R as y,b8 as re,Z as B,w as G,aS as M,aY as x,a0 as _,t as S,f as I,aX as ce,a5 as W,b6 as ue,_ as de,B as ve,a1 as pe,b9 as Z,a6 as fe,ba as Q,bb as me,bc as he,bd as o,F as ye,v as be,be as C,am as ge,i as ke}from"./index.24f04572.js";/* empty css             */import{E as _e}from"./button.6feb5de6.js";import{_ as De}from"./delete.669752ff.js";import{E as Ee}from"./input.fabe07f8.js";import{U as H,C as Y,I as j}from"./event.ff07fee5.js";import{u as Ae,a as Be}from"./index.44cccade.js";import{u as Ve}from"./index.8e5c7be9.js";import{d as we,t as Ce}from"./error.52cb36a5.js";import"./index.b49062f4.js";import"./isNil.aac33454.js";import"./index.58eb2c8b.js";const Oe=u=>["",...te].includes(u),Te=ae({modelValue:{type:[Boolean,String,Number],default:!1},value:{type:[Boolean,String,Number],default:!1},disabled:{type:Boolean,default:!1},width:{type:[String,Number],default:""},inlinePrompt:{type:Boolean,default:!1},activeIcon:{type:X},inactiveIcon:{type:X},activeText:{type:String,default:""},inactiveText:{type:String,default:""},activeColor:{type:String,default:""},inactiveColor:{type:String,default:""},borderColor:{type:String,default:""},activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},name:{type:String,default:""},validateEvent:{type:Boolean,default:!0},id:String,loading:{type:Boolean,default:!1},beforeChange:{type:ne(Function)},size:{type:String,validator:Oe},tabindex:{type:[String,Number]}}),Ge={[H]:u=>P(u)||K(u)||$(u),[Y]:u=>P(u)||K(u)||$(u),[j]:u=>P(u)||K(u)||$(u)},Ie=["onClick"],Se=["id","aria-checked","aria-disabled","name","true-value","false-value","disabled","tabindex","onKeydown"],Le=["aria-hidden"],Re=["aria-hidden"],Ne=["aria-hidden"],q="ElSwitch",xe=J({name:q}),Pe=J({...xe,props:Te,emits:Ge,setup(u,{expose:L,emit:d}){const s=u,z=ve(),{formItem:V}=Ae(),U=se(),l=oe("switch");Ve({from:'"value"',replacement:'"model-value" or "v-model"',scope:q,version:"2.3.0",ref:"https://element-plus.org/en-US/component/switch.html#attributes",type:"Attribute"},A(()=>{var e;return!!((e=z.vnode.props)!=null&&e.value)}));const{inputId:D}=Be(s,{formItemContext:V}),m=ie(A(()=>s.loading)),O=h(s.modelValue!==!1),E=h(),R=h(),w=A(()=>[l.b(),l.m(U.value),l.is("disabled",m.value),l.is("checked",r.value)]),N=A(()=>({width:le(s.width)}));F(()=>s.modelValue,()=>{O.value=!0}),F(()=>s.value,()=>{O.value=!1});const T=A(()=>O.value?s.modelValue:s.value),r=A(()=>T.value===s.activeValue);[s.activeValue,s.inactiveValue].includes(T.value)||(d(H,s.inactiveValue),d(Y,s.inactiveValue),d(j,s.inactiveValue)),F(r,e=>{var v;E.value.checked=e,s.validateEvent&&((v=V==null?void 0:V.validate)==null||v.call(V,"change").catch(f=>we()))});const n=()=>{const e=r.value?s.inactiveValue:s.activeValue;d(H,e),d(Y,e),d(j,e),pe(()=>{E.value.checked=r.value})},t=()=>{if(m.value)return;const{beforeChange:e}=s;if(!e){n();return}const v=e();[Z(v),P(v)].includes(!0)||Ce(q,"beforeChange must return type `Promise<boolean>` or `boolean`"),Z(v)?v.then(k=>{k&&n()}).catch(k=>{}):v&&n()},i=A(()=>l.cssVarBlock({...s.activeColor?{"on-color":s.activeColor}:null,...s.inactiveColor?{"off-color":s.inactiveColor}:null,...s.borderColor?{"border-color":s.borderColor}:null})),p=()=>{var e,v;(v=(e=E.value)==null?void 0:e.focus)==null||v.call(e)};return ee(()=>{E.value.checked=r.value}),L({focus:p,checked:r}),(e,v)=>(c(),b("div",{class:y(a(w)),style:W(a(i)),onClick:ue(t,["prevent"])},[g("input",{id:a(D),ref_key:"input",ref:E,class:y(a(l).e("input")),type:"checkbox",role:"switch","aria-checked":a(r),"aria-disabled":a(m),name:e.name,"true-value":e.activeValue,"false-value":e.inactiveValue,disabled:a(m),tabindex:e.tabindex,onChange:n,onKeydown:re(t,["enter"])},null,42,Se),!e.inlinePrompt&&(e.inactiveIcon||e.inactiveText)?(c(),b("span",{key:0,class:y([a(l).e("label"),a(l).em("label","left"),a(l).is("active",!a(r))])},[e.inactiveIcon?(c(),B(a(x),{key:0},{default:G(()=>[(c(),B(M(e.inactiveIcon)))]),_:1})):_("v-if",!0),!e.inactiveIcon&&e.inactiveText?(c(),b("span",{key:1,"aria-hidden":a(r)},S(e.inactiveText),9,Le)):_("v-if",!0)],2)):_("v-if",!0),g("span",{ref_key:"core",ref:R,class:y(a(l).e("core")),style:W(a(N))},[e.inlinePrompt?(c(),b("div",{key:0,class:y(a(l).e("inner"))},[e.activeIcon||e.inactiveIcon?(c(),B(a(x),{key:0,class:y(a(l).is("icon"))},{default:G(()=>[(c(),B(M(a(r)?e.activeIcon:e.inactiveIcon)))]),_:1},8,["class"])):e.activeText||e.inactiveText?(c(),b("span",{key:1,class:y(a(l).is("text")),"aria-hidden":!a(r)},S(a(r)?e.activeText:e.inactiveText),11,Re)):_("v-if",!0)],2)):_("v-if",!0),g("div",{class:y(a(l).e("action"))},[e.loading?(c(),B(a(x),{key:0,class:y(a(l).is("loading"))},{default:G(()=>[I(a(ce))]),_:1},8,["class"])):_("v-if",!0)],2)],6),!e.inlinePrompt&&(e.activeIcon||e.activeText)?(c(),b("span",{key:1,class:y([a(l).e("label"),a(l).em("label","right"),a(l).is("active",a(r))])},[e.activeIcon?(c(),B(a(x),{key:0},{default:G(()=>[(c(),B(M(e.activeIcon)))]),_:1})):_("v-if",!0),!e.activeIcon&&e.activeText?(c(),b("span",{key:1,"aria-hidden":!a(r)},S(e.activeText),9,Ne)):_("v-if",!0)],2)):_("v-if",!0)],14,Ie))}});var ze=de(Pe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/switch/src/switch.vue"]]);const Ue=fe(ze);const Ke={class:"flex justify-center items-center flex-col"},$e=g("h1",{class:"text-7xl"},"LiveQuery",-1),Fe={class:"w-50 pl-2 pr-2 inline-block"},Me={class:"inline-block"},We=ke(" \u70B9\u51FB\u6DFB\u52A0"),He=g("div",{class:"cursor-move"},"\u{1F44B} Drag here!",-1),Ye=g("div",{class:"text-xs opacity-50"},"Handle that triggers the drag event",-1),je={class:"text-sm opacity-50"},lt=J({__name:"bronze",setup(u){const L=Q(o.TODO.name);let d=h();L.find().then(n=>{d.value=n}),L.subscribe().then(n=>{n.on("create",t=>{d.value.push(t)}),n.on("enter",(t,i)=>{}),n.on("update",(t,i)=>{const p=d.value.findIndex(e=>e.id==(t==null?void 0:t.id));d.value[p]=t}),n.on("delete",t=>{d.value=d.value.filter(i=>i.id!=(t==null?void 0:t.id))})});const s=()=>{const n=C.Object.extend(o.TODO.name),t=new n;t.set(o.TODO.keys.content,"Hello world!"),t.set(o.TODO.keys.done,!0),t.set(o.TODO.keys.user,ge()()),t.save().then(i=>{})},z=(n,t)=>{const i=C.Object.createWithoutData(o.TODO.name,n);i.set(o.TODO.keys.done,t),i.save()},V=(n,t)=>{const i=C.Object.createWithoutData(o.TODO.name,n);i.set(o.TODO.keys.content,t),i.save()},U=n=>{C.Object.createWithoutData(o.TODO.name,n).destroy()},l=h(null);let{x:D,y:m,style:O}=me(l,{initialValue:{x:40,y:40}});const[E,R]=[h(D),h(m)];let w=h();he([E,R],()=>{const n=C.Object.createWithoutData(o.DRAGGABLE.name,w.value);n.set(o.DRAGGABLE.keys.x,E.value),n.set(o.DRAGGABLE.keys.y,R.value),n.save()},{debounce:500});const N=Q(o.DRAGGABLE.name),T=(n,t)=>{const i=C.Object.extend(o.DRAGGABLE.name),p=new i;return p.set(o.DRAGGABLE.keys.name,"bronzeDrag"),p.set(o.DRAGGABLE.keys.x,n),p.set(o.DRAGGABLE.keys.y,t),p.save(),p},r=n=>{if(n){D.value=n.x,m.value=n.y;return}N.find().then(t=>{if(!(t!=null&&t.length))r(T(40,40));else{const i=t.filter(p=>p.get(o.DRAGGABLE.keys.name)=="bronzeDrag")[0];D.value=i.get(o.DRAGGABLE.keys.x),m.value=i.get(o.DRAGGABLE.keys.y),w=h(i.id)}},t=>{t.code=="101"&&r(T(40,40))})};return N.subscribe().then(n=>{n.on("create",t=>{w=h(t.id),D.value=t.get(o.DRAGGABLE.keys.x),m.value=t.get(o.DRAGGABLE.keys.y)}),n.on("enter",(t,i)=>{}),n.on("update",(t,i)=>{w=h(t.id),D.value=t.get(o.DRAGGABLE.keys.x),m.value=t.get(o.DRAGGABLE.keys.y)}),n.on("delete",t=>{})}),ee(()=>{}),r(null),(n,t)=>{const i=Ue,p=Ee,e=De,v=_e;return c(),b("div",Ke,[$e,(c(!0),b(ye,null,be(a(d),f=>(c(),b("div",{key:f.id,class:"flex items-center justify-center p-2"},[I(i,{modelValue:f.attributes.done,"onUpdate:modelValue":k=>f.attributes.done=k,onClick:k=>z(f.id,f.attributes.done)},null,8,["modelValue","onUpdate:modelValue","onClick"]),g("div",Fe,[I(p,{modelValue:f.attributes.content,"onUpdate:modelValue":k=>f.attributes.content=k,clearable:"",onInput:k=>V(f.id,f.attributes.content)},null,8,["modelValue","onUpdate:modelValue","onInput"])]),g("div",Me,[I(e,{class:"mt-1",onClick:k=>U(f.id)},null,8,["onClick"])])]))),128)),I(v,{onClick:s},{default:G(()=>[We]),_:1}),g("div",{ref_key:"settingRef",ref:l,style:W(a(O)),class:"bg-light-50 fixed shadow select-none z-10 hover:shadow-lg px-4 py-2 border-gray-400/30 rounded fixed"},[He,Ye,g("div",je," I am at "+S(Math.round(a(D)))+", "+S(Math.round(a(m))),1)],4)])}}});export{lt as default};
