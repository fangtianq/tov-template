import{g as f,l as A,co as K,n as O,bV as R,bA as U,i as H,bT as L,j as I,aL as M,H as W,u as z,d as h,o as b,c as k,w as C,P as $,F as q,b as B,a4 as e,B as T,R as N,al as V,a8 as E,m as J,a as x,v as Q,s as X,O as P,V as Y,W as Z}from"./index-08a94d7c.js";import{u as oo}from"./index-fc57844d.js";import{u as to,a as eo,c as G}from"./use-form-item-351b2825.js";import{T as no}from"./index-86a38320.js";const F=Symbol("buttonGroupContextKey"),so=(t,r)=>{oo({from:"type.text",replacement:"link",version:"3.0.0",scope:"props",ref:"https://element-plus.org/en-US/component/button.html#button-attributes"},f(()=>t.type==="text"));const n=A(F,void 0),a=K("button"),{form:l}=to(),o=eo(f(()=>n==null?void 0:n.size)),i=G(),m=O(),c=R(),p=f(()=>t.type||(n==null?void 0:n.type)||""),S=f(()=>{var u,g,v;return(v=(g=t.autoInsertSpace)!=null?g:(u=a.value)==null?void 0:u.autoInsertSpace)!=null?v:!1}),y=f(()=>t.tag==="button"?{ariaDisabled:i.value||t.loading,disabled:i.value||t.loading,autofocus:t.autofocus,type:t.nativeType}:{}),_=f(()=>{var u;const g=(u=c.default)==null?void 0:u.call(c);if(S.value&&(g==null?void 0:g.length)===1){const v=g[0];if((v==null?void 0:v.type)===U){const j=v.children;return new RegExp("^\\p{Unified_Ideograph}{2}$","u").test(j.trim())}}return!1});return{_disabled:i,_size:o,_type:p,_ref:m,_props:y,shouldAddSpace:_,handleClick:u=>{t.nativeType==="reset"&&(l==null||l.resetFields()),r("click",u)}}},ao=["default","primary","success","warning","info","danger","text",""],lo=["button","submit","reset"],w=H({size:L,disabled:Boolean,type:{type:String,values:ao,default:""},icon:{type:I},nativeType:{type:String,values:lo,default:"button"},loading:Boolean,loadingIcon:{type:I,default:()=>M},plain:Boolean,text:Boolean,link:Boolean,bg:Boolean,autofocus:Boolean,round:Boolean,circle:Boolean,color:String,dark:Boolean,autoInsertSpace:{type:Boolean,default:void 0},tag:{type:W([String,Object]),default:"button"}}),ro={click:t=>t instanceof MouseEvent};function d(t,r=20){return t.mix("#141414",r).toString()}function io(t){const r=G(),n=z("button");return f(()=>{let a={};const l=t.color;if(l){const o=new no(l),i=t.dark?o.tint(20).toString():d(o,20);if(t.plain)a=n.cssVarBlock({"bg-color":t.dark?d(o,90):o.tint(90).toString(),"text-color":l,"border-color":t.dark?d(o,50):o.tint(50).toString(),"hover-text-color":"var(".concat(n.cssVarName("color-white"),")"),"hover-bg-color":l,"hover-border-color":l,"active-bg-color":i,"active-text-color":"var(".concat(n.cssVarName("color-white"),")"),"active-border-color":i}),r.value&&(a[n.cssVarBlockName("disabled-bg-color")]=t.dark?d(o,90):o.tint(90).toString(),a[n.cssVarBlockName("disabled-text-color")]=t.dark?d(o,50):o.tint(50).toString(),a[n.cssVarBlockName("disabled-border-color")]=t.dark?d(o,80):o.tint(80).toString());else{const m=t.dark?d(o,30):o.tint(30).toString(),c=o.isDark()?"var(".concat(n.cssVarName("color-white"),")"):"var(".concat(n.cssVarName("color-black"),")");if(a=n.cssVarBlock({"bg-color":l,"text-color":c,"border-color":l,"hover-bg-color":m,"hover-text-color":c,"hover-border-color":m,"active-bg-color":i,"active-border-color":i}),r.value){const p=t.dark?d(o,50):o.tint(50).toString();a[n.cssVarBlockName("disabled-bg-color")]=p,a[n.cssVarBlockName("disabled-text-color")]=t.dark?"rgba(255, 255, 255, 0.5)":"var(".concat(n.cssVarName("color-white"),")"),a[n.cssVarBlockName("disabled-border-color")]=p}}}return a})}const co=h({name:"ElButton"}),uo=h({...co,props:w,emits:ro,setup(t,{expose:r,emit:n}){const a=t,l=io(a),o=z("button"),{_ref:i,_size:m,_type:c,_disabled:p,_props:S,shouldAddSpace:y,handleClick:_}=so(a,n);return r({ref:i,size:m,type:c,disabled:p,shouldAddSpace:y}),(s,u)=>(b(),k(V(s.tag),J({ref_key:"_ref",ref:i},e(S),{class:[e(o).b(),e(o).m(e(c)),e(o).m(e(m)),e(o).is("disabled",e(p)),e(o).is("loading",s.loading),e(o).is("plain",s.plain),e(o).is("round",s.round),e(o).is("circle",s.circle),e(o).is("text",s.text),e(o).is("link",s.link),e(o).is("has-bg",s.bg)],style:e(l),onClick:e(_)}),{default:C(()=>[s.loading?(b(),$(q,{key:0},[s.$slots.loading?B(s.$slots,"loading",{key:0}):(b(),k(e(T),{key:1,class:N(e(o).is("loading"))},{default:C(()=>[(b(),k(V(s.loadingIcon)))]),_:1},8,["class"]))],64)):s.icon||s.$slots.icon?(b(),k(e(T),{key:1},{default:C(()=>[s.icon?(b(),k(V(s.icon),{key:0})):B(s.$slots,"icon",{key:1})]),_:3})):E("v-if",!0),s.$slots.default?(b(),$("span",{key:2,class:N({[e(o).em("text","expand")]:e(y)})},[B(s.$slots,"default")],2)):E("v-if",!0)]),_:3},16,["class","style","onClick"]))}});var bo=x(uo,[["__file","/home/runner/work/element-plus/element-plus/packages/components/button/src/button.vue"]]);const mo={size:w.size,type:w.type},po=h({name:"ElButtonGroup"}),fo=h({...po,props:mo,setup(t){const r=t;Q(F,X({size:P(r,"size"),type:P(r,"type")}));const n=z("button");return(a,l)=>(b(),$("div",{class:N("".concat(e(n).b("group")))},[B(a.$slots,"default")],2))}});var D=x(fo,[["__file","/home/runner/work/element-plus/element-plus/packages/components/button/src/button-group.vue"]]);const Bo=Y(bo,{ButtonGroup:D});Z(D);export{Bo as E};
