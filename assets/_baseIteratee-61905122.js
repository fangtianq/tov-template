import{S as _,b as p,c as I}from"./_Uint8Array-e8c8a997.js";import{b as m}from"./_baseIsEqual-8f5e917d.js";import{b_ as L,c6 as M,c7 as h,c8 as d,c4 as P,c9 as O,bL as C,ca as c}from"./index-08a94d7c.js";import{k as w}from"./_getTag-eacb9242.js";import{i as y}from"./identity-46f208ab.js";var D=1,G=2;function x(n,r,i,t){var e=i.length,u=e,s=!t;if(n==null)return!u;for(n=Object(n);e--;){var f=i[e];if(s&&f[2]?f[1]!==n[f[0]]:!(f[0]in n))return!1}for(;++e<u;){f=i[e];var a=f[0],l=n[a],A=f[1];if(s&&f[2]){if(l===void 0&&!(a in n))return!1}else{var o=new _;if(t)var g=t(l,A,a,n,r,o);if(!(g===void 0?m(A,l,D|G,t,o):g))return!1}}return!0}function R(n){return n===n&&!L(n)}function F(n){for(var r=w(n),i=r.length;i--;){var t=r[i],e=n[t];r[i]=[t,e,R(e)]}return r}function E(n,r){return function(i){return i==null?!1:i[n]===r&&(r!==void 0||n in Object(i))}}function S(n){var r=F(n);return r.length==1&&r[0][2]?E(r[0][0],r[0][1]):function(i){return i===n||x(i,n,r)}}function v(n,r){return n!=null&&r in Object(n)}function K(n,r,i){r=M(r,n);for(var t=-1,e=r.length,u=!1;++t<e;){var s=h(r[t]);if(!(u=n!=null&&i(n,s)))break;n=n[s]}return u||++t!=e?u:(e=n==null?0:n.length,!!e&&p(e)&&d(s,e)&&(P(n)||I(n)))}function N(n,r){return n!=null&&K(n,r,v)}var T=1,U=2;function $(n,r){return O(n)&&R(r)?E(h(n),r):function(i){var t=C(i,n);return t===void 0&&t===r?N(i,n):m(r,t,T|U)}}function q(n){return function(r){return r==null?void 0:r[n]}}function H(n){return function(r){return c(r,n)}}function B(n){return O(n)?q(h(n)):H(n)}function Z(n){return typeof n=="function"?n:n==null?y:typeof n=="object"?P(n)?$(n[0],n[1]):S(n):B(n)}export{Z as b,N as h};
