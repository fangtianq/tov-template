/* empty css             */import{_ as ie,E as ue,a as de,v as me}from"./search-ea189aef.js";import{b as pe,E as ce,a as _e,c as fe}from"./table-column-0e3fc0de.js";/* empty css              *//* empty css            */import{a as ge,E as ve}from"./select-ccc78ac8.js";import"./scrollbar-c02d83c8.js";import"./popper-490b1252.js";import"./checkbox-bc390863.js";/* empty css                */import{E as ye}from"./switch-ce04770a.js";import{E as be,a as we}from"./form-item-6a1a9d26.js";import{_ as Ve}from"./delete-fb803db9.js";import{_ as he}from"./add-9341d99d.js";import{E as Ee}from"./button-bfcc4e4a.js";import{a as g}from"./request-af25b9b6.js";import{d as Ce,g as T,e as u,h as Ue,o as h,a as D,w as t,x as l,y as s,A as _,O as xe,c as M,b as x,z as ke,F as Se,D as Fe,a3 as d,Q as ze}from"./index-01622320.js";import{E as Be}from"./el-overlay-17a36949.js";import{E as Ae}from"./index-38142232.js";const Te={class:"block",style:{float:"right","margin-right":"10px","margin-top":"10px"}},De={style:{width:"80%",margin:"0 auto"}},Me={class:"dialog-footer"},Pe=0,Re=1,qe=Ce({__name:"userlist",setup(Le){const v={keyword:""},r=T({name:"",pass1:"",pass2:"",email:"",switchValue:!0,role:""}),P=[30,50,80,100],E=u(1),C=u(30),U=u([]),k=u(0);u(1);const y=u(!1),R=u(!1),f=u(!1),b=u([]),S=u([]),q=(a,e,i)=>{e===""?i(new Error("请再次输入密码")):e!==r.pass1?i(new Error("两次输入密码不一致!")):i(void 0)},w=u(),L=T({name:[{required:!0,message:"请输入用户昵称"},{min:2,max:10,message:"长度在 5 到 12 个字符"}],email:[{required:!0,message:"请输入邮箱地址"},{type:"email",message:"请输入正确的邮箱地址"}],pass1:[{required:!0,message:"请输入密码",trigger:"blur"},{pattern:/^[a-zA-Z]\w{5,17}$/,message:"密码格式不正确",trigger:"change,blur"}],pass2:[{required:!0,message:"请再次输入密码",trigger:"blur"},{validator:q,trigger:"blur"}],role:[{required:!0,message:"请选择用户角色",trigger:"change"}]}),m=async()=>{y.value=!0;let a={startPage:E.value,pageSize:C.value,keyword:v.keyword},e=await g.get("/8080/UserApi/v1/findUserByPage",a);if(!e.data){y.value=!1;return}e.data&&e.data.status===200?(U.value=e.data.data,k.value=e.data.total):(d.error(e.data.msg),U.value=[]),y.value=!1},$=async()=>{let a={name:r.name,pass:ze.MD5(r.pass1).toString(),email:r.email,status:r.switchValue,role:r.role},e=await g.post("/8080/UserApi/v1/addUser",a);e.data&&(e.data.status===200?(d.success(e.data.msg),F(w.value),f.value=!1):d.error(e.data.msg),m())},N=async a=>{a&&await a.validate((e,i)=>{e&&$()})},F=a=>{a&&a.resetFields()},O=()=>{f.value=!0,J()},j=a=>{if(b.value.length===0){d.error("请选择需要删除的用户");return}Be.confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"error"}).then(()=>{I()}).catch(()=>{d.error("已取消删除")})},I=async()=>{let a={ids:b},e=await g.post("/8080/UserApi/v1/delUsers",a);e.data&&(e.data.status===200?d.success(e.data.msg):d.error(e.data.msg),m())},J=async()=>{let a=await g.get("/8080/RoleApi/v1/findAllRoles");a.data&&(a.data.status===200?S.value=a.data.data:d.error(a.data.msg))},Q=a=>{b.value=[],a&&a.forEach(e=>{b.value.push(e.id)})},Z=a=>{C.value=a,m()},G=a=>{E.value=a,m()},H=(a,e)=>{K(a,e)},K=async(a,e)=>{let i={id:e,type:a},n=await g.post("/8080/UserApi/v1/editUserStatus",i);n.data&&(n.data.status===200?d.success(n.data.msg):d.error(n.data.msg),m())},W=()=>{};return Ue(()=>{m()}),(a,e)=>{const i=Ae,n=be,X=ie,p=Ee,Y=he,ee=Ve,z=we,V=pe,c=ce,B=ye,te=_e,ae=ue,le=ge,oe=ve,se=de,re=fe,ne=me;return h(),D("div",null,[t(re,null,{default:l(()=>[t(V,{span:24,class:"toolbar",style:{"padding-bottom":"0px"}},{default:l(()=>[t(z,{inline:!0,model:v},{default:l(()=>[t(n,null,{default:l(()=>[t(i,{modelValue:v.keyword,"onUpdate:modelValue":e[0]||(e[0]=o=>v.keyword=o),placeholder:"姓名"},null,8,["modelValue"])]),_:1}),t(n,null,{default:l(()=>[t(p,{type:"primary",loading:s(R),onClick:m},{default:l(()=>[t(X),_("查询")]),_:1},8,["loading"])]),_:1}),t(n,null,{default:l(()=>[t(p,{type:"success",onClick:O},{default:l(()=>[t(Y),_("新增")]),_:1})]),_:1}),t(n,null,{default:l(()=>[t(p,{type:"danger",onClick:j},{default:l(()=>[t(ee),_("删除")]),_:1})]),_:1}),t(n,null,{default:l(()=>[t(p,{type:"danger",class:"el-icon-delete",onClick:W},{default:l(()=>[_("百度富文本框")]),_:1})]),_:1})]),_:1})]),_:1}),t(V,null,{default:l(()=>[xe((h(),M(te,{data:s(U),"element-loading-text":"拼命加载中",style:{width:"100%"},onSelectionChange:Q},{default:l(()=>[t(c,{type:"selection",width:"55"}),t(c,{prop:"userName",label:"姓名",sortable:""}),t(c,{prop:"email",label:"邮箱",sortable:""}),t(c,{prop:"createTime",label:"创建时间",sortable:""}),t(c,{prop:"lastLoginTime",label:"上次登录时间",sortable:""}),t(c,{prop:"role",label:"角色",sortable:""}),t(c,{fixed:"right",label:"允许登陆",width:"120"},{default:l(o=>[t(B,{modelValue:o.row.status,"onUpdate:modelValue":A=>o.row.status=A,"active-color":"#13ce66","inactive-color":"#ff4949","active-value":Re,"inactive-value":Pe,onChange:A=>H(o.row.status,o.row.id)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1})]),_:1},8,["data"])),[[ne,s(y)]])]),_:1}),t(V,null,{default:l(()=>[x("div",Te,[t(ae,{"current-page":s(E),"page-sizes":P,"page-size":s(C),layout:"total, sizes, prev, pager, next, jumper",total:s(k),onSizeChange:Z,onCurrentChange:G},null,8,["current-page","page-size","total"])])]),_:1}),t(V,{span:2},{default:l(()=>[t(se,{modelValue:s(f),"onUpdate:modelValue":e[10]||(e[10]=o=>ke(f)?f.value=o:null),title:"新增用户"},{footer:l(()=>[x("div",Me,[t(p,{onClick:e[7]||(e[7]=o=>f.value=!1)},{default:l(()=>[_("取 消")]),_:1}),t(p,{onClick:e[8]||(e[8]=o=>F(s(w)))},{default:l(()=>[_("重置")]),_:1}),t(p,{type:"primary",onClick:e[9]||(e[9]=o=>N(s(w)))},{default:l(()=>[_("确 定")]),_:1})])]),default:l(()=>[x("div",De,[t(z,{ref_key:"ruleFormRef",ref:w,model:s(r),"status-icon":"",rules:s(L),inline:!1,"label-width":"90px",class:"demo-ruleForm"},{default:l(()=>[t(n,{label:"昵称",prop:"name"},{default:l(()=>[t(i,{modelValue:s(r).name,"onUpdate:modelValue":e[1]||(e[1]=o=>s(r).name=o),type:"text",placeholder:"用户昵称","auto-complete":"off"},null,8,["modelValue"])]),_:1}),t(n,{label:"邮箱",prop:"email"},{default:l(()=>[t(i,{modelValue:s(r).email,"onUpdate:modelValue":e[2]||(e[2]=o=>s(r).email=o),type:"text",placeholder:"用户邮箱","auto-complete":"off"},null,8,["modelValue"])]),_:1}),t(n,{label:"密码",prop:"pass1"},{default:l(()=>[t(i,{modelValue:s(r).pass1,"onUpdate:modelValue":e[3]||(e[3]=o=>s(r).pass1=o),type:"password",placeholder:"密码以字母开头，长度在6~18之间，只能包含字符、数字和下划线","auto-complete":"off"},null,8,["modelValue"])]),_:1}),t(n,{label:"确认密码",prop:"pass2"},{default:l(()=>[t(i,{modelValue:s(r).pass2,"onUpdate:modelValue":e[4]||(e[4]=o=>s(r).pass2=o),type:"password",placeholder:"确认密码","auto-complete":"off"},null,8,["modelValue"])]),_:1}),t(n,{label:"角色",prop:"role"},{default:l(()=>[t(oe,{modelValue:s(r).role,"onUpdate:modelValue":e[5]||(e[5]=o=>s(r).role=o),filterable:"",placeholder:"请选择"},{default:l(()=>[(h(!0),D(Se,null,Fe(s(S),o=>(h(),M(le,{key:o.id,label:o.name,value:o.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(n,{label:"是否启用"},{default:l(()=>[t(B,{modelValue:s(r).switchValue,"onUpdate:modelValue":e[6]||(e[6]=o=>s(r).switchValue=o),"active-color":"#13ce66","inactive-color":"#ff4949"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])])]),_:1},8,["modelValue"])]),_:1})]),_:1})])}}});const st=Object.freeze(Object.defineProperty({__proto__:null,default:qe},Symbol.toStringTag,{value:"Module"}));export{st as _};
