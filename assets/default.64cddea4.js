import{d as j,O as D,h as A,Y,w as i,N as W,Z as Se,bC as Le,e as X,a9 as we,_ as ie,H as N,bD as te,bE as pe,bF as He,c as g,L as ye,ae as ne,P as le,m as E,bG as Ve,bm as Re,ak as Me,A as oe,M as he,o as _e,G as $e,bH as I,a1 as Q,aX as Be,p as We,a8 as je,F as de,B as xe,bI as ke,y as be,a_ as qe,bJ as Ge,bK as Ue,T as Ke,aN as Qe,a0 as Ze,a7 as Je,r as Oe,a as ee,b as G,Q as ue,i as f,t as ge,a5 as Xe,aS as Ce,ah as Te,ai as Ye,bL as et,j as tt,ao as Ee,al as nt,f as v,am as ot,n as at}from"./index.e2680d94.js";import{u as st}from"./useDarks.8ed21f3d.js";/* empty css             */import{E as Pe,b as lt}from"./popper.da03fc45.js";import{T as ut}from"./index.8bfffa1c.js";import{t as re}from"./error.7e8331f1.js";import{f as rt}from"./vnode.7cf53714.js";import"./isNil.98bb3b88.js";import"./index.1f13e4e9.js";const ae=function(e,o,...n){let t;o.includes("mouse")||o.includes("click")?t="MouseEvents":o.includes("key")?t="KeyboardEvent":t="HTMLEvents";const u=document.createEvent(t);return u.initEvent(o,...n),e.dispatchEvent(u),e},it=j({name:"ElCollapseTransition"}),dt=j({...it,setup(e){const o=D("collapse-transition"),n={beforeEnter(t){t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.style.maxHeight=0,t.style.paddingTop=0,t.style.paddingBottom=0},enter(t){t.dataset.oldOverflow=t.style.overflow,t.scrollHeight!==0?(t.style.maxHeight=`${t.scrollHeight}px`,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom):(t.style.maxHeight=0,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom),t.style.overflow="hidden"},afterEnter(t){t.style.maxHeight="",t.style.overflow=t.dataset.oldOverflow},beforeLeave(t){t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.dataset.oldOverflow=t.style.overflow,t.style.maxHeight=`${t.scrollHeight}px`,t.style.overflow="hidden"},leave(t){t.scrollHeight!==0&&(t.style.maxHeight=0,t.style.paddingTop=0,t.style.paddingBottom=0)},afterLeave(t){t.style.maxHeight="",t.style.overflow=t.dataset.oldOverflow,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom}};return(t,u)=>(A(),Y(we,Se({name:X(o).b()},Le(n)),{default:i(()=>[W(t.$slots,"default")]),_:3},16,["name"]))}});var se=ie(dt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/collapse-transition/src/collapse-transition.vue"]]);se.install=e=>{e.component(se.name,se)};const ct=se;class pt{constructor(o,n){this.parent=o,this.domNode=n,this.subIndex=0,this.subIndex=0,this.init()}init(){this.subMenuItems=this.domNode.querySelectorAll("li"),this.addListeners()}gotoSubIndex(o){o===this.subMenuItems.length?o=0:o<0&&(o=this.subMenuItems.length-1),this.subMenuItems[o].focus(),this.subIndex=o}addListeners(){const o=this.parent.domNode;Array.prototype.forEach.call(this.subMenuItems,n=>{n.addEventListener("keydown",t=>{let u=!1;switch(t.code){case N.down:{this.gotoSubIndex(this.subIndex+1),u=!0;break}case N.up:{this.gotoSubIndex(this.subIndex-1),u=!0;break}case N.tab:{ae(o,"mouseleave");break}case N.enter:case N.space:{u=!0,t.currentTarget.click();break}}return u&&(t.preventDefault(),t.stopPropagation()),!1})})}}class mt{constructor(o,n){this.domNode=o,this.submenu=null,this.submenu=null,this.init(n)}init(o){this.domNode.setAttribute("tabindex","0");const n=this.domNode.querySelector(`.${o}-menu`);n&&(this.submenu=new pt(this,n)),this.addListeners()}addListeners(){this.domNode.addEventListener("keydown",o=>{let n=!1;switch(o.code){case N.down:{ae(o.currentTarget,"mouseenter"),this.submenu&&this.submenu.gotoSubIndex(0),n=!0;break}case N.up:{ae(o.currentTarget,"mouseenter"),this.submenu&&this.submenu.gotoSubIndex(this.submenu.subMenuItems.length-1),n=!0;break}case N.tab:{ae(o.currentTarget,"mouseleave");break}case N.enter:case N.space:{n=!0,o.currentTarget.click();break}}n&&o.preventDefault()})}}class ft{constructor(o,n){this.domNode=o,this.init(n)}init(o){const n=this.domNode.childNodes;Array.from(n).forEach(t=>{t.nodeType===1&&new mt(t,o)})}}const vt=j({name:"ElMenuCollapseTransition",setup(){const e=D("menu");return{listeners:{onBeforeEnter:n=>n.style.opacity="0.2",onEnter(n,t){te(n,`${e.namespace.value}-opacity-transition`),n.style.opacity="1",t()},onAfterEnter(n){pe(n,`${e.namespace.value}-opacity-transition`),n.style.opacity=""},onBeforeLeave(n){n.dataset||(n.dataset={}),He(n,e.m("collapse"))?(pe(n,e.m("collapse")),n.dataset.oldOverflow=n.style.overflow,n.dataset.scrollWidth=n.clientWidth.toString(),te(n,e.m("collapse"))):(te(n,e.m("collapse")),n.dataset.oldOverflow=n.style.overflow,n.dataset.scrollWidth=n.clientWidth.toString(),pe(n,e.m("collapse"))),n.style.width=`${n.scrollWidth}px`,n.style.overflow="hidden"},onLeave(n){te(n,"horizontal-collapse-transition"),n.style.width=`${n.dataset.scrollWidth}px`}}}}});function ht(e,o,n,t,u,y){return A(),Y(we,Se({mode:"out-in"},e.listeners),{default:i(()=>[W(e.$slots,"default")]),_:3},16)}var bt=ie(vt,[["render",ht],["__file","/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-collapse-transition.vue"]]);function Ne(e,o){const n=g(()=>{let u=e.parent;const y=[o.value];for(;u.type.name!=="ElMenu";)u.props.index&&y.unshift(u.props.index),u=u.parent;return y});return{parentMenu:g(()=>{let u=e.parent;for(;u&&!["ElMenu","ElSubMenu"].includes(u.type.name);)u=u.parent;return u}),indexPath:n}}function gt(e){return g(()=>{const n=e.backgroundColor;return n?new ut(n).shade(20).toString():""})}const Ae=(e,o)=>{const n=D("menu");return g(()=>n.cssVarBlock({"text-color":e.textColor||"","hover-text-color":e.textColor||"","bg-color":e.backgroundColor||"","hover-bg-color":gt(e).value||"","active-color":e.activeTextColor||"",level:`${o}`}))},yt=ye({index:{type:String,required:!0},showTimeout:{type:Number,default:300},hideTimeout:{type:Number,default:300},popperClass:String,disabled:Boolean,popperAppendToBody:{type:Boolean,default:void 0},popperOffset:{type:Number,default:6},expandCloseIcon:{type:ne},expandOpenIcon:{type:ne},collapseCloseIcon:{type:ne},collapseOpenIcon:{type:ne}}),me="ElSubMenu";var Ie=j({name:me,props:yt,setup(e,{slots:o,expose:n}){const t=xe(),{indexPath:u,parentMenu:y}=Ne(t,g(()=>e.index)),d=D("menu"),h=D("sub-menu"),l=le("rootMenu");l||re(me,"can not inject root menu");const c=le(`subMenu:${y.value.uid}`);c||re(me,"can not inject sub menu");const b=E({}),M=E({});let x;const B=E(!1),U=E(),q=E(null),P=g(()=>s.value==="horizontal"&&z.value?"bottom-start":"right-start"),S=g(()=>s.value==="horizontal"&&z.value||s.value==="vertical"&&!l.props.collapse?e.expandCloseIcon&&e.expandOpenIcon?w.value?e.expandOpenIcon:e.expandCloseIcon:Ve:e.collapseCloseIcon&&e.collapseOpenIcon?w.value?e.collapseOpenIcon:e.collapseCloseIcon:Re),z=g(()=>c.level===0),p=g(()=>e.popperAppendToBody===void 0?z.value:Boolean(e.popperAppendToBody)),H=g(()=>l.props.collapse?`${d.namespace.value}-zoom-in-left`:`${d.namespace.value}-zoom-in-top`),Z=g(()=>s.value==="horizontal"&&z.value?["bottom-start","bottom-end","top-start","top-end","right-start","left-start"]:["right-start","left-start","bottom-start","bottom-end","top-start","top-end"]),w=g(()=>l.openedMenus.includes(e.index)),$=g(()=>{let m=!1;return Object.values(b.value).forEach(_=>{_.active&&(m=!0)}),Object.values(M.value).forEach(_=>{_.active&&(m=!0)}),m}),V=g(()=>l.props.backgroundColor||""),K=g(()=>l.props.activeTextColor||""),a=g(()=>l.props.textColor||""),s=g(()=>l.props.mode),r=Me({index:e.index,indexPath:u,active:$}),k=g(()=>s.value!=="horizontal"?{color:a.value}:{borderBottomColor:$.value?l.props.activeTextColor?K.value:"":"transparent",color:$.value?K.value:a.value}),C=()=>{var m,_,T;return(T=(_=(m=q.value)==null?void 0:m.popperRef)==null?void 0:_.popperInstanceRef)==null?void 0:T.destroy()},F=m=>{m||C()},R=()=>{l.props.menuTrigger==="hover"&&l.props.mode==="horizontal"||l.props.collapse&&l.props.mode==="vertical"||e.disabled||l.handleSubMenuClick({index:e.index,indexPath:u.value,active:$.value})},L=(m,_=e.showTimeout)=>{var T;m.type!=="focus"&&(l.props.menuTrigger==="click"&&l.props.mode==="horizontal"||!l.props.collapse&&l.props.mode==="vertical"||e.disabled||(c.mouseInChild.value=!0,x==null||x(),{stop:x}=ke(()=>{l.openMenu(e.index,u.value)},_),p.value&&((T=y.value.vnode.el)==null||T.dispatchEvent(new MouseEvent("mouseenter")))))},O=(m=!1)=>{var _,T;l.props.menuTrigger==="click"&&l.props.mode==="horizontal"||!l.props.collapse&&l.props.mode==="vertical"||(x==null||x(),c.mouseInChild.value=!1,{stop:x}=ke(()=>!B.value&&l.closeMenu(e.index,u.value),e.hideTimeout),p.value&&m&&((_=t.parent)==null?void 0:_.type.name)==="ElSubMenu"&&((T=c.handleMouseleave)==null||T.call(c,!0)))};oe(()=>l.props.collapse,m=>F(Boolean(m)));{const m=T=>{M.value[T.index]=T},_=T=>{delete M.value[T.index]};he(`subMenu:${t.uid}`,{addSubMenu:m,removeSubMenu:_,handleMouseleave:O,mouseInChild:B,level:c.level+1})}return n({opened:w}),_e(()=>{l.addSubMenu(r),c.addSubMenu(r)}),$e(()=>{c.removeSubMenu(r),l.removeSubMenu(r)}),()=>{var m;const _=[(m=o.title)==null?void 0:m.call(o),I(Be,{class:h.e("icon-arrow"),style:{transform:w.value?e.expandCloseIcon&&e.expandOpenIcon||e.collapseCloseIcon&&e.collapseOpenIcon&&l.props.collapse?"none":"rotateZ(180deg)":"none"}},{default:()=>Q(S.value)?I(t.appContext.components[S.value]):I(S.value)})],T=Ae(l.props,c.level+1),Fe=l.isMenuPopup?I(Pe,{ref:q,visible:w.value,effect:"light",pure:!0,offset:e.popperOffset,showArrow:!1,persistent:!0,popperClass:e.popperClass,placement:P.value,teleported:p.value,fallbackPlacements:Z.value,transition:H.value,gpuAcceleration:!1},{content:()=>{var J;return I("div",{class:[d.m(s.value),d.m("popup-container"),e.popperClass],onMouseenter:ce=>L(ce,100),onMouseleave:()=>O(!0),onFocus:ce=>L(ce,100)},[I("ul",{class:[d.b(),d.m("popup"),d.m(`popup-${P.value}`)],style:T.value},[(J=o.default)==null?void 0:J.call(o)])])},default:()=>I("div",{class:h.e("title"),style:[k.value,{backgroundColor:V.value}],onClick:R},_)}):I(de,{},[I("div",{class:h.e("title"),style:[k.value,{backgroundColor:V.value}],ref:U,onClick:R},_),I(ct,{},{default:()=>{var J;return We(I("ul",{role:"menu",class:[d.b(),d.m("inline")],style:T.value},[(J=o.default)==null?void 0:J.call(o)]),[[je,w.value]])}})]);return I("li",{class:[h.b(),h.is("active",$.value),h.is("opened",w.value),h.is("disabled",e.disabled)],role:"menuitem",ariaHaspopup:!0,ariaExpanded:w.value,onMouseenter:L,onMouseleave:()=>O(!0),onFocus:L},[Fe])}}});const Mt=ye({mode:{type:String,values:["horizontal","vertical"],default:"vertical"},defaultActive:{type:String,default:""},defaultOpeneds:{type:be(Array),default:()=>qe([])},uniqueOpened:Boolean,router:Boolean,menuTrigger:{type:String,values:["hover","click"],default:"hover"},collapse:Boolean,backgroundColor:String,textColor:String,activeTextColor:String,collapseTransition:{type:Boolean,default:!0},ellipsis:{type:Boolean,default:!0}}),fe=e=>Array.isArray(e)&&e.every(o=>Q(o)),_t={close:(e,o)=>Q(e)&&fe(o),open:(e,o)=>Q(e)&&fe(o),select:(e,o,n,t)=>Q(e)&&fe(o)&&Ke(n)&&(t===void 0||t instanceof Promise)};var xt=j({name:"ElMenu",props:Mt,emits:_t,setup(e,{emit:o,slots:n,expose:t}){const u=xe(),y=u.appContext.config.globalProperties.$router,d=E(),h=D("menu"),l=D("sub-menu"),c=E(-1),b=E(e.defaultOpeneds&&!e.collapse?e.defaultOpeneds.slice(0):[]),M=E(e.defaultActive),x=E({}),B=E({}),U=g(()=>e.mode==="horizontal"||e.mode==="vertical"&&e.collapse),q=()=>{const a=M.value&&x.value[M.value];if(!a||e.mode==="horizontal"||e.collapse)return;a.indexPath.forEach(r=>{const k=B.value[r];k&&P(r,k.indexPath)})},P=(a,s)=>{b.value.includes(a)||(e.uniqueOpened&&(b.value=b.value.filter(r=>s.includes(r))),b.value.push(a),o("open",a,s))},S=(a,s)=>{const r=b.value.indexOf(a);r!==-1&&b.value.splice(r,1),o("close",a,s)},z=({index:a,indexPath:s})=>{b.value.includes(a)?S(a,s):P(a,s)},p=a=>{(e.mode==="horizontal"||e.collapse)&&(b.value=[]);const{index:s,indexPath:r}=a;if(!(s===void 0||r===void 0))if(e.router&&y){const k=a.route||s,C=y.push(k).then(F=>(F||(M.value=s),F));o("select",s,r,{index:s,indexPath:r,route:k},C)}else M.value=s,o("select",s,r,{index:s,indexPath:r})},H=a=>{const s=x.value,r=s[a]||M.value&&s[M.value]||s[e.defaultActive];r?M.value=r.index:M.value=a},Z=()=>{var a,s;if(!d.value)return-1;const r=Array.from((s=(a=d.value)==null?void 0:a.childNodes)!=null?s:[]).filter(m=>m.nodeName!=="#text"||m.nodeValue),k=64,C=Number.parseInt(getComputedStyle(d.value).paddingLeft,10),F=Number.parseInt(getComputedStyle(d.value).paddingRight,10),R=d.value.clientWidth-C-F;let L=0,O=0;return r.forEach((m,_)=>{L+=m.offsetWidth||0,L<=R-k&&(O=_+1)}),O===r.length?-1:O},w=(a,s=33.34)=>{let r;return()=>{r&&clearTimeout(r),r=setTimeout(()=>{a()},s)}};let $=!0;const V=()=>{const a=()=>{c.value=-1,Ze(()=>{c.value=Z()})};$?a():w(a)(),$=!1};oe(()=>e.defaultActive,a=>{x.value[a]||(M.value=""),H(a)}),oe(()=>e.collapse,a=>{a&&(b.value=[])}),oe(x.value,q);let K;Ge(()=>{e.mode==="horizontal"&&e.ellipsis?K=Qe(d,V).stop:K==null||K()});{const a=C=>{B.value[C.index]=C},s=C=>{delete B.value[C.index]};he("rootMenu",Me({props:e,openedMenus:b,items:x,subMenus:B,activeIndex:M,isMenuPopup:U,addMenuItem:C=>{x.value[C.index]=C},removeMenuItem:C=>{delete x.value[C.index]},addSubMenu:a,removeSubMenu:s,openMenu:P,closeMenu:S,handleMenuItemClick:p,handleSubMenuClick:z})),he(`subMenu:${u.uid}`,{addSubMenu:a,removeSubMenu:s,mouseInChild:E(!1),level:0})}return _e(()=>{e.mode==="horizontal"&&new ft(u.vnode.el,h.namespace.value)}),t({open:s=>{const{indexPath:r}=B.value[s];r.forEach(k=>P(k,r))},close:S,handleResize:V}),()=>{var a,s;let r=(s=(a=n.default)==null?void 0:a.call(n))!=null?s:[];const k=[];if(e.mode==="horizontal"&&d.value){const R=rt(r),L=c.value===-1?R:R.slice(0,c.value),O=c.value===-1?[]:R.slice(c.value);(O==null?void 0:O.length)&&e.ellipsis&&(r=L,k.push(I(Ie,{index:"sub-menu-more",class:l.e("hide-arrow")},{title:()=>I(Be,{class:l.e("icon-more")},{default:()=>I(Ue)}),default:()=>O})))}const C=Ae(e,0),F=I("ul",{key:String(e.collapse),role:"menubar",ref:d,style:C.value,class:{[h.b()]:!0,[h.m(e.mode)]:!0,[h.m("collapse")]:e.collapse}},[...r,...k]);return e.collapseTransition&&e.mode==="vertical"?I(bt,()=>F):F}}});const Ct=ye({index:{type:be([String,null]),default:null},route:{type:be([String,Object])},disabled:Boolean}),It={click:e=>Q(e.index)&&Array.isArray(e.indexPath)},ve="ElMenuItem",kt=j({name:ve,components:{ElTooltip:Pe},props:Ct,emits:It,setup(e,{emit:o}){const n=xe(),t=le("rootMenu"),u=D("menu"),y=D("menu-item");t||re(ve,"can not inject root menu");const{parentMenu:d,indexPath:h}=Ne(n,Je(e,"index")),l=le(`subMenu:${d.value.uid}`);l||re(ve,"can not inject sub menu");const c=g(()=>e.index===t.activeIndex),b=Me({index:e.index,indexPath:h,active:c}),M=()=>{e.disabled||(t.handleMenuItemClick({index:e.index,indexPath:h.value,route:e.route}),o("click",b))};return _e(()=>{l.addSubMenu(b),t.addMenuItem(b)}),$e(()=>{l.removeSubMenu(b),t.removeMenuItem(b)}),{Effect:lt,parentMenu:d,rootMenu:t,active:c,nsMenu:u,nsMenuItem:y,handleClick:M}}});function Tt(e,o,n,t,u,y){const d=Oe("el-tooltip");return A(),ee("li",{class:ue([e.nsMenuItem.b(),e.nsMenuItem.is("active",e.active),e.nsMenuItem.is("disabled",e.disabled)]),role:"menuitem",tabindex:"-1",onClick:o[0]||(o[0]=(...h)=>e.handleClick&&e.handleClick(...h))},[e.parentMenu.type.name==="ElMenu"&&e.rootMenu.props.collapse&&e.$slots.title?(A(),Y(d,{key:0,effect:e.Effect.DARK,placement:"right","fallback-placements":["left"],persistent:""},{content:i(()=>[W(e.$slots,"title")]),default:i(()=>[G("div",{class:ue(e.nsMenu.be("tooltip","trigger"))},[W(e.$slots,"default")],2)]),_:3},8,["effect"])):(A(),ee(de,{key:1},[W(e.$slots,"default"),W(e.$slots,"title")],64))],2)}var De=ie(kt,[["render",Tt],["__file","/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-item.vue"]]);const Et={title:String},St="ElMenuItemGroup",wt=j({name:St,props:Et,setup(){return{ns:D("menu-item-group")}}});function $t(e,o,n,t,u,y){return A(),ee("li",{class:ue(e.ns.b())},[G("div",{class:ue(e.ns.e("title"))},[e.$slots.title?W(e.$slots,"title",{key:1}):(A(),ee(de,{key:0},[f(ge(e.title),1)],64))],2),G("ul",null,[W(e.$slots,"default")])],2)}var ze=ie(wt,[["render",$t],["__file","/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-item-group.vue"]]);const Bt=Xe(xt,{MenuItem:De,MenuItemGroup:ze,SubMenu:Ie}),Ot=Ce(De);Ce(ze);const Pt=Ce(Ie);const Nt=G("div",{class:"flex-grow"},null,-1),At={class:"border-none w-full bg-transparent cursor-pointer"},Dt=G("i",{"vertical-mid":"","inline-flex":"",i:"dark:ep-moon ep-sunny"},null,-1),zt={href:"https://github.com/fangtianq/tov-template",target:"_blank",class:"hover:border-b-orange-300 hover:border-b-2"},Ft={beforeRouteEnter(e,o,n){n(t=>{const{data:u,currentUser:y}=t,d=y()();ot.isEmpty(d)||(u.username=d.getUsername())})}},Kt=j({...Ft,__name:"default",setup(e,{expose:o}){var x,B,U,q,P;const{isDark:n,toggleDark:t}=st(),u=Te();let y=Ye(Te());et(`#composablesLayoutsDefault { background-color: ${(B=(x=y.composablesLayoutsDefault)==null?void 0:x.value)==null?void 0:B.hex}; color:${tt.pickTextColorBasedOnBgColorAdvanced(((q=(U=y.composablesLayoutsDefault)==null?void 0:U.value)==null?void 0:q.hex)||"")} }`);const d=()=>{t(),u.changeThemeName({name:n.value?"\u5C0F\u9ED1":"\u5927\u767D",hex:n.value?"#000000":"#FFFFFF"})},h=at(),l=Ee(),c=E({username:""}),b=E((P=Ee())==null?void 0:P.path),M=S=>{S=="/demo/randomPic"&&(h.push(S),l.path==S&&h.replace("/refresh"))};return o({router:h,data:c,currentUser:nt}),(S,z)=>{const p=Ot,H=Pt,Z=Bt,w=Oe("router-view");return A(),ee(de,null,[v(Z,{"default-active":X(b),class:"el-menu-demo",mode:"horizontal",ellipsis:!1,router:!0,onSelect:M},{default:i(()=>[v(p,{index:"/"},{default:i(()=>[f("\u9996\u9875")]),_:1}),Nt,v(p,{id:"composablesLayoutsDefault",index:"",onClick:z[0]||(z[0]=$=>d())},{default:i(()=>{var $,V;return[G("button",At,[Dt,f(" "+ge((V=($=X(y).composablesLayoutsDefault)==null?void 0:$.value)==null?void 0:V.name),1)])]}),_:1}),v(H,{index:"2"},{title:i(()=>[f("Workspace")]),default:i(()=>[v(p,{index:"/demo/user/pinia"},{default:i(()=>[f("pinia")]),_:1}),v(p,{index:"/about"},{default:i(()=>[f("about")]),_:1}),v(p,{index:"/test"},{default:i(()=>[f("test")]),_:1})]),_:1}),v(p,{index:"/demo/randomPic","animate-bounce-alt":"","animate-count-infinite":"","animate-duration-1s":""},{default:i(()=>[f("\u968F\u673A\u4E8C\u6B21\u5143")]),_:1}),v(p,{index:"/app"},{default:i(()=>[f("\u5BFC\u822A")]),_:1}),G("a",zt,[v(p,null,{default:i(()=>[f("\u5E2E\u52A9")]),_:1})]),X(c).username?(A(),Y(H,{key:0,index:""},{title:i(()=>[f("Signed in as "+ge(X(c).username),1)]),default:i(()=>[v(H,{index:"pri"},{title:i(()=>[f("\u6837\u4F8B\u5566")]),default:i(()=>[v(p,{index:"/pri/arenaOfValor/bronze",desc:"\u9752\u94DC"},{default:i(()=>[f("LiveQuery")]),_:1}),v(p,{index:"/pri/arenaOfValor/silver"},{default:i(()=>[f("socket(FTQPriSpringbootVueBlog)")]),_:1}),v(p,{index:"/pri/arenaOfValor/gold"},{default:i(()=>[f("Threejs")]),_:1}),v(p,{index:"/pri/arenaOfValor/platinum"},{default:i(()=>[f("\u4E2D\u56FD\u7EA2")]),_:1}),v(p,{index:"/pri/arenaOfValor/diamond",desc:"\u94BB\u77F3"},{default:i(()=>[f("useBroadcastChannel")]),_:1}),v(p,{index:"/pri/arenaOfValor/xingyao"},{default:i(()=>[f("\u661F\u8000")]),_:1}),v(p,{index:"/pri/arenaOfValor/king "},{default:i(()=>[f("\u738B\u8005")]),_:1})]),_:1}),v(H,{index:"pri1"},{title:i(()=>[f("\u79C1\u6709\u76EE\u5F551")]),default:i(()=>[v(p,{index:"/pri/arenaOfValor/bronze"},{default:i(()=>[f("\u9752\u94DC")]),_:1})]),_:1}),v(p,{index:"/signout"},{default:i(()=>[f("Sign out")]),_:1})]),_:1})):(A(),Y(p,{key:1,index:"/login"},{default:i(()=>[f("\u767B\u9646")]),_:1}))]),_:1},8,["default-active"]),v(w)],64)}}});export{Kt as default};
