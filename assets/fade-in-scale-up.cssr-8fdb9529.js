import{a as t,j as r}from"./use-rtl-f285feb3.js";const{cubicBezierEaseIn:n,cubicBezierEaseOut:i}=r;function p({transformOrigin:s="inherit",duration:e=".2s",enterScale:o=".9",originalTransform:c="",originalTransition:a=""}={}){return[t("&.fade-in-scale-up-transition-leave-active",{transformOrigin:s,transition:"opacity ".concat(e," ").concat(n,", transform ").concat(e," ").concat(n," ").concat(a&&","+a)}),t("&.fade-in-scale-up-transition-enter-active",{transformOrigin:s,transition:"opacity ".concat(e," ").concat(i,", transform ").concat(e," ").concat(i," ").concat(a&&","+a)}),t("&.fade-in-scale-up-transition-enter-from, &.fade-in-scale-up-transition-leave-to",{opacity:0,transform:"".concat(c," scale(").concat(o,")")}),t("&.fade-in-scale-up-transition-leave-from, &.fade-in-scale-up-transition-enter-to",{opacity:1,transform:"".concat(c," scale(1)")})]}export{p as f};
