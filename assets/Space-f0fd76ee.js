import{u as G,f as C,l as R,m as j,o as E,p as S}from"./use-rtl-005adc7e.js";import{A as L,F as M,b5 as T,d as _,f as v,l as w}from"./index-01622320.js";function F(t,n="default",r=[]){const l=t.$slots[n];return l===void 0?r:l()}function h(t,n=!0,r=[]){return t.forEach(e=>{if(e!==null){if(typeof e!="object"){(typeof e=="string"||typeof e=="number")&&r.push(L(String(e)));return}if(Array.isArray(e)){h(e,n,r);return}if(e.type===M){if(e.children===null)return;Array.isArray(e.children)&&h(e.children,n,r)}else e.type!==T&&r.push(e)}}),r}const I=typeof document<"u"&&typeof window<"u",P={gapSmall:"4px 8px",gapMedium:"8px 12px",gapLarge:"12px 16px"},O=()=>P,V={name:"Space",self:O},W=V;let y;const D=()=>{if(!I)return!0;if(y===void 0){const t=document.createElement("div");t.style.display="flex",t.style.flexDirection="column",t.style.rowGap="1px",t.appendChild(document.createElement("div")),t.appendChild(document.createElement("div")),document.body.appendChild(t);const n=t.scrollHeight===1;return document.body.removeChild(t),y=n}return y},H=Object.assign(Object.assign({},C.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,size:{type:[String,Number,Array],default:"medium"},wrapItem:{type:Boolean,default:!0},itemClass:String,itemStyle:[String,Object],wrap:{type:Boolean,default:!0},internalUseGap:{type:Boolean,default:void 0}}),K=_({name:"Space",props:H,setup(t){const{mergedClsPrefixRef:n,mergedRtlRef:r}=G(t),e=C("Space","-space",void 0,W,t,n),l=R("Space",r,n);return{useGap:D(),rtlEnabled:l,mergedClsPrefix:n,margin:v(()=>{const{size:a}=t;if(Array.isArray(a))return{horizontal:a[0],vertical:a[1]};if(typeof a=="number")return{horizontal:a,vertical:a};const{self:{[j("gap",a)]:i}}=e.value,{row:g,col:u}=E(i);return{horizontal:S(u),vertical:S(g)}})}},render(){const{vertical:t,align:n,inline:r,justify:e,itemClass:l,itemStyle:a,margin:i,wrap:g,mergedClsPrefix:u,rtlEnabled:x,useGap:p,wrapItem:$,internalUseGap:z}=this,f=h(F(this));if(!f.length)return null;const b="".concat(i.horizontal,"px"),m="".concat(i.horizontal/2,"px"),B="".concat(i.vertical,"px"),o="".concat(i.vertical/2,"px"),c=f.length-1,d=e.startsWith("space-");return w("div",{role:"none",class:["".concat(u,"-space"),x&&"".concat(u,"-space--rtl")],style:{display:r?"inline-flex":"flex",flexDirection:t?"column":"row",justifyContent:["start","end"].includes(e)?"flex-"+e:e,flexWrap:!g||t?"nowrap":"wrap",marginTop:p||t?"":"-".concat(o),marginBottom:p||t?"":"-".concat(o),alignItems:n,gap:p?"".concat(i.vertical,"px ").concat(i.horizontal,"px"):""}},!$&&(p||z)?f:f.map((A,s)=>w("div",{role:"none",class:l,style:[a,{maxWidth:"100%"},p?"":t?{marginBottom:s!==c?B:""}:x?{marginLeft:d?e==="space-between"&&s===c?"":m:s!==c?b:"",marginRight:d?e==="space-between"&&s===0?"":m:"",paddingTop:o,paddingBottom:o}:{marginRight:d?e==="space-between"&&s===c?"":m:s!==c?b:"",marginLeft:d?e==="space-between"&&s===0?"":m:"",paddingTop:o,paddingBottom:o}]},A)))}});export{K as _,h as f,I as i,W as s};
