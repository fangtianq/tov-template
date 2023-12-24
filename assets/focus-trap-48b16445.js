import{h as g,aX as $,i as R,ay as Q,e as _,az as te,d as ne,p as se,Y as C,y as T,j as oe,m as j,aK as ce}from"./index-01622320.js";import{i as re}from"./isNil-c75b1b34.js";let p=[];const M=e=>{const n=e;n.key===Q.esc&&p.forEach(s=>s(n))},ae=e=>{g(()=>{p.length===0&&document.addEventListener("keydown",M),$&&p.push(e)}),R(()=>{p=p.filter(n=>n!==e),p.length===0&&$&&document.removeEventListener("keydown",M)})},w="focus-trap.focus-after-trapped",O="focus-trap.focus-after-released",ue="focus-trap.focusout-prevented",q={cancelable:!0,bubbles:!1},ie={cancelable:!0,bubbles:!1},W="focusAfterTrapped",Y="focusAfterReleased",de=Symbol("elFocusTrap"),N=_(),P=_(0),k=_(0);let F=0;const Z=e=>{const n=[],s=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:o=>{const r=o.tagName==="INPUT"&&o.type==="hidden";return o.disabled||o.hidden||r?NodeFilter.FILTER_SKIP:o.tabIndex>=0||o===document.activeElement?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;s.nextNode();)n.push(s.currentNode);return n},z=(e,n)=>{for(const s of e)if(!fe(s,n))return s},fe=(e,n)=>{if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(n&&e===n)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1},le=e=>{const n=Z(e),s=z(n,e),o=z(n.reverse(),e);return[s,o]},ve=e=>e instanceof HTMLInputElement&&"select"in e,l=(e,n)=>{if(e&&e.focus){const s=document.activeElement;e.focus({preventScroll:!0}),k.value=window.performance.now(),e!==s&&ve(e)&&n&&e.select()}};function J(e,n){const s=[...e],o=e.indexOf(n);return o!==-1&&s.splice(o,1),s}const pe=()=>{let e=[];return{push:o=>{const r=e[0];r&&o!==r&&r.pause(),e=J(e,o),e.unshift(o)},remove:o=>{var r,d;e=J(e,o),(d=(r=e[0])==null?void 0:r.resume)==null||d.call(r)}}},Ee=(e,n=!1)=>{const s=document.activeElement;for(const o of e)if(l(o,n),document.activeElement!==s)return},X=pe(),me=()=>P.value>k.value,y=()=>{N.value="pointer",P.value=window.performance.now()},G=()=>{N.value="keyboard",P.value=window.performance.now()},Te=()=>(g(()=>{F===0&&(document.addEventListener("mousedown",y),document.addEventListener("touchstart",y),document.addEventListener("keydown",G)),F++}),R(()=>{F--,F<=0&&(document.removeEventListener("mousedown",y),document.removeEventListener("touchstart",y),document.removeEventListener("keydown",G))}),{focusReason:N,lastUserFocusTimestamp:P,lastAutomatedFocusTimestamp:k}),b=e=>new CustomEvent(ue,{...ie,detail:e}),Fe=ne({name:"ElFocusTrap",inheritAttrs:!1,props:{loop:Boolean,trapped:Boolean,focusTrapEl:Object,focusStartEl:{type:[Object,String],default:"first"}},emits:[W,Y,"focusin","focusout","focusout-prevented","release-requested"],setup(e,{emit:n}){const s=_();let o,r;const{focusReason:d}=Te();ae(t=>{e.trapped&&!v.paused&&n("release-requested",t)});const v={paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}},E=t=>{if(!e.loop&&!e.trapped||v.paused)return;const{key:c,altKey:a,ctrlKey:u,metaKey:i,currentTarget:H,shiftKey:V}=t,{loop:B}=e,ee=c===Q.tab&&!a&&!u&&!i,m=document.activeElement;if(ee&&m){const S=H,[L,h]=le(S);if(L&&h){if(!V&&m===h){const f=b({focusReason:d.value});n("focusout-prevented",f),f.defaultPrevented||(t.preventDefault(),B&&l(L,!0))}else if(V&&[L,S].includes(m)){const f=b({focusReason:d.value});n("focusout-prevented",f),f.defaultPrevented||(t.preventDefault(),B&&l(h,!0))}}else if(m===S){const f=b({focusReason:d.value});n("focusout-prevented",f),f.defaultPrevented||t.preventDefault()}}};se(de,{focusTrapRef:s,onKeydown:E}),C(()=>e.focusTrapEl,t=>{t&&(s.value=t)},{immediate:!0}),C([s],([t],[c])=>{t&&(t.addEventListener("keydown",E),t.addEventListener("focusin",U),t.addEventListener("focusout",K)),c&&(c.removeEventListener("keydown",E),c.removeEventListener("focusin",U),c.removeEventListener("focusout",K))});const I=t=>{n(W,t)},A=t=>n(Y,t),U=t=>{const c=T(s);if(!c)return;const a=t.target,u=t.relatedTarget,i=a&&c.contains(a);e.trapped||u&&c.contains(u)||(o=u),i&&n("focusin",t),!v.paused&&e.trapped&&(i?r=a:l(r,!0))},K=t=>{const c=T(s);if(!(v.paused||!c))if(e.trapped){const a=t.relatedTarget;!re(a)&&!c.contains(a)&&setTimeout(()=>{if(!v.paused&&e.trapped){const u=b({focusReason:d.value});n("focusout-prevented",u),u.defaultPrevented||l(r,!0)}},0)}else{const a=t.target;a&&c.contains(a)||n("focusout",t)}};async function D(){await j();const t=T(s);if(t){X.push(v);const c=t.contains(document.activeElement)?o:document.activeElement;if(o=c,!t.contains(c)){const u=new Event(w,q);t.addEventListener(w,I),t.dispatchEvent(u),u.defaultPrevented||j(()=>{let i=e.focusStartEl;ce(i)||(l(i),document.activeElement!==i&&(i="first")),i==="first"&&Ee(Z(t),!0),(document.activeElement===c||i==="container")&&l(t)})}}}function x(){const t=T(s);if(t){t.removeEventListener(w,I);const c=new CustomEvent(O,{...q,detail:{focusReason:d.value}});t.addEventListener(O,A),t.dispatchEvent(c),!c.defaultPrevented&&(d.value=="keyboard"||!me()||t.contains(document.activeElement))&&l(o!=null?o:document.body),t.removeEventListener(O,A),X.remove(v)}}return g(()=>{e.trapped&&D(),C(()=>e.trapped,t=>{t?D():x()})}),R(()=>{e.trapped&&x()}),{onKeydown:E}}});function ye(e,n,s,o,r,d){return oe(e.$slots,"default",{handleKeydown:e.onKeydown})}var Se=te(Fe,[["render",ye],["__file","focus-trap.vue"]]);export{Se as E,de as F};
