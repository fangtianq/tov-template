import{f as Ye,g as oe,h as ve,L as qe,i as ae,F as Le,C as D,j as Je,k as Qe,D as Se,l as X,m as W,n as H,a as Re,o as Q,V as G,I as Ze,O as Ce,p as et,q as tt,r as Z,s as nt,t as Me,u as Ie,R as le,v as it,w as ee,x as st,y as ke,z as rt,G as ot,H as at,J as lt,c as Ne,K as ct,N as ut,U as ht,X as dt,Y as te,P as Fe,Z as ft,_ as pt,$ as mt,a0 as gt,a1 as At,a2 as Oe,Q as De,a3 as wt,a4 as bt,a5 as xt,a6 as Tt,a7 as _t,a8 as Et,a9 as yt,aa as vt,ab as Lt,ac as ge,ad as St,ae as Ae,af as we,ag as Rt,ah as Ct,ai as Mt,e as It,aj as kt,ak as Nt,al as Ft,am as Ot,an as Dt,ao as Ht,W as Pt,ap as Bt,d as $t,aq as Gt}from"./stats.module-ba0ebf37.js";import{d as Vt,I as Ut,j as jt,x as Kt}from"./index-dc3531f8.js";function be(h,e){if(e===Ye)return h;if(e===oe||e===ve){let t=h.getIndex();if(t===null){const s=[],l=h.getAttribute("position");if(l!==void 0){for(let o=0;o<l.count;o++)s.push(o);h.setIndex(s),t=h.getIndex()}else return h}const i=t.count-2,n=[];if(e===oe)for(let s=1;s<=i;s++)n.push(t.getX(0)),n.push(t.getX(s)),n.push(t.getX(s+1));else for(let s=0;s<i;s++)s%2===0?(n.push(t.getX(s)),n.push(t.getX(s+1)),n.push(t.getX(s+2))):(n.push(t.getX(s+2)),n.push(t.getX(s+1)),n.push(t.getX(s)));n.length/3;const r=h.clone();return r.setIndex(n),r.clearGroups(),r}else return h}class zt extends qe{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Jt(t)}),this.register(function(t){return new on(t)}),this.register(function(t){return new an(t)}),this.register(function(t){return new ln(t)}),this.register(function(t){return new Zt(t)}),this.register(function(t){return new en(t)}),this.register(function(t){return new tn(t)}),this.register(function(t){return new nn(t)}),this.register(function(t){return new qt(t)}),this.register(function(t){return new sn(t)}),this.register(function(t){return new Qt(t)}),this.register(function(t){return new rn(t)}),this.register(function(t){return new Wt(t)}),this.register(function(t){return new cn(t)}),this.register(function(t){return new un(t)})}load(e,t,i,n){const r=this;let s;this.resourcePath!==""?s=this.resourcePath:this.path!==""?s=this.path:s=ae.extractUrlBase(e),this.manager.itemStart(e);const l=function(a){n&&n(a),r.manager.itemError(e),r.manager.itemEnd(e)},o=new Le(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{r.parse(a,s,function(u){t(u),r.manager.itemEnd(e)},l)}catch(u){l(u)}},i,l)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,n){let r;const s={},l={},o=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(o.decode(new Uint8Array(e,0,4))===He){try{s[T.KHR_BINARY_GLTF]=new hn(e)}catch(c){n&&n(c);return}r=JSON.parse(s[T.KHR_BINARY_GLTF].content)}else r=JSON.parse(o.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){n&&n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const a=new yn(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});a.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const c=this.pluginCallbacks[u](a);l[c.name]=c,s[c.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const c=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(c){case T.KHR_MATERIALS_UNLIT:s[c]=new Yt;break;case T.KHR_DRACO_MESH_COMPRESSION:s[c]=new dn(r,this.dracoLoader);break;case T.KHR_TEXTURE_TRANSFORM:s[c]=new fn;break;case T.KHR_MESH_QUANTIZATION:s[c]=new pn;break;default:d.indexOf(c)>=0&&l[c]===void 0&&""+c}}a.setExtensions(s),a.setPlugins(l),a.parse(i,n)}parseAsync(e,t){const i=this;return new Promise(function(n,r){i.parse(e,t,n,r)})}}function Xt(){let h={};return{get:function(e){return h[e]},add:function(e,t){h[e]=t},remove:function(e){delete h[e]},removeAll:function(){h={}}}}const T={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Wt{constructor(e){this.parser=e,this.name=T.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,n=t.length;i<n;i++){const r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let n=t.cache.get(i);if(n)return n;const r=t.json,o=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let a;const u=new D(16777215);o.color!==void 0&&u.fromArray(o.color);const c=o.range!==void 0?o.range:0;switch(o.type){case"directional":a=new Se(u),a.target.position.set(0,0,-1),a.add(a.target);break;case"point":a=new Qe(u),a.distance=c;break;case"spot":a=new Je(u),a.distance=c,o.spot=o.spot||{},o.spot.innerConeAngle=o.spot.innerConeAngle!==void 0?o.spot.innerConeAngle:0,o.spot.outerConeAngle=o.spot.outerConeAngle!==void 0?o.spot.outerConeAngle:Math.PI/4,a.angle=o.spot.outerConeAngle,a.penumbra=1-o.spot.innerConeAngle/o.spot.outerConeAngle,a.target.position.set(0,0,-1),a.add(a.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+o.type)}return a.position.set(0,0,0),a.decay=2,O(a,o),o.intensity!==void 0&&(a.intensity=o.intensity),a.name=t.createUniqueName(o.name||"light_"+e),n=Promise.resolve(a),t.cache.add(i,n),n}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],l=(r.extensions&&r.extensions[this.name]||{}).light;return l===void 0?null:this._loadLight(l).then(function(o){return i._getNodeRef(t.cache,l,o)})}}class Yt{constructor(){this.name=T.KHR_MATERIALS_UNLIT}getMaterialType(){return X}extendParams(e,t,i){const n=[];e.color=new D(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const s=r.baseColorFactor;e.color.fromArray(s),e.opacity=s[3]}r.baseColorTexture!==void 0&&n.push(i.assignTexture(e,"map",r.baseColorTexture,W))}return Promise.all(n)}}class qt{constructor(e){this.parser=e,this.name=T.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=n.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class Jt{constructor(e){this.parser=e,this.name=T.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:H}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],s=n.extensions[this.name];if(s.clearcoatFactor!==void 0&&(t.clearcoat=s.clearcoatFactor),s.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",s.clearcoatTexture)),s.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=s.clearcoatRoughnessFactor),s.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",s.clearcoatRoughnessTexture)),s.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",s.clearcoatNormalTexture)),s.clearcoatNormalTexture.scale!==void 0)){const l=s.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Re(l,l)}return Promise.all(r)}}class Qt{constructor(e){this.parser=e,this.name=T.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:H}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],s=n.extensions[this.name];return s.iridescenceFactor!==void 0&&(t.iridescence=s.iridescenceFactor),s.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",s.iridescenceTexture)),s.iridescenceIor!==void 0&&(t.iridescenceIOR=s.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),s.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=s.iridescenceThicknessMinimum),s.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=s.iridescenceThicknessMaximum),s.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",s.iridescenceThicknessTexture)),Promise.all(r)}}class Zt{constructor(e){this.parser=e,this.name=T.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:H}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new D(0,0,0),t.sheenRoughness=0,t.sheen=1;const s=n.extensions[this.name];return s.sheenColorFactor!==void 0&&t.sheenColor.fromArray(s.sheenColorFactor),s.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=s.sheenRoughnessFactor),s.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",s.sheenColorTexture,W)),s.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",s.sheenRoughnessTexture)),Promise.all(r)}}class en{constructor(e){this.parser=e,this.name=T.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:H}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],s=n.extensions[this.name];return s.transmissionFactor!==void 0&&(t.transmission=s.transmissionFactor),s.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",s.transmissionTexture)),Promise.all(r)}}class tn{constructor(e){this.parser=e,this.name=T.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:H}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],s=n.extensions[this.name];t.thickness=s.thicknessFactor!==void 0?s.thicknessFactor:0,s.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",s.thicknessTexture)),t.attenuationDistance=s.attenuationDistance||1/0;const l=s.attenuationColor||[1,1,1];return t.attenuationColor=new D(l[0],l[1],l[2]),Promise.all(r)}}class nn{constructor(e){this.parser=e,this.name=T.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:H}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=n.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class sn{constructor(e){this.parser=e,this.name=T.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:H}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],s=n.extensions[this.name];t.specularIntensity=s.specularFactor!==void 0?s.specularFactor:1,s.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",s.specularTexture));const l=s.specularColorFactor||[1,1,1];return t.specularColor=new D(l[0],l[1],l[2]),s.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",s.specularColorTexture,W)),Promise.all(r)}}class rn{constructor(e){this.parser=e,this.name=T.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:H}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],s=n.extensions[this.name];return s.anisotropyStrength!==void 0&&(t.anisotropy=s.anisotropyStrength),s.anisotropyRotation!==void 0&&(t.anisotropyRotation=s.anisotropyRotation),s.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",s.anisotropyTexture)),Promise.all(r)}}class on{constructor(e){this.parser=e,this.name=T.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,n=i.textures[e];if(!n.extensions||!n.extensions[this.name])return null;const r=n.extensions[this.name],s=t.options.ktx2Loader;if(!s){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,s)}}class an{constructor(e){this.parser=e,this.name=T.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,n=i.json,r=n.textures[e];if(!r.extensions||!r.extensions[t])return null;const s=r.extensions[t],l=n.images[s.source];let o=i.textureLoader;if(l.uri){const a=i.options.manager.getHandler(l.uri);a!==null&&(o=a)}return this.detectSupport().then(function(a){if(a)return i.loadTextureImage(e,s.source,o);if(n.extensionsRequired&&n.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class ln{constructor(e){this.parser=e,this.name=T.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,n=i.json,r=n.textures[e];if(!r.extensions||!r.extensions[t])return null;const s=r.extensions[t],l=n.images[s.source];let o=i.textureLoader;if(l.uri){const a=i.options.manager.getHandler(l.uri);a!==null&&(o=a)}return this.detectSupport().then(function(a){if(a)return i.loadTextureImage(e,s.source,o);if(n.extensionsRequired&&n.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class cn{constructor(e){this.name=T.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const n=i.extensions[this.name],r=this.parser.getDependency("buffer",n.buffer),s=this.parser.options.meshoptDecoder;if(!s||!s.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(l){const o=n.byteOffset||0,a=n.byteLength||0,u=n.count,c=n.byteStride,d=new Uint8Array(l,o,a);return s.decodeGltfBufferAsync?s.decodeGltfBufferAsync(u,c,d,n.mode,n.filter).then(function(p){return p.buffer}):s.ready.then(function(){const p=new ArrayBuffer(u*c);return s.decodeGltfBuffer(new Uint8Array(p),u,c,d,n.mode,n.filter),p})})}else return null}}class un{constructor(e){this.name=T.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const n=t.meshes[i.mesh];for(const a of n.primitives)if(a.mode!==C.TRIANGLES&&a.mode!==C.TRIANGLE_STRIP&&a.mode!==C.TRIANGLE_FAN&&a.mode!==void 0)return null;const s=i.extensions[this.name].attributes,l=[],o={};for(const a in s)l.push(this.parser.getDependency("accessor",s[a]).then(u=>(o[a]=u,o[a])));return l.length<1?null:(l.push(this.parser.createNodeMesh(e)),Promise.all(l).then(a=>{const u=a.pop(),c=u.isGroup?u.children:[u],d=a[0].count,p=[];for(const g of c){const b=new Q,A=new G,f=new De,m=new G(1,1,1),_=new Ze(g.geometry,g.material,d);for(let x=0;x<d;x++)o.TRANSLATION&&A.fromBufferAttribute(o.TRANSLATION,x),o.ROTATION&&f.fromBufferAttribute(o.ROTATION,x),o.SCALE&&m.fromBufferAttribute(o.SCALE,x),_.setMatrixAt(x,b.compose(A,f,m));for(const x in o)x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,o[x]);Ce.prototype.copy.call(_,g),this.parser.assignFinalMaterial(_),p.push(_)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const He="glTF",z=12,xe={JSON:1313821514,BIN:5130562};class hn{constructor(e){this.name=T.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,z),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==He)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-z,r=new DataView(e,z);let s=0;for(;s<n;){const l=r.getUint32(s,!0);s+=4;const o=r.getUint32(s,!0);if(s+=4,o===xe.JSON){const a=new Uint8Array(e,z+s,l);this.content=i.decode(a)}else if(o===xe.BIN){const a=z+s;this.body=e.slice(a,a+l)}s+=l}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class dn{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=T.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,n=this.dracoLoader,r=e.extensions[this.name].bufferView,s=e.extensions[this.name].attributes,l={},o={},a={};for(const u in s){const c=ce[u]||u.toLowerCase();l[c]=s[u]}for(const u in e.attributes){const c=ce[u]||u.toLowerCase();if(s[u]!==void 0){const d=i.accessors[e.attributes[u]],p=V[d.componentType];a[c]=p.name,o[c]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(c){n.decodeDracoFile(u,function(d){for(const p in d.attributes){const g=d.attributes[p],b=o[p];b!==void 0&&(g.normalized=b)}c(d)},l,a)})})}}class fn{constructor(){this.name=T.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class pn{constructor(){this.name=T.KHR_MESH_QUANTIZATION}}class Pe extends Mt{constructor(e,t,i,n){super(e,t,i,n)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n*3+n;for(let s=0;s!==n;s++)t[s]=i[r+s];return t}interpolate_(e,t,i,n){const r=this.resultBuffer,s=this.sampleValues,l=this.valueSize,o=l*2,a=l*3,u=n-t,c=(i-t)/u,d=c*c,p=d*c,g=e*a,b=g-a,A=-2*p+3*d,f=p-d,m=1-A,_=f-d+c;for(let x=0;x!==l;x++){const L=s[b+x+l],y=s[b+x+o]*u,v=s[g+x+l],P=s[g+x]*u;r[x]=m*L+_*y+A*v+f*P}return r}}const mn=new De;class gn extends Pe{interpolate_(e,t,i,n){const r=super.interpolate_(e,t,i,n);return mn.fromArray(r).normalize().toArray(r),r}}const C={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},V={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Te={9728:wt,9729:Me,9984:bt,9985:xt,9986:Tt,9987:Ie},_e={33071:_t,33648:Et,10497:le},ne={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ce={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},F={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},An={CUBICSPLINE:void 0,LINEAR:Oe,STEP:yt},ie={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function wn(h){return h.DefaultMaterial===void 0&&(h.DefaultMaterial=new ke({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:vt})),h.DefaultMaterial}function $(h,e,t){for(const i in t.extensions)h[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function O(h,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(h.userData,e.extras):""+e.extras)}function bn(h,e,t){let i=!1,n=!1,r=!1;for(let a=0,u=e.length;a<u;a++){const c=e[a];if(c.POSITION!==void 0&&(i=!0),c.NORMAL!==void 0&&(n=!0),c.COLOR_0!==void 0&&(r=!0),i&&n&&r)break}if(!i&&!n&&!r)return Promise.resolve(h);const s=[],l=[],o=[];for(let a=0,u=e.length;a<u;a++){const c=e[a];if(i){const d=c.POSITION!==void 0?t.getDependency("accessor",c.POSITION):h.attributes.position;s.push(d)}if(n){const d=c.NORMAL!==void 0?t.getDependency("accessor",c.NORMAL):h.attributes.normal;l.push(d)}if(r){const d=c.COLOR_0!==void 0?t.getDependency("accessor",c.COLOR_0):h.attributes.color;o.push(d)}}return Promise.all([Promise.all(s),Promise.all(l),Promise.all(o)]).then(function(a){const u=a[0],c=a[1],d=a[2];return i&&(h.morphAttributes.position=u),n&&(h.morphAttributes.normal=c),r&&(h.morphAttributes.color=d),h.morphTargetsRelative=!0,h})}function xn(h,e){if(h.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)h.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(h.morphTargetInfluences.length===t.length){h.morphTargetDictionary={};for(let i=0,n=t.length;i<n;i++)h.morphTargetDictionary[t[i]]=i}}}function Tn(h){let e;const t=h.extensions&&h.extensions[T.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+se(t.attributes):e=h.indices+":"+se(h.attributes)+":"+h.mode,h.targets!==void 0)for(let i=0,n=h.targets.length;i<n;i++)e+=":"+se(h.targets[i]);return e}function se(h){let e="";const t=Object.keys(h).sort();for(let i=0,n=t.length;i<n;i++)e+=t[i]+":"+h[t[i]]+";";return e}function ue(h){switch(h){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function _n(h){return h.search(/\.jpe?g($|\?)/i)>0||h.search(/^data\:image\/jpeg/)===0?"image/jpeg":h.search(/\.webp($|\?)/i)>0||h.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const En=new Q;class yn{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Xt,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,n=!1,r=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,n=navigator.userAgent.indexOf("Firefox")>-1,r=n?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||n&&r<98?this.textureLoader=new et(this.options.manager):this.textureLoader=new tt(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Le(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,n=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(s){return s._markDefs&&s._markDefs()}),Promise.all(this._invokeAll(function(s){return s.beforeRoot&&s.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(s){const l={scene:s[0][n.scene||0],scenes:s[0],animations:s[1],cameras:s[2],asset:n.asset,parser:i,userData:{}};$(r,l,n),O(l,n),Promise.all(i._invokeAll(function(o){return o.afterRoot&&o.afterRoot(l)})).then(function(){e(l)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let n=0,r=t.length;n<r;n++){const s=t[n].joints;for(let l=0,o=s.length;l<o;l++)e[s[l]].isBone=!0}for(let n=0,r=e.length;n<r;n++){const s=e[n];s.mesh!==void 0&&(this._addNodeRef(this.meshCache,s.mesh),s.skin!==void 0&&(i[s.mesh].isSkinnedMesh=!0)),s.camera!==void 0&&this._addNodeRef(this.cameraCache,s.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const n=i.clone(),r=(s,l)=>{const o=this.associations.get(s);o!=null&&this.associations.set(l,o);for(const[a,u]of s.children.entries())r(u,l.children[a])};return r(i,n),n.name+="_instance_"+e.uses[t]++,n}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const n=e(t[i]);if(n)return n}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let n=0;n<t.length;n++){const r=e(t[n]);r&&i.push(r)}return i}getDependency(e,t){const i=e+":"+t;let n=this.cache.get(i);if(!n){switch(e){case"scene":n=this.loadScene(t);break;case"node":n=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":n=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":n=this.loadAccessor(t);break;case"bufferView":n=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":n=this.loadBuffer(t);break;case"material":n=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":n=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":n=this.loadSkin(t);break;case"animation":n=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":n=this.loadCamera(t);break;default:if(n=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!n)throw new Error("Unknown type: "+e);break}this.cache.add(i,n)}return n}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,n=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(n.map(function(r,s){return i.getDependency(e,s)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[T.KHR_BINARY_GLTF].body);const n=this.options;return new Promise(function(r,s){i.load(ae.resolveURL(t.uri,n.path),r,void 0,function(){s(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const n=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+n)})}loadAccessor(e){const t=this,i=this.json,n=this.json.accessors[e];if(n.bufferView===void 0&&n.sparse===void 0){const s=ne[n.type],l=V[n.componentType],o=n.normalized===!0,a=new l(n.count*s);return Promise.resolve(new Z(a,s,o))}const r=[];return n.bufferView!==void 0?r.push(this.getDependency("bufferView",n.bufferView)):r.push(null),n.sparse!==void 0&&(r.push(this.getDependency("bufferView",n.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",n.sparse.values.bufferView))),Promise.all(r).then(function(s){const l=s[0],o=ne[n.type],a=V[n.componentType],u=a.BYTES_PER_ELEMENT,c=u*o,d=n.byteOffset||0,p=n.bufferView!==void 0?i.bufferViews[n.bufferView].byteStride:void 0,g=n.normalized===!0;let b,A;if(p&&p!==c){const f=Math.floor(d/p),m="InterleavedBuffer:"+n.bufferView+":"+n.componentType+":"+f+":"+n.count;let _=t.cache.get(m);_||(b=new a(l,f*p,n.count*p/u),_=new nt(b,p/u),t.cache.add(m,_)),A=new Lt(_,o,d%p/u,g)}else l===null?b=new a(n.count*o):b=new a(l,d,n.count*o),A=new Z(b,o,g);if(n.sparse!==void 0){const f=ne.SCALAR,m=V[n.sparse.indices.componentType],_=n.sparse.indices.byteOffset||0,x=n.sparse.values.byteOffset||0,L=new m(s[1],_,n.sparse.count*f),y=new a(s[2],x,n.sparse.count*o);l!==null&&(A=new Z(A.array.slice(),A.itemSize,A.normalized));for(let v=0,P=L.length;v<P;v++){const I=L[v];if(A.setX(I,y[v*o]),o>=2&&A.setY(I,y[v*o+1]),o>=3&&A.setZ(I,y[v*o+2]),o>=4&&A.setW(I,y[v*o+3]),o>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return A})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e].source,s=t.images[r];let l=this.textureLoader;if(s.uri){const o=i.manager.getHandler(s.uri);o!==null&&(l=o)}return this.loadTextureImage(e,r,l)}loadTextureImage(e,t,i){const n=this,r=this.json,s=r.textures[e],l=r.images[t],o=(l.uri||l.bufferView)+":"+s.sampler;if(this.textureCache[o])return this.textureCache[o];const a=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=s.name||l.name||"",u.name===""&&typeof l.uri=="string"&&l.uri.startsWith("data:image/")===!1&&(u.name=l.uri);const d=(r.samplers||{})[s.sampler]||{};return u.magFilter=Te[d.magFilter]||Me,u.minFilter=Te[d.minFilter]||Ie,u.wrapS=_e[d.wrapS]||le,u.wrapT=_e[d.wrapT]||le,n.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[o]=a,a}loadImageSource(e,t){const i=this,n=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(c=>c.clone());const s=n.images[e],l=self.URL||self.webkitURL;let o=s.uri||"",a=!1;if(s.bufferView!==void 0)o=i.getDependency("bufferView",s.bufferView).then(function(c){a=!0;const d=new Blob([c],{type:s.mimeType});return o=l.createObjectURL(d),o});else if(s.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(o).then(function(c){return new Promise(function(d,p){let g=d;t.isImageBitmapLoader===!0&&(g=function(b){const A=new ge(b);A.needsUpdate=!0,d(A)}),t.load(ae.resolveURL(c,r.path),g,void 0,p)})}).then(function(c){return a===!0&&l.revokeObjectURL(o),c.userData.mimeType=s.mimeType||_n(s.uri),c}).catch(function(c){throw c});return this.sourceCache[e]=u,u}assignTexture(e,t,i,n){const r=this;return this.getDependency("texture",i.index).then(function(s){if(!s)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(s=s.clone(),s.channel=i.texCoord),r.extensions[T.KHR_TEXTURE_TRANSFORM]){const l=i.extensions!==void 0?i.extensions[T.KHR_TEXTURE_TRANSFORM]:void 0;if(l){const o=r.associations.get(s);s=r.extensions[T.KHR_TEXTURE_TRANSFORM].extendTexture(s,l),r.associations.set(s,o)}}return n!==void 0&&(s.colorSpace=n),e[t]=s,s})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const n=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,s=t.attributes.normal===void 0;if(e.isPoints){const l="PointsMaterial:"+i.uuid;let o=this.cache.get(l);o||(o=new it,ee.prototype.copy.call(o,i),o.color.copy(i.color),o.map=i.map,o.sizeAttenuation=!1,this.cache.add(l,o)),i=o}else if(e.isLine){const l="LineBasicMaterial:"+i.uuid;let o=this.cache.get(l);o||(o=new st,ee.prototype.copy.call(o,i),o.color.copy(i.color),o.map=i.map,this.cache.add(l,o)),i=o}if(n||r||s){let l="ClonedMaterial:"+i.uuid+":";n&&(l+="derivative-tangents:"),r&&(l+="vertex-colors:"),s&&(l+="flat-shading:");let o=this.cache.get(l);o||(o=i.clone(),r&&(o.vertexColors=!0),s&&(o.flatShading=!0),n&&(o.normalScale&&(o.normalScale.y*=-1),o.clearcoatNormalScale&&(o.clearcoatNormalScale.y*=-1)),this.cache.add(l,o),this.associations.set(o,this.associations.get(i))),i=o}e.material=i}getMaterialType(){return ke}loadMaterial(e){const t=this,i=this.json,n=this.extensions,r=i.materials[e];let s;const l={},o=r.extensions||{},a=[];if(o[T.KHR_MATERIALS_UNLIT]){const c=n[T.KHR_MATERIALS_UNLIT];s=c.getMaterialType(),a.push(c.extendParams(l,r,t))}else{const c=r.pbrMetallicRoughness||{};if(l.color=new D(1,1,1),l.opacity=1,Array.isArray(c.baseColorFactor)){const d=c.baseColorFactor;l.color.fromArray(d),l.opacity=d[3]}c.baseColorTexture!==void 0&&a.push(t.assignTexture(l,"map",c.baseColorTexture,W)),l.metalness=c.metallicFactor!==void 0?c.metallicFactor:1,l.roughness=c.roughnessFactor!==void 0?c.roughnessFactor:1,c.metallicRoughnessTexture!==void 0&&(a.push(t.assignTexture(l,"metalnessMap",c.metallicRoughnessTexture)),a.push(t.assignTexture(l,"roughnessMap",c.metallicRoughnessTexture))),s=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),a.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,l)})))}r.doubleSided===!0&&(l.side=rt);const u=r.alphaMode||ie.OPAQUE;if(u===ie.BLEND?(l.transparent=!0,l.depthWrite=!1):(l.transparent=!1,u===ie.MASK&&(l.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&s!==X&&(a.push(t.assignTexture(l,"normalMap",r.normalTexture)),l.normalScale=new Re(1,1),r.normalTexture.scale!==void 0)){const c=r.normalTexture.scale;l.normalScale.set(c,c)}return r.occlusionTexture!==void 0&&s!==X&&(a.push(t.assignTexture(l,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(l.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&s!==X&&(l.emissive=new D().fromArray(r.emissiveFactor)),r.emissiveTexture!==void 0&&s!==X&&a.push(t.assignTexture(l,"emissiveMap",r.emissiveTexture,W)),Promise.all(a).then(function(){const c=new s(l);return r.name&&(c.name=r.name),O(c,r),t.associations.set(c,{materials:e}),r.extensions&&$(n,c,r),c})}createUniqueName(e){const t=ot.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,n=this.primitiveCache;function r(l){return i[T.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(l,t).then(function(o){return Ee(o,l,t)})}const s=[];for(let l=0,o=e.length;l<o;l++){const a=e[l],u=Tn(a),c=n[u];if(c)s.push(c.promise);else{let d;a.extensions&&a.extensions[T.KHR_DRACO_MESH_COMPRESSION]?d=r(a):d=Ee(new at,a,t),n[u]={primitive:a,promise:d},s.push(d)}}return Promise.all(s)}loadMesh(e){const t=this,i=this.json,n=this.extensions,r=i.meshes[e],s=r.primitives,l=[];for(let o=0,a=s.length;o<a;o++){const u=s[o].material===void 0?wn(this.cache):this.getDependency("material",s[o].material);l.push(u)}return l.push(t.loadGeometries(s)),Promise.all(l).then(function(o){const a=o.slice(0,o.length-1),u=o[o.length-1],c=[];for(let p=0,g=u.length;p<g;p++){const b=u[p],A=s[p];let f;const m=a[p];if(A.mode===C.TRIANGLES||A.mode===C.TRIANGLE_STRIP||A.mode===C.TRIANGLE_FAN||A.mode===void 0)f=r.isSkinnedMesh===!0?new lt(b,m):new Ne(b,m),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),A.mode===C.TRIANGLE_STRIP?f.geometry=be(f.geometry,ve):A.mode===C.TRIANGLE_FAN&&(f.geometry=be(f.geometry,oe));else if(A.mode===C.LINES)f=new ct(b,m);else if(A.mode===C.LINE_STRIP)f=new ut(b,m);else if(A.mode===C.LINE_LOOP)f=new ht(b,m);else if(A.mode===C.POINTS)f=new dt(b,m);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+A.mode);Object.keys(f.geometry.morphAttributes).length>0&&xn(f,r),f.name=t.createUniqueName(r.name||"mesh_"+e),O(f,r),A.extensions&&$(n,f,A),t.assignFinalMaterial(f),c.push(f)}for(let p=0,g=c.length;p<g;p++)t.associations.set(c[p],{meshes:e,primitives:p});if(c.length===1)return r.extensions&&$(n,c[0],r),c[0];const d=new te;r.extensions&&$(n,d,r),t.associations.set(d,{meshes:e});for(let p=0,g=c.length;p<g;p++)d.add(c[p]);return d})}loadCamera(e){let t;const i=this.json.cameras[e],n=i[i.type];if(n)return i.type==="perspective"?t=new Fe(ft.radToDeg(n.yfov),n.aspectRatio||1,n.znear||1,n.zfar||2e6):i.type==="orthographic"&&(t=new pt(-n.xmag,n.xmag,n.ymag,-n.ymag,n.znear,n.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),O(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let n=0,r=t.joints.length;n<r;n++)i.push(this._loadNodeShallow(t.joints[n]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(n){const r=n.pop(),s=n,l=[],o=[];for(let a=0,u=s.length;a<u;a++){const c=s[a];if(c){l.push(c);const d=new Q;r!==null&&d.fromArray(r.array,a*16),o.push(d)}else t.joints[a]}return new mt(l,o)})}loadAnimation(e){const t=this.json,i=this,n=t.animations[e],r=n.name?n.name:"animation_"+e,s=[],l=[],o=[],a=[],u=[];for(let c=0,d=n.channels.length;c<d;c++){const p=n.channels[c],g=n.samplers[p.sampler],b=p.target,A=b.node,f=n.parameters!==void 0?n.parameters[g.input]:g.input,m=n.parameters!==void 0?n.parameters[g.output]:g.output;b.node!==void 0&&(s.push(this.getDependency("node",A)),l.push(this.getDependency("accessor",f)),o.push(this.getDependency("accessor",m)),a.push(g),u.push(b))}return Promise.all([Promise.all(s),Promise.all(l),Promise.all(o),Promise.all(a),Promise.all(u)]).then(function(c){const d=c[0],p=c[1],g=c[2],b=c[3],A=c[4],f=[];for(let m=0,_=d.length;m<_;m++){const x=d[m],L=p[m],y=g[m],v=b[m],P=A[m];if(x===void 0)continue;x.updateMatrix&&(x.updateMatrix(),x.matrixAutoUpdate=!0);const I=i._createAnimationTracks(x,L,y,v,P);if(I)for(let U=0;U<I.length;U++)f.push(I[U])}return new gt(r,void 0,f)})}createNodeMesh(e){const t=this.json,i=this,n=t.nodes[e];return n.mesh===void 0?null:i.getDependency("mesh",n.mesh).then(function(r){const s=i._getNodeRef(i.meshCache,n.mesh,r);return n.weights!==void 0&&s.traverse(function(l){if(l.isMesh)for(let o=0,a=n.weights.length;o<a;o++)l.morphTargetInfluences[o]=n.weights[o]}),s})}loadNode(e){const t=this.json,i=this,n=t.nodes[e],r=i._loadNodeShallow(e),s=[],l=n.children||[];for(let a=0,u=l.length;a<u;a++)s.push(i.getDependency("node",l[a]));const o=n.skin===void 0?Promise.resolve(null):i.getDependency("skin",n.skin);return Promise.all([r,Promise.all(s),o]).then(function(a){const u=a[0],c=a[1],d=a[2];d!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(d,En)});for(let p=0,g=c.length;p<g;p++)u.add(c[p]);return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,n=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],s=r.name?n.createUniqueName(r.name):"",l=[],o=n._invokeOne(function(a){return a.createNodeMesh&&a.createNodeMesh(e)});return o&&l.push(o),r.camera!==void 0&&l.push(n.getDependency("camera",r.camera).then(function(a){return n._getNodeRef(n.cameraCache,r.camera,a)})),n._invokeAll(function(a){return a.createNodeAttachment&&a.createNodeAttachment(e)}).forEach(function(a){l.push(a)}),this.nodeCache[e]=Promise.all(l).then(function(a){let u;if(r.isBone===!0?u=new At:a.length>1?u=new te:a.length===1?u=a[0]:u=new Ce,u!==a[0])for(let c=0,d=a.length;c<d;c++)u.add(a[c]);if(r.name&&(u.userData.name=r.name,u.name=s),O(u,r),r.extensions&&$(i,u,r),r.matrix!==void 0){const c=new Q;c.fromArray(r.matrix),u.applyMatrix4(c)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return n.associations.has(u)||n.associations.set(u,{}),n.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],n=this,r=new te;i.name&&(r.name=n.createUniqueName(i.name)),O(r,i),i.extensions&&$(t,r,i);const s=i.nodes||[],l=[];for(let o=0,a=s.length;o<a;o++)l.push(n.getDependency("node",s[o]));return Promise.all(l).then(function(o){for(let u=0,c=o.length;u<c;u++)r.add(o[u]);const a=u=>{const c=new Map;for(const[d,p]of n.associations)(d instanceof ee||d instanceof ge)&&c.set(d,p);return u.traverse(d=>{const p=n.associations.get(d);p!=null&&c.set(d,p)}),c};return n.associations=a(r),r})}_createAnimationTracks(e,t,i,n,r){const s=[],l=e.name?e.name:e.uuid,o=[];F[r.path]===F.weights?e.traverse(function(d){d.morphTargetInfluences&&o.push(d.name?d.name:d.uuid)}):o.push(l);let a;switch(F[r.path]){case F.weights:a=Ae;break;case F.rotation:a=we;break;case F.position:case F.scale:default:switch(i.itemSize){case 1:a=Ae;break;case 2:case 3:a=St;break}break}const u=n.interpolation!==void 0?An[n.interpolation]:Oe,c=this._getArrayFromAccessor(i);for(let d=0,p=o.length;d<p;d++){const g=new a(o[d]+"."+F[r.path],t.array,c,u);u==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),s.push(g)}return s}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=ue(t.constructor),n=new Float32Array(t.length);for(let r=0,s=t.length;r<s;r++)n[r]=t[r]*i;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const n=this instanceof we?gn:Pe;return new n(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function vn(h,e,t){const i=e.attributes,n=new Rt;if(i.POSITION!==void 0){const l=t.json.accessors[i.POSITION],o=l.min,a=l.max;if(o!==void 0&&a!==void 0){if(n.set(new G(o[0],o[1],o[2]),new G(a[0],a[1],a[2])),l.normalized){const u=ue(V[l.componentType]);n.min.multiplyScalar(u),n.max.multiplyScalar(u)}}else return}else return;const r=e.targets;if(r!==void 0){const l=new G,o=new G;for(let a=0,u=r.length;a<u;a++){const c=r[a];if(c.POSITION!==void 0){const d=t.json.accessors[c.POSITION],p=d.min,g=d.max;if(p!==void 0&&g!==void 0){if(o.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),o.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),o.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),d.normalized){const b=ue(V[d.componentType]);o.multiplyScalar(b)}l.max(o)}}}n.expandByVector(l)}h.boundingBox=n;const s=new Ct;n.getCenter(s.center),s.radius=n.min.distanceTo(n.max)/2,h.boundingSphere=s}function Ee(h,e,t){const i=e.attributes,n=[];function r(s,l){return t.getDependency("accessor",s).then(function(o){h.setAttribute(l,o)})}for(const s in i){const l=ce[s]||s.toLowerCase();l in h.attributes||n.push(r(i[s],l))}if(e.indices!==void 0&&!h.index){const s=t.getDependency("accessor",e.indices).then(function(l){h.setIndex(l)});n.push(s)}return O(h,e),vn(h,e,t),Promise.all(n).then(function(){return e.targets!==void 0?bn(h,e.targets,t):h})}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.18.2
 * @author George Michael Brower
 * @license MIT
 */class k{constructor(e,t,i,n,r="div"){this.parent=e,this.object=t,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(n),this.$name=document.createElement("div"),this.$name.classList.add("name"),k.nextNameID=k.nextNameID||0,this.$name.id=`lil-gui-name-${++k.nextNameID}`,this.$widget=document.createElement(r),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",s=>s.stopPropagation()),this.domElement.addEventListener("keyup",s=>s.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(e){return this._name=e,this.$name.innerHTML=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.object[this.property]=e,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Ln extends k{constructor(e,t,i){super(e,t,i,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function he(h){let e,t;return(e=h.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=h.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=h.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const Sn={isPrimitive:!0,match:h=>typeof h=="string",fromHexString:he,toHexString:he},Y={isPrimitive:!0,match:h=>typeof h=="number",fromHexString:h=>parseInt(h.substring(1),16),toHexString:h=>"#"+h.toString(16).padStart(6,0)},Rn={isPrimitive:!1,match:h=>Array.isArray(h),fromHexString(h,e,t=1){const i=Y.fromHexString(h);e[0]=(i>>16&255)/255*t,e[1]=(i>>8&255)/255*t,e[2]=(i&255)/255*t},toHexString([h,e,t],i=1){i=255/i;const n=h*i<<16^e*i<<8^t*i<<0;return Y.toHexString(n)}},Cn={isPrimitive:!1,match:h=>Object(h)===h,fromHexString(h,e,t=1){const i=Y.fromHexString(h);e.r=(i>>16&255)/255*t,e.g=(i>>8&255)/255*t,e.b=(i&255)/255*t},toHexString({r:h,g:e,b:t},i=1){i=255/i;const n=h*i<<16^e*i<<8^t*i<<0;return Y.toHexString(n)}},Mn=[Sn,Y,Rn,Cn];function In(h){return Mn.find(e=>e.match(h))}class kn extends k{constructor(e,t,i,n){super(e,t,i,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=In(this.initialValue),this._rgbScale=n,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=he(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class re extends k{constructor(e,t,i){super(e,t,i,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",n=>{n.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Nn extends k{constructor(e,t,i,n,r,s){super(e,t,i,"number"),this._initInput(),this.min(n),this.max(r);const l=s!==void 0;this.step(l?s:this._getImplicitStep(),l),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let m=parseFloat(this.$input.value);isNaN(m)||(this._stepExplicit&&(m=this._snap(m)),this.setValue(this._clamp(m)))},i=m=>{const _=parseFloat(this.$input.value);isNaN(_)||(this._snapClampSetValue(_+m),this.$input.value=this.getValue())},n=m=>{m.key==="Enter"&&this.$input.blur(),m.code==="ArrowUp"&&(m.preventDefault(),i(this._step*this._arrowKeyMultiplier(m))),m.code==="ArrowDown"&&(m.preventDefault(),i(this._step*this._arrowKeyMultiplier(m)*-1))},r=m=>{this._inputFocused&&(m.preventDefault(),i(this._step*this._normalizeMouseWheel(m)))};let s=!1,l,o,a,u,c;const d=5,p=m=>{l=m.clientX,o=a=m.clientY,s=!0,u=this.getValue(),c=0,window.addEventListener("mousemove",g),window.addEventListener("mouseup",b)},g=m=>{if(s){const _=m.clientX-l,x=m.clientY-o;Math.abs(x)>d?(m.preventDefault(),this.$input.blur(),s=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(_)>d&&b()}if(!s){const _=m.clientY-a;c-=_*this._step*this._arrowKeyMultiplier(m),u+c>this._max?c=this._max-u:u+c<this._min&&(c=this._min-u),this._snapClampSetValue(u+c)}a=m.clientY},b=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",b)},A=()=>{this._inputFocused=!0},f=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",n),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",p),this.$input.addEventListener("focus",A),this.$input.addEventListener("blur",f)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(f,m,_,x,L)=>(f-m)/(_-m)*(L-x)+x,t=f=>{const m=this.$slider.getBoundingClientRect();let _=e(f,m.left,m.right,this._min,this._max);this._snapClampSetValue(_)},i=f=>{this._setDraggingStyle(!0),t(f.clientX),window.addEventListener("mousemove",n),window.addEventListener("mouseup",r)},n=f=>{t(f.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",n),window.removeEventListener("mouseup",r)};let s=!1,l,o;const a=f=>{f.preventDefault(),this._setDraggingStyle(!0),t(f.touches[0].clientX),s=!1},u=f=>{f.touches.length>1||(this._hasScrollBar?(l=f.touches[0].clientX,o=f.touches[0].clientY,s=!0):a(f),window.addEventListener("touchmove",c,{passive:!1}),window.addEventListener("touchend",d))},c=f=>{if(s){const m=f.touches[0].clientX-l,_=f.touches[0].clientY-o;Math.abs(m)>Math.abs(_)?a(f):(window.removeEventListener("touchmove",c),window.removeEventListener("touchend",d))}else f.preventDefault(),t(f.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",c),window.removeEventListener("touchend",d)},p=this._callOnFinishChange.bind(this),g=400;let b;const A=f=>{if(Math.abs(f.deltaX)<Math.abs(f.deltaY)&&this._hasScrollBar)return;f.preventDefault();const _=this._normalizeMouseWheel(f)*this._step;this._snapClampSetValue(this.getValue()+_),this.$input.value=this.getValue(),clearTimeout(b),b=setTimeout(p,g)};this.$slider.addEventListener("mousedown",i),this.$slider.addEventListener("touchstart",u,{passive:!1}),this.$slider.addEventListener("wheel",A,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:i}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,i=-e.wheelDelta/120,i*=this._stepExplicit?1:10),t+-i}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Fn extends k{constructor(e,t,i,n){super(e,t,i,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(n)?n:Object.values(n),this._names=Array.isArray(n)?n:Object.keys(n),this._names.forEach(r=>{const s=document.createElement("option");s.innerHTML=r,this.$select.appendChild(s)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.innerHTML=t===-1?e:this._names[t],this}}class On extends k{constructor(e,t,i){super(e,t,i,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",n=>{n.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const Dn=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  background-color: var(--background-color);
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean .widget {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background-color: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background-color: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background-color: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui input {
  -webkit-tap-highlight-color: transparent;
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input::-webkit-outer-spin-button,
.lil-gui input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.lil-gui input[type=number] {
  -moz-appearance: textfield;
}
.lil-gui input[type=checkbox] {
  appearance: none;
  -webkit-appearance: none;
  height: var(--checkbox-size);
  width: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  -webkit-tap-highlight-color: transparent;
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: 1px solid var(--widget-color);
  text-align: center;
  line-height: calc(var(--widget-height) - 4px);
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
    border-color: var(--hover-color);
  }
  .lil-gui button:focus {
    border-color: var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function Hn(h){const e=document.createElement("style");e.innerHTML=h;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let ye=!1;class de{constructor({parent:e,autoPlace:t=e===void 0,container:i,width:n,title:r="Controls",closeFolders:s=!1,injectStyles:l=!0,touchStyles:o=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",a=>{(a.code==="Enter"||a.code==="Space")&&(a.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),o&&this.domElement.classList.add("allow-touch-styles"),!ye&&l&&(Hn(Dn),ye=!0),i?i.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),n&&this.domElement.style.setProperty("--width",n+"px"),this._closeFolders=s}add(e,t,i,n,r){if(Object(i)===i)return new Fn(this,e,t,i);const s=e[t];switch(typeof s){case"number":return new Nn(this,e,t,i,n,r);case"boolean":return new Ln(this,e,t);case"string":return new On(this,e,t);case"function":return new re(this,e,t)}}addColor(e,t,i=1){return new kn(this,e,t,i)}addFolder(e){const t=new de({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(i=>{i instanceof re||i._name in e.controllers&&i.load(e.controllers[i._name])}),t&&e.folders&&this.folders.forEach(i=>{i._title in e.folders&&i.load(e.folders[i._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof re)){if(i._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);t.controllers[i._name]=i.save()}}),e&&this.folders.forEach(i=>{if(i._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);t.folders[i._title]=i.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const i=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);const n=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=n+"px"})}),this}title(e){return this._title=e,this.$title.innerHTML=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(i=>i.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}const Pn={id:"container",class:"flex justify-center items-center flex-col"},Gn=Vt({__name:"webgl_animation_skinning_blending",setup(h){let e,t,i,n,r,s,l,o;const a=[];let u,c,d,p,g,b,A,f,m=!1,_=0;const x=window.innerWidth*4/5,L=window.innerHeight*4/5;return Ut(()=>{const y=document.getElementById("container");v();function v(){i=new Fe(45,x/L,1,1e3),i.position.set(1,2,-3),i.lookAt(0,1,0),o=new Gt,e=new It,e.background=new D(10526880),e.fog=new kt(10526880,10,50);const w=new Nt(16777215,4473924);w.position.set(0,20,0),e.add(w);const E=new Se(16777215);E.position.set(-3,10,-10),E.castShadow=!0,E.shadow.camera.top=2,E.shadow.camera.bottom=-2,E.shadow.camera.left=-2,E.shadow.camera.right=2,E.shadow.camera.near=.1,E.shadow.camera.far=40,e.add(E);const S=new Ne(new Ft(100,100),new Ot({color:10066329,depthWrite:!1}));S.rotation.x=-Math.PI/2,S.receiveShadow=!0,e.add(S),new zt().load(new URL(""+new URL("../models/gltf/Soldier.glb",import.meta.url).href,self.location).href,function(R){r=R.scene,e.add(r),r.traverse(function(j){j.isMesh&&(j.castShadow=!0)}),s=new Dt(r),s.visible=!1,e.add(s),P();const N=R.animations;l=new Ht(r),u=l.clipAction(N[0]),c=l.clipAction(N[3]),d=l.clipAction(N[1]),A=[u,c,d],fe(),me()}),t=new Pt({antialias:!0}),t.setPixelRatio(window.devicePixelRatio),t.setSize(x,L),t.outputEncoding=Bt,t.shadowMap.enabled=!0,y==null||y.appendChild(t.domElement),n=$t(),n.dom.style.top="0",n.dom.style.left="0",n.dom.style.position="absolute",y==null||y.appendChild(n.dom),window.addEventListener("resize",We)}function P(){const w=new de({width:310});w.domElement.style.top="0",w.domElement.style.right="0",w.domElement.style.position="absolute",y==null||y.appendChild(w.domElement);const E=w.addFolder("Visibility"),S=w.addFolder("Activation/Deactivation"),M=w.addFolder("Pausing/Stepping"),R=w.addFolder("Crossfading"),N=w.addFolder("Blend Weights"),j=w.addFolder("General Speed");f={"show model":!0,"show skeleton":!1,"deactivate all":$e,"activate all":fe,"pause/continue":Ge,"make single step":Ue,"modify step size":.05,"from walk to idle":function(){J(c,u,1)},"from idle to walk":function(){J(u,c,.5)},"from walk to run":function(){J(c,d,2.5)},"from run to walk":function(){J(d,c,5)},"use default duration":!0,"set custom duration":3.5,"modify idle weight":0,"modify walk weight":1,"modify run weight":0,"modify time scale":1},E.add(f,"show model").onChange(I),E.add(f,"show skeleton").onChange(U),S.add(f,"deactivate all"),S.add(f,"activate all"),M.add(f,"pause/continue"),M.add(f,"make single step"),M.add(f,"modify step size",.01,.1,.001),a.push(R.add(f,"from walk to idle")),a.push(R.add(f,"from idle to walk")),a.push(R.add(f,"from walk to run")),a.push(R.add(f,"from run to walk")),R.add(f,"use default duration"),R.add(f,"set custom duration",0,10,.01),N.add(f,"modify idle weight",0,1,.01).listen().onChange(function(K){B(u,K)}),N.add(f,"modify walk weight",0,1,.01).listen().onChange(function(K){B(c,K)}),N.add(f,"modify run weight",0,1,.01).listen().onChange(function(K){B(d,K)}),j.add(f,"modify time scale",0,1.5,.01).onChange(Be),E.open(),S.open(),M.open(),R.open(),N.open(),j.open()}function I(w){r.visible=w}function U(w){s.visible=w}function Be(w){l.timeScale=w}function $e(){A.forEach(function(w){w.stop()})}function fe(){B(u,f["modify idle weight"]),B(c,f["modify walk weight"]),B(d,f["modify run weight"]),A.forEach(function(w){w.play()})}function Ge(){m?(m=!1,q()):u.paused?q():Ve()}function Ve(){A.forEach(function(w){w.paused=!0})}function q(){A.forEach(function(w){w.paused=!1})}function Ue(){q(),m=!0,_=f["modify step size"]}function J(w,E,S){const M=je(S);m=!1,q(),w===u?pe(w,E,M):Ke(w,E,M)}function je(w){return f["use default duration"]?w:f["set custom duration"]}function Ke(w,E,S){l.addEventListener("loop",M);function M(R){R.action===w&&(l.removeEventListener("loop",M),pe(w,E,S))}}function pe(w,E,S){B(E,1),E.time=0,w.crossFadeTo(E,S,!0)}function B(w,E){w.enabled=!0,w.setEffectiveTimeScale(1),w.setEffectiveWeight(E)}function ze(){f["modify idle weight"]=p,f["modify walk weight"]=g,f["modify run weight"]=b}function Xe(){p===1&&g===0&&b===0&&(a[0].disable(),a[1].enable(),a[2].disable(),a[3].disable()),p===0&&g===1&&b===0&&(a[0].enable(),a[1].disable(),a[2].enable(),a[3].disable()),p===0&&g===0&&b===1&&(a[0].disable(),a[1].disable(),a[2].disable(),a[3].enable())}function We(){i.aspect=x/L,i.updateProjectionMatrix(),t.setSize(x,L)}function me(){requestAnimationFrame(me),p=u.getEffectiveWeight(),g=c.getEffectiveWeight(),b=d.getEffectiveWeight(),ze(),Xe();let w=o.getDelta();m&&(w=_,_=0),l.update(w),n.update(),t.render(e,i)}}),(y,v)=>(jt(),Kt("div",Pn))}});export{Gn as _};
