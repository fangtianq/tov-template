import{R as ge,bw as Ne,aF as D,aO as J,aP as oe,d as F,aH as U,X as Z,aA as K,e as C,Y as k,m as Q,aR as le,o as re,a as ie,n as ce,y as B,G as Ce,az as ue,c0 as Te,c1 as Pe,f as M,h as de,bt as we,w as v,aL as V,c2 as Se,aJ as Ee,bF as $e,ay as I,p as xe,j as G,c3 as Be,bl as ae,aK as Oe,b1 as Re,bB as ke,c4 as se,g as ze,Z as Ae,O as Fe,aM as Me,E as Le,aT as Ve,aU as Ie}from"./index-01622320.js";import{t as ee,U as be}from"./event-1da57d2d.js";import{c as R}from"./strings-492f40f1.js";import{f as De}from"./vnode-24a45ddd.js";import{u as Ue}from"./index-cae2b4ed.js";const Ke=(e,n,d)=>De(e.subTree).filter(t=>{var o;return Ne(t)&&((o=t.type)==null?void 0:o.name)===n&&!!t.component}).map(t=>t.component.uid).map(t=>d[t]).filter(t=>!!t),He=(e,n)=>{const d={},T=ge([]);return{children:T,addChild:o=>{d[o.uid]=o,T.value=Ke(e,n,d)},removeChild:o=>{delete d[o],T.value=T.value.filter($=>$.uid!==o)}}},H=Symbol("tabsRootContextKey"),je=D({tabs:{type:J(Array),default:()=>oe([])}}),ve="ElTabBar",qe=F({name:ve}),We=F({...qe,props:je,setup(e,{expose:n}){const d=e,T=U(),i=Z(H);i||ee(ve,"<el-tabs><el-tab-bar /></el-tabs>");const t=K("tabs"),o=C(),$=C(),b=()=>{let f=0,m=0;const c=["top","bottom"].includes(i.props.tabPosition)?"width":"height",r=c==="width"?"x":"y",O=r==="x"?"left":"top";return d.tabs.every(E=>{var a,w;const _=(w=(a=T.parent)==null?void 0:a.refs)==null?void 0:w["tab-".concat(E.uid)];if(!_)return!1;if(!E.active)return!0;f=_["offset".concat(R(O))],m=_["client".concat(R(c))];const S=window.getComputedStyle(_);return c==="width"&&(d.tabs.length>1&&(m-=Number.parseFloat(S.paddingLeft)+Number.parseFloat(S.paddingRight)),f+=Number.parseFloat(S.paddingLeft)),!1}),{[c]:"".concat(m,"px"),transform:"translate".concat(R(r),"(").concat(f,"px)")}},h=()=>$.value=b();return k(()=>d.tabs,async()=>{await Q(),h()},{immediate:!0}),le(o,()=>h()),n({ref:o,update:h}),(f,m)=>(re(),ie("div",{ref_key:"barRef",ref:o,class:ce([B(t).e("active-bar"),B(t).is(B(i).props.tabPosition)]),style:Ce($.value)},null,6))}});var Xe=ue(We,[["__file","tab-bar.vue"]]);const Ye=D({panes:{type:J(Array),default:()=>oe([])},currentName:{type:[String,Number],default:""},editable:Boolean,type:{type:String,values:["card","border-card",""],default:""},stretch:Boolean}),Ge={tabClick:(e,n,d)=>d instanceof Event,tabRemove:(e,n)=>n instanceof Event},ne="ElTabNav",Je=F({name:ne,props:Ye,emits:Ge,setup(e,{expose:n,emit:d}){const T=U(),i=Z(H);i||ee(ne,"<el-tabs><tab-nav /></el-tabs>");const t=K("tabs"),o=Te(),$=Pe(),b=C(),h=C(),f=C(),m=C(),c=C(!1),r=C(0),O=C(!1),E=C(!0),a=M(()=>["top","bottom"].includes(i.props.tabPosition)?"width":"height"),w=M(()=>{const l=a.value==="width"?"X":"Y";return{transform:"translate".concat(l,"(-").concat(r.value,"px)")}}),_=()=>{if(!b.value)return;const l=b.value["offset".concat(R(a.value))],u=r.value;if(!u)return;const s=u>l?u-l:0;r.value=s},S=()=>{if(!b.value||!h.value)return;const l=h.value["offset".concat(R(a.value))],u=b.value["offset".concat(R(a.value))],s=r.value;if(l-s<=u)return;const g=l-s>u*2?s+u:l-u;r.value=g},z=async()=>{const l=h.value;if(!c.value||!f.value||!b.value||!l)return;await Q();const u=f.value.querySelector(".is-active");if(!u)return;const s=b.value,g=["top","bottom"].includes(i.props.tabPosition),N=u.getBoundingClientRect(),y=s.getBoundingClientRect(),x=g?l.offsetWidth-y.width:l.offsetHeight-y.height,P=r.value;let p=P;g?(N.left<y.left&&(p=P-(y.left-N.left)),N.right>y.right&&(p=P+N.right-y.right)):(N.top<y.top&&(p=P-(y.top-N.top)),N.bottom>y.bottom&&(p=P+(N.bottom-y.bottom))),p=Math.max(p,0),r.value=Math.min(p,x)},L=()=>{var l;if(!h.value||!b.value)return;e.stretch&&((l=m.value)==null||l.update());const u=h.value["offset".concat(R(a.value))],s=b.value["offset".concat(R(a.value))],g=r.value;s<u?(c.value=c.value||{},c.value.prev=g,c.value.next=g+s<u,u-g<s&&(r.value=u-s)):(c.value=!1,g>0&&(r.value=0))},pe=l=>{const u=l.code,{up:s,down:g,left:N,right:y}=I;if(![s,g,N,y].includes(u))return;const x=Array.from(l.currentTarget.querySelectorAll("[role=tab]:not(.is-disabled)")),P=x.indexOf(l.target);let p;u===N||u===s?P===0?p=x.length-1:p=P-1:P<x.length-1?p=P+1:p=0,x[p].focus({preventScroll:!0}),x[p].click(),te()},te=()=>{E.value&&(O.value=!0)},j=()=>O.value=!1;return k(o,l=>{l==="hidden"?E.value=!1:l==="visible"&&setTimeout(()=>E.value=!0,50)}),k($,l=>{l?setTimeout(()=>E.value=!0,50):E.value=!1}),le(f,L),de(()=>setTimeout(()=>z(),0)),we(()=>L()),n({scrollToActiveTab:z,removeFocus:j}),k(()=>e.panes,()=>T.update(),{flush:"post",deep:!0}),()=>{const l=c.value?[v("span",{class:[t.e("nav-prev"),t.is("disabled",!c.value.prev)],onClick:_},[v(V,null,{default:()=>[v(Se,null,null)]})]),v("span",{class:[t.e("nav-next"),t.is("disabled",!c.value.next)],onClick:S},[v(V,null,{default:()=>[v(Ee,null,null)]})])]:null,u=e.panes.map((s,g)=>{var N,y,x,P;const p=s.uid,q=s.props.disabled,W=(y=(N=s.props.name)!=null?N:s.index)!=null?y:"".concat(g),X=!q&&(s.isClosable||e.editable);s.index="".concat(g);const he=X?v(V,{class:"is-icon-close",onClick:A=>d("tabRemove",s,A)},{default:()=>[v($e,null,null)]}):null,ye=((P=(x=s.slots).label)==null?void 0:P.call(x))||s.props.label,_e=!q&&s.active?0:-1;return v("div",{ref:"tab-".concat(p),class:[t.e("item"),t.is(i.props.tabPosition),t.is("active",s.active),t.is("disabled",q),t.is("closable",X),t.is("focus",O.value)],id:"tab-".concat(W),key:"tab-".concat(p),"aria-controls":"pane-".concat(W),role:"tab","aria-selected":s.active,tabindex:_e,onFocus:()=>te(),onBlur:()=>j(),onClick:A=>{j(),d("tabClick",s,W,A)},onKeydown:A=>{X&&(A.code===I.delete||A.code===I.backspace)&&d("tabRemove",s,A)}},[ye,he])});return v("div",{ref:f,class:[t.e("nav-wrap"),t.is("scrollable",!!c.value),t.is(i.props.tabPosition)]},[l,v("div",{class:t.e("nav-scroll"),ref:b},[v("div",{class:[t.e("nav"),t.is(i.props.tabPosition),t.is("stretch",e.stretch&&["top","bottom"].includes(i.props.tabPosition))],ref:h,style:w.value,role:"tablist",onKeydown:pe},[e.type?null:v(Xe,{ref:m,tabs:[...e.panes]},null),u])])])}}}),Ze=D({type:{type:String,values:["card","border-card",""],default:""},activeName:{type:[String,Number]},closable:Boolean,addable:Boolean,modelValue:{type:[String,Number]},editable:Boolean,tabPosition:{type:String,values:["top","right","bottom","left"],default:"top"},beforeLeave:{type:J(Function),default:()=>!0},stretch:Boolean}),Y=e=>Oe(e)||Re(e),Qe={[be]:e=>Y(e),tabClick:(e,n)=>n instanceof Event,tabChange:e=>Y(e),edit:(e,n)=>["remove","add"].includes(n),tabRemove:e=>Y(e),tabAdd:()=>!0},et=F({name:"ElTabs",props:Ze,emits:Qe,setup(e,{emit:n,slots:d,expose:T}){var i,t;const o=K("tabs"),{children:$,addChild:b,removeChild:h}=He(U(),"ElTabPane"),f=C(),m=C((t=(i=e.modelValue)!=null?i:e.activeName)!=null?t:"0"),c=async(a,w=!1)=>{var _,S,z;if(!(m.value===a||ae(a)))try{await((_=e.beforeLeave)==null?void 0:_.call(e,a,m.value))!==!1&&(m.value=a,w&&(n(be,a),n("tabChange",a)),(z=(S=f.value)==null?void 0:S.removeFocus)==null||z.call(S))}catch(L){}},r=(a,w,_)=>{a.props.disabled||(c(w,!0),n("tabClick",a,_))},O=(a,w)=>{a.props.disabled||ae(a.props.name)||(w.stopPropagation(),n("edit",a.props.name,"remove"),n("tabRemove",a.props.name))},E=()=>{n("edit",void 0,"add"),n("tabAdd")};return Ue({from:'"activeName"',replacement:'"model-value" or "v-model"',scope:"ElTabs",version:"2.3.0",ref:"https://element-plus.org/en-US/component/tabs.html#attributes",type:"Attribute"},M(()=>!!e.activeName)),k(()=>e.activeName,a=>c(a)),k(()=>e.modelValue,a=>c(a)),k(m,async()=>{var a;await Q(),(a=f.value)==null||a.scrollToActiveTab()}),xe(H,{props:e,currentName:m,registerPane:b,unregisterPane:h}),T({currentName:m}),()=>{const a=d.addIcon,w=e.editable||e.addable?v("span",{class:o.e("new-tab"),tabindex:"0",onClick:E,onKeydown:z=>{z.code===I.enter&&E()}},[a?G(d,"addIcon"):v(V,{class:o.is("icon-plus")},{default:()=>[v(Be,null,null)]})]):null,_=v("div",{class:[o.e("header"),o.is(e.tabPosition)]},[w,v(Je,{ref:f,currentName:m.value,editable:e.editable,type:e.type,panes:$.value,stretch:e.stretch,onTabClick:r,onTabRemove:O},null)]),S=v("div",{class:o.e("content")},[G(d,"default")]);return v("div",{class:[o.b(),o.m(e.tabPosition),{[o.m("card")]:e.type==="card",[o.m("border-card")]:e.type==="border-card"}]},[...e.tabPosition!=="bottom"?[_,S]:[S,_]])}}}),tt=D({label:{type:String,default:""},name:{type:[String,Number]},closable:Boolean,disabled:Boolean,lazy:Boolean}),at=["id","aria-hidden","aria-labelledby"],fe="ElTabPane",st=F({name:fe}),nt=F({...st,props:tt,setup(e){const n=e,d=U(),T=ke(),i=Z(H);i||ee(fe,"usage: <el-tabs><el-tab-pane /></el-tabs/>");const t=K("tab-pane"),o=C(),$=M(()=>n.closable||i.props.closable),b=se(()=>{var r;return i.currentName.value===((r=n.name)!=null?r:o.value)}),h=C(b.value),f=M(()=>{var r;return(r=n.name)!=null?r:o.value}),m=se(()=>!n.lazy||h.value||b.value);k(b,r=>{r&&(h.value=!0)});const c=ze({uid:d.uid,slots:T,props:n,paneName:f,active:b,index:o,isClosable:$});return de(()=>{i.registerPane(c)}),Ae(()=>{i.unregisterPane(c.uid)}),(r,O)=>B(m)?Fe((re(),ie("div",{key:0,id:"pane-".concat(B(f)),class:ce(B(t).b()),role:"tabpanel","aria-hidden":!B(b),"aria-labelledby":"tab-".concat(B(f))},[G(r.$slots,"default")],10,at)),[[Me,B(b)]]):Le("v-if",!0)}});var me=ue(nt,[["__file","tab-pane.vue"]]);const ut=Ve(et,{TabPane:me}),dt=Ie(me);export{dt as E,ut as a};
