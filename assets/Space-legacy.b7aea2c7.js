System.register(["./use-rtl-legacy.f56a8bd0.js","./index-legacy.7a69c0b7.js"],(function(e,t){"use strict";var r,i,n,a,l,s,o,p,d,u,c,f;return{setters:[e=>{r=e.u,i=e.f,n=e.l,a=e.m,l=e.o,s=e.p},e=>{o=e.A,p=e.F,d=e.b5,u=e.d,c=e.f,f=e.l}],execute:function(){function t(e){var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return e.forEach((e=>{if(null!==e)if("object"==typeof e)if(Array.isArray(e))t(e,r,i);else if(e.type===p){if(null===e.children)return;Array.isArray(e.children)&&t(e.children,r,i)}else e.type!==d&&i.push(e);else"string"!=typeof e&&"number"!=typeof e||i.push(o(String(e)))})),i}e("f",t);var m,g=e("i","undefined"!=typeof document&&"undefined"!=typeof window),h={gapSmall:"4px 8px",gapMedium:"8px 12px",gapLarge:"12px 16px"},y=e("s",{name:"Space",self:()=>h}),v=()=>{if(!g)return!0;if(void 0===m){var e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e);var t=1===e.scrollHeight;return document.body.removeChild(e),m=t}return m},x=Object.assign(Object.assign({},i.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,size:{type:[String,Number,Array],default:"medium"},wrapItem:{type:Boolean,default:!0},itemClass:String,itemStyle:[String,Object],wrap:{type:Boolean,default:!0},internalUseGap:{type:Boolean,default:void 0}});e("_",u({name:"Space",props:x,setup(e){var t=r(e),o=t.mergedClsPrefixRef,p=t.mergedRtlRef,d=i("Space","-space",void 0,y,e,o),u=n("Space",p,o);return{useGap:v(),rtlEnabled:u,mergedClsPrefix:o,margin:c((()=>{var t=e.size;if(Array.isArray(t))return{horizontal:t[0],vertical:t[1]};if("number"==typeof t)return{horizontal:t,vertical:t};var r=d.value.self[a("gap",t)],i=l(r),n=i.row,o=i.col;return{horizontal:s(o),vertical:s(n)}}))}},render(){var e=this.vertical,r=this.align,i=this.inline,n=this.justify,a=this.itemClass,l=this.itemStyle,s=this.margin,o=this.wrap,p=this.mergedClsPrefix,d=this.rtlEnabled,u=this.useGap,c=this.wrapItem,m=this.internalUseGap,g=t(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],i=e.$slots[t];return void 0===i?r:i()}(this));if(!g.length)return null;var h=`${s.horizontal}px`,y=s.horizontal/2+"px",v=`${s.vertical}px`,x=s.vertical/2+"px",b=g.length-1,w=n.startsWith("space-");return f("div",{role:"none",class:[`${p}-space`,d&&`${p}-space--rtl`],style:{display:i?"inline-flex":"flex",flexDirection:e?"column":"row",justifyContent:["start","end"].includes(n)?"flex-"+n:n,flexWrap:!o||e?"nowrap":"wrap",marginTop:u||e?"":`-${x}`,marginBottom:u||e?"":`-${x}`,alignItems:r,gap:u?`${s.vertical}px ${s.horizontal}px`:""}},c||!u&&!m?g.map(((t,r)=>f("div",{role:"none",class:a,style:[l,{maxWidth:"100%"},u?"":e?{marginBottom:r!==b?v:""}:d?{marginLeft:w?"space-between"===n&&r===b?"":y:r!==b?h:"",marginRight:w?"space-between"===n&&0===r?"":y:"",paddingTop:x,paddingBottom:x}:{marginRight:w?"space-between"===n&&r===b?"":y:r!==b?h:"",marginLeft:w?"space-between"===n&&0===r?"":y:"",paddingTop:x,paddingBottom:x}]},t))):g)}}))}}}));
