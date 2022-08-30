import{f as U}from"./foo.2bec8cbc.js";import{d as f,_ as I,b as A,u as N,a as p,E as F,i as V,c as x,e as q,f as z,w as K,g as J}from"./el-popper.d3425af9.js";import{p as g,m as S,q as P,s as Y,o as G,j as r,v as W,d as $,e as C,f as h,x as Q,w as b,h as v,t as _,y as X,z as T,B as Z,l as ee,C as te,i,D as ue,E as k,F as L,k as j}from"./index.63cc6daf.js";const oe=f([String,Object,Function]),ne={inheritAttrs:!1};function se(t,o,s,u,E,m){return g(t.$slots,"default")}var re=I(ne,[["render",se],["__file","/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection.vue"]]);const ae={name:"ElCollectionItem",inheritAttrs:!1};function le(t,o,s,u,E,m){return g(t.$slots,"default")}var ie=I(ae,[["render",le],["__file","/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection-item.vue"]]);const pe="data-el-collection-item",ce=t=>{const o=`El${t}Collection`,s=`${o}Item`,u=Symbol(o),E=Symbol(s),m={...re,name:o,setup(){const c=S(null),d=new Map;P(u,{itemMap:d,getItems:()=>{const n=r(c);if(!n)return[];const l=Array.from(n.querySelectorAll(`[${pe}]`));return[...d.values()].sort((y,w)=>l.indexOf(y.ref)-l.indexOf(w.ref))},collectionRef:c})}},B={...ie,name:s,setup(c,{attrs:d}){const a=S(null),n=Y(u,void 0);P(E,{collectionItemRef:a}),G(()=>{const l=r(a);l&&n.itemMap.set(l,{ref:l,...d})}),W(()=>{const l=r(a);n.itemMap.delete(l)})}};return{COLLECTION_INJECTION_KEY:u,COLLECTION_ITEM_INJECTION_KEY:E,ElCollection:m,ElCollectionItem:B}},D=A({trigger:N.trigger,effect:{...p.effect,default:"light"},type:{type:f(String)},placement:{type:f(String),default:"bottom"},popperOptions:{type:f(Object),default:()=>({})},id:String,size:{type:String,default:""},splitButton:Boolean,hideOnClick:{type:Boolean,default:!0},loop:{type:Boolean,default:!0},showTimeout:{type:Number,default:150},hideTimeout:{type:Number,default:150},tabindex:{type:f([Number,String]),default:0},maxHeight:{type:f([Number,String]),default:""},popperClass:{type:String,default:""},disabled:{type:Boolean,default:!1},role:{type:String,default:"menu"},buttonProps:{type:f(Object)}});A({command:{type:[Object,String,Number],default:()=>({})},disabled:Boolean,divided:Boolean,textValue:String,icon:{type:oe}});A({onKeydown:{type:f(Function)}});F.down,F.pageDown,F.home;F.up,F.pageUp,F.end;ce("Dropdown");const de=A({trigger:N.trigger,placement:D.placement,disabled:N.disabled,visible:p.visible,transition:p.transition,popperOptions:D.popperOptions,tabindex:D.tabindex,content:p.content,popperStyle:p.popperStyle,popperClass:p.popperClass,enterable:{...p.enterable,default:!0},effect:{...p.effect,default:"light"},teleported:p.teleported,title:String,width:{type:[String,Number],default:150},offset:{type:Number,default:void 0},showAfter:{type:Number,default:0},hideAfter:{type:Number,default:200},autoClose:{type:Number,default:0},showArrow:{type:Boolean,default:!0},persistent:{type:Boolean,default:!0},"onUpdate:visible":{type:Function}}),fe={"update:visible":t=>V(t),"before-enter":()=>!0,"before-leave":()=>!0,"after-enter":()=>!0,"after-leave":()=>!0},Ee={name:"ElPopover"},me=$({...Ee,props:de,emits:fe,setup(t,{expose:o,emit:s}){const u=t,E="onUpdate:visible",m=C(()=>u[E]),B=x("popover"),c=S(),d=C(()=>{var e;return(e=r(c))==null?void 0:e.popperRef}),a=C(()=>[{width:q(u.width)},u.popperStyle]),n=C(()=>[B.b(),u.popperClass,{[B.m("plain")]:!!u.content}]),l=C(()=>u.transition===`${B.namespace.value}-fade-in-linear`),O=()=>{var e;(e=c.value)==null||e.hide()},y=()=>{s("before-enter")},w=()=>{s("before-leave")},H=()=>{s("after-enter")},R=()=>{s("update:visible",!1),s("after-leave")};return o({popperRef:d,hide:O}),(e,$e)=>(h(),Q(r(z),Z({ref_key:"tooltipRef",ref:c},e.$attrs,{trigger:e.trigger,placement:e.placement,disabled:e.disabled,visible:e.visible,transition:e.transition,"popper-options":e.popperOptions,tabindex:e.tabindex,content:e.content,offset:e.offset,"show-after":e.showAfter,"hide-after":e.hideAfter,"auto-close":e.autoClose,"show-arrow":e.showArrow,"aria-label":e.title,effect:e.effect,enterable:e.enterable,"popper-class":r(n),"popper-style":r(a),teleported:e.teleported,persistent:e.persistent,"gpu-acceleration":r(l),"onUpdate:visible":r(m),onBeforeShow:y,onBeforeHide:w,onShow:H,onHide:R}),{content:b(()=>[e.title?(h(),v("div",{key:0,class:X(r(B).e("title")),role:"title"},_(e.title),3)):T("v-if",!0),g(e.$slots,"default",{},()=>[ee(_(e.content),1)])]),default:b(()=>[e.$slots.reference?g(e.$slots,"reference",{key:0}):T("v-if",!0)]),_:3},16,["trigger","placement","disabled","visible","transition","popper-options","tabindex","content","offset","show-after","hide-after","auto-close","show-arrow","aria-label","effect","enterable","popper-class","popper-style","teleported","persistent","gpu-acceleration","onUpdate:visible"]))}});var Be=I(me,[["__file","/home/runner/work/element-plus/element-plus/packages/components/popover/src/popover.vue"]]);const M=(t,o)=>{const s=o.arg||o.value,u=s==null?void 0:s.popperRef;u&&(u.triggerRef=t)};var Fe={mounted(t,o){M(t,o)},updated(t,o){M(t,o)}};const he="popover",Ce=K(Fe,he),ve=J(Be,{directive:Ce});const ge=["innerHTML"],be=["src"],_e=$({__name:"AppDesc",props:{descHtml:String,descImgSrc:String},setup(t){return(o,s)=>{const u=te("directive-image-previewer");return h(),v("div",null,[i("div",{innerHTML:t.descHtml},null,8,ge),ue(i("img",{class:"w-200 h-85",src:t.descImgSrc},null,8,be),[[u]])])}}});const Ae={class:"headline"},ye={class:"before"},we={class:"pt-4"},De={class:"justify-start flex-wrap"},Ne=["href"],Se=["src"],Ie={class:"text-xs p-1"},ke=$({__name:"app",setup(t){const o=U.parseURL,m=[{typeName:"\u7F16\u7A0B",apps:[{href:"https://www.aliyun.com/minisite/goods",name:"\u670D\u52A1\u5668\u8D2D\u4E70"},{href:"https://gitee.com/fangtianq",name:"\u7801\u4E91"}]},{typeName:"\u91D1\u878D",apps:[{href:"https://www.taoguba.com.cn/",name:"\u6DD8\u80A1\u5427"},{href:"https://xueqiu.com/",name:"\u96EA\u7403"}]},{typeName:"\u8BBE\u8BA1",apps:[{href:"https://pixso.cn/community/home/",name:"Pixso\u8D44\u6E90\u793E\u533A",descHtml:`
			<p class="indent-md">Pixso\u8D44\u6E90\u793E\u533A\uFF0C\u662F\u56FD\u5185\u4F18\u79C0\u7684\u5F00\u6E90\u8BBE\u8BA1\u793E\u533A\uFF0C\u5185\u7F6E\u6765\u81EA\u963F\u91CC\u3001\u5B57\u8282\u3001\u817E\u8BAF\u3001\u4EAC\u4E1C\u3001\u8C37\u6B4C\u3001\u534E\u4E3A\u7B49\u8BBE\u8BA1\u7CFB\u7EDF\uFF0C\u8D853000+UI\u7EC4\u4EF6\u5E93\uFF0C\u6BCF\u6708\u66F4\u65B0\u4E0A\u767E\u4E2A\u7CBE\u54C1\u6A21\u677F\uFF0C\u5206\u7C7B\u6DB5\u76D6\u79FB\u52A8\u8BBE\u8BA1\u3001\u7F51\u9875\u8BBE\u8BA1\u3001\u63D2\u753B\u3001\u7EBF\u6846\u56FE\u3001\u77E2\u91CF\u56FE\u6807\u7B49\u4E30\u5BCC\u7684\u8BBE\u8BA1\u8D44\u6E90\u3002</p>
			<p class="indent-md">\u5728\u8FD9\u91CC\uFF0C\u65B0\u624B\u53EF\u4EE5\u76F4\u63A5\u641C\u7D22\u5173\u952E\u8BCD\uFF0C\u5FEB\u901F\u5B66\u4E60\u4F18\u79C0\u8BBE\u8BA1\u5E08\u7684\u6392\u7248\u548C\u914D\u8272\uFF0C\u4E86\u89E3\u65B0\u6F6E\u7684\u8BBE\u8BA1\u8D8B\u52BF\u3002Pixso\u793E\u533A\u652F\u6301\u4E00\u952E\u590D\u7528\u6240\u6709\u8BBE\u8BA1\u8D44\u6E90\uFF0C\u4E14\u4E0D\u9650\u6587\u4EF6\u6570\uFF0C\u4E0D\u9650\u56E2\u961F\u548C\u9879\u76EE\u6570\uFF0C\u4E2A\u4EBA\u514D\u8D39\u4F7F\u7528\uFF01</p>
			<p class='indent-md'>Pixso\u8D44\u6E90\u793E\u533A\u7684\u5F00\u6E90\u7279\u6027\u662F\u72EC\u7279\u7684\uFF0C\u4E0E\u4F20\u7EDF\u7684\u8BBE\u8BA1\u793E\u533A\u6709\u5F88\u5927\u533A\u522B\u3002\u901A\u8FC7\u6700\u7B80\u5355\u7684\u4E00\u952E\u5206\u4EAB\u548C\u590D\u5236\uFF0C\u6211\u4EEC\u964D\u4F4E\u4E86\u8D44\u6E90\u5171\u4EAB\u7684\u6210\u672C\uFF0C\u8BA9\u6BCF\u4E00\u4F4D\u8BBE\u8BA1\u5E08\u90FD\u53EF\u4EE5\u66F4\u5BB9\u6613\u5730\u5411\u6240\u6709\u4EBA\u5C55\u793A\u81EA\u5DF1\u7684\u77E5\u8BC6\u6210\u679C\uFF0C\u4E5F\u53EF\u4EE5\u66F4\u76F4\u63A5\u5730\u4EAB\u53D7\u5230\u4ED6\u4EBA\u77E5\u8BC6\u6210\u679C\u5E26\u6765\u7684\u4FBF\u5229\u3002</p>
		`,descImgSrc:"https://pic1.zhimg.com/80/v2-f920346b7269e801ab93dc87e0e18ba4_720w.jpg?source=1940ef5c"},{href:"https://xueqiu.com/",name:"\u96EA\u7403"}]}];return(B,c)=>{const d=ve;return h(),v(L,null,k(m,a=>i("div",{key:a.typeName,class:"p-4 mx-auto w-300 mt-4 bg-light-50"},[i("div",Ae,[i("strong",ye,_(a.typeName),1)]),i("div",we,[i("ul",De,[(h(!0),v(L,null,k(a.apps,n=>(h(),v("li",{key:n.name,class:"w-36 inline-flex"},[j(d,{placement:"right",width:800,trigger:"hover",disabled:!(n.descHtml||n.descImgSrc)},{reference:b(()=>[i("a",{class:"font-thin inline",href:n.href,target:"_blank"},[i("img",{class:"inline w-4 h-4",src:n.imgSrc||`${r(o)(n.href).protocolHostAndPort}/favicon.ico`},null,8,Se),i("span",Ie,_(n.name),1)],8,Ne)]),default:b(()=>[j(_e,{"desc-html":n.descHtml,"desc-img-src":n.descImgSrc},null,8,["desc-html","desc-img-src"])]),_:2},1032,["disabled"])]))),128))])])])),64)}}});export{ke as default};
