!function(){function e(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,l)}return i}function t(t){for(var l=1;l<arguments.length;l++){var a=null!=arguments[l]?arguments[l]:{};l%2?e(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):e(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}System.register(["./index-legacy.3ddb9fc8.js","./el-button-legacy.9c6143bc.js","./el-input-legacy.c6e7e9ef.js","./error-legacy.3397af0e.js","./index-legacy.45dffb3f.js","./index-legacy.ba2a9603.js"],(function(e,i){"use strict";var l,a,n,c,o,s,r,d,u,h,v,p,w,f,b,_,y,g,m,x,k,O,D,A,G,j,V,I,B,C,E,T,S,z,L,R,P,U,H,M,N,W,F,J,K,Q,Z,q,X,Y,$,ee,te,ie,le,ae,ne=document.createElement("style");return ne.innerHTML=".el-switch{--el-switch-on-color:var(--el-color-primary);--el-switch-off-color:var(--el-border-color)}.el-switch{display:inline-flex;align-items:center;position:relative;font-size:14px;line-height:20px;height:32px;vertical-align:middle}.el-switch.is-disabled .el-switch__core,.el-switch.is-disabled .el-switch__label{cursor:not-allowed}.el-switch__label{transition:var(--el-transition-duration-fast);height:20px;display:inline-block;font-size:14px;font-weight:500;cursor:pointer;vertical-align:middle;color:var(--el-text-color-primary)}.el-switch__label.is-active{color:var(--el-color-primary)}.el-switch__label--left{margin-right:10px}.el-switch__label--right{margin-left:10px}.el-switch__label *{line-height:1;font-size:14px;display:inline-block}.el-switch__label .el-icon{height:inherit}.el-switch__label .el-icon svg{vertical-align:middle}.el-switch__input{position:absolute;width:0;height:0;opacity:0;margin:0}.el-switch__input:focus-visible~.el-switch__core{outline:2px solid var(--el-switch-on-color);outline-offset:1px}.el-switch__core{margin:0;display:inline-block;position:relative;width:40px;height:20px;border:1px solid var(--el-switch-border-color,var(--el-switch-off-color));outline:0;border-radius:10px;box-sizing:border-box;background:var(--el-switch-off-color);cursor:pointer;transition:border-color var(--el-transition-duration),background-color var(--el-transition-duration);vertical-align:middle}.el-switch__core .el-switch__inner{position:absolute;top:1px;left:1px;transition:all var(--el-transition-duration);width:16px;height:16px;display:flex;justify-content:center;align-items:center;left:50%;white-space:nowrap}.el-switch__core .el-switch__inner .is-icon,.el-switch__core .el-switch__inner .is-text{color:var(--el-color-white);transition:opacity var(--el-transition-duration);position:absolute;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.el-switch__core .el-switch__action{position:absolute;top:1px;left:1px;border-radius:var(--el-border-radius-circle);transition:all var(--el-transition-duration);width:16px;height:16px;background-color:var(--el-color-white);display:flex;justify-content:center;align-items:center;color:var(--el-switch-off-color)}.el-switch__core .el-switch__action .is-icon,.el-switch__core .el-switch__action .is-text{transition:opacity var(--el-transition-duration);position:absolute;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.el-switch__core .is-text{font-size:12px}.el-switch__core .is-show{opacity:1}.el-switch__core .is-hide{opacity:0}.el-switch.is-checked .el-switch__core{border-color:var(--el-switch-border-color,var(--el-switch-on-color));background-color:var(--el-switch-on-color)}.el-switch.is-checked .el-switch__core .el-switch__action{left:100%;margin-left:-17px;color:var(--el-switch-on-color)}.el-switch.is-checked .el-switch__core .el-switch__inner{left:50%;white-space:nowrap;margin-left:-17px}.el-switch.is-disabled{opacity:.6}.el-switch--wide .el-switch__label.el-switch__label--left span{left:10px}.el-switch--wide .el-switch__label.el-switch__label--right span{right:10px}.el-switch .label-fade-enter-from,.el-switch .label-fade-leave-active{opacity:0}.el-switch--large{font-size:14px;line-height:24px;height:40px}.el-switch--large .el-switch__label{height:24px;font-size:14px}.el-switch--large .el-switch__label *{font-size:14px}.el-switch--large .el-switch__core{width:50px;height:24px;border-radius:12px}.el-switch--large .el-switch__core .el-switch__inner,.el-switch--large .el-switch__core .el-switch__action{width:20px;height:20px}.el-switch--large.is-checked .el-switch__core .el-switch__action,.el-switch--large.is-checked .el-switch__core .el-switch__inner{margin-left:-21px}.el-switch--small{font-size:12px;line-height:16px;height:24px}.el-switch--small .el-switch__label{height:16px;font-size:12px}.el-switch--small .el-switch__label *{font-size:12px}.el-switch--small .el-switch__core{width:30px;height:16px;border-radius:8px}.el-switch--small .el-switch__core .el-switch__inner,.el-switch--small .el-switch__core .el-switch__action{width:12px;height:12px}.el-switch--small.is-checked .el-switch__core .el-switch__action,.el-switch--small.is-checked .el-switch__core .el-switch__inner{margin-left:-13px}\n",document.head.appendChild(ne),{setters:[e=>{l=e.aI,a=e.A,n=e.C,c=e.B,o=e.D,s=e.a4,r=e.aZ,d=e.d,u=e.aJ,h=e.E,v=e.c,p=e.aV,w=e.l,f=e.G,b=e.P,_=e.o,y=e.j,g=e.e,m=e.f,x=e.h,k=e.I,O=e.b6,D=e.H,A=e.w,G=e.aR,j=e.aW,V=e.J,I=e.t,B=e.F,C=e.i,E=e.aU,T=e.a7,S=e.b5,z=e._,L=e.Q,R=e.a3,P=e.b7,U=e.M,H=e.b8,M=e.b9,N=e.ba,W=e.bb,F=e.s,J=e.bc,K=e.al,Q=e.k},e=>{Z=e.u,q=e.E},e=>{X=e.U,Y=e.C,$=e.I,ee=e.u,te=e.a,ie=e.E},e=>{le=e.d,ae=e.t},()=>{},()=>{}],execute:function(){const i=a({modelValue:{type:[Boolean,String,Number],default:!1},value:{type:[Boolean,String,Number],default:!1},disabled:{type:Boolean,default:!1},width:{type:[String,Number],default:""},inlinePrompt:{type:Boolean,default:!1},activeIcon:{type:n},inactiveIcon:{type:n},activeText:{type:String,default:""},inactiveText:{type:String,default:""},activeColor:{type:String,default:""},inactiveColor:{type:String,default:""},borderColor:{type:String,default:""},activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},name:{type:String,default:""},validateEvent:{type:Boolean,default:!0},id:String,loading:{type:Boolean,default:!1},beforeChange:{type:c(Function)},size:{type:String,validator:e=>["",...l].includes(e)},tabindex:{type:[String,Number]}}),ne={[X]:e=>o(e)||s(e)||r(e),[Y]:e=>o(e)||s(e)||r(e),[$]:e=>o(e)||s(e)||r(e)},ce=["onClick"],oe=["id","aria-checked","aria-disabled","name","true-value","false-value","disabled","tabindex","onKeydown"],se=["aria-hidden"],re=["aria-hidden"],de=["aria-hidden"],ue=["aria-hidden"],he="ElSwitch",ve=d({name:he}),pe=d(t(t({},ve),{},{props:i,emits:ne,setup(e,i){let l=i.expose,a=i.emit;const n=e,c=L(),s=ee().formItem,r=u(),d=h("switch");Z({from:'"value"',replacement:'"model-value" or "v-model"',scope:he,version:"2.3.0",ref:"https://element-plus.org/en-US/component/switch.html#attributes",type:"Attribute"},v((()=>{var e;return!!(null==(e=c.vnode.props)?void 0:e.value)})));const z=te(n,{formItemContext:s}).inputId,U=p(v((()=>n.loading))),H=w(!1!==n.modelValue),M=w(),N=w(),W=v((()=>[d.b(),d.m(r.value),d.is("disabled",U.value),d.is("checked",K.value)])),F=v((()=>({width:f(n.width)})));b((()=>n.modelValue),(()=>{H.value=!0})),b((()=>n.value),(()=>{H.value=!1}));const J=v((()=>H.value?n.modelValue:n.value)),K=v((()=>J.value===n.activeValue));[n.activeValue,n.inactiveValue].includes(J.value)||(a(X,n.inactiveValue),a(Y,n.inactiveValue),a($,n.inactiveValue)),b(K,(e=>{var t;M.value.checked=e,n.validateEvent&&(null==(t=null==s?void 0:s.validate)||t.call(s,"change").catch((e=>le())))}));const Q=()=>{const e=K.value?n.inactiveValue:n.activeValue;a(X,e),a(Y,e),a($,e),R((()=>{M.value.checked=K.value}))},q=()=>{if(U.value)return;const e=n.beforeChange;if(!e)return void Q();const t=e();[P(t),o(t)].includes(!0)||ae(he,"beforeChange must return type `Promise<boolean>` or `boolean`"),P(t)?t.then((e=>{e&&Q()})).catch((e=>{})):t&&Q()},ie=v((()=>d.cssVarBlock(t(t(t({},n.activeColor?{"on-color":n.activeColor}:null),n.inactiveColor?{"off-color":n.inactiveColor}:null),n.borderColor?{"border-color":n.borderColor}:null))));return _((()=>{M.value.checked=K.value})),l({focus:()=>{var e,t;null==(t=null==(e=M.value)?void 0:e.focus)||t.call(e)},checked:K}),(e,t)=>(y(),g("div",{class:k(x(W)),style:T(x(ie)),onClick:S(q,["prevent"])},[m("input",{id:x(z),ref_key:"input",ref:M,class:k(x(d).e("input")),type:"checkbox",role:"switch","aria-checked":x(K),"aria-disabled":x(U),name:e.name,"true-value":e.activeValue,"false-value":e.inactiveValue,disabled:x(U),tabindex:e.tabindex,onChange:Q,onKeydown:O(q,["enter"])},null,42,oe),e.inlinePrompt||!e.inactiveIcon&&!e.inactiveText?V("v-if",!0):(y(),g("span",{key:0,class:k([x(d).e("label"),x(d).em("label","left"),x(d).is("active",!x(K))])},[e.inactiveIcon?(y(),D(x(j),{key:0},{default:A((()=>[(y(),D(G(e.inactiveIcon)))])),_:1})):V("v-if",!0),!e.inactiveIcon&&e.inactiveText?(y(),g("span",{key:1,"aria-hidden":x(K)},I(e.inactiveText),9,se)):V("v-if",!0)],2)),m("span",{ref_key:"core",ref:N,class:k(x(d).e("core")),style:T(x(F))},[e.inlinePrompt?(y(),g("div",{key:0,class:k(x(d).e("inner"))},[e.activeIcon||e.inactiveIcon?(y(),g(B,{key:0},[e.activeIcon?(y(),D(x(j),{key:0,class:k([x(d).is("icon"),x(K)?x(d).is("show"):x(d).is("hide")])},{default:A((()=>[(y(),D(G(e.activeIcon)))])),_:1},8,["class"])):V("v-if",!0),e.inactiveIcon?(y(),D(x(j),{key:1,class:k([x(d).is("icon"),x(K)?x(d).is("hide"):x(d).is("show")])},{default:A((()=>[(y(),D(G(e.inactiveIcon)))])),_:1},8,["class"])):V("v-if",!0)],64)):e.activeText||e.inactiveIcon?(y(),g(B,{key:1},[e.activeText?(y(),g("span",{key:0,class:k([x(d).is("text"),x(K)?x(d).is("show"):x(d).is("hide")]),"aria-hidden":!x(K)},I(e.activeText.substring(0,3)),11,re)):V("v-if",!0),e.inactiveText?(y(),g("span",{key:1,class:k([x(d).is("text"),x(K)?x(d).is("hide"):x(d).is("show")]),"aria-hidden":x(K)},I(e.inactiveText.substring(0,3)),11,de)):V("v-if",!0)],64)):V("v-if",!0)],2)):V("v-if",!0),m("div",{class:k(x(d).e("action"))},[e.loading?(y(),D(x(j),{key:0,class:k(x(d).is("loading"))},{default:A((()=>[C(x(E))])),_:1},8,["class"])):V("v-if",!0)],2)],6),e.inlinePrompt||!e.activeIcon&&!e.activeText?V("v-if",!0):(y(),g("span",{key:1,class:k([x(d).e("label"),x(d).em("label","right"),x(d).is("active",x(K))])},[e.activeIcon?(y(),D(x(j),{key:0},{default:A((()=>[(y(),D(G(e.activeIcon)))])),_:1})):V("v-if",!0),!e.activeIcon&&e.activeText?(y(),g("span",{key:1,"aria-hidden":!x(K)},I(e.activeText),9,ue)):V("v-if",!0)],2))],14,ce))}}));const we=U(z(pe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/switch/src/switch.vue"]])),fe={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},be=[m("path",{fill:"currentColor",d:"M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12Z"},null,-1)];const _e={name:"mdi-delete",render:function(e,t){return y(),g("svg",fe,be)}},ye={class:"flex justify-center items-center flex-col"},ge=m("h1",{class:"text-7xl"},"LiveQuery",-1),me={class:"w-50 pl-2 pr-2 inline-block"},xe={class:"inline-block"},ke=m("div",{class:"cursor-move"},"👋 Drag here!",-1),Oe=m("div",{class:"text-xs opacity-50"},"Handle that triggers the drag event",-1),De={class:"text-sm opacity-50"};e("default",d({__name:"bronze",setup(e){const t=H(W.TODO.name);let i=w();t.find().then((e=>{i.value=e})),t.subscribe().then((e=>{e.on("create",(e=>{i.value.push(e)})),e.on("enter",((e,t)=>{})),e.on("update",((e,t)=>{const l=i.value.findIndex((t=>t.id==(null==e?void 0:e.id)));i.value[l]=e})),e.on("delete",(e=>{i.value=i.value.filter((t=>t.id!=(null==e?void 0:e.id)))}))}));const l=()=>{const e=new(J.Object.extend(W.TODO.name));e.set(W.TODO.keys.content,"Hello world!"),e.set(W.TODO.keys.done,!0),e.set(W.TODO.keys.user,K()()),e.save().then((e=>{}))},a=w(null);let n=M(a,{initialValue:{x:40,y:40}}),c=n.x,o=n.y,s=n.style;const r=[w(c),w(o)],d=r[0],u=r[1];let h=w();N([d,u],(()=>{const e=J.Object.createWithoutData(W.DRAGGABLE.name,h.value);e.set(W.DRAGGABLE.keys.x,d.value),e.set(W.DRAGGABLE.keys.y,u.value),e.save()}),{debounce:500});const v=H(W.DRAGGABLE.name),p=(e,t)=>{const i=new(J.Object.extend(W.DRAGGABLE.name));return i.set(W.DRAGGABLE.keys.name,"bronzeDrag"),i.set(W.DRAGGABLE.keys.x,e),i.set(W.DRAGGABLE.keys.y,t),i.save(),i},f=e=>{if(e)return c.value=e.x,void(o.value=e.y);v.find().then((e=>{if(null!=e&&e.length){const t=e.filter((e=>"bronzeDrag"==e.get(W.DRAGGABLE.keys.name)))[0];c.value=t.get(W.DRAGGABLE.keys.x),o.value=t.get(W.DRAGGABLE.keys.y),h=w(t.id)}else f(p(40,40))}),(e=>{"101"==e.code&&f(p(40,40))}))};return v.subscribe().then((e=>{e.on("create",(e=>{h=w(e.id),c.value=e.get(W.DRAGGABLE.keys.x),o.value=e.get(W.DRAGGABLE.keys.y)})),e.on("enter",((e,t)=>{})),e.on("update",((e,t)=>{h=w(e.id),c.value=e.get(W.DRAGGABLE.keys.x),o.value=e.get(W.DRAGGABLE.keys.y)})),e.on("delete",(e=>{}))})),_((()=>{})),f(null),(e,t)=>{const n=we,r=ie,d=_e,u=q;return y(),g("div",ye,[ge,(y(!0),g(B,null,F(x(i),(e=>(y(),g("div",{key:e.id,class:"flex items-center justify-center p-2"},[C(n,{modelValue:e.attributes.done,"onUpdate:modelValue":t=>e.attributes.done=t,onClick:t=>((e,t)=>{const i=J.Object.createWithoutData(W.TODO.name,e);i.set(W.TODO.keys.done,t),i.save()})(e.id,e.attributes.done)},null,8,["modelValue","onUpdate:modelValue","onClick"]),m("div",me,[C(r,{modelValue:e.attributes.content,"onUpdate:modelValue":t=>e.attributes.content=t,clearable:"",onInput:t=>((e,t)=>{const i=J.Object.createWithoutData(W.TODO.name,e);i.set(W.TODO.keys.content,t),i.save()})(e.id,e.attributes.content)},null,8,["modelValue","onUpdate:modelValue","onInput"])]),m("div",xe,[C(d,{class:"mt-1",onClick:t=>{return i=e.id,void J.Object.createWithoutData(W.TODO.name,i).destroy();var i}},null,8,["onClick"])])])))),128)),C(u,{onClick:l},{default:A((()=>[Q(" 点击添加")])),_:1}),m("div",{ref_key:"settingRef",ref:a,style:T(x(s)),class:"bg-light-50 fixed shadow select-none z-10 hover:shadow-lg px-4 py-2 border-gray-400/30 rounded fixed"},[ke,Oe,m("div",De," I am at "+I(Math.round(x(c)))+", "+I(Math.round(x(o))),1)],4)])}}}))}}}))}();
