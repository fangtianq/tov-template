System.register(["./index-legacy.6b320323.js"],(function(e,t){"use strict";var r;return{setters:[e=>{r=e.bh}],execute:function(){var t;e("s",(function(e,t){if(r)if(t){for(var o=[],l=t.offsetParent;null!==l&&e!==l&&e.contains(l);)o.push(l),l=l.offsetParent;var s=t.offsetTop+o.reduce(((e,t)=>e+t.offsetTop),0),i=s+t.offsetHeight,n=e.scrollTop,a=n+e.clientHeight;s<n?e.scrollTop=s:i>a&&(e.scrollTop=i-e.clientHeight)}else e.scrollTop=0})),e("g",(e=>{var o;if(!r)return 0;if(void 0!==t)return t;var l=document.createElement("div");l.className=`${e}-scrollbar__wrap`,l.style.visibility="hidden",l.style.width="100px",l.style.position="absolute",l.style.top="-9999px",document.body.appendChild(l);var s=l.offsetWidth;l.style.overflow="scroll";var i=document.createElement("div");i.style.width="100%",l.appendChild(i);var n=i.offsetWidth;return null==(o=l.parentNode)||o.removeChild(l),t=s-n}))}}}));
