!function(){function e(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,l)}return i}function t(t){for(var l=1;l<arguments.length;l++){var a=null!=arguments[l]?arguments[l]:{};l%2?e(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):e(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var l=document.createElement("style");l.innerHTML=".el-switch{--el-switch-on-color:var(--el-color-primary);--el-switch-off-color:var(--el-border-color)}.el-switch{display:inline-flex;align-items:center;position:relative;font-size:14px;line-height:20px;height:32px;vertical-align:middle}.el-switch.is-disabled .el-switch__core,.el-switch.is-disabled .el-switch__label{cursor:not-allowed}.el-switch__label{transition:var(--el-transition-duration-fast);height:20px;display:inline-block;font-size:14px;font-weight:500;cursor:pointer;vertical-align:middle;color:var(--el-text-color-primary)}.el-switch__label.is-active{color:var(--el-color-primary)}.el-switch__label--left{margin-right:10px}.el-switch__label--right{margin-left:10px}.el-switch__label *{line-height:1;font-size:14px;display:inline-block}.el-switch__label .el-icon{height:inherit}.el-switch__label .el-icon svg{vertical-align:middle}.el-switch__input{position:absolute;width:0;height:0;opacity:0;margin:0}.el-switch__input:focus-visible~.el-switch__core{outline:2px solid var(--el-switch-on-color);outline-offset:1px}.el-switch__core{margin:0;display:inline-block;position:relative;width:40px;height:20px;border:1px solid var(--el-switch-border-color,var(--el-switch-off-color));outline:0;border-radius:10px;box-sizing:border-box;background:var(--el-switch-off-color);cursor:pointer;transition:border-color var(--el-transition-duration),background-color var(--el-transition-duration);vertical-align:middle}.el-switch__core .el-switch__inner{position:absolute;top:1px;left:1px;transition:all var(--el-transition-duration);width:16px;height:16px;display:flex;justify-content:center;align-items:center;left:50%;white-space:nowrap}.el-switch__core .el-switch__inner .is-icon,.el-switch__core .el-switch__inner .is-text{color:var(--el-color-white);transition:opacity var(--el-transition-duration);position:absolute;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.el-switch__core .el-switch__action{position:absolute;top:1px;left:1px;border-radius:var(--el-border-radius-circle);transition:all var(--el-transition-duration);width:16px;height:16px;background-color:var(--el-color-white);display:flex;justify-content:center;align-items:center;color:var(--el-switch-off-color)}.el-switch__core .el-switch__action .is-icon,.el-switch__core .el-switch__action .is-text{transition:opacity var(--el-transition-duration);position:absolute;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.el-switch__core .is-text{font-size:12px}.el-switch__core .is-show{opacity:1}.el-switch__core .is-hide{opacity:0}.el-switch.is-checked .el-switch__core{border-color:var(--el-switch-border-color,var(--el-switch-on-color));background-color:var(--el-switch-on-color)}.el-switch.is-checked .el-switch__core .el-switch__action{left:100%;margin-left:-17px;color:var(--el-switch-on-color)}.el-switch.is-checked .el-switch__core .el-switch__inner{left:50%;white-space:nowrap;margin-left:-17px}.el-switch.is-disabled{opacity:.6}.el-switch--wide .el-switch__label.el-switch__label--left span{left:10px}.el-switch--wide .el-switch__label.el-switch__label--right span{right:10px}.el-switch .label-fade-enter-from,.el-switch .label-fade-leave-active{opacity:0}.el-switch--large{font-size:14px;line-height:24px;height:40px}.el-switch--large .el-switch__label{height:24px;font-size:14px}.el-switch--large .el-switch__label *{font-size:14px}.el-switch--large .el-switch__core{width:50px;height:24px;border-radius:12px}.el-switch--large .el-switch__core .el-switch__inner,.el-switch--large .el-switch__core .el-switch__action{width:20px;height:20px}.el-switch--large.is-checked .el-switch__core .el-switch__action,.el-switch--large.is-checked .el-switch__core .el-switch__inner{margin-left:-21px}.el-switch--small{font-size:12px;line-height:16px;height:24px}.el-switch--small .el-switch__label{height:16px;font-size:12px}.el-switch--small .el-switch__label *{font-size:12px}.el-switch--small .el-switch__core{width:30px;height:16px;border-radius:8px}.el-switch--small .el-switch__core .el-switch__inner,.el-switch--small .el-switch__core .el-switch__action{width:12px;height:12px}.el-switch--small.is-checked .el-switch__core .el-switch__action,.el-switch--small.is-checked .el-switch__core .el-switch__inner{margin-left:-13px}\n",document.head.appendChild(l),System.register(["./index-legacy.d974566c.js","./el-button-legacy.65c7019b.js","./index-legacy.ca9b60ce.js","./index-legacy.4248481f.js"],(function(e){"use strict";var i,l,a,n,c,o,r,s,h,d,u,v,p,w,f,_,b,m,g,x,y,k,O,C,V,j,I,T,S,z,D,P,B,E,N,A,H,M,K,U,Q,F,L,R,W,Y,G,J,X,Z,$,q,ee;return{setters:[function(e){i=e.a$,l=e.A,a=e.C,n=e.B,c=e.D,o=e.a2,r=e.aK,s=e.d,h=e.aP,d=e.G,u=e.c,v=e.aQ,p=e.l,w=e.H,f=e.Q,_=e.o,b=e.e,m=e.f,g=e.h,x=e.i,y=e.J,k=e.b6,O=e.I,C=e.w,V=e.aX,j=e.aY,I=e.K,T=e.t,S=e.F,z=e.j,D=e.b5,P=e.a6,B=e.a_,E=e._,N=e.R,A=e.a1,H=e.b7,M=e.N,K=e.b8,U=e.s,Q=e.k,F=e.b9,L=e.ba,R=e.am},function(e){W=e.U,Y=e.C,G=e.I,J=e.u,X=e.b,Z=e.a,$=e.E},function(e){q=e.d,ee=e.t},function(){}],execute:function(){const te=l({modelValue:{type:[Boolean,String,Number],default:!1},value:{type:[Boolean,String,Number],default:!1},disabled:{type:Boolean,default:!1},width:{type:[String,Number],default:""},inlinePrompt:{type:Boolean,default:!1},activeIcon:{type:a},inactiveIcon:{type:a},activeText:{type:String,default:""},inactiveText:{type:String,default:""},activeColor:{type:String,default:""},inactiveColor:{type:String,default:""},borderColor:{type:String,default:""},activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},name:{type:String,default:""},validateEvent:{type:Boolean,default:!0},id:String,loading:{type:Boolean,default:!1},beforeChange:{type:n(Function)},size:{type:String,validator:e=>["",...i].includes(e)},tabindex:{type:[String,Number]}}),ie={[W]:e=>c(e)||o(e)||r(e),[Y]:e=>c(e)||o(e)||r(e),[G]:e=>c(e)||o(e)||r(e)},le=["onClick"],ae=["id","aria-checked","aria-disabled","name","true-value","false-value","disabled","tabindex","onKeydown"],ne=["aria-hidden"],ce=["aria-hidden"],oe=["aria-hidden"],re=["aria-hidden"],se=s(t(t({},{name:"ElSwitch"}),{},{props:te,emits:ie,setup(e,i){let l=i.expose,a=i.emit;const n=e,o="ElSwitch",r=N(),s=J().formItem,E=h(),M=d("switch");X({from:'"value"',replacement:'"model-value" or "v-model"',scope:o,version:"2.3.0",ref:"https://element-plus.org/en-US/component/switch.html#attributes",type:"Attribute"},u((()=>{var e;return!!(null==(e=r.vnode.props)?void 0:e.value)})));const K=Z(n,{formItemContext:s}).inputId,U=v(u((()=>n.loading))),Q=p(!1!==n.modelValue),F=p(),L=p(),R=u((()=>[M.b(),M.m(E.value),M.is("disabled",U.value),M.is("checked",ie.value)])),$=u((()=>({width:w(n.width)})));f((()=>n.modelValue),(()=>{Q.value=!0})),f((()=>n.value),(()=>{Q.value=!1}));const te=u((()=>Q.value?n.modelValue:n.value)),ie=u((()=>te.value===n.activeValue));[n.activeValue,n.inactiveValue].includes(te.value)||(a(W,n.inactiveValue),a(Y,n.inactiveValue),a(G,n.inactiveValue)),f(ie,(e=>{var t;F.value.checked=e,n.validateEvent&&(null==(t=null==s?void 0:s.validate)||t.call(s,"change").catch((e=>q())))}));const se=()=>{const e=ie.value?n.inactiveValue:n.activeValue;a(W,e),a(Y,e),a(G,e),A((()=>{F.value.checked=ie.value}))},he=()=>{if(U.value)return;const e=n.beforeChange;if(!e)return void se();const t=e();[H(t),c(t)].includes(!0)||ee(o,"beforeChange must return type `Promise<boolean>` or `boolean`"),H(t)?t.then((e=>{e&&se()})).catch((e=>{})):t&&se()},de=u((()=>M.cssVarBlock(t(t(t({},n.activeColor?{"on-color":n.activeColor}:null),n.inactiveColor?{"off-color":n.inactiveColor}:null),n.borderColor?{"border-color":n.borderColor}:null))));return _((()=>{F.value.checked=ie.value})),l({focus:()=>{var e,t;null==(t=null==(e=F.value)?void 0:e.focus)||t.call(e)},checked:ie}),(e,t)=>(b(),m("div",{class:y(x(R)),style:P(x(de)),onClick:B(he,["prevent"])},[g("input",{id:x(K),ref_key:"input",ref:F,class:y(x(M).e("input")),type:"checkbox",role:"switch","aria-checked":x(ie),"aria-disabled":x(U),name:e.name,"true-value":e.activeValue,"false-value":e.inactiveValue,disabled:x(U),tabindex:e.tabindex,onChange:se,onKeydown:k(he,["enter"])},null,42,ae),e.inlinePrompt||!e.inactiveIcon&&!e.inactiveText?I("v-if",!0):(b(),m("span",{key:0,class:y([x(M).e("label"),x(M).em("label","left"),x(M).is("active",!x(ie))])},[e.inactiveIcon?(b(),O(x(j),{key:0},{default:C((()=>[(b(),O(V(e.inactiveIcon)))])),_:1})):I("v-if",!0),!e.inactiveIcon&&e.inactiveText?(b(),m("span",{key:1,"aria-hidden":x(ie)},T(e.inactiveText),9,ne)):I("v-if",!0)],2)),g("span",{ref_key:"core",ref:L,class:y(x(M).e("core")),style:P(x($))},[e.inlinePrompt?(b(),m("div",{key:0,class:y(x(M).e("inner"))},[e.activeIcon||e.inactiveIcon?(b(),m(S,{key:0},[e.activeIcon?(b(),O(x(j),{key:0,class:y([x(M).is("icon"),x(ie)?x(M).is("show"):x(M).is("hide")])},{default:C((()=>[(b(),O(V(e.activeIcon)))])),_:1},8,["class"])):I("v-if",!0),e.inactiveIcon?(b(),O(x(j),{key:1,class:y([x(M).is("icon"),x(ie)?x(M).is("hide"):x(M).is("show")])},{default:C((()=>[(b(),O(V(e.inactiveIcon)))])),_:1},8,["class"])):I("v-if",!0)],64)):e.activeText||e.inactiveIcon?(b(),m(S,{key:1},[e.activeText?(b(),m("span",{key:0,class:y([x(M).is("text"),x(ie)?x(M).is("show"):x(M).is("hide")]),"aria-hidden":!x(ie)},T(e.activeText.substring(0,3)),11,ce)):I("v-if",!0),e.inactiveText?(b(),m("span",{key:1,class:y([x(M).is("text"),x(ie)?x(M).is("hide"):x(M).is("show")]),"aria-hidden":x(ie)},T(e.inactiveText.substring(0,3)),11,oe)):I("v-if",!0)],64)):I("v-if",!0)],2)):I("v-if",!0),g("div",{class:y(x(M).e("action"))},[e.loading?(b(),O(x(j),{key:0,class:y(x(M).is("loading"))},{default:C((()=>[z(x(D))])),_:1},8,["class"])):I("v-if",!0)],2)],6),e.inlinePrompt||!e.activeIcon&&!e.activeText?I("v-if",!0):(b(),m("span",{key:1,class:y([x(M).e("label"),x(M).em("label","right"),x(M).is("active",x(ie))])},[e.activeIcon?(b(),O(x(j),{key:0},{default:C((()=>[(b(),O(V(e.activeIcon)))])),_:1})):I("v-if",!0),!e.activeIcon&&e.activeText?(b(),m("span",{key:1,"aria-hidden":!x(ie)},T(e.activeText),9,re)):I("v-if",!0)],2))],14,le))}}));const he=M(E(se,[["__file","/home/runner/work/element-plus/element-plus/packages/components/switch/src/switch.vue"]])),de={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},ue=[g("path",{fill:"currentColor",d:"M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12Z"},null,-1)];var ve={name:"mdi-delete",render:function(e,t){return b(),m("svg",de,ue)}};const pe={class:"flex justify-center items-center flex-col"},we=g("h1",{class:"text-7xl"},"LiveQuery",-1),fe={class:"inline-block pl-2"},_e={class:"inline-block"},be=Q(" 点击添加");e("default",s({__name:"bronze",setup(e){const t=K(F.TODO.name);let i=p();t.find().then((e=>{i.value=e})),t.subscribe().then((e=>{e.on("create",(e=>{i.value.push(e)})),e.on("enter",((e,t)=>{})),e.on("update",((e,t)=>{const l=i.value.findIndex((t=>t.id==(null==e?void 0:e.id)));i.value[l]=e})),e.on("delete",(e=>{i.value=i.value.filter((t=>t.id!=(null==e?void 0:e.id)))}))}));const l=()=>{const e=new(L.AV.Object.extend(F.TODO.name));e.set(F.TODO.keys.content,"Hello world!"),e.set(F.TODO.keys.done,!0),e.set(F.TODO.keys.user,R()),e.save().then((e=>{}))};return(e,t)=>{const a=he,n=ve,c=$;return b(),m("div",pe,[we,(b(!0),m(S,null,U(x(i),(e=>(b(),m("div",{key:e.id,class:"flex items-center justify-center"},[z(a,{modelValue:e.attributes.done,"onUpdate:modelValue":t=>e.attributes.done=t,onClick:t=>((e,t)=>{const i=L.AV.Object.createWithoutData(F.TODO.name,e);i.set(F.TODO.keys.done,t),i.save()})(e.id,e.attributes.done)},null,8,["modelValue","onUpdate:modelValue","onClick"]),g("div",fe,T(e.attributes.content),1),g("div",_e,[z(n,{class:"mt-1",onClick:t=>{return i=e.id,void L.AV.Object.createWithoutData(F.TODO.name,i).destroy();var i}},null,8,["onClick"])])])))),128)),z(c,{onClick:l},{default:C((()=>[be])),_:1})])}}}))}}}))}();
