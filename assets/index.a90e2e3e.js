import{u as p}from"./index.20bed6b0.js";import{P as c,aS as t,a2 as f,m as n,c as I,o as m,A as h,a7 as w,ao as y}from"./index.76f65fa7.js";const U=()=>{const s=c(t,void 0),u=c(f,void 0);return{form:s,formItem:u}},j=(s,{formItemContext:u,disableIdGeneration:d,disableIdManagement:l})=>{d||(d=n(!1)),l||(l=n(!1));const v=n();let i;const r=I(()=>{var a;return!!(!s.label&&u&&u.inputIds&&((a=u.inputIds)==null?void 0:a.length)<=1)});return m(()=>{i=h([w(s,"id"),d],([a,e])=>{const o=a!=null?a:e?void 0:p().value;o!==v.value&&(u!=null&&u.removeInputId&&(v.value&&u.removeInputId(v.value),!(l!=null&&l.value)&&!e&&o&&u.addInputId(o)),v.value=o)},{immediate:!0})}),y(()=>{i&&i(),u!=null&&u.removeInputId&&v.value&&u.removeInputId(v.value)}),{isLabeledByFormItem:r,inputId:v}};export{j as a,U as u};