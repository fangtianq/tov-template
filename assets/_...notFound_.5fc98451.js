import{d as p,l as x,o as b,e as T,f as C,h as i,m as k}from"./index.32fa65c5.js";import{b as y}from"./route-block.1e6a8648.js";var m="./notFound/33.svg";const S=({strings:s=["Put your strings here...","and Enjoy!"],typeSpeed:a=100,backSpeed:o=50,backDelay:r=500,startDelay:c=500,cursorChar:l="|",placeholder:d=!1,showCursor:u=!0,disableBackTyping:f=!1,onFinished:_=function(){},loop:h=!0})=>({strings:s,typeSpeed:a,backSpeed:o,cursorChar:l,backDelay:r,placeholder:d,startDelay:c,showCursor:u,loop:h,disableBackTyping:f,onFinished:_}),I=(s,a)=>{let o=0,r,c;const l=(e,t)=>{o===r&&t.loop&&(o=0),setTimeout(()=>{d(e[o],t)},t.startDelay)},d=(e,t)=>{let n=0,g=e.length,v=setInterval(()=>{if(t.placeholder?s.placeholder+=e[n]:s.textContent+=e[n],++n===g)return u(v,t)},t.typeSpeed)},u=(e,t)=>{if(clearInterval(e),t.disableBackTyping&&o===r-1||!t.loop&&o===r-1)return t.onFinished();setTimeout(()=>f(t),t.backDelay)},f=e=>{let t=e.placeholder?s.placeholder:s.textContent,n=t.length,g=setInterval(()=>{if(e.placeholder?s.placeholder=s.placeholder.substr(0,--n):s.textContent=t.substr(0,--n),n===0)return _(g,e)},e.backSpeed)},_=(e,t)=>{clearInterval(e),++o,l(c,t)},h=(e,t)=>{let n=document.createElement("span");n.classList.add("ityped-cursor"),n.textContent="|",n.textContent=t.cursorChar,e.insertAdjacentElement("afterend",n)};return(e=>{let t=S(e||{}),n=t.strings;c=n,r=n.length,typeof s=="string"&&(s=document.querySelector(s)),t.showCursor&&h(s,t),l(n,t)})(a)};const E={class:"flex flex-wrap h-screen text-center justify-around items-center"},F={class:"font-blod desc"},B=i("div",{class:"text-7xl code"},"404",-1),w=i("img",{src:m,class:"cover",alt:"page not found"},null,-1),D=p({__name:"[...notFound]",setup(s){const a=x(null);b(()=>{I(a.value,{showCursor:!1,disableBackTyping:!0,strings:[" is not found!"]})});const o=k(),r=()=>o.push("/");return(c,l)=>(T(),C("div",E,[i("div",F,[B,i("div",{ref_key:"content",ref:a,class:"text-3xl content"},"The Page",512),i("button",{active:"scale-90 transform",class:"rounded-lg transition btn",onClick:r}," \u{1F449} Go Home ")]),w]))}});typeof y=="function"&&y(D);export{D as default};
