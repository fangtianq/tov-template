import{bf as ye,b0 as Ne,bg as Ce,K as j,x as J,a_ as re,d as V,O as Q,N as W,l as T,z as R,$ as ee,aM as ie,h as te,a as ae,P as ce,e as B,a3 as Te,_ as ue,A as q,bh as $e,bi as we,c as U,o as de,aL as Se,f as l,aW as I,bj as Pe,bk as Ee,bl as xe,G as K,L as ke,bm as Be,M as be,a0 as Oe,aZ as Re,bn as ne,aN as ze,bo as le,aj as Ae,aY as Ve,n as Me,a7 as Fe,Z as Le,a4 as De,aR as Ue,bp as Ie,w as D,be as Ke,i as je}from"./index.f3316679.js";/* empty css             */import{_ as We}from"./SingleCube.vue_vue_type_script_setup_true_lang.bf4571b0.js";import{_ as qe}from"./webgl_animation_skinning_blending.vue_vue_type_script_setup_true_lang.8f2df92e.js";import{_ as He}from"./webgl_loader_collada.vue_vue_type_script_setup_true_lang.428be4ed.js";import{t as se}from"./error.7e8331f1.js";import{U as fe}from"./event.776e7e11.js";import{f as Ye}from"./vnode.e66176dc.js";import{u as Ze}from"./index.ac317971.js";import"./stats.module.dfeba38d.js";const O=e=>ye(e),H=Symbol("tabsRootContextKey"),Ge=(e,s,u)=>Ye(e.subTree).filter(t=>{var a;return Ce(t)&&((a=t.type)==null?void 0:a.name)===s&&!!t.component}).map(t=>t.component.uid).map(t=>u[t]).filter(t=>!!t),Xe=(e,s)=>{const u={},h=Ne([]);return{children:h,addChild:a=>{u[a.uid]=a,h.value=Ge(e,s,u)},removeChild:a=>{delete u[a],h.value=h.value.filter(S=>S.uid!==a)}}},Je=j({tabs:{type:J(Array),default:()=>re([])}}),ve="ElTabBar",Qe=V({name:ve}),et=V({...Qe,props:Je,setup(e,{expose:s}){const u=e,h=q(),c=Q(H);c||se(ve,"<el-tabs><el-tab-bar /></el-tabs>");const t=W("tabs"),a=T(),S=T(),d=()=>{let m=0,i=0;const f=["top","bottom"].includes(c.props.tabPosition)?"width":"height",v=f==="width"?"x":"y";return u.tabs.every(P=>{var E,z,n,N;const p=(z=(E=h.parent)==null?void 0:E.refs)==null?void 0:z[`tab-${P.uid}`];if(!p)return!1;if(!P.active)return!0;i=p[`client${O(f)}`];const x=v==="x"?"left":"top";m=p[`offset${O(x)}`]-((N=(n=p.parentElement)==null?void 0:n[`offset${O(x)}`])!=null?N:0);const M=p.closest(".is-scrollable");if(M){const L=window.getComputedStyle(M);m+=Number.parseFloat(L[`padding${O(x)}`])}const F=window.getComputedStyle(p);return f==="width"&&(u.tabs.length>1&&(i-=Number.parseFloat(F.paddingLeft)+Number.parseFloat(F.paddingRight)),m+=Number.parseFloat(F.paddingLeft)),!1}),{[f]:`${i}px`,transform:`translate${O(v)}(${m}px)`}},g=()=>S.value=d();return R(()=>u.tabs,async()=>{await ee(),g()},{immediate:!0}),ie(a,()=>g()),s({ref:a,update:g}),(m,i)=>(te(),ae("div",{ref_key:"barRef",ref:a,class:ce([B(t).e("active-bar"),B(t).is(B(c).props.tabPosition)]),style:Te(S.value)},null,6))}});var tt=ue(et,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-bar.vue"]]);const at=j({panes:{type:J(Array),default:()=>re([])},currentName:{type:[String,Number],default:""},editable:Boolean,type:{type:String,values:["card","border-card",""],default:""},stretch:Boolean}),st={tabClick:(e,s,u)=>u instanceof Event,tabRemove:(e,s)=>s instanceof Event},oe="ElTabNav",nt=V({name:oe,props:at,emits:st,setup(e,{expose:s,emit:u}){const h=q(),c=Q(H);c||se(oe,"<el-tabs><tab-nav /></el-tabs>");const t=W("tabs"),a=$e(),S=we(),d=T(),g=T(),m=T(),i=T(!1),f=T(0),v=T(!1),P=T(!0),E=U(()=>["top","bottom"].includes(c.props.tabPosition)?"width":"height"),z=U(()=>({transform:`translate${E.value==="width"?"X":"Y"}(-${f.value}px)`})),n=()=>{if(!d.value)return;const o=d.value[`offset${O(E.value)}`],b=f.value;if(!b)return;const r=b>o?b-o:0;f.value=r},N=()=>{if(!d.value||!g.value)return;const o=g.value[`offset${O(E.value)}`],b=d.value[`offset${O(E.value)}`],r=f.value;if(o-r<=b)return;const $=o-r>b*2?r+b:o-b;f.value=$},p=async()=>{const o=g.value;if(!i.value||!m.value||!d.value||!o)return;await ee();const b=m.value.querySelector(".is-active");if(!b)return;const r=d.value,$=["top","bottom"].includes(c.props.tabPosition),C=b.getBoundingClientRect(),y=r.getBoundingClientRect(),k=$?o.offsetWidth-y.width:o.offsetHeight-y.height,w=f.value;let _=w;$?(C.left<y.left&&(_=w-(y.left-C.left)),C.right>y.right&&(_=w+C.right-y.right)):(C.top<y.top&&(_=w-(y.top-C.top)),C.bottom>y.bottom&&(_=w+(C.bottom-y.bottom))),_=Math.max(_,0),f.value=Math.min(_,k)},x=()=>{if(!g.value||!d.value)return;const o=g.value[`offset${O(E.value)}`],b=d.value[`offset${O(E.value)}`],r=f.value;if(b<o){const $=f.value;i.value=i.value||{},i.value.prev=$,i.value.next=$+b<o,o-$<b&&(f.value=o-b)}else i.value=!1,r>0&&(f.value=0)},M=o=>{const b=o.code,{up:r,down:$,left:C,right:y}=K;if(![r,$,C,y].includes(b))return;const k=Array.from(o.currentTarget.querySelectorAll("[role=tab]:not(.is-disabled)")),w=k.indexOf(o.target);let _;b===C||b===r?w===0?_=k.length-1:_=w-1:w<k.length-1?_=w+1:_=0,k[_].focus({preventScroll:!0}),k[_].click(),F()},F=()=>{P.value&&(v.value=!0)},L=()=>v.value=!1;return R(a,o=>{o==="hidden"?P.value=!1:o==="visible"&&setTimeout(()=>P.value=!0,50)}),R(S,o=>{o?setTimeout(()=>P.value=!0,50):P.value=!1}),ie(m,x),de(()=>setTimeout(()=>p(),0)),Se(()=>x()),s({scrollToActiveTab:p,removeFocus:L}),R(()=>e.panes,()=>h.update(),{flush:"post"}),()=>{const o=i.value?[l("span",{class:[t.e("nav-prev"),t.is("disabled",!i.value.prev)],onClick:n},[l(I,null,{default:()=>[l(Pe,null,null)]})]),l("span",{class:[t.e("nav-next"),t.is("disabled",!i.value.next)],onClick:N},[l(I,null,{default:()=>[l(Ee,null,null)]})])]:null,b=e.panes.map((r,$)=>{var C,y,k,w;const _=r.uid,Y=r.props.disabled,Z=(y=(C=r.props.name)!=null?C:r.index)!=null?y:`${$}`,G=!Y&&(r.isClosable||e.editable);r.index=`${$}`;const _e=G?l(I,{class:"is-icon-close",onClick:A=>u("tabRemove",r,A)},{default:()=>[l(xe,null,null)]}):null,he=((w=(k=r.slots).label)==null?void 0:w.call(k))||r.props.label,ge=!Y&&r.active?0:-1;return l("div",{ref:`tab-${_}`,class:[t.e("item"),t.is(c.props.tabPosition),t.is("active",r.active),t.is("disabled",Y),t.is("closable",G),t.is("focus",v.value)],id:`tab-${Z}`,key:`tab-${_}`,"aria-controls":`pane-${Z}`,role:"tab","aria-selected":r.active,tabindex:ge,onFocus:()=>F(),onBlur:()=>L(),onClick:A=>{L(),u("tabClick",r,Z,A)},onKeydown:A=>{G&&(A.code===K.delete||A.code===K.backspace)&&u("tabRemove",r,A)}},[he,_e])});return l("div",{ref:m,class:[t.e("nav-wrap"),t.is("scrollable",!!i.value),t.is(c.props.tabPosition)]},[o,l("div",{class:t.e("nav-scroll"),ref:d},[l("div",{class:[t.e("nav"),t.is(c.props.tabPosition),t.is("stretch",e.stretch&&["top","bottom"].includes(c.props.tabPosition))],ref:g,style:z.value,role:"tablist",onKeydown:M},[e.type?null:l(tt,{tabs:[...e.panes]},null),b])])])}}}),lt=j({type:{type:String,values:["card","border-card",""],default:""},activeName:{type:[String,Number]},closable:Boolean,addable:Boolean,modelValue:{type:[String,Number]},editable:Boolean,tabPosition:{type:String,values:["top","right","bottom","left"],default:"top"},beforeLeave:{type:J(Function),default:()=>!0},stretch:Boolean}),X=e=>Oe(e)||Re(e),ot={[fe]:e=>X(e),tabClick:(e,s)=>s instanceof Event,tabChange:e=>X(e),edit:(e,s)=>["remove","add"].includes(s),tabRemove:e=>X(e),tabAdd:()=>!0};var rt=V({name:"ElTabs",props:lt,emits:ot,setup(e,{emit:s,slots:u,expose:h}){var c,t;const a=W("tabs"),{children:S,addChild:d,removeChild:g}=Xe(q(),"ElTabPane"),m=T(),i=T((t=(c=e.modelValue)!=null?c:e.activeName)!=null?t:"0"),f=n=>{i.value=n,s(fe,n),s("tabChange",n)},v=async n=>{var N,p,x;if(!(i.value===n||ne(n)))try{await((N=e.beforeLeave)==null?void 0:N.call(e,n,i.value))!==!1&&(f(n),(x=(p=m.value)==null?void 0:p.removeFocus)==null||x.call(p))}catch(M){}},P=(n,N,p)=>{n.props.disabled||(v(N),s("tabClick",n,p))},E=(n,N)=>{n.props.disabled||ne(n.props.name)||(N.stopPropagation(),s("edit",n.props.name,"remove"),s("tabRemove",n.props.name))},z=()=>{s("edit",void 0,"add"),s("tabAdd")};return Ze({from:'"activeName"',replacement:'"model-value" or "v-model"',scope:"ElTabs",version:"2.3.0",ref:"https://element-plus.org/en-US/component/tabs.html#attributes",type:"Attribute"},U(()=>!!e.activeName)),R(()=>e.activeName,n=>v(n)),R(()=>e.modelValue,n=>v(n)),R(i,async()=>{var n;await ee(),(n=m.value)==null||n.scrollToActiveTab()}),ke(H,{props:e,currentName:i,registerPane:d,unregisterPane:g}),h({currentName:i}),()=>{const n=e.editable||e.addable?l("span",{class:a.e("new-tab"),tabindex:"0",onClick:z,onKeydown:x=>{x.code===K.enter&&z()}},[l(I,{class:a.is("icon-plus")},{default:()=>[l(Be,null,null)]})]):null,N=l("div",{class:[a.e("header"),a.is(e.tabPosition)]},[n,l(nt,{ref:m,currentName:i.value,editable:e.editable,type:e.type,panes:S.value,stretch:e.stretch,onTabClick:P,onTabRemove:E},null)]),p=l("div",{class:a.e("content")},[be(u,"default")]);return l("div",{class:[a.b(),a.m(e.tabPosition),{[a.m("card")]:e.type==="card",[a.m("border-card")]:e.type==="border-card"}]},[...e.tabPosition!=="bottom"?[N,p]:[p,N]])}}});const it=j({label:{type:String,default:""},name:{type:[String,Number]},closable:Boolean,disabled:Boolean,lazy:Boolean}),ct=["id","aria-hidden","aria-labelledby"],me="ElTabPane",ut=V({name:me}),dt=V({...ut,props:it,setup(e){const s=e,u=q(),h=ze(),c=Q(H);c||se(me,"usage: <el-tabs><el-tab-pane /></el-tabs/>");const t=W("tab-pane"),a=T(),S=U(()=>s.closable||c.props.closable),d=le(()=>{var v;return c.currentName.value===((v=s.name)!=null?v:a.value)}),g=T(d.value),m=U(()=>{var v;return(v=s.name)!=null?v:a.value}),i=le(()=>!s.lazy||g.value||d.value);R(d,v=>{v&&(g.value=!0)});const f=Ae({uid:u.uid,slots:h,props:s,paneName:m,active:d,index:a,isClosable:S});return de(()=>{c.registerPane(f)}),Ve(()=>{c.unregisterPane(f.uid)}),(v,P)=>B(i)?Me((te(),ae("div",{key:0,id:`pane-${B(m)}`,class:ce(B(t).b()),role:"tabpanel","aria-hidden":!B(d),"aria-labelledby":`tab-${B(m)}`},[be(v.$slots,"default")],10,ct)),[[Fe,B(d)]]):Le("v-if",!0)}});var pe=ue(dt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-pane.vue"]]);const bt=De(rt,{TabPane:pe}),ft=Ue(pe);const vt={class:"flex justify-center items-center flex-col"},wt=V({__name:"gold",setup(e){const s=Ie("gold-defaultTab","SingleCube"),u=T(s),h=(c,t)=>{};return(c,t)=>{const a=ft,S=bt;return te(),ae("div",vt,[l(S,{modelValue:B(u),"onUpdate:modelValue":t[0]||(t[0]=d=>Ke(u)?u.value=d:null),class:"demo-tabs",onTabClick:h},{default:D(()=>[l(a,{label:"\u65B9\u5757",name:"SingleCube"},{default:D(()=>[l(We)]),_:1}),l(a,{label:"\u6218\u58EB",name:"second"},{default:D(()=>[l(qe)]),_:1}),l(a,{label:"\u6A21\u578B",name:"third"},{default:D(()=>[l(He)]),_:1}),l(a,{label:"Task",name:"fourth"},{default:D(()=>[je("Task")]),_:1})]),_:1},8,["modelValue"])])}}});export{wt as default};
