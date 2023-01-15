import{ai as ge,as as _e,I as U,x as Y,at as ne,d as L,N as Z,M as q,m as P,z,af as Q,au as le,a as oe,b as re,P as ie,f as O,a1 as Ne,L as ce,A as H,av as Ce,aw as Te,c as D,o as ue,ax as we,h as v,ay as I,az as Pe,aA as Ee,aB as Se,a3 as K,J as $e,aC as xe,K as de,ag as Be,aD as ke,aE as te,aF as Oe,aG as ae,ao as ze,ar as Re,q as Ae,a6 as Fe,Z as Me,a2 as Le,aH as Ve}from"./index-e6abbe05.js";import{t as ee,U as be}from"./event-e06a23af.js";import{c as k}from"./strings-8413b95f.js";import{f as De}from"./vnode-e0c94a57.js";import{u as Ie}from"./index-0b239f7c.js";const W=Symbol("tabsRootContextKey"),Ke=(e,s,f)=>De(e.subTree).filter(t=>{var n;return _e(t)&&((n=t.type)==null?void 0:n.name)===s&&!!t.component}).map(t=>t.component.uid).map(t=>f[t]).filter(t=>!!t),Ue=(e,s)=>{const f={},C=ge([]);return{children:C,addChild:n=>{f[n.uid]=n,C.value=Ke(e,s,f)},removeChild:n=>{delete f[n],C.value=C.value.filter(x=>x.uid!==n)}}},qe=U({tabs:{type:Y(Array),default:()=>ne([])}}),ve="ElTabBar",He=L({name:ve}),We=L({...He,props:qe,setup(e,{expose:s}){const f=e,C=H(),i=Z(W);i||ee(ve,"<el-tabs><el-tab-bar /></el-tabs>");const t=q("tabs"),n=P(),x=P(),d=()=>{let m=0,r=0;const u=["top","bottom"].includes(i.props.tabPosition)?"width":"height",b=u==="width"?"x":"y";return f.tabs.every(E=>{var S,R,a,_;const p=(R=(S=C.parent)==null?void 0:S.refs)==null?void 0:R[`tab-${E.uid}`];if(!p)return!1;if(!E.active)return!0;r=p[`client${k(u)}`];const $=b==="x"?"left":"top";m=p[`offset${k($)}`]-((_=(a=p.parentElement)==null?void 0:a[`offset${k($)}`])!=null?_:0);const F=p.closest(".is-scrollable");if(F){const V=window.getComputedStyle(F);m+=Number.parseFloat(V[`padding${k($)}`])}const M=window.getComputedStyle(p);return u==="width"&&(f.tabs.length>1&&(r-=Number.parseFloat(M.paddingLeft)+Number.parseFloat(M.paddingRight)),m+=Number.parseFloat(M.paddingLeft)),!1}),{[u]:`${r}px`,transform:`translate${k(b)}(${m}px)`}},y=()=>x.value=d();return z(()=>f.tabs,async()=>{await Q(),y()},{immediate:!0}),le(n,()=>y()),s({ref:n,update:y}),(m,r)=>(oe(),re("div",{ref_key:"barRef",ref:n,class:ie([O(t).e("active-bar"),O(t).is(O(i).props.tabPosition)]),style:Ne(x.value)},null,6))}});var je=ce(We,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-bar.vue"]]);const Ge=U({panes:{type:Y(Array),default:()=>ne([])},currentName:{type:[String,Number],default:""},editable:Boolean,type:{type:String,values:["card","border-card",""],default:""},stretch:Boolean}),Je={tabClick:(e,s,f)=>f instanceof Event,tabRemove:(e,s)=>s instanceof Event},se="ElTabNav",Xe=L({name:se,props:Ge,emits:Je,setup(e,{expose:s,emit:f}){const C=H(),i=Z(W);i||ee(se,"<el-tabs><tab-nav /></el-tabs>");const t=q("tabs"),n=Ce(),x=Te(),d=P(),y=P(),m=P(),r=P(!1),u=P(0),b=P(!1),E=P(!0),S=D(()=>["top","bottom"].includes(i.props.tabPosition)?"width":"height"),R=D(()=>({transform:`translate${S.value==="width"?"X":"Y"}(-${u.value}px)`})),a=()=>{if(!d.value)return;const l=d.value[`offset${k(S.value)}`],c=u.value;if(!c)return;const o=c>l?c-l:0;u.value=o},_=()=>{if(!d.value||!y.value)return;const l=y.value[`offset${k(S.value)}`],c=d.value[`offset${k(S.value)}`],o=u.value;if(l-o<=c)return;const T=l-o>c*2?o+c:l-c;u.value=T},p=async()=>{const l=y.value;if(!r.value||!m.value||!d.value||!l)return;await Q();const c=m.value.querySelector(".is-active");if(!c)return;const o=d.value,T=["top","bottom"].includes(i.props.tabPosition),N=c.getBoundingClientRect(),g=o.getBoundingClientRect(),B=T?l.offsetWidth-g.width:l.offsetHeight-g.height,w=u.value;let h=w;T?(N.left<g.left&&(h=w-(g.left-N.left)),N.right>g.right&&(h=w+N.right-g.right)):(N.top<g.top&&(h=w-(g.top-N.top)),N.bottom>g.bottom&&(h=w+(N.bottom-g.bottom))),h=Math.max(h,0),u.value=Math.min(h,B)},$=()=>{if(!y.value||!d.value)return;const l=y.value[`offset${k(S.value)}`],c=d.value[`offset${k(S.value)}`],o=u.value;if(c<l){const T=u.value;r.value=r.value||{},r.value.prev=T,r.value.next=T+c<l,l-T<c&&(u.value=l-c)}else r.value=!1,o>0&&(u.value=0)},F=l=>{const c=l.code,{up:o,down:T,left:N,right:g}=K;if(![o,T,N,g].includes(c))return;const B=Array.from(l.currentTarget.querySelectorAll("[role=tab]:not(.is-disabled)")),w=B.indexOf(l.target);let h;c===N||c===o?w===0?h=B.length-1:h=w-1:w<B.length-1?h=w+1:h=0,B[h].focus({preventScroll:!0}),B[h].click(),M()},M=()=>{E.value&&(b.value=!0)},V=()=>b.value=!1;return z(n,l=>{l==="hidden"?E.value=!1:l==="visible"&&setTimeout(()=>E.value=!0,50)}),z(x,l=>{l?setTimeout(()=>E.value=!0,50):E.value=!1}),le(m,$),ue(()=>setTimeout(()=>p(),0)),we(()=>$()),s({scrollToActiveTab:p,removeFocus:V}),z(()=>e.panes,()=>C.update(),{flush:"post"}),()=>{const l=r.value?[v("span",{class:[t.e("nav-prev"),t.is("disabled",!r.value.prev)],onClick:a},[v(I,null,{default:()=>[v(Pe,null,null)]})]),v("span",{class:[t.e("nav-next"),t.is("disabled",!r.value.next)],onClick:_},[v(I,null,{default:()=>[v(Ee,null,null)]})])]:null,c=e.panes.map((o,T)=>{var N,g,B,w;const h=o.uid,j=o.props.disabled,G=(g=(N=o.props.name)!=null?N:o.index)!=null?g:`${T}`,J=!j&&(o.isClosable||e.editable);o.index=`${T}`;const pe=J?v(I,{class:"is-icon-close",onClick:A=>f("tabRemove",o,A)},{default:()=>[v(Se,null,null)]}):null,he=((w=(B=o.slots).label)==null?void 0:w.call(B))||o.props.label,ye=!j&&o.active?0:-1;return v("div",{ref:`tab-${h}`,class:[t.e("item"),t.is(i.props.tabPosition),t.is("active",o.active),t.is("disabled",j),t.is("closable",J),t.is("focus",b.value)],id:`tab-${G}`,key:`tab-${h}`,"aria-controls":`pane-${G}`,role:"tab","aria-selected":o.active,tabindex:ye,onFocus:()=>M(),onBlur:()=>V(),onClick:A=>{V(),f("tabClick",o,G,A)},onKeydown:A=>{J&&(A.code===K.delete||A.code===K.backspace)&&f("tabRemove",o,A)}},[he,pe])});return v("div",{ref:m,class:[t.e("nav-wrap"),t.is("scrollable",!!r.value),t.is(i.props.tabPosition)]},[l,v("div",{class:t.e("nav-scroll"),ref:d},[v("div",{class:[t.e("nav"),t.is(i.props.tabPosition),t.is("stretch",e.stretch&&["top","bottom"].includes(i.props.tabPosition))],ref:y,style:R.value,role:"tablist",onKeydown:F},[e.type?null:v(je,{tabs:[...e.panes]},null),c])])])}}}),Ye=U({type:{type:String,values:["card","border-card",""],default:""},activeName:{type:[String,Number]},closable:Boolean,addable:Boolean,modelValue:{type:[String,Number]},editable:Boolean,tabPosition:{type:String,values:["top","right","bottom","left"],default:"top"},beforeLeave:{type:Y(Function),default:()=>!0},stretch:Boolean}),X=e=>Be(e)||ke(e),Ze={[be]:e=>X(e),tabClick:(e,s)=>s instanceof Event,tabChange:e=>X(e),edit:(e,s)=>["remove","add"].includes(s),tabRemove:e=>X(e),tabAdd:()=>!0};var Qe=L({name:"ElTabs",props:Ye,emits:Ze,setup(e,{emit:s,slots:f,expose:C}){var i,t;const n=q("tabs"),{children:x,addChild:d,removeChild:y}=Ue(H(),"ElTabPane"),m=P(),r=P((t=(i=e.modelValue)!=null?i:e.activeName)!=null?t:"0"),u=a=>{r.value=a,s(be,a),s("tabChange",a)},b=async a=>{var _,p,$;if(!(r.value===a||te(a)))try{await((_=e.beforeLeave)==null?void 0:_.call(e,a,r.value))!==!1&&(u(a),($=(p=m.value)==null?void 0:p.removeFocus)==null||$.call(p))}catch{}},E=(a,_,p)=>{a.props.disabled||(b(_),s("tabClick",a,p))},S=(a,_)=>{a.props.disabled||te(a.props.name)||(_.stopPropagation(),s("edit",a.props.name,"remove"),s("tabRemove",a.props.name))},R=()=>{s("edit",void 0,"add"),s("tabAdd")};return Ie({from:'"activeName"',replacement:'"model-value" or "v-model"',scope:"ElTabs",version:"2.3.0",ref:"https://element-plus.org/en-US/component/tabs.html#attributes",type:"Attribute"},D(()=>!!e.activeName)),z(()=>e.activeName,a=>b(a)),z(()=>e.modelValue,a=>b(a)),z(r,async()=>{var a;await Q(),(a=m.value)==null||a.scrollToActiveTab()}),$e(W,{props:e,currentName:r,registerPane:d,unregisterPane:y}),C({currentName:r}),()=>{const a=e.editable||e.addable?v("span",{class:n.e("new-tab"),tabindex:"0",onClick:R,onKeydown:$=>{$.code===K.enter&&R()}},[v(I,{class:n.is("icon-plus")},{default:()=>[v(xe,null,null)]})]):null,_=v("div",{class:[n.e("header"),n.is(e.tabPosition)]},[a,v(Xe,{ref:m,currentName:r.value,editable:e.editable,type:e.type,panes:x.value,stretch:e.stretch,onTabClick:E,onTabRemove:S},null)]),p=v("div",{class:n.e("content")},[de(f,"default")]);return v("div",{class:[n.b(),n.m(e.tabPosition),{[n.m("card")]:e.type==="card",[n.m("border-card")]:e.type==="border-card"}]},[...e.tabPosition!=="bottom"?[_,p]:[p,_]])}}});const et=U({label:{type:String,default:""},name:{type:[String,Number]},closable:Boolean,disabled:Boolean,lazy:Boolean}),tt=["id","aria-hidden","aria-labelledby"],fe="ElTabPane",at=L({name:fe}),st=L({...at,props:et,setup(e){const s=e,f=H(),C=Oe(),i=Z(W);i||ee(fe,"usage: <el-tabs><el-tab-pane /></el-tabs/>");const t=q("tab-pane"),n=P(),x=D(()=>s.closable||i.props.closable),d=ae(()=>{var b;return i.currentName.value===((b=s.name)!=null?b:n.value)}),y=P(d.value),m=D(()=>{var b;return(b=s.name)!=null?b:n.value}),r=ae(()=>!s.lazy||y.value||d.value);z(d,b=>{b&&(y.value=!0)});const u=ze({uid:f.uid,slots:C,props:s,paneName:m,active:d,index:n,isClosable:x});return ue(()=>{i.registerPane(u)}),Re(()=>{i.unregisterPane(u.uid)}),(b,E)=>O(r)?Ae((oe(),re("div",{key:0,id:`pane-${O(m)}`,class:ie(O(t).b()),role:"tabpanel","aria-hidden":!O(d),"aria-labelledby":`tab-${O(m)}`},[de(b.$slots,"default")],10,tt)),[[Fe,O(d)]]):Me("v-if",!0)}});var me=ce(st,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-pane.vue"]]);const ct=Le(Qe,{TabPane:me}),ut=Ve(me);export{ct as E,ut as a};
