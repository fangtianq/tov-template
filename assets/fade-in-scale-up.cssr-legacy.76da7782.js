System.register(["./use-rtl-legacy.f56a8bd0.js"],(function(i,n){"use strict";var t,e;return{setters:[i=>{t=i.a,e=i.k}],execute:function(){i("f",(function(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=i.transformOrigin,e=void 0===n?"inherit":n,o=i.duration,s=void 0===o?".2s":o,c=i.enterScale,f=void 0===c?".9":c,u=i.originalTransform,l=void 0===u?"":u,v=i.originalTransition,d=void 0===v?"":v;return[t("&.fade-in-scale-up-transition-leave-active",{transformOrigin:e,transition:`opacity ${s} ${r}, transform ${s} ${r} ${d&&","+d}`}),t("&.fade-in-scale-up-transition-enter-active",{transformOrigin:e,transition:`opacity ${s} ${a}, transform ${s} ${a} ${d&&","+d}`}),t("&.fade-in-scale-up-transition-enter-from, &.fade-in-scale-up-transition-leave-to",{opacity:0,transform:`${l} scale(${f})`}),t("&.fade-in-scale-up-transition-leave-from, &.fade-in-scale-up-transition-enter-to",{opacity:1,transform:`${l} scale(1)`})]}));var n=e,r=n.cubicBezierEaseIn,a=n.cubicBezierEaseOut}}}));