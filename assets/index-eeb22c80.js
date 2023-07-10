import{a as Do,bF as Wo,bG as ht,bH as Vo,bI as vt,bJ as Dt,ac as Go,bK as Uo,bL as qo,a8 as nt,f as K,C as ne,bM as rt,Y as Wt,I as we,o as ve,g as E,H as Yo,bN as Xo,e as D,F as Oe,bO as Zo,d as R,G as q,l as je,t as V,a0 as u,bP as Jo,E as Qo,a5 as Fe,v as en,T as Vt,Q as De,bQ as tn,bR as on,ag as nn,bS as rn,j as it,k as lt,w as Ne,y as Ee,p as $e,ay as ln,L as an,aT as sn,bT as Q}from"./index-dc3531f8.js";import{F as dn,G as cn,H as Le,I as un,B as X,z as J,c as oe,q as te,J as fn,K as hn,i as Gt,L as at,b as N,d as Ut,h as Ce,e as A,m as se,f as O,l as B,M as vn,n as pe,o as Z,w as Se,E as $t,x as qe,X as qt,p as ke,A as Y,O as We,C as st,j as Be,t as ue,P as pn,Q as Yt,y as Xt,N as Zt,D as mn,_ as gn}from"./Space-d12da742.js";import{S as bn,i as yn,a as xn,b as Jt}from"./_Uint8Array-f6863194.js";import{b as Qt}from"./_baseIsEqual-c26fbc1f.js";import{k as eo}from"./_getTag-6926013a.js";import{_ as wn}from"./发表文章-20e3e12c.js";import{_ as Cn}from"./文章列表-9a4c5486.js";import{_ as Sn}from"./用户管理-188cdc4c.js";import"./_initCloneObject-dc7b7677.js";var In=1,zn=2;function $n(e,t,o,n){var r=o.length,i=r,l=!n;if(e==null)return!i;for(e=Object(e);r--;){var s=o[r];if(l&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++r<i;){s=o[r];var a=s[0],c=e[a],p=s[1];if(l&&s[2]){if(c===void 0&&!(a in e))return!1}else{var m=new bn;if(n)var f=n(c,p,a,e,t,m);if(!(f===void 0?Qt(p,c,In|zn,n,m):f))return!1}}return!0}function to(e){return e===e&&!Do(e)}function An(e){for(var t=eo(e),o=t.length;o--;){var n=t[o],r=e[n];t[o]=[n,r,to(r)]}return t}function oo(e,t){return function(o){return o==null?!1:o[e]===t&&(t!==void 0||e in Object(o))}}function Pn(e){var t=An(e);return t.length==1&&t[0][2]?oo(t[0][0],t[0][1]):function(o){return o===e||$n(o,e,t)}}function kn(e,t){return e!=null&&t in Object(e)}function On(e,t,o){t=Wo(t,e);for(var n=-1,r=t.length,i=!1;++n<r;){var l=ht(t[n]);if(!(i=e!=null&&o(e,l)))break;e=e[l]}return i||++n!=r?i:(r=e==null?0:e.length,!!r&&yn(r)&&Vo(l,r)&&(vt(e)||xn(e)))}function Tn(e,t){return e!=null&&On(e,t,kn)}var Nn=1,En=2;function _n(e,t){return Dt(e)&&to(t)?oo(ht(e),t):function(o){var n=Go(o,e);return n===void 0&&n===t?Tn(o,e):Qt(t,n,Nn|En)}}function Mn(e){return function(t){return t==null?void 0:t[e]}}function Hn(e){return function(t){return Uo(t,e)}}function Bn(e){return Dt(e)?Mn(ht(e)):Hn(e)}function Fn(e){return typeof e=="function"?e:e==null?dn:typeof e=="object"?vt(e)?_n(e[0],e[1]):Pn(e):Bn(e)}function Ln(e,t){return e&&cn(e,t,eo)}function Kn(e,t){return function(o,n){if(o==null)return o;if(!Jt(o))return e(o,n);for(var r=o.length,i=t?r:-1,l=Object(o);(t?i--:++i<r)&&n(l[i],i,l)!==!1;);return o}}var Rn=Kn(Ln);const jn=Rn;function Dn(e,t){var o=-1,n=Jt(e)?Array(e.length):[];return jn(e,function(r,i,l){n[++o]=t(r,i,l)}),n}function Wn(e,t){var o=vt(e)?qo:Dn;return o(e,Fn(t))}let Ke=[];const no=new WeakMap;function Vn(){Ke.forEach(e=>e(...no.get(e))),Ke=[]}function Gn(e,...t){no.set(e,t),!Ke.includes(e)&&Ke.push(e)===1&&requestAnimationFrame(Vn)}function At(e,t){let{target:o}=e;for(;o;){if(o.dataset&&o.dataset[t]!==void 0)return!0;o=o.parentElement}return!1}function Un(e=8){return Math.random().toString(16).slice(2,2+e)}function Ae(e,t=[],o){const n={};return t.forEach(r=>{n[r]=e[r]}),Object.assign(n,o)}function pt(e){return Object.keys(e)}const ie=(e,...t)=>typeof e=="function"?e(...t):typeof e=="string"?nt(e):typeof e=="number"?nt(String(e)):null;function Pt(e,t="default",o=void 0){const n=e[t];if(!n)return Le("getFirstSlotVNode",`slot[${t}] is empty`),null;const r=un(n(o));return r.length===1?r[0]:(Le("getFirstSlotVNode",`slot[${t}] should have exactly one child`),null)}function qn(e){return t=>{t?e.value=t.$el:e.value=null}}const Yn=/^(\d|\.)+$/,kt=/(\d|\.)+/;function he(e,{c:t=1,offset:o=0,attachPx:n=!0}={}){if(typeof e=="number"){const r=(e+o)*t;return r===0?"0":`${r}px`}else if(typeof e=="string")if(Yn.test(e)){const r=(Number(e)+o)*t;return n?r===0?"0":`${r}px`:`${r}`}else{const r=kt.exec(e);return r?e.replace(kt,String((Number(r[0])+o)*t)):e}return e}let Ye;function Xn(){return Ye===void 0&&(Ye=navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom")),Ye}function Zn(e,t,o){if(!t)return e;const n=K(e.value);let r=null;return ne(e,i=>{r!==null&&window.clearTimeout(r),i===!0?o&&!o.value?n.value=!0:r=window.setTimeout(()=>{n.value=!0},t):n.value=!1}),n}function Jn(e){const t=K(!!e.value);if(t.value)return rt(t);const o=ne(e,n=>{n&&(t.value=!0,o())});return rt(t)}function Qn(){return Wt()!==null}const er=typeof window<"u";let ye,Pe;const tr=()=>{var e,t;ye=er?(t=(e=document)===null||e===void 0?void 0:e.fonts)===null||t===void 0?void 0:t.ready:void 0,Pe=!1,ye!==void 0?ye.then(()=>{Pe=!0}):Pe=!0};tr();function or(e){if(Pe)return;let t=!1;we(()=>{Pe||ye==null||ye.then(()=>{t||e()})}),ve(()=>{t=!0})}function ro(e,t){return E(()=>{for(const o of t)if(e[o]!==void 0)return e[o];return e[t[t.length-1]]})}function nr(e={},t){const o=Yo({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:n,keyup:r}=e,i=a=>{switch(a.key){case"Control":o.ctrl=!0;break;case"Meta":o.command=!0,o.win=!0;break;case"Shift":o.shift=!0;break;case"Tab":o.tab=!0;break}n!==void 0&&Object.keys(n).forEach(c=>{if(c!==a.key)return;const p=n[c];if(typeof p=="function")p(a);else{const{stop:m=!1,prevent:f=!1}=p;m&&a.stopPropagation(),f&&a.preventDefault(),p.handler(a)}})},l=a=>{switch(a.key){case"Control":o.ctrl=!1;break;case"Meta":o.command=!1,o.win=!1;break;case"Shift":o.shift=!1;break;case"Tab":o.tab=!1;break}r!==void 0&&Object.keys(r).forEach(c=>{if(c!==a.key)return;const p=r[c];if(typeof p=="function")p(a);else{const{stop:m=!1,prevent:f=!1}=p;m&&a.stopPropagation(),f&&a.preventDefault(),p.handler(a)}})},s=()=>{(t===void 0||t.value)&&(J("keydown",document,i),J("keyup",document,l)),t!==void 0&&ne(t,a=>{a?(J("keydown",document,i),J("keyup",document,l)):(X("keydown",document,i),X("keyup",document,l))})};return Qn()?(Xo(s),ve(()=>{(t===void 0||t.value)&&(X("keydown",document,i),X("keyup",document,l))})):s(),rt(o)}const rr=oe("n-internal-select-menu-body"),mt=oe("n-modal-body"),gt=oe("n-drawer-body"),Ve=oe("n-popover-body"),io="__disabled__";function xe(e){const t=D(mt,null),o=D(gt,null),n=D(Ve,null),r=D(rr,null),i=K();if(typeof document<"u"){i.value=document.fullscreenElement;const l=()=>{i.value=document.fullscreenElement};we(()=>{J("fullscreenchange",document,l)}),ve(()=>{X("fullscreenchange",document,l)})}return te(()=>{var l;const{to:s}=e;return s!==void 0?s===!1?io:s===!0?i.value||"body":s:t!=null&&t.value?(l=t.value.$el)!==null&&l!==void 0?l:t.value:o!=null&&o.value?o.value:n!=null&&n.value?n.value:r!=null&&r.value?r.value:s!=null?s:i.value||"body"})}xe.tdkey=io;xe.propTo={type:[String,Object,Boolean],default:void 0};function dt(e,t,o="default"){const n=t[o];if(n===void 0)throw new Error(`[vueuc/${e}]: slot[${o}] is empty.`);return n()}function ct(e,t=!0,o=[]){return e.forEach(n=>{if(n!==null){if(typeof n!="object"){(typeof n=="string"||typeof n=="number")&&o.push(nt(String(n)));return}if(Array.isArray(n)){ct(n,t,o);return}if(n.type===Oe){if(n.children===null)return;Array.isArray(n.children)&&ct(n.children,t,o)}else n.type!==Zo&&o.push(n)}}),o}function Ot(e,t,o="default"){const n=t[o];if(n===void 0)throw new Error(`[vueuc/${e}]: slot[${o}] is empty.`);const r=ct(n());if(r.length===1)return r[0];throw new Error(`[vueuc/${e}]: slot[${o}] should have exactly one child.`)}let de=null;function lo(){if(de===null&&(de=document.getElementById("v-binder-view-measurer"),de===null)){de=document.createElement("div"),de.id="v-binder-view-measurer";const{style:e}=de;e.position="fixed",e.left="0",e.right="0",e.top="0",e.bottom="0",e.pointerEvents="none",e.visibility="hidden",document.body.appendChild(de)}return de.getBoundingClientRect()}function ir(e,t){const o=lo();return{top:t,left:e,height:0,width:0,right:o.width-e,bottom:o.height-t}}function Xe(e){const t=e.getBoundingClientRect(),o=lo();return{left:t.left-o.left,top:t.top-o.top,bottom:o.height+o.top-t.bottom,right:o.width+o.left-t.right,width:t.width,height:t.height}}function lr(e){return e.nodeType===9?null:e.parentNode}function ao(e){if(e===null)return null;const t=lr(e);if(t===null)return null;if(t.nodeType===9)return document;if(t.nodeType===1){const{overflow:o,overflowX:n,overflowY:r}=getComputedStyle(t);if(/(auto|scroll|overlay)/.test(o+r+n))return t}return ao(t)}const ar=R({name:"Binder",props:{syncTargetWithParent:Boolean,syncTarget:{type:Boolean,default:!0}},setup(e){var t;q("VBinder",(t=Wt())===null||t===void 0?void 0:t.proxy);const o=D("VBinder",null),n=K(null),r=h=>{n.value=h,o&&e.syncTargetWithParent&&o.setTargetRef(h)};let i=[];const l=()=>{let h=n.value;for(;h=ao(h),h!==null;)i.push(h);for(const H of i)J("scroll",H,m,!0)},s=()=>{for(const h of i)X("scroll",h,m,!0);i=[]},a=new Set,c=h=>{a.size===0&&l(),a.has(h)||a.add(h)},p=h=>{a.has(h)&&a.delete(h),a.size===0&&s()},m=()=>{Gn(f)},f=()=>{a.forEach(h=>h())},y=new Set,C=h=>{y.size===0&&J("resize",window,g),y.has(h)||y.add(h)},b=h=>{y.has(h)&&y.delete(h),y.size===0&&X("resize",window,g)},g=()=>{y.forEach(h=>h())};return ve(()=>{X("resize",window,g),s()}),{targetRef:n,setTargetRef:r,addScrollListener:c,removeScrollListener:p,addResizeListener:C,removeResizeListener:b}},render(){return dt("binder",this.$slots)}}),so=ar,co=R({name:"Target",setup(){const{setTargetRef:e,syncTarget:t}=D("VBinder");return{syncTarget:t,setTargetDirective:{mounted:e,updated:e}}},render(){const{syncTarget:e,setTargetDirective:t}=this;return e?je(Ot("follower",this.$slots),[[t]]):Ot("follower",this.$slots)}}),me="@@mmoContext",sr={mounted(e,{value:t}){e[me]={handler:void 0},typeof t=="function"&&(e[me].handler=t,J("mousemoveoutside",e,t))},updated(e,{value:t}){const o=e[me];typeof t=="function"?o.handler?o.handler!==t&&(X("mousemoveoutside",e,o.handler),o.handler=t,J("mousemoveoutside",e,t)):(e[me].handler=t,J("mousemoveoutside",e,t)):o.handler&&(X("mousemoveoutside",e,o.handler),o.handler=void 0)},unmounted(e){const{handler:t}=e[me];t&&X("mousemoveoutside",e,t),e[me].handler=void 0}},dr=sr,ge="@@coContext",cr={mounted(e,{value:t,modifiers:o}){e[ge]={handler:void 0},typeof t=="function"&&(e[ge].handler=t,J("clickoutside",e,t,{capture:o.capture}))},updated(e,{value:t,modifiers:o}){const n=e[ge];typeof t=="function"?n.handler?n.handler!==t&&(X("clickoutside",e,n.handler,{capture:o.capture}),n.handler=t,J("clickoutside",e,t,{capture:o.capture})):(e[ge].handler=t,J("clickoutside",e,t,{capture:o.capture})):n.handler&&(X("clickoutside",e,n.handler,{capture:o.capture}),n.handler=void 0)},unmounted(e,{modifiers:t}){const{handler:o}=e[ge];o&&X("clickoutside",e,o,{capture:t.capture}),e[ge].handler=void 0}},Tt=cr;function ur(e,t){`${e}${t}`}class fr{constructor(){this.elementZIndex=new Map,this.nextZIndex=2e3}get elementCount(){return this.elementZIndex.size}ensureZIndex(t,o){const{elementZIndex:n}=this;if(o!==void 0){t.style.zIndex=`${o}`,n.delete(t);return}const{nextZIndex:r}=this;n.has(t)&&n.get(t)+1===this.nextZIndex||(t.style.zIndex=`${r}`,n.set(t,r),this.nextZIndex=r+1,this.squashState())}unregister(t,o){const{elementZIndex:n}=this;n.has(t)?n.delete(t):o===void 0&&ur("z-index-manager/unregister-element","Element not found when unregistering."),this.squashState()}squashState(){const{elementCount:t}=this;t||(this.nextZIndex=2e3),this.nextZIndex-t>2500&&this.rearrange()}rearrange(){const t=Array.from(this.elementZIndex.entries());t.sort((o,n)=>o[1]-n[1]),this.nextZIndex=2e3,t.forEach(o=>{const n=o[0],r=this.nextZIndex++;`${r}`!==n.style.zIndex&&(n.style.zIndex=`${r}`)})}}const Ze=new fr,be="@@ziContext",hr={mounted(e,t){const{value:o={}}=t,{zIndex:n,enabled:r}=o;e[be]={enabled:!!r,initialized:!1},r&&(Ze.ensureZIndex(e,n),e[be].initialized=!0)},updated(e,t){const{value:o={}}=t,{zIndex:n,enabled:r}=o,i=e[be].enabled;r&&!i&&(Ze.ensureZIndex(e,n),e[be].initialized=!0),e[be].enabled=!!r},unmounted(e,t){if(!e[be].initialized)return;const{value:o={}}=t,{zIndex:n}=o;Ze.unregister(e,n)}},uo=hr,{c:_e}=fn(),vr="vueuc-style";function Nt(e){return typeof e=="string"?document.querySelector(e):e()}const pr=R({name:"LazyTeleport",props:{to:{type:[String,Object],default:void 0},disabled:Boolean,show:{type:Boolean,required:!0}},setup(e){return{showTeleport:Jn(V(e,"show")),mergedTo:E(()=>{const{to:t}=e;return t!=null?t:"body"})}},render(){return this.showTeleport?this.disabled?dt("lazy-teleport",this.$slots):u(Jo,{disabled:this.disabled,to:this.mergedTo},dt("lazy-teleport",this.$slots)):null}}),Me={top:"bottom",bottom:"top",left:"right",right:"left"},Et={start:"end",center:"center",end:"start"},Je={top:"height",bottom:"height",left:"width",right:"width"},mr={"bottom-start":"top left",bottom:"top center","bottom-end":"top right","top-start":"bottom left",top:"bottom center","top-end":"bottom right","right-start":"top left",right:"center left","right-end":"bottom left","left-start":"top right",left:"center right","left-end":"bottom right"},gr={"bottom-start":"bottom left",bottom:"bottom center","bottom-end":"bottom right","top-start":"top left",top:"top center","top-end":"top right","right-start":"top right",right:"center right","right-end":"bottom right","left-start":"top left",left:"center left","left-end":"bottom left"},br={"bottom-start":"right","bottom-end":"left","top-start":"right","top-end":"left","right-start":"bottom","right-end":"top","left-start":"bottom","left-end":"top"},_t={top:!0,bottom:!1,left:!0,right:!1},Mt={top:"end",bottom:"start",left:"end",right:"start"};function yr(e,t,o,n,r,i){if(!r||i)return{placement:e,top:0,left:0};const[l,s]=e.split("-");let a=s!=null?s:"center",c={top:0,left:0};const p=(y,C,b)=>{let g=0,h=0;const H=o[y]-t[C]-t[y];return H>0&&n&&(b?h=_t[C]?H:-H:g=_t[C]?H:-H),{left:g,top:h}},m=l==="left"||l==="right";if(a!=="center"){const y=br[e],C=Me[y],b=Je[y];if(o[b]>t[b]){if(t[y]+t[b]<o[b]){const g=(o[b]-t[b])/2;t[y]<g||t[C]<g?t[y]<t[C]?(a=Et[s],c=p(b,C,m)):c=p(b,y,m):a="center"}}else o[b]<t[b]&&t[C]<0&&t[y]>t[C]&&(a=Et[s])}else{const y=l==="bottom"||l==="top"?"left":"top",C=Me[y],b=Je[y],g=(o[b]-t[b])/2;(t[y]<g||t[C]<g)&&(t[y]>t[C]?(a=Mt[y],c=p(b,y,m)):(a=Mt[C],c=p(b,C,m)))}let f=l;return t[l]<o[Je[l]]&&t[l]<t[Me[l]]&&(f=Me[l]),{placement:a!=="center"?`${f}-${a}`:f,left:c.left,top:c.top}}function xr(e,t){return t?gr[e]:mr[e]}function wr(e,t,o,n,r,i){if(i)switch(e){case"bottom-start":return{top:`${Math.round(o.top-t.top+o.height)}px`,left:`${Math.round(o.left-t.left)}px`,transform:"translateY(-100%)"};case"bottom-end":return{top:`${Math.round(o.top-t.top+o.height)}px`,left:`${Math.round(o.left-t.left+o.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top-start":return{top:`${Math.round(o.top-t.top)}px`,left:`${Math.round(o.left-t.left)}px`,transform:""};case"top-end":return{top:`${Math.round(o.top-t.top)}px`,left:`${Math.round(o.left-t.left+o.width)}px`,transform:"translateX(-100%)"};case"right-start":return{top:`${Math.round(o.top-t.top)}px`,left:`${Math.round(o.left-t.left+o.width)}px`,transform:"translateX(-100%)"};case"right-end":return{top:`${Math.round(o.top-t.top+o.height)}px`,left:`${Math.round(o.left-t.left+o.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"left-start":return{top:`${Math.round(o.top-t.top)}px`,left:`${Math.round(o.left-t.left)}px`,transform:""};case"left-end":return{top:`${Math.round(o.top-t.top+o.height)}px`,left:`${Math.round(o.left-t.left)}px`,transform:"translateY(-100%)"};case"top":return{top:`${Math.round(o.top-t.top)}px`,left:`${Math.round(o.left-t.left+o.width/2)}px`,transform:"translateX(-50%)"};case"right":return{top:`${Math.round(o.top-t.top+o.height/2)}px`,left:`${Math.round(o.left-t.left+o.width)}px`,transform:"translateX(-100%) translateY(-50%)"};case"left":return{top:`${Math.round(o.top-t.top+o.height/2)}px`,left:`${Math.round(o.left-t.left)}px`,transform:"translateY(-50%)"};case"bottom":default:return{top:`${Math.round(o.top-t.top+o.height)}px`,left:`${Math.round(o.left-t.left+o.width/2)}px`,transform:"translateX(-50%) translateY(-100%)"}}switch(e){case"bottom-start":return{top:`${Math.round(o.top-t.top+o.height+n)}px`,left:`${Math.round(o.left-t.left+r)}px`,transform:""};case"bottom-end":return{top:`${Math.round(o.top-t.top+o.height+n)}px`,left:`${Math.round(o.left-t.left+o.width+r)}px`,transform:"translateX(-100%)"};case"top-start":return{top:`${Math.round(o.top-t.top+n)}px`,left:`${Math.round(o.left-t.left+r)}px`,transform:"translateY(-100%)"};case"top-end":return{top:`${Math.round(o.top-t.top+n)}px`,left:`${Math.round(o.left-t.left+o.width+r)}px`,transform:"translateX(-100%) translateY(-100%)"};case"right-start":return{top:`${Math.round(o.top-t.top+n)}px`,left:`${Math.round(o.left-t.left+o.width+r)}px`,transform:""};case"right-end":return{top:`${Math.round(o.top-t.top+o.height+n)}px`,left:`${Math.round(o.left-t.left+o.width+r)}px`,transform:"translateY(-100%)"};case"left-start":return{top:`${Math.round(o.top-t.top+n)}px`,left:`${Math.round(o.left-t.left+r)}px`,transform:"translateX(-100%)"};case"left-end":return{top:`${Math.round(o.top-t.top+o.height+n)}px`,left:`${Math.round(o.left-t.left+r)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top":return{top:`${Math.round(o.top-t.top+n)}px`,left:`${Math.round(o.left-t.left+o.width/2+r)}px`,transform:"translateY(-100%) translateX(-50%)"};case"right":return{top:`${Math.round(o.top-t.top+o.height/2+n)}px`,left:`${Math.round(o.left-t.left+o.width+r)}px`,transform:"translateY(-50%)"};case"left":return{top:`${Math.round(o.top-t.top+o.height/2+n)}px`,left:`${Math.round(o.left-t.left+r)}px`,transform:"translateY(-50%) translateX(-100%)"};case"bottom":default:return{top:`${Math.round(o.top-t.top+o.height+n)}px`,left:`${Math.round(o.left-t.left+o.width/2+r)}px`,transform:"translateX(-50%)"}}}const Cr=_e([_e(".v-binder-follower-container",{position:"absolute",left:"0",right:"0",top:"0",height:"0",pointerEvents:"none",zIndex:"auto"}),_e(".v-binder-follower-content",{position:"absolute",zIndex:"auto"},[_e("> *",{pointerEvents:"all"})])]),fo=R({name:"Follower",inheritAttrs:!1,props:{show:Boolean,enabled:{type:Boolean,default:void 0},placement:{type:String,default:"bottom"},syncTrigger:{type:Array,default:["resize","scroll"]},to:[String,Object],flip:{type:Boolean,default:!0},internalShift:Boolean,x:Number,y:Number,width:String,minWidth:String,containerClass:String,teleportDisabled:Boolean,zindexable:{type:Boolean,default:!0},zIndex:Number,overlap:Boolean},setup(e){const t=D("VBinder"),o=te(()=>e.enabled!==void 0?e.enabled:e.show),n=K(null),r=K(null),i=()=>{const{syncTrigger:f}=e;f.includes("scroll")&&t.addScrollListener(a),f.includes("resize")&&t.addResizeListener(a)},l=()=>{t.removeScrollListener(a),t.removeResizeListener(a)};we(()=>{o.value&&(a(),i())});const s=hn();Cr.mount({id:"vueuc/binder",head:!0,anchorMetaName:vr,ssr:s}),ve(()=>{l()}),or(()=>{o.value&&a()});const a=()=>{if(!o.value)return;const f=n.value;if(f===null)return;const y=t.targetRef,{x:C,y:b,overlap:g}=e,h=C!==void 0&&b!==void 0?ir(C,b):Xe(y);f.style.setProperty("--v-target-width",`${Math.round(h.width)}px`),f.style.setProperty("--v-target-height",`${Math.round(h.height)}px`);const{width:H,minWidth:L,placement:I,internalShift:x,flip:T}=e;f.setAttribute("v-placement",I),g?f.setAttribute("v-overlap",""):f.removeAttribute("v-overlap");const{style:w}=f;H==="target"?w.width=`${h.width}px`:H!==void 0?w.width=H:w.width="",L==="target"?w.minWidth=`${h.width}px`:L!==void 0?w.minWidth=L:w.minWidth="";const z=Xe(f),$=Xe(r.value),{left:d,top:k,placement:P}=yr(I,h,z,x,T,g),F=xr(P,g),{left:S,top:_,transform:v}=wr(P,$,h,k,d,g);f.setAttribute("v-placement",P),f.style.setProperty("--v-offset-left",`${Math.round(d)}px`),f.style.setProperty("--v-offset-top",`${Math.round(k)}px`),f.style.transform=`translateX(${S}) translateY(${_}) ${v}`,f.style.setProperty("--v-transform-origin",F),f.style.transformOrigin=F};ne(o,f=>{f?(i(),c()):l()});const c=()=>{Qo().then(a).catch(f=>console.error(f))};["placement","x","y","internalShift","flip","width","overlap","minWidth"].forEach(f=>{ne(V(e,f),a)}),["teleportDisabled"].forEach(f=>{ne(V(e,f),c)}),ne(V(e,"syncTrigger"),f=>{f.includes("resize")?t.addResizeListener(a):t.removeResizeListener(a),f.includes("scroll")?t.addScrollListener(a):t.removeScrollListener(a)});const p=Gt(),m=te(()=>{const{to:f}=e;if(f!==void 0)return f;p.value});return{VBinder:t,mergedEnabled:o,offsetContainerRef:r,followerRef:n,mergedTo:m,syncPosition:a}},render(){return u(pr,{show:this.show,to:this.mergedTo,disabled:this.teleportDisabled},{default:()=>{var e,t;const o=u("div",{class:["v-binder-follower-container",this.containerClass],ref:"offsetContainerRef"},[u("div",{class:"v-binder-follower-content",ref:"followerRef"},(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e))]);return this.zindexable?je(o,[[uo,{enabled:this.mergedEnabled,zIndex:this.zIndex}]]):o}})}});function ho(e){return e instanceof HTMLElement}function vo(e){for(let t=0;t<e.childNodes.length;t++){const o=e.childNodes[t];if(ho(o)&&(mo(o)||vo(o)))return!0}return!1}function po(e){for(let t=e.childNodes.length-1;t>=0;t--){const o=e.childNodes[t];if(ho(o)&&(mo(o)||po(o)))return!0}return!1}function mo(e){if(!Sr(e))return!1;try{e.focus({preventScroll:!0})}catch(t){}return document.activeElement===e}function Sr(e){if(e.tabIndex>0||e.tabIndex===0&&e.getAttribute("tabIndex")!==null)return!0;if(e.getAttribute("disabled"))return!1;switch(e.nodeName){case"A":return!!e.href&&e.rel!=="ignore";case"INPUT":return e.type!=="hidden"&&e.type!=="file";case"BUTTON":case"SELECT":case"TEXTAREA":return!0;default:return!1}}let ze=[];const Ir=R({name:"FocusTrap",props:{disabled:Boolean,active:Boolean,autoFocus:{type:Boolean,default:!0},onEsc:Function,initialFocusTo:String,finalFocusTo:String,returnFocusOnDeactivated:{type:Boolean,default:!0}},setup(e){const t=Un(),o=K(null),n=K(null);let r=!1,i=!1;const l=typeof document>"u"?null:document.activeElement;function s(){return ze[ze.length-1]===t}function a(g){var h;g.code==="Escape"&&s()&&((h=e.onEsc)===null||h===void 0||h.call(e,g))}we(()=>{ne(()=>e.active,g=>{g?(m(),J("keydown",document,a)):(X("keydown",document,a),r&&f())},{immediate:!0})}),ve(()=>{X("keydown",document,a),r&&f()});function c(g){if(!i&&s()){const h=p();if(h===null||h.contains(at(g)))return;y("first")}}function p(){const g=o.value;if(g===null)return null;let h=g;for(;h=h.nextSibling,!(h===null||h instanceof Element&&h.tagName==="DIV"););return h}function m(){var g;if(!e.disabled){if(ze.push(t),e.autoFocus){const{initialFocusTo:h}=e;h===void 0?y("first"):(g=Nt(h))===null||g===void 0||g.focus({preventScroll:!0})}r=!0,document.addEventListener("focus",c,!0)}}function f(){var g;if(e.disabled||(document.removeEventListener("focus",c,!0),ze=ze.filter(H=>H!==t),s()))return;const{finalFocusTo:h}=e;h!==void 0?(g=Nt(h))===null||g===void 0||g.focus({preventScroll:!0}):e.returnFocusOnDeactivated&&l instanceof HTMLElement&&(i=!0,l.focus({preventScroll:!0}),i=!1)}function y(g){if(s()&&e.active){const h=o.value,H=n.value;if(h!==null&&H!==null){const L=p();if(L==null||L===H){i=!0,h.focus({preventScroll:!0}),i=!1;return}i=!0;const I=g==="first"?vo(L):po(L);i=!1,I||(i=!0,h.focus({preventScroll:!0}),i=!1)}}}function C(g){if(i)return;const h=p();h!==null&&(g.relatedTarget!==null&&h.contains(g.relatedTarget)?y("last"):y("first"))}function b(g){i||(g.relatedTarget!==null&&g.relatedTarget===o.value?y("last"):y("first"))}return{focusableStartRef:o,focusableEndRef:n,focusableStyle:"position: absolute; height: 0; width: 0;",handleStartFocus:C,handleEndFocus:b}},render(){const{default:e}=this.$slots;if(e===void 0)return null;if(this.disabled)return e();const{active:t,focusableStyle:o}=this;return u(Oe,null,[u("div",{"aria-hidden":"true",tabindex:t?"0":"-1",ref:"focusableStartRef",style:o,onFocus:this.handleStartFocus}),e(),u("div",{"aria-hidden":"true",style:o,ref:"focusableEndRef",tabindex:t?"0":"-1",onFocus:this.handleEndFocus})])}}),go=R({name:"ChevronRight",render(){return u("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},u("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}}),zr=R({name:"ChevronDownFilled",render(){return u("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},u("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}});function Ht(e){return Array.isArray(e)?e:[e]}const ut={STOP:"STOP"};function bo(e,t){const o=t(e);e.children!==void 0&&o!==ut.STOP&&e.children.forEach(n=>bo(n,t))}function $r(e,t={}){const{preserveGroup:o=!1}=t,n=[],r=o?l=>{l.isLeaf||(n.push(l.key),i(l.children))}:l=>{l.isLeaf||(l.isGroup||n.push(l.key),i(l.children))};function i(l){l.forEach(r)}return i(e),n}function Ar(e,t){const{isLeaf:o}=e;return o!==void 0?o:!t(e)}function Pr(e){return e.children}function kr(e){return e.key}function Or(){return!1}function Tr(e,t){const{isLeaf:o}=e;return!(o===!1&&!Array.isArray(t(e)))}function Nr(e){return e.disabled===!0}function Er(e,t){return e.isLeaf===!1&&!Array.isArray(t(e))}function Qe(e){var t;return e==null?[]:Array.isArray(e)?e:(t=e.checkedKeys)!==null&&t!==void 0?t:[]}function et(e){var t;return e==null||Array.isArray(e)?[]:(t=e.indeterminateKeys)!==null&&t!==void 0?t:[]}function _r(e,t){const o=new Set(e);return t.forEach(n=>{o.has(n)||o.add(n)}),Array.from(o)}function Mr(e,t){const o=new Set(e);return t.forEach(n=>{o.has(n)&&o.delete(n)}),Array.from(o)}function Hr(e){return(e==null?void 0:e.type)==="group"}class Br extends Error{constructor(){super(),this.message="SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded."}}function Fr(e,t,o,n){return Re(t.concat(e),o,n,!1)}function Lr(e,t){const o=new Set;return e.forEach(n=>{const r=t.treeNodeMap.get(n);if(r!==void 0){let i=r.parent;for(;i!==null&&!(i.disabled||o.has(i.key));)o.add(i.key),i=i.parent}}),o}function Kr(e,t,o,n){const r=Re(t,o,n,!1),i=Re(e,o,n,!0),l=Lr(e,o),s=[];return r.forEach(a=>{(i.has(a)||l.has(a))&&s.push(a)}),s.forEach(a=>r.delete(a)),r}function tt(e,t){const{checkedKeys:o,keysToCheck:n,keysToUncheck:r,indeterminateKeys:i,cascade:l,leafOnly:s,checkStrategy:a,allowNotLoaded:c}=e;if(!l)return n!==void 0?{checkedKeys:_r(o,n),indeterminateKeys:Array.from(i)}:r!==void 0?{checkedKeys:Mr(o,r),indeterminateKeys:Array.from(i)}:{checkedKeys:Array.from(o),indeterminateKeys:Array.from(i)};const{levelTreeNodeMap:p}=t;let m;r!==void 0?m=Kr(r,o,t,c):n!==void 0?m=Fr(n,o,t,c):m=Re(o,t,c,!1);const f=a==="parent",y=a==="child"||s,C=m,b=new Set,g=Math.max.apply(null,Array.from(p.keys()));for(let h=g;h>=0;h-=1){const H=h===0,L=p.get(h);for(const I of L){if(I.isLeaf)continue;const{key:x,shallowLoaded:T}=I;if(y&&T&&I.children.forEach(d=>{!d.disabled&&!d.isLeaf&&d.shallowLoaded&&C.has(d.key)&&C.delete(d.key)}),I.disabled||!T)continue;let w=!0,z=!1,$=!0;for(const d of I.children){const k=d.key;if(!d.disabled){if($&&($=!1),C.has(k))z=!0;else if(b.has(k)){z=!0,w=!1;break}else if(w=!1,z)break}}w&&!$?(f&&I.children.forEach(d=>{!d.disabled&&C.has(d.key)&&C.delete(d.key)}),C.add(x)):z&&b.add(x),H&&y&&C.has(x)&&C.delete(x)}}return{checkedKeys:Array.from(C),indeterminateKeys:Array.from(b)}}function Re(e,t,o,n){const{treeNodeMap:r,getChildren:i}=t,l=new Set,s=new Set(e);return e.forEach(a=>{const c=r.get(a);c!==void 0&&bo(c,p=>{if(p.disabled)return ut.STOP;const{key:m}=p;if(!l.has(m)&&(l.add(m),s.add(m),Er(p.rawNode,i))){if(n)return ut.STOP;if(!o)throw new Br}})}),s}function Rr(e,{includeGroup:t=!1,includeSelf:o=!0},n){var r;const i=n.treeNodeMap;let l=e==null?null:(r=i.get(e))!==null&&r!==void 0?r:null;const s={keyPath:[],treeNodePath:[],treeNode:l};if(l!=null&&l.ignored)return s.treeNode=null,s;for(;l;)!l.ignored&&(t||!l.isGroup)&&s.treeNodePath.push(l),l=l.parent;return s.treeNodePath.reverse(),o||s.treeNodePath.pop(),s.keyPath=s.treeNodePath.map(a=>a.key),s}function jr(e){if(e.length===0)return null;const t=e[0];return t.isGroup||t.ignored||t.disabled?t.getNext():t}function Dr(e,t){const o=e.siblings,n=o.length,{index:r}=e;return t?o[(r+1)%n]:r===o.length-1?null:o[r+1]}function Bt(e,t,{loop:o=!1,includeDisabled:n=!1}={}){const r=t==="prev"?Wr:Dr,i={reverse:t==="prev"};let l=!1,s=null;function a(c){if(c!==null){if(c===e){if(!l)l=!0;else if(!e.disabled&&!e.isGroup){s=e;return}}else if((!c.disabled||n)&&!c.ignored&&!c.isGroup){s=c;return}if(c.isGroup){const p=bt(c,i);p!==null?s=p:a(r(c,o))}else{const p=r(c,!1);if(p!==null)a(p);else{const m=Vr(c);m!=null&&m.isGroup?a(r(m,o)):o&&a(r(c,!0))}}}}return a(e),s}function Wr(e,t){const o=e.siblings,n=o.length,{index:r}=e;return t?o[(r-1+n)%n]:r===0?null:o[r-1]}function Vr(e){return e.parent}function bt(e,t={}){const{reverse:o=!1}=t,{children:n}=e;if(n){const{length:r}=n,i=o?r-1:0,l=o?-1:r,s=o?-1:1;for(let a=i;a!==l;a+=s){const c=n[a];if(!c.disabled&&!c.ignored)if(c.isGroup){const p=bt(c,t);if(p!==null)return p}else return c}}return null}const Gr={getChild(){return this.ignored?null:bt(this)},getParent(){const{parent:e}=this;return e!=null&&e.isGroup?e.getParent():e},getNext(e={}){return Bt(this,"next",e)},getPrev(e={}){return Bt(this,"prev",e)}};function Ur(e,t){const o=t?new Set(t):void 0,n=[];function r(i){i.forEach(l=>{n.push(l),!(l.isLeaf||!l.children||l.ignored)&&(l.isGroup||o===void 0||o.has(l.key))&&r(l.children)})}return r(e),n}function qr(e,t){const o=e.key;for(;t;){if(t.key===o)return!0;t=t.parent}return!1}function yo(e,t,o,n,r,i=null,l=0){const s=[];return e.forEach((a,c)=>{var p;const m=Object.create(n);if(m.rawNode=a,m.siblings=s,m.level=l,m.index=c,m.isFirstChild=c===0,m.isLastChild=c+1===e.length,m.parent=i,!m.ignored){const f=r(a);Array.isArray(f)&&(m.children=yo(f,t,o,n,r,m,l+1))}s.push(m),t.set(m.key,m),o.has(l)||o.set(l,[]),(p=o.get(l))===null||p===void 0||p.push(m)}),s}function xo(e,t={}){var o;const n=new Map,r=new Map,{getDisabled:i=Nr,getIgnored:l=Or,getIsGroup:s=Hr,getKey:a=kr}=t,c=(o=t.getChildren)!==null&&o!==void 0?o:Pr,p=t.ignoreEmptyChildren?I=>{const x=c(I);return Array.isArray(x)?x.length?x:null:x}:c,m=Object.assign({get key(){return a(this.rawNode)},get disabled(){return i(this.rawNode)},get isGroup(){return s(this.rawNode)},get isLeaf(){return Ar(this.rawNode,p)},get shallowLoaded(){return Tr(this.rawNode,p)},get ignored(){return l(this.rawNode)},contains(I){return qr(this,I)}},Gr),f=yo(e,n,r,m,p);function y(I){if(I==null)return null;const x=n.get(I);return x&&!x.isGroup&&!x.ignored?x:null}function C(I){if(I==null)return null;const x=n.get(I);return x&&!x.ignored?x:null}function b(I,x){const T=C(I);return T?T.getPrev(x):null}function g(I,x){const T=C(I);return T?T.getNext(x):null}function h(I){const x=C(I);return x?x.getParent():null}function H(I){const x=C(I);return x?x.getChild():null}const L={treeNodes:f,treeNodeMap:n,levelTreeNodeMap:r,maxLevel:Math.max(...r.keys()),getChildren:p,getFlattenedNodes(I){return Ur(f,I)},getNode:y,getPrev:b,getNext:g,getParent:h,getChild:H,getFirstAvailableNode(){return jr(f)},getPath(I,x={}){return Rr(I,x,L)},getCheckedKeys(I,x={}){const{cascade:T=!0,leafOnly:w=!1,checkStrategy:z="all",allowNotLoaded:$=!1}=x;return tt({checkedKeys:Qe(I),indeterminateKeys:et(I),cascade:T,leafOnly:w,checkStrategy:z,allowNotLoaded:$},L)},check(I,x,T={}){const{cascade:w=!0,leafOnly:z=!1,checkStrategy:$="all",allowNotLoaded:d=!1}=T;return tt({checkedKeys:Qe(x),indeterminateKeys:et(x),keysToCheck:I==null?[]:Ht(I),cascade:w,leafOnly:z,checkStrategy:$,allowNotLoaded:d},L)},uncheck(I,x,T={}){const{cascade:w=!0,leafOnly:z=!1,checkStrategy:$="all",allowNotLoaded:d=!1}=T;return tt({checkedKeys:Qe(x),indeterminateKeys:et(x),keysToUncheck:I==null?[]:Ht(I),cascade:w,leafOnly:z,checkStrategy:$,allowNotLoaded:d},L)},getNonLeafKeys(I={}){return $r(f,I)}};return L}const{cubicBezierEaseIn:Ft,cubicBezierEaseOut:Lt}=Ut;function Yr({transformOrigin:e="inherit",duration:t=".2s",enterScale:o=".9",originalTransform:n="",originalTransition:r=""}={}){return[N("&.fade-in-scale-up-transition-leave-active",{transformOrigin:e,transition:`opacity ${t} ${Ft}, transform ${t} ${Ft} ${r&&","+r}`}),N("&.fade-in-scale-up-transition-enter-active",{transformOrigin:e,transition:`opacity ${t} ${Lt}, transform ${t} ${Lt} ${r&&","+r}`}),N("&.fade-in-scale-up-transition-enter-from, &.fade-in-scale-up-transition-leave-to",{opacity:0,transform:`${n} scale(${o})`}),N("&.fade-in-scale-up-transition-leave-from, &.fade-in-scale-up-transition-enter-to",{opacity:1,transform:`${n} scale(1)`})]}const Xr={space:"6px",spaceArrow:"10px",arrowOffset:"10px",arrowOffsetVertical:"10px",arrowHeight:"6px",padding:"8px 14px"},Zr=e=>{const{boxShadow2:t,popoverColor:o,textColor2:n,borderRadius:r,fontSize:i,dividerColor:l}=e;return Object.assign(Object.assign({},Xr),{fontSize:i,borderRadius:r,color:o,dividerColor:l,textColor:n,boxShadow:t})},Jr={name:"Popover",common:Ce,self:Zr},yt=Jr,ot={top:"bottom",bottom:"top",left:"right",right:"left"},U="var(--n-arrow-height) * 1.414",Qr=N([A("popover",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 position: relative;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 box-shadow: var(--n-box-shadow);
 word-break: break-word;
 `,[N(">",[A("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),se("raw",`
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `,[se("scrollable",[se("show-header-or-footer","padding: var(--n-padding);")])]),O("header",`
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),O("footer",`
 padding: var(--n-padding);
 border-top: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),B("scrollable, show-header-or-footer",[O("content",`
 padding: var(--n-padding);
 `)])]),A("popover-shared",`
 transform-origin: inherit;
 `,[A("popover-arrow-wrapper",`
 position: absolute;
 overflow: hidden;
 pointer-events: none;
 `,[A("popover-arrow",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 display: block;
 width: calc(${U});
 height: calc(${U});
 box-shadow: 0 0 8px 0 rgba(0, 0, 0, .12);
 transform: rotate(45deg);
 background-color: var(--n-color);
 pointer-events: all;
 `)]),N("&.popover-transition-enter-from, &.popover-transition-leave-to",`
 opacity: 0;
 transform: scale(.85);
 `),N("&.popover-transition-enter-to, &.popover-transition-leave-from",`
 transform: scale(1);
 opacity: 1;
 `),N("&.popover-transition-enter-active",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-out),
 transform .15s var(--n-bezier-ease-out);
 `),N("&.popover-transition-leave-active",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-in),
 transform .15s var(--n-bezier-ease-in);
 `)]),ee("top-start",`
 top: calc(${U} / -2);
 left: calc(${ae("top-start")} - var(--v-offset-left));
 `),ee("top",`
 top: calc(${U} / -2);
 transform: translateX(calc(${U} / -2)) rotate(45deg);
 left: 50%;
 `),ee("top-end",`
 top: calc(${U} / -2);
 right: calc(${ae("top-end")} + var(--v-offset-left));
 `),ee("bottom-start",`
 bottom: calc(${U} / -2);
 left: calc(${ae("bottom-start")} - var(--v-offset-left));
 `),ee("bottom",`
 bottom: calc(${U} / -2);
 transform: translateX(calc(${U} / -2)) rotate(45deg);
 left: 50%;
 `),ee("bottom-end",`
 bottom: calc(${U} / -2);
 right: calc(${ae("bottom-end")} + var(--v-offset-left));
 `),ee("left-start",`
 left: calc(${U} / -2);
 top: calc(${ae("left-start")} - var(--v-offset-top));
 `),ee("left",`
 left: calc(${U} / -2);
 transform: translateY(calc(${U} / -2)) rotate(45deg);
 top: 50%;
 `),ee("left-end",`
 left: calc(${U} / -2);
 bottom: calc(${ae("left-end")} + var(--v-offset-top));
 `),ee("right-start",`
 right: calc(${U} / -2);
 top: calc(${ae("right-start")} - var(--v-offset-top));
 `),ee("right",`
 right: calc(${U} / -2);
 transform: translateY(calc(${U} / -2)) rotate(45deg);
 top: 50%;
 `),ee("right-end",`
 right: calc(${U} / -2);
 bottom: calc(${ae("right-end")} + var(--v-offset-top));
 `),...Wn({top:["right-start","left-start"],right:["top-end","bottom-end"],bottom:["right-end","left-end"],left:["top-start","bottom-start"]},(e,t)=>{const o=["right","left"].includes(t),n=o?"width":"height";return e.map(r=>{const i=r.split("-")[1]==="end",s=`calc((${`var(--v-target-${n}, 0px)`} - ${U}) / 2)`,a=ae(r);return N(`[v-placement="${r}"] >`,[A("popover-shared",[B("center-arrow",[A("popover-arrow",`${t}: calc(max(${s}, ${a}) ${i?"+":"-"} var(--v-offset-${o?"left":"top"}));`)])])])})})]);function ae(e){return["top","bottom"].includes(e.split("-")[0])?"var(--n-arrow-offset)":"var(--n-arrow-offset-vertical)"}function ee(e,t){const o=e.split("-")[0],n=["top","bottom"].includes(o)?"height: var(--n-space-arrow);":"width: var(--n-space-arrow);";return N(`[v-placement="${e}"] >`,[A("popover-shared",`
 margin-${ot[o]}: var(--n-space);
 `,[B("show-arrow",`
 margin-${ot[o]}: var(--n-space-arrow);
 `),B("overlap",`
 margin: 0;
 `),vn("popover-arrow-wrapper",`
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${o}: 100%;
 ${ot[o]}: auto;
 ${n}
 `,[A("popover-arrow",t)])])])}const wo=Object.assign(Object.assign({},Z.props),{to:xe.propTo,show:Boolean,trigger:String,showArrow:Boolean,delay:Number,duration:Number,raw:Boolean,arrowPointToCenter:Boolean,arrowStyle:[String,Object],displayDirective:String,x:Number,y:Number,flip:Boolean,overlap:Boolean,placement:String,width:[Number,String],keepAliveOnHover:Boolean,scrollable:Boolean,contentStyle:[Object,String],headerStyle:[Object,String],footerStyle:[Object,String],internalDeactivateImmediately:Boolean,animated:Boolean,onClickoutside:Function,internalTrapFocus:Boolean,internalOnAfterLeave:Function,minWidth:Number,maxWidth:Number}),Co=({arrowStyle:e,clsPrefix:t})=>u("div",{key:"__popover-arrow__",class:`${t}-popover-arrow-wrapper`},u("div",{class:`${t}-popover-arrow`,style:e})),ei=R({name:"PopoverBody",inheritAttrs:!1,props:wo,setup(e,{slots:t,attrs:o}){const{namespaceRef:n,mergedClsPrefixRef:r,inlineThemeDisabled:i}=pe(e),l=Z("Popover","-popover",Qr,yt,e,r),s=K(null),a=D("NPopover"),c=K(null),p=K(e.show),m=K(!1);Fe(()=>{const{show:w}=e;w&&!Xn()&&!e.internalDeactivateImmediately&&(m.value=!0)});const f=E(()=>{const{trigger:w,onClickoutside:z}=e,$=[],{positionManuallyRef:{value:d}}=a;return d||(w==="click"&&!z&&$.push([Tt,I,void 0,{capture:!0}]),w==="hover"&&$.push([dr,L])),z&&$.push([Tt,I,void 0,{capture:!0}]),(e.displayDirective==="show"||e.animated&&m.value)&&$.push([en,e.show]),$}),y=E(()=>{const w=e.width==="trigger"?void 0:he(e.width),z=[];w&&z.push({width:w});const{maxWidth:$,minWidth:d}=e;return $&&z.push({maxWidth:he($)}),d&&z.push({maxWidth:he(d)}),i||z.push(C.value),z}),C=E(()=>{const{common:{cubicBezierEaseInOut:w,cubicBezierEaseIn:z,cubicBezierEaseOut:$},self:{space:d,spaceArrow:k,padding:P,fontSize:F,textColor:S,dividerColor:_,color:v,boxShadow:M,borderRadius:j,arrowHeight:G,arrowOffset:le,arrowOffsetVertical:Ie}}=l.value;return{"--n-box-shadow":M,"--n-bezier":w,"--n-bezier-ease-in":z,"--n-bezier-ease-out":$,"--n-font-size":F,"--n-text-color":S,"--n-color":v,"--n-divider-color":_,"--n-border-radius":j,"--n-arrow-height":G,"--n-arrow-offset":le,"--n-arrow-offset-vertical":Ie,"--n-padding":P,"--n-space":d,"--n-space-arrow":k}}),b=i?Se("popover",void 0,C,e):void 0;a.setBodyInstance({syncPosition:g}),ve(()=>{a.setBodyInstance(null)}),ne(V(e,"show"),w=>{e.animated||(w?p.value=!0:p.value=!1)});function g(){var w;(w=s.value)===null||w===void 0||w.syncPosition()}function h(w){e.trigger==="hover"&&e.keepAliveOnHover&&e.show&&a.handleMouseEnter(w)}function H(w){e.trigger==="hover"&&e.keepAliveOnHover&&a.handleMouseLeave(w)}function L(w){e.trigger==="hover"&&!x().contains(at(w))&&a.handleMouseMoveOutside(w)}function I(w){(e.trigger==="click"&&!x().contains(at(w))||e.onClickoutside)&&a.handleClickOutside(w)}function x(){return a.getTriggerElement()}q(Ve,c),q(gt,null),q(mt,null);function T(){if(b==null||b.onRender(),!(e.displayDirective==="show"||e.show||e.animated&&m.value))return null;let z;const $=a.internalRenderBodyRef.value,{value:d}=r;if($)z=$([`${d}-popover-shared`,b==null?void 0:b.themeClass.value,e.overlap&&`${d}-popover-shared--overlap`,e.showArrow&&`${d}-popover-shared--show-arrow`,e.arrowPointToCenter&&`${d}-popover-shared--center-arrow`],c,y.value,h,H);else{const{value:k}=a.extraClassRef,{internalTrapFocus:P}=e,F=!$t(t.header)||!$t(t.footer),S=()=>{var _;const v=F?u(Oe,null,qe(t.header,G=>G?u("div",{class:`${d}-popover__header`,style:e.headerStyle},G):null),qe(t.default,G=>G?u("div",{class:`${d}-popover__content`,style:e.contentStyle},t):null),qe(t.footer,G=>G?u("div",{class:`${d}-popover__footer`,style:e.footerStyle},G):null)):e.scrollable?(_=t.default)===null||_===void 0?void 0:_.call(t):u("div",{class:`${d}-popover__content`,style:e.contentStyle},t),M=e.scrollable?u(qt,{contentClass:F?void 0:`${d}-popover__content`,contentStyle:F?void 0:e.contentStyle},{default:()=>v}):v,j=e.showArrow?Co({arrowStyle:e.arrowStyle,clsPrefix:d}):null;return[M,j]};z=u("div",De({class:[`${d}-popover`,`${d}-popover-shared`,b==null?void 0:b.themeClass.value,k.map(_=>`${d}-${_}`),{[`${d}-popover--scrollable`]:e.scrollable,[`${d}-popover--show-header-or-footer`]:F,[`${d}-popover--raw`]:e.raw,[`${d}-popover-shared--overlap`]:e.overlap,[`${d}-popover-shared--show-arrow`]:e.showArrow,[`${d}-popover-shared--center-arrow`]:e.arrowPointToCenter}],ref:c,style:y.value,onKeydown:a.handleKeydown,onMouseenter:h,onMouseleave:H},o),P?u(Ir,{active:e.show,autoFocus:!0},{default:S}):S())}return je(z,f.value)}return{displayed:m,namespace:n,isMounted:a.isMountedRef,zIndex:a.zIndexRef,followerRef:s,adjustedTo:xe(e),followerEnabled:p,renderContentNode:T}},render(){return u(fo,{ref:"followerRef",zIndex:this.zIndex,show:this.show,enabled:this.followerEnabled,to:this.adjustedTo,x:this.x,y:this.y,flip:this.flip,placement:this.placement,containerClass:this.namespace,overlap:this.overlap,width:this.width==="trigger"?"target":void 0,teleportDisabled:this.adjustedTo===xe.tdkey},{default:()=>this.animated?u(Vt,{name:"popover-transition",appear:this.isMounted,onEnter:()=>{this.followerEnabled=!0},onAfterLeave:()=>{var e;(e=this.internalOnAfterLeave)===null||e===void 0||e.call(this),this.followerEnabled=!1,this.displayed=!1}},{default:this.renderContentNode}):this.renderContentNode()})}}),ti=Object.keys(wo),oi={focus:["onFocus","onBlur"],click:["onClick"],hover:["onMouseenter","onMouseleave"],manual:[],nested:["onFocus","onBlur","onMouseenter","onMouseleave","onClick"]};function ni(e,t,o){oi[t].forEach(n=>{e.props?e.props=Object.assign({},e.props):e.props={};const r=e.props[n],i=o[n];r?e.props[n]=(...l)=>{r(...l),i(...l)}:e.props[n]=i})}const Ge={show:{type:Boolean,default:void 0},defaultShow:Boolean,showArrow:{type:Boolean,default:!0},trigger:{type:String,default:"hover"},delay:{type:Number,default:100},duration:{type:Number,default:100},raw:Boolean,placement:{type:String,default:"top"},x:Number,y:Number,arrowPointToCenter:Boolean,disabled:Boolean,getDisabled:Function,displayDirective:{type:String,default:"if"},arrowStyle:[String,Object],flip:{type:Boolean,default:!0},animated:{type:Boolean,default:!0},width:{type:[Number,String],default:void 0},overlap:Boolean,keepAliveOnHover:{type:Boolean,default:!0},zIndex:Number,to:xe.propTo,scrollable:Boolean,contentStyle:[Object,String],headerStyle:[Object,String],footerStyle:[Object,String],onClickoutside:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],internalDeactivateImmediately:Boolean,internalSyncTargetWithParent:Boolean,internalInheritedEventHandlers:{type:Array,default:()=>[]},internalTrapFocus:Boolean,internalExtraClass:{type:Array,default:()=>[]},onShow:[Function,Array],onHide:[Function,Array],arrow:{type:Boolean,default:void 0},minWidth:Number,maxWidth:Number},ri=Object.assign(Object.assign(Object.assign({},Z.props),Ge),{internalOnAfterLeave:Function,internalRenderBody:Function}),So=R({name:"Popover",inheritAttrs:!1,props:ri,__popover__:!0,setup(e){const t=Gt(),o=K(null),n=E(()=>e.show),r=K(e.defaultShow),i=ke(n,r),l=te(()=>e.disabled?!1:i.value),s=()=>{if(e.disabled)return!0;const{getDisabled:S}=e;return!!(S!=null&&S())},a=()=>s()?!1:i.value,c=ro(e,["arrow","showArrow"]),p=E(()=>e.overlap?!1:c.value);let m=null;const f=K(null),y=K(null),C=te(()=>e.x!==void 0&&e.y!==void 0);function b(S){const{"onUpdate:show":_,onUpdateShow:v,onShow:M,onHide:j}=e;r.value=S,_&&Y(_,S),v&&Y(v,S),S&&M&&Y(M,!0),S&&j&&Y(j,!1)}function g(){m&&m.syncPosition()}function h(){const{value:S}=f;S&&(window.clearTimeout(S),f.value=null)}function H(){const{value:S}=y;S&&(window.clearTimeout(S),y.value=null)}function L(){const S=s();if(e.trigger==="focus"&&!S){if(a())return;b(!0)}}function I(){const S=s();if(e.trigger==="focus"&&!S){if(!a())return;b(!1)}}function x(){const S=s();if(e.trigger==="hover"&&!S){if(H(),f.value!==null||a())return;const _=()=>{b(!0),f.value=null},{delay:v}=e;v===0?_():f.value=window.setTimeout(_,v)}}function T(){const S=s();if(e.trigger==="hover"&&!S){if(h(),y.value!==null||!a())return;const _=()=>{b(!1),y.value=null},{duration:v}=e;v===0?_():y.value=window.setTimeout(_,v)}}function w(){T()}function z(S){var _;a()&&(e.trigger==="click"&&(h(),H(),b(!1)),(_=e.onClickoutside)===null||_===void 0||_.call(e,S))}function $(){if(e.trigger==="click"&&!s()){h(),H();const S=!a();b(S)}}function d(S){e.internalTrapFocus&&S.key==="Escape"&&(h(),H(),b(!1))}function k(S){r.value=S}function P(){var S;return(S=o.value)===null||S===void 0?void 0:S.targetRef}function F(S){m=S}return q("NPopover",{getTriggerElement:P,handleKeydown:d,handleMouseEnter:x,handleMouseLeave:T,handleClickOutside:z,handleMouseMoveOutside:w,setBodyInstance:F,positionManuallyRef:C,isMountedRef:t,zIndexRef:V(e,"zIndex"),extraClassRef:V(e,"internalExtraClass"),internalRenderBodyRef:V(e,"internalRenderBody")}),Fe(()=>{i.value&&s()&&b(!1)}),{binderInstRef:o,positionManually:C,mergedShowConsideringDisabledProp:l,uncontrolledShow:r,mergedShowArrow:p,getMergedShow:a,setShow:k,handleClick:$,handleMouseEnter:x,handleMouseLeave:T,handleFocus:L,handleBlur:I,syncPosition:g}},render(){var e;const{positionManually:t,$slots:o}=this;let n,r=!1;if(!t&&(o.activator?n=Pt(o,"activator"):n=Pt(o,"trigger"),n)){n=tn(n),n=n.type===on?u("span",[n]):n;const i={onClick:this.handleClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onFocus:this.handleFocus,onBlur:this.handleBlur};if(!((e=n.type)===null||e===void 0)&&e.__popover__)r=!0,n.props||(n.props={internalSyncTargetWithParent:!0,internalInheritedEventHandlers:[]}),n.props.internalSyncTargetWithParent=!0,n.props.internalInheritedEventHandlers?n.props.internalInheritedEventHandlers=[i,...n.props.internalInheritedEventHandlers]:n.props.internalInheritedEventHandlers=[i];else{const{internalInheritedEventHandlers:l}=this,s=[i,...l],a={onBlur:c=>{s.forEach(p=>{p.onBlur(c)})},onFocus:c=>{s.forEach(p=>{p.onFocus(c)})},onClick:c=>{s.forEach(p=>{p.onClick(c)})},onMouseenter:c=>{s.forEach(p=>{p.onMouseenter(c)})},onMouseleave:c=>{s.forEach(p=>{p.onMouseleave(c)})}};ni(n,l?"nested":t?"manual":this.trigger,a)}}return u(so,{ref:"binderInstRef",syncTarget:!r,syncTargetWithParent:this.internalSyncTargetWithParent},{default:()=>{this.mergedShowConsideringDisabledProp;const i=this.getMergedShow();return[this.internalTrapFocus&&i?je(u("div",{style:{position:"fixed",inset:0}}),[[uo,{enabled:i,zIndex:this.zIndex}]]):null,t?null:u(co,null,{default:()=>n}),u(ei,Ae(this.$props,ti,Object.assign(Object.assign({},this.$attrs),{showArrow:this.mergedShowArrow,show:i})),{default:()=>{var l,s;return(s=(l=this.$slots).default)===null||s===void 0?void 0:s.call(l)},header:()=>{var l,s;return(s=(l=this.$slots).header)===null||s===void 0?void 0:s.call(l)},footer:()=>{var l,s;return(s=(l=this.$slots).footer)===null||s===void 0?void 0:s.call(l)}})]}})}}),{cubicBezierEaseInOut:re,cubicBezierEaseOut:ii,cubicBezierEaseIn:li}=Ut;function ai({overflow:e="hidden",duration:t=".3s",originalTransition:o="",leavingDelay:n="0s",foldPadding:r=!1,enterToProps:i=void 0,leaveToProps:l=void 0,reverse:s=!1}={}){const a=s?"leave":"enter",c=s?"enter":"leave";return[N(`&.fade-in-height-expand-transition-${c}-from,
 &.fade-in-height-expand-transition-${a}-to`,Object.assign(Object.assign({},i),{opacity:1})),N(`&.fade-in-height-expand-transition-${c}-to,
 &.fade-in-height-expand-transition-${a}-from`,Object.assign(Object.assign({},l),{opacity:0,marginTop:"0 !important",marginBottom:"0 !important",paddingTop:r?"0 !important":void 0,paddingBottom:r?"0 !important":void 0})),N(`&.fade-in-height-expand-transition-${c}-active`,`
 overflow: ${e};
 transition:
 max-height ${t} ${re} ${n},
 opacity ${t} ${ii} ${n},
 margin-top ${t} ${re} ${n},
 margin-bottom ${t} ${re} ${n},
 padding-top ${t} ${re} ${n},
 padding-bottom ${t} ${re} ${n}
 ${o?","+o:""}
 `),N(`&.fade-in-height-expand-transition-${a}-active`,`
 overflow: ${e};
 transition:
 max-height ${t} ${re},
 opacity ${t} ${li},
 margin-top ${t} ${re},
 margin-bottom ${t} ${re},
 padding-top ${t} ${re},
 padding-bottom ${t} ${re}
 ${o?","+o:""}
 `)]}const si={padding:"8px 14px"},di=e=>{const{borderRadius:t,boxShadow2:o,baseColor:n}=e;return Object.assign(Object.assign({},si),{borderRadius:t,boxShadow:o,color:st(n,"rgba(0, 0, 0, .85)"),textColor:n})},ci=We({name:"Tooltip",common:Ce,peers:{Popover:yt},self:di}),Io=ci,ui={padding:"4px 0",optionIconSizeSmall:"14px",optionIconSizeMedium:"16px",optionIconSizeLarge:"16px",optionIconSizeHuge:"18px",optionSuffixWidthSmall:"14px",optionSuffixWidthMedium:"14px",optionSuffixWidthLarge:"16px",optionSuffixWidthHuge:"16px",optionIconSuffixWidthSmall:"32px",optionIconSuffixWidthMedium:"32px",optionIconSuffixWidthLarge:"36px",optionIconSuffixWidthHuge:"36px",optionPrefixWidthSmall:"14px",optionPrefixWidthMedium:"14px",optionPrefixWidthLarge:"16px",optionPrefixWidthHuge:"16px",optionIconPrefixWidthSmall:"36px",optionIconPrefixWidthMedium:"36px",optionIconPrefixWidthLarge:"40px",optionIconPrefixWidthHuge:"40px"},fi=e=>{const{primaryColor:t,textColor2:o,dividerColor:n,hoverColor:r,popoverColor:i,invertedColor:l,borderRadius:s,fontSizeSmall:a,fontSizeMedium:c,fontSizeLarge:p,fontSizeHuge:m,heightSmall:f,heightMedium:y,heightLarge:C,heightHuge:b,textColor3:g,opacityDisabled:h}=e;return Object.assign(Object.assign({},ui),{optionHeightSmall:f,optionHeightMedium:y,optionHeightLarge:C,optionHeightHuge:b,borderRadius:s,fontSizeSmall:a,fontSizeMedium:c,fontSizeLarge:p,fontSizeHuge:m,optionTextColor:o,optionTextColorHover:o,optionTextColorActive:t,optionTextColorChildActive:t,color:i,dividerColor:n,suffixColor:o,prefixColor:o,optionColorHover:r,optionColorActive:Be(t,{alpha:.1}),groupHeaderTextColor:g,optionTextColorInverted:"#BBB",optionTextColorHoverInverted:"#FFF",optionTextColorActiveInverted:"#FFF",optionTextColorChildActiveInverted:"#FFF",colorInverted:l,dividerColorInverted:"#BBB",suffixColorInverted:"#BBB",prefixColorInverted:"#BBB",optionColorHoverInverted:t,optionColorActiveInverted:t,groupHeaderTextColorInverted:"#AAA",optionOpacityDisabled:h})},hi=We({name:"Dropdown",common:Ce,peers:{Popover:yt},self:fi}),zo=hi,vi=Object.assign(Object.assign({},Ge),Z.props),pi=R({name:"Tooltip",props:vi,__popover__:!0,setup(e){const{mergedClsPrefixRef:t}=pe(e),o=Z("Tooltip","-tooltip",void 0,Io,e,t),n=K(null);return Object.assign(Object.assign({},{syncPosition(){n.value.syncPosition()},setShow(i){n.value.setShow(i)}}),{popoverRef:n,mergedTheme:o,popoverThemeOverrides:E(()=>o.value.self)})},render(){const{mergedTheme:e,internalExtraClass:t}=this;return u(So,Object.assign(Object.assign({},this.$props),{theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:this.popoverThemeOverrides,internalExtraClass:t.concat("tooltip"),ref:"popoverRef"}),this.$slots)}}),$o=R({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return u("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),mi=e=>{const{textColorBase:t,opacity1:o,opacity2:n,opacity3:r,opacity4:i,opacity5:l}=e;return{color:t,opacity1Depth:o,opacity2Depth:n,opacity3Depth:r,opacity4Depth:i,opacity5Depth:l}},gi={name:"Icon",common:Ce,self:mi},bi=gi,yi=A("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[B("color-transition",{transition:"color .3s var(--n-bezier)"}),B("depth",{color:"var(--n-color)"},[N("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),N("svg",{height:"1em",width:"1em"})]),xi=Object.assign(Object.assign({},Z.props),{depth:[String,Number],size:[Number,String],color:String,component:Object}),wi=R({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:xi,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=pe(e),n=Z("Icon","-icon",yi,bi,e,t),r=E(()=>{const{depth:l}=e,{common:{cubicBezierEaseInOut:s},self:a}=n.value;if(l!==void 0){const{color:c,[`opacity${l}Depth`]:p}=a;return{"--n-bezier":s,"--n-color":c,"--n-opacity":p}}return{"--n-bezier":s,"--n-color":"","--n-opacity":""}}),i=o?Se("icon",E(()=>`${e.depth||"d"}`),r,e):void 0;return{mergedClsPrefix:t,mergedStyle:E(()=>{const{size:l,color:s}=e;return{fontSize:he(l),color:s}}),cssVars:o?void 0:r,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{$parent:t,depth:o,mergedClsPrefix:n,component:r,onRender:i,themeClass:l}=this;return!((e=t==null?void 0:t.$options)===null||e===void 0)&&e._n_icon__&&Le("icon","don't wrap `n-icon` inside `n-icon`"),i==null||i(),u("i",De(this.$attrs,{role:"img",class:[`${n}-icon`,l,{[`${n}-icon--depth`]:o,[`${n}-icon--color-transition`]:o!==void 0}],style:[this.cssVars,this.mergedStyle]}),r?u(r):this.$slots)}}),xt=oe("n-dropdown-menu"),Ue=oe("n-dropdown"),Kt=oe("n-dropdown-option");function ft(e,t){return e.type==="submenu"||e.type===void 0&&e[t]!==void 0}function Ci(e){return e.type==="group"}function Ao(e){return e.type==="divider"}function Si(e){return e.type==="render"}const Po=R({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const t=D(Ue),{hoverKeyRef:o,keyboardKeyRef:n,lastToggledSubmenuKeyRef:r,pendingKeyPathRef:i,activeKeyPathRef:l,animatedRef:s,mergedShowRef:a,renderLabelRef:c,renderIconRef:p,labelFieldRef:m,childrenFieldRef:f,renderOptionRef:y,nodePropsRef:C,menuPropsRef:b}=t,g=D(Kt,null),h=D(xt),H=D(Ve),L=E(()=>e.tmNode.rawNode),I=E(()=>{const{value:M}=f;return ft(e.tmNode.rawNode,M)}),x=E(()=>{const{disabled:M}=e.tmNode;return M}),T=E(()=>{if(!I.value)return!1;const{key:M,disabled:j}=e.tmNode;if(j)return!1;const{value:G}=o,{value:le}=n,{value:Ie}=r,{value:ce}=i;return G!==null?ce.includes(M):le!==null?ce.includes(M)&&ce[ce.length-1]!==M:Ie!==null?ce.includes(M):!1}),w=E(()=>n.value===null&&!s.value),z=Zn(T,300,w),$=E(()=>!!(g!=null&&g.enteringSubmenuRef.value)),d=K(!1);q(Kt,{enteringSubmenuRef:d});function k(){d.value=!0}function P(){d.value=!1}function F(){const{parentKey:M,tmNode:j}=e;j.disabled||a.value&&(r.value=M,n.value=null,o.value=j.key)}function S(){const{tmNode:M}=e;M.disabled||a.value&&o.value!==M.key&&F()}function _(M){if(e.tmNode.disabled||!a.value)return;const{relatedTarget:j}=M;j&&!At({target:j},"dropdownOption")&&!At({target:j},"scrollbarRail")&&(o.value=null)}function v(){const{value:M}=I,{tmNode:j}=e;a.value&&!M&&!j.disabled&&(t.doSelect(j.key,j.rawNode),t.doUpdateShow(!1))}return{labelField:m,renderLabel:c,renderIcon:p,siblingHasIcon:h.showIconRef,siblingHasSubmenu:h.hasSubmenuRef,menuProps:b,popoverBody:H,animated:s,mergedShowSubmenu:E(()=>z.value&&!$.value),rawNode:L,hasSubmenu:I,pending:te(()=>{const{value:M}=i,{key:j}=e.tmNode;return M.includes(j)}),childActive:te(()=>{const{value:M}=l,{key:j}=e.tmNode,G=M.findIndex(le=>j===le);return G===-1?!1:G<M.length-1}),active:te(()=>{const{value:M}=l,{key:j}=e.tmNode,G=M.findIndex(le=>j===le);return G===-1?!1:G===M.length-1}),mergedDisabled:x,renderOption:y,nodeProps:C,handleClick:v,handleMouseMove:S,handleMouseEnter:F,handleMouseLeave:_,handleSubmenuBeforeEnter:k,handleSubmenuAfterEnter:P}},render(){var e,t;const{animated:o,rawNode:n,mergedShowSubmenu:r,clsPrefix:i,siblingHasIcon:l,siblingHasSubmenu:s,renderLabel:a,renderIcon:c,renderOption:p,nodeProps:m,props:f,scrollable:y}=this;let C=null;if(r){const H=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,n,n.children);C=u(ko,Object.assign({},H,{clsPrefix:i,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const b={class:[`${i}-dropdown-option-body`,this.pending&&`${i}-dropdown-option-body--pending`,this.active&&`${i}-dropdown-option-body--active`,this.childActive&&`${i}-dropdown-option-body--child-active`,this.mergedDisabled&&`${i}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},g=m==null?void 0:m(n),h=u("div",Object.assign({class:[`${i}-dropdown-option`,g==null?void 0:g.class],"data-dropdown-option":!0},g),u("div",De(b,f),[u("div",{class:[`${i}-dropdown-option-body__prefix`,l&&`${i}-dropdown-option-body__prefix--show-icon`]},[c?c(n):ie(n.icon)]),u("div",{"data-dropdown-option":!0,class:`${i}-dropdown-option-body__label`},a?a(n):ie((t=n[this.labelField])!==null&&t!==void 0?t:n.title)),u("div",{"data-dropdown-option":!0,class:[`${i}-dropdown-option-body__suffix`,s&&`${i}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?u(wi,null,{default:()=>u(go,null)}):null)]),this.hasSubmenu?u(so,null,{default:()=>[u(co,null,{default:()=>u("div",{class:`${i}-dropdown-offset-container`},u(fo,{show:this.mergedShowSubmenu,placement:this.placement,to:y&&this.popoverBody||void 0,teleportDisabled:!y},{default:()=>u("div",{class:`${i}-dropdown-menu-wrapper`},o?u(Vt,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>C}):C)}))})]}):null);return p?p({node:h,option:n}):h}}),Ii=R({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:t}=D(xt),{renderLabelRef:o,labelFieldRef:n,nodePropsRef:r,renderOptionRef:i}=D(Ue);return{labelField:n,showIcon:e,hasSubmenu:t,renderLabel:o,nodeProps:r,renderOption:i}},render(){var e;const{clsPrefix:t,hasSubmenu:o,showIcon:n,nodeProps:r,renderLabel:i,renderOption:l}=this,{rawNode:s}=this.tmNode,a=u("div",Object.assign({class:`${t}-dropdown-option`},r==null?void 0:r(s)),u("div",{class:`${t}-dropdown-option-body ${t}-dropdown-option-body--group`},u("div",{"data-dropdown-option":!0,class:[`${t}-dropdown-option-body__prefix`,n&&`${t}-dropdown-option-body__prefix--show-icon`]},ie(s.icon)),u("div",{class:`${t}-dropdown-option-body__label`,"data-dropdown-option":!0},i?i(s):ie((e=s.title)!==null&&e!==void 0?e:s[this.labelField])),u("div",{class:[`${t}-dropdown-option-body__suffix`,o&&`${t}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return l?l({node:a,option:s}):a}}),zi=R({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:t,clsPrefix:o}=this,{children:n}=e;return u(Oe,null,u(Ii,{clsPrefix:o,tmNode:e,key:e.key}),n==null?void 0:n.map(r=>{const{rawNode:i}=r;return i.show===!1?null:Ao(i)?u($o,{clsPrefix:o,key:r.key}):r.isGroup?(Le("dropdown","`group` node is not allowed to be put in `group` node."),null):u(Po,{clsPrefix:o,tmNode:r,parentKey:t,key:r.key})}))}}),$i=R({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:t}}=this.tmNode;return u("div",t,[e==null?void 0:e()])}}),ko=R({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:t,childrenFieldRef:o}=D(Ue);q(xt,{showIconRef:E(()=>{const r=t.value;return e.tmNodes.some(i=>{var l;if(i.isGroup)return(l=i.children)===null||l===void 0?void 0:l.some(({rawNode:a})=>r?r(a):a.icon);const{rawNode:s}=i;return r?r(s):s.icon})}),hasSubmenuRef:E(()=>{const{value:r}=o;return e.tmNodes.some(i=>{var l;if(i.isGroup)return(l=i.children)===null||l===void 0?void 0:l.some(({rawNode:a})=>ft(a,r));const{rawNode:s}=i;return ft(s,r)})})});const n=K(null);return q(mt,null),q(gt,null),q(Ve,n),{bodyRef:n}},render(){const{parentKey:e,clsPrefix:t,scrollable:o}=this,n=this.tmNodes.map(r=>{const{rawNode:i}=r;return i.show===!1?null:Si(i)?u($i,{tmNode:r,key:r.key}):Ao(i)?u($o,{clsPrefix:t,key:r.key}):Ci(i)?u(zi,{clsPrefix:t,tmNode:r,parentKey:e,key:r.key}):u(Po,{clsPrefix:t,tmNode:r,parentKey:e,key:r.key,props:i.props,scrollable:o})});return u("div",{class:[`${t}-dropdown-menu`,o&&`${t}-dropdown-menu--scrollable`],ref:"bodyRef"},o?u(qt,{contentClass:`${t}-dropdown-menu__content`},{default:()=>n}):n,this.showArrow?Co({clsPrefix:t,arrowStyle:this.arrowStyle}):null)}}),Ai=A("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[Yr(),A("dropdown-option",`
 position: relative;
 `,[N("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[N("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),A("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[N("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),se("disabled",[B("pending",`
 color: var(--n-option-text-color-hover);
 `,[O("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),N("&::before","background-color: var(--n-option-color-hover);")]),B("active",`
 color: var(--n-option-text-color-active);
 `,[O("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),N("&::before","background-color: var(--n-option-color-active);")]),B("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[O("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),B("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),B("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[O("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[B("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),O("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[B("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),A("icon",`
 font-size: var(--n-option-icon-size);
 `)]),O("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),O("suffix",`
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `,[B("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),A("icon",`
 font-size: var(--n-option-icon-size);
 `)]),A("dropdown-menu","pointer-events: all;")]),A("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),A("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),A("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),N(">",[A("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),se("scrollable",`
 padding: var(--n-padding);
 `),B("scrollable",[O("content",`
 padding: var(--n-padding);
 `)])]),Pi={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},ki=Object.keys(Ge),Oi=Object.assign(Object.assign(Object.assign({},Ge),Pi),Z.props),Ti=R({name:"Dropdown",inheritAttrs:!1,props:Oi,setup(e){const t=K(!1),o=ke(V(e,"show"),t),n=E(()=>{const{keyField:P,childrenField:F}=e;return xo(e.options,{getKey(S){return S[P]},getDisabled(S){return S.disabled===!0},getIgnored(S){return S.type==="divider"||S.type==="render"},getChildren(S){return S[F]}})}),r=E(()=>n.value.treeNodes),i=K(null),l=K(null),s=K(null),a=E(()=>{var P,F,S;return(S=(F=(P=i.value)!==null&&P!==void 0?P:l.value)!==null&&F!==void 0?F:s.value)!==null&&S!==void 0?S:null}),c=E(()=>n.value.getPath(a.value).keyPath),p=E(()=>n.value.getPath(e.value).keyPath),m=te(()=>e.keyboard&&o.value);nr({keydown:{ArrowUp:{prevent:!0,handler:x},ArrowRight:{prevent:!0,handler:I},ArrowDown:{prevent:!0,handler:T},ArrowLeft:{prevent:!0,handler:L},Enter:{prevent:!0,handler:w},Escape:H}},m);const{mergedClsPrefixRef:f,inlineThemeDisabled:y}=pe(e),C=Z("Dropdown","-dropdown",Ai,zo,e,f);q(Ue,{labelFieldRef:V(e,"labelField"),childrenFieldRef:V(e,"childrenField"),renderLabelRef:V(e,"renderLabel"),renderIconRef:V(e,"renderIcon"),hoverKeyRef:i,keyboardKeyRef:l,lastToggledSubmenuKeyRef:s,pendingKeyPathRef:c,activeKeyPathRef:p,animatedRef:V(e,"animated"),mergedShowRef:o,nodePropsRef:V(e,"nodeProps"),renderOptionRef:V(e,"renderOption"),menuPropsRef:V(e,"menuProps"),doSelect:b,doUpdateShow:g}),ne(o,P=>{!e.animated&&!P&&h()});function b(P,F){const{onSelect:S}=e;S&&Y(S,P,F)}function g(P){const{"onUpdate:show":F,onUpdateShow:S}=e;F&&Y(F,P),S&&Y(S,P),t.value=P}function h(){i.value=null,l.value=null,s.value=null}function H(){g(!1)}function L(){$("left")}function I(){$("right")}function x(){$("up")}function T(){$("down")}function w(){const P=z();P!=null&&P.isLeaf&&o.value&&(b(P.key,P.rawNode),g(!1))}function z(){var P;const{value:F}=n,{value:S}=a;return!F||S===null?null:(P=F.getNode(S))!==null&&P!==void 0?P:null}function $(P){const{value:F}=a,{value:{getFirstAvailableNode:S}}=n;let _=null;if(F===null){const v=S();v!==null&&(_=v.key)}else{const v=z();if(v){let M;switch(P){case"down":M=v.getNext();break;case"up":M=v.getPrev();break;case"right":M=v.getChild();break;case"left":M=v.getParent();break}M&&(_=M.key)}}_!==null&&(i.value=null,l.value=_)}const d=E(()=>{const{size:P,inverted:F}=e,{common:{cubicBezierEaseInOut:S},self:_}=C.value,{padding:v,dividerColor:M,borderRadius:j,optionOpacityDisabled:G,[ue("optionIconSuffixWidth",P)]:le,[ue("optionSuffixWidth",P)]:Ie,[ue("optionIconPrefixWidth",P)]:ce,[ue("optionPrefixWidth",P)]:Lo,[ue("fontSize",P)]:Ko,[ue("optionHeight",P)]:Ro,[ue("optionIconSize",P)]:jo}=_,W={"--n-bezier":S,"--n-font-size":Ko,"--n-padding":v,"--n-border-radius":j,"--n-option-height":Ro,"--n-option-prefix-width":Lo,"--n-option-icon-prefix-width":ce,"--n-option-suffix-width":Ie,"--n-option-icon-suffix-width":le,"--n-option-icon-size":jo,"--n-divider-color":M,"--n-option-opacity-disabled":G};return F?(W["--n-color"]=_.colorInverted,W["--n-option-color-hover"]=_.optionColorHoverInverted,W["--n-option-color-active"]=_.optionColorActiveInverted,W["--n-option-text-color"]=_.optionTextColorInverted,W["--n-option-text-color-hover"]=_.optionTextColorHoverInverted,W["--n-option-text-color-active"]=_.optionTextColorActiveInverted,W["--n-option-text-color-child-active"]=_.optionTextColorChildActiveInverted,W["--n-prefix-color"]=_.prefixColorInverted,W["--n-suffix-color"]=_.suffixColorInverted,W["--n-group-header-text-color"]=_.groupHeaderTextColorInverted):(W["--n-color"]=_.color,W["--n-option-color-hover"]=_.optionColorHover,W["--n-option-color-active"]=_.optionColorActive,W["--n-option-text-color"]=_.optionTextColor,W["--n-option-text-color-hover"]=_.optionTextColorHover,W["--n-option-text-color-active"]=_.optionTextColorActive,W["--n-option-text-color-child-active"]=_.optionTextColorChildActive,W["--n-prefix-color"]=_.prefixColor,W["--n-suffix-color"]=_.suffixColor,W["--n-group-header-text-color"]=_.groupHeaderTextColor),W}),k=y?Se("dropdown",E(()=>`${e.size[0]}${e.inverted?"i":""}`),d,e):void 0;return{mergedClsPrefix:f,mergedTheme:C,tmNodes:r,mergedShow:o,handleAfterLeave:()=>{e.animated&&h()},doUpdateShow:g,cssVars:y?void 0:d,themeClass:k==null?void 0:k.themeClass,onRender:k==null?void 0:k.onRender}},render(){const e=(n,r,i,l,s)=>{var a;const{mergedClsPrefix:c,menuProps:p}=this;(a=this.onRender)===null||a===void 0||a.call(this);const m=(p==null?void 0:p(void 0,this.tmNodes.map(y=>y.rawNode)))||{},f={ref:qn(r),class:[n,`${c}-dropdown`,this.themeClass],clsPrefix:c,tmNodes:this.tmNodes,style:[i,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:l,onMouseleave:s};return u(ko,De(this.$attrs,f,m))},{mergedTheme:t}=this,o={show:this.mergedShow,theme:t.peers.Popover,themeOverrides:t.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return u(So,Object.assign({},Ae(this.$props,ki),o),{trigger:()=>{var n,r;return(r=(n=this.$slots).default)===null||r===void 0?void 0:r.call(n)}})}}),Ni=e=>{const{baseColor:t,textColor2:o,bodyColor:n,cardColor:r,dividerColor:i,actionColor:l,scrollbarColor:s,scrollbarColorHover:a,invertedColor:c}=e;return{textColor:o,textColorInverted:"#FFF",color:n,colorEmbedded:l,headerColor:r,headerColorInverted:c,footerColor:l,footerColorInverted:c,headerBorderColor:i,headerBorderColorInverted:c,footerBorderColor:i,footerBorderColorInverted:c,siderBorderColor:i,siderBorderColorInverted:c,siderColor:r,siderColorInverted:c,siderToggleButtonBorder:`1px solid ${i}`,siderToggleButtonColor:t,siderToggleButtonIconColor:o,siderToggleButtonIconColorInverted:o,siderToggleBarColor:st(n,s),siderToggleBarColorHover:st(n,a),__invertScrollbar:"true"}},Ei=We({name:"Layout",common:Ce,peers:{Scrollbar:pn},self:Ni}),Oo=Ei;function _i(e,t,o,n){return{itemColorHoverInverted:"#0000",itemColorActiveInverted:t,itemColorActiveHoverInverted:t,itemColorActiveCollapsedInverted:t,itemTextColorInverted:e,itemTextColorHoverInverted:o,itemTextColorChildActiveInverted:o,itemTextColorChildActiveHoverInverted:o,itemTextColorActiveInverted:o,itemTextColorActiveHoverInverted:o,itemTextColorHorizontalInverted:e,itemTextColorHoverHorizontalInverted:o,itemTextColorChildActiveHorizontalInverted:o,itemTextColorChildActiveHoverHorizontalInverted:o,itemTextColorActiveHorizontalInverted:o,itemTextColorActiveHoverHorizontalInverted:o,itemIconColorInverted:e,itemIconColorHoverInverted:o,itemIconColorActiveInverted:o,itemIconColorActiveHoverInverted:o,itemIconColorChildActiveInverted:o,itemIconColorChildActiveHoverInverted:o,itemIconColorCollapsedInverted:e,itemIconColorHorizontalInverted:e,itemIconColorHoverHorizontalInverted:o,itemIconColorActiveHorizontalInverted:o,itemIconColorActiveHoverHorizontalInverted:o,itemIconColorChildActiveHorizontalInverted:o,itemIconColorChildActiveHoverHorizontalInverted:o,arrowColorInverted:e,arrowColorHoverInverted:o,arrowColorActiveInverted:o,arrowColorActiveHoverInverted:o,arrowColorChildActiveInverted:o,arrowColorChildActiveHoverInverted:o,groupTextColorInverted:n}}const Mi=e=>{const{borderRadius:t,textColor3:o,primaryColor:n,textColor2:r,textColor1:i,fontSize:l,dividerColor:s,hoverColor:a,primaryColorHover:c}=e;return Object.assign({borderRadius:t,color:"#0000",groupTextColor:o,itemColorHover:a,itemColorActive:Be(n,{alpha:.1}),itemColorActiveHover:Be(n,{alpha:.1}),itemColorActiveCollapsed:Be(n,{alpha:.1}),itemTextColor:r,itemTextColorHover:r,itemTextColorActive:n,itemTextColorActiveHover:n,itemTextColorChildActive:n,itemTextColorChildActiveHover:n,itemTextColorHorizontal:r,itemTextColorHoverHorizontal:c,itemTextColorActiveHorizontal:n,itemTextColorActiveHoverHorizontal:n,itemTextColorChildActiveHorizontal:n,itemTextColorChildActiveHoverHorizontal:n,itemIconColor:i,itemIconColorHover:i,itemIconColorActive:n,itemIconColorActiveHover:n,itemIconColorChildActive:n,itemIconColorChildActiveHover:n,itemIconColorCollapsed:i,itemIconColorHorizontal:i,itemIconColorHoverHorizontal:c,itemIconColorActiveHorizontal:n,itemIconColorActiveHoverHorizontal:n,itemIconColorChildActiveHorizontal:n,itemIconColorChildActiveHoverHorizontal:n,itemHeight:"42px",arrowColor:r,arrowColorHover:r,arrowColorActive:n,arrowColorActiveHover:n,arrowColorChildActive:n,arrowColorChildActiveHover:n,colorInverted:"#0000",borderColorHorizontal:"#0000",fontSize:l,dividerColor:s},_i("#BBB",n,"#FFF","#AAA"))},Hi=We({name:"Menu",common:Ce,peers:{Tooltip:Io,Dropdown:zo},self:Mi}),Bi=Hi,To=oe("n-layout-sider"),No={type:String,default:"static"},Fi=A("layout",`
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 flex: auto;
 overflow: hidden;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[A("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),B("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),Li={embedded:Boolean,position:No,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},Eo=oe("n-layout");function Ki(e){return R({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},Z.props),Li),setup(t){const o=K(null),n=K(null),{mergedClsPrefixRef:r,inlineThemeDisabled:i}=pe(t),l=Z("Layout","-layout",Fi,Oo,t,r);function s(b,g){if(t.nativeScrollbar){const{value:h}=o;h&&(g===void 0?h.scrollTo(b):h.scrollTo(b,g))}else{const{value:h}=n;h&&h.scrollTo(b,g)}}q(Eo,t);let a=0,c=0;const p=b=>{var g;const h=b.target;a=h.scrollLeft,c=h.scrollTop,(g=t.onScroll)===null||g===void 0||g.call(t,b)};Yt(()=>{if(t.nativeScrollbar){const b=o.value;b&&(b.scrollTop=c,b.scrollLeft=a)}});const m={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},f={scrollTo:s},y=E(()=>{const{common:{cubicBezierEaseInOut:b},self:g}=l.value;return{"--n-bezier":b,"--n-color":t.embedded?g.colorEmbedded:g.color,"--n-text-color":g.textColor}}),C=i?Se("layout",E(()=>t.embedded?"e":""),y,t):void 0;return Object.assign({mergedClsPrefix:r,scrollableElRef:o,scrollbarInstRef:n,hasSiderStyle:m,mergedTheme:l,handleNativeElScroll:p,cssVars:i?void 0:y,themeClass:C==null?void 0:C.themeClass,onRender:C==null?void 0:C.onRender},f)},render(){var t;const{mergedClsPrefix:o,hasSider:n}=this;(t=this.onRender)===null||t===void 0||t.call(this);const r=n?this.hasSiderStyle:void 0,i=[this.themeClass,e&&`${o}-layout-content`,`${o}-layout`,`${o}-layout--${this.position}-positioned`];return u("div",{class:i,style:this.cssVars},this.nativeScrollbar?u("div",{ref:"scrollableElRef",class:`${o}-layout-scroll-container`,style:[this.contentStyle,r],onScroll:this.handleNativeElScroll},this.$slots):u(Xt,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentStyle:[this.contentStyle,r]}),this.$slots))}})}const Ri=Ki(!1),ji=A("layout-sider",`
 flex-shrink: 0;
 box-sizing: border-box;
 position: relative;
 z-index: 1;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 min-width .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 display: flex;
 justify-content: flex-end;
`,[B("bordered",[O("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),O("left-placement",[B("bordered",[O("border",`
 right: 0;
 `)])]),B("right-placement",`
 justify-content: flex-start;
 `,[B("bordered",[O("border",`
 left: 0;
 `)]),B("collapsed",[A("layout-toggle-button",[A("base-icon",`
 transform: rotate(180deg);
 `)]),A("layout-toggle-bar",[N("&:hover",[O("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),O("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),A("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[A("base-icon",`
 transform: rotate(0);
 `)]),A("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[N("&:hover",[O("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),O("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),B("collapsed",[A("layout-toggle-bar",[N("&:hover",[O("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),O("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),A("layout-toggle-button",[A("base-icon",`
 transform: rotate(0);
 `)])]),A("layout-toggle-button",`
 transition:
 color .3s var(--n-bezier),
 right .3s var(--n-bezier),
 left .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 cursor: pointer;
 width: 24px;
 height: 24px;
 position: absolute;
 top: 50%;
 right: 0;
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 18px;
 color: var(--n-toggle-button-icon-color);
 border: var(--n-toggle-button-border);
 background-color: var(--n-toggle-button-color);
 box-shadow: 0 2px 4px 0px rgba(0, 0, 0, .06);
 transform: translateX(50%) translateY(-50%);
 z-index: 1;
 `,[A("base-icon",`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),A("layout-toggle-bar",`
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `,[O("top, bottom",`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),O("bottom",`
 position: absolute;
 top: 34px;
 `),N("&:hover",[O("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),O("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),O("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),N("&:hover",[O("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),O("border",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),A("layout-sider-scroll-container",`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),B("show-content",[A("layout-sider-scroll-container",{opacity:1})]),B("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),Di=R({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return u("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},u(Zt,{clsPrefix:e},{default:()=>u(go,null)}))}}),Wi=R({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return u("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},u("div",{class:`${e}-layout-toggle-bar__top`}),u("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),Vi={position:No,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerStyle:[String,Object],collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},Gi=R({name:"LayoutSider",props:Object.assign(Object.assign({},Z.props),Vi),setup(e){const t=D(Eo),o=K(null),n=K(null),r=E(()=>he(a.value?e.collapsedWidth:e.width)),i=E(()=>e.collapseMode!=="transform"?{}:{minWidth:he(e.width)}),l=E(()=>t?t.siderPlacement:"left"),s=K(e.defaultCollapsed),a=ke(V(e,"collapsed"),s);function c(x,T){if(e.nativeScrollbar){const{value:w}=o;w&&(T===void 0?w.scrollTo(x):w.scrollTo(x,T))}else{const{value:w}=n;w&&w.scrollTo(x,T)}}function p(){const{"onUpdate:collapsed":x,onUpdateCollapsed:T,onExpand:w,onCollapse:z}=e,{value:$}=a;T&&Y(T,!$),x&&Y(x,!$),s.value=!$,$?w&&Y(w):z&&Y(z)}let m=0,f=0;const y=x=>{var T;const w=x.target;m=w.scrollLeft,f=w.scrollTop,(T=e.onScroll)===null||T===void 0||T.call(e,x)};Yt(()=>{if(e.nativeScrollbar){const x=o.value;x&&(x.scrollTop=f,x.scrollLeft=m)}}),q(To,{collapsedRef:a,collapseModeRef:V(e,"collapseMode")});const{mergedClsPrefixRef:C,inlineThemeDisabled:b}=pe(e),g=Z("Layout","-layout-sider",ji,Oo,e,C);function h(x){var T,w;x.propertyName==="max-width"&&(a.value?(T=e.onAfterLeave)===null||T===void 0||T.call(e):(w=e.onAfterEnter)===null||w===void 0||w.call(e))}const H={scrollTo:c},L=E(()=>{const{common:{cubicBezierEaseInOut:x},self:T}=g.value,{siderToggleButtonColor:w,siderToggleButtonBorder:z,siderToggleBarColor:$,siderToggleBarColorHover:d}=T,k={"--n-bezier":x,"--n-toggle-button-color":w,"--n-toggle-button-border":z,"--n-toggle-bar-color":$,"--n-toggle-bar-color-hover":d};return e.inverted?(k["--n-color"]=T.siderColorInverted,k["--n-text-color"]=T.textColorInverted,k["--n-border-color"]=T.siderBorderColorInverted,k["--n-toggle-button-icon-color"]=T.siderToggleButtonIconColorInverted,k.__invertScrollbar=T.__invertScrollbar):(k["--n-color"]=T.siderColor,k["--n-text-color"]=T.textColor,k["--n-border-color"]=T.siderBorderColor,k["--n-toggle-button-icon-color"]=T.siderToggleButtonIconColor),k}),I=b?Se("layout-sider",E(()=>e.inverted?"a":"b"),L,e):void 0;return Object.assign({scrollableElRef:o,scrollbarInstRef:n,mergedClsPrefix:C,mergedTheme:g,styleMaxWidth:r,mergedCollapsed:a,scrollContainerStyle:i,siderPlacement:l,handleNativeElScroll:y,handleTransitionend:h,handleTriggerClick:p,inlineThemeDisabled:b,cssVars:L,themeClass:I==null?void 0:I.themeClass,onRender:I==null?void 0:I.onRender},H)},render(){var e;const{mergedClsPrefix:t,mergedCollapsed:o,showTrigger:n}=this;return(e=this.onRender)===null||e===void 0||e.call(this),u("aside",{class:[`${t}-layout-sider`,this.themeClass,`${t}-layout-sider--${this.position}-positioned`,`${t}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${t}-layout-sider--bordered`,o&&`${t}-layout-sider--collapsed`,(!o||this.showCollapsedContent)&&`${t}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:he(this.width)}]},this.nativeScrollbar?u("div",{class:`${t}-layout-sider-scroll-container`,onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):u(Xt,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),n?n==="bar"?u(Wi,{clsPrefix:t,style:o?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):u(Di,{clsPrefix:t,style:o?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?u("div",{class:`${t}-layout-sider__border`}):null)}}),Te=oe("n-menu"),wt=oe("n-submenu"),Ct=oe("n-menu-item-group"),He=8;function St(e){const t=D(Te),{props:o,mergedCollapsedRef:n}=t,r=D(wt,null),i=D(Ct,null),l=E(()=>o.mode==="horizontal"),s=E(()=>l.value?o.dropdownPlacement:"tmNodes"in e?"right-start":"right"),a=E(()=>{var f;return Math.max((f=o.collapsedIconSize)!==null&&f!==void 0?f:o.iconSize,o.iconSize)}),c=E(()=>{var f;return!l.value&&e.root&&n.value&&(f=o.collapsedIconSize)!==null&&f!==void 0?f:o.iconSize}),p=E(()=>{if(l.value)return;const{collapsedWidth:f,indent:y,rootIndent:C}=o,{root:b,isGroup:g}=e,h=C===void 0?y:C;if(b)return n.value?f/2-a.value/2:h;if(i)return y/2+i.paddingLeftRef.value;if(r)return(g?y/2:y)+r.paddingLeftRef.value}),m=E(()=>{const{collapsedWidth:f,indent:y,rootIndent:C}=o,{value:b}=a,{root:g}=e;return l.value||!g||!n.value?He:(C===void 0?y:C)+b+He-(f+b)/2});return{dropdownPlacement:s,activeIconSize:c,maxIconSize:a,paddingLeft:p,iconMarginRight:m,NMenu:t,NSubmenu:r}}const It={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},_o=Object.assign(Object.assign({},It),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),Ui=R({name:"MenuOptionGroup",props:_o,setup(e){q(wt,null);const t=St(e);q(Ct,{paddingLeftRef:t.paddingLeft});const{mergedClsPrefixRef:o,props:n}=D(Te);return function(){const{value:r}=o,i=t.paddingLeft.value,{nodeProps:l}=n,s=l==null?void 0:l(e.tmNode.rawNode);return u("div",{class:`${r}-menu-item-group`,role:"group"},u("div",Object.assign({},s,{class:[`${r}-menu-item-group-title`,s==null?void 0:s.class],style:[(s==null?void 0:s.style)||"",i!==void 0?`padding-left: ${i}px;`:""]}),ie(e.title),e.extra?u(Oe,null," ",ie(e.extra)):null),u("div",null,e.tmNodes.map(a=>zt(a,n))))}}}),Mo=R({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0}},setup(e){const{props:t}=D(Te);return{menuProps:t,style:E(()=>{const{paddingLeft:o}=e;return{paddingLeft:o&&`${o}px`}}),iconStyle:E(()=>{const{maxIconSize:o,activeIconSize:n,iconMarginRight:r}=e;return{width:`${o}px`,height:`${o}px`,fontSize:`${n}px`,marginRight:`${r}px`}})}},render(){const{clsPrefix:e,tmNode:t,menuProps:{renderIcon:o,renderLabel:n,renderExtra:r,expandIcon:i}}=this,l=o?o(t.rawNode):ie(this.icon);return u("div",{onClick:s=>{var a;(a=this.onClick)===null||a===void 0||a.call(this,s)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},l&&u("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[l]),u("div",{class:`${e}-menu-item-content-header`,role:"none"},n?n(t.rawNode):ie(this.title),this.extra||r?u("span",{class:`${e}-menu-item-content-header__extra`}," ",r?r(t.rawNode):ie(this.extra)):null),this.showArrow?u(Zt,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>i?i(t.rawNode):u(zr,null)}):null)}}),Ho=Object.assign(Object.assign({},It),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:{type:Boolean,default:!1},icon:Function,onClick:Function}),qi=R({name:"Submenu",props:Ho,setup(e){const t=St(e),{NMenu:o,NSubmenu:n}=t,{props:r,mergedCollapsedRef:i,mergedThemeRef:l}=o,s=E(()=>{const{disabled:f}=e;return n!=null&&n.mergedDisabledRef.value||r.disabled?!0:f}),a=K(!1);q(wt,{paddingLeftRef:t.paddingLeft,mergedDisabledRef:s}),q(Ct,null);function c(){const{onClick:f}=e;f&&f()}function p(){s.value||(i.value||o.toggleExpand(e.internalKey),c())}function m(f){a.value=f}return{menuProps:r,mergedTheme:l,doSelect:o.doSelect,inverted:o.invertedRef,isHorizontal:o.isHorizontalRef,mergedClsPrefix:o.mergedClsPrefixRef,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,iconMarginRight:t.iconMarginRight,dropdownPlacement:t.dropdownPlacement,dropdownShow:a,paddingLeft:t.paddingLeft,mergedDisabled:s,mergedValue:o.mergedValueRef,childActive:te(()=>o.activePathRef.value.includes(e.internalKey)),collapsed:E(()=>r.mode==="horizontal"?!1:i.value?!0:!o.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:E(()=>!s.value&&(r.mode==="horizontal"||i.value)),handlePopoverShowChange:m,handleClick:p}},render(){var e;const{mergedClsPrefix:t,menuProps:{renderIcon:o,renderLabel:n}}=this,r=()=>{const{isHorizontal:l,paddingLeft:s,collapsed:a,mergedDisabled:c,maxIconSize:p,activeIconSize:m,title:f,childActive:y,icon:C,handleClick:b,menuProps:{nodeProps:g},dropdownShow:h,iconMarginRight:H,tmNode:L,mergedClsPrefix:I}=this,x=g==null?void 0:g(L.rawNode);return u("div",Object.assign({},x,{class:[`${I}-menu-item`,x==null?void 0:x.class],role:"menuitem"}),u(Mo,{tmNode:L,paddingLeft:s,collapsed:a,disabled:c,iconMarginRight:H,maxIconSize:p,activeIconSize:m,title:f,extra:this.extra,showArrow:!l,childActive:y,clsPrefix:I,icon:C,hover:h,onClick:b}))},i=()=>u(mn,null,{default:()=>{const{tmNodes:l,collapsed:s}=this;return s?null:u("div",{class:`${t}-submenu-children`,role:"menu"},l.map(a=>zt(a,this.menuProps)))}});return this.root?u(Ti,Object.assign({size:"large",trigger:"hover"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:o,renderLabel:n}),{default:()=>u("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},r(),this.isHorizontal?null:i())}):u("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},r(),i())}}),Bo=Object.assign(Object.assign({},It),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),Yi=R({name:"MenuOption",props:Bo,setup(e){const t=St(e),{NSubmenu:o,NMenu:n}=t,{props:r,mergedClsPrefixRef:i,mergedCollapsedRef:l}=n,s=o?o.mergedDisabledRef:{value:!1},a=E(()=>s.value||e.disabled);function c(m){const{onClick:f}=e;f&&f(m)}function p(m){a.value||(n.doSelect(e.internalKey,e.tmNode.rawNode),c(m))}return{mergedClsPrefix:i,dropdownPlacement:t.dropdownPlacement,paddingLeft:t.paddingLeft,iconMarginRight:t.iconMarginRight,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,mergedTheme:n.mergedThemeRef,menuProps:r,dropdownEnabled:te(()=>e.root&&l.value&&r.mode!=="horizontal"&&!a.value),selected:te(()=>n.mergedValueRef.value===e.internalKey),mergedDisabled:a,handleClick:p}},render(){const{mergedClsPrefix:e,mergedTheme:t,tmNode:o,menuProps:{renderLabel:n,nodeProps:r}}=this,i=r==null?void 0:r(o.rawNode);return u("div",Object.assign({},i,{role:"menuitem",class:[`${e}-menu-item`,i==null?void 0:i.class]}),u(pi,{theme:t.peers.Tooltip,themeOverrides:t.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>n?n(o.rawNode):ie(this.title),trigger:()=>u(Mo,{tmNode:o,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),Xi=R({name:"MenuDivider",setup(){const e=D(Te),{mergedClsPrefixRef:t,isHorizontalRef:o}=e;return()=>o.value?null:u("div",{class:`${t.value}-menu-divider`})}}),Zi=pt(_o),Ji=pt(Bo),Qi=pt(Ho);function Fo(e){return e.type==="divider"||e.type==="render"}function el(e){return e.type==="divider"}function zt(e,t){const{rawNode:o}=e,{show:n}=o;if(n===!1)return null;if(Fo(o))return el(o)?u(Xi,Object.assign({key:e.key},o.props)):null;const{labelField:r}=t,{key:i,level:l,isGroup:s}=e,a=Object.assign(Object.assign({},o),{title:o.title||o[r],extra:o.titleExtra||o.extra,key:i,internalKey:i,level:l,root:l===0,isGroup:s});return e.children?e.isGroup?u(Ui,Ae(a,Zi,{tmNode:e,tmNodes:e.children,key:i})):u(qi,Ae(a,Qi,{key:i,rawNodes:o[t.childrenField],tmNodes:e.children,tmNode:e})):u(Yi,Ae(a,Ji,{key:i,tmNode:e}))}const Rt=[N("&::before","background-color: var(--n-item-color-hover);"),O("arrow",`
 color: var(--n-arrow-color-hover);
 `),O("icon",`
 color: var(--n-item-icon-color-hover);
 `),A("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[N("a",`
 color: var(--n-item-text-color-hover);
 `),O("extra",`
 color: var(--n-item-text-color-hover);
 `)])],jt=[O("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),A("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[N("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),O("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],tl=N([A("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[B("horizontal",`
 display: inline-flex;
 padding-bottom: 0;
 `,[A("submenu","margin: 0;"),A("menu-item","margin: 0;"),A("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[N("&::before","display: none;"),B("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),A("menu-item-content",[B("selected",[O("icon","color: var(--n-item-icon-color-active-horizontal);"),A("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[N("a","color: var(--n-item-text-color-active-horizontal);"),O("extra","color: var(--n-item-text-color-active-horizontal);")])]),B("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[A("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[N("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),O("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),O("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),se("disabled",[se("selected, child-active",[N("&:focus-within",jt)]),B("selected",[fe(null,[O("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),A("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[N("a","color: var(--n-item-text-color-active-hover-horizontal);"),O("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),B("child-active",[fe(null,[O("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),A("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[N("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),O("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),fe("border-bottom: 2px solid var(--n-border-color-horizontal);",jt)]),A("menu-item-content-header",[N("a","color: var(--n-item-text-color-horizontal);")])])]),B("collapsed",[A("menu-item-content",[B("selected",[N("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),A("menu-item-content-header","opacity: 0;"),O("arrow","opacity: 0;"),O("icon","color: var(--n-item-icon-color-collapsed);")])]),A("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),A("menu-item-content",`
 box-sizing: border-box;
 line-height: 1.75;
 height: 100%;
 display: grid;
 grid-template-areas: "icon content arrow";
 grid-template-columns: auto 1fr auto;
 align-items: center;
 cursor: pointer;
 position: relative;
 padding-right: 18px;
 transition:
 background-color .3s var(--n-bezier),
 padding-left .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[N("> *","z-index: 1;"),N("&::before",`
 z-index: auto;
 content: "";
 background-color: #0000;
 position: absolute;
 left: 8px;
 right: 8px;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),B("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),B("collapsed",[O("arrow","transform: rotate(0);")]),B("selected",[N("&::before","background-color: var(--n-item-color-active);"),O("arrow","color: var(--n-arrow-color-active);"),O("icon","color: var(--n-item-icon-color-active);"),A("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[N("a","color: var(--n-item-text-color-active);"),O("extra","color: var(--n-item-text-color-active);")])]),B("child-active",[A("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[N("a",`
 color: var(--n-item-text-color-child-active);
 `),O("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),O("arrow",`
 color: var(--n-arrow-color-child-active);
 `),O("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),se("disabled",[se("selected, child-active",[N("&:focus-within",Rt)]),B("selected",[fe(null,[O("arrow","color: var(--n-arrow-color-active-hover);"),O("icon","color: var(--n-item-icon-color-active-hover);"),A("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[N("a","color: var(--n-item-text-color-active-hover);"),O("extra","color: var(--n-item-text-color-active-hover);")])])]),B("child-active",[fe(null,[O("arrow","color: var(--n-arrow-color-child-active-hover);"),O("icon","color: var(--n-item-icon-color-child-active-hover);"),A("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[N("a","color: var(--n-item-text-color-child-active-hover);"),O("extra","color: var(--n-item-text-color-child-active-hover);")])])]),B("selected",[fe(null,[N("&::before","background-color: var(--n-item-color-active-hover);")])]),fe(null,Rt)]),O("icon",`
 grid-area: icon;
 color: var(--n-item-icon-color);
 transition:
 color .3s var(--n-bezier),
 font-size .3s var(--n-bezier),
 margin-right .3s var(--n-bezier);
 box-sizing: content-box;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 `),O("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),A("menu-item-content-header",`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 overflow: hidden;
 text-overflow: ellipsis;
 color: var(--n-item-text-color);
 `,[N("a",`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[N("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),O("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),A("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[A("menu-item-content",`
 height: var(--n-item-height);
 `),A("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[ai({duration:".2s"})])]),A("menu-item-group",[A("menu-item-group-title",`
 margin-top: 6px;
 color: var(--n-group-text-color);
 cursor: default;
 font-size: .93em;
 height: 36px;
 display: flex;
 align-items: center;
 transition:
 padding-left .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)])]),A("menu-tooltip",[N("a",`
 color: inherit;
 text-decoration: none;
 `)]),A("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function fe(e,t){return[B("hover",e,t),N("&:hover",e,t)]}const ol=Object.assign(Object.assign({},Z.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,default:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array,dropdownPlacement:{type:String,default:"bottom"}}),nl=R({name:"Menu",props:ol,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=pe(e),n=Z("Menu","-menu",tl,Bi,e,t),r=D(To,null),i=E(()=>{var z;const{collapsed:$}=e;if($!==void 0)return $;if(r){const{collapseModeRef:d,collapsedRef:k}=r;if(d.value==="width")return(z=k.value)!==null&&z!==void 0?z:!1}return!1}),l=E(()=>{const{keyField:z,childrenField:$,disabledField:d}=e;return xo(e.items||e.options,{getIgnored(k){return Fo(k)},getChildren(k){return k[$]},getDisabled(k){return k[d]},getKey(k){var P;return(P=k[z])!==null&&P!==void 0?P:k.name}})}),s=E(()=>new Set(l.value.treeNodes.map(z=>z.key))),{watchProps:a}=e,c=K(null);a!=null&&a.includes("defaultValue")?Fe(()=>{c.value=e.defaultValue}):c.value=e.defaultValue;const p=V(e,"value"),m=ke(p,c),f=K([]),y=()=>{f.value=e.defaultExpandAll?l.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||l.value.getPath(m.value,{includeSelf:!1}).keyPath};a!=null&&a.includes("defaultExpandedKeys")?Fe(y):y();const C=ro(e,["expandedNames","expandedKeys"]),b=ke(C,f),g=E(()=>l.value.treeNodes),h=E(()=>l.value.getPath(m.value).keyPath);q(Te,{props:e,mergedCollapsedRef:i,mergedThemeRef:n,mergedValueRef:m,mergedExpandedKeysRef:b,activePathRef:h,mergedClsPrefixRef:t,isHorizontalRef:E(()=>e.mode==="horizontal"),invertedRef:V(e,"inverted"),doSelect:H,toggleExpand:I});function H(z,$){const{"onUpdate:value":d,onUpdateValue:k,onSelect:P}=e;k&&Y(k,z,$),d&&Y(d,z,$),P&&Y(P,z,$),c.value=z}function L(z){const{"onUpdate:expandedKeys":$,onUpdateExpandedKeys:d,onExpandedNamesChange:k,onOpenNamesChange:P}=e;$&&Y($,z),d&&Y(d,z),k&&Y(k,z),P&&Y(P,z),f.value=z}function I(z){const $=Array.from(b.value),d=$.findIndex(k=>k===z);if(~d)$.splice(d,1);else{if(e.accordion&&s.value.has(z)){const k=$.findIndex(P=>s.value.has(P));k>-1&&$.splice(k,1)}$.push(z)}L($)}const x=z=>{const $=l.value.getPath(z!=null?z:m.value,{includeSelf:!1}).keyPath;if(!$.length)return;const d=Array.from(b.value),k=new Set([...d,...$]);e.accordion&&s.value.forEach(P=>{k.has(P)&&!$.includes(P)&&k.delete(P)}),L(Array.from(k))},T=E(()=>{const{inverted:z}=e,{common:{cubicBezierEaseInOut:$},self:d}=n.value,{borderRadius:k,borderColorHorizontal:P,fontSize:F,itemHeight:S,dividerColor:_}=d,v={"--n-divider-color":_,"--n-bezier":$,"--n-font-size":F,"--n-border-color-horizontal":P,"--n-border-radius":k,"--n-item-height":S};return z?(v["--n-group-text-color"]=d.groupTextColorInverted,v["--n-color"]=d.colorInverted,v["--n-item-text-color"]=d.itemTextColorInverted,v["--n-item-text-color-hover"]=d.itemTextColorHoverInverted,v["--n-item-text-color-active"]=d.itemTextColorActiveInverted,v["--n-item-text-color-child-active"]=d.itemTextColorChildActiveInverted,v["--n-item-text-color-child-active-hover"]=d.itemTextColorChildActiveInverted,v["--n-item-text-color-active-hover"]=d.itemTextColorActiveHoverInverted,v["--n-item-icon-color"]=d.itemIconColorInverted,v["--n-item-icon-color-hover"]=d.itemIconColorHoverInverted,v["--n-item-icon-color-active"]=d.itemIconColorActiveInverted,v["--n-item-icon-color-active-hover"]=d.itemIconColorActiveHoverInverted,v["--n-item-icon-color-child-active"]=d.itemIconColorChildActiveInverted,v["--n-item-icon-color-child-active-hover"]=d.itemIconColorChildActiveHoverInverted,v["--n-item-icon-color-collapsed"]=d.itemIconColorCollapsedInverted,v["--n-item-text-color-horizontal"]=d.itemTextColorHorizontalInverted,v["--n-item-text-color-hover-horizontal"]=d.itemTextColorHoverHorizontalInverted,v["--n-item-text-color-active-horizontal"]=d.itemTextColorActiveHorizontalInverted,v["--n-item-text-color-child-active-horizontal"]=d.itemTextColorChildActiveHorizontalInverted,v["--n-item-text-color-child-active-hover-horizontal"]=d.itemTextColorChildActiveHoverHorizontalInverted,v["--n-item-text-color-active-hover-horizontal"]=d.itemTextColorActiveHoverHorizontalInverted,v["--n-item-icon-color-horizontal"]=d.itemIconColorHorizontalInverted,v["--n-item-icon-color-hover-horizontal"]=d.itemIconColorHoverHorizontalInverted,v["--n-item-icon-color-active-horizontal"]=d.itemIconColorActiveHorizontalInverted,v["--n-item-icon-color-active-hover-horizontal"]=d.itemIconColorActiveHoverHorizontalInverted,v["--n-item-icon-color-child-active-horizontal"]=d.itemIconColorChildActiveHorizontalInverted,v["--n-item-icon-color-child-active-hover-horizontal"]=d.itemIconColorChildActiveHoverHorizontalInverted,v["--n-arrow-color"]=d.arrowColorInverted,v["--n-arrow-color-hover"]=d.arrowColorHoverInverted,v["--n-arrow-color-active"]=d.arrowColorActiveInverted,v["--n-arrow-color-active-hover"]=d.arrowColorActiveHoverInverted,v["--n-arrow-color-child-active"]=d.arrowColorChildActiveInverted,v["--n-arrow-color-child-active-hover"]=d.arrowColorChildActiveHoverInverted,v["--n-item-color-hover"]=d.itemColorHoverInverted,v["--n-item-color-active"]=d.itemColorActiveInverted,v["--n-item-color-active-hover"]=d.itemColorActiveHoverInverted,v["--n-item-color-active-collapsed"]=d.itemColorActiveCollapsedInverted):(v["--n-group-text-color"]=d.groupTextColor,v["--n-color"]=d.color,v["--n-item-text-color"]=d.itemTextColor,v["--n-item-text-color-hover"]=d.itemTextColorHover,v["--n-item-text-color-active"]=d.itemTextColorActive,v["--n-item-text-color-child-active"]=d.itemTextColorChildActive,v["--n-item-text-color-child-active-hover"]=d.itemTextColorChildActiveHover,v["--n-item-text-color-active-hover"]=d.itemTextColorActiveHover,v["--n-item-icon-color"]=d.itemIconColor,v["--n-item-icon-color-hover"]=d.itemIconColorHover,v["--n-item-icon-color-active"]=d.itemIconColorActive,v["--n-item-icon-color-active-hover"]=d.itemIconColorActiveHover,v["--n-item-icon-color-child-active"]=d.itemIconColorChildActive,v["--n-item-icon-color-child-active-hover"]=d.itemIconColorChildActiveHover,v["--n-item-icon-color-collapsed"]=d.itemIconColorCollapsed,v["--n-item-text-color-horizontal"]=d.itemTextColorHorizontal,v["--n-item-text-color-hover-horizontal"]=d.itemTextColorHoverHorizontal,v["--n-item-text-color-active-horizontal"]=d.itemTextColorActiveHorizontal,v["--n-item-text-color-child-active-horizontal"]=d.itemTextColorChildActiveHorizontal,v["--n-item-text-color-child-active-hover-horizontal"]=d.itemTextColorChildActiveHoverHorizontal,v["--n-item-text-color-active-hover-horizontal"]=d.itemTextColorActiveHoverHorizontal,v["--n-item-icon-color-horizontal"]=d.itemIconColorHorizontal,v["--n-item-icon-color-hover-horizontal"]=d.itemIconColorHoverHorizontal,v["--n-item-icon-color-active-horizontal"]=d.itemIconColorActiveHorizontal,v["--n-item-icon-color-active-hover-horizontal"]=d.itemIconColorActiveHoverHorizontal,v["--n-item-icon-color-child-active-horizontal"]=d.itemIconColorChildActiveHorizontal,v["--n-item-icon-color-child-active-hover-horizontal"]=d.itemIconColorChildActiveHoverHorizontal,v["--n-arrow-color"]=d.arrowColor,v["--n-arrow-color-hover"]=d.arrowColorHover,v["--n-arrow-color-active"]=d.arrowColorActive,v["--n-arrow-color-active-hover"]=d.arrowColorActiveHover,v["--n-arrow-color-child-active"]=d.arrowColorChildActive,v["--n-arrow-color-child-active-hover"]=d.arrowColorChildActiveHover,v["--n-item-color-hover"]=d.itemColorHover,v["--n-item-color-active"]=d.itemColorActive,v["--n-item-color-active-hover"]=d.itemColorActiveHover,v["--n-item-color-active-collapsed"]=d.itemColorActiveCollapsed),v}),w=o?Se("menu",E(()=>e.inverted?"a":"b"),T,e):void 0;return{mergedClsPrefix:t,controlledExpandedKeys:C,uncontrolledExpanededKeys:f,mergedExpandedKeys:b,uncontrolledValue:c,mergedValue:m,activePath:h,tmNodes:g,mergedTheme:n,mergedCollapsed:i,cssVars:o?void 0:T,themeClass:w==null?void 0:w.themeClass,onRender:w==null?void 0:w.onRender,showOption:x}},render(){const{mergedClsPrefix:e,mode:t,themeClass:o,onRender:n}=this;return n==null||n(),u("div",{role:t==="horizontal"?"menubar":"menu",class:[`${e}-menu`,o,`${e}-menu--${t}`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},this.tmNodes.map(r=>zt(r,this.$props)))}}),rl=R({__name:"sider",props:{menuOptions:{type:Array,default:()=>[]},comp:{type:Object,default:()=>{}},compParser:{type:Function,default:()=>{}}},setup(e){const t=e,o=D("activeKey"),n=K(!1),r=nn(),i=(l,s={})=>{r.value=t.compParser(l,t.comp)};return we(async()=>{await rn(o).toMatch(l=>l==null?void 0:l.value),i(o.value)}),(l,s)=>{const a=nl,c=Gi,p=Ri,m=gn;return it(),lt(m,{vertical:""},{default:Ne(()=>[Ee(p,{"has-sider":"",embedded:""},{default:Ne(()=>[Ee(c,{bordered:"","collapse-mode":"width","collapsed-width":64,width:240,collapsed:$e(n),"show-trigger":"",onCollapse:s[1]||(s[1]=f=>n.value=!0),onExpand:s[2]||(s[2]=f=>n.value=!1)},{default:Ne(()=>[Ee(a,{value:$e(o),"onUpdate:value":[s[0]||(s[0]=f=>ln(o)?o.value=f:null),i],"default-expand-all":!0,collapsed:$e(n),"collapsed-width":64,"collapsed-icon-size":22,options:t.menuOptions},null,8,["value","collapsed","options"])]),_:1},8,["collapsed"]),Ee(p,null,{default:Ne(()=>[(it(),lt(an($e(r)),{class:"min-h-screen h-screen"}))]),_:1})]),_:1})]),_:1})}}}),vl=R({__name:"index",setup(e){const t=Object.assign({"./siderPage/发表文章.vue":wn,"./siderPage/文章列表.vue":Cn,"./siderPage/用户管理.vue":Sn}),o=K();q("activeKey",o);const n=(l,s)=>{var c;const a=Object.keys(s).filter(p=>p.includes("/"+l+".vue"))[0];return(c=s[a])==null?void 0:c.default},r=sn("hash");o.value=r.page||"文章列表",ne(o,l=>{r.page=l}),we(()=>{});const i=[{label:"文章管理",key:"wzgl",icon:()=>u(Q.wzgl),children:[{label:"文章列表",key:"文章列表",icon:()=>u(Q.wzlb)},{label:"发表文章",key:"发表文章",icon:()=>u(Q.fbwz)}]},{label:"用户管理",key:"用户管理",icon:()=>u(Q.yhgl)},{label:"栏目管理",key:"栏目管理",icon:()=>u(Q.lmgl)},{label:"quartz定时任务",key:"quartz定时任务",icon:()=>u(Q.quartz)},{label:"数据监控",key:"sjjk",icon:()=>u(Q.sjjk),children:[{label:"sql数据监控",key:"sql数据监控",icon:()=>u(Q.sql)},{label:"swagger2接口文档",key:"swagger2接口文档",icon:()=>u(Q.swagger2)}]},{label:"电影网",key:"dyw",icon:()=>u(Q.dyw),children:[{label:"电影",key:"电影",icon:()=>u(Q.dy)},{label:"m3u8",key:"m3u8",icon:()=>u(Q.m3u8)}]}];return(l,s)=>{const a=rl;return it(),lt(a,{"menu-options":i,comp:$e(t),"comp-parser":n},null,8,["comp"])}}});export{vl as default};
