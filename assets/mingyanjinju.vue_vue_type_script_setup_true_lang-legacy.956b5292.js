System.register(["./index-legacy.7a69c0b7.js"],(function(e,o){"use strict";var t,a,u,r,v,l,n;return{setters:[e=>{t=e.d,a=e.e,u=e.L,r=e.a0,v=e.j,l=e.A,n=e.y}],execute:function(){e("_",t({__name:"mingyanjinju",setup(e){var o=a(""),t=a(""),i=a(""),s=a(""),d=a({}),c=a(!1),f=u(c),h=r("https://v1.hitokoto.cn/",{refetch:c}).get().json(),m=h.onFetchResponse,g=h.data;return m((e=>{var a,u,r,v;o.value=null===(a=g.value)||void 0===a?void 0:a.hitokoto,t.value=null===(u=g.value)||void 0===u?void 0:u.from,i.value=null===(r=g.value)||void 0===r?void 0:r.creator,s.value=null===(v=g.value)||void 0===v?void 0:v.from_who,d.value=g.value})),(e,a)=>v(e.$slots,"default",{hitokoto:n(o),from:n(t),creator:n(i),from_who:n(s),mingyan:n(d),refresh:n(f)},(()=>[l(" 友情很重要，会影响到很多人。 ")]))}}))}}}));