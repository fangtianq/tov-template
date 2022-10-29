import{be as Ne,A as j,B as Z,a_ as ce,d as V,y as G,E as W,l as P,P as R,a3 as ee,aN as ie,j as te,e as ae,I as ue,h as O,a7 as Te,_ as de,Q as q,bf as Pe,bg as we,c as I,o as be,aM as Ce,i as o,aW as U,bh as $e,bi as Se,bj as Ee,T as K,bk as xe,bl as ke,b0 as Be,x as Oe,bm as Re,v as fe,a4 as ze,aZ as Ae,ae as ne,aO as Ve,bn as oe,ak as Me,aY as Fe,n as Le,aa as De,J as Ie,M as Ue,aS as Ke,bo as je,w as D,k as We}from"./index.808f03c1.js";import{_ as qe}from"./SingleCube.vue_vue_type_script_setup_true_lang.7a736d5a.js";import{_ as He}from"./webgl_animation_skinning_blending.vue_vue_type_script_setup_true_lang.73aa8af2.js";import{_ as Ye}from"./webgl_loader_collada.vue_vue_type_script_setup_true_lang.455e82b1.js";import{t as se}from"./error.7e8331f1.js";import{f as Je}from"./vnode.91917eab.js";import{U as ve}from"./event.776e7e11.js";import{u as Qe}from"./index.bb21726f.js";import"./stats.module.dfeba38d.js";const B=e=>Ne(e),H=Symbol("tabsRootContextKey"),Xe=j({tabs:{type:Z(Array),default:()=>ce([])}}),me="ElTabBar",Ze=V({name:me}),Ge=V({...Ze,props:Xe,setup(e,{expose:a}){const b=e,w=q(),n=G(H);n||se(me,"<el-tabs><el-tab-bar /></el-tabs>");const s=W("tabs"),h=P(),m=P(),i=()=>{let _=0,c=0;const f=["top","bottom"].includes(n.props.tabPosition)?"width":"height",v=f==="width"?"x":"y";return b.tabs.every(S=>{var E,z,t,y;const u=(z=(E=w.parent)==null?void 0:E.refs)==null?void 0:z[`tab-${S.uid}`];if(!u)return!1;if(!S.active)return!0;c=u[`client${B(f)}`];const x=v==="x"?"left":"top";_=u[`offset${B(x)}`]-((y=(t=u.parentElement)==null?void 0:t[`offset${B(x)}`])!=null?y:0);const M=u.closest(".is-scrollable");if(M){const L=window.getComputedStyle(M);_+=Number.parseFloat(L[`padding${B(x)}`])}const F=window.getComputedStyle(u);return f==="width"&&(b.tabs.length>1&&(c-=Number.parseFloat(F.paddingLeft)+Number.parseFloat(F.paddingRight)),_+=Number.parseFloat(F.paddingLeft)),!1}),{[f]:`${c}px`,transform:`translate${B(v)}(${_}px)`}},p=()=>m.value=i();return R(()=>b.tabs,async()=>{await ee(),p()},{immediate:!0}),ie(h,()=>p()),a({ref:h,update:p}),(_,c)=>(te(),ae("div",{ref_key:"barRef",ref:h,class:ue([O(s).e("active-bar"),O(s).is(O(n).props.tabPosition)]),style:Te(m.value)},null,6))}});var et=de(Ge,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-bar.vue"]]);const tt=j({panes:{type:Z(Array),default:()=>ce([])},currentName:{type:[String,Number],default:""},editable:Boolean,type:{type:String,values:["card","border-card",""],default:""},stretch:Boolean}),at={tabClick:(e,a,b)=>b instanceof Event,tabRemove:(e,a)=>a instanceof Event},le="ElTabNav",st=V({name:le,props:tt,emits:at,setup(e,{expose:a,emit:b}){const w=q(),n=G(H);n||se(le,"<el-tabs><tab-nav /></el-tabs>");const s=W("tabs"),h=Pe(),m=we(),i=P(),p=P(),_=P(),c=P(!1),f=P(0),v=P(!1),S=P(!0),E=I(()=>["top","bottom"].includes(n.props.tabPosition)?"width":"height"),z=I(()=>({transform:`translate${E.value==="width"?"X":"Y"}(-${f.value}px)`})),t=()=>{if(!i.value)return;const l=i.value[`offset${B(E.value)}`],d=f.value;if(!d)return;const r=d>l?d-l:0;f.value=r},y=()=>{if(!i.value||!p.value)return;const l=p.value[`offset${B(E.value)}`],d=i.value[`offset${B(E.value)}`],r=f.value;if(l-r<=d)return;const C=l-r>d*2?r+d:l-d;f.value=C},u=async()=>{const l=p.value;if(!c.value||!_.value||!i.value||!l)return;await ee();const d=_.value.querySelector(".is-active");if(!d)return;const r=i.value,C=["top","bottom"].includes(n.props.tabPosition),T=d.getBoundingClientRect(),N=r.getBoundingClientRect(),k=C?l.offsetWidth-N.width:l.offsetHeight-N.height,$=f.value;let g=$;C?(T.left<N.left&&(g=$-(N.left-T.left)),T.right>N.right&&(g=$+T.right-N.right)):(T.top<N.top&&(g=$-(N.top-T.top)),T.bottom>N.bottom&&(g=$+(T.bottom-N.bottom))),g=Math.max(g,0),f.value=Math.min(g,k)},x=()=>{if(!p.value||!i.value)return;const l=p.value[`offset${B(E.value)}`],d=i.value[`offset${B(E.value)}`],r=f.value;if(d<l){const C=f.value;c.value=c.value||{},c.value.prev=C,c.value.next=C+d<l,l-C<d&&(f.value=l-d)}else c.value=!1,r>0&&(f.value=0)},M=l=>{const d=l.code,{up:r,down:C,left:T,right:N}=K;if(![r,C,T,N].includes(d))return;const k=Array.from(l.currentTarget.querySelectorAll("[role=tab]:not(.is-disabled)")),$=k.indexOf(l.target);let g;d===T||d===r?$===0?g=k.length-1:g=$-1:$<k.length-1?g=$+1:g=0,k[g].focus({preventScroll:!0}),k[g].click(),F()},F=()=>{S.value&&(v.value=!0)},L=()=>v.value=!1;return R(h,l=>{l==="hidden"?S.value=!1:l==="visible"&&setTimeout(()=>S.value=!0,50)}),R(m,l=>{l?setTimeout(()=>S.value=!0,50):S.value=!1}),ie(_,x),be(()=>setTimeout(()=>u(),0)),Ce(()=>x()),a({scrollToActiveTab:u,removeFocus:L}),R(()=>e.panes,()=>w.update(),{flush:"post"}),()=>{const l=c.value?[o("span",{class:[s.e("nav-prev"),s.is("disabled",!c.value.prev)],onClick:t},[o(U,null,{default:()=>[o($e,null,null)]})]),o("span",{class:[s.e("nav-next"),s.is("disabled",!c.value.next)],onClick:y},[o(U,null,{default:()=>[o(Se,null,null)]})])]:null,d=e.panes.map((r,C)=>{var T,N,k,$;const g=r.uid,Y=r.props.disabled,J=(N=(T=r.props.name)!=null?T:r.index)!=null?N:`${C}`,Q=!Y&&(r.isClosable||e.editable);r.index=`${C}`;const he=Q?o(U,{class:"is-icon-close",onClick:A=>b("tabRemove",r,A)},{default:()=>[o(Ee,null,null)]}):null,ge=(($=(k=r.slots).label)==null?void 0:$.call(k))||r.props.label,ye=!Y&&r.active?0:-1;return o("div",{ref:`tab-${g}`,class:[s.e("item"),s.is(n.props.tabPosition),s.is("active",r.active),s.is("disabled",Y),s.is("closable",Q),s.is("focus",v.value)],id:`tab-${J}`,key:`tab-${g}`,"aria-controls":`pane-${J}`,role:"tab","aria-selected":r.active,tabindex:ye,onFocus:()=>F(),onBlur:()=>L(),onClick:A=>{L(),b("tabClick",r,J,A)},onKeydown:A=>{Q&&(A.code===K.delete||A.code===K.backspace)&&b("tabRemove",r,A)}},[ge,he])});return o("div",{ref:_,class:[s.e("nav-wrap"),s.is("scrollable",!!c.value),s.is(n.props.tabPosition)]},[l,o("div",{class:s.e("nav-scroll"),ref:i},[o("div",{class:[s.e("nav"),s.is(n.props.tabPosition),s.is("stretch",e.stretch&&["top","bottom"].includes(n.props.tabPosition))],ref:p,style:z.value,role:"tablist",onKeydown:M},[e.type?null:o(et,{tabs:[...e.panes]},null),d])])])}}}),nt=e=>Je(e.subTree).filter(b=>{var w;return xe(b)&&((w=b.type)==null?void 0:w.name)==="ElTabPane"&&!!b.component}),re=(e,a)=>nt(e).map(n=>n.component.uid).map(n=>a[n]).filter(n=>!!n),ot=j({type:{type:String,values:["card","border-card",""],default:""},activeName:{type:[String,Number]},closable:Boolean,addable:Boolean,modelValue:{type:[String,Number]},editable:Boolean,tabPosition:{type:String,values:["top","right","bottom","left"],default:"top"},beforeLeave:{type:Z(Function),default:()=>!0},stretch:Boolean}),X=e=>ze(e)||Ae(e),lt={[ve]:e=>X(e),tabClick:(e,a)=>a instanceof Event,tabChange:e=>X(e),edit:(e,a)=>["remove","add"].includes(a),tabRemove:e=>X(e),tabAdd:()=>!0};var rt=V({name:"ElTabs",props:ot,emits:lt,setup(e,{emit:a,slots:b,expose:w}){var n,s;const h=q(),m=W("tabs"),i=P(),p=ke({}),_=Be([]),c=P((s=(n=e.modelValue)!=null?n:e.activeName)!=null?s:"0"),f=t=>{c.value=t,a(ve,t),a("tabChange",t)},v=async t=>{var y,u,x;if(!(c.value===t||ne(t)))try{await((y=e.beforeLeave)==null?void 0:y.call(e,t,c.value))!==!1&&(f(t),(x=(u=i.value)==null?void 0:u.removeFocus)==null||x.call(u))}catch(M){}},S=(t,y,u)=>{t.props.disabled||(v(y),a("tabClick",t,u))},E=(t,y)=>{t.props.disabled||ne(t.props.name)||(y.stopPropagation(),a("edit",t.props.name,"remove"),a("tabRemove",t.props.name))},z=()=>{a("edit",void 0,"add"),a("tabAdd")};return Qe({from:'"activeName"',replacement:'"model-value" or "v-model"',scope:"ElTabs",version:"2.3.0",ref:"https://element-plus.org/en-US/component/tabs.html#attributes",type:"Attribute"},I(()=>!!e.activeName)),R(()=>e.activeName,t=>v(t)),R(()=>e.modelValue,t=>v(t)),R(c,async()=>{var t;await ee(),(t=i.value)==null||t.scrollToActiveTab()}),Oe(H,{props:e,currentName:c,registerPane:u=>{p[u.uid]=u,_.value=re(h,p)},unregisterPane:u=>{delete p[u],_.value=re(h,p)}}),w({currentName:c}),()=>{const t=e.editable||e.addable?o("span",{class:m.e("new-tab"),tabindex:"0",onClick:z,onKeydown:x=>{x.code===K.enter&&z()}},[o(U,{class:m.is("icon-plus")},{default:()=>[o(Re,null,null)]})]):null,y=o("div",{class:[m.e("header"),m.is(e.tabPosition)]},[t,o(st,{ref:i,currentName:c.value,editable:e.editable,type:e.type,panes:_.value,stretch:e.stretch,onTabClick:S,onTabRemove:E},null)]),u=o("div",{class:m.e("content")},[fe(b,"default")]);return o("div",{class:[m.b(),m.m(e.tabPosition),{[m.m("card")]:e.type==="card",[m.m("border-card")]:e.type==="border-card"}]},[...e.tabPosition!=="bottom"?[y,u]:[u,y]])}}});const ct=j({label:{type:String,default:""},name:{type:[String,Number]},closable:Boolean,disabled:Boolean,lazy:Boolean}),it=["id","aria-hidden","aria-labelledby"],pe="ElTabPane",ut=V({name:pe}),dt=V({...ut,props:ct,setup(e){const a=e,b=q(),w=Ve(),n=G(H);n||se(pe,"usage: <el-tabs><el-tab-pane /></el-tabs/>");const s=W("tab-pane"),h=P(),m=I(()=>a.closable||n.props.closable),i=oe(()=>{var v;return n.currentName.value===((v=a.name)!=null?v:h.value)}),p=P(i.value),_=I(()=>{var v;return(v=a.name)!=null?v:h.value}),c=oe(()=>!a.lazy||p.value||i.value);R(i,v=>{v&&(p.value=!0)});const f=Me({uid:b.uid,slots:w,props:a,paneName:_,active:i,index:h,isClosable:m});return be(()=>{n.registerPane(f)}),Fe(()=>{n.unregisterPane(f.uid)}),(v,S)=>O(c)?Le((te(),ae("div",{key:0,id:`pane-${O(_)}`,class:ue(O(s).b()),role:"tabpanel","aria-hidden":!O(i),"aria-labelledby":`tab-${O(_)}`},[fe(v.$slots,"default")],10,it)),[[De,O(i)]]):Ie("v-if",!0)}});var _e=de(dt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-pane.vue"]]);const bt=Ue(rt,{TabPane:_e}),ft=Ke(_e);const vt={class:"flex justify-center items-center flex-col"},wt=V({__name:"gold",setup(e){const a=je("gold-defaultTab","SingleCube"),b=P(a),w=(n,s)=>{};return(n,s)=>{const h=ft,m=bt;return te(),ae("div",vt,[o(m,{modelValue:b.value,"onUpdate:modelValue":s[0]||(s[0]=i=>b.value=i),class:"demo-tabs",onTabClick:w},{default:D(()=>[o(h,{label:"\u65B9\u5757",name:"SingleCube"},{default:D(()=>[o(qe)]),_:1}),o(h,{label:"\u6218\u58EB",name:"second"},{default:D(()=>[o(He)]),_:1}),o(h,{label:"\u6A21\u578B",name:"third"},{default:D(()=>[o(Ye)]),_:1}),o(h,{label:"Task",name:"fourth"},{default:D(()=>[We("Task")]),_:1})]),_:1},8,["modelValue"])])}}});export{wt as default};