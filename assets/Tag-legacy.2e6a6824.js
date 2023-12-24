System.register(["./use-rtl-legacy.f56a8bd0.js","./light-legacy.c932a67f.js","./Close-legacy.779d7f08.js","./index-legacy.7a69c0b7.js"],(function(o,e){"use strict";var r,l,n,c,a,s,t,i,d,h,g,b,C,v,p,u,k,x,f,m,y,z,I;return{setters:[o=>{r=o.c,l=o.h,n=o.b,c=o.i,a=o.a,s=o.u,t=o.f,i=o.l,d=o.m,h=o.g},o=>{g=o.c,b=o.b,C=o.e,v=o.g,p=o.r,u=o.d},o=>{k=o.N},o=>{x=o.d,f=o.e,m=o.p,y=o.ar,z=o.f,I=o.l}],execute:function(){var e={closeIconSizeTiny:"12px",closeIconSizeSmall:"12px",closeIconSizeMedium:"14px",closeIconSizeLarge:"14px",closeSizeTiny:"16px",closeSizeSmall:"16px",closeSizeMedium:"18px",closeSizeLarge:"18px",padding:"0 7px",closeMargin:"0 0 0 4px",closeMarginRtl:"0 4px 0 0"},S=o("t",{name:"Tag",common:g,self:o=>{var r=o.textColor2,l=o.primaryColorHover,n=o.primaryColorPressed,c=o.primaryColor,a=o.infoColor,s=o.successColor,t=o.warningColor,i=o.errorColor,d=o.baseColor,h=o.borderColor,g=o.opacityDisabled,C=o.tagColor,v=o.closeIconColor,p=o.closeIconColorHover,u=o.closeIconColorPressed,k=o.borderRadiusSmall,x=o.fontSizeMini,f=o.fontSizeTiny,m=o.fontSizeSmall,y=o.fontSizeMedium,z=o.heightMini,I=o.heightTiny,S=o.heightSmall,P=o.heightMedium,B=o.closeColorHover,$=o.closeColorPressed,H=o.buttonColor2Hover,M=o.buttonColor2Pressed,R=o.fontWeightStrong;return Object.assign(Object.assign({},e),{closeBorderRadius:k,heightTiny:z,heightSmall:I,heightMedium:S,heightLarge:P,borderRadius:k,opacityDisabled:g,fontSizeTiny:x,fontSizeSmall:f,fontSizeMedium:m,fontSizeLarge:y,fontWeightStrong:R,textColorCheckable:r,textColorHoverCheckable:r,textColorPressedCheckable:r,textColorChecked:d,colorCheckable:"#0000",colorHoverCheckable:H,colorPressedCheckable:M,colorChecked:c,colorCheckedHover:l,colorCheckedPressed:n,border:`1px solid ${h}`,textColor:r,color:C,colorBordered:"rgb(250, 250, 252)",closeIconColor:v,closeIconColorHover:p,closeIconColorPressed:u,closeColorHover:B,closeColorPressed:$,borderPrimary:`1px solid ${b(c,{alpha:.3})}`,textColorPrimary:c,colorPrimary:b(c,{alpha:.12}),colorBorderedPrimary:b(c,{alpha:.1}),closeIconColorPrimary:c,closeIconColorHoverPrimary:c,closeIconColorPressedPrimary:c,closeColorHoverPrimary:b(c,{alpha:.12}),closeColorPressedPrimary:b(c,{alpha:.18}),borderInfo:`1px solid ${b(a,{alpha:.3})}`,textColorInfo:a,colorInfo:b(a,{alpha:.12}),colorBorderedInfo:b(a,{alpha:.1}),closeIconColorInfo:a,closeIconColorHoverInfo:a,closeIconColorPressedInfo:a,closeColorHoverInfo:b(a,{alpha:.12}),closeColorPressedInfo:b(a,{alpha:.18}),borderSuccess:`1px solid ${b(s,{alpha:.3})}`,textColorSuccess:s,colorSuccess:b(s,{alpha:.12}),colorBorderedSuccess:b(s,{alpha:.1}),closeIconColorSuccess:s,closeIconColorHoverSuccess:s,closeIconColorPressedSuccess:s,closeColorHoverSuccess:b(s,{alpha:.12}),closeColorPressedSuccess:b(s,{alpha:.18}),borderWarning:`1px solid ${b(t,{alpha:.35})}`,textColorWarning:t,colorWarning:b(t,{alpha:.15}),colorBorderedWarning:b(t,{alpha:.12}),closeIconColorWarning:t,closeIconColorHoverWarning:t,closeIconColorPressedWarning:t,closeColorHoverWarning:b(t,{alpha:.12}),closeColorPressedWarning:b(t,{alpha:.18}),borderError:`1px solid ${b(i,{alpha:.23})}`,textColorError:i,colorError:b(i,{alpha:.1}),colorBorderedError:b(i,{alpha:.08}),closeIconColorError:i,closeIconColorHoverError:i,closeIconColorPressedError:i,closeColorHoverError:b(i,{alpha:.12}),closeColorPressedError:b(i,{alpha:.18})})}}),P=o("c",{color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}}),B=r("tag","\n white-space: nowrap;\n position: relative;\n box-sizing: border-box;\n cursor: default;\n display: inline-flex;\n align-items: center;\n flex-wrap: nowrap;\n padding: var(--n-padding);\n border-radius: var(--n-border-radius);\n color: var(--n-text-color);\n background-color: var(--n-color);\n transition: \n border-color .3s var(--n-bezier),\n background-color .3s var(--n-bezier),\n color .3s var(--n-bezier),\n box-shadow .3s var(--n-bezier),\n opacity .3s var(--n-bezier);\n line-height: 1;\n height: var(--n-height);\n font-size: var(--n-font-size);\n",[l("strong","\n font-weight: var(--n-font-weight-strong);\n "),n("border","\n pointer-events: none;\n position: absolute;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n border-radius: inherit;\n border: var(--n-border);\n transition: border-color .3s var(--n-bezier);\n "),n("icon","\n display: flex;\n margin: 0 4px 0 0;\n color: var(--n-text-color);\n transition: color .3s var(--n-bezier);\n font-size: var(--n-avatar-size-override);\n "),n("avatar","\n display: flex;\n margin: 0 6px 0 0;\n "),n("close","\n margin: var(--n-close-margin);\n transition:\n background-color .3s var(--n-bezier),\n color .3s var(--n-bezier);\n "),l("round","\n padding: 0 calc(var(--n-height) / 3);\n border-radius: calc(var(--n-height) / 2);\n ",[n("icon","\n margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);\n "),n("avatar","\n margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);\n "),l("closable","\n padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);\n ")]),l("icon, avatar",[l("round","\n padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);\n ")]),l("disabled","\n cursor: not-allowed !important;\n opacity: var(--n-opacity-disabled);\n "),l("checkable","\n cursor: pointer;\n box-shadow: none;\n color: var(--n-text-color-checkable);\n background-color: var(--n-color-checkable);\n ",[c("disabled",[a("&:hover","background-color: var(--n-color-hover-checkable);",[c("checked","color: var(--n-text-color-hover-checkable);")]),a("&:active","background-color: var(--n-color-pressed-checkable);",[c("checked","color: var(--n-text-color-pressed-checkable);")])]),l("checked","\n color: var(--n-text-color-checked);\n background-color: var(--n-color-checked);\n ",[c("disabled",[a("&:hover","background-color: var(--n-color-checked-hover);"),a("&:active","background-color: var(--n-color-checked-pressed);")])])])]),$=Object.assign(Object.assign(Object.assign({},t.props),P),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),H=h("n-tag");o("_",x({name:"Tag",props:$,setup(o){var e=f(null),r=s(o),l=r.mergedBorderedRef,n=r.mergedClsPrefixRef,c=r.inlineThemeDisabled,a=r.mergedRtlRef,h=t("Tag","-tag",B,S,o,n);m(H,{roundRef:y(o,"round")});var g={setTextContent(o){var r=e.value;r&&(r.textContent=o)}},b=i("Tag",a,n),p=z((()=>{var e=o.type,r=o.size,n=o.color,c=void 0===n?{}:n,a=c.color,s=c.textColor,t=h.value,i=t.common.cubicBezierEaseInOut,g=t.self,b=g.padding,C=g.closeMargin,v=g.closeMarginRtl,p=g.borderRadius,u=g.opacityDisabled,k=g.textColorCheckable,x=g.textColorHoverCheckable,f=g.textColorPressedCheckable,m=g.textColorChecked,y=g.colorCheckable,z=g.colorHoverCheckable,I=g.colorPressedCheckable,S=g.colorChecked,P=g.colorCheckedHover,B=g.colorCheckedPressed,$=g.closeBorderRadius,H=g.fontWeightStrong,M=g[d("colorBordered",e)],R=g[d("closeSize",r)],T=g[d("closeIconSize",r)],j=g[d("fontSize",r)],E=g[d("height",r)],W=g[d("color",e)],w=g[d("textColor",e)],O=g[d("border",e)],_=g[d("closeIconColor",e)],F=g[d("closeIconColorHover",e)],D=g[d("closeIconColorPressed",e)],L=g[d("closeColorHover",e)];return{"--n-font-weight-strong":H,"--n-avatar-size-override":`calc(${E} - 8px)`,"--n-bezier":i,"--n-border-radius":p,"--n-border":O,"--n-close-icon-size":T,"--n-close-color-pressed":g[d("closeColorPressed",e)],"--n-close-color-hover":L,"--n-close-border-radius":$,"--n-close-icon-color":_,"--n-close-icon-color-hover":F,"--n-close-icon-color-pressed":D,"--n-close-icon-color-disabled":_,"--n-close-margin":C,"--n-close-margin-rtl":v,"--n-close-size":R,"--n-color":a||(l.value?M:W),"--n-color-checkable":y,"--n-color-checked":S,"--n-color-checked-hover":P,"--n-color-checked-pressed":B,"--n-color-hover-checkable":z,"--n-color-pressed-checkable":I,"--n-font-size":j,"--n-height":E,"--n-opacity-disabled":u,"--n-padding":b,"--n-text-color":s||w,"--n-text-color-checkable":k,"--n-text-color-checked":m,"--n-text-color-hover-checkable":x,"--n-text-color-pressed-checkable":f}})),k=c?C("tag",z((()=>{var e="",r=o.type,n=o.size,c=o.color,a=void 0===c?{}:c,s=a.color,t=a.textColor;return e+=r[0],e+=n[0],s&&(e+=`a${v(s)}`),t&&(e+=`b${v(t)}`),l.value&&(e+="c"),e})),p,o):void 0;return Object.assign(Object.assign({},g),{rtlEnabled:b,mergedClsPrefix:n,contentRef:e,mergedBordered:l,handleClick:function(e){if(!o.disabled&&o.checkable){var r=o.checked,l=o.onCheckedChange,n=o.onUpdateChecked,c=o["onUpdate:checked"];n&&n(!r),c&&c(!r),l&&l(!r)}},handleCloseClick:function(e){if(o.triggerClickOnClose||e.stopPropagation(),!o.disabled){var r=o.onClose;r&&u(r,e)}},cssVars:c?void 0:p,themeClass:null==k?void 0:k.themeClass,onRender:null==k?void 0:k.onRender})},render(){var o,e,r=this.mergedClsPrefix,l=this.rtlEnabled,n=this.closable,c=this.color,a=(void 0===c?{}:c).borderColor,s=this.round,t=this.onRender,i=this.$slots;null==t||t();var d=p(i.avatar,(o=>o&&I("div",{class:`${r}-tag__avatar`},o))),h=p(i.icon,(o=>o&&I("div",{class:`${r}-tag__icon`},o)));return I("div",{class:[`${r}-tag`,this.themeClass,{[`${r}-tag--rtl`]:l,[`${r}-tag--strong`]:this.strong,[`${r}-tag--disabled`]:this.disabled,[`${r}-tag--checkable`]:this.checkable,[`${r}-tag--checked`]:this.checkable&&this.checked,[`${r}-tag--round`]:s,[`${r}-tag--avatar`]:d,[`${r}-tag--icon`]:h,[`${r}-tag--closable`]:n}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},h||d,I("span",{class:`${r}-tag__content`,ref:"contentRef"},null===(e=(o=this.$slots).default)||void 0===e?void 0:e.call(o)),!this.checkable&&n?I(k,{clsPrefix:r,class:`${r}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:s,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?I("div",{class:`${r}-tag__border`,style:{borderColor:a}}):null)}}))}}}));
