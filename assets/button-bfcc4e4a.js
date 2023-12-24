import{f as g,X as j,c5 as A,e as K,bB as O,b4 as L,aF as M,bz as R,aG as T,bu as X,aO as q,aA as I,d as S,o as b,c as y,x as C,a as N,F as H,j as B,y as e,aL as w,n as z,U as $,E,aB as J,az as G,p as Q,g as W,ar as x,aT as Y,aU as Z}from"./index-01622320.js";import{u as oo}from"./index-cae2b4ed.js";import{u as to,a as eo,c as F}from"./use-form-item-e55812c6.js";import{T as ao}from"./index-86a38320.js";const P=Symbol("buttonGroupContextKey"),so=(t,r)=>{oo({from:"type.text",replacement:"link",version:"3.0.0",scope:"props",ref:"https://element-plus.org/en-US/component/button.html#button-attributes"},g(()=>t.type==="text"));const a=j(P,void 0),n=A("button"),{form:l}=to(),o=eo(g(()=>a==null?void 0:a.size)),i=F(),f=K(),c=O(),p=g(()=>t.type||(a==null?void 0:a.type)||""),h=g(()=>{var u,m,v;return(v=(m=t.autoInsertSpace)!=null?m:(u=n.value)==null?void 0:u.autoInsertSpace)!=null?v:!1}),k=g(()=>t.tag==="button"?{ariaDisabled:i.value||t.loading,disabled:i.value||t.loading,autofocus:t.autofocus,type:t.nativeType}:{}),_=g(()=>{var u;const m=(u=c.default)==null?void 0:u.call(c);if(h.value&&(m==null?void 0:m.length)===1){const v=m[0];if((v==null?void 0:v.type)===L){const U=v.children;return new RegExp("^\\p{Unified_Ideograph}{2}$","u").test(U.trim())}}return!1});return{_disabled:i,_size:o,_type:p,_ref:f,_props:k,shouldAddSpace:_,handleClick:u=>{t.nativeType==="reset"&&(l==null||l.resetFields()),r("click",u)}}},no=["default","primary","success","warning","info","danger","text",""],lo=["button","submit","reset"],V=M({size:R,disabled:Boolean,type:{type:String,values:no,default:""},icon:{type:T},nativeType:{type:String,values:lo,default:"button"},loading:Boolean,loadingIcon:{type:T,default:()=>X},plain:Boolean,text:Boolean,link:Boolean,bg:Boolean,autofocus:Boolean,round:Boolean,circle:Boolean,color:String,dark:Boolean,autoInsertSpace:{type:Boolean,default:void 0},tag:{type:q([String,Object]),default:"button"}}),ro={click:t=>t instanceof MouseEvent};function d(t,r=20){return t.mix("#141414",r).toString()}function io(t){const r=F(),a=I("button");return g(()=>{let n={};const l=t.color;if(l){const o=new ao(l),i=t.dark?o.tint(20).toString():d(o,20);if(t.plain)n=a.cssVarBlock({"bg-color":t.dark?d(o,90):o.tint(90).toString(),"text-color":l,"border-color":t.dark?d(o,50):o.tint(50).toString(),"hover-text-color":"var(".concat(a.cssVarName("color-white"),")"),"hover-bg-color":l,"hover-border-color":l,"active-bg-color":i,"active-text-color":"var(".concat(a.cssVarName("color-white"),")"),"active-border-color":i}),r.value&&(n[a.cssVarBlockName("disabled-bg-color")]=t.dark?d(o,90):o.tint(90).toString(),n[a.cssVarBlockName("disabled-text-color")]=t.dark?d(o,50):o.tint(50).toString(),n[a.cssVarBlockName("disabled-border-color")]=t.dark?d(o,80):o.tint(80).toString());else{const f=t.dark?d(o,30):o.tint(30).toString(),c=o.isDark()?"var(".concat(a.cssVarName("color-white"),")"):"var(".concat(a.cssVarName("color-black"),")");if(n=a.cssVarBlock({"bg-color":l,"text-color":c,"border-color":l,"hover-bg-color":f,"hover-text-color":c,"hover-border-color":f,"active-bg-color":i,"active-border-color":i}),r.value){const p=t.dark?d(o,50):o.tint(50).toString();n[a.cssVarBlockName("disabled-bg-color")]=p,n[a.cssVarBlockName("disabled-text-color")]=t.dark?"rgba(255, 255, 255, 0.5)":"var(".concat(a.cssVarName("color-white"),")"),n[a.cssVarBlockName("disabled-border-color")]=p}}}return n})}const co=S({name:"ElButton"}),uo=S({...co,props:V,emits:ro,setup(t,{expose:r,emit:a}){const n=t,l=io(n),o=I("button"),{_ref:i,_size:f,_type:c,_disabled:p,_props:h,shouldAddSpace:k,handleClick:_}=so(n,a);return r({ref:i,size:f,type:c,disabled:p,shouldAddSpace:k}),(s,u)=>(b(),y($(s.tag),J({ref_key:"_ref",ref:i},e(h),{class:[e(o).b(),e(o).m(e(c)),e(o).m(e(f)),e(o).is("disabled",e(p)),e(o).is("loading",s.loading),e(o).is("plain",s.plain),e(o).is("round",s.round),e(o).is("circle",s.circle),e(o).is("text",s.text),e(o).is("link",s.link),e(o).is("has-bg",s.bg)],style:e(l),onClick:e(_)}),{default:C(()=>[s.loading?(b(),N(H,{key:0},[s.$slots.loading?B(s.$slots,"loading",{key:0}):(b(),y(e(w),{key:1,class:z(e(o).is("loading"))},{default:C(()=>[(b(),y($(s.loadingIcon)))]),_:1},8,["class"]))],64)):s.icon||s.$slots.icon?(b(),y(e(w),{key:1},{default:C(()=>[s.icon?(b(),y($(s.icon),{key:0})):B(s.$slots,"icon",{key:1})]),_:3})):E("v-if",!0),s.$slots.default?(b(),N("span",{key:2,class:z({[e(o).em("text","expand")]:e(k)})},[B(s.$slots,"default")],2)):E("v-if",!0)]),_:3},16,["class","style","onClick"]))}});var bo=G(uo,[["__file","button.vue"]]);const fo={size:V.size,type:V.type},po=S({name:"ElButtonGroup"}),go=S({...po,props:fo,setup(t){const r=t;Q(P,W({size:x(r,"size"),type:x(r,"type")}));const a=I("button");return(n,l)=>(b(),N("div",{class:z("".concat(e(a).b("group")))},[B(n.$slots,"default")],2))}});var D=G(go,[["__file","button-group.vue"]]);const Bo=Y(bo,{ButtonGroup:D});Z(D);export{Bo as E};
