import{d as p,n as e,ae as d,aq as g,b as k,S as j,a4 as o}from"./index-08a94d7c.js";const x=p({__name:"mingyanjinju",setup(w){let r=e(""),s=e(""),n=e(""),l=e(""),u=e({});const f=e(!1),v=d(f),{onFetchResponse:_,data:t}=g("https://v1.hitokoto.cn/",{refetch:f}).get().json();return _(c=>{var a,h,m,i;r.value=(a=t.value)==null?void 0:a.hitokoto,s.value=(h=t.value)==null?void 0:h.from,n.value=(m=t.value)==null?void 0:m.creator,l.value=(i=t.value)==null?void 0:i.from_who,u.value=t.value}),(c,a)=>k(c.$slots,"default",{hitokoto:o(r),from:o(s),creator:o(n),from_who:o(l),mingyan:o(u),refresh:o(v)},()=>[j(" 友情很重要，会影响到很多人。 ")])}});export{x as _};
