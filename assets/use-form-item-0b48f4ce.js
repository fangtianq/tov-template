import{b as c,f,u as z}from"./constants-aa97fbe0.js";import{Y as b,g as t,f as r,ci as y,e as n,p as m,I as F,C as h,t as w,aQ as _}from"./index-dc3531f8.js";const I=o=>{const s=b();return t(()=>{var u,l;return(l=(u=s==null?void 0:s.proxy)==null?void 0:u.$props)==null?void 0:l[o]})},S=(o,s={})=>{const u=r(void 0),l=s.prop?u:I("size"),e=s.global?u:y(),i=s.form?{size:void 0}:n(c,void 0),a=s.formItem?{size:void 0}:n(f,void 0);return t(()=>l.value||m(o)||(a==null?void 0:a.size)||(i==null?void 0:i.size)||e.value||"")},U=o=>{const s=I("disabled"),u=n(c,void 0);return t(()=>s.value||m(o)||(u==null?void 0:u.disabled)||!1)},j=()=>{const o=n(c,void 0),s=n(f,void 0);return{form:o,formItem:s}},B=(o,{formItemContext:s,disableIdGeneration:u,disableIdManagement:l})=>{u||(u=r(!1)),l||(l=r(!1));const e=r();let i;const a=t(()=>{var v;return!!(!o.label&&s&&s.inputIds&&((v=s.inputIds)==null?void 0:v.length)<=1)});return F(()=>{i=h([w(o,"id"),u],([v,p])=>{const d=v!=null?v:p?void 0:z().value;d!==e.value&&(s!=null&&s.removeInputId&&(e.value&&s.removeInputId(e.value),!(l!=null&&l.value)&&!p&&d&&s.addInputId(d)),e.value=d)},{immediate:!0})}),_(()=>{i&&i(),s!=null&&s.removeInputId&&e.value&&s.removeInputId(e.value)}),{isLabeledByFormItem:a,inputId:e}};export{S as a,B as b,U as c,j as u};
