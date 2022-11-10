import{c as v,aX as Oe,A as De,O as be,aK as Ke,a1 as He,l as S,o as Ce,z as W,a6 as ze,aY as je,aZ as ge,K as Ue,aU as We,x as J,ad as we,a_ as _e,a0 as G,d as ke,a$ as Xe,aN as Ye,aI as Ze,aT as Qe,N as xe,b0 as ee,b1 as qe,b2 as Je,b3 as Ge,aM as et,$ as A,n as tt,a7 as at,h as m,a as w,Z as h,F as te,P as y,e as t,M as H,b as $,X as x,w as M,aQ as j,aW as L,Y as ae,f as ot,b4 as st,b5 as nt,Q as lt,t as U,a3 as rt,_ as it,B as ut,S as Se,a4 as dt}from"./index.f3316679.js";import{U as oe}from"./event.776e7e11.js";import{u as ct,i as pt}from"./index.99d16592.js";import{d as Ie}from"./error.7e8331f1.js";const ft=o=>/([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi.test(o),vt=["class","style"],mt=/^on[A-Z]/,ht=(o={})=>{const{excludeListeners:l=!1,excludeKeys:r}=o,a=v(()=>((r==null?void 0:r.value)||[]).concat(vt)),s=De();return s?v(()=>{var c;return Oe(Object.entries((c=s.proxy)==null?void 0:c.$attrs).filter(([u])=>!a.value.includes(u)&&!(l&&mt.test(u))))}):v(()=>({}))},yt=()=>{const o=be(Ke,void 0),l=be(He,void 0);return{form:o,formItem:l}},bt=(o,{formItemContext:l,disableIdGeneration:r,disableIdManagement:a})=>{r||(r=S(!1)),a||(a=S(!1));const s=S();let c;const u=v(()=>{var p;return!!(!o.label&&l&&l.inputIds&&((p=l.inputIds)==null?void 0:p.length)<=1)});return Ce(()=>{c=W([ze(o,"id"),r],([p,d])=>{const f=p!=null?p:d?void 0:ct().value;f!==s.value&&(l!=null&&l.removeInputId&&(s.value&&l.removeInputId(s.value),!(a!=null&&a.value)&&!d&&f&&l.addInputId(f)),s.value=f)},{immediate:!0})}),je(()=>{c&&c(),l!=null&&l.removeInputId&&s.value&&l.removeInputId(s.value)}),{isLabeledByFormItem:u,inputId:s}};function gt(o){const l=S();function r(){if(o.value==null)return;const{selectionStart:s,selectionEnd:c,value:u}=o.value;if(s==null||c==null)return;const p=u.slice(0,Math.max(0,s)),d=u.slice(Math.max(0,c));l.value={selectionStart:s,selectionEnd:c,value:u,beforeTxt:p,afterTxt:d}}function a(){if(o.value==null||l.value==null)return;const{value:s}=o.value,{beforeTxt:c,afterTxt:u,selectionStart:p}=l.value;if(c==null||u==null||p==null)return;let d=s.length;if(s.endsWith(u))d=s.length-u.length;else if(s.startsWith(c))d=c.length;else{const f=c[p-1],I=s.indexOf(f,p-1);I!==-1&&(d=I+1)}o.value.setSelectionRange(d,d)}return[r,a]}let b;const wt=`
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`,xt=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function St(o){const l=window.getComputedStyle(o),r=l.getPropertyValue("box-sizing"),a=Number.parseFloat(l.getPropertyValue("padding-bottom"))+Number.parseFloat(l.getPropertyValue("padding-top")),s=Number.parseFloat(l.getPropertyValue("border-bottom-width"))+Number.parseFloat(l.getPropertyValue("border-top-width"));return{contextStyle:xt.map(u=>`${u}:${l.getPropertyValue(u)}`).join(";"),paddingSize:a,borderSize:s,boxSizing:r}}function Ee(o,l=1,r){var a;b||(b=document.createElement("textarea"),document.body.appendChild(b));const{paddingSize:s,borderSize:c,boxSizing:u,contextStyle:p}=St(o);b.setAttribute("style",`${p};${wt}`),b.value=o.value||o.placeholder||"";let d=b.scrollHeight;const f={};u==="border-box"?d=d+c:u==="content-box"&&(d=d-s),b.value="";const I=b.scrollHeight-s;if(ge(l)){let g=I*l;u==="border-box"&&(g=g+s+c),d=Math.max(g,d),f.minHeight=`${g}px`}if(ge(r)){let g=I*r;u==="border-box"&&(g=g+s+c),d=Math.min(g,d)}return f.height=`${d}px`,(a=b.parentNode)==null||a.removeChild(b),b=void 0,f}const It=Ue({id:{type:String,default:void 0},size:We,disabled:Boolean,modelValue:{type:J([String,Number,Object]),default:""},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:J([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!1},showWordLimit:{type:Boolean,default:!1},suffixIcon:{type:we},prefixIcon:{type:we},containerRole:{type:String,default:void 0},label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:J([Object,Array,String]),default:()=>_e({})}}),Et={[oe]:o=>G(o),input:o=>G(o),change:o=>G(o),focus:o=>o instanceof FocusEvent,blur:o=>o instanceof FocusEvent,clear:()=>!0,mouseleave:o=>o instanceof MouseEvent,mouseenter:o=>o instanceof MouseEvent,keydown:o=>o instanceof Event,compositionstart:o=>o instanceof CompositionEvent,compositionupdate:o=>o instanceof CompositionEvent,compositionend:o=>o instanceof CompositionEvent},Ct=["role"],zt=["id","type","disabled","formatter","parser","readonly","autocomplete","tabindex","aria-label","placeholder","form"],kt=["id","tabindex","disabled","readonly","autocomplete","aria-label","placeholder","form"],Pt=ke({name:"ElInput",inheritAttrs:!1}),$t=ke({...Pt,props:It,emits:Et,setup(o,{expose:l,emit:r}){const a=o,s=Xe(),c=Ye(),u=v(()=>{const e={};return a.containerRole==="combobox"&&(e["aria-haspopup"]=s["aria-haspopup"],e["aria-owns"]=s["aria-owns"],e["aria-expanded"]=s["aria-expanded"]),e}),p=ht({excludeKeys:v(()=>Object.keys(u.value))}),{form:d,formItem:f}=yt(),{inputId:I}=bt(a,{formItemContext:f}),g=Ze(),z=Qe(),n=xe("input"),se=xe("textarea"),R=ee(),k=ee(),N=S(!1),_=S(!1),V=S(!1),O=S(!1),ne=S(),X=ee(a.inputStyle),F=v(()=>R.value||k.value),le=v(()=>{var e;return(e=d==null?void 0:d.statusIcon)!=null?e:!1}),T=v(()=>(f==null?void 0:f.validateState)||""),re=v(()=>T.value&&qe[T.value]),Pe=v(()=>O.value?Je:Ge),$e=v(()=>[s.style,a.inputStyle]),ie=v(()=>[a.inputStyle,X.value,{resize:a.resize}]),E=v(()=>pt(a.modelValue)?"":String(a.modelValue)),D=v(()=>a.clearable&&!z.value&&!a.readonly&&!!E.value&&(N.value||_.value)),Y=v(()=>a.showPassword&&!z.value&&!a.readonly&&!!E.value&&(!!E.value||N.value)),P=v(()=>a.showWordLimit&&!!p.value.maxlength&&(a.type==="text"||a.type==="textarea")&&!z.value&&!a.readonly&&!a.showPassword),Z=v(()=>Array.from(E.value).length),Ne=v(()=>!!P.value&&Z.value>Number(p.value.maxlength)),Ve=v(()=>!!c.suffix||!!a.suffixIcon||D.value||a.showPassword||P.value||!!T.value&&le.value),[Fe,Te]=gt(R);et(k,e=>{if(!P.value||a.resize!=="both")return;const i=e[0],{width:C}=i.contentRect;ne.value={right:`calc(100% - ${C+15+6}px)`}});const K=()=>{const{type:e,autosize:i}=a;if(!(!ut||e!=="textarea"))if(i){const C=Se(i)?i.minRows:void 0,q=Se(i)?i.maxRows:void 0;X.value={...Ee(k.value,C,q)}}else X.value={minHeight:Ee(k.value).minHeight}},B=()=>{const e=F.value;!e||e.value===E.value||(e.value=E.value)},Q=async e=>{Fe();let{value:i}=e.target;if(a.formatter&&(i=a.parser?a.parser(i):i,i=a.formatter(i)),!V.value){if(i===E.value){B();return}r(oe,i),r("input",i),await A(),B(),Te()}},ue=e=>{r("change",e.target.value)},de=e=>{r("compositionstart",e),V.value=!0},ce=e=>{var i;r("compositionupdate",e);const C=(i=e.target)==null?void 0:i.value,q=C[C.length-1]||"";V.value=!ft(q)},pe=e=>{r("compositionend",e),V.value&&(V.value=!1,Q(e))},Be=()=>{O.value=!O.value,fe()},fe=async()=>{var e;await A(),(e=F.value)==null||e.focus()},Ae=()=>{var e;return(e=F.value)==null?void 0:e.blur()},ve=e=>{N.value=!0,r("focus",e)},me=e=>{var i;N.value=!1,r("blur",e),a.validateEvent&&((i=f==null?void 0:f.validate)==null||i.call(f,"blur").catch(C=>Ie()))},Me=e=>{_.value=!1,r("mouseleave",e)},Le=e=>{_.value=!0,r("mouseenter",e)},he=e=>{r("keydown",e)},Re=()=>{var e;(e=F.value)==null||e.select()},ye=()=>{r(oe,""),r("change",""),r("clear"),r("input","")};return W(()=>a.modelValue,()=>{var e;A(()=>K()),a.validateEvent&&((e=f==null?void 0:f.validate)==null||e.call(f,"change").catch(i=>Ie()))}),W(E,()=>B()),W(()=>a.type,async()=>{await A(),B(),K()}),Ce(()=>{!a.formatter&&a.parser,B(),A(K)}),l({input:R,textarea:k,ref:F,textareaStyle:ie,autosize:ze(a,"autosize"),focus:fe,blur:Ae,select:Re,clear:ye,resizeTextarea:K}),(e,i)=>tt((m(),w("div",ae(t(u),{class:[e.type==="textarea"?t(se).b():t(n).b(),t(n).m(t(g)),t(n).is("disabled",t(z)),t(n).is("exceed",t(Ne)),{[t(n).b("group")]:e.$slots.prepend||e.$slots.append,[t(n).bm("group","append")]:e.$slots.append,[t(n).bm("group","prepend")]:e.$slots.prepend,[t(n).m("prefix")]:e.$slots.prefix||e.prefixIcon,[t(n).m("suffix")]:e.$slots.suffix||e.suffixIcon||e.clearable||e.showPassword,[t(n).bm("suffix","password-clear")]:t(D)&&t(Y)},e.$attrs.class],style:t($e),role:e.containerRole,onMouseenter:Le,onMouseleave:Me}),[h(" input "),e.type!=="textarea"?(m(),w(te,{key:0},[h(" prepend slot "),e.$slots.prepend?(m(),w("div",{key:0,class:y(t(n).be("group","prepend"))},[H(e.$slots,"prepend")],2)):h("v-if",!0),$("div",{class:y([t(n).e("wrapper"),t(n).is("focus",N.value)])},[h(" prefix slot "),e.$slots.prefix||e.prefixIcon?(m(),w("span",{key:0,class:y(t(n).e("prefix"))},[$("span",{class:y(t(n).e("prefix-inner"))},[H(e.$slots,"prefix"),e.prefixIcon?(m(),x(t(L),{key:0,class:y(t(n).e("icon"))},{default:M(()=>[(m(),x(j(e.prefixIcon)))]),_:1},8,["class"])):h("v-if",!0)],2)],2)):h("v-if",!0),$("input",ae({id:t(I),ref_key:"input",ref:R,class:t(n).e("inner")},t(p),{type:e.showPassword?O.value?"text":"password":e.type,disabled:t(z),formatter:e.formatter,parser:e.parser,readonly:e.readonly,autocomplete:e.autocomplete,tabindex:e.tabindex,"aria-label":e.label,placeholder:e.placeholder,style:e.inputStyle,form:a.form,onCompositionstart:de,onCompositionupdate:ce,onCompositionend:pe,onInput:Q,onFocus:ve,onBlur:me,onChange:ue,onKeydown:he}),null,16,zt),h(" suffix slot "),t(Ve)?(m(),w("span",{key:1,class:y(t(n).e("suffix"))},[$("span",{class:y(t(n).e("suffix-inner"))},[!t(D)||!t(Y)||!t(P)?(m(),w(te,{key:0},[H(e.$slots,"suffix"),e.suffixIcon?(m(),x(t(L),{key:0,class:y(t(n).e("icon"))},{default:M(()=>[(m(),x(j(e.suffixIcon)))]),_:1},8,["class"])):h("v-if",!0)],64)):h("v-if",!0),t(D)?(m(),x(t(L),{key:1,class:y([t(n).e("icon"),t(n).e("clear")]),onMousedown:nt(t(lt),["prevent"]),onClick:ye},{default:M(()=>[ot(t(st))]),_:1},8,["class","onMousedown"])):h("v-if",!0),t(Y)?(m(),x(t(L),{key:2,class:y([t(n).e("icon"),t(n).e("password")]),onClick:Be},{default:M(()=>[(m(),x(j(t(Pe))))]),_:1},8,["class"])):h("v-if",!0),t(P)?(m(),w("span",{key:3,class:y(t(n).e("count"))},[$("span",{class:y(t(n).e("count-inner"))},U(t(Z))+" / "+U(t(p).maxlength),3)],2)):h("v-if",!0),t(T)&&t(re)&&t(le)?(m(),x(t(L),{key:4,class:y([t(n).e("icon"),t(n).e("validateIcon"),t(n).is("loading",t(T)==="validating")])},{default:M(()=>[(m(),x(j(t(re))))]),_:1},8,["class"])):h("v-if",!0)],2)],2)):h("v-if",!0)],2),h(" append slot "),e.$slots.append?(m(),w("div",{key:1,class:y(t(n).be("group","append"))},[H(e.$slots,"append")],2)):h("v-if",!0)],64)):(m(),w(te,{key:1},[h(" textarea "),$("textarea",ae({id:t(I),ref_key:"textarea",ref:k,class:t(se).e("inner")},t(p),{tabindex:e.tabindex,disabled:t(z),readonly:e.readonly,autocomplete:e.autocomplete,style:t(ie),"aria-label":e.label,placeholder:e.placeholder,form:a.form,onCompositionstart:de,onCompositionupdate:ce,onCompositionend:pe,onInput:Q,onFocus:ve,onBlur:me,onChange:ue,onKeydown:he}),null,16,kt),t(P)?(m(),w("span",{key:0,style:rt(ne.value),class:y(t(n).e("count"))},U(t(Z))+" / "+U(t(p).maxlength),7)):h("v-if",!0)],64))],16,Ct)),[[at,e.type!=="hidden"]])}});var Nt=it($t,[["__file","/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]);const At=dt(Nt);export{At as E,bt as a,yt as u};
