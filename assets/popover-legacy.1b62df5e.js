!function(){function e(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function t(t){for(var o=1;o<arguments.length;o++){var l=null!=arguments[o]?arguments[o]:{};o%2?e(Object(l),!0).forEach((function(e){r(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):e(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function r(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}System.register(["./popper-legacy.07570d90.js","./index-legacy.6b320323.js"],(function(e,r){"use strict";var o,l,p,n,i,a,s,d,c,u,f,v,b,g,m,y,h,w,x,O,S,j,k,P,_,B,C,N,z,A;return{setters:[e=>{o=e.b,l=e.u,p=e.E},e=>{n=e.a,i=e.d,a=e.b,s=e.n,d=e.v,c=e.l,u=e.x,f=e.a4,v=e.y,b=e.i,g=e.H,m=e.j,y=e.aH,h=e.g,w=e.u,x=e.aJ,O=e.o,S=e.c,j=e.w,k=e.P,P=e.R,_=e.U,B=e.a8,C=e.S,N=e.m,z=e.ci,A=e.V}],execute:function(){var r=document.createElement("style");r.textContent=".el-popover{--el-popover-bg-color: var(--el-bg-color-overlay);--el-popover-font-size: var(--el-font-size-base);--el-popover-border-color: var(--el-border-color-lighter);--el-popover-padding: 12px;--el-popover-padding-large: 18px 20px;--el-popover-title-font-size: 16px;--el-popover-title-text-color: var(--el-text-color-primary);--el-popover-border-radius: 4px}.el-popover.el-popper{background:var(--el-popover-bg-color);min-width:150px;border-radius:var(--el-popover-border-radius);border:1px solid var(--el-popover-border-color);padding:var(--el-popover-padding);z-index:var(--el-index-popper);color:var(--el-text-color-regular);line-height:1.4;text-align:justify;font-size:var(--el-popover-font-size);box-shadow:var(--el-box-shadow-light);word-break:break-all;box-sizing:border-box}.el-popover.el-popper--plain{padding:var(--el-popover-padding-large)}.el-popover__title{color:var(--el-popover-title-text-color);font-size:var(--el-popover-title-font-size);line-height:1;margin-bottom:12px}.el-popover__reference:focus:not(.focusing),.el-popover__reference:focus:hover{outline-width:0}.el-popover.el-popper.is-dark{--el-popover-bg-color: var(--el-text-color-primary);--el-popover-border-color: var(--el-text-color-primary);--el-popover-title-text-color: var(--el-bg-color);color:var(--el-bg-color)}.el-popover.el-popper:focus:active,.el-popover.el-popper:focus{outline-width:0}\n",document.head.appendChild(r);var E=n(i({inheritAttrs:!1}),[["render",function(e,t,r,o,l,p){return a(e.$slots,"default")}],["__file","/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection.vue"]]);var $,R,D,H,U=n(i({name:"ElCollectionItem",inheritAttrs:!1}),[["render",function(e,t,r,o,l,p){return a(e.$slots,"default")}],["__file","/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection-item.vue"]]),I=b({trigger:o.trigger,effect:t(t({},l.effect),{},{default:"light"}),type:{type:g(String)},placement:{type:g(String),default:"bottom"},popperOptions:{type:g(Object),default:()=>({})},id:String,size:{type:String,default:""},splitButton:Boolean,hideOnClick:{type:Boolean,default:!0},loop:{type:Boolean,default:!0},showTimeout:{type:Number,default:150},hideTimeout:{type:Number,default:150},tabindex:{type:g([Number,String]),default:0},maxHeight:{type:g([Number,String]),default:""},popperClass:{type:String,default:""},disabled:{type:Boolean,default:!1},role:{type:String,default:"menu"},buttonProps:{type:g(Object)},teleported:l.teleported});b({command:{type:[Object,String,Number],default:()=>({})},disabled:Boolean,divided:Boolean,textValue:String,icon:{type:m}}),b({onKeydown:{type:g(Function)}}),R=`${$=`El${"Dropdown"}Collection`}Item`,D=Symbol($),H=Symbol(R),t(t({},E),{},{name:$,setup(){var e=s(null),t=new Map;d(D,{itemMap:t,getItems:()=>{var r=f(e);if(!r)return[];var o=Array.from(r.querySelectorAll("[data-el-collection-item]"));return[...t.values()].sort(((e,t)=>o.indexOf(e.ref)-o.indexOf(t.ref)))},collectionRef:e})}}),t(t({},U),{},{name:R,setup(e,r){var o=r.attrs,l=s(null),p=c(D,void 0);d(H,{collectionItemRef:l}),u((()=>{var e=f(l);e&&p.itemMap.set(e,t({ref:e},o))})),v((()=>{var e=f(l);p.itemMap.delete(e)}))}});var M=b({trigger:o.trigger,placement:I.placement,disabled:o.disabled,visible:l.visible,transition:l.transition,popperOptions:I.popperOptions,tabindex:I.tabindex,content:l.content,popperStyle:l.popperStyle,popperClass:l.popperClass,enterable:t(t({},l.enterable),{},{default:!0}),effect:t(t({},l.effect),{},{default:"light"}),teleported:l.teleported,title:String,width:{type:[String,Number],default:150},offset:{type:Number,default:void 0},showAfter:{type:Number,default:0},hideAfter:{type:Number,default:200},autoClose:{type:Number,default:0},showArrow:{type:Boolean,default:!0},persistent:{type:Boolean,default:!0},"onUpdate:visible":{type:Function}}),T={"update:visible":e=>y(e),"before-enter":()=>!0,"before-leave":()=>!0,"after-enter":()=>!0,"after-leave":()=>!0},F=i({name:"ElPopover"}),V=i(t(t({},F),{},{props:M,emits:T,setup(e,t){var r=t.expose,o=t.emit,l=e,n=h((()=>l["onUpdate:visible"])),i=w("popover"),d=s(),c=h((()=>{var e;return null==(e=f(d))?void 0:e.popperRef})),u=h((()=>[{width:x(l.width)},l.popperStyle])),v=h((()=>[i.b(),l.popperClass,{[i.m("plain")]:!!l.content}])),b=h((()=>l.transition===`${i.namespace.value}-fade-in-linear`)),g=()=>{o("before-enter")},m=()=>{o("before-leave")},y=()=>{o("after-enter")},z=()=>{o("update:visible",!1),o("after-leave")};return r({popperRef:c,hide:()=>{var e;null==(e=d.value)||e.hide()}}),(e,t)=>(O(),S(f(p),N({ref_key:"tooltipRef",ref:d},e.$attrs,{trigger:e.trigger,placement:e.placement,disabled:e.disabled,visible:e.visible,transition:e.transition,"popper-options":e.popperOptions,tabindex:e.tabindex,content:e.content,offset:e.offset,"show-after":e.showAfter,"hide-after":e.hideAfter,"auto-close":e.autoClose,"show-arrow":e.showArrow,"aria-label":e.title,effect:e.effect,enterable:e.enterable,"popper-class":f(v),"popper-style":f(u),teleported:e.teleported,persistent:e.persistent,"gpu-acceleration":f(b),"onUpdate:visible":f(n),onBeforeShow:g,onBeforeHide:m,onShow:y,onHide:z}),{content:j((()=>[e.title?(O(),k("div",{key:0,class:P(f(i).e("title")),role:"title"},_(e.title),3)):B("v-if",!0),a(e.$slots,"default",{},(()=>[C(_(e.content),1)]))])),default:j((()=>[e.$slots.reference?a(e.$slots,"reference",{key:0}):B("v-if",!0)])),_:3},16,["trigger","placement","disabled","visible","transition","popper-options","tabindex","content","offset","show-after","hide-after","auto-close","show-arrow","aria-label","effect","enterable","popper-class","popper-style","teleported","persistent","gpu-acceleration","onUpdate:visible"]))}})),q=n(V,[["__file","/home/runner/work/element-plus/element-plus/packages/components/popover/src/popover.vue"]]),J=(e,t)=>{var r=t.arg||t.value,o=null==r?void 0:r.popperRef;o&&(o.triggerRef=e)},K=z({mounted(e,t){J(e,t)},updated(e,t){J(e,t)}},"popover");e("E",A(q,{directive:K}))}}}))}();
