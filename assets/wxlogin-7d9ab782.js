import{d as a,g as n,o as i,P as o,Q as s}from"./index-08a94d7c.js";const p=["src"],f=a({__name:"wxlogin",props:{appid:{type:String,default:""},scope:{type:String,default:""},redirectUri:{type:String,default:""},state:{type:String,default:""},theme:{type:String,default:"black"},href:{type:String,default:""},selfRedirect:{type:String,default:"default"},loginType:{type:String,default:"jssdk"}},setup(t){const e=t,r=n(()=>"https://open.weixin.qq.com/connect/qrconnect?appid=".concat(e.appid,"&scope=").concat(e.scope,"&redirectUri=").concat(e.redirectUri,"&state=").concat(e.state,"&theme=").concat(e.theme,"&href=").concat(e.href,"&selfRedirect=").concat(e.selfRedirect,"&loginType=").concat(e.loginType));return(c,l)=>(i(),o("div",null,[s("iframe",{sandbox:"allow-scripts allow-top-navigation",scrolling:"no",width:"300",height:"400",frameBorder:"0",allowTransparency:"true",src:r.value},null,8,p)]))}});export{f as default};
