import{A as a}from"./index.2be39f57.js";var s={AV:a};let r=s,l=e=>new s.AV.Query(e);r=s,l=e=>new s.AV.Query(e);let u=()=>r.AV.Captcha.request({width:100,height:50}),c=(e,n)=>{const t=new r.AV.User;return t.setUsername(e),t.setMobilePhoneNumber(e),t.setPassword(n),t.signUp()},A=(e,n)=>r.AV.User.logIn(e,n);const U=()=>r.AV.User.current(),V=()=>r.AV.User.logOut();export{V as a,u as b,U as c,A as l,l as q,c as s};
