import{d as A,g as W,aj as V,h as G,Z as R,al as X,Y as H,Q as K,o as i,a as r,b as l,B as u,y as o,am as q,E as c,O as D,an as _,F as f,n as L,D as z,A as M,ao as J,a3 as Q,ap as Z}from"./index-01622320.js";const ee={class:"p-8"},te=l("div",{id:"m-loading"},[M(" 页面加载中，请耐心等待... "),l("h1",{style:{"white-space":"pre"}},[M(" 推荐一个 m3u8 网页版提取工具，无需下载软件，打开网站即可下载，自动检测，一键下载。 工具链接：https://blog.luckly-mjw.cn/tool-show/m3u8-downloader/index.html 工具教程：https://segmentfault.com/a/1190000021847172?_ea=32289224 "),l("img",{src:"https://upyun.luckly-mjw.cn/Assets/blog/m3u8-downloader-121-75.jpeg",alt:"m3u8 视频下载工具",title:"logo"}),l("a",{target:"_blank",href:"https://blog.luckly-mjw.cn/tool-show/m3u8-downloader/index.html"},"点击跳转")])],-1),ne={id:"m-app"},se={class:"m-p-action g-box"},oe=J('<a class="m-p-help" target="_blank" href="https://segmentfault.com/a/1190000021847172">?</a><a class="m-p-mse" target="_blank" href="https://segmentfault.com/a/1190000025182822">无差别提取工具</a><a class="m-p-tamper" target="_blank" href="https://blog.luckly-mjw.cn/tool-show/m3u8-downloader/m3u8-downloader.user.js">手动添加/更新油猴插件</a><a class="m-p-github" target="_blank" href="https://github.com/Momo707577045/m3u8-downloader">github</a><a class="m-p-other" target="_blank" href="http://blog.luckly-mjw.cn/tool-show/index.html">其他实用工具</a><a class="m-p-language" href="http://blog.luckly-mjw.cn/tool-show/m3u8-downloader/index-en.html">English version</a>',6),ae={key:0,class:"m-p-refer",target:"_blank",href:"https://segmentfault.com/a/1190000024416860"},le=l("img",{src:"https://blog.luckly-mjw.cn/tool-show/m3u8-downloader/imgs/001.png",class:"link"},null,-1),ie=l("img",{src:"https://blog.luckly-mjw.cn/tool-show/m3u8-downloader/imgs/003.png",class:"text"},null,-1),re={class:"m-p-input-container"},de=["disabled"],me=["disabled"],ue=["disabled"],ce={key:2,class:"disable"},ge={key:3,class:"m-p-report",target:"_blank",href:"https://segmentfault.com/a/1190000021847172"},fe=l("a",{class:"m-p-final",target:"_blank",href:"https://segmentfault.com/a/1190000025182822"},"下载的视频看不了？试试这个终结解决方案「无差别视频提取工具」，有配套「油猴」插件啦！！！",-1),he=l("div",{class:"m-p-line"},null,-1),pe={class:"m-p-tips"},we={class:"m-p-segment"},ye=["title","onClick"],_e=A({__name:"xingyao",setup(Se){const e=W({copyUrl:"http://1257120875.vod2.myqcloud.com/0ef121cdvodtransgzp1257120875/3055695e5285890780828799271/v.f230.m3u8",url:"",tips:"m3u8 视频在线提取工具",title:"",isPause:!1,isGetMP4:!1,durationSecond:0,isShowRefer:!1,downloading:!1,beginTime:"",errorNum:0,finishNum:0,downloadIndex:0,finishList:[],tsUrlList:[],mediaFileList:[],isSupperStreamWrite:!1,streamWriter:null,streamDownloadIndex:0,rangeDownload:{isShowRange:!1,startSegment:"",endSegment:"",targetSegment:1},aesConf:{method:"",uri:"",iv:"",key:"",decryptor:null,stringToBuffer:function(t){return new TextEncoder().encode(t)}}}),{copy:I}=V(),T=()=>{I(e.copyUrl),Q.success("复制成功")};G(()=>{var t;document.getElementById("m-loading")&&((t=document.getElementById("m-loading"))==null||t.remove()),U(),setInterval(x.bind(this),2e3)}),R(()=>{});const U=()=>{let{href:t}=location;t.indexOf("?source=")>-1&&(e.url.value=t.split("?source=")[1])},p=()=>{var n;let t=document.title;try{t=((n=window.top)==null?void 0:n.document.title)||""}catch(s){}return t},{enter:N}=X();H(N,t=>{t&&g()});const h=t=>{t=t||{};let n=new XMLHttpRequest;t.type==="file"&&(n.responseType="arraybuffer"),n.onreadystatechange=function(){if(n.readyState===4){let s=n.status;s>=200&&s<300?t.success&&t.success(n.response):t.fail&&t.fail(s)}},n.open("GET",t.url,!0),n.send(null)},k=(t,n)=>{if(n=n||location.href,t.indexOf("http")===0)return location.href.indexOf("https")===0?t.replace("http://","https://"):t;if(t[0]==="/"){let s=n.split("/");return s[0]+"//"+s[2]+t}else{let s=n.split("/");return s.pop(),s.join("/")+"/"+t}},b=t=>{e.isGetMP4=t,e.title=new URL(e.url).searchParams.get("title")||e.title;let n=e.title||y(new Date,"YYYY_MM_DD hh_mm_ss");document.title!=="m3u8 downloader"&&(n=p()),e.streamWriter=window.streamSaver.createWriteStream("".concat(n,".").concat(t?"mp4":"ts")).getWriter(),g()},E=()=>{e.isGetMP4=!0,g()},g=(t=!1)=>{if(!e.url){alert("请输入链接");return}if(e.url.toLowerCase().indexOf("m3u8")===-1){alert("链接有误，请重新输入");return}if(e.downloading){alert("资源下载中，请稍后");return}if(location.href.indexOf("blog.luckly-mjw.cn")>-1&&e.url.indexOf(location.protocol)===-1){location.href="".concat(e.url.split(":")[0],"://blog.luckly-mjw.cn/tool-show/m3u8-downloader/index.html?source=").concat(e.url);return}location.href.indexOf("blog.luckly-mjw.cn")>-1&&window.history.replaceState(null,"","".concat(location.href.split("?")[0],"?source=").concat(e.url)),e.title=new URL(e.url).searchParams.get("title")||e.title,e.tips="m3u8 文件下载中，请稍后",e.beginTime=new Date,h({url:e.url,success:n=>{if(e.tsUrlList=[],e.finishList=[],n.split("\n").forEach(s=>{/^[^#]/.test(s)&&(e.tsUrlList.push(k(s,e.url)),e.finishList.push({title:s,status:""}))}),t){e.rangeDownload.isShowRange=!0,e.rangeDownload.endSegment=e.tsUrlList.length,e.rangeDownload.targetSegment=e.tsUrlList.length;return}else{let s=Math.max(e.rangeDownload.startSegment||1,1),a=Math.max(e.rangeDownload.endSegment||e.tsUrlList.length,1);s=Math.min(s,e.tsUrlList.length),a=Math.min(a,e.tsUrlList.length),e.rangeDownload.startSegment=Math.min(s,a),e.rangeDownload.endSegment=Math.max(s,a),e.rangeDownload.targetSegment=e.rangeDownload.endSegment-e.rangeDownload.startSegment+1,e.downloadIndex=e.rangeDownload.startSegment-1,e.downloading=!0}if(e.isGetMP4){let s=0;n.split("\n").forEach(a=>{a.toUpperCase().indexOf("#EXTINF:")>-1&&(s++,e.rangeDownload.startSegment<=s&&s<=e.rangeDownload.endSegment&&(e.durationSecond+=parseFloat(a.split("#EXTINF:")[1])))})}n.indexOf("#EXT-X-KEY")>-1?(e.aesConf.method=(n.match(/(.*METHOD=([^,\s]+))/)||["","",""])[2],e.aesConf.uri=(n.match(/(.*URI="([^"]+))"/)||["","",""])[2],e.aesConf.iv=(n.match(/(.*IV=([^,\s]+))/)||["","",""])[2],e.aesConf.iv=e.aesConf.iv?e.aesConf.stringToBuffer(e.aesConf.iv):"",e.aesConf.uri=k(e.aesConf.uri,e.url),P()):e.tsUrlList.length>0?w():S("资源为空，请查看链接是否有效")},fail:()=>{S("链接不正确，请查看链接是否有效")}})},P=()=>{h({type:"file",url:e.aesConf.uri,success:t=>{e.aesConf.key=e.aesConf.stringToBuffer(t),e.aesConf.key=t,e.aesConf.decryptor=K.AES,e.aesConf.decryptor.constructor(),e.aesConf.decryptor.expandKey(e.aesConf.key),w()},fail:()=>{S("视频已加密，可试用右下角入口的「无差别提取工具」")}})},j=(t,n)=>{let s=t.aesConf.iv||new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,n]);return t.aesConf.decryptor.decrypt(t,0,s.buffer||s,!0)},w=()=>{e.tips="ts 视频碎片下载中，请稍后";let t=()=>{let n=e.isPause,s=e.downloadIndex;s>=e.rangeDownload.endSegment||(e.downloadIndex++,e.finishList[s]&&e.finishList[s].status===""?(e.finishList[s].status="downloading",h({url:e.tsUrlList[s],type:"file",success:a=>{v(a,s,()=>e.downloadIndex<e.rangeDownload.endSegment&&!n&&t())},fail:()=>{e.errorNum++,e.finishList[s].status="error",e.downloadIndex<e.rangeDownload.endSegment&&!n&&t()}})):e.downloadIndex<e.rangeDownload.endSegment&&!n&&t())};for(let n=0;n<Math.min(6,e.rangeDownload.targetSegment-e.finishNum);n++)t()},v=(t,n,s=()=>{})=>{const a=e.aesConf.uri?j(t,n):t;F(a,n,m=>{if(e.mediaFileList[n-e.rangeDownload.startSegment+1]=m,e.finishList[n].status="finish",e.finishNum++,e.streamWriter){for(let d=e.streamDownloadIndex;d<e.mediaFileList.length&&e.mediaFileList[d];d++)e.streamWriter.write(new Uint8Array(e.mediaFileList[d])),e.mediaFileList[d]=null,e.streamDownloadIndex=d+1;e.streamDownloadIndex>=e.rangeDownload.targetSegment&&e.streamWriter.close()}else if(e.finishNum===e.rangeDownload.targetSegment){let d=e.title||y(e.beginTime,"YYYY_MM_DD hh_mm_ss");document.title!=="m3u8 downloader"&&(d=p()),C(e.mediaFileList,d)}s&&s()})},F=(t,n,s)=>{if(t.isGetMP4){let a=new Z.Transmuxer({keepOriginalTimestamps:!0,duration:parseInt(t.durationSecond)});a.on("data",m=>{if(n===t.rangeDownload.startSegment-1){let d=new Uint8Array(m.initSegment.byteLength+m.data.byteLength);d.set(m.initSegment,0),d.set(m.data,m.initSegment.byteLength),s(d.buffer)}else s(m.data)}),a.push(new Uint8Array(t)),a.flush()}else s(t)},Y=()=>{e.isPause=!e.isPause,!e.isPause&&e.retryAll(!0)},O=t=>{e.finishList[t].status==="error"&&(e.finishList[t].status="",h({url:e.tsUrlList[t],type:"file",success:n=>{e.errorNum--,v(n,t)},fail:()=>{e.finishList[t].status="error"}}))},x=t=>{if(!e.finishList.length||e.isPause)return;let n=e.downloadIndex;e.finishList.forEach((s,a)=>{s.status==="error"&&(s.status="",n=Math.min(n,a))}),e.errorNum=0,e.downloadIndex>=e.rangeDownload.endSegment||t?(e.downloadIndex=n,w()):e.downloadIndex=n},C=(t,n)=>{e.tips="ts 碎片整合中，请留意浏览器下载";let s=null,a=document.createElement("a");e.isGetMP4?(s=new Blob(t,{type:"video/mp4"}),a.download=n+".mp4"):(s=new Blob(t,{type:"video/MP2T"}),a.download=n+".ts"),a.href=URL.createObjectURL(s),a.style.display="none",document.body.appendChild(a),a.click(),a.remove()},y=(t,n)=>{const s={Y:t.getFullYear(),M:t.getMonth()+1,D:t.getDate(),h:t.getHours(),m:t.getMinutes(),s:t.getSeconds()};return n.replace(/Y+|M+|D+|h+|m+|s+/g,a=>(new Array(a.length).join("0")+s[a[0]]).substr(-a.length))},B=()=>{if(e.mediaFileList.length){let t=e.title||y(e.beginTime,"YYYY_MM_DD hh_mm_ss");document.title!=="m3u8 downloader"&&(t=p()),C(e.mediaFileList,t)}else alert("当前无已下载片段")},S=t=>{alert(t),e.downloading=!1,e.tips="m3u8 视频在线提取工具"},$=()=>{window.open("http://blog.luckly-mjw.cn/tool-show/m3u8-downloader/index.html")};return(t,n)=>(i(),r("div",ee,[te,l("section",ne,[l("section",se,u(o(e).tips),1),oe,o(e).isShowRefer?(i(),r("a",ae,[le,ie,l("i",{class:"close",onClick:n[0]||(n[0]=q(s=>o(e).isShowRefer=!1,["prevent"]))})])):c("",!0),l("div",{class:"m-p-temp-url",onDblclick:T}," 测试链接(双击复制)："+u(o(e).copyUrl),33),l("section",re,[D(l("input",{"onUpdate:modelValue":n[1]||(n[1]=s=>o(e).url=s),type:"text",disabled:o(e).downloading,placeholder:"请输入 m3u8 链接"},null,8,de),[[_,o(e).url]]),!o(e).downloading||o(e).rangeDownload.isShowRange?(i(),r(f,{key:0},[o(e).rangeDownload.isShowRange?(i(),r(f,{key:1},[D(l("input",{"onUpdate:modelValue":n[3]||(n[3]=s=>o(e).rangeDownload.startSegment=s),class:"range-input",type:"number",disabled:o(e).downloading,placeholder:"起始片段"},null,8,me),[[_,o(e).rangeDownload.startSegment]]),D(l("input",{"onUpdate:modelValue":n[4]||(n[4]=s=>o(e).rangeDownload.endSegment=s),class:"range-input",type:"number",disabled:o(e).downloading,placeholder:"截止片段"},null,8,ue),[[_,o(e).rangeDownload.endSegment]])],64)):(i(),r("div",{key:0,onClick:n[2]||(n[2]=s=>g(!0))}," 特定范围下载 "))],64)):c("",!0),o(e).downloading?o(e).finishNum===o(e).rangeDownload.targetSegment&&o(e).rangeDownload.targetSegment>0?(i(),r("div",ce," 下载完成 ")):(i(),r("div",{key:3,onClick:Y},u(o(e).isPause?"恢复下载":"暂停下载"),1)):(i(),r(f,{key:1},[l("div",{onClick:n[5]||(n[5]=s=>g(!1))},"原格式下载"),l("div",{onClick:E},"转码为MP4下载")],64))]),!o(e).downloading&&o(e).isSupperStreamWrite?(i(),r("div",{key:1,class:"m-p-stream",onClick:n[6]||(n[6]=s=>b(!1))}," 特大视频原格式下载，边下载边保存，彻底解决大文件下载内存不足问题 ")):c("",!0),!o(e).downloading&&o(e).isSupperStreamWrite?(i(),r("div",{key:2,class:"m-p-stream",onClick:n[7]||(n[7]=s=>b(!0))}," 特大视频 MP4 格式下载，边下载边保存，彻底解决大文件下载内存不足问题 ")):c("",!0),o(e).downloading?c("",!0):(i(),r("a",ge,"运行出现问题，可点击此按钮留言反馈，作者将第一时间跟进，共同维护本项目")),l("div",{class:"m-p-cross",onClick:$}," 当无法下载，点击跳转到原页面查看解决办法 "),fe,o(e).finishList.length>0?(i(),r(f,{key:4},[he,o(e).errorNum&&o(e).downloadIndex>=o(e).rangeDownload.targetSegment?(i(),r("div",{key:0,class:"m-p-retry",onClick:x}," 重新下载错误片段 ")):c("",!0),o(e).mediaFileList.length&&!o(e).streamWriter?(i(),r("div",{key:1,class:"m-p-force",onClick:B}," 强制下载现有片段 ")):c("",!0),l("div",pe," 待下载碎片总量："+u(o(e).rangeDownload.targetSegment)+"，已下载："+u(o(e).finishNum)+"，错误："+u(o(e).errorNum)+"，进度："+u((o(e).finishNum/o(e).rangeDownload.targetSegment*100).toFixed(2))+"% ",1),l("div",{class:L(["m-p-tips",[o(e).errorNum?"error-tips":""]])}," 若某视频碎片下载发生错误，将标记为红色，可点击相应图标进行重试 ",2),l("section",we,[(i(!0),r(f,null,z(o(e).finishList,(s,a)=>(i(),r("div",{key:s,class:L(["item",[s.status]]),title:s.title,onClick:m=>O(a)},u(a+1),11,ye))),128))])],64)):c("",!0)])]))}});export{_e as default};