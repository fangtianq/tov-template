import{b as c,f,u as z}from"./constants-0b468837.js";import{k as b,g as t,n as r,bS as y,l as a,a4 as m,x as F,t as h,O as w,as as S}from"./index-08a94d7c.js";const I=o=>{const s=b();return t(()=>{var u,l;return(l=(u=s==null?void 0:s.proxy)==null?void 0:u.$props)==null?void 0:l[o]})},R=(o,s={})=>{const u=r(void 0),l=s.prop?u:I("size"),e=s.global?u:y(),n=s.form?{size:void 0}:a(c,void 0),i=s.formItem?{size:void 0}:a(f,void 0);return t(()=>l.value||m(o)||(i==null?void 0:i.size)||(n==null?void 0:n.size)||e.value||"")},U=o=>{const s=I("disabled"),u=a(c,void 0);return t(()=>s.value||m(o)||(u==null?void 0:u.disabled)||!1)},j=()=>{const o=a(c,void 0),s=a(f,void 0);return{form:o,formItem:s}},k=(o,{formItemContext:s,disableIdGeneration:u,disableIdManagement:l})=>{u||(u=r(!1)),l||(l=r(!1));const e=r();let n;const i=t(()=>{var v;return!!(!o.label&&s&&s.inputIds&&((v=s.inputIds)==null?void 0:v.length)<=1)});return F(()=>{n=h([w(o,"id"),u],([v,p])=>{const d=v!=null?v:p?void 0:z().value;d!==e.value&&(s!=null&&s.removeInputId&&(e.value&&s.removeInputId(e.value),!(l!=null&&l.value)&&!p&&d&&s.addInputId(d)),e.value=d)},{immediate:!0})}),S(()=>{n&&n(),s!=null&&s.removeInputId&&e.value&&s.removeInputId(e.value)}),{isLabeledByFormItem:i,inputId:e}};export{R as a,k as b,U as c,j as u};
