!function(){function e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function t(t){for(var l=1;l<arguments.length;l++){var o=null!=arguments[l]?arguments[l]:{};l%2?e(Object(o),!0).forEach((function(e){n(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):e(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}System.register(["./index-legacy.ed8f9c83.js","./useDarks-legacy.678c551f.js","./base-legacy.5aa23bc0.js","./popper-legacy.d88ef62b.js","./index-legacy.45dffb3f.js","./error-legacy.3397af0e.js","./vnode-legacy.6b393e3f.js","./index-legacy.9214fa5f.js"],(function(e,n){"use strict";var l,o,a,i,r,s,u,d,c,m,p,v,b,h,f,g,x,y,_,w,z,M,k,I,C,O,S,E,P,T,B,j,$,A,N,H,L,V,D,W,R,q,Y,F,G,K,U,Q,X,Z,J,ee,te,ne,le,oe,ae,ie,re,se,ue,de,ce=document.createElement("style");return ce.textContent=".fade-in-linear-enter-active,.fade-in-linear-leave-active{transition:var(--el-transition-fade-linear)}.fade-in-linear-enter-from,.fade-in-linear-leave-to{opacity:0}.el-fade-in-linear-enter-active,.el-fade-in-linear-leave-active{transition:var(--el-transition-fade-linear)}.el-fade-in-linear-enter-from,.el-fade-in-linear-leave-to{opacity:0}.el-fade-in-enter-active,.el-fade-in-leave-active{transition:all var(--el-transition-duration) cubic-bezier(.55,0,.1,1)}.el-fade-in-enter-from,.el-fade-in-leave-active{opacity:0}.el-zoom-in-center-enter-active,.el-zoom-in-center-leave-active{transition:all var(--el-transition-duration) cubic-bezier(.55,0,.1,1)}.el-zoom-in-center-enter-from,.el-zoom-in-center-leave-active{opacity:0;transform:scaleX(0)}.el-zoom-in-top-enter-active,.el-zoom-in-top-leave-active{opacity:1;transform:scaleY(1);transition:var(--el-transition-md-fade);transform-origin:center top}.el-zoom-in-top-enter-active[data-popper-placement^=top],.el-zoom-in-top-leave-active[data-popper-placement^=top]{transform-origin:center bottom}.el-zoom-in-top-enter-from,.el-zoom-in-top-leave-active{opacity:0;transform:scaleY(0)}.el-zoom-in-bottom-enter-active,.el-zoom-in-bottom-leave-active{opacity:1;transform:scaleY(1);transition:var(--el-transition-md-fade);transform-origin:center bottom}.el-zoom-in-bottom-enter-from,.el-zoom-in-bottom-leave-active{opacity:0;transform:scaleY(0)}.el-zoom-in-left-enter-active,.el-zoom-in-left-leave-active{opacity:1;transform:scale(1);transition:var(--el-transition-md-fade);transform-origin:top left}.el-zoom-in-left-enter-from,.el-zoom-in-left-leave-active{opacity:0;transform:scale(.45)}.collapse-transition{transition:var(--el-transition-duration) height ease-in-out,var(--el-transition-duration) padding-top ease-in-out,var(--el-transition-duration) padding-bottom ease-in-out}.el-collapse-transition-leave-active,.el-collapse-transition-enter-active{transition:var(--el-transition-duration) max-height ease-in-out,var(--el-transition-duration) padding-top ease-in-out,var(--el-transition-duration) padding-bottom ease-in-out}.horizontal-collapse-transition{transition:var(--el-transition-duration) width ease-in-out,var(--el-transition-duration) padding-left ease-in-out,var(--el-transition-duration) padding-right ease-in-out}.el-list-enter-active,.el-list-leave-active{transition:all 1s}.el-list-enter-from,.el-list-leave-to{opacity:0;transform:translateY(-30px)}.el-list-leave-active{position:absolute!important}.el-opacity-transition{transition:opacity var(--el-transition-duration) cubic-bezier(.55,0,.1,1)}:root{--el-menu-active-color: var(--el-color-primary);--el-menu-text-color: var(--el-text-color-primary);--el-menu-hover-text-color: var(--el-color-primary);--el-menu-bg-color: var(--el-fill-color-blank);--el-menu-hover-bg-color: var(--el-color-primary-light-9);--el-menu-item-height: 56px;--el-menu-sub-item-height: calc(var(--el-menu-item-height) - 6px);--el-menu-horizontal-sub-item-height: 36px;--el-menu-item-font-size: var(--el-font-size-base);--el-menu-item-hover-fill: var(--el-color-primary-light-9);--el-menu-border-color: var(--el-border-color);--el-menu-base-level-padding: 20px;--el-menu-level-padding: 20px;--el-menu-icon-width: 24px}.el-menu{border-right:solid 1px var(--el-menu-border-color);list-style:none;position:relative;margin:0;padding-left:0;background-color:var(--el-menu-bg-color);box-sizing:border-box}.el-menu--vertical:not(.el-menu--collapse):not(.el-menu--popup-container) .el-menu-item,.el-menu--vertical:not(.el-menu--collapse):not(.el-menu--popup-container) .el-sub-menu__title,.el-menu--vertical:not(.el-menu--collapse):not(.el-menu--popup-container) .el-menu-item-group__title{white-space:nowrap;padding-left:calc(var(--el-menu-base-level-padding) + var(--el-menu-level) * var(--el-menu-level-padding))}.el-menu--horizontal{display:flex;flex-wrap:nowrap;border-bottom:solid 1px var(--el-menu-border-color);border-right:none}.el-menu--horizontal>.el-menu-item{display:inline-flex;justify-content:center;align-items:center;height:100%;margin:0;border-bottom:2px solid transparent;color:var(--el-menu-text-color)}.el-menu--horizontal>.el-menu-item a,.el-menu--horizontal>.el-menu-item a:hover{color:inherit}.el-menu--horizontal>.el-menu-item:not(.is-disabled):hover,.el-menu--horizontal>.el-menu-item:not(.is-disabled):focus{background-color:#fff}.el-menu--horizontal>.el-sub-menu:focus,.el-menu--horizontal>.el-sub-menu:hover{outline:none}.el-menu--horizontal>.el-sub-menu:hover .el-sub-menu__title{color:var(--el-menu-hover-text-color)}.el-menu--horizontal>.el-sub-menu.is-active .el-sub-menu__title{border-bottom:2px solid var(--el-menu-active-color);color:var(--el-menu-active-color)}.el-menu--horizontal>.el-sub-menu .el-sub-menu__title{height:100%;border-bottom:2px solid transparent;color:var(--el-menu-text-color)}.el-menu--horizontal>.el-sub-menu .el-sub-menu__title:hover{background-color:var(--el-bg-color-overlay)}.el-menu--horizontal>.el-sub-menu .el-sub-menu__icon-arrow{position:static;vertical-align:middle;margin-left:8px;margin-top:-3px}.el-menu--horizontal .el-menu .el-menu-item,.el-menu--horizontal .el-menu .el-sub-menu__title{background-color:var(--el-menu-bg-color);display:flex;align-items:center;height:var(--el-menu-horizontal-sub-item-height);padding:0 10px;color:var(--el-menu-text-color)}.el-menu--horizontal .el-menu .el-sub-menu__title{padding-right:40px}.el-menu--horizontal .el-menu .el-menu-item.is-active,.el-menu--horizontal .el-menu .el-sub-menu.is-active>.el-sub-menu__title{color:var(--el-menu-active-color)}.el-menu--horizontal .el-menu-item:not(.is-disabled):hover,.el-menu--horizontal .el-menu-item:not(.is-disabled):focus{outline:none;color:var(--el-menu-hover-text-color);background-color:var(--el-menu-hover-bg-color)}.el-menu--horizontal>.el-menu-item.is-active{border-bottom:2px solid var(--el-menu-active-color);color:var(--el-menu-active-color)!important}.el-menu--collapse{width:calc(var(--el-menu-icon-width) + var(--el-menu-base-level-padding) * 2)}.el-menu--collapse>.el-menu-item [class^=el-icon],.el-menu--collapse>.el-sub-menu>.el-sub-menu__title [class^=el-icon]{margin:0;vertical-align:middle;width:var(--el-menu-icon-width);text-align:center}.el-menu--collapse>.el-menu-item .el-sub-menu__icon-arrow,.el-menu--collapse>.el-sub-menu>.el-sub-menu__title .el-sub-menu__icon-arrow{display:none}.el-menu--collapse>.el-menu-item>span,.el-menu--collapse>.el-sub-menu>.el-sub-menu__title>span{height:0;width:0;overflow:hidden;visibility:hidden;display:inline-block}.el-menu--collapse>.el-menu-item.is-active i{color:inherit}.el-menu--collapse .el-menu .el-sub-menu{min-width:200px}.el-menu--collapse .el-sub-menu{position:relative}.el-menu--collapse .el-sub-menu .el-menu{position:absolute;margin-left:5px;top:0;left:100%;z-index:10;border:1px solid var(--el-border-color-light);border-radius:var(--el-border-radius-small);box-shadow:var(--el-box-shadow-light)}.el-menu--collapse .el-sub-menu.is-active .el-sub-menu__title{color:var(--el-menu-active-color)}.el-menu--popup{z-index:100;min-width:200px;border:none;padding:5px 0;border-radius:var(--el-border-radius-small);box-shadow:var(--el-box-shadow-light)}.el-menu .el-icon{flex-shrink:0}.el-menu-item{display:flex;align-items:center;height:var(--el-menu-item-height);line-height:var(--el-menu-item-height);font-size:var(--el-menu-item-font-size);color:var(--el-menu-text-color);padding:0 var(--el-menu-base-level-padding);list-style:none;cursor:pointer;position:relative;transition:border-color var(--el-transition-duration),background-color var(--el-transition-duration),color var(--el-transition-duration);box-sizing:border-box;white-space:nowrap}.el-menu-item *{vertical-align:bottom}.el-menu-item i{color:inherit}.el-menu-item:hover,.el-menu-item:focus{outline:none}.el-menu-item:hover{background-color:var(--el-menu-hover-bg-color)}.el-menu-item.is-disabled{opacity:.25;cursor:not-allowed;background:none!important}.el-menu-item [class^=el-icon]{margin-right:5px;width:var(--el-menu-icon-width);text-align:center;font-size:18px;vertical-align:middle}.el-menu-item.is-active{color:var(--el-menu-active-color)}.el-menu-item.is-active i{color:inherit}.el-menu-item .el-menu-tooltip__trigger{position:absolute;left:0;top:0;height:100%;width:100%;display:inline-flex;align-items:center;box-sizing:border-box;padding:0 var(--el-menu-base-level-padding)}.el-sub-menu{list-style:none;margin:0;padding-left:0}.el-sub-menu__title{display:flex;align-items:center;height:var(--el-menu-item-height);line-height:var(--el-menu-item-height);font-size:var(--el-menu-item-font-size);color:var(--el-menu-text-color);padding:0 var(--el-menu-base-level-padding);list-style:none;cursor:pointer;position:relative;transition:border-color var(--el-transition-duration),background-color var(--el-transition-duration),color var(--el-transition-duration);box-sizing:border-box;white-space:nowrap}.el-sub-menu__title *{vertical-align:bottom}.el-sub-menu__title i{color:inherit}.el-sub-menu__title:hover,.el-sub-menu__title:focus{outline:none}.el-sub-menu__title.is-disabled{opacity:.25;cursor:not-allowed;background:none!important}.el-sub-menu__title:hover{background-color:var(--el-menu-hover-bg-color)}.el-sub-menu .el-menu{border:none}.el-sub-menu .el-menu-item{height:var(--el-menu-sub-item-height);line-height:var(--el-menu-sub-item-height);min-width:200px}.el-sub-menu__hide-arrow .el-sub-menu__icon-arrow{display:none!important}.el-sub-menu.is-active .el-sub-menu__title{border-bottom-color:var(--el-menu-active-color)}.el-sub-menu.is-disabled .el-sub-menu__title,.el-sub-menu.is-disabled .el-menu-item{opacity:.25;cursor:not-allowed;background:none!important}.el-sub-menu .el-icon{vertical-align:middle;margin-right:5px;width:var(--el-menu-icon-width);text-align:center;font-size:18px}.el-sub-menu .el-icon.el-sub-menu__icon-more{margin-right:0!important}.el-sub-menu .el-sub-menu__icon-arrow{position:absolute;top:50%;right:var(--el-menu-base-level-padding);margin-top:-7px;transition:transform var(--el-transition-duration);font-size:12px;margin-right:0;width:inherit}.el-menu-item-group>ul{padding:0}.el-menu-item-group__title{padding:7px 0 7px var(--el-menu-base-level-padding);line-height:normal;font-size:12px;color:var(--el-text-color-secondary)}.horizontal-collapse-transition .el-sub-menu__title .el-sub-menu__icon-arrow{transition:var(--el-transition-duration-fast);opacity:0}.flex-grow{flex-grow:1}\n",document.head.appendChild(ce),{setters:[e=>{l=e.d,o=e.N,a=e.h,i=e.X,r=e.w,s=e.M,u=e.Y,d=e.bA,c=e.e,m=e.a8,p=e._,v=e.G,b=e.bB,h=e.bC,f=e.bD,g=e.c,x=e.K,y=e.ad,_=e.O,w=e.l,z=e.bE,M=e.bk,k=e.aj,I=e.z,C=e.L,O=e.o,S=e.E,E=e.bF,P=e.a0,T=e.aW,B=e.n,j=e.a7,$=e.F,A=e.A,N=e.bG,H=e.x,L=e.a_,V=e.bH,D=e.bI,W=e.S,R=e.aM,q=e.$,Y=e.a6,F=e.r,G=e.a,K=e.b,U=e.P,Q=e.i,X=e.t,Z=e.a4,J=e.aR,ee=e.an,te=e.ak,ne=e.f,le=e.al,oe=e.m},e=>{ae=e.u},()=>{},e=>{ie=e.E,re=e.b},e=>{se=e.T},e=>{ue=e.t},e=>{de=e.f},()=>{}],execute:function(){const n=function(e,t){let n;n=t.includes("mouse")||t.includes("click")?"MouseEvents":t.includes("key")?"KeyboardEvent":"HTMLEvents";const l=document.createEvent(n);for(var o=arguments.length,a=new Array(o>2?o-2:0),i=2;i<o;i++)a[i-2]=arguments[i];return l.initEvent(t,...a),e.dispatchEvent(l),e},ce=l({name:"ElCollapseTransition"}),me=l(t(t({},ce),{},{setup(e){const t=o("collapse-transition"),n={beforeEnter(e){e.dataset||(e.dataset={}),e.dataset.oldPaddingTop=e.style.paddingTop,e.dataset.oldPaddingBottom=e.style.paddingBottom,e.style.maxHeight=0,e.style.paddingTop=0,e.style.paddingBottom=0},enter(e){e.dataset.oldOverflow=e.style.overflow,0!==e.scrollHeight?(e.style.maxHeight=`${e.scrollHeight}px`,e.style.paddingTop=e.dataset.oldPaddingTop,e.style.paddingBottom=e.dataset.oldPaddingBottom):(e.style.maxHeight=0,e.style.paddingTop=e.dataset.oldPaddingTop,e.style.paddingBottom=e.dataset.oldPaddingBottom),e.style.overflow="hidden"},afterEnter(e){e.style.maxHeight="",e.style.overflow=e.dataset.oldOverflow},beforeLeave(e){e.dataset||(e.dataset={}),e.dataset.oldPaddingTop=e.style.paddingTop,e.dataset.oldPaddingBottom=e.style.paddingBottom,e.dataset.oldOverflow=e.style.overflow,e.style.maxHeight=`${e.scrollHeight}px`,e.style.overflow="hidden"},leave(e){0!==e.scrollHeight&&(e.style.maxHeight=0,e.style.paddingTop=0,e.style.paddingBottom=0)},afterLeave(e){e.style.maxHeight="",e.style.overflow=e.dataset.oldOverflow,e.style.paddingTop=e.dataset.oldPaddingTop,e.style.paddingBottom=e.dataset.oldPaddingBottom}};return(e,l)=>(a(),i(m,u({name:c(t).b()},d(n)),{default:r((()=>[s(e.$slots,"default")])),_:3},16,["name"]))}}));var pe=p(me,[["__file","/home/runner/work/element-plus/element-plus/packages/components/collapse-transition/src/collapse-transition.vue"]]);pe.install=e=>{e.component(pe.name,pe)};const ve=pe;class be{constructor(e,t){this.parent=e,this.domNode=t,this.subIndex=0,this.subIndex=0,this.init()}init(){this.subMenuItems=this.domNode.querySelectorAll("li"),this.addListeners()}gotoSubIndex(e){e===this.subMenuItems.length?e=0:e<0&&(e=this.subMenuItems.length-1),this.subMenuItems[e].focus(),this.subIndex=e}addListeners(){const e=this.parent.domNode;Array.prototype.forEach.call(this.subMenuItems,(t=>{t.addEventListener("keydown",(t=>{let l=!1;switch(t.code){case v.down:this.gotoSubIndex(this.subIndex+1),l=!0;break;case v.up:this.gotoSubIndex(this.subIndex-1),l=!0;break;case v.tab:n(e,"mouseleave");break;case v.enter:case v.space:l=!0,t.currentTarget.click()}return l&&(t.preventDefault(),t.stopPropagation()),!1}))}))}}class he{constructor(e,t){this.domNode=e,this.submenu=null,this.submenu=null,this.init(t)}init(e){this.domNode.setAttribute("tabindex","0");const t=this.domNode.querySelector(`.${e}-menu`);t&&(this.submenu=new be(this,t)),this.addListeners()}addListeners(){this.domNode.addEventListener("keydown",(e=>{let t=!1;switch(e.code){case v.down:n(e.currentTarget,"mouseenter"),this.submenu&&this.submenu.gotoSubIndex(0),t=!0;break;case v.up:n(e.currentTarget,"mouseenter"),this.submenu&&this.submenu.gotoSubIndex(this.submenu.subMenuItems.length-1),t=!0;break;case v.tab:n(e.currentTarget,"mouseleave");break;case v.enter:case v.space:t=!0,e.currentTarget.click()}t&&e.preventDefault()}))}}class fe{constructor(e,t){this.domNode=e,this.init(t)}init(e){const t=this.domNode.childNodes;Array.from(t).forEach((t=>{1===t.nodeType&&new he(t,e)}))}}const ge=l({name:"ElMenuCollapseTransition",setup(){const e=o("menu");return{listeners:{onBeforeEnter:e=>e.style.opacity="0.2",onEnter(t,n){b(t,`${e.namespace.value}-opacity-transition`),t.style.opacity="1",n()},onAfterEnter(t){h(t,`${e.namespace.value}-opacity-transition`),t.style.opacity=""},onBeforeLeave(t){t.dataset||(t.dataset={}),f(t,e.m("collapse"))?(h(t,e.m("collapse")),t.dataset.oldOverflow=t.style.overflow,t.dataset.scrollWidth=t.clientWidth.toString(),b(t,e.m("collapse"))):(b(t,e.m("collapse")),t.dataset.oldOverflow=t.style.overflow,t.dataset.scrollWidth=t.clientWidth.toString(),h(t,e.m("collapse"))),t.style.width=`${t.scrollWidth}px`,t.style.overflow="hidden"},onLeave(e){b(e,"horizontal-collapse-transition"),e.style.width=`${e.dataset.scrollWidth}px`}}}}});var xe=p(ge,[["render",function(e,t,n,l,o,d){return a(),i(m,u({mode:"out-in"},e.listeners),{default:r((()=>[s(e.$slots,"default")])),_:3},16)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-collapse-transition.vue"]]);function ye(e,t){const n=g((()=>{let n=e.parent;const l=[t.value];for(;"ElMenu"!==n.type.name;)n.props.index&&l.unshift(n.props.index),n=n.parent;return l}));return{parentMenu:g((()=>{let t=e.parent;for(;t&&!["ElMenu","ElSubMenu"].includes(t.type.name);)t=t.parent;return t})),indexPath:n}}function _e(e){return g((()=>{const t=e.backgroundColor;return t?new se(t).shade(20).toString():""}))}const we=(e,t)=>{const n=o("menu");return g((()=>n.cssVarBlock({"text-color":e.textColor||"","hover-text-color":e.textColor||"","bg-color":e.backgroundColor||"","hover-bg-color":_e(e).value||"","active-color":e.activeTextColor||"",level:`${t}`})))},ze=x({index:{type:String,required:!0},showTimeout:{type:Number,default:300},hideTimeout:{type:Number,default:300},popperClass:String,disabled:Boolean,popperAppendToBody:{type:Boolean,default:void 0},popperOffset:{type:Number,default:6},expandCloseIcon:{type:y},expandOpenIcon:{type:y},collapseCloseIcon:{type:y},collapseOpenIcon:{type:y}}),Me="ElSubMenu";var ke=l({name:Me,props:ze,setup(e,t){let n=t.slots,l=t.expose;const a=A(),i=ye(a,g((()=>e.index))),r=i.indexPath,s=i.parentMenu,u=o("menu"),d=o("sub-menu"),c=_("rootMenu");c||ue(Me,"can not inject root menu");const m=_(`subMenu:${s.value.uid}`);m||ue(Me,"can not inject sub menu");const p=w({}),v=w({});let b;const h=w(!1),f=w(),x=w(null),y=g((()=>"horizontal"===K.value&&L.value?"bottom-start":"right-start")),H=g((()=>"horizontal"===K.value&&L.value||"vertical"===K.value&&!c.props.collapse?e.expandCloseIcon&&e.expandOpenIcon?R.value?e.expandOpenIcon:e.expandCloseIcon:z:e.collapseCloseIcon&&e.collapseOpenIcon?R.value?e.collapseOpenIcon:e.collapseCloseIcon:M)),L=g((()=>0===m.level)),V=g((()=>void 0===e.popperAppendToBody?L.value:Boolean(e.popperAppendToBody))),D=g((()=>c.props.collapse?`${u.namespace.value}-zoom-in-left`:`${u.namespace.value}-zoom-in-top`)),W=g((()=>"horizontal"===K.value&&L.value?["bottom-start","bottom-end","top-start","top-end","right-start","left-start"]:["right-start","left-start","bottom-start","bottom-end","top-start","top-end"])),R=g((()=>c.openedMenus.includes(e.index))),q=g((()=>{let e=!1;return Object.values(p.value).forEach((t=>{t.active&&(e=!0)})),Object.values(v.value).forEach((t=>{t.active&&(e=!0)})),e})),Y=g((()=>c.props.backgroundColor||"")),F=g((()=>c.props.activeTextColor||"")),G=g((()=>c.props.textColor||"")),K=g((()=>c.props.mode)),U=k({index:e.index,indexPath:r,active:q}),Q=g((()=>"horizontal"!==K.value?{color:G.value}:{borderBottomColor:q.value?c.props.activeTextColor?F.value:"":"transparent",color:q.value?F.value:G.value})),X=e=>{var t,n,l;e||null==(l=null==(n=null==(t=x.value)?void 0:t.popperRef)?void 0:n.popperInstanceRef)||l.destroy()},Z=()=>{"hover"===c.props.menuTrigger&&"horizontal"===c.props.mode||c.props.collapse&&"vertical"===c.props.mode||e.disabled||c.handleSubMenuClick({index:e.index,indexPath:r.value,active:q.value})},J=function(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.showTimeout;var l;if("focus"!==t.type&&!("click"===c.props.menuTrigger&&"horizontal"===c.props.mode||!c.props.collapse&&"vertical"===c.props.mode||e.disabled)){m.mouseInChild.value=!0,null==b||b();var o=N((()=>{c.openMenu(e.index,r.value)}),n);b=o.stop,V.value&&(null==(l=s.value.vnode.el)||l.dispatchEvent(new MouseEvent("mouseenter")))}},ee=function(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];var n,l;if(!("click"===c.props.menuTrigger&&"horizontal"===c.props.mode||!c.props.collapse&&"vertical"===c.props.mode)){null==b||b(),m.mouseInChild.value=!1;var o=N((()=>!h.value&&c.closeMenu(e.index,r.value)),e.hideTimeout);b=o.stop,V.value&&t&&"ElSubMenu"===(null==(n=a.parent)?void 0:n.type.name)&&(null==(l=m.handleMouseleave)||l.call(m,!0))}};I((()=>c.props.collapse),(e=>X(Boolean(e))));{const e=e=>{v.value[e.index]=e},t=e=>{delete v.value[e.index]};C(`subMenu:${a.uid}`,{addSubMenu:e,removeSubMenu:t,handleMouseleave:ee,mouseInChild:h,level:m.level+1})}return l({opened:R}),O((()=>{c.addSubMenu(U),m.addSubMenu(U)})),S((()=>{m.removeSubMenu(U),c.removeSubMenu(U)})),()=>{var t;const l=[null==(t=n.title)?void 0:t.call(n),E(T,{class:d.e("icon-arrow"),style:{transform:R.value?e.expandCloseIcon&&e.expandOpenIcon||e.collapseCloseIcon&&e.collapseOpenIcon&&c.props.collapse?"none":"rotateZ(180deg)":"none"}},{default:()=>P(H.value)?E(a.appContext.components[H.value]):E(H.value)})],o=we(c.props,m.level+1),i=c.isMenuPopup?E(ie,{ref:x,visible:R.value,effect:"light",pure:!0,offset:e.popperOffset,showArrow:!1,persistent:!0,popperClass:e.popperClass,placement:y.value,teleported:V.value,fallbackPlacements:W.value,transition:D.value,gpuAcceleration:!1},{content:()=>{var t;return E("div",{class:[u.m(K.value),u.m("popup-container"),e.popperClass],onMouseenter:e=>J(e,100),onMouseleave:()=>ee(!0),onFocus:e=>J(e,100)},[E("ul",{class:[u.b(),u.m("popup"),u.m(`popup-${y.value}`)],style:o.value},[null==(t=n.default)?void 0:t.call(n)])])},default:()=>E("div",{class:d.e("title"),style:[Q.value,{backgroundColor:Y.value}],onClick:Z},l)}):E($,{},[E("div",{class:d.e("title"),style:[Q.value,{backgroundColor:Y.value}],ref:f,onClick:Z},l),E(ve,{},{default:()=>{var e;return B(E("ul",{role:"menu",class:[u.b(),u.m("inline")],style:o.value},[null==(e=n.default)?void 0:e.call(n)]),[[j,R.value]])}})]);return E("li",{class:[d.b(),d.is("active",q.value),d.is("opened",R.value),d.is("disabled",e.disabled)],role:"menuitem",ariaHaspopup:!0,ariaExpanded:R.value,onMouseenter:J,onMouseleave:()=>ee(!0),onFocus:J},[i])}}});const Ie=x({mode:{type:String,values:["horizontal","vertical"],default:"vertical"},defaultActive:{type:String,default:""},defaultOpeneds:{type:H(Array),default:()=>L([])},uniqueOpened:Boolean,router:Boolean,menuTrigger:{type:String,values:["hover","click"],default:"hover"},collapse:Boolean,backgroundColor:String,textColor:String,activeTextColor:String,collapseTransition:{type:Boolean,default:!0},ellipsis:{type:Boolean,default:!0}}),Ce=e=>Array.isArray(e)&&e.every((e=>P(e)));var Oe=l({name:"ElMenu",props:Ie,emits:{close:(e,t)=>P(e)&&Ce(t),open:(e,t)=>P(e)&&Ce(t),select:(e,t,n,l)=>P(e)&&Ce(t)&&W(n)&&(void 0===l||l instanceof Promise)},setup(e,t){let n=t.emit,l=t.slots,a=t.expose;const i=A(),r=i.appContext.config.globalProperties.$router,s=w(),u=o("menu"),d=o("sub-menu"),c=w(-1),m=w(e.defaultOpeneds&&!e.collapse?e.defaultOpeneds.slice(0):[]),p=w(e.defaultActive),v=w({}),b=w({}),h=g((()=>"horizontal"===e.mode||"vertical"===e.mode&&e.collapse)),f=(t,l)=>{m.value.includes(t)||(e.uniqueOpened&&(m.value=m.value.filter((e=>l.includes(e)))),m.value.push(t),n("open",t,l))},x=(e,t)=>{const l=m.value.indexOf(e);-1!==l&&m.value.splice(l,1),n("close",e,t)},y=e=>{let t=e.index,n=e.indexPath;m.value.includes(t)?x(t,n):f(t,n)},_=t=>{("horizontal"===e.mode||e.collapse)&&(m.value=[]);const l=t.index,o=t.indexPath;if(void 0!==l&&void 0!==o)if(e.router&&r){const e=t.route||l,a=r.push(e).then((e=>(e||(p.value=l),e)));n("select",l,o,{index:l,indexPath:o,route:e},a)}else p.value=l,n("select",l,o,{index:l,indexPath:o})};let z=!0;const M=()=>{const e=()=>{c.value=-1,q((()=>{c.value=(()=>{var e,t;if(!s.value)return-1;const n=Array.from(null!=(t=null==(e=s.value)?void 0:e.childNodes)?t:[]).filter((e=>"#text"!==e.nodeName||e.nodeValue)),l=Number.parseInt(getComputedStyle(s.value).paddingLeft,10),o=Number.parseInt(getComputedStyle(s.value).paddingRight,10),a=s.value.clientWidth-l-o;let i=0,r=0;return n.forEach(((e,t)=>{i+=e.offsetWidth||0,i<=a-64&&(r=t+1)})),r===n.length?-1:r})()}))};z?e():function(e){let t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:33.34;return()=>{t&&clearTimeout(t),t=setTimeout((()=>{e()}),n)}}(e)(),z=!1};let S;I((()=>e.defaultActive),(t=>{v.value[t]||(p.value=""),(t=>{const n=v.value,l=n[t]||p.value&&n[p.value]||n[e.defaultActive];p.value=l?l.index:t})(t)})),I((()=>e.collapse),(e=>{e&&(m.value=[])})),I(v.value,(()=>{const t=p.value&&v.value[p.value];if(!t||"horizontal"===e.mode||e.collapse)return;t.indexPath.forEach((e=>{const t=b.value[e];t&&f(e,t.indexPath)}))})),V((()=>{"horizontal"===e.mode&&e.ellipsis?S=R(s,M).stop:null==S||S()}));{const t=e=>{b.value[e.index]=e},n=e=>{delete b.value[e.index]},l=e=>{v.value[e.index]=e},o=e=>{delete v.value[e.index]};C("rootMenu",k({props:e,openedMenus:m,items:v,subMenus:b,activeIndex:p,isMenuPopup:h,addMenuItem:l,removeMenuItem:o,addSubMenu:t,removeSubMenu:n,openMenu:f,closeMenu:x,handleMenuItemClick:_,handleSubMenuClick:y})),C(`subMenu:${i.uid}`,{addSubMenu:t,removeSubMenu:n,mouseInChild:w(!1),level:0})}O((()=>{"horizontal"===e.mode&&new fe(i.vnode.el,u.namespace.value)}));a({open:e=>{const t=b.value[e].indexPath;t.forEach((e=>f(e,t)))},close:x,handleResize:M});return()=>{var t,n;let o=null!=(n=null==(t=l.default)?void 0:t.call(l))?n:[];const a=[];if("horizontal"===e.mode&&s.value){const t=de(o),n=-1===c.value?t:t.slice(0,c.value),l=-1===c.value?[]:t.slice(c.value);(null==l?void 0:l.length)&&e.ellipsis&&(o=n,a.push(E(ke,{index:"sub-menu-more",class:d.e("hide-arrow")},{title:()=>E(T,{class:d.e("icon-more")},{default:()=>E(D)}),default:()=>l})))}const i=we(e,0),r=E("ul",{key:String(e.collapse),role:"menubar",ref:s,style:i.value,class:{[u.b()]:!0,[u.m(e.mode)]:!0,[u.m("collapse")]:e.collapse}},[...o,...a]);return e.collapseTransition&&"vertical"===e.mode?E(xe,(()=>r)):r}}});const Se=x({index:{type:H([String,null]),default:null},route:{type:H([String,Object])},disabled:Boolean}),Ee="ElMenuItem",Pe=l({name:Ee,components:{ElTooltip:ie},props:Se,emits:{click:e=>P(e.index)&&Array.isArray(e.indexPath)},setup(e,t){let n=t.emit;const l=A(),a=_("rootMenu"),i=o("menu"),r=o("menu-item");a||ue(Ee,"can not inject root menu");const s=ye(l,Y(e,"index")),u=s.parentMenu,d=s.indexPath,c=_(`subMenu:${u.value.uid}`);c||ue(Ee,"can not inject sub menu");const m=g((()=>e.index===a.activeIndex)),p=k({index:e.index,indexPath:d,active:m});return O((()=>{c.addSubMenu(p),a.addMenuItem(p)})),S((()=>{c.removeSubMenu(p),a.removeMenuItem(p)})),{Effect:re,parentMenu:u,rootMenu:a,active:m,nsMenu:i,nsMenuItem:r,handleClick:()=>{e.disabled||(a.handleMenuItemClick({index:e.index,indexPath:d.value,route:e.route}),n("click",p))}}}});var Te=p(Pe,[["render",function(e,t,n,l,o,u){const d=F("el-tooltip");return a(),G("li",{class:U([e.nsMenuItem.b(),e.nsMenuItem.is("active",e.active),e.nsMenuItem.is("disabled",e.disabled)]),role:"menuitem",tabindex:"-1",onClick:t[0]||(t[0]=function(){return e.handleClick&&e.handleClick(...arguments)})},["ElMenu"===e.parentMenu.type.name&&e.rootMenu.props.collapse&&e.$slots.title?(a(),i(d,{key:0,effect:e.Effect.DARK,placement:"right","fallback-placements":["left"],persistent:""},{content:r((()=>[s(e.$slots,"title")])),default:r((()=>[K("div",{class:U(e.nsMenu.be("tooltip","trigger"))},[s(e.$slots,"default")],2)])),_:3},8,["effect"])):(a(),G($,{key:1},[s(e.$slots,"default"),s(e.$slots,"title")],64))],2)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-item.vue"]]);const Be=l({name:"ElMenuItemGroup",props:{title:String},setup:()=>({ns:o("menu-item-group")})});var je=p(Be,[["render",function(e,t,n,l,o,i){return a(),G("li",{class:U(e.ns.b())},[K("div",{class:U(e.ns.e("title"))},[e.$slots.title?s(e.$slots,"title",{key:1}):(a(),G($,{key:0},[Q(X(e.title),1)],64))],2),K("ul",null,[s(e.$slots,"default")])],2)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-item-group.vue"]]);const $e=Z(Oe,{MenuItem:Te,MenuItemGroup:je,SubMenu:ke}),Ae=J(Te);J(je);const Ne=J(ke),He=K("div",{class:"flex-grow"},null,-1),Le=K("button",{class:"border-none w-full bg-transparent cursor-pointer"},[K("i",{"vertical-mid":"","inline-flex":"",i:"dark:ep-moon ep-sunny"})],-1),Ve={href:"https://github.com/fangtianq/tov-template",target:"_blank",class:"hover:border-b-orange-300 hover:border-b-2"};e("default",l(t(t({},{beforeRouteEnter(e,t,n){n((e=>{const t=e.data,n=(0,e.currentUser)()();le.isEmpty(n)||(t.username=n.getUsername())}))}}),{},{__name:"default",setup(e,t){var n;let l=t.expose;const o=ae().toggleDark,s=oe(),u=ee(),d=w({username:""}),m=w(null===(n=ee())||void 0===n?void 0:n.path),p=e=>{"/demo/randomPic"==e&&(s.push(e),u.path==e&&s.replace("/refresh"))};return l({router:s,data:d,currentUser:te}),(e,t)=>{const n=Ae,l=Ne,s=$e,u=F("router-view");return a(),G($,null,[ne(s,{"default-active":c(m),class:"el-menu-demo",mode:"horizontal",ellipsis:!1,router:!0,onSelect:p},{default:r((()=>[ne(n,{index:"/"},{default:r((()=>[Q("首页")])),_:1}),He,ne(n,{index:"",onClick:t[0]||(t[0]=e=>c(o)())},{default:r((()=>[Le])),_:1}),ne(l,{index:"2"},{title:r((()=>[Q("Workspace")])),default:r((()=>[ne(n,{index:"/demo/user/pinia"},{default:r((()=>[Q("pinia")])),_:1}),ne(n,{index:"/about"},{default:r((()=>[Q("about")])),_:1}),ne(n,{index:"/test"},{default:r((()=>[Q("test")])),_:1})])),_:1}),ne(n,{index:"/demo/randomPic","animate-bounce-alt":"","animate-count-infinite":"","animate-duration-1s":""},{default:r((()=>[Q("随机二次元")])),_:1}),ne(n,{index:"/app"},{default:r((()=>[Q("导航")])),_:1}),K("a",Ve,[ne(n,null,{default:r((()=>[Q("帮助")])),_:1})]),c(d).username?(a(),i(l,{key:0,index:""},{title:r((()=>[Q("Signed in as "+X(c(d).username),1)])),default:r((()=>[ne(l,{index:"pri"},{title:r((()=>[Q("私有目录")])),default:r((()=>[ne(n,{index:"/pri/arenaOfValor/bronze",desc:"青铜"},{default:r((()=>[Q("LiveQuery")])),_:1}),ne(n,{index:"/pri/arenaOfValor/silver"},{default:r((()=>[Q("socket(FTQPriSpringbootVueBlog)")])),_:1}),ne(n,{index:"/pri/arenaOfValor/gold"},{default:r((()=>[Q("Threejs")])),_:1}),ne(n,{index:"/pri/arenaOfValor/platinum"},{default:r((()=>[Q("中国红")])),_:1}),ne(n,{index:"/pri/arenaOfValor/diamond",desc:"钻石"},{default:r((()=>[Q("useBroadcastChannel")])),_:1}),ne(n,{index:"/pri/arenaOfValor/xingyao"},{default:r((()=>[Q("星耀")])),_:1}),ne(n,{index:"/pri/arenaOfValor/king "},{default:r((()=>[Q("王者")])),_:1})])),_:1}),ne(l,{index:"pri1"},{title:r((()=>[Q("私有目录1")])),default:r((()=>[ne(n,{index:"/pri/arenaOfValor/bronze"},{default:r((()=>[Q("青铜")])),_:1})])),_:1}),ne(n,{index:"/signout"},{default:r((()=>[Q("Sign out")])),_:1})])),_:1})):(a(),i(n,{key:1,index:"/login"},{default:r((()=>[Q("登陆")])),_:1}))])),_:1},8,["default-active"]),ne(u)],64)}}})))}}}))}();
