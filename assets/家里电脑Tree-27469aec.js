import{g as o,h as C,b as M,i as j,j as B,e as D}from"./fileTree.vue_vue_type_script_setup_true_lang-6abdef21.js";import{a as u}from"./request-af25b9b6.js";import{d as N,g as S,e as r,h as w,l as e,at as l,o as E,a as I,w as n,x as a,A as f,y as m,B as O,a3 as x}from"./index-01622320.js";import{_ as P}from"./Button-45634ec5.js";import{_ as V}from"./Space-f0fd76ee.js";const $=N({__name:"家里电脑Tree",setup(z){const i=S({title:""}),c=r(),s=r([]),d=()=>{u.get("/fileTree/listChild",{parentId:0}).then(t=>{s.value.splice(0,s.value.length);const _=t.data.content;s.value.push(..._)})};w(()=>{d()});const g=()=>{const t=c.value.getFileTreetData();u.post("/fileTree/saveFileTree",{data:t}).then(_=>{d(),x.info("保存成功")})};r([{id:"文件夹",name:"文件夹",prefix:()=>e(o,null,{default:()=>e(l.folderF)}),children:[{id:"空的",name:"空的",disabled:!0,prefix:()=>e(o,null,{default:()=>e(l.folder)})},{id:"我的文件",name:"我的文件",prefix:()=>e(o,null,{default:()=>e(l.folderF)}),children:[{name:"template.txt",id:"template.txt",prefix:()=>e(o,null,{default:()=>e(l.file)})},{name:"template1.txt",id:"template1.txt",prefix:()=>e(o,null,{default:()=>e(l.file)})}]}]}]);const h=({option:t})=>({onClick(){!t.children&&!t.disabled&&(i.title=t.name,x.info("[Click] "+t.name))}});return(t,_)=>{const y=P,T=C,b=V,v=M,F=j,k=B,p=D;return E(),I("div",null,[n(p,{"has-sider":"",class:"h-screen"},{default:a(()=>[n(v,{bordered:"","content-style":"padding: 24px;"},{default:a(()=>[n(b,null,{default:a(()=>[n(y,{onClick:g},{default:a(()=>[f("保存")]),_:1}),n(T,{ref_key:"refFileTree",ref:c,data:m(s),"node-props":h},null,8,["data"])]),_:1})]),_:1}),n(p,null,{default:a(()=>[n(F,{bordered:"",class:"flex items-center font-bold text-20px px-4 py-4"},{default:a(()=>[f(O(m(i).title),1)]),_:1}),n(k,{"content-style":"padding: 24px;"})]),_:1})]),_:1})])}}}),K=Object.freeze(Object.defineProperty({__proto__:null,default:$},Symbol.toStringTag,{value:"Module"}));export{K as _};
