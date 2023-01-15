import{d as Xe,o as We,a as Ye,b as qe}from"./index-e6abbe05.js";import{L as Je,f as K,F as Re,g as C,h as Qe,i as Ze,D as Ce,j as Z,s as G,k as j,a as Ie,l as et,m as tt,I as st,n as nt,o as xe,p as Fe,q as ke,R as ce,r as it,t as re,u as rt,v as fe,w as ot,x as at,y as lt,z as ct,c as Ne,G as ut,H as dt,J as ht,K as pt,N as oe,P as Oe,O as ft,U as gt,X as De,Y as mt,Z as At,_ as xt,$ as wt,a0 as He,Q as bt,a1 as Et,a2 as _t,a3 as yt,a4 as Tt,a5 as vt,a6 as St,a7 as Mt,a8 as Lt,a9 as Rt,aa as we,ab as Ct,ac as It,ad as be,ae as Ft,af as Pe,ag as kt,V as se,ah as Nt,ai as Ot,e as Dt,aj as Ht,ak as Pt,al as $t,am as Gt,an as Ut,ao as Bt,W as Vt,d as Kt,C as jt}from"./stats.module-f66f6b0a.js";class zt extends Je{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Jt(t)}),this.register(function(t){return new is(t)}),this.register(function(t){return new rs(t)}),this.register(function(t){return new Zt(t)}),this.register(function(t){return new es(t)}),this.register(function(t){return new ts(t)}),this.register(function(t){return new ss(t)}),this.register(function(t){return new qt(t)}),this.register(function(t){return new ns(t)}),this.register(function(t){return new Qt(t)}),this.register(function(t){return new Wt(t)}),this.register(function(t){return new os(t)})}load(e,t,n,s){const r=this;let i;this.resourcePath!==""?i=this.resourcePath:this.path!==""?i=this.path:i=K.extractUrlBase(e),this.manager.itemStart(e);const a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},o=new Re(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){try{r.parse(l,i,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const i={},a={};if(typeof e=="string")r=e;else if(K.decodeText(new Uint8Array(e,0,4))===$e){try{i[b.KHR_BINARY_GLTF]=new as(e)}catch(c){s&&s(c);return}r=i[b.KHR_BINARY_GLTF].content}else r=K.decodeText(new Uint8Array(e));const o=JSON.parse(r);if(o.asset===void 0||o.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new bs(o,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const c=this.pluginCallbacks[h](l);a[c.name]=c,i[c.name]=!0}if(o.extensionsUsed)for(let h=0;h<o.extensionsUsed.length;++h){const c=o.extensionsUsed[h],p=o.extensionsRequired||[];switch(c){case b.KHR_MATERIALS_UNLIT:i[c]=new Yt;break;case b.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:i[c]=new us;break;case b.KHR_DRACO_MESH_COMPRESSION:i[c]=new ls(o,this.dracoLoader);break;case b.KHR_TEXTURE_TRANSFORM:i[c]=new cs;break;case b.KHR_MESH_QUANTIZATION:i[c]=new ds;break;default:p.indexOf(c)>=0&&a[c]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+c+'".')}}l.setExtensions(i),l.setPlugins(a),l.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function Xt(){let u={};return{get:function(e){return u[e]},add:function(e,t){u[e]=t},remove:function(e){delete u[e]},removeAll:function(){u={}}}}const b={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:"KHR_materials_pbrSpecularGlossiness",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression"};class Wt{constructor(e){this.parser=e,this.name=b.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,o=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const h=new C(16777215);o.color!==void 0&&h.fromArray(o.color);const c=o.range!==void 0?o.range:0;switch(o.type){case"directional":l=new Ce(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Ze(h),l.distance=c;break;case"spot":l=new Qe(h),l.distance=c,o.spot=o.spot||{},o.spot.innerConeAngle=o.spot.innerConeAngle!==void 0?o.spot.innerConeAngle:0,o.spot.outerConeAngle=o.spot.outerConeAngle!==void 0?o.spot.outerConeAngle:Math.PI/4,l.angle=o.spot.outerConeAngle,l.penumbra=1-o.spot.innerConeAngle/o.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+o.type)}return l.position.set(0,0,0),l.decay=2,o.intensity!==void 0&&(l.intensity=o.intensity),l.name=t.createUniqueName(o.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(o){return n._getNodeRef(t.cache,a,o)})}}class Yt{constructor(){this.name=b.KHR_MATERIALS_UNLIT}getMaterialType(){return Z}extendParams(e,t,n){const s=[];e.color=new C(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const i=r.baseColorFactor;e.color.fromArray(i),e.opacity=i[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,G))}return Promise.all(s)}}class qt{constructor(e){this.parser=e,this.name=b.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class Jt{constructor(e){this.parser=e,this.name=b.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:j}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],i=s.extensions[this.name];if(i.clearcoatFactor!==void 0&&(t.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){const a=i.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ie(a,a)}return Promise.all(r)}}class Qt{constructor(e){this.parser=e,this.name=b.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:j}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],i=s.extensions[this.name];return i.iridescenceFactor!==void 0&&(t.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(t.iridescenceIOR=i.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),i.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(r)}}class Zt{constructor(e){this.parser=e,this.name=b.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:j}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new C(0,0,0),t.sheenRoughness=0,t.sheen=1;const i=s.extensions[this.name];return i.sheenColorFactor!==void 0&&t.sheenColor.fromArray(i.sheenColorFactor),i.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",i.sheenColorTexture,G)),i.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(r)}}class es{constructor(e){this.parser=e,this.name=b.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:j}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],i=s.extensions[this.name];return i.transmissionFactor!==void 0&&(t.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",i.transmissionTexture)),Promise.all(r)}}class ts{constructor(e){this.parser=e,this.name=b.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:j}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],i=s.extensions[this.name];t.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",i.thicknessTexture)),t.attenuationDistance=i.attenuationDistance||1/0;const a=i.attenuationColor||[1,1,1];return t.attenuationColor=new C(a[0],a[1],a[2]),Promise.all(r)}}class ss{constructor(e){this.parser=e,this.name=b.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:j}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class ns{constructor(e){this.parser=e,this.name=b.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:j}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],i=s.extensions[this.name];t.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",i.specularTexture));const a=i.specularColorFactor||[1,1,1];return t.specularColor=new C(a[0],a[1],a[2]),i.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",i.specularColorTexture,G)),Promise.all(r)}}class is{constructor(e){this.parser=e,this.name=b.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],i=t.options.ktx2Loader;if(!i){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,i)}}class rs{constructor(e){this.parser=e,this.name=b.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const i=r.extensions[t],a=s.images[i.source];let o=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(o=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,i.source,o);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class os{constructor(e){this.name=b.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),i=this.parser.options.meshoptDecoder;if(!i||!i.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const o=s.byteOffset||0,l=s.byteLength||0,h=s.count,c=s.byteStride,p=new Uint8Array(a,o,l);return i.decodeGltfBufferAsync?i.decodeGltfBufferAsync(h,c,p,s.mode,s.filter).then(function(f){return f.buffer}):i.ready.then(function(){const f=new ArrayBuffer(h*c);return i.decodeGltfBuffer(new Uint8Array(f),h,c,p,s.mode,s.filter),f})})}else return null}}const $e="glTF",J=12,Ee={JSON:1313821514,BIN:5130562};class as{constructor(e){this.name=b.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,J);if(this.header={magic:K.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==$e)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-J,s=new DataView(e,J);let r=0;for(;r<n;){const i=s.getUint32(r,!0);r+=4;const a=s.getUint32(r,!0);if(r+=4,a===Ee.JSON){const o=new Uint8Array(e,J+r,i);this.content=K.decodeText(o)}else if(a===Ee.BIN){const o=J+r;this.body=e.slice(o,o+i)}r+=i}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class ls{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=b.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,i=e.extensions[this.name].attributes,a={},o={},l={};for(const h in i){const c=de[h]||h.toLowerCase();a[c]=i[h]}for(const h in e.attributes){const c=de[h]||h.toLowerCase();if(i[h]!==void 0){const p=n.accessors[e.attributes[h]],f=ee[p.componentType];l[c]=f.name,o[c]=p.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(c){s.decodeDracoFile(h,function(p){for(const f in p.attributes){const A=p.attributes[f],x=o[f];x!==void 0&&(A.normalized=x)}c(p)},a,l)})})}}class cs{constructor(){this.name=b.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class ue extends fe{constructor(e){super(),this.isGLTFSpecularGlossinessMaterial=!0;const t=["#ifdef USE_SPECULARMAP","	uniform sampler2D specularMap;","#endif"].join(`
`),n=["#ifdef USE_GLOSSINESSMAP","	uniform sampler2D glossinessMap;","#endif"].join(`
`),s=["vec3 specularFactor = specular;","#ifdef USE_SPECULARMAP","	vec4 texelSpecular = texture2D( specularMap, vUv );","	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture","	specularFactor *= texelSpecular.rgb;","#endif"].join(`
`),r=["float glossinessFactor = glossiness;","#ifdef USE_GLOSSINESSMAP","	vec4 texelGlossiness = texture2D( glossinessMap, vUv );","	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture","	glossinessFactor *= texelGlossiness.a;","#endif"].join(`
`),i=["PhysicalMaterial material;","material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );","vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );","float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );","material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.","material.roughness += geometryRoughness;","material.roughness = min( material.roughness, 1.0 );","material.specularColor = specularFactor;"].join(`
`),a={specular:{value:new C().setHex(16777215)},glossiness:{value:1},specularMap:{value:null},glossinessMap:{value:null}};this._extraUniforms=a,this.onBeforeCompile=function(o){for(const l in a)o.uniforms[l]=a[l];o.fragmentShader=o.fragmentShader.replace("uniform float roughness;","uniform vec3 specular;").replace("uniform float metalness;","uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>",t).replace("#include <metalnessmap_pars_fragment>",n).replace("#include <roughnessmap_fragment>",s).replace("#include <metalnessmap_fragment>",r).replace("#include <lights_physical_fragment>",i)},Object.defineProperties(this,{specular:{get:function(){return a.specular.value},set:function(o){a.specular.value=o}},specularMap:{get:function(){return a.specularMap.value},set:function(o){a.specularMap.value=o,o?this.defines.USE_SPECULARMAP="":delete this.defines.USE_SPECULARMAP}},glossiness:{get:function(){return a.glossiness.value},set:function(o){a.glossiness.value=o}},glossinessMap:{get:function(){return a.glossinessMap.value},set:function(o){a.glossinessMap.value=o,o?(this.defines.USE_GLOSSINESSMAP="",this.defines.USE_UV=""):(delete this.defines.USE_GLOSSINESSMAP,delete this.defines.USE_UV)}}}),delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this.setValues(e)}copy(e){return super.copy(e),this.specularMap=e.specularMap,this.specular.copy(e.specular),this.glossinessMap=e.glossinessMap,this.glossiness=e.glossiness,delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this}}class us{constructor(){this.name=b.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,this.specularGlossinessParams=["color","map","lightMap","lightMapIntensity","aoMap","aoMapIntensity","emissive","emissiveIntensity","emissiveMap","bumpMap","bumpScale","normalMap","normalMapType","displacementMap","displacementScale","displacementBias","specularMap","specular","glossinessMap","glossiness","alphaMap","envMap","envMapIntensity"]}getMaterialType(){return ue}extendParams(e,t,n){const s=t.extensions[this.name];e.color=new C(1,1,1),e.opacity=1;const r=[];if(Array.isArray(s.diffuseFactor)){const i=s.diffuseFactor;e.color.fromArray(i),e.opacity=i[3]}if(s.diffuseTexture!==void 0&&r.push(n.assignTexture(e,"map",s.diffuseTexture,G)),e.emissive=new C(0,0,0),e.glossiness=s.glossinessFactor!==void 0?s.glossinessFactor:1,e.specular=new C(1,1,1),Array.isArray(s.specularFactor)&&e.specular.fromArray(s.specularFactor),s.specularGlossinessTexture!==void 0){const i=s.specularGlossinessTexture;r.push(n.assignTexture(e,"glossinessMap",i)),r.push(n.assignTexture(e,"specularMap",i,G))}return Promise.all(r)}createMaterial(e){const t=new ue(e);return t.fog=!0,t.color=e.color,t.map=e.map===void 0?null:e.map,t.lightMap=null,t.lightMapIntensity=1,t.aoMap=e.aoMap===void 0?null:e.aoMap,t.aoMapIntensity=1,t.emissive=e.emissive,t.emissiveIntensity=e.emissiveIntensity===void 0?1:e.emissiveIntensity,t.emissiveMap=e.emissiveMap===void 0?null:e.emissiveMap,t.bumpMap=e.bumpMap===void 0?null:e.bumpMap,t.bumpScale=1,t.normalMap=e.normalMap===void 0?null:e.normalMap,t.normalMapType=et,e.normalScale&&(t.normalScale=e.normalScale),t.displacementMap=null,t.displacementScale=1,t.displacementBias=0,t.specularMap=e.specularMap===void 0?null:e.specularMap,t.specular=e.specular,t.glossinessMap=e.glossinessMap===void 0?null:e.glossinessMap,t.glossiness=e.glossiness,t.alphaMap=null,t.envMap=e.envMap===void 0?null:e.envMap,t.envMapIntensity=1,t}}class ds{constructor(){this.name=b.KHR_MESH_QUANTIZATION}}class Ge extends Ot{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let i=0;i!==s;i++)t[i]=n[r+i];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,i=this.sampleValues,a=this.valueSize,o=a*2,l=a*3,h=s-t,c=(n-t)/h,p=c*c,f=p*c,A=e*l,x=A-l,g=-2*f+3*p,d=f-p,w=1-g,E=d-p+c;for(let T=0;T!==a;T++){const S=i[x+T+a],y=i[x+T+o]*h,v=i[A+T+a],F=i[A+T]*h;r[T]=w*S+E*y+g*v+d*F}return r}}const hs=new bt;class ps extends Ge{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return hs.fromArray(r).normalize().toArray(r),r}}const O={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ee={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},_e={9728:Et,9729:Fe,9984:_t,9985:yt,9986:Tt,9987:ke},ye={33071:vt,33648:St,10497:ce},Te={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},de={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},$={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},fs={CUBICSPLINE:void 0,LINEAR:De,STEP:Mt},ae={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function gs(u){return u.DefaultMaterial===void 0&&(u.DefaultMaterial=new fe({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Lt})),u.DefaultMaterial}function Q(u,e,t){for(const n in t.extensions)u[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function V(u,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(u.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function ms(u,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){const c=e[l];if(c.POSITION!==void 0&&(n=!0),c.NORMAL!==void 0&&(s=!0),c.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(u);const i=[],a=[],o=[];for(let l=0,h=e.length;l<h;l++){const c=e[l];if(n){const p=c.POSITION!==void 0?t.getDependency("accessor",c.POSITION):u.attributes.position;i.push(p)}if(s){const p=c.NORMAL!==void 0?t.getDependency("accessor",c.NORMAL):u.attributes.normal;a.push(p)}if(r){const p=c.COLOR_0!==void 0?t.getDependency("accessor",c.COLOR_0):u.attributes.color;o.push(p)}}return Promise.all([Promise.all(i),Promise.all(a),Promise.all(o)]).then(function(l){const h=l[0],c=l[1],p=l[2];return n&&(u.morphAttributes.position=h),s&&(u.morphAttributes.normal=c),r&&(u.morphAttributes.color=p),u.morphTargetsRelative=!0,u})}function As(u,e){if(u.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)u.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(u.morphTargetInfluences.length===t.length){u.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)u.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function xs(u){const e=u.extensions&&u.extensions[b.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+ve(e.attributes):t=u.indices+":"+ve(u.attributes)+":"+u.mode,t}function ve(u){let e="";const t=Object.keys(u).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+u[t[n]]+";";return e}function he(u){switch(u){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function ws(u){return u.search(/\.jpe?g($|\?)/i)>0||u.search(/^data\:image\/jpeg/)===0?"image/jpeg":u.search(/\.webp($|\?)/i)>0||u.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}class bs{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Xt,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};const n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,r=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1;typeof createImageBitmap>"u"||n||s&&r<98?this.textureLoader=new tt(this.options.manager):this.textureLoader=new st(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Re(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this._invokeAll(function(i){return i._markDefs&&i._markDefs()}),Promise.all(this._invokeAll(function(i){return i.beforeRoot&&i.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(i){const a={scene:i[0][s.scene||0],scenes:i[0],animations:i[1],cameras:i[2],asset:s.asset,parser:n,userData:{}};Q(r,a,s),V(a,s),Promise.all(n._invokeAll(function(o){return o.afterRoot&&o.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const i=t[s].joints;for(let a=0,o=i.length;a<o;a++)e[i[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const i=e[s];i.mesh!==void 0&&(this._addNodeRef(this.meshCache,i.mesh),i.skin!==void 0&&(n[i.mesh].isSkinnedMesh=!0)),i.camera!==void 0&&this._addNodeRef(this.cameraCache,i.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(i,a)=>{const o=this.associations.get(i);o!=null&&this.associations.set(a,o);for(const[l,h]of i.children.entries())r(h,a.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this.loadNode(t);break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:throw new Error("Unknown type: "+e)}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,i){return n.getDependency(e,i)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[b.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,i){n.load(K.resolveURL(t.uri,s.path),r,void 0,function(){i(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0)return Promise.resolve(null);const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(i){const a=i[0],o=Te[s.type],l=ee[s.componentType],h=l.BYTES_PER_ELEMENT,c=h*o,p=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,A=s.normalized===!0;let x,g;if(f&&f!==c){const d=Math.floor(p/f),w="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+d+":"+s.count;let E=t.cache.get(w);E||(x=new l(a,d*f,s.count*f/h),E=new nt(x,f/h),t.cache.add(w,E)),g=new Rt(E,o,p%f/h,A)}else a===null?x=new l(s.count*o):x=new l(a,p,s.count*o),g=new xe(x,o,A);if(s.sparse!==void 0){const d=Te.SCALAR,w=ee[s.sparse.indices.componentType],E=s.sparse.indices.byteOffset||0,T=s.sparse.values.byteOffset||0,S=new w(i[1],E,s.sparse.count*d),y=new l(i[2],T,s.sparse.count*o);a!==null&&(g=new xe(g.array.slice(),g.itemSize,g.normalized));for(let v=0,F=S.length;v<F;v++){const D=S[v];if(g.setX(D,y[v*o]),o>=2&&g.setY(D,y[v*o+1]),o>=3&&g.setZ(D,y[v*o+2]),o>=4&&g.setW(D,y[v*o+3]),o>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return g})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,i=t.images[r];let a=this.textureLoader;if(i.uri){const o=n.manager.getHandler(i.uri);o!==null&&(a=o)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const s=this,r=this.json,i=r.textures[e],a=r.images[t],o=(a.uri||a.bufferView)+":"+i.sampler;if(this.textureCache[o])return this.textureCache[o];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,i.name&&(h.name=i.name);const p=(r.samplers||{})[i.sampler]||{};return h.magFilter=_e[p.magFilter]||Fe,h.minFilter=_e[p.minFilter]||ke,h.wrapS=ye[p.wrapS]||ce,h.wrapT=ye[p.wrapT]||ce,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[o]=l,l}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(c=>c.clone());const i=s.images[e],a=self.URL||self.webkitURL;let o=i.uri||"",l=!1;if(i.bufferView!==void 0)o=n.getDependency("bufferView",i.bufferView).then(function(c){l=!0;const p=new Blob([c],{type:i.mimeType});return o=a.createObjectURL(p),o});else if(i.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(o).then(function(c){return new Promise(function(p,f){let A=p;t.isImageBitmapLoader===!0&&(A=function(x){const g=new we(x);g.needsUpdate=!0,p(g)}),t.load(K.resolveURL(c,r.path),A,void 0,f)})}).then(function(c){return l===!0&&a.revokeObjectURL(o),c.userData.mimeType=i.mimeType||ws(i.uri),c}).catch(function(c){throw console.error("THREE.GLTFLoader: Couldn't load texture",o),c});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(i){if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),r.extensions[b.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[b.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const o=r.associations.get(i);i=r.extensions[b.KHR_TEXTURE_TRANSFORM].extendTexture(i,a),r.associations.set(i,o)}}return s!==void 0&&(i.encoding=s),e[t]=i,i})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,i=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let o=this.cache.get(a);o||(o=new it,re.prototype.copy.call(o,n),o.color.copy(n.color),o.map=n.map,o.sizeAttenuation=!1,this.cache.add(a,o)),n=o}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let o=this.cache.get(a);o||(o=new rt,re.prototype.copy.call(o,n),o.color.copy(n.color),this.cache.add(a,o)),n=o}if(s||r||i){let a="ClonedMaterial:"+n.uuid+":";n.isGLTFSpecularGlossinessMaterial&&(a+="specular-glossiness:"),s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),i&&(a+="flat-shading:");let o=this.cache.get(a);o||(o=n.clone(),r&&(o.vertexColors=!0),i&&(o.flatShading=!0),s&&(o.normalScale&&(o.normalScale.y*=-1),o.clearcoatNormalScale&&(o.clearcoatNormalScale.y*=-1)),this.cache.add(a,o),this.associations.set(o,this.associations.get(n))),n=o}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return fe}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let i;const a={},o=r.extensions||{},l=[];if(o[b.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]){const c=s[b.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];i=c.getMaterialType(),l.push(c.extendParams(a,r,t))}else if(o[b.KHR_MATERIALS_UNLIT]){const c=s[b.KHR_MATERIALS_UNLIT];i=c.getMaterialType(),l.push(c.extendParams(a,r,t))}else{const c=r.pbrMetallicRoughness||{};if(a.color=new C(1,1,1),a.opacity=1,Array.isArray(c.baseColorFactor)){const p=c.baseColorFactor;a.color.fromArray(p),a.opacity=p[3]}c.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",c.baseColorTexture,G)),a.metalness=c.metallicFactor!==void 0?c.metallicFactor:1,a.roughness=c.roughnessFactor!==void 0?c.roughnessFactor:1,c.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",c.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",c.metallicRoughnessTexture))),i=this._invokeOne(function(p){return p.getMaterialType&&p.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(p){return p.extendMaterialParams&&p.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=ot);const h=r.alphaMode||ae.OPAQUE;if(h===ae.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===ae.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&i!==Z&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ie(1,1),r.normalTexture.scale!==void 0)){const c=r.normalTexture.scale;a.normalScale.set(c,c)}return r.occlusionTexture!==void 0&&i!==Z&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&i!==Z&&(a.emissive=new C().fromArray(r.emissiveFactor)),r.emissiveTexture!==void 0&&i!==Z&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,G)),Promise.all(l).then(function(){let c;return i===ue?c=s[b.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(a):c=new i(a),r.name&&(c.name=r.name),V(c,r),t.associations.set(c,{materials:e}),r.extensions&&Q(s,c,r),c})}createUniqueName(e){const t=at.sanitizeNodeName(e||"");let n=t;for(let s=1;this.nodeNamesUsed[n];++s)n=t+"_"+s;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[b.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(o){return Se(o,a,t)})}const i=[];for(let a=0,o=e.length;a<o;a++){const l=e[a],h=xs(l),c=s[h];if(c)i.push(c.promise);else{let p;l.extensions&&l.extensions[b.KHR_DRACO_MESH_COMPRESSION]?p=r(l):p=Se(new lt,l,t),s[h]={primitive:l,promise:p},i.push(p)}}return Promise.all(i)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],i=r.primitives,a=[];for(let o=0,l=i.length;o<l;o++){const h=i[o].material===void 0?gs(this.cache):this.getDependency("material",i[o].material);a.push(h)}return a.push(t.loadGeometries(i)),Promise.all(a).then(function(o){const l=o.slice(0,o.length-1),h=o[o.length-1],c=[];for(let f=0,A=h.length;f<A;f++){const x=h[f],g=i[f];let d;const w=l[f];if(g.mode===O.TRIANGLES||g.mode===O.TRIANGLE_STRIP||g.mode===O.TRIANGLE_FAN||g.mode===void 0)d=r.isSkinnedMesh===!0?new ct(x,w):new Ne(x,w),d.isSkinnedMesh===!0&&!d.geometry.attributes.skinWeight.normalized&&d.normalizeSkinWeights(),g.mode===O.TRIANGLE_STRIP?d.geometry=Me(d.geometry,Ct):g.mode===O.TRIANGLE_FAN&&(d.geometry=Me(d.geometry,He));else if(g.mode===O.LINES)d=new ut(x,w);else if(g.mode===O.LINE_STRIP)d=new dt(x,w);else if(g.mode===O.LINE_LOOP)d=new ht(x,w);else if(g.mode===O.POINTS)d=new pt(x,w);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(d.geometry.morphAttributes).length>0&&As(d,r),d.name=t.createUniqueName(r.name||"mesh_"+e),V(d,r),g.extensions&&Q(s,d,g),t.assignFinalMaterial(d),c.push(d)}for(let f=0,A=c.length;f<A;f++)t.associations.set(c[f],{meshes:e,primitives:f});if(c.length===1)return c[0];const p=new oe;t.associations.set(p,{meshes:e});for(let f=0,A=c.length;f<A;f++)p.add(c[f]);return p})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Oe(ft.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new gt(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),V(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n={joints:t.joints};return t.inverseBindMatrices===void 0?Promise.resolve(n):this.getDependency("accessor",t.inverseBindMatrices).then(function(s){return n.inverseBindMatrices=s,n})}loadAnimation(e){const n=this.json.animations[e],s=[],r=[],i=[],a=[],o=[];for(let l=0,h=n.channels.length;l<h;l++){const c=n.channels[l],p=n.samplers[c.sampler],f=c.target,A=f.node,x=n.parameters!==void 0?n.parameters[p.input]:p.input,g=n.parameters!==void 0?n.parameters[p.output]:p.output;s.push(this.getDependency("node",A)),r.push(this.getDependency("accessor",x)),i.push(this.getDependency("accessor",g)),a.push(p),o.push(f)}return Promise.all([Promise.all(s),Promise.all(r),Promise.all(i),Promise.all(a),Promise.all(o)]).then(function(l){const h=l[0],c=l[1],p=l[2],f=l[3],A=l[4],x=[];for(let d=0,w=h.length;d<w;d++){const E=h[d],T=c[d],S=p[d],y=f[d],v=A[d];if(E===void 0)continue;E.updateMatrix();let F;switch($[v.path]){case $.weights:F=Ft;break;case $.rotation:F=be;break;case $.position:case $.scale:default:F=It;break}const D=E.name?E.name:E.uuid,ne=y.interpolation!==void 0?fs[y.interpolation]:De,z=[];$[v.path]===$.weights?E.traverse(function(M){M.morphTargetInfluences&&z.push(M.name?M.name:M.uuid)}):z.push(D);let H=S.array;if(S.normalized){const M=he(H.constructor),X=new Float32Array(H.length);for(let k=0,U=H.length;k<U;k++)X[k]=H[k]*M;H=X}for(let M=0,X=z.length;M<X;M++){const k=new F(z[M]+"."+$[v.path],T.array,H,ne);y.interpolation==="CUBICSPLINE"&&(k.createInterpolant=function(ie){const W=this instanceof be?ps:Ge;return new W(this.times,this.values,this.getValueSize()/3,ie)},k.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),x.push(k)}}const g=n.name?n.name:"animation_"+e;return new mt(g,void 0,x)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const i=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&i.traverse(function(a){if(a.isMesh)for(let o=0,l=s.weights.length;o<l;o++)a.morphTargetInfluences[o]=s.weights[o]}),i})}loadNode(e){const t=this.json,n=this.extensions,s=this,r=t.nodes[e],i=r.name?s.createUniqueName(r.name):"";return function(){const a=[],o=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return o&&a.push(o),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),Promise.all(a)}().then(function(a){let o;if(r.isBone===!0?o=new At:a.length>1?o=new oe:a.length===1?o=a[0]:o=new xt,o!==a[0])for(let l=0,h=a.length;l<h;l++)o.add(a[l]);if(r.name&&(o.userData.name=r.name,o.name=i),V(o,r),r.extensions&&Q(n,o,r),r.matrix!==void 0){const l=new Pe;l.fromArray(r.matrix),o.applyMatrix4(l)}else r.translation!==void 0&&o.position.fromArray(r.translation),r.rotation!==void 0&&o.quaternion.fromArray(r.rotation),r.scale!==void 0&&o.scale.fromArray(r.scale);return s.associations.has(o)||s.associations.set(o,{}),s.associations.get(o).nodes=e,o})}loadScene(e){const t=this.json,n=this.extensions,s=this.json.scenes[e],r=this,i=new oe;s.name&&(i.name=r.createUniqueName(s.name)),V(i,s),s.extensions&&Q(n,i,s);const a=s.nodes||[],o=[];for(let l=0,h=a.length;l<h;l++)o.push(Ue(a[l],i,t,r));return Promise.all(o).then(function(){const l=h=>{const c=new Map;for(const[p,f]of r.associations)(p instanceof re||p instanceof we)&&c.set(p,f);return h.traverse(p=>{const f=r.associations.get(p);f!=null&&c.set(p,f)}),c};return r.associations=l(i),i})}}function Ue(u,e,t,n){const s=t.nodes[u];return n.getDependency("node",u).then(function(r){if(s.skin===void 0)return r;let i;return n.getDependency("skin",s.skin).then(function(a){i=a;const o=[];for(let l=0,h=i.joints.length;l<h;l++)o.push(n.getDependency("node",i.joints[l]));return Promise.all(o)}).then(function(a){return r.traverse(function(o){if(!o.isMesh)return;const l=[],h=[];for(let c=0,p=a.length;c<p;c++){const f=a[c];if(f){l.push(f);const A=new Pe;i.inverseBindMatrices!==void 0&&A.fromArray(i.inverseBindMatrices.array,c*16),h.push(A)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',i.joints[c])}o.bind(new wt(l,h),o.matrixWorld)}),r})}).then(function(r){e.add(r);const i=[];if(s.children){const a=s.children;for(let o=0,l=a.length;o<l;o++){const h=a[o];i.push(Ue(h,r,t,n))}}return Promise.all(i)})}function Es(u,e,t){const n=e.attributes,s=new kt;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],o=a.min,l=a.max;if(o!==void 0&&l!==void 0){if(s.set(new se(o[0],o[1],o[2]),new se(l[0],l[1],l[2])),a.normalized){const h=he(ee[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new se,o=new se;for(let l=0,h=r.length;l<h;l++){const c=r[l];if(c.POSITION!==void 0){const p=t.json.accessors[c.POSITION],f=p.min,A=p.max;if(f!==void 0&&A!==void 0){if(o.setX(Math.max(Math.abs(f[0]),Math.abs(A[0]))),o.setY(Math.max(Math.abs(f[1]),Math.abs(A[1]))),o.setZ(Math.max(Math.abs(f[2]),Math.abs(A[2]))),p.normalized){const x=he(ee[p.componentType]);o.multiplyScalar(x)}a.max(o)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}u.boundingBox=s;const i=new Nt;s.getCenter(i.center),i.radius=s.min.distanceTo(s.max)/2,u.boundingSphere=i}function Se(u,e,t){const n=e.attributes,s=[];function r(i,a){return t.getDependency("accessor",i).then(function(o){u.setAttribute(a,o)})}for(const i in n){const a=de[i]||i.toLowerCase();a in u.attributes||s.push(r(n[i],a))}if(e.indices!==void 0&&!u.index){const i=t.getDependency("accessor",e.indices).then(function(a){u.setIndex(a)});s.push(i)}return V(u,e),Es(u,e,t),Promise.all(s).then(function(){return e.targets!==void 0?ms(u,e.targets,t):u})}function Me(u,e){let t=u.getIndex();if(t===null){const i=[],a=u.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)i.push(o);u.setIndex(i),t=u.getIndex()}else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),u}const n=t.count-2,s=[];if(e===He)for(let i=1;i<=n;i++)s.push(t.getX(0)),s.push(t.getX(i)),s.push(t.getX(i+1));else for(let i=0;i<n;i++)i%2===0?(s.push(t.getX(i)),s.push(t.getX(i+1)),s.push(t.getX(i+2))):(s.push(t.getX(i+2)),s.push(t.getX(i+1)),s.push(t.getX(i)));s.length/3!==n&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=u.clone();return r.setIndex(s),r}class N{constructor(e,t,n,s,r="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(s),this.$name=document.createElement("div"),this.$name.classList.add("name"),N.nextNameID=N.nextNameID||0,this.$name.id=`lil-gui-name-${++N.nextNameID}`,this.$widget=document.createElement(r),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.innerHTML=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.object[this.property]=e,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class _s extends N{constructor(e,t,n){super(e,t,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function pe(u){let e,t;return(e=u.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=u.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=u.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const ys={isPrimitive:!0,match:u=>typeof u=="string",fromHexString:pe,toHexString:pe},te={isPrimitive:!0,match:u=>typeof u=="number",fromHexString:u=>parseInt(u.substring(1),16),toHexString:u=>"#"+u.toString(16).padStart(6,0)},Ts={isPrimitive:!1,match:Array.isArray,fromHexString(u,e,t=1){const n=te.fromHexString(u);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(n&255)/255*t},toHexString([u,e,t],n=1){n=255/n;const s=u*n<<16^e*n<<8^t*n<<0;return te.toHexString(s)}},vs={isPrimitive:!1,match:u=>Object(u)===u,fromHexString(u,e,t=1){const n=te.fromHexString(u);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(n&255)/255*t},toHexString({r:u,g:e,b:t},n=1){n=255/n;const s=u*n<<16^e*n<<8^t*n<<0;return te.toHexString(s)}},Ss=[ys,te,Ts,vs];function Ms(u){return Ss.find(e=>e.match(u))}class Ls extends N{constructor(e,t,n,s){super(e,t,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=Ms(this.initialValue),this._rgbScale=s,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=pe(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class le extends N{constructor(e,t,n){super(e,t,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",s=>{s.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Rs extends N{constructor(e,t,n,s,r,i){super(e,t,n,"number"),this._initInput(),this.min(s),this.max(r);const a=i!==void 0;this.step(a?i:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let d=parseFloat(this.$input.value);isNaN(d)||(this._stepExplicit&&(d=this._snap(d)),this.setValue(this._clamp(d)))},t=d=>{const w=parseFloat(this.$input.value);isNaN(w)||(this._snapClampSetValue(w+d),this.$input.value=this.getValue())},n=d=>{d.code==="Enter"&&this.$input.blur(),d.code==="ArrowUp"&&(d.preventDefault(),t(this._step*this._arrowKeyMultiplier(d))),d.code==="ArrowDown"&&(d.preventDefault(),t(this._step*this._arrowKeyMultiplier(d)*-1))},s=d=>{this._inputFocused&&(d.preventDefault(),t(this._step*this._normalizeMouseWheel(d)))};let r=!1,i,a,o,l,h;const c=5,p=d=>{i=d.clientX,a=o=d.clientY,r=!0,l=this.getValue(),h=0,window.addEventListener("mousemove",f),window.addEventListener("mouseup",A)},f=d=>{if(r){const w=d.clientX-i,E=d.clientY-a;Math.abs(E)>c?(d.preventDefault(),this.$input.blur(),r=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(w)>c&&A()}if(!r){const w=d.clientY-o;h-=w*this._step*this._arrowKeyMultiplier(d),l+h>this._max?h=this._max-l:l+h<this._min&&(h=this._min-l),this._snapClampSetValue(l+h)}o=d.clientY},A=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",f),window.removeEventListener("mouseup",A)},x=()=>{this._inputFocused=!0},g=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",n),this.$input.addEventListener("wheel",s,{passive:!1}),this.$input.addEventListener("mousedown",p),this.$input.addEventListener("focus",x),this.$input.addEventListener("blur",g)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(d,w,E,T,S)=>(d-w)/(E-w)*(S-T)+T,t=d=>{const w=this.$slider.getBoundingClientRect();let E=e(d,w.left,w.right,this._min,this._max);this._snapClampSetValue(E)},n=d=>{this._setDraggingStyle(!0),t(d.clientX),window.addEventListener("mousemove",s),window.addEventListener("mouseup",r)},s=d=>{t(d.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",r)};let i=!1,a,o;const l=d=>{d.preventDefault(),this._setDraggingStyle(!0),t(d.touches[0].clientX),i=!1},h=d=>{d.touches.length>1||(this._hasScrollBar?(a=d.touches[0].clientX,o=d.touches[0].clientY,i=!0):l(d),window.addEventListener("touchmove",c,{passive:!1}),window.addEventListener("touchend",p))},c=d=>{if(i){const w=d.touches[0].clientX-a,E=d.touches[0].clientY-o;Math.abs(w)>Math.abs(E)?l(d):(window.removeEventListener("touchmove",c),window.removeEventListener("touchend",p))}else d.preventDefault(),t(d.touches[0].clientX)},p=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",c),window.removeEventListener("touchend",p)},f=this._callOnFinishChange.bind(this),A=400;let x;const g=d=>{if(Math.abs(d.deltaX)<Math.abs(d.deltaY)&&this._hasScrollBar)return;d.preventDefault();const E=this._normalizeMouseWheel(d)*this._step;this._snapClampSetValue(this.getValue()+E),this.$input.value=this.getValue(),clearTimeout(x),x=setTimeout(f,A)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",g,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Cs extends N{constructor(e,t,n,s){super(e,t,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(s)?s:Object.values(s),this._names=Array.isArray(s)?s:Object.keys(s),this._names.forEach(r=>{const i=document.createElement("option");i.innerHTML=r,this.$select.appendChild(i)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.innerHTML=t===-1?e:this._names[t],this}}class Is extends N{constructor(e,t,n){super(e,t,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",s=>{s.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const Fs=`.lil-gui {
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
  .lil-gui.allow-touch-styles {
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
.lil-gui.force-touch-styles {
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
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
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
}`;function ks(u){const e=document.createElement("style");e.innerHTML=u;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let Le=!1;class ge{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:s,title:r="Controls",injectStyles:i=!0,touchStyles:a=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",o=>{(o.code==="Enter"||o.code==="Space")&&(o.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),a&&this.domElement.classList.add("allow-touch-styles"),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),!Le&&i&&(ks(Fs),Le=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),s&&this.domElement.style.setProperty("--width",s+"px"),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation())}add(e,t,n,s,r){if(Object(n)===n)return new Cs(this,e,t,n);const i=e[t];switch(typeof i){case"number":return new Rs(this,e,t,n,s,r);case"boolean":return new _s(this,e,t);case"string":return new Is(this,e,t);case"function":return new le(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,i)}addColor(e,t,n=1){return new Ls(this,e,t,n)}addFolder(e){return new ge({parent:this,title:e})}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof le||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof le)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const n=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const s=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=s+"px"})}),this}title(e){return this._title=e,this.$title.innerHTML=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}const Ns={id:"container",class:"flex justify-center items-center flex-col"},Hs=Xe({__name:"webgl_animation_skinning_blending",setup(u){let e,t,n,s,r,i,a,o;const l=[];let h,c,p,f,A,x,g,d,w=!1,E=0;const T=window.innerWidth*4/5,S=window.innerHeight*4/5;return We(()=>{const y=document.getElementById("container");v();function v(){n=new Oe(45,T/S,1,1e3),n.position.set(1,2,-3),n.lookAt(0,1,0),o=new jt,e=new Dt,e.background=new C(10526880),e.fog=new Ht(10526880,10,50);const m=new Pt(16777215,4473924);m.position.set(0,20,0),e.add(m);const _=new Ce(16777215);_.position.set(-3,10,-10),_.castShadow=!0,_.shadow.camera.top=2,_.shadow.camera.bottom=-2,_.shadow.camera.left=-2,_.shadow.camera.right=2,_.shadow.camera.near=.1,_.shadow.camera.far=40,e.add(_);const L=new Ne(new $t(100,100),new Gt({color:10066329,depthWrite:!1}));L.rotation.x=-Math.PI/2,L.receiveShadow=!0,e.add(L),new zt().load(new URL(""+new URL("../models/gltf/Soldier.glb",import.meta.url).href,self.location).href,function(R){r=R.scene,e.add(r),r.traverse(function(Y){Y.isMesh&&(Y.castShadow=!0)}),i=new Ut(r),i.visible=!1,e.add(i),F();const P=R.animations;a=new Bt(r),h=a.clipAction(P[0]),c=a.clipAction(P[3]),p=a.clipAction(P[1]),g=[h,c,p],M(),Ae()}),t=new Vt({antialias:!0}),t.setPixelRatio(window.devicePixelRatio),t.setSize(T,S),t.outputEncoding=G,t.shadowMap.enabled=!0,y==null||y.appendChild(t.domElement),s=Kt(),s.dom.style.top="0",s.dom.style.left="0",s.dom.style.position="absolute",y==null||y.appendChild(s.dom),window.addEventListener("resize",ze)}function F(){const m=new ge({width:310});m.domElement.style.top="0",m.domElement.style.right="0",m.domElement.style.position="absolute",y==null||y.appendChild(m.domElement);const _=m.addFolder("Visibility"),L=m.addFolder("Activation/Deactivation"),I=m.addFolder("Pausing/Stepping"),R=m.addFolder("Crossfading"),P=m.addFolder("Blend Weights"),Y=m.addFolder("General Speed");d={"show model":!0,"show skeleton":!1,"deactivate all":H,"activate all":M,"pause/continue":X,"make single step":ie,"modify step size":.05,"from walk to idle":function(){W(c,h,1)},"from idle to walk":function(){W(h,c,.5)},"from walk to run":function(){W(c,p,2.5)},"from run to walk":function(){W(p,c,5)},"use default duration":!0,"set custom duration":3.5,"modify idle weight":0,"modify walk weight":1,"modify run weight":0,"modify time scale":1},_.add(d,"show model").onChange(D),_.add(d,"show skeleton").onChange(ne),L.add(d,"deactivate all"),L.add(d,"activate all"),I.add(d,"pause/continue"),I.add(d,"make single step"),I.add(d,"modify step size",.01,.1,.001),l.push(R.add(d,"from walk to idle")),l.push(R.add(d,"from idle to walk")),l.push(R.add(d,"from walk to run")),l.push(R.add(d,"from run to walk")),R.add(d,"use default duration"),R.add(d,"set custom duration",0,10,.01),P.add(d,"modify idle weight",0,1,.01).listen().onChange(function(q){B(h,q)}),P.add(d,"modify walk weight",0,1,.01).listen().onChange(function(q){B(c,q)}),P.add(d,"modify run weight",0,1,.01).listen().onChange(function(q){B(p,q)}),Y.add(d,"modify time scale",0,1.5,.01).onChange(z),_.open(),L.open(),I.open(),R.open(),P.open(),Y.open()}function D(m){r.visible=m}function ne(m){i.visible=m}function z(m){a.timeScale=m}function H(){g.forEach(function(m){m.stop()})}function M(){B(h,d["modify idle weight"]),B(c,d["modify walk weight"]),B(p,d["modify run weight"]),g.forEach(function(m){m.play()})}function X(){w?(w=!1,U()):h.paused?U():k()}function k(){g.forEach(function(m){m.paused=!0})}function U(){g.forEach(function(m){m.paused=!1})}function ie(){U(),w=!0,E=d["modify step size"]}function W(m,_,L){const I=Be(L);w=!1,U(),m===h?me(m,_,I):Ve(m,_,I)}function Be(m){return d["use default duration"]?m:d["set custom duration"]}function Ve(m,_,L){a.addEventListener("loop",I);function I(R){R.action===m&&(a.removeEventListener("loop",I),me(m,_,L))}}function me(m,_,L){B(_,1),_.time=0,m.crossFadeTo(_,L,!0)}function B(m,_){m.enabled=!0,m.setEffectiveTimeScale(1),m.setEffectiveWeight(_)}function Ke(){d["modify idle weight"]=f,d["modify walk weight"]=A,d["modify run weight"]=x}function je(){f===1&&A===0&&x===0&&(l[0].disable(),l[1].enable(),l[2].disable(),l[3].disable()),f===0&&A===1&&x===0&&(l[0].enable(),l[1].disable(),l[2].enable(),l[3].disable()),f===0&&A===0&&x===1&&(l[0].disable(),l[1].disable(),l[2].disable(),l[3].enable())}function ze(){n.aspect=T/S,n.updateProjectionMatrix(),t.setSize(T,S)}function Ae(){requestAnimationFrame(Ae),f=h.getEffectiveWeight(),A=c.getEffectiveWeight(),x=p.getEffectiveWeight(),Ke(),je();let m=o.getDelta();w&&(m=E,E=0),a.update(m),s.update(),t.render(e,n)}}),(y,v)=>(Ye(),qe("div",Ns))}});export{Hs as _};
