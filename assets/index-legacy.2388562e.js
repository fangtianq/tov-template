!function(){function e(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function t(t){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?e(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):e(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function a(e,t,a){var o;return(t="symbol"==typeof(o=function(e,t){if("object"!=typeof e||!e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var o=a.call(e,t||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?o:String(o))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}System.register(["./index-legacy.7a69c0b7.js"],(function(e,a){"use strict";var o,r,l,i,n,s,d,g,p,y,c;return{setters:[e=>{o=e.d,r=e.aA,l=e.o,i=e.c,n=e.x,s=e.j,d=e.aB,g=e.bx,p=e.y,y=e.aw,c=e.az}],execute:function(){var a=o({name:"ElCollapseTransition"}),f=o(t(t({},a),{},{setup(e){var t=r("collapse-transition"),a=e=>{e.style.maxHeight="",e.style.overflow=e.dataset.oldOverflow,e.style.paddingTop=e.dataset.oldPaddingTop,e.style.paddingBottom=e.dataset.oldPaddingBottom},o={beforeEnter(e){e.dataset||(e.dataset={}),e.dataset.oldPaddingTop=e.style.paddingTop,e.dataset.oldPaddingBottom=e.style.paddingBottom,e.style.height&&(e.dataset.elExistsHeight=e.style.height),e.style.maxHeight=0,e.style.paddingTop=0,e.style.paddingBottom=0},enter(e){requestAnimationFrame((()=>{e.dataset.oldOverflow=e.style.overflow,e.dataset.elExistsHeight?e.style.maxHeight=e.dataset.elExistsHeight:0!==e.scrollHeight?e.style.maxHeight=`${e.scrollHeight}px`:e.style.maxHeight=0,e.style.paddingTop=e.dataset.oldPaddingTop,e.style.paddingBottom=e.dataset.oldPaddingBottom,e.style.overflow="hidden"}))},afterEnter(e){e.style.maxHeight="",e.style.overflow=e.dataset.oldOverflow},enterCancelled(e){a(e)},beforeLeave(e){e.dataset||(e.dataset={}),e.dataset.oldPaddingTop=e.style.paddingTop,e.dataset.oldPaddingBottom=e.style.paddingBottom,e.dataset.oldOverflow=e.style.overflow,e.style.maxHeight=`${e.scrollHeight}px`,e.style.overflow="hidden"},leave(e){0!==e.scrollHeight&&(e.style.maxHeight=0,e.style.paddingTop=0,e.style.paddingBottom=0)},afterLeave(e){a(e)},leaveCancelled(e){a(e)}};return(e,a)=>(l(),i(y,d({name:p(t).b()},g(o)),{default:n((()=>[s(e.$slots,"default")])),_:3},16,["name"]))}})),m=c(f,[["__file","collapse-transition.vue"]]);m.install=e=>{e.component(m.name,m)};e("_",m)}}}))}();