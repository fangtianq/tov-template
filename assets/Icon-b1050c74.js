import{cb as h,Y as b,f as g,d as t,X as C,ar as R,l as M}from"./index-01622320.js";import{j as y,c as S,a as $}from"./use-rtl-005adc7e.js";import{u as A}from"./light-7b7c27c0.js";function k(e,n,r){var o=-1,i=e.length;n<0&&(n=-n>i?0:i+n),r=r>i?i:r,r<0&&(r+=i),i=n>r?0:r-n>>>0,n>>>=0;for(var a=Array(i);++o<i;)a[o]=e[o+n];return a}function x(e,n,r){var o=e.length;return r=r===void 0?o:r,!n&&r>=o?e:k(e,n,r)}var w="\\ud800-\\udfff",F="\\u0300-\\u036f",j="\\ufe20-\\ufe2f",B="\\u20d0-\\u20ff",H=F+j+B,I="\\ufe0e\\ufe0f",P="\\u200d",O=RegExp("["+P+w+H+I+"]");function f(e){return O.test(e)}function U(e){return e.split("")}var l="\\ud800-\\udfff",J="\\u0300-\\u036f",N="\\ufe20-\\ufe2f",T="\\u20d0-\\u20ff",V=J+N+T,Z="\\ufe0e\\ufe0f",q="["+l+"]",u="["+V+"]",s="\\ud83c[\\udffb-\\udfff]",D="(?:"+u+"|"+s+")",d="[^"+l+"]",c="(?:\\ud83c[\\udde6-\\uddff]){2}",m="[\\ud800-\\udbff][\\udc00-\\udfff]",E="\\u200d",p=D+"?",v="["+Z+"]?",L="(?:"+E+"(?:"+[d,c,m].join("|")+")"+v+p+")*",W=v+p+L,_="(?:"+[d+u+"?",u,c,m,q].join("|")+")",z=RegExp(s+"(?="+s+")|"+_+W,"g");function K(e){return e.match(z)||[]}function X(e){return f(e)?K(e):U(e)}function Y(e){return function(n){n=h(n);var r=f(n)?X(n):void 0,o=r?r[0]:n.charAt(0),i=r?x(r,1).join(""):n.slice(1);return o[e]()+i}}var G=Y("toUpperCase");const Q=G;function oe(e,n){return b(e,r=>{r!==void 0&&(n.value=r)}),g(()=>e.value===void 0?n.value:e.value)}function ae(e,n){return t({name:Q(e),setup(){var r;const o=(r=C(y,null))===null||r===void 0?void 0:r.mergedIconsRef;return()=>{var i;const a=(i=o==null?void 0:o.value)===null||i===void 0?void 0:i[e];return a?a():n}}})}const ee=S("base-icon","\n height: 1em;\n width: 1em;\n line-height: 1em;\n text-align: center;\n display: inline-block;\n position: relative;\n fill: currentColor;\n transform: translateZ(0);\n",[$("svg","\n height: 1em;\n width: 1em;\n ")]),ue=t({name:"BaseIcon",props:{role:String,ariaLabel:String,ariaDisabled:{type:Boolean,default:void 0},ariaHidden:{type:Boolean,default:void 0},clsPrefix:{type:String,required:!0},onClick:Function,onMousedown:Function,onMouseup:Function},setup(e){A("-base-icon",ee,R(e,"clsPrefix"))},render(){return M("i",{class:"".concat(this.clsPrefix,"-base-icon"),onClick:this.onClick,onMousedown:this.onMousedown,onMouseup:this.onMouseup,role:this.role,"aria-label":this.ariaLabel,"aria-hidden":this.ariaHidden,"aria-disabled":this.ariaDisabled},this.$slots)}});export{ue as N,ae as r,oe as u};
