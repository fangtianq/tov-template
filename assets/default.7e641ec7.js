import{a8 as ce,bl as Le,d as H,E as B,j as $,H as G,w as d,v as V,K as Te,bm as De,h as Fe,ab as Se,_ as se,T as w,bn as J,bo as pe,bp as Re,c as b,A as Me,C as X,y as ne,l as k,bq as We,br as je,ak as ye,P as Y,x as he,o as _e,z as we,bs as x,a4 as W,aW as $e,n as qe,aa as Ue,F as le,Q as xe,bt as Ee,B as be,a_ as Ge,bu as Ke,bv as Qe,Z as Ze,aN as Je,a3 as Xe,a9 as Ye,r as Be,e as K,f as Q,I as oe,k as f,t as Oe,M as et,aS as Ce,ao as ke,al as tt,i as h,am as nt,m as ot}from"./index.f34240a3.js";import{E as Pe,b as at}from"./el-popper.848c232f.js";import{T as st}from"./index.8bfffa1c.js";import{t as ae}from"./error.7e8331f1.js";import"./index.1bb8179e.js";const ee=function(e,o,...n){let t;o.includes("mouse")||o.includes("click")?t="MouseEvents":o.includes("key")?t="KeyboardEvent":t="HTMLEvents";const l=document.createEvent(t);return l.initEvent(o,...n),e.dispatchEvent(l),e},ge=e=>{const o=ce(e)?e:[e],n=[];return o.forEach(t=>{ce(t)?n.push(...ge(t)):Le(t)&&ce(t.children)?n.push(...ge(t.children)):n.push(t)}),n},lt=H({name:"ElCollapseTransition"}),ut=H({...lt,setup(e){const o=B("collapse-transition"),n={beforeEnter(t){t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.style.maxHeight=0,t.style.paddingTop=0,t.style.paddingBottom=0},enter(t){t.dataset.oldOverflow=t.style.overflow,t.scrollHeight!==0?(t.style.maxHeight=`${t.scrollHeight}px`,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom):(t.style.maxHeight=0,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom),t.style.overflow="hidden"},afterEnter(t){t.style.maxHeight="",t.style.overflow=t.dataset.oldOverflow},beforeLeave(t){t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.dataset.oldOverflow=t.style.overflow,t.style.maxHeight=`${t.scrollHeight}px`,t.style.overflow="hidden"},leave(t){t.scrollHeight!==0&&(t.style.maxHeight=0,t.style.paddingTop=0,t.style.paddingBottom=0)},afterLeave(t){t.style.maxHeight="",t.style.overflow=t.dataset.oldOverflow,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom}};return(t,l)=>($(),G(Se,Te({name:Fe(o).b()},De(n)),{default:d(()=>[V(t.$slots,"default")]),_:3},16,["name"]))}});var te=se(ut,[["__file","/home/runner/work/element-plus/element-plus/packages/components/collapse-transition/src/collapse-transition.vue"]]);te.install=e=>{e.component(te.name,te)};const rt=te;class it{constructor(o,n){this.parent=o,this.domNode=n,this.subIndex=0,this.subIndex=0,this.init()}init(){this.subMenuItems=this.domNode.querySelectorAll("li"),this.addListeners()}gotoSubIndex(o){o===this.subMenuItems.length?o=0:o<0&&(o=this.subMenuItems.length-1),this.subMenuItems[o].focus(),this.subIndex=o}addListeners(){const o=this.parent.domNode;Array.prototype.forEach.call(this.subMenuItems,n=>{n.addEventListener("keydown",t=>{let l=!1;switch(t.code){case w.down:{this.gotoSubIndex(this.subIndex+1),l=!0;break}case w.up:{this.gotoSubIndex(this.subIndex-1),l=!0;break}case w.tab:{ee(o,"mouseleave");break}case w.enter:case w.space:{l=!0,t.currentTarget.click();break}}return l&&(t.preventDefault(),t.stopPropagation()),!1})})}}class dt{constructor(o,n){this.domNode=o,this.submenu=null,this.submenu=null,this.init(n)}init(o){this.domNode.setAttribute("tabindex","0");const n=this.domNode.querySelector(`.${o}-menu`);n&&(this.submenu=new it(this,n)),this.addListeners()}addListeners(){this.domNode.addEventListener("keydown",o=>{let n=!1;switch(o.code){case w.down:{ee(o.currentTarget,"mouseenter"),this.submenu&&this.submenu.gotoSubIndex(0),n=!0;break}case w.up:{ee(o.currentTarget,"mouseenter"),this.submenu&&this.submenu.gotoSubIndex(this.submenu.subMenuItems.length-1),n=!0;break}case w.tab:{ee(o.currentTarget,"mouseleave");break}case w.enter:case w.space:{n=!0,o.currentTarget.click();break}}n&&o.preventDefault()})}}class ct{constructor(o,n){this.domNode=o,this.init(n)}init(o){const n=this.domNode.childNodes;Array.from(n).forEach(t=>{t.nodeType===1&&new dt(t,o)})}}const pt=H({name:"ElMenuCollapseTransition",setup(){const e=B("menu");return{listeners:{onBeforeEnter:n=>n.style.opacity="0.2",onEnter(n,t){J(n,`${e.namespace.value}-opacity-transition`),n.style.opacity="1",t()},onAfterEnter(n){pe(n,`${e.namespace.value}-opacity-transition`),n.style.opacity=""},onBeforeLeave(n){n.dataset||(n.dataset={}),Re(n,e.m("collapse"))?(pe(n,e.m("collapse")),n.dataset.oldOverflow=n.style.overflow,n.dataset.scrollWidth=n.clientWidth.toString(),J(n,e.m("collapse"))):(J(n,e.m("collapse")),n.dataset.oldOverflow=n.style.overflow,n.dataset.scrollWidth=n.clientWidth.toString(),pe(n,e.m("collapse"))),n.style.width=`${n.scrollWidth}px`,n.style.overflow="hidden"},onLeave(n){J(n,"horizontal-collapse-transition"),n.style.width=`${n.dataset.scrollWidth}px`}}}}});function mt(e,o,n,t,l,y){return $(),G(Se,Te({mode:"out-in"},e.listeners),{default:d(()=>[V(e.$slots,"default")]),_:3},16)}var vt=se(pt,[["render",mt],["__file","/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-collapse-transition.vue"]]);function Ne(e,o){const n=b(()=>{let l=e.parent;const y=[o.value];for(;l.type.name!=="ElMenu";)l.props.index&&y.unshift(l.props.index),l=l.parent;return y});return{parentMenu:b(()=>{let l=e.parent;for(;l&&!["ElMenu","ElSubMenu"].includes(l.type.name);)l=l.parent;return l}),indexPath:n}}function ft(e){return b(()=>{const n=e.backgroundColor;return n?new st(n).shade(20).toString():""})}const Ae=(e,o)=>{const n=B("menu");return b(()=>n.cssVarBlock({"text-color":e.textColor||"","hover-text-color":e.textColor||"","bg-color":e.backgroundColor||"","hover-bg-color":ft(e).value||"","active-color":e.activeTextColor||"",level:`${o}`}))},ht=Me({index:{type:String,required:!0},showTimeout:{type:Number,default:300},hideTimeout:{type:Number,default:300},popperClass:String,disabled:Boolean,popperAppendToBody:{type:Boolean,default:void 0},popperOffset:{type:Number,default:6},expandCloseIcon:{type:X},expandOpenIcon:{type:X},collapseCloseIcon:{type:X},collapseOpenIcon:{type:X}}),me="ElSubMenu";var Ie=H({name:me,props:ht,setup(e,{slots:o,expose:n}){const t=xe(),{indexPath:l,parentMenu:y}=Ne(t,b(()=>e.index)),c=B("menu"),v=B("sub-menu"),u=ne("rootMenu");u||ae(me,"can not inject root menu");const r=ne(`subMenu:${y.value.uid}`);r||ae(me,"can not inject sub menu");const m=k({}),g=k({});let C;const N=k(!1),ue=k(),Z=k(null),L=b(()=>s.value==="horizontal"&&F.value?"bottom-start":"right-start"),D=b(()=>s.value==="horizontal"&&F.value||s.value==="vertical"&&!u.props.collapse?e.expandCloseIcon&&e.expandOpenIcon?S.value?e.expandOpenIcon:e.expandCloseIcon:We:e.collapseCloseIcon&&e.collapseOpenIcon?S.value?e.collapseOpenIcon:e.collapseCloseIcon:je),F=b(()=>r.level===0),j=b(()=>e.popperAppendToBody===void 0?F.value:Boolean(e.popperAppendToBody)),re=b(()=>u.props.collapse?`${c.namespace.value}-zoom-in-left`:`${c.namespace.value}-zoom-in-top`),ie=b(()=>s.value==="horizontal"&&F.value?["bottom-start","bottom-end","top-start","top-end","right-start","left-start"]:["right-start","left-start","bottom-start","bottom-end","top-start","top-end"]),S=b(()=>u.openedMenus.includes(e.index)),A=b(()=>{let p=!1;return Object.values(m.value).forEach(M=>{M.active&&(p=!0)}),Object.values(g.value).forEach(M=>{M.active&&(p=!0)}),p}),q=b(()=>u.props.backgroundColor||""),R=b(()=>u.props.activeTextColor||""),a=b(()=>u.props.textColor||""),s=b(()=>u.props.mode),i=ye({index:e.index,indexPath:l,active:A}),I=b(()=>s.value!=="horizontal"?{color:a.value}:{borderBottomColor:A.value?u.props.activeTextColor?R.value:"":"transparent",color:A.value?R.value:a.value}),_=()=>{var p,M,E;return(E=(M=(p=Z.value)==null?void 0:p.popperRef)==null?void 0:M.popperInstanceRef)==null?void 0:E.destroy()},O=p=>{p||_()},z=()=>{u.props.menuTrigger==="hover"&&u.props.mode==="horizontal"||u.props.collapse&&u.props.mode==="vertical"||e.disabled||u.handleSubMenuClick({index:e.index,indexPath:l.value,active:A.value})},P=(p,M=e.showTimeout)=>{var E;p.type!=="focus"&&(u.props.menuTrigger==="click"&&u.props.mode==="horizontal"||!u.props.collapse&&u.props.mode==="vertical"||e.disabled||(r.mouseInChild.value=!0,C==null||C(),{stop:C}=Ee(()=>{u.openMenu(e.index,l.value)},M),j.value&&((E=y.value.vnode.el)==null||E.dispatchEvent(new MouseEvent("mouseenter")))))},T=(p=!1)=>{var M,E;u.props.menuTrigger==="click"&&u.props.mode==="horizontal"||!u.props.collapse&&u.props.mode==="vertical"||(C==null||C(),r.mouseInChild.value=!1,{stop:C}=Ee(()=>!N.value&&u.closeMenu(e.index,l.value),e.hideTimeout),j.value&&p&&((M=t.parent)==null?void 0:M.type.name)==="ElSubMenu"&&((E=r.handleMouseleave)==null||E.call(r,!0)))};Y(()=>u.props.collapse,p=>O(Boolean(p)));{const p=E=>{g.value[E.index]=E},M=E=>{delete g.value[E.index]};he(`subMenu:${t.uid}`,{addSubMenu:p,removeSubMenu:M,handleMouseleave:T,mouseInChild:N,level:r.level+1})}return n({opened:S}),_e(()=>{u.addSubMenu(i),r.addSubMenu(i)}),we(()=>{r.removeSubMenu(i),u.removeSubMenu(i)}),()=>{var p;const M=[(p=o.title)==null?void 0:p.call(o),x($e,{class:v.e("icon-arrow"),style:{transform:S.value?e.expandCloseIcon&&e.expandOpenIcon||e.collapseCloseIcon&&e.collapseOpenIcon&&u.props.collapse?"none":"rotateZ(180deg)":"none"}},{default:()=>W(D.value)?x(t.appContext.components[D.value]):x(D.value)})],E=Ae(u.props,r.level+1),He=u.isMenuPopup?x(Pe,{ref:Z,visible:S.value,effect:"light",pure:!0,offset:e.popperOffset,showArrow:!1,persistent:!0,popperClass:e.popperClass,placement:L.value,teleported:j.value,fallbackPlacements:ie.value,transition:re.value,gpuAcceleration:!1},{content:()=>{var U;return x("div",{class:[c.m(s.value),c.m("popup-container"),e.popperClass],onMouseenter:de=>P(de,100),onMouseleave:()=>T(!0),onFocus:de=>P(de,100)},[x("ul",{class:[c.b(),c.m("popup"),c.m(`popup-${L.value}`)],style:E.value},[(U=o.default)==null?void 0:U.call(o)])])},default:()=>x("div",{class:v.e("title"),style:[I.value,{backgroundColor:q.value}],onClick:z},M)}):x(le,{},[x("div",{class:v.e("title"),style:[I.value,{backgroundColor:q.value}],ref:ue,onClick:z},M),x(rt,{},{default:()=>{var U;return qe(x("ul",{role:"menu",class:[c.b(),c.m("inline")],style:E.value},[(U=o.default)==null?void 0:U.call(o)]),[[Ue,S.value]])}})]);return x("li",{class:[v.b(),v.is("active",A.value),v.is("opened",S.value),v.is("disabled",e.disabled)],role:"menuitem",ariaHaspopup:!0,ariaExpanded:S.value,onMouseenter:P,onMouseleave:()=>T(!0),onFocus:P},[He])}}});const bt=Me({mode:{type:String,values:["horizontal","vertical"],default:"vertical"},defaultActive:{type:String,default:""},defaultOpeneds:{type:be(Array),default:()=>Ge([])},uniqueOpened:Boolean,router:Boolean,menuTrigger:{type:String,values:["hover","click"],default:"hover"},collapse:Boolean,backgroundColor:String,textColor:String,activeTextColor:String,collapseTransition:{type:Boolean,default:!0},ellipsis:{type:Boolean,default:!0}}),ve=e=>Array.isArray(e)&&e.every(o=>W(o)),gt={close:(e,o)=>W(e)&&ve(o),open:(e,o)=>W(e)&&ve(o),select:(e,o,n,t)=>W(e)&&ve(o)&&Ze(n)&&(t===void 0||t instanceof Promise)};var Mt=H({name:"ElMenu",props:bt,emits:gt,setup(e,{emit:o,slots:n,expose:t}){const l=xe(),y=l.appContext.config.globalProperties.$router,c=k(),v=B("menu"),u=B("sub-menu"),r=k(-1),m=k(e.defaultOpeneds&&!e.collapse?e.defaultOpeneds.slice(0):[]),g=k(e.defaultActive),C=k({}),N=k({}),ue=b(()=>e.mode==="horizontal"||e.mode==="vertical"&&e.collapse),Z=()=>{const a=g.value&&C.value[g.value];if(!a||e.mode==="horizontal"||e.collapse)return;a.indexPath.forEach(i=>{const I=N.value[i];I&&L(i,I.indexPath)})},L=(a,s)=>{m.value.includes(a)||(e.uniqueOpened&&(m.value=m.value.filter(i=>s.includes(i))),m.value.push(a),o("open",a,s))},D=(a,s)=>{const i=m.value.indexOf(a);i!==-1&&m.value.splice(i,1),o("close",a,s)},F=({index:a,indexPath:s})=>{m.value.includes(a)?D(a,s):L(a,s)},j=a=>{(e.mode==="horizontal"||e.collapse)&&(m.value=[]);const{index:s,indexPath:i}=a;if(!(s===void 0||i===void 0))if(e.router&&y){const I=a.route||s,_=y.push(I).then(O=>(O||(g.value=s),O));o("select",s,i,{index:s,indexPath:i,route:I},_)}else g.value=s,o("select",s,i,{index:s,indexPath:i})},re=a=>{const s=C.value,i=s[a]||g.value&&s[g.value]||s[e.defaultActive];i?g.value=i.index:g.value=a},ie=()=>{var a,s;if(!c.value)return-1;const i=Array.from((s=(a=c.value)==null?void 0:a.childNodes)!=null?s:[]).filter(p=>p.nodeName!=="#text"||p.nodeValue),I=64,_=Number.parseInt(getComputedStyle(c.value).paddingLeft,10),O=Number.parseInt(getComputedStyle(c.value).paddingRight,10),z=c.value.clientWidth-_-O;let P=0,T=0;return i.forEach((p,M)=>{P+=p.offsetWidth||0,P<=z-I&&(T=M+1)}),T===i.length?-1:T},S=(a,s=33.34)=>{let i;return()=>{i&&clearTimeout(i),i=setTimeout(()=>{a()},s)}};let A=!0;const q=()=>{const a=()=>{r.value=-1,Xe(()=>{r.value=ie()})};A?a():S(a)(),A=!1};Y(()=>e.defaultActive,a=>{C.value[a]||(g.value=""),re(a)}),Y(()=>e.collapse,a=>{a&&(m.value=[])}),Y(C.value,Z);let R;Ke(()=>{e.mode==="horizontal"&&e.ellipsis?R=Je(c,q).stop:R==null||R()});{const a=_=>{N.value[_.index]=_},s=_=>{delete N.value[_.index]};he("rootMenu",ye({props:e,openedMenus:m,items:C,subMenus:N,activeIndex:g,isMenuPopup:ue,addMenuItem:_=>{C.value[_.index]=_},removeMenuItem:_=>{delete C.value[_.index]},addSubMenu:a,removeSubMenu:s,openMenu:L,closeMenu:D,handleMenuItemClick:j,handleSubMenuClick:F})),he(`subMenu:${l.uid}`,{addSubMenu:a,removeSubMenu:s,mouseInChild:k(!1),level:0})}return _e(()=>{e.mode==="horizontal"&&new ct(l.vnode.el,v.namespace.value)}),t({open:s=>{const{indexPath:i}=N.value[s];i.forEach(I=>L(I,i))},close:D,handleResize:q}),()=>{var a,s;let i=(s=(a=n.default)==null?void 0:a.call(n))!=null?s:[];const I=[];if(e.mode==="horizontal"&&c.value){const z=ge(i),P=r.value===-1?z:z.slice(0,r.value),T=r.value===-1?[]:z.slice(r.value);(T==null?void 0:T.length)&&e.ellipsis&&(i=P,I.push(x(Ie,{index:"sub-menu-more",class:u.e("hide-arrow")},{title:()=>x($e,{class:u.e("icon-more")},{default:()=>x(Qe)}),default:()=>T})))}const _=Ae(e,0),O=x("ul",{key:String(e.collapse),role:"menubar",ref:c,style:_.value,class:{[v.b()]:!0,[v.m(e.mode)]:!0,[v.m("collapse")]:e.collapse}},[...i,...I]);return e.collapseTransition&&e.mode==="vertical"?x(vt,()=>O):O}}});const yt=Me({index:{type:be([String,null]),default:null},route:{type:be([String,Object])},disabled:Boolean}),_t={click:e=>W(e.index)&&Array.isArray(e.indexPath)},fe="ElMenuItem",xt=H({name:fe,components:{ElTooltip:Pe},props:yt,emits:_t,setup(e,{emit:o}){const n=xe(),t=ne("rootMenu"),l=B("menu"),y=B("menu-item");t||ae(fe,"can not inject root menu");const{parentMenu:c,indexPath:v}=Ne(n,Ye(e,"index")),u=ne(`subMenu:${c.value.uid}`);u||ae(fe,"can not inject sub menu");const r=b(()=>e.index===t.activeIndex),m=ye({index:e.index,indexPath:v,active:r}),g=()=>{e.disabled||(t.handleMenuItemClick({index:e.index,indexPath:v.value,route:e.route}),o("click",m))};return _e(()=>{u.addSubMenu(m),t.addMenuItem(m)}),we(()=>{u.removeSubMenu(m),t.removeMenuItem(m)}),{Effect:at,parentMenu:c,rootMenu:t,active:r,nsMenu:l,nsMenuItem:y,handleClick:g}}});function Ct(e,o,n,t,l,y){const c=Be("el-tooltip");return $(),K("li",{class:oe([e.nsMenuItem.b(),e.nsMenuItem.is("active",e.active),e.nsMenuItem.is("disabled",e.disabled)]),role:"menuitem",tabindex:"-1",onClick:o[0]||(o[0]=(...v)=>e.handleClick&&e.handleClick(...v))},[e.parentMenu.type.name==="ElMenu"&&e.rootMenu.props.collapse&&e.$slots.title?($(),G(c,{key:0,effect:e.Effect.DARK,placement:"right","fallback-placements":["left"],persistent:""},{content:d(()=>[V(e.$slots,"title")]),default:d(()=>[Q("div",{class:oe(e.nsMenu.be("tooltip","trigger"))},[V(e.$slots,"default")],2)]),_:3},8,["effect"])):($(),K(le,{key:1},[V(e.$slots,"default"),V(e.$slots,"title")],64))],2)}var ze=se(xt,[["render",Ct],["__file","/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-item.vue"]]);const It={title:String},Et="ElMenuItemGroup",kt=H({name:Et,props:It,setup(){return{ns:B("menu-item-group")}}});function Tt(e,o,n,t,l,y){return $(),K("li",{class:oe(e.ns.b())},[Q("div",{class:oe(e.ns.e("title"))},[e.$slots.title?V(e.$slots,"title",{key:1}):($(),K(le,{key:0},[f(Oe(e.title),1)],64))],2),Q("ul",null,[V(e.$slots,"default")])],2)}var Ve=se(kt,[["render",Tt],["__file","/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-item-group.vue"]]);const St=et(Mt,{MenuItem:ze,MenuItemGroup:Ve,SubMenu:Ie}),wt=Ce(ze);Ce(Ve);const $t=Ce(Ie);const Bt=Q("div",{class:"flex-grow"},null,-1),Ot={href:"https://github.com/fangtianq/tov-template",target:"_blank",class:"hover:border-b-orange-300 hover:border-b-2"},Pt={beforeRouteEnter(e,o,n){n(t=>{const{data:l,currentUser:y}=t,c=y()();nt.isEmpty(c)||(l.username=c.getUsername())})}},Lt=H({...Pt,__name:"default",setup(e,{expose:o}){const n=ot(),t=ke(),l=k({username:""}),y=k(ke().path),c=v=>{v=="/demo/randomPic"&&(n.push(v),t.path==v&&n.replace("/refresh"))};return o({router:n,data:l,currentUser:tt}),(v,u)=>{const r=wt,m=$t,g=St,C=Be("router-view");return $(),K(le,null,[h(g,{"default-active":y.value,class:"el-menu-demo",mode:"horizontal",ellipsis:!1,router:!0,onSelect:c},{default:d(()=>[h(r,{index:"/"},{default:d(()=>[f("\u9996\u9875")]),_:1}),Bt,h(m,{index:"2"},{title:d(()=>[f("Workspace")]),default:d(()=>[h(r,{index:"/demo/user/pinia"},{default:d(()=>[f("pinia")]),_:1}),h(r,{index:"/about"},{default:d(()=>[f("about")]),_:1}),h(r,{index:"/test"},{default:d(()=>[f("test")]),_:1})]),_:1}),h(r,{index:"/demo/randomPic"},{default:d(()=>[f("\u968F\u673A\u4E8C\u6B21\u5143")]),_:1}),h(r,{index:"/app"},{default:d(()=>[f("\u5BFC\u822A")]),_:1}),Q("a",Ot,[h(r,null,{default:d(()=>[f("\u5E2E\u52A9")]),_:1})]),l.value.username?($(),G(m,{key:0,index:""},{title:d(()=>[f("Signed in as "+Oe(l.value.username),1)]),default:d(()=>[h(m,{index:"pri"},{title:d(()=>[f("\u79C1\u6709\u76EE\u5F55")]),default:d(()=>[h(r,{index:"/pri/arenaOfValor/bronze",desc:"\u9752\u94DC"},{default:d(()=>[f("LiveQuery")]),_:1}),h(r,{index:"/pri/arenaOfValor/silver"},{default:d(()=>[f("socket(FTQPriSpringbootVueBlog)")]),_:1}),h(r,{index:"/pri/arenaOfValor/gold"},{default:d(()=>[f("Threejs")]),_:1}),h(r,{index:"/pri/arenaOfValor/platinum"},{default:d(()=>[f("\u94C2\u91D1")]),_:1}),h(r,{index:"/pri/arenaOfValor/diamond",desc:"\u94BB\u77F3"},{default:d(()=>[f("useBroadcastChannel")]),_:1}),h(r,{index:"/pri/arenaOfValor/xingyao"},{default:d(()=>[f("\u661F\u8000")]),_:1}),h(r,{index:"/pri/arenaOfValor/king "},{default:d(()=>[f("\u738B\u8005")]),_:1})]),_:1}),h(m,{index:"pri1"},{title:d(()=>[f("\u79C1\u6709\u76EE\u5F551")]),default:d(()=>[h(r,{index:"/pri/arenaOfValor/bronze"},{default:d(()=>[f("\u9752\u94DC")]),_:1})]),_:1}),h(r,{index:"/signout"},{default:d(()=>[f("Sign out")]),_:1})]),_:1})):($(),G(r,{key:1,index:"/login"},{default:d(()=>[f("\u767B\u9646")]),_:1}))]),_:1},8,["default-active"]),h(C)],64)}}});export{Lt as default};
