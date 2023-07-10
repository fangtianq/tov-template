import{ar as Nn,u as An,L as ot,i as Tn,F as _n,V as ne,o as te,l as at,e as mt,p as En,C as rt,Z as ye,a0 as ct,ad as lt,af as xn,as as Cn,am as dt,a as vn,z as Ln,aa as Rn,P as Ge,_ as In,at as bt,j as Mn,k as Sn,D as gt,H as Gn,au as ae,Y as ut,Q as jn,m as Se,a1 as On,x as ft,J as qn,c as Pn,N as Bn,K as Hn,R as xe,a7 as ht,$ as Un,W as zn,ap as Fn,d as Vn,aq as Dn,av as Kn}from"./stats.module-ba0ebf37.js";import{d as Jn,I as Wn,j as Yn,x as Xn}from"./index-dc3531f8.js";class pt extends Nn{constructor(H){super(H)}parse(H){function X(h){switch(h.image_type){case se:case V:h.colormap_length>256||h.colormap_size!==24||h.colormap_type;break;case U:case F:case ie:case oe:h.colormap_type;break;case pe:default:h.image_type}h.width<=0||h.height<=0,h.pixel_size!==8&&h.pixel_size!==16&&h.pixel_size!==24&&h.pixel_size!==32&&h.pixel_size}function j(h,P,M,L,B){let C,R;const A=M.pixel_size>>3,N=M.width*M.height*A;if(P&&(R=B.subarray(L,L+=M.colormap_length*(M.colormap_size>>3))),h){C=new Uint8Array(N);let y,u,k,S=0;const Y=new Uint8Array(A);for(;S<N;)if(y=B[L++],u=(y&127)+1,y&128){for(k=0;k<A;++k)Y[k]=B[L++];for(k=0;k<u;++k)C.set(Y,S+k*A);S+=A*u}else{for(u*=A,k=0;k<u;++k)C[S+k]=B[L++];S+=u}}else C=B.subarray(L,L+=P?M.width*M.height:N);return{pixel_data:C,palettes:R}}function Q(h,P,M,L,B,C,R,A,N){const y=N;let u,k=0,S,Y;const de=q.width;for(Y=P;Y!==L;Y+=M)for(S=B;S!==R;S+=C,k++)u=A[k],h[(S+de*Y)*4+3]=255,h[(S+de*Y)*4+2]=y[u*3+0],h[(S+de*Y)*4+1]=y[u*3+1],h[(S+de*Y)*4+0]=y[u*3+2];return h}function T(h,P,M,L,B,C,R,A){let N,y=0,u,k;const S=q.width;for(k=P;k!==L;k+=M)for(u=B;u!==R;u+=C,y+=2)N=A[y+0]+(A[y+1]<<8),h[(u+S*k)*4+0]=(N&31744)>>7,h[(u+S*k)*4+1]=(N&992)>>2,h[(u+S*k)*4+2]=(N&31)<<3,h[(u+S*k)*4+3]=N&32768?0:255;return h}function K(h,P,M,L,B,C,R,A){let N=0,y,u;const k=q.width;for(u=P;u!==L;u+=M)for(y=B;y!==R;y+=C,N+=3)h[(y+k*u)*4+3]=255,h[(y+k*u)*4+2]=A[N+0],h[(y+k*u)*4+1]=A[N+1],h[(y+k*u)*4+0]=A[N+2];return h}function _(h,P,M,L,B,C,R,A){let N=0,y,u;const k=q.width;for(u=P;u!==L;u+=M)for(y=B;y!==R;y+=C,N+=4)h[(y+k*u)*4+2]=A[N+0],h[(y+k*u)*4+1]=A[N+1],h[(y+k*u)*4+0]=A[N+2],h[(y+k*u)*4+3]=A[N+3];return h}function $(h,P,M,L,B,C,R,A){let N,y=0,u,k;const S=q.width;for(k=P;k!==L;k+=M)for(u=B;u!==R;u+=C,y++)N=A[y],h[(u+S*k)*4+0]=N,h[(u+S*k)*4+1]=N,h[(u+S*k)*4+2]=N,h[(u+S*k)*4+3]=255;return h}function D(h,P,M,L,B,C,R,A){let N=0,y,u;const k=q.width;for(u=P;u!==L;u+=M)for(y=B;y!==R;y+=C,N+=2)h[(y+k*u)*4+0]=A[N+0],h[(y+k*u)*4+1]=A[N+0],h[(y+k*u)*4+2]=A[N+0],h[(y+k*u)*4+3]=A[N+1];return h}function re(h,P,M,L,B){let C,R,A,N,y,u;switch((q.flags&me)>>ke){default:case ve:C=0,A=1,y=P,R=0,N=1,u=M;break;case we:C=0,A=1,y=P,R=M-1,N=-1,u=-1;break;case ce:C=P-1,A=-1,y=-1,R=0,N=1,u=M;break;case Ce:C=P-1,A=-1,y=-1,R=M-1,N=-1,u=-1;break}if(ge)switch(q.pixel_size){case 8:$(h,R,N,u,C,A,y,L);break;case 16:D(h,R,N,u,C,A,y,L);break;default:break}else switch(q.pixel_size){case 8:Q(h,R,N,u,C,A,y,L,B);break;case 16:T(h,R,N,u,C,A,y,L);break;case 24:K(h,R,N,u,C,A,y,L);break;case 32:_(h,R,N,u,C,A,y,L);break;default:break}return h}const pe=0,se=1,U=2,F=3,V=9,ie=10,oe=11,me=48,ke=4,we=0,Ce=1,ve=2,ce=3;H.length<19;let I=0;const G=new Uint8Array(H),q={id_length:G[I++],colormap_type:G[I++],image_type:G[I++],colormap_index:G[I++]|G[I++]<<8,colormap_length:G[I++]|G[I++]<<8,colormap_size:G[I++],origin:[G[I++]|G[I++]<<8,G[I++]|G[I++]<<8],width:G[I++]|G[I++]<<8,height:G[I++]|G[I++]<<8,pixel_size:G[I++],flags:G[I++]};X(q),q.id_length+I>H.length,I+=q.id_length;let le=!1,be=!1,ge=!1;switch(q.image_type){case V:le=!0,be=!0;break;case se:be=!0;break;case ie:le=!0;break;case U:break;case oe:le=!0,ge=!0;break;case F:ge=!0;break}const Ne=new Uint8Array(q.width*q.height*4),Ae=j(le,be,q,I,G);return re(Ne,q.width,q.height,Ae.pixel_data,Ae.palettes),{data:Ne,width:q.width,height:q.height,flipY:!0,generateMipmaps:!0,minFilter:An}}}class Zn extends ot{constructor(H){super(H)}load(H,X,j,Q){const T=this,K=T.path===""?Tn.extractUrlBase(H):T.path,_=new _n(T.manager);_.setPath(T.path),_.setRequestHeader(T.requestHeader),_.setWithCredentials(T.withCredentials),_.load(H,function($){try{X(T.parse($,K))}catch(D){Q&&Q(D),T.manager.itemError(H)}},j,Q)}parse(H,X){function j(t,e){const s=[],n=t.childNodes;for(let i=0,o=n.length;i<o;i++){const a=n[i];a.nodeName===e&&s.push(a)}return s}function Q(t){if(t.length===0)return[];const e=t.trim().split(/\s+/),s=new Array(e.length);for(let n=0,i=e.length;n<i;n++)s[n]=e[n];return s}function T(t){if(t.length===0)return[];const e=t.trim().split(/\s+/),s=new Array(e.length);for(let n=0,i=e.length;n<i;n++)s[n]=parseFloat(e[n]);return s}function K(t){if(t.length===0)return[];const e=t.trim().split(/\s+/),s=new Array(e.length);for(let n=0,i=e.length;n<i;n++)s[n]=parseInt(e[n]);return s}function _(t){return t.substring(1)}function $(){return"three_default_"+kn++}function D(t){return Object.keys(t).length===0}function re(t){return{unit:pe(j(t,"unit")[0]),upAxis:se(j(t,"up_axis")[0])}}function pe(t){return t!==void 0&&t.hasAttribute("meter")===!0?parseFloat(t.getAttribute("meter")):1}function se(t){return t!==void 0?t.textContent:"Y_UP"}function U(t,e,s,n){const i=j(t,e)[0];if(i!==void 0){const o=j(i,s);for(let a=0;a<o.length;a++)n(o[a])}}function F(t,e){for(const s in t){const n=t[s];n.build=e(t[s])}}function V(t,e){return t.build!==void 0||(t.build=e(t)),t.build}function ie(t){const e={sources:{},samplers:{},channels:{}};let s=!1;for(let n=0,i=t.childNodes.length;n<i;n++){const o=t.childNodes[n];if(o.nodeType!==1)continue;let a;switch(o.nodeName){case"source":a=o.getAttribute("id"),e.sources[a]=Le(o);break;case"sampler":a=o.getAttribute("id"),e.samplers[a]=oe(o);break;case"channel":a=o.getAttribute("target"),e.channels[a]=me(o);break;case"animation":ie(o),s=!0;break;default:}}s===!1&&(w.animations[t.getAttribute("id")||ye.generateUUID()]=e)}function oe(t){const e={inputs:{}};for(let s=0,n=t.childNodes.length;s<n;s++){const i=t.childNodes[s];if(i.nodeType===1)switch(i.nodeName){case"input":const o=_(i.getAttribute("source")),a=i.getAttribute("semantic");e.inputs[a]=o;break}}return e}function me(t){const e={};let n=t.getAttribute("target").split("/");const i=n.shift();let o=n.shift();const a=o.indexOf("(")!==-1,d=o.indexOf(".")!==-1;if(d)n=o.split("."),o=n.shift(),e.member=n.shift();else if(a){const c=o.split("(");o=c.shift();for(let l=0;l<c.length;l++)c[l]=parseInt(c[l].replace(/\)/,""));e.indices=c}return e.id=i,e.sid=o,e.arraySyntax=a,e.memberSyntax=d,e.sampler=_(t.getAttribute("source")),e}function ke(t){const e=[],s=t.channels,n=t.samplers,i=t.sources;for(const o in s)if(s.hasOwnProperty(o)){const a=s[o],d=n[a.sampler],c=d.inputs.INPUT,l=d.inputs.OUTPUT,m=i[c],r=i[l],p=Ce(a,m,r);q(p,e)}return e}function we(t){return V(w.animations[t],ke)}function Ce(t,e,s){const n=w.nodes[t.id],i=fe(n.id),o=n.transforms[t.sid],a=n.matrix.clone().transpose();let d,c,l,m,r,p;const f={};switch(o){case"matrix":for(l=0,m=e.array.length;l<m;l++)if(d=e.array[l],c=l*s.stride,f[d]===void 0&&(f[d]={}),t.arraySyntax===!0){const O=s.array[c],v=t.indices[0]+4*t.indices[1];f[d][v]=O}else for(r=0,p=s.stride;r<p;r++)f[d][r]=s.array[c+r];break;case"translate":break;case"rotate":break;case"scale":break}const g=ve(f,a);return{name:i.uuid,keyframes:g}}function ve(t,e){const s=[];for(const i in t)s.push({time:parseFloat(i),value:t[i]});s.sort(n);for(let i=0;i<16;i++)le(s,i,e.elements[i]);return s;function n(i,o){return i.time-o.time}}const ce=new ne,I=new ne,G=new jn;function q(t,e){const s=t.keyframes,n=t.name,i=[],o=[],a=[],d=[];for(let c=0,l=s.length;c<l;c++){const m=s[c],r=m.time,p=m.value;W.fromArray(p).transpose(),W.decompose(ce,G,I),i.push(r),o.push(ce.x,ce.y,ce.z),a.push(G.x,G.y,G.z,G.w),d.push(I.x,I.y,I.z)}return o.length>0&&e.push(new lt(n+".position",i,o)),a.length>0&&e.push(new xn(n+".quaternion",i,a)),d.length>0&&e.push(new lt(n+".scale",i,d)),e}function le(t,e,s){let n,i=!0,o,a;for(o=0,a=t.length;o<a;o++)n=t[o],n.value[e]===void 0?n.value[e]=null:i=!1;if(i===!0)for(o=0,a=t.length;o<a;o++)n=t[o],n.value[e]=s;else be(t,e)}function be(t,e){let s,n;for(let i=0,o=t.length;i<o;i++){const a=t[i];if(a.value[e]===null){if(s=ge(t,i,e),n=Ne(t,i,e),s===null){a.value[e]=n.value[e];continue}if(n===null){a.value[e]=s.value[e];continue}Ae(a,s,n,e)}}}function ge(t,e,s){for(;e>=0;){const n=t[e];if(n.value[s]!==null)return n;e--}return null}function Ne(t,e,s){for(;e<t.length;){const n=t[e];if(n.value[s]!==null)return n;e++}return null}function Ae(t,e,s,n){if(s.time-e.time===0){t.value[n]=e.value[n];return}t.value[n]=(t.time-e.time)*(s.value[n]-e.value[n])/(s.time-e.time)+e.value[n]}function h(t){const e={name:t.getAttribute("id")||"default",start:parseFloat(t.getAttribute("start")||0),end:parseFloat(t.getAttribute("end")||0),animations:[]};for(let s=0,n=t.childNodes.length;s<n;s++){const i=t.childNodes[s];if(i.nodeType===1)switch(i.nodeName){case"instance_animation":e.animations.push(_(i.getAttribute("url")));break}}w.clips[t.getAttribute("id")]=e}function P(t){const e=[],s=t.name,n=t.end-t.start||-1,i=t.animations;for(let o=0,a=i.length;o<a;o++){const d=we(i[o]);for(let c=0,l=d.length;c<l;c++)e.push(d[c])}return new ct(s,n,e)}function M(t){return V(w.clips[t],P)}function L(t){const e={};for(let s=0,n=t.childNodes.length;s<n;s++){const i=t.childNodes[s];if(i.nodeType===1)switch(i.nodeName){case"skin":e.id=_(i.getAttribute("source")),e.skin=B(i);break;case"morph":e.id=_(i.getAttribute("source"));break}}w.controllers[t.getAttribute("id")]=e}function B(t){const e={sources:{}};for(let s=0,n=t.childNodes.length;s<n;s++){const i=t.childNodes[s];if(i.nodeType===1)switch(i.nodeName){case"bind_shape_matrix":e.bindShapeMatrix=T(i.textContent);break;case"source":const o=i.getAttribute("id");e.sources[o]=Le(i);break;case"joints":e.joints=C(i);break;case"vertex_weights":e.vertexWeights=R(i);break}}return e}function C(t){const e={inputs:{}};for(let s=0,n=t.childNodes.length;s<n;s++){const i=t.childNodes[s];if(i.nodeType===1)switch(i.nodeName){case"input":const o=i.getAttribute("semantic"),a=_(i.getAttribute("source"));e.inputs[o]=a;break}}return e}function R(t){const e={inputs:{}};for(let s=0,n=t.childNodes.length;s<n;s++){const i=t.childNodes[s];if(i.nodeType===1)switch(i.nodeName){case"input":const o=i.getAttribute("semantic"),a=_(i.getAttribute("source")),d=parseInt(i.getAttribute("offset"));e.inputs[o]={id:a,offset:d};break;case"vcount":e.vcount=K(i.textContent);break;case"v":e.v=K(i.textContent);break}}return e}function A(t){const e={id:t.id},s=w.geometries[e.id];return t.skin!==void 0&&(e.skin=N(t.skin),s.sources.skinIndices=e.skin.indices,s.sources.skinWeights=e.skin.weights),e}function N(t){const s={joints:[],indices:{array:[],stride:4},weights:{array:[],stride:4}},n=t.sources,i=t.vertexWeights,o=i.vcount,a=i.v,d=i.inputs.JOINT.offset,c=i.inputs.WEIGHT.offset,l=t.sources[t.joints.inputs.JOINT],m=t.sources[t.joints.inputs.INV_BIND_MATRIX],r=n[i.inputs.WEIGHT.id].array;let p=0,f,g,b;for(f=0,b=o.length;f<b;f++){const v=o[f],E=[];for(g=0;g<v;g++){const x=a[p+d],ee=a[p+c],J=r[ee];E.push({index:x,weight:J}),p+=2}for(E.sort(O),g=0;g<4;g++){const x=E[g];x!==void 0?(s.indices.array.push(x.index),s.weights.array.push(x.weight)):(s.indices.array.push(0),s.weights.array.push(0))}}for(t.bindShapeMatrix?s.bindMatrix=new te().fromArray(t.bindShapeMatrix).transpose():s.bindMatrix=new te().identity(),f=0,b=l.array.length;f<b;f++){const v=l.array[f],E=new te().fromArray(m.array,f*m.stride).transpose();s.joints.push({name:v,boneInverse:E})}return s;function O(v,E){return E.weight-v.weight}}function y(t){return V(w.controllers[t],A)}function u(t){const e={init_from:j(t,"init_from")[0].textContent};w.images[t.getAttribute("id")]=e}function k(t){return t.build!==void 0?t.build:t.init_from}function S(t){const e=w.images[t];return e!==void 0?V(e,k):null}function Y(t){const e={};for(let s=0,n=t.childNodes.length;s<n;s++){const i=t.childNodes[s];if(i.nodeType===1)switch(i.nodeName){case"profile_COMMON":e.profile=de(i);break}}w.effects[t.getAttribute("id")]=e}function de(t){const e={surfaces:{},samplers:{}};for(let s=0,n=t.childNodes.length;s<n;s++){const i=t.childNodes[s];if(i.nodeType===1)switch(i.nodeName){case"newparam":yt(i,e);break;case"technique":e.technique=Nt(i);break;case"extra":e.extra=Pe(i);break}}return e}function yt(t,e){const s=t.getAttribute("sid");for(let n=0,i=t.childNodes.length;n<i;n++){const o=t.childNodes[n];if(o.nodeType===1)switch(o.nodeName){case"surface":e.surfaces[s]=kt(o);break;case"sampler2D":e.samplers[s]=wt(o);break}}}function kt(t){const e={};for(let s=0,n=t.childNodes.length;s<n;s++){const i=t.childNodes[s];if(i.nodeType===1)switch(i.nodeName){case"init_from":e.init_from=i.textContent;break}}return e}function wt(t){const e={};for(let s=0,n=t.childNodes.length;s<n;s++){const i=t.childNodes[s];if(i.nodeType===1)switch(i.nodeName){case"source":e.source=i.textContent;break}}return e}function Nt(t){const e={};for(let s=0,n=t.childNodes.length;s<n;s++){const i=t.childNodes[s];if(i.nodeType===1)switch(i.nodeName){case"constant":case"lambert":case"blinn":case"phong":e.type=i.nodeName,e.parameters=At(i);break;case"extra":e.extra=Pe(i);break}}return e}function At(t){const e={};for(let s=0,n=t.childNodes.length;s<n;s++){const i=t.childNodes[s];if(i.nodeType===1)switch(i.nodeName){case"emission":case"diffuse":case"specular":case"bump":case"ambient":case"shininess":case"transparency":e[i.nodeName]=Oe(i);break;case"transparent":e[i.nodeName]={opaque:i.hasAttribute("opaque")?i.getAttribute("opaque"):"A_ONE",data:Oe(i)};break}}return e}function Oe(t){const e={};for(let s=0,n=t.childNodes.length;s<n;s++){const i=t.childNodes[s];if(i.nodeType===1)switch(i.nodeName){case"color":e[i.nodeName]=T(i.textContent);break;case"float":e[i.nodeName]=parseFloat(i.textContent);break;case"texture":e[i.nodeName]={id:i.getAttribute("texture"),extra:qe(i)};break}}return e}function qe(t){const e={technique:{}};for(let s=0,n=t.childNodes.length;s<n;s++){const i=t.childNodes[s];if(i.nodeType===1)switch(i.nodeName){case"extra":Tt(i,e);break}}return e}function Tt(t,e){for(let s=0,n=t.childNodes.length;s<n;s++){const i=t.childNodes[s];if(i.nodeType===1)switch(i.nodeName){case"technique":_t(i,e);break}}}function _t(t,e){for(let s=0,n=t.childNodes.length;s<n;s++){const i=t.childNodes[s];if(i.nodeType===1)switch(i.nodeName){case"repeatU":case"repeatV":case"offsetU":case"offsetV":e.technique[i.nodeName]=parseFloat(i.textContent);break;case"wrapU":case"wrapV":i.textContent.toUpperCase()==="TRUE"?e.technique[i.nodeName]=1:i.textContent.toUpperCase()==="FALSE"?e.technique[i.nodeName]=0:e.technique[i.nodeName]=parseInt(i.textContent);break;case"bump":e[i.nodeName]=Be(i);break}}}function Pe(t){const e={};for(let s=0,n=t.childNodes.length;s<n;s++){const i=t.childNodes[s];if(i.nodeType===1)switch(i.nodeName){case"technique":e.technique=Et(i);break}}return e}function Et(t){const e={};for(let s=0,n=t.childNodes.length;s<n;s++){const i=t.childNodes[s];if(i.nodeType===1)switch(i.nodeName){case"double_sided":e[i.nodeName]=parseInt(i.textContent);break;case"bump":e[i.nodeName]=Be(i);break}}return e}function Be(t){const e={};for(let s=0,n=t.childNodes.length;s<n;s++){const i=t.childNodes[s];if(i.nodeType===1)switch(i.nodeName){case"texture":e[i.nodeName]={id:i.getAttribute("texture"),texcoord:i.getAttribute("texcoord"),extra:qe(i)};break}}return e}function He(t){return t}function xt(t){return V(w.effects[t],He)}function Ct(t){const e={name:t.getAttribute("name")};for(let s=0,n=t.childNodes.length;s<n;s++){const i=t.childNodes[s];if(i.nodeType===1)switch(i.nodeName){case"instance_effect":e.url=_(i.getAttribute("url"));break}}w.materials[t.getAttribute("id")]=e}function vt(t){let e,s=t.slice((t.lastIndexOf(".")-1>>>0)+2);switch(s=s.toLowerCase(),s){case"tga":e=Me;break;default:e=nt}return e}function Ue(t){const e=xt(t.url),s=e.profile.technique;let n;switch(s.type){case"phong":case"blinn":n=new dt;break;case"lambert":n=new Cn;break;default:n=new at;break}n.name=t.name||"";function i(c,l=null){const m=e.profile.samplers[c.id];let r=null;if(m!==void 0){const p=e.profile.surfaces[m.source];r=S(p.init_from)}else r=S(c.id);if(r!==null){const p=vt(r);if(p!==void 0){const f=p.load(r),g=c.extra;if(g!==void 0&&g.technique!==void 0&&D(g.technique)===!1){const b=g.technique;f.wrapS=b.wrapU?xe:ht,f.wrapT=b.wrapV?xe:ht,f.offset.set(b.offsetU||0,b.offsetV||0),f.repeat.set(b.repeatU||1,b.repeatV||1)}else f.wrapS=xe,f.wrapT=xe;return l!==null&&(f.colorSpace=l),f}else return null}else return c.id,null}const o=s.parameters;for(const c in o){const l=o[c];switch(c){case"diffuse":l.color&&n.color.fromArray(l.color),l.texture&&(n.map=i(l.texture,Se));break;case"specular":l.color&&n.specular&&n.specular.fromArray(l.color),l.texture&&(n.specularMap=i(l.texture));break;case"bump":l.texture&&(n.normalMap=i(l.texture));break;case"ambient":l.texture&&(n.lightMap=i(l.texture,Se));break;case"shininess":l.float&&n.shininess&&(n.shininess=l.float);break;case"emission":l.color&&n.emissive&&n.emissive.fromArray(l.color),l.texture&&(n.emissiveMap=i(l.texture,Se));break}}n.color.convertSRGBToLinear(),n.specular&&n.specular.convertSRGBToLinear(),n.emissive&&n.emissive.convertSRGBToLinear();let a=o.transparent,d=o.transparency;if(d===void 0&&a&&(d={float:1}),a===void 0&&d&&(a={opaque:"A_ONE",data:{color:[1,1,1,1]}}),a&&d)if(a.data.texture)n.transparent=!0;else{const c=a.data.color;switch(a.opaque){case"A_ONE":n.opacity=c[3]*d.float;break;case"RGB_ZERO":n.opacity=1-c[0]*d.float;break;case"A_ZERO":n.opacity=1-c[3]*d.float;break;case"RGB_ONE":n.opacity=c[0]*d.float;break;default:a.opaque}n.opacity<1&&(n.transparent=!0)}if(s.extra!==void 0&&s.extra.technique!==void 0){const c=s.extra.technique;for(const l in c){const m=c[l];switch(l){case"double_sided":n.side=m===1?Ln:Rn;break;case"bump":n.normalMap=i(m.texture),n.normalScale=new vn(1,1);break}}}return n}function Lt(t){return V(w.materials[t],Ue)}function Rt(t){const e={name:t.getAttribute("name")};for(let s=0,n=t.childNodes.length;s<n;s++){const i=t.childNodes[s];if(i.nodeType===1)switch(i.nodeName){case"optics":e.optics=It(i);break}}w.cameras[t.getAttribute("id")]=e}function It(t){for(let e=0;e<t.childNodes.length;e++){const s=t.childNodes[e];switch(s.nodeName){case"technique_common":return Mt(s)}}return{}}function Mt(t){const e={};for(let s=0;s<t.childNodes.length;s++){const n=t.childNodes[s];switch(n.nodeName){case"perspective":case"orthographic":e.technique=n.nodeName,e.parameters=St(n);break}}return e}function St(t){const e={};for(let s=0;s<t.childNodes.length;s++){const n=t.childNodes[s];switch(n.nodeName){case"xfov":case"yfov":case"xmag":case"ymag":case"znear":case"zfar":case"aspect_ratio":e[n.nodeName]=parseFloat(n.textContent);break}}return e}function ze(t){let e;switch(t.optics.technique){case"perspective":e=new Ge(t.optics.parameters.yfov,t.optics.parameters.aspect_ratio,t.optics.parameters.znear,t.optics.parameters.zfar);break;case"orthographic":let s=t.optics.parameters.ymag,n=t.optics.parameters.xmag;const i=t.optics.parameters.aspect_ratio;n=n===void 0?s*i:n,s=s===void 0?n/i:s,n*=.5,s*=.5,e=new In(-n,n,s,-s,t.optics.parameters.znear,t.optics.parameters.zfar);break;default:e=new Ge;break}return e.name=t.name||"",e}function Gt(t){const e=w.cameras[t];return e!==void 0?V(e,ze):null}function jt(t){let e={};for(let s=0,n=t.childNodes.length;s<n;s++){const i=t.childNodes[s];if(i.nodeType===1)switch(i.nodeName){case"technique_common":e=Ot(i);break}}w.lights[t.getAttribute("id")]=e}function Ot(t){const e={};for(let s=0,n=t.childNodes.length;s<n;s++){const i=t.childNodes[s];if(i.nodeType===1)switch(i.nodeName){case"directional":case"point":case"spot":case"ambient":e.technique=i.nodeName,e.parameters=qt(i)}}return e}function qt(t){const e={};for(let s=0,n=t.childNodes.length;s<n;s++){const i=t.childNodes[s];if(i.nodeType===1)switch(i.nodeName){case"color":const o=T(i.textContent);e.color=new rt().fromArray(o).convertSRGBToLinear();break;case"falloff_angle":e.falloffAngle=parseFloat(i.textContent);break;case"quadratic_attenuation":const a=parseFloat(i.textContent);e.distance=a?Math.sqrt(1/a):0;break}}return e}function Fe(t){let e;switch(t.technique){case"directional":e=new gt;break;case"point":e=new Sn;break;case"spot":e=new Mn;break;case"ambient":e=new bt;break}return t.parameters.color&&e.color.copy(t.parameters.color),t.parameters.distance&&(e.distance=t.parameters.distance),e}function Pt(t){const e=w.lights[t];return e!==void 0?V(e,Fe):null}function Bt(t){const e={name:t.getAttribute("name"),sources:{},vertices:{},primitives:[]},s=j(t,"mesh")[0];if(s!==void 0){for(let n=0;n<s.childNodes.length;n++){const i=s.childNodes[n];if(i.nodeType!==1)continue;const o=i.getAttribute("id");switch(i.nodeName){case"source":e.sources[o]=Le(i);break;case"vertices":e.vertices=Ht(i);break;case"polygons":i.nodeName;break;case"lines":case"linestrips":case"polylist":case"triangles":e.primitives.push(Ut(i));break;default:}}w.geometries[t.getAttribute("id")]=e}}function Le(t){const e={array:[],stride:3};for(let s=0;s<t.childNodes.length;s++){const n=t.childNodes[s];if(n.nodeType===1)switch(n.nodeName){case"float_array":e.array=T(n.textContent);break;case"Name_array":e.array=Q(n.textContent);break;case"technique_common":const i=j(n,"accessor")[0];i!==void 0&&(e.stride=parseInt(i.getAttribute("stride")));break}}return e}function Ht(t){const e={};for(let s=0;s<t.childNodes.length;s++){const n=t.childNodes[s];n.nodeType===1&&(e[n.getAttribute("semantic")]=_(n.getAttribute("source")))}return e}function Ut(t){const e={type:t.nodeName,material:t.getAttribute("material"),count:parseInt(t.getAttribute("count")),inputs:{},stride:0,hasUV:!1};for(let s=0,n=t.childNodes.length;s<n;s++){const i=t.childNodes[s];if(i.nodeType===1)switch(i.nodeName){case"input":const o=_(i.getAttribute("source")),a=i.getAttribute("semantic"),d=parseInt(i.getAttribute("offset")),c=parseInt(i.getAttribute("set")),l=c>0?a+c:a;e.inputs[l]={id:o,offset:d},e.stride=Math.max(e.stride,d+1),a==="TEXCOORD"&&(e.hasUV=!0);break;case"vcount":e.vcount=K(i.textContent);break;case"p":e.p=K(i.textContent);break}}return e}function zt(t){const e={};for(let s=0;s<t.length;s++){const n=t[s];e[n.type]===void 0&&(e[n.type]=[]),e[n.type].push(n)}return e}function Ft(t){let e=0;for(let s=0,n=t.length;s<n;s++)t[s].hasUV===!0&&e++;e>0&&e<t.length&&(t.uvsNeedsFix=!0)}function Ve(t){const e={},s=t.sources,n=t.vertices,i=t.primitives;if(i.length===0)return{};const o=zt(i);for(const a in o){const d=o[a];Ft(d),e[a]=Vt(d,s,n)}return e}function Vt(t,e,s){const n={},i={array:[],stride:0},o={array:[],stride:0},a={array:[],stride:0},d={array:[],stride:0},c={array:[],stride:0},l={array:[],stride:4},m={array:[],stride:4},r=new Gn,p=[];let f=0;for(let g=0;g<t.length;g++){const b=t[g],O=b.inputs;let v=0;switch(b.type){case"lines":case"linestrips":v=b.count*2;break;case"triangles":v=b.count*3;break;case"polylist":for(let E=0;E<b.count;E++){const x=b.vcount[E];switch(x){case 3:v+=3;break;case 4:v+=6;break;default:v+=(x-2)*3;break}}break;default:b.type}r.addGroup(f,v,g),f+=v,b.material&&p.push(b.material);for(const E in O){const x=O[E];switch(E){case"VERTEX":for(const ee in s){const J=s[ee];switch(ee){case"POSITION":const he=i.array.length;if(Z(b,e[J],x.offset,i.array),i.stride=e[J].stride,e.skinWeights&&e.skinIndices&&(Z(b,e.skinIndices,x.offset,l.array),Z(b,e.skinWeights,x.offset,m.array)),b.hasUV===!1&&t.uvsNeedsFix===!0){const wn=(i.array.length-he)/i.stride;for(let it=0;it<wn;it++)a.array.push(0,0)}break;case"NORMAL":Z(b,e[J],x.offset,o.array),o.stride=e[J].stride;break;case"COLOR":Z(b,e[J],x.offset,c.array),c.stride=e[J].stride;break;case"TEXCOORD":Z(b,e[J],x.offset,a.array),a.stride=e[J].stride;break;case"TEXCOORD1":Z(b,e[J],x.offset,d.array),a.stride=e[J].stride;break;default:}}break;case"NORMAL":Z(b,e[x.id],x.offset,o.array),o.stride=e[x.id].stride;break;case"COLOR":Z(b,e[x.id],x.offset,c.array,!0),c.stride=e[x.id].stride;break;case"TEXCOORD":Z(b,e[x.id],x.offset,a.array),a.stride=e[x.id].stride;break;case"TEXCOORD1":Z(b,e[x.id],x.offset,d.array),d.stride=e[x.id].stride;break}}}return i.array.length>0&&r.setAttribute("position",new ae(i.array,i.stride)),o.array.length>0&&r.setAttribute("normal",new ae(o.array,o.stride)),c.array.length>0&&r.setAttribute("color",new ae(c.array,c.stride)),a.array.length>0&&r.setAttribute("uv",new ae(a.array,a.stride)),d.array.length>0&&r.setAttribute("uv1",new ae(d.array,d.stride)),l.array.length>0&&r.setAttribute("skinIndex",new ae(l.array,l.stride)),m.array.length>0&&r.setAttribute("skinWeight",new ae(m.array,m.stride)),n.data=r,n.type=t[0].type,n.materialKeys=p,n}function Z(t,e,s,n,i=!1){const o=t.p,a=t.stride,d=t.vcount;function c(r){let p=o[r+s]*m;const f=p+m;for(;p<f;p++)n.push(l[p]);if(i){const g=n.length-m-1;Te.setRGB(n[g+0],n[g+1],n[g+2]).convertSRGBToLinear(),n[g+0]=Te.r,n[g+1]=Te.g,n[g+2]=Te.b}}const l=e.array,m=e.stride;if(t.vcount!==void 0){let r=0;for(let p=0,f=d.length;p<f;p++){const g=d[p];if(g===4){const b=r+a*0,O=r+a*1,v=r+a*2,E=r+a*3;c(b),c(O),c(E),c(O),c(v),c(E)}else if(g===3){const b=r+a*0,O=r+a*1,v=r+a*2;c(b),c(O),c(v)}else if(g>4)for(let b=1,O=g-2;b<=O;b++){const v=r+a*0,E=r+a*b,x=r+a*(b+1);c(v),c(E),c(x)}r+=a*g}}else for(let r=0,p=o.length;r<p;r+=a)c(r)}function De(t){return V(w.geometries[t],Ve)}function Dt(t){const e={name:t.getAttribute("name")||"",joints:{},links:[]};for(let s=0;s<t.childNodes.length;s++){const n=t.childNodes[s];if(n.nodeType===1)switch(n.nodeName){case"technique_common":Wt(n,e);break}}w.kinematicsModels[t.getAttribute("id")]=e}function Kt(t){return t.build!==void 0?t.build:t}function Jt(t){return V(w.kinematicsModels[t],Kt)}function Wt(t,e){for(let s=0;s<t.childNodes.length;s++){const n=t.childNodes[s];if(n.nodeType===1)switch(n.nodeName){case"joint":e.joints[n.getAttribute("sid")]=Yt(n);break;case"link":e.links.push(Ke(n));break}}}function Yt(t){let e;for(let s=0;s<t.childNodes.length;s++){const n=t.childNodes[s];if(n.nodeType===1)switch(n.nodeName){case"prismatic":case"revolute":e=Xt(n);break}}return e}function Xt(t){const e={sid:t.getAttribute("sid"),name:t.getAttribute("name")||"",axis:new ne,limits:{min:0,max:0},type:t.nodeName,static:!1,zeroPosition:0,middlePosition:0};for(let s=0;s<t.childNodes.length;s++){const n=t.childNodes[s];if(n.nodeType===1)switch(n.nodeName){case"axis":const i=T(n.textContent);e.axis.fromArray(i);break;case"limits":const o=n.getElementsByTagName("max")[0],a=n.getElementsByTagName("min")[0];e.limits.max=parseFloat(o.textContent),e.limits.min=parseFloat(a.textContent);break}}return e.limits.min>=e.limits.max&&(e.static=!0),e.middlePosition=(e.limits.min+e.limits.max)/2,e}function Ke(t){const e={sid:t.getAttribute("sid"),name:t.getAttribute("name")||"",attachments:[],transforms:[]};for(let s=0;s<t.childNodes.length;s++){const n=t.childNodes[s];if(n.nodeType===1)switch(n.nodeName){case"attachment_full":e.attachments.push(Zt(n));break;case"matrix":case"translate":case"rotate":e.transforms.push(Je(n));break}}return e}function Zt(t){const e={joint:t.getAttribute("joint").split("/").pop(),transforms:[],links:[]};for(let s=0;s<t.childNodes.length;s++){const n=t.childNodes[s];if(n.nodeType===1)switch(n.nodeName){case"link":e.links.push(Ke(n));break;case"matrix":case"translate":case"rotate":e.transforms.push(Je(n));break}}return e}function Je(t){const e={type:t.nodeName},s=T(t.textContent);switch(e.type){case"matrix":e.obj=new te,e.obj.fromArray(s).transpose();break;case"translate":e.obj=new ne,e.obj.fromArray(s);break;case"rotate":e.obj=new ne,e.obj.fromArray(s),e.angle=ye.degToRad(s[3]);break}return e}function Qt(t){const e={name:t.getAttribute("name")||"",rigidBodies:{}};for(let s=0;s<t.childNodes.length;s++){const n=t.childNodes[s];if(n.nodeType===1)switch(n.nodeName){case"rigid_body":e.rigidBodies[n.getAttribute("name")]={},$t(n,e.rigidBodies[n.getAttribute("name")]);break}}w.physicsModels[t.getAttribute("id")]=e}function $t(t,e){for(let s=0;s<t.childNodes.length;s++){const n=t.childNodes[s];if(n.nodeType===1)switch(n.nodeName){case"technique_common":en(n,e);break}}}function en(t,e){for(let s=0;s<t.childNodes.length;s++){const n=t.childNodes[s];if(n.nodeType===1)switch(n.nodeName){case"inertia":e.inertia=T(n.textContent);break;case"mass":e.mass=T(n.textContent)[0];break}}}function tn(t){const e={bindJointAxis:[]};for(let s=0;s<t.childNodes.length;s++){const n=t.childNodes[s];if(n.nodeType===1)switch(n.nodeName){case"bind_joint_axis":e.bindJointAxis.push(nn(n));break}}w.kinematicsScenes[_(t.getAttribute("url"))]=e}function nn(t){const e={target:t.getAttribute("target").split("/").pop()};for(let s=0;s<t.childNodes.length;s++){const n=t.childNodes[s];if(n.nodeType===1)switch(n.nodeName){case"axis":const i=n.getElementsByTagName("param")[0];e.axis=i.textContent;const o=e.axis.split("inst_").pop().split("axis")[0];e.jointIndex=o.substring(0,o.length-1);break}}return e}function sn(t){return t.build!==void 0?t.build:t}function on(t){return V(w.kinematicsScenes[t],sn)}function an(){const t=Object.keys(w.kinematicsModels)[0],e=Object.keys(w.kinematicsScenes)[0],s=Object.keys(w.visualScenes)[0];if(t===void 0||e===void 0)return;const n=Jt(t),i=on(e),o=$e(s),a=i.bindJointAxis,d={};for(let m=0,r=a.length;m<r;m++){const p=a[m],f=z.querySelector('[sid="'+p.target+'"]');if(f){const g=f.parentElement;c(p.jointIndex,g)}}function c(m,r){const p=r.getAttribute("name"),f=n.joints[m];o.traverse(function(g){g.name===p&&(d[m]={object:g,transforms:rn(r),joint:f,position:f.zeroPosition})})}const l=new te;st={joints:n&&n.joints,getJointValue:function(m){const r=d[m];if(r)return r.position;""+m},setJointValue:function(m,r){const p=d[m];if(p){const f=p.joint;if(r>f.limits.max||r<f.limits.min)""+m+r+f.limits.min+f.limits.max;else if(f.static)""+m;else{const g=p.object,b=f.axis,O=p.transforms;W.identity();for(let v=0;v<O.length;v++){const E=O[v];if(E.sid&&E.sid.indexOf(m)!==-1)switch(f.type){case"revolute":W.multiply(l.makeRotationAxis(b,ye.degToRad(r)));break;case"prismatic":W.multiply(l.makeTranslation(b.x*r,b.y*r,b.z*r));break;default:""+f.type;break}else switch(E.type){case"matrix":W.multiply(E.obj);break;case"translate":W.multiply(l.makeTranslation(E.obj.x,E.obj.y,E.obj.z));break;case"scale":W.scale(E.obj);break;case"rotate":W.multiply(l.makeRotationAxis(E.obj,E.angle));break}}g.matrix.copy(W),g.matrix.decompose(g.position,g.quaternion,g.scale),d[m].position=r}}else""+m}}}function rn(t){const e=[],s=z.querySelector('[id="'+t.id+'"]');for(let n=0;n<s.childNodes.length;n++){const i=s.childNodes[n];if(i.nodeType!==1)continue;let o,a;switch(i.nodeName){case"matrix":o=T(i.textContent);const d=new te().fromArray(o).transpose();e.push({sid:i.getAttribute("sid"),type:i.nodeName,obj:d});break;case"translate":case"scale":o=T(i.textContent),a=new ne().fromArray(o),e.push({sid:i.getAttribute("sid"),type:i.nodeName,obj:a});break;case"rotate":o=T(i.textContent),a=new ne().fromArray(o);const c=ye.degToRad(o[3]);e.push({sid:i.getAttribute("sid"),type:i.nodeName,obj:a,angle:c});break}}return e}function cn(t){const e=t.getElementsByTagName("node");for(let s=0;s<e.length;s++){const n=e[s];n.hasAttribute("id")===!1&&n.setAttribute("id",$())}}const W=new te,ue=new ne;function Re(t){const e={name:t.getAttribute("name")||"",type:t.getAttribute("type"),id:t.getAttribute("id"),sid:t.getAttribute("sid"),matrix:new te,nodes:[],instanceCameras:[],instanceControllers:[],instanceLights:[],instanceGeometries:[],instanceNodes:[],transforms:{}};for(let s=0;s<t.childNodes.length;s++){const n=t.childNodes[s];if(n.nodeType!==1)continue;let i;switch(n.nodeName){case"node":e.nodes.push(n.getAttribute("id")),Re(n);break;case"instance_camera":e.instanceCameras.push(_(n.getAttribute("url")));break;case"instance_controller":e.instanceControllers.push(We(n));break;case"instance_light":e.instanceLights.push(_(n.getAttribute("url")));break;case"instance_geometry":e.instanceGeometries.push(We(n));break;case"instance_node":e.instanceNodes.push(_(n.getAttribute("url")));break;case"matrix":i=T(n.textContent),e.matrix.multiply(W.fromArray(i).transpose()),e.transforms[n.getAttribute("sid")]=n.nodeName;break;case"translate":i=T(n.textContent),ue.fromArray(i),e.matrix.multiply(W.makeTranslation(ue.x,ue.y,ue.z)),e.transforms[n.getAttribute("sid")]=n.nodeName;break;case"rotate":i=T(n.textContent);const o=ye.degToRad(i[3]);e.matrix.multiply(W.makeRotationAxis(ue.fromArray(i),o)),e.transforms[n.getAttribute("sid")]=n.nodeName;break;case"scale":i=T(n.textContent),e.matrix.scale(ue.fromArray(i)),e.transforms[n.getAttribute("sid")]=n.nodeName;break;case"extra":break;default:}}return Ze(e.id)?e.id:w.nodes[e.id]=e,e}function We(t){const e={id:_(t.getAttribute("url")),materials:{},skeletons:[]};for(let s=0;s<t.childNodes.length;s++){const n=t.childNodes[s];switch(n.nodeName){case"bind_material":const i=n.getElementsByTagName("instance_material");for(let o=0;o<i.length;o++){const a=i[o],d=a.getAttribute("symbol"),c=a.getAttribute("target");e.materials[d]=_(c)}break;case"skeleton":e.skeletons.push(_(n.textContent));break}}return e}function ln(t,e){const s=[],n=[];let i,o,a;for(i=0;i<t.length;i++){const l=t[i];let m;if(Ze(l))m=fe(l),Ye(m,e,s);else if(pn(l)){const p=w.visualScenes[l].children;for(let f=0;f<p.length;f++){const g=p[f];if(g.type==="JOINT"){const b=fe(g.id);Ye(b,e,s)}}}}for(i=0;i<e.length;i++)for(o=0;o<s.length;o++)if(a=s[o],a.bone.name===e[i].name){n[i]=a,a.processed=!0;break}for(i=0;i<s.length;i++)a=s[i],a.processed===!1&&(n.push(a),a.processed=!0);const d=[],c=[];for(i=0;i<n.length;i++)a=n[i],d.push(a.bone),c.push(a.boneInverse);return new Un(d,c)}function Ye(t,e,s){t.traverse(function(n){if(n.isBone===!0){let i;for(let o=0;o<e.length;o++){const a=e[o];if(a.name===n.name){i=a.boneInverse;break}}i===void 0&&(i=new te),s.push({bone:n,boneInverse:i,processed:!1})}})}function dn(t){const e=[],s=t.matrix,n=t.nodes,i=t.type,o=t.instanceCameras,a=t.instanceControllers,d=t.instanceLights,c=t.instanceGeometries,l=t.instanceNodes;for(let r=0,p=n.length;r<p;r++)e.push(fe(n[r]));for(let r=0,p=o.length;r<p;r++){const f=Gt(o[r]);f!==null&&e.push(f.clone())}for(let r=0,p=a.length;r<p;r++){const f=a[r],g=y(f.id),b=De(g.id),O=Xe(b,f.materials),v=f.skeletons,E=g.skin.joints,x=ln(v,E);for(let ee=0,J=O.length;ee<J;ee++){const he=O[ee];he.isSkinnedMesh&&(he.bind(x,g.skin.bindMatrix),he.normalizeSkinWeights()),e.push(he)}}for(let r=0,p=d.length;r<p;r++){const f=Pt(d[r]);f!==null&&e.push(f.clone())}for(let r=0,p=c.length;r<p;r++){const f=c[r],g=De(f.id),b=Xe(g,f.materials);for(let O=0,v=b.length;O<v;O++)e.push(b[O])}for(let r=0,p=l.length;r<p;r++)e.push(fe(l[r]).clone());let m;if(n.length===0&&e.length===1)m=e[0];else{m=i==="JOINT"?new On:new ut;for(let r=0;r<e.length;r++)m.add(e[r])}return m.name=i==="JOINT"?t.sid:t.name,m.matrix.copy(s),m.matrix.decompose(m.position,m.quaternion,m.scale),m}const un=new at({name:ot.DEFAULT_MATERIAL_NAME,color:16711935});function fn(t,e){const s=[];for(let n=0,i=t.length;n<i;n++){const o=e[t[n]];o===void 0?(t[n],s.push(un)):s.push(Lt(o))}return s}function Xe(t,e){const s=[];for(const n in t){const i=t[n],o=fn(i.materialKeys,e);if(o.length===0&&(n==="lines"||n==="linestrips"?o.push(new ft):o.push(new dt)),n==="lines"||n==="linestrips")for(let l=0,m=o.length;l<m;l++){const r=o[l];if(r.isMeshPhongMaterial===!0||r.isMeshLambertMaterial===!0){const p=new ft;p.color.copy(r.color),p.opacity=r.opacity,p.transparent=r.transparent,o[l]=p}}const a=i.data.attributes.skinIndex!==void 0,d=o.length===1?o[0]:o;let c;switch(n){case"lines":c=new Hn(i.data,d);break;case"linestrips":c=new Bn(i.data,d);break;case"triangles":case"polylist":a?c=new qn(i.data,d):c=new Pn(i.data,d);break}s.push(c)}return s}function Ze(t){return w.nodes[t]!==void 0}function fe(t){return V(w.nodes[t],dn)}function hn(t){const e={name:t.getAttribute("name"),children:[]};cn(t);const s=j(t,"node");for(let n=0;n<s.length;n++)e.children.push(Re(s[n]));w.visualScenes[t.getAttribute("id")]=e}function Qe(t){const e=new ut;e.name=t.name;const s=t.children;for(let n=0;n<s.length;n++){const i=s[n];e.add(fe(i.id))}return e}function pn(t){return w.visualScenes[t]!==void 0}function $e(t){return V(w.visualScenes[t],Qe)}function mn(t){const e=j(t,"instance_visual_scene")[0];return $e(_(e.getAttribute("url")))}function bn(){const t=w.clips;if(D(t)===!0){if(D(w.animations)===!1){const e=[];for(const s in w.animations){const n=we(s);for(let i=0,o=n.length;i<o;i++)e.push(n[i])}_e.push(new ct("default",-1,e))}}else for(const e in t)_e.push(M(e))}function gn(t){let e="";const s=[t];for(;s.length;){const n=s.shift();n.nodeType===Node.TEXT_NODE?e+=n.textContent:(e+=`
`,s.push.apply(s,n.childNodes))}return e.trim()}if(H.length===0)return{scene:new mt};const et=new DOMParser().parseFromString(H,"application/xml"),z=j(et,"COLLADA")[0],Ie=et.getElementsByTagName("parsererror")[0];if(Ie!==void 0){const t=j(Ie,"div")[0];let e;return t?e=t.textContent:e=gn(Ie),null}const yn=z.getAttribute("version");console.debug("THREE.ColladaLoader: File version",yn);const tt=re(j(z,"asset")[0]),nt=new En(this.manager);nt.setPath(this.resourcePath||X).setCrossOrigin(this.crossOrigin);let Me;pt&&(Me=new pt(this.manager),Me.setPath(this.resourcePath||X));const Te=new rt,_e=[];let st={},kn=0;const w={animations:{},clips:{},controllers:{},images:{},effects:{},materials:{},cameras:{},lights:{},geometries:{},nodes:{},visualScenes:{},kinematicsModels:{},physicsModels:{},kinematicsScenes:{}};U(z,"library_animations","animation",ie),U(z,"library_animation_clips","animation_clip",h),U(z,"library_controllers","controller",L),U(z,"library_images","image",u),U(z,"library_effects","effect",Y),U(z,"library_materials","material",Ct),U(z,"library_cameras","camera",Rt),U(z,"library_lights","light",jt),U(z,"library_geometries","geometry",Bt),U(z,"library_nodes","node",Re),U(z,"library_visual_scenes","visual_scene",hn),U(z,"library_kinematics_models","kinematics_model",Dt),U(z,"library_physics_models","physics_model",Qt),U(z,"scene","instance_kinematics_scene",tn),F(w.animations,ke),F(w.clips,P),F(w.controllers,A),F(w.images,k),F(w.effects,He),F(w.materials,Ue),F(w.cameras,ze),F(w.lights,Fe),F(w.geometries,Ve),F(w.visualScenes,Qe),bn(),an();const Ee=mn(j(z,"scene")[0]);return Ee.animations=_e,tt.upAxis==="Z_UP"&&Ee.rotation.set(-Math.PI/2,0,0),Ee.scale.multiplyScalar(tt.unit),{get animations(){return _e},kinematics:st,library:w,scene:Ee}}}const Qn={id:"container1",class:"flex justify-center items-center flex-col"},ts=Jn({__name:"webgl_loader_collada",setup(je){const H=window.innerWidth*4/5,X=window.innerHeight*4/5;let j,Q,T,K,_,$;return Wn(()=>{const D=document.getElementById("container1");re(),se();function re(){T=new Ge(45,H/X,.1,2e3),T.position.set(8,10,8),T.lookAt(0,3,0),K=new mt,Q=new Dn;const F=new Kn(function(){K.add($)});new Zn(F).load(new URL(""+new URL("../models/collada/elf/elf.dae",import.meta.url).href,self.location).href,function(me){$=me.scene});const ie=new bt(13421772,.4);K.add(ie);const oe=new gt(16777215,.8);oe.position.set(1,1,0).normalize(),K.add(oe),_=new zn,_.outputEncoding=Fn,_.setPixelRatio(window.devicePixelRatio),_.setSize(H,X),D==null||D.appendChild(_.domElement),j=Vn(),j.dom.style.top="0",j.dom.style.left="0",j.dom.style.position="absolute",D==null||D.appendChild(j.dom),window.addEventListener("resize",pe)}function pe(){T.aspect=H/X,T.updateProjectionMatrix(),_.setSize(H,X)}function se(){requestAnimationFrame(se),U(),j.update()}function U(){const F=Q.getDelta();$!==void 0&&($.rotation.z+=F*.5),_.render(K,T)}}),(D,re)=>(Yn(),Xn("div",Qn))}});export{ts as _};
