System.register(["./index-legacy.4a81f09d.js"],(function(e,t){"use strict";var r,i,n,a,l;return{setters:[e=>{r=e.d,i=e.g,n=e.j,a=e.x,l=e.m}],execute:function(){var t=["src"];e("default",r({__name:"wxlogin",props:{appid:{type:String,default:""},scope:{type:String,default:""},redirectUri:{type:String,default:""},state:{type:String,default:""},theme:{type:String,default:"black"},href:{type:String,default:""},selfRedirect:{type:String,default:"default"},loginType:{type:String,default:"jssdk"}},setup(e){var r=e,p=i((()=>`https://open.weixin.qq.com/connect/qrconnect?appid=${r.appid}&scope=${r.scope}&redirectUri=${r.redirectUri}&state=${r.state}&theme=${r.theme}&href=${r.href}&selfRedirect=${r.selfRedirect}&loginType=${r.loginType}`));return(e,r)=>(n(),a("div",null,[l("iframe",{sandbox:"allow-scripts allow-top-navigation",scrolling:"no",width:"300",height:"400",frameBorder:"0",allowTransparency:"true",src:p.value},null,8,t)]))}}))}}}));
