!function(){var e=document.createElement("style");e.innerHTML='.before:before{position:absolute;width:6px;height:16px;background:#2777f8;border-radius:0 2px 2px 0;content:"";margin-left:-16px;margin-top:3px}\n',document.head.appendChild(e),System.register(["./foo-legacy.91604c54.js","./index-legacy.952e5319.js","./el-popover-legacy.31501493.js","./el-popper-legacy.f3703d60.js","./index-legacy.fd54118d.js"],(function(e){"use strict";var t,s,n,c,i,a,r,l,p,o,m,d,u,f;return{setters:[function(e){t=e.f},function(e){s=e.d,n=e.n,c=e.e,i=e.f,a=e.p,r=e.h,l=e.s,p=e.F,o=e.t,m=e.j,d=e.w,u=e.i},function(e){f=e.E},function(){},function(){}],execute:function(){const g=["src"],h=s({__name:"AppDesc",props:{descHtml:{type:String,default:()=>""},descImgSrc:{type:String,default:()=>""}},setup:e=>(t,s)=>{const l=n("dompurify-html"),p=n("directive-image-previewer");return c(),i("div",null,[a(r("div",null,null,512),[[l,e.descHtml]]),a(r("img",{class:"w-200 h-85",src:e.descImgSrc},null,8,g),[[p]])])}});const x={class:"headline"},y={class:"before"},w={class:"pt-4"},b={class:"justify-start flex-wrap"},v=["href"],S=["src"],j={class:"text-xs p-1"};e("default",s({__name:"app",setup(e){const s=t.parseURL,n=[{typeName:"编程",apps:[{href:"https://www.aliyun.com/minisite/goods",name:"服务器购买"},{href:"https://gitee.com/fangtianq",name:"码云"}]},{typeName:"金融",apps:[{href:"https://www.taoguba.com.cn/",name:"淘股吧"},{href:"https://xueqiu.com/",name:"雪球"}]},{typeName:"设计",apps:[{href:"https://pixso.cn/community/home/",name:"Pixso资源社区",descHtml:'\n\t\t\t<p class="indent-md">Pixso资源社区，是国内优秀的开源设计社区，内置来自阿里、字节、腾讯、京东、谷歌、华为等设计系统，超3000+UI组件库，每月更新上百个精品模板，分类涵盖移动设计、网页设计、插画、线框图、矢量图标等丰富的设计资源。</p>\n\t\t\t<p class="indent-md">在这里，新手可以直接搜索关键词，快速学习优秀设计师的排版和配色，了解新潮的设计趋势。Pixso社区支持一键复用所有设计资源，且不限文件数，不限团队和项目数，个人免费使用！</p>\n\t\t\t<p class=\'indent-md\'>Pixso资源社区的开源特性是独特的，与传统的设计社区有很大区别。通过最简单的一键分享和复制，我们降低了资源共享的成本，让每一位设计师都可以更容易地向所有人展示自己的知识成果，也可以更直接地享受到他人知识成果带来的便利。</p>\n\t\t',descImgSrc:"https://pic1.zhimg.com/80/v2-f920346b7269e801ab93dc87e0e18ba4_720w.jpg?source=1940ef5c"},{href:"https://xueqiu.com/",name:"雪球"}]}];return(e,t)=>{const a=f;return c(),i(p,null,l(n,(e=>r("div",{key:e.typeName,class:"p-4 mx-auto w-300 mt-4 bg-light-50"},[r("div",x,[r("strong",y,o(e.typeName),1)]),r("div",w,[r("ul",b,[(c(!0),i(p,null,l(e.apps,(e=>(c(),i("li",{key:e.name,class:"w-36 inline-flex"},[m(a,{placement:"right",width:800,trigger:"hover",disabled:!(e.descHtml||e.descImgSrc)},{reference:d((()=>[r("a",{class:"font-thin inline",href:e.href,target:"_blank"},[r("img",{class:"inline w-4 h-4",src:e.imgSrc||`${u(s)(e.href).protocolHostAndPort}/favicon.ico`},null,8,S),r("span",j,o(e.name),1)],8,v)])),default:d((()=>[m(h,{"desc-html":e.descHtml,"desc-img-src":e.descImgSrc},null,8,["desc-html","desc-img-src"])])),_:2},1032,["disabled"])])))),128))])])]))),64)}}}))}}}))}();
