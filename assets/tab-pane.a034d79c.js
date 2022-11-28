import{bh as ge,b1 as _e,bi as Ne,M as K,y as G,a$ as ne,d as L,Q as J,P as q,m as P,A as R,a1 as Z,aO as le,h as oe,a as re,R as ie,e as O,a5 as Ce,_ as ce,B as W,bj as Te,bk as we,c as D,o as ue,aN as Pe,f as v,aY as I,bl as $e,bm as Se,bn as Ee,I as U,N as xe,bo as ke,O as de,a2 as Be,a_ as Oe,bp as te,aP as Re,bq as ae,al as ze,b7 as Ae,p as Fe,a9 as Me,a0 as Le,a6 as Ve,aT as De}from"./index.24f04572.js";import{t as ee}from"./error.52cb36a5.js";import{U as be}from"./event.ff07fee5.js";import{f as Ie}from"./vnode.fd80f612.js";import{u as Ue}from"./index.8e5c7be9.js";const B=e=>ge(e),j=Symbol("tabsRootContextKey"),Ke=(e,s,f)=>Ie(e.subTree).filter(t=>{var n;return Ne(t)&&((n=t.type)==null?void 0:n.name)===s&&!!t.component}).map(t=>t.component.uid).map(t=>f[t]).filter(t=>!!t),qe=(e,s)=>{const f={},C=_e([]);return{children:C,addChild:n=>{f[n.uid]=n,C.value=Ke(e,s,f)},removeChild:n=>{delete f[n],C.value=C.value.filter(x=>x.uid!==n)}}},We=K({tabs:{type:G(Array),default:()=>ne([])}}),ve="ElTabBar",je=L({name:ve}),He=L({...je,props:We,setup(e,{expose:s}){const f=e,C=W(),i=J(j);i||ee(ve,"<el-tabs><el-tab-bar /></el-tabs>");const t=q("tabs"),n=P(),x=P(),d=()=>{let m=0,r=0;const u=["top","bottom"].includes(i.props.tabPosition)?"width":"height",b=u==="width"?"x":"y";return f.tabs.every($=>{var S,z,a,_;const p=(z=(S=C.parent)==null?void 0:S.refs)==null?void 0:z[`tab-${$.uid}`];if(!p)return!1;if(!$.active)return!0;r=p[`client${B(u)}`];const E=b==="x"?"left":"top";m=p[`offset${B(E)}`]-((_=(a=p.parentElement)==null?void 0:a[`offset${B(E)}`])!=null?_:0);const F=p.closest(".is-scrollable");if(F){const V=window.getComputedStyle(F);m+=Number.parseFloat(V[`padding${B(E)}`])}const M=window.getComputedStyle(p);return u==="width"&&(f.tabs.length>1&&(r-=Number.parseFloat(M.paddingLeft)+Number.parseFloat(M.paddingRight)),m+=Number.parseFloat(M.paddingLeft)),!1}),{[u]:`${r}px`,transform:`translate${B(b)}(${m}px)`}},y=()=>x.value=d();return R(()=>f.tabs,async()=>{await Z(),y()},{immediate:!0}),le(n,()=>y()),s({ref:n,update:y}),(m,r)=>(oe(),re("div",{ref_key:"barRef",ref:n,class:ie([O(t).e("active-bar"),O(t).is(O(i).props.tabPosition)]),style:Ce(x.value)},null,6))}});var Ye=ce(He,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-bar.vue"]]);const Qe=K({panes:{type:G(Array),default:()=>ne([])},currentName:{type:[String,Number],default:""},editable:Boolean,type:{type:String,values:["card","border-card",""],default:""},stretch:Boolean}),Xe={tabClick:(e,s,f)=>f instanceof Event,tabRemove:(e,s)=>s instanceof Event},se="ElTabNav",Ge=L({name:se,props:Qe,emits:Xe,setup(e,{expose:s,emit:f}){const C=W(),i=J(j);i||ee(se,"<el-tabs><tab-nav /></el-tabs>");const t=q("tabs"),n=Te(),x=we(),d=P(),y=P(),m=P(),r=P(!1),u=P(0),b=P(!1),$=P(!0),S=D(()=>["top","bottom"].includes(i.props.tabPosition)?"width":"height"),z=D(()=>({transform:`translate${S.value==="width"?"X":"Y"}(-${u.value}px)`})),a=()=>{if(!d.value)return;const l=d.value[`offset${B(S.value)}`],c=u.value;if(!c)return;const o=c>l?c-l:0;u.value=o},_=()=>{if(!d.value||!y.value)return;const l=y.value[`offset${B(S.value)}`],c=d.value[`offset${B(S.value)}`],o=u.value;if(l-o<=c)return;const T=l-o>c*2?o+c:l-c;u.value=T},p=async()=>{const l=y.value;if(!r.value||!m.value||!d.value||!l)return;await Z();const c=m.value.querySelector(".is-active");if(!c)return;const o=d.value,T=["top","bottom"].includes(i.props.tabPosition),N=c.getBoundingClientRect(),g=o.getBoundingClientRect(),k=T?l.offsetWidth-g.width:l.offsetHeight-g.height,w=u.value;let h=w;T?(N.left<g.left&&(h=w-(g.left-N.left)),N.right>g.right&&(h=w+N.right-g.right)):(N.top<g.top&&(h=w-(g.top-N.top)),N.bottom>g.bottom&&(h=w+(N.bottom-g.bottom))),h=Math.max(h,0),u.value=Math.min(h,k)},E=()=>{if(!y.value||!d.value)return;const l=y.value[`offset${B(S.value)}`],c=d.value[`offset${B(S.value)}`],o=u.value;if(c<l){const T=u.value;r.value=r.value||{},r.value.prev=T,r.value.next=T+c<l,l-T<c&&(u.value=l-c)}else r.value=!1,o>0&&(u.value=0)},F=l=>{const c=l.code,{up:o,down:T,left:N,right:g}=U;if(![o,T,N,g].includes(c))return;const k=Array.from(l.currentTarget.querySelectorAll("[role=tab]:not(.is-disabled)")),w=k.indexOf(l.target);let h;c===N||c===o?w===0?h=k.length-1:h=w-1:w<k.length-1?h=w+1:h=0,k[h].focus({preventScroll:!0}),k[h].click(),M()},M=()=>{$.value&&(b.value=!0)},V=()=>b.value=!1;return R(n,l=>{l==="hidden"?$.value=!1:l==="visible"&&setTimeout(()=>$.value=!0,50)}),R(x,l=>{l?setTimeout(()=>$.value=!0,50):$.value=!1}),le(m,E),ue(()=>setTimeout(()=>p(),0)),Pe(()=>E()),s({scrollToActiveTab:p,removeFocus:V}),R(()=>e.panes,()=>C.update(),{flush:"post"}),()=>{const l=r.value?[v("span",{class:[t.e("nav-prev"),t.is("disabled",!r.value.prev)],onClick:a},[v(I,null,{default:()=>[v($e,null,null)]})]),v("span",{class:[t.e("nav-next"),t.is("disabled",!r.value.next)],onClick:_},[v(I,null,{default:()=>[v(Se,null,null)]})])]:null,c=e.panes.map((o,T)=>{var N,g,k,w;const h=o.uid,H=o.props.disabled,Y=(g=(N=o.props.name)!=null?N:o.index)!=null?g:`${T}`,Q=!H&&(o.isClosable||e.editable);o.index=`${T}`;const pe=Q?v(I,{class:"is-icon-close",onClick:A=>f("tabRemove",o,A)},{default:()=>[v(Ee,null,null)]}):null,he=((w=(k=o.slots).label)==null?void 0:w.call(k))||o.props.label,ye=!H&&o.active?0:-1;return v("div",{ref:`tab-${h}`,class:[t.e("item"),t.is(i.props.tabPosition),t.is("active",o.active),t.is("disabled",H),t.is("closable",Q),t.is("focus",b.value)],id:`tab-${Y}`,key:`tab-${h}`,"aria-controls":`pane-${Y}`,role:"tab","aria-selected":o.active,tabindex:ye,onFocus:()=>M(),onBlur:()=>V(),onClick:A=>{V(),f("tabClick",o,Y,A)},onKeydown:A=>{Q&&(A.code===U.delete||A.code===U.backspace)&&f("tabRemove",o,A)}},[he,pe])});return v("div",{ref:m,class:[t.e("nav-wrap"),t.is("scrollable",!!r.value),t.is(i.props.tabPosition)]},[l,v("div",{class:t.e("nav-scroll"),ref:d},[v("div",{class:[t.e("nav"),t.is(i.props.tabPosition),t.is("stretch",e.stretch&&["top","bottom"].includes(i.props.tabPosition))],ref:y,style:z.value,role:"tablist",onKeydown:F},[e.type?null:v(Ye,{tabs:[...e.panes]},null),c])])])}}}),Je=K({type:{type:String,values:["card","border-card",""],default:""},activeName:{type:[String,Number]},closable:Boolean,addable:Boolean,modelValue:{type:[String,Number]},editable:Boolean,tabPosition:{type:String,values:["top","right","bottom","left"],default:"top"},beforeLeave:{type:G(Function),default:()=>!0},stretch:Boolean}),X=e=>Be(e)||Oe(e),Ze={[be]:e=>X(e),tabClick:(e,s)=>s instanceof Event,tabChange:e=>X(e),edit:(e,s)=>["remove","add"].includes(s),tabRemove:e=>X(e),tabAdd:()=>!0};var et=L({name:"ElTabs",props:Je,emits:Ze,setup(e,{emit:s,slots:f,expose:C}){var i,t;const n=q("tabs"),{children:x,addChild:d,removeChild:y}=qe(W(),"ElTabPane"),m=P(),r=P((t=(i=e.modelValue)!=null?i:e.activeName)!=null?t:"0"),u=a=>{r.value=a,s(be,a),s("tabChange",a)},b=async a=>{var _,p,E;if(!(r.value===a||te(a)))try{await((_=e.beforeLeave)==null?void 0:_.call(e,a,r.value))!==!1&&(u(a),(E=(p=m.value)==null?void 0:p.removeFocus)==null||E.call(p))}catch{}},$=(a,_,p)=>{a.props.disabled||(b(_),s("tabClick",a,p))},S=(a,_)=>{a.props.disabled||te(a.props.name)||(_.stopPropagation(),s("edit",a.props.name,"remove"),s("tabRemove",a.props.name))},z=()=>{s("edit",void 0,"add"),s("tabAdd")};return Ue({from:'"activeName"',replacement:'"model-value" or "v-model"',scope:"ElTabs",version:"2.3.0",ref:"https://element-plus.org/en-US/component/tabs.html#attributes",type:"Attribute"},D(()=>!!e.activeName)),R(()=>e.activeName,a=>b(a)),R(()=>e.modelValue,a=>b(a)),R(r,async()=>{var a;await Z(),(a=m.value)==null||a.scrollToActiveTab()}),xe(j,{props:e,currentName:r,registerPane:d,unregisterPane:y}),C({currentName:r}),()=>{const a=e.editable||e.addable?v("span",{class:n.e("new-tab"),tabindex:"0",onClick:z,onKeydown:E=>{E.code===U.enter&&z()}},[v(I,{class:n.is("icon-plus")},{default:()=>[v(ke,null,null)]})]):null,_=v("div",{class:[n.e("header"),n.is(e.tabPosition)]},[a,v(Ge,{ref:m,currentName:r.value,editable:e.editable,type:e.type,panes:x.value,stretch:e.stretch,onTabClick:$,onTabRemove:S},null)]),p=v("div",{class:n.e("content")},[de(f,"default")]);return v("div",{class:[n.b(),n.m(e.tabPosition),{[n.m("card")]:e.type==="card",[n.m("border-card")]:e.type==="border-card"}]},[...e.tabPosition!=="bottom"?[_,p]:[p,_]])}}});const tt=K({label:{type:String,default:""},name:{type:[String,Number]},closable:Boolean,disabled:Boolean,lazy:Boolean}),at=["id","aria-hidden","aria-labelledby"],fe="ElTabPane",st=L({name:fe}),nt=L({...st,props:tt,setup(e){const s=e,f=W(),C=Re(),i=J(j);i||ee(fe,"usage: <el-tabs><el-tab-pane /></el-tabs/>");const t=q("tab-pane"),n=P(),x=D(()=>s.closable||i.props.closable),d=ae(()=>{var b;return i.currentName.value===((b=s.name)!=null?b:n.value)}),y=P(d.value),m=D(()=>{var b;return(b=s.name)!=null?b:n.value}),r=ae(()=>!s.lazy||y.value||d.value);R(d,b=>{b&&(y.value=!0)});const u=ze({uid:f.uid,slots:C,props:s,paneName:m,active:d,index:n,isClosable:x});return ue(()=>{i.registerPane(u)}),Ae(()=>{i.unregisterPane(u.uid)}),(b,$)=>O(r)?Fe((oe(),re("div",{key:0,id:`pane-${O(m)}`,class:ie(O(t).b()),role:"tabpanel","aria-hidden":!O(d),"aria-labelledby":`tab-${O(m)}`},[de(b.$slots,"default")],10,at)),[[Me,O(d)]]):Le("v-if",!0)}});var me=ce(nt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-pane.vue"]]);const ut=Ve(et,{TabPane:me}),dt=De(me);export{dt as E,ut as a};
