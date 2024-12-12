import{d as X,r as w,o as O,a as r,c as a,b as t,u as h,t as u,F as y,e as $,f as A,n as j,g as I,h as P,i as M,s as J,T as Y,j as E,S as q,k as K,l as Z,m as G,p as Q}from"./vendor-CnH-rIII.js";(function(){const b=document.createElement("link").relList;if(b&&b.supports&&b.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))c(n);new MutationObserver(n=>{for(const e of n)if(e.type==="childList")for(const d of e.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function _(n){const e={};return n.integrity&&(e.integrity=n.integrity),n.referrerPolicy&&(e.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?e.credentials="include":n.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(n){if(n.ep)return;n.ep=!0;const e=_(n);fetch(n.href,e)}})();const R=X("main",{state:()=>({isMobile:!1}),getters:{},actions:{setIsMobile(f){this.isMobile=f}}}),S={Introduce:"首页",Conversations:"脑洞",Abilities:"打怪",Jobs:"工具",Products:"行动",Works:"共创",Pricing:"加入",Footer:"后记",AgeTitle:"岁数",Name:"CMQXDGD"},tt=""+new URL("logo-zBjCmdRd.png",import.meta.url).href,T=(f,b)=>{const _=f.__vccOpts||f;for(const[c,n]of b)_[c]=n;return _},et={class:"navbar navbar-expand-lg py-2 mb-3 jn-navbar-top"},st={id:"navbar-top",class:"container-xl"},ot={class:"jn-logo"},nt={class:"navbar-brand flex align-items-center align-content-center",href:"#"},it=["src"],rt={class:"fw-bold"},at=["title"],lt={class:"collapse navbar-collapse justify-content-end",id:"navbarNavAltMarkup"},ct={class:"navbar-nav"},dt=["href"],ut={__name:"Nav",setup(f){const b=w(0),_=()=>{const c=new Date,n=new Date("2024-06-30"),e=c.getTime()-n.getTime(),d=new Date(e),g=Math.abs(d.getUTCFullYear()-1970)+d.getMonth()/12;b.value=g.toFixed(2)};return O(()=>{_()}),(c,n)=>(r(),a("header",et,[t("nav",st,[t("div",ot,[t("a",nt,[t("span",null,[t("img",{src:h(tt),alt:"logo",class:"jn-logo-img"},null,8,it)]),t("span",rt,u(h(S).Name),1),t("span",{class:"fw-lighter",title:h(S).AgeTitle},".v"+u(b.value),9,at)])]),n[0]||(n[0]=t("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},[t("span",{class:"navbar-toggler-icon bg-transparent"})],-1)),t("div",lt,[t("div",ct,[(r(),a(y,null,$(["Introduce","Conversations","Abilities","Jobs","Products","Works","Pricing","Footer"],e=>t("a",{key:e,class:"nav-link",href:`#${e}`},u(h(S)[e]),9,dt)),64))])])])]))}},_t=T(ut,[["__scopeId","data-v-9827c2de"]]),D={name:"骑行友好实验 2024 策展 ",subtitle:"自由的风 · 骑行与生活",button:"Just ride it"},mt=`<p>On the way，一起定义骑行友好，一起共创打怪游戏，一起尽情自由 riding。
一场「骑行友好实验计划」行动正在进行  ing</p>
<h3>串门骑行打怪</h3>
<h4>板块：XXX</h4>
<br>
<ul>
<li><strong>理念</strong>：围绕可持续生活下绿色出行主题，人与人、人与车、人与社区展开…</li>
<li><strong>形式</strong>：街展 / 巡展 / 临展+参与式策展（认领版块 / 发起版块+自主行动）</li>
<li><strong>布展物料</strong>：低碳环保+可持续使用</li>
</ul>
<br>
<p>会发生什么呢？我们一起期待。</p>
<hr>
<p><strong>时间</strong>：2024 年 12 月 22 日</p>
<p><strong>地点</strong>：成都市成华区智慧驿站 - 绿道 100</p>
`,pt={class:"text-dark mb-4 jn-introduce-doc"},bt=["innerHTML"],gt={class:"btn-purple",href:"#Conversations"},vt={key:0,class:"col-6 px-4 pt-4"},ht={__name:"Introduce",setup(f){const b=R(),_=A(()=>b.isMobile),c=w(""),n=e=>e.toString().replace(/<li>/g,'<p><i class="bi bi-check-circle-fill text-purple"></i> ').replace(/<\/li>/g,"</p>").replace(/<ul>/g,"").replace(/<\/ul>/g,"");return c.value=n(mt),(e,d)=>(r(),a("div",{class:j(["row jn-introduce justify-content-evenly pt-5 mx-0",_.value?"jn-mobile-mt":"jn-desktop-mt"]),id:"Introduce"},[t("div",{class:j([_.value?"col-12 px-5 py-2":"col-5 p-5"])},[t("div",null,[t("h2",{class:j(["jn-introduce-title",[_.value?"jn-h2-mobile":"jn-h2"]])},u(h(D).name),3),t("h3",{class:j(["jn-introduce-subtitle",[_.value?"jn-h3-mobile":"jn-h3"]])},u(h(D).subtitle),3),t("div",pt,[t("div",{innerHTML:c.value,class:"mb-4"},null,8,bt),t("a",gt,[I(u(h(D).button)+"  ",1),d[0]||(d[0]=t("i",{class:"bi bi-arrow-down-circle"},null,-1))])])])],2),_.value?P("",!0):(r(),a("div",vt,d[1]||(d[1]=[t("div",{class:"jn-introduce-bg"},null,-1)])))],2))}},ft=T(ht,[["__scopeId","data-v-0d19dec0"]]),yt="modulepreload",jt=function(f,b){return new URL(f,b).href},C={},m=function(b,_,c){let n=Promise.resolve();if(_&&_.length>0){const d=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),g=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));n=Promise.allSettled(_.map(s=>{if(s=jt(s,c),s in C)return;C[s]=!0;const o=s.endsWith(".css"),p=o?'[rel="stylesheet"]':"";if(!!c)for(let k=d.length-1;k>=0;k--){const L=d[k];if(L.href===s&&(!o||L.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${p}`))return;const v=document.createElement("link");if(v.rel=o?"stylesheet":yt,o||(v.as="script"),v.crossOrigin="",v.href=s,g&&v.setAttribute("nonce",g),document.head.appendChild(v),o)return new Promise((k,L)=>{v.addEventListener("load",k),v.addEventListener("error",()=>L(new Error(`Unable to preload CSS for ${s}`)))})}))}function e(d){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=d,window.dispatchEvent(l),!l.defaultPrevented)throw d}return n.then(d=>{for(const l of d||[])l.status==="rejected"&&e(l.reason);return b().catch(e)})},wt=""+new URL("g1-lEpS5USt.png",import.meta.url).href,$t=Object.freeze(Object.defineProperty({__proto__:null,default:wt},Symbol.toStringTag,{value:"Module"})),kt=""+new URL("g3-DnxGvOJP.png",import.meta.url).href,Tt=Object.freeze(Object.defineProperty({__proto__:null,default:kt},Symbol.toStringTag,{value:"Module"})),Et=""+new URL("m1-CXl0nZy8.png",import.meta.url).href,Ot=Object.freeze(Object.defineProperty({__proto__:null,default:Et},Symbol.toStringTag,{value:"Module"})),Pt=""+new URL("m3-CydBvMxV.png",import.meta.url).href,Lt=Object.freeze(Object.defineProperty({__proto__:null,default:Pt},Symbol.toStringTag,{value:"Module"})),xt=""+new URL("m4-D4rQSjze.png",import.meta.url).href,It=Object.freeze(Object.defineProperty({__proto__:null,default:xt},Symbol.toStringTag,{value:"Module"})),Mt={Badge:"你认为的的骑行友好是什么？"},Rt={class:"jn-conversations mt-5 position-relative",id:"Conversations"},At={class:"badge bg-purple jn-badge"},St={class:"row justify-content-evenly mt-5 mx-0"},Dt={class:"px-5 col-12"},Vt={key:0},Ct=["innerHTML"],Ht=["src"],Bt={__name:"Conversations",setup(f){const b=w(!1),_=Object.assign({"/contents/conversations/conv1.md":()=>m(()=>import("./conv1-Ch_cdQ9Y.js"),[],import.meta.url),"/contents/conversations/conv2.md":()=>m(()=>import("./conv2-BgujmBUp.js"),[],import.meta.url),"/contents/conversations/conv3.md":()=>m(()=>import("./conv3-3oQv9wiT.js"),[],import.meta.url),"/contents/conversations/conv4.md":()=>m(()=>import("./conv4-BSlUcIE-.js"),[],import.meta.url),"/contents/conversations/conv5.md":()=>m(()=>import("./conv5-ydBSFbe3.js"),[],import.meta.url)}),c=Object.assign({"/contents/conversations/images/g1.png":$t,"/contents/conversations/images/g3.png":Tt,"/contents/conversations/images/m1.png":Ot,"/contents/conversations/images/m3.png":Lt,"/contents/conversations/images/m4.png":It}),n=M([]),e=async()=>{const l=Object.values(_).map(async g=>{const s=await g(),o=s.attributes,p=Object.keys(c).find(v=>v.includes(o.avatar)),i=p?c[p].default:null;return{html:d(s.html),attributes:{...o,avatar:i}}});n.push(...await Promise.all(l)),n.sort((g,s)=>s.attributes.date-g.attributes.date),b.value=!0},d=l=>l.toString().replace(/<li>/g,'<span class="badge bg-white text-purple">').replace(/<\/li>/g,"</span>").replace(/<ul>/g,"").replace(/<\/ul>/g,"");return O(async()=>{await e()}),(l,g)=>(r(),a("div",Rt,[t("span",At,u(h(Mt).Badge),1),t("div",St,[t("div",Dt,[b.value?(r(),a("div",Vt,[(r(!0),a(y,null,$(n,(s,o)=>(r(),a("div",{key:o,class:j(`row flex-nowrap align-items-start ${o%2===0?"":"flex-row-reverse"}`)},[t("div",{class:j(`conversation ${o%2===0?"conversation-right":"conversation-left"} col-8 col-md-9`),innerHTML:s.html},null,10,Ct),t("div",{class:j(["col-4 col-md-3",`jn-img-${o%2===0?"right":"left"}`])},[t("img",{src:s.attributes.avatar,alt:"avatar",class:"img-fluid rounded-circle jn-avatar"},null,8,Ht)],2)],2))),128))])):P("",!0)])])]))}},Ft=T(Bt,[["__scopeId","data-v-1395ae21"]]),H={Badge:"打怪游戏",Title:"2 个方向 3 个原则 8 大怪"},zt=`<h2></h2>
</br>
<p><strong>🌍 共骑地图</strong>：与关心绿色出行的个人和组织共同定义“骑行友好”，从成都成华区出发，循序渐进探索共创成都骑行友好地图。</p>
<p><strong>🚲 集结行动</strong>：汇聚关注绿色出行（自行车和电动车）的人和组织，通过<strong>游戏化打「怪」</strong> 的方式，实践骑行友好理念与绿色出行生活方式。</p>
<hr>
<ul>
<li>同频队友：结识一群热情且富有创意的骑行伙伴，共同探索骑行友好的新方法和理念。</li>
<li>有趣骑行：通过充满趣味的骑行友好实验行动，让每一次骑行都是一场友好探索之旅。</li>
<li>一起共创：共同推动可持续生活 · 绿色出行 · 骑行友好的可持续生活网络生长。</li>
</ul>
<hr>
<p>无论你是骑行工作者、通勤者还是骑行爱好者，
无论骑自行车还是电动车，
都欢迎加入我们，一起行动：D🚪🚴‍♂️👽～</p>
`,Ut={class:"jn-abilities mt-5 position-relative",id:"Abilities"},Nt={class:"badge bg-success jn-badge"},Wt={class:"row justify-content-evenly mt-5 mx-0"},Xt={class:"jn-left-panel mb-4 col-md-5 col-12"},Jt={class:"jn-h2"},Yt=["innerHTML"],qt={key:0,class:"jn-right-panel col-md-7 col-12"},Kt={class:"card jn-card jn-abilities-card h-100 jn-animate-card"},Zt={key:0,class:"card-body"},Gt={class:"jn-icon"},Qt={class:"card-title"},te=["innerHTML"],ee={__name:"Abilities",setup(f){const b=w(!1),_=w(""),c=l=>l.toString().replace(/<li>/g,'<p><i class="bi bi-emoji-wink-fill text-success"></i> ').replace(/<\/li>/g,"</p>").replace(/<ul>/g,"").replace(/<\/ul>/g,"");_.value=c(zt);const n=Object.assign({"/contents/abilities/ability1.md":()=>m(()=>import("./ability1-CB-5wMun.js"),[],import.meta.url),"/contents/abilities/ability2.md":()=>m(()=>import("./ability2-DAypPt5Q.js"),[],import.meta.url),"/contents/abilities/ability3.md":()=>m(()=>import("./ability3-C3Bq8D15.js"),[],import.meta.url),"/contents/abilities/ability4.md":()=>m(()=>import("./ability4-BGrngq7H.js"),[],import.meta.url),"/contents/abilities/ability5.md":()=>m(()=>import("./ability5-BAOtfGq1.js"),[],import.meta.url),"/contents/abilities/ability6.md":()=>m(()=>import("./ability6-D76kuvwh.js"),[],import.meta.url),"/contents/abilities/ability7.md":()=>m(()=>import("./ability7-RZKe1TUb.js"),[],import.meta.url),"/contents/abilities/ability8.md":()=>m(()=>import("./ability8-CcZomymO.js"),[],import.meta.url)}),e=M([]),d=async()=>{const l=Object.values(n).map(g=>g().then(s=>({html:s.html,attributes:s.attributes})));e.push(...await Promise.all(l)),e.sort((g,s)=>g.attributes.date<s.attributes.date?1:-1),b.value=!0};return O(async()=>{await d()}),(l,g)=>(r(),a("div",Ut,[t("span",Nt,u(h(H).Badge),1),t("div",Wt,[t("div",Xt,[t("h2",Jt,u(h(H).Title),1),t("div",{innerHTML:_.value},null,8,Yt)]),b.value?(r(),a("div",qt,[(r(!0),a(y,null,$(Math.ceil(e.length/2),s=>(r(),a("div",{key:s,class:"row"},[(r(),a(y,null,$(2,o=>t("div",{key:o,class:"col-md-6 col-12 mb-5"},[t("div",Kt,[e[(s-1)*2+(o-1)]?(r(),a("div",Zt,[t("div",Gt,[t("i",{class:j(["bi",e[(s-1)*2+(o-1)].attributes.icon])},null,2)]),t("h5",Qt,u(e[(s-1)*2+(o-1)].attributes.Title),1),t("div",{innerHTML:e[(s-1)*2+(o-1)].html,class:"jn-card-text"},null,8,te)])):P("",!0)])])),64))]))),128))])):P("",!0)])]))}},se=T(ee,[["__scopeId","data-v-f18336b5"]]),B={Badge:"持续迭代",Title:"骑行友好工具包"},oe=`<p>骑行友好工具包旨在为你的骑行体验提供便利与安全保障。骑行不仅是一种可持续生活方式，还有助于减少碳足迹和享受大自然的美好。我们特别准备了这一工具包，希望能在你骑行的每一步中，提供你所需的支持和资源，包括：</p>
<ul>
<li>骑行友好公约</li>
<li>骑行运动小贴士</li>
<li>骑字与路书攻略</li>
<li>自行车维护指南</li>
<li>骑行拍摄技巧</li>
<li>更多由你补充</li>
</ul>
<p>骑行的乐趣不仅在于目的地，更在于旅途中的每一个瞬间。我们鼓励你积极探索、互相分享骑行经验，和其他同行者建立联系，一起享受这项美好的运动。</p>
`,ne={class:"jn-jobs mt-5 position-relative",id:"Jobs"},ie={class:"badge bg-purple jn-badge"},re={class:"row justify-content-evenly mt-5 mx-0"},ae={class:"jn-left-panel mb-4 col-md-5 col-12"},le={class:"jn-h2"},ce=["innerHTML"],de={key:0,class:"jn-right-panel col-md-7 col-12"},ue={class:"nav nav-underline mb-3 text-nowrap overflow-x-scroll flex-nowrap",id:"pills-tab",role:"tablist"},_e=["onClick","id","aria-selected"],me=["id","aria-labelledby"],pe={class:"fs-4"},be={class:"fw-bold"},ge=["href"],ve={class:"badge bg-purple"},he=["innerHTML"],fe={__name:"Jobs",setup(f){const b=R(),_=A(()=>b.isMobile),c=w(!1),n=w(0),e=w(""),d=Object.assign({"/contents/jobs/convention.md":()=>m(()=>import("./convention-B_WRc8qP.js"),[],import.meta.url),"/contents/jobs/exercise-tips.md":()=>m(()=>import("./exercise-tips-TI1Fyjvs.js"),[],import.meta.url),"/contents/jobs/maintenance.md":()=>m(()=>import("./maintenance-Y8rkDdDe.js"),[],import.meta.url),"/contents/jobs/more.md":()=>m(()=>import("./more-BEpSwcBV.js"),[],import.meta.url),"/contents/jobs/rideshots.md":()=>m(()=>import("./rideshots-B5XEF3u8.js"),[],import.meta.url),"/contents/jobs/road-book.md":()=>m(()=>import("./road-book-BDGeHCwB.js"),[],import.meta.url)}),l=M([]),g=async()=>{const o=Object.values(d).map(p=>p().then(i=>({html:s(i.html,"bi-arrow-right-circle-fill"),attributes:i.attributes})));l.push(...await Promise.all(o)),l.sort((p,i)=>p.attributes.date<i.attributes.date?1:-1),c.value=!0},s=(o,p)=>o.toString().replace(/<li>/g,`<p><i class="bi text-purple ${p}"></i> `).replace(/<\/li>/g,"</p>").replace(/<ul>/g,"").replace(/<\/ul>/g,"");return e.value=s(oe,"bi-emoji-expressionless-fill"),O(async()=>{await g()}),(o,p)=>(r(),a("div",ne,[t("span",ie,u(h(B).Badge),1),t("div",re,[t("div",ae,[t("h2",le,u(h(B).Title),1),t("div",{innerHTML:e.value},null,8,ce)]),c.value?(r(),a("div",de,[t("ul",ue,[(r(!0),a(y,null,$(l,(i,v)=>(r(),a("li",{class:"nav-item",role:"presentation",key:"nav-item-"+i.attributes.id},[t("button",{class:j(["nav-link",{active:n.value===v}]),onClick:k=>n.value=v,id:"pills-"+i.attributes.id+"-tab",type:"button",role:"tab","aria-selected":n.value===v},u(i.attributes.company),11,_e)]))),128))]),t("div",{class:j(["tab-content jn-tab-content card jn-card mb-5",[_.value?"p-4 jn-jobs-content-mobile":"p-5"]]),id:"pills-tabContent"},[(r(!0),a(y,null,$(l,(i,v)=>(r(),a("div",{class:j(["tab-pane fade",{"show active":n.value===v}]),key:"tab-pane-"+i.attributes.id,id:"jobs-"+i.attributes.id,role:"tabpanel","aria-labelledby":"pills-"+i.attributes.id+"-tab",tabindex:"0"},[t("div",pe,[t("span",be,u(i.attributes.title),1),p[0]||(p[0]=I(" @ ")),t("a",{class:"text-decoration-none link-purple",href:i.attributes.url,target:"_blank",rel:"noopener noreferrer"},u(i.attributes.company),9,ge)]),t("div",ve,u(i.attributes.range),1),t("div",{class:"mt-3 fw-light",innerHTML:i.html},null,8,he)],10,me))),128))],2)])):P("",!0)])]))}},ye=T(fe,[["__scopeId","data-v-f022d29f"]]),je=""+new URL("exhibition-ChCmVZfp.png",import.meta.url).href,we=Object.freeze(Object.defineProperty({__proto__:null,default:je},Symbol.toStringTag,{value:"Module"})),$e=""+new URL("riders-ew5Z129j.jpeg",import.meta.url).href,ke=Object.freeze(Object.defineProperty({__proto__:null,default:$e},Symbol.toStringTag,{value:"Module"})),Te=""+new URL("riding-CcSygWKt.jpg",import.meta.url).href,Ee=Object.freeze(Object.defineProperty({__proto__:null,default:Te},Symbol.toStringTag,{value:"Module"})),Oe=""+new URL("workshop-44W0cObu.jpg",import.meta.url).href,Pe=Object.freeze(Object.defineProperty({__proto__:null,default:Oe},Symbol.toStringTag,{value:"Module"})),F={Badge:"持续行动",Title:"ON THE WAY"},Le=`<h4>自己很快，但一群人才骑得更远</h4>
<hr>
<div><img src="/assets/riders-ew5Z129j.jpeg" width="416" height="666"/></div>
`,xe={class:"jn-products mt-5 position-relative",id:"Products"},Ie={class:"badge bg-dark jn-badge"},Me={class:"row justify-content-evenly mt-5 mx-0"},Re={class:"jn-left-panel mb-4 col-md-5 col-12"},Ae={class:"sticky-wrapper"},Se={class:"jn-h2"},De=["innerHTML"],Ve={key:0,class:"jn-right-panel col-md-7 col-12"},Ce={class:"col-12 mb-5 jn-product-card"},He={class:"card jn-card"},Be={class:"card-body"},Fe={class:"card-title"},ze=["href"],Ue={class:"card-title mt-3"},Ne={class:"row my-3 align-items-start"},We=["innerHTML"],Xe={class:"col-md-4 col-12 pb-2"},Je={class:"jn-cover-img"},Ye=["src","alt"],qe={__name:"Products",setup(f){const b=R(),_=A(()=>b.isMobile),c=w(!1),n=w(""),e=o=>o.toString().replace(/<li>/g,'<p><i class="bi bi-emoji-wink-fill text-success"></i> ').replace(/<\/li>/g,"</p>").replace(/<ul>/g,"").replace(/<\/ul>/g,"");n.value=e(Le);const d=Object.assign({"/contents/products/exhibition.md":()=>m(()=>import("./exhibition-DLinlJuX.js"),[],import.meta.url),"/contents/products/riding.md":()=>m(()=>import("./riding-BnbF0gdv.js"),[],import.meta.url),"/contents/products/workshop.md":()=>m(()=>import("./workshop-CtXwn-39.js"),[],import.meta.url)}),l=Object.assign({"/contents/products/images/exhibition.png":we,"/contents/products/images/riders.jpeg":ke,"/contents/products/images/riding.jpg":Ee,"/contents/products/images/workshop.jpg":Pe}),g=M([]),s=async()=>{const o=Object.values(d).map(async p=>{const i=await p(),v=i.attributes,k=Object.keys(l).find(W=>W.includes(v.cover)),L=k?l[k].default:null;return{html:e(i.html),attributes:{...v,cover:L}}});g.push(...await Promise.all(o)),g.sort((p,i)=>i.attributes.date-p.attributes.date),c.value=!0};return O(async()=>{await s(),_.value||J(".sticky-wrapper",{stickyBitStickyOffset:100})}),(o,p)=>(r(),a("div",xe,[t("span",Ie,u(h(F).Badge),1),t("div",Me,[t("div",Re,[t("div",Ae,[t("h2",Se,u(h(F).Title),1),t("div",{innerHTML:n.value},null,8,De)])]),c.value?(r(),a("div",Ve,[(r(!0),a(y,null,$(g,(i,v)=>(r(),a("div",{key:i,class:"row justify-content-between"},[t("div",Ce,[t("div",He,[t("div",Be,[t("h5",Fe,[I(u(i.attributes.title)+" ",1),t("a",{class:"text-decoration-none link-dark",href:i.attributes.url,target:"_blank",rel:"noopener noreferrer"},p[0]||(p[0]=[t("i",{class:"bi bi-arrow-up-right-circle"},null,-1)]),8,ze)]),t("div",Ue,[(r(!0),a(y,null,$(i.attributes.tags,k=>(r(),a("span",{key:v,class:"badge bg-dark jn-tags me-2"},u(k),1))),128))]),t("div",Ne,[t("div",{innerHTML:i.html,class:"jn-card-text col-md-8 col-12 jn-products-text"},null,8,We),t("div",Xe,[t("div",Je,[t("img",{src:i.attributes.cover,class:"img-fluid",alt:i.attributes.title},null,8,Ye)])])])])])])]))),128))])):P("",!0)])]))}},Ke=T(qe,[["__scopeId","data-v-3261516b"]]),Ze={Badge:"一起玩呀"},Ge="",Qe={class:"jn-works mt-5 position-relative",id:"Works"},ts={class:"badge bg-success jn-badge"},es={key:0,class:"row mt-5 mx-0 jn-works-row"},ss={class:"card jn-works-card h-100"},os={class:"card-body"},ns={class:"card-title"},is=["href"],rs={class:"card-title mt-3"},as=["innerHTML"],ls={__name:"Works",setup(f){const b=w(!1),_=w(""),c=l=>l.toString().replace(/<li>/g,'<p><i class="bi bi-emoji-wink-fill text-success"></i> ').replace(/<\/li>/g,"</p>").replace(/<ul>/g,"").replace(/<\/ul>/g,"");_.value=c(Ge);const n=Object.assign({"/contents/works/0-1.md":()=>m(()=>import("./0-1-fwrGMQqF.js"),[],import.meta.url),"/contents/works/bike-story.md":()=>m(()=>import("./bike-story-D6QcGO9h.js"),[],import.meta.url),"/contents/works/biketowork.md":()=>m(()=>import("./biketowork-DAQhmUWX.js"),[],import.meta.url),"/contents/works/bottle-painting.md":()=>m(()=>import("./bottle-painting-t8DWTMiE.js"),[],import.meta.url),"/contents/works/cuowa.md":()=>m(()=>import("./cuowa-qAQQwwvY.js"),[],import.meta.url),"/contents/works/daguai.md":()=>m(()=>import("./daguai-B39kvVnT.js"),[],import.meta.url),"/contents/works/daka.md":()=>m(()=>import("./daka-CEUGFKY6.js"),[],import.meta.url),"/contents/works/debate.md":()=>m(()=>import("./debate-CJ3aA_0K.js"),[],import.meta.url),"/contents/works/nft.md":()=>m(()=>import("./nft-BUKUi7Wg.js"),[],import.meta.url),"/contents/works/pump.md":()=>m(()=>import("./pump-D2KpwpCf.js"),[],import.meta.url),"/contents/works/zaiye.md":()=>m(()=>import("./zaiye-yLzJo-Dl.js"),[],import.meta.url)}),e=M([]),d=async()=>{const l=Object.values(n).map(g=>g().then(s=>({html:s.html,attributes:s.attributes})));e.push(...await Promise.all(l)),e.sort((g,s)=>g.attributes.date<s.attributes.date?1:-1),b.value=!0};return O(async()=>{await d()}),(l,g)=>(r(),a("div",Qe,[t("span",ts,u(h(Ze).Badge),1),b.value?(r(),a("div",es,[(r(!0),a(y,null,$(Math.ceil(e.length/3),s=>(r(),a("div",{key:s,class:"row"},[(r(!0),a(y,null,$(e.slice((s-1)*3,s*3),(o,p)=>(r(),a("div",{key:o.id,class:"col-md-4 col-12 mb-5"},[t("div",ss,[t("div",os,[t("h5",ns,[I(u(o.attributes.title)+" ",1),t("a",{class:"text-decoration-none link-success",href:o.attributes.url,target:"_blank",rel:"noopener noreferrer"},g[0]||(g[0]=[t("i",{class:"bi bi-arrow-up-right-circle"},null,-1)]),8,is)]),t("div",rs,[(r(!0),a(y,null,$(o.attributes.tags,i=>(r(),a("span",{key:i,class:"badge bg-success jn-tags me-2"},u(i),1))),128))]),t("div",{innerHTML:o.html,class:"jn-card-text"},null,8,as)])])]))),128))]))),128))])):P("",!0)]))}},cs=T(ls,[["__scopeId","data-v-677d43b6"]]),V={Badge:"如何加入？",Buy:"就买这个！",alertTitle:"你还真点了购买",alertMessage:"在下面的联系方式里找一个来联系吧"},ds={class:"jn-pricing mt-5 position-relative",id:"Pricing"},us={class:"badge bg-purple jn-badge"},_s={key:0,class:"row mt-5 mx-0 jn-pricing-row px-4"},ms={class:"card jn-card mb-4 position-relative jn-animate-card"},ps={class:"card-title"},bs={class:"card-subtitle mb-2 mb-4 opacity-50"},gs={class:"card-body"},vs={class:"jn-plan-detail"},hs={class:"list-group list-group-flush"},fs={class:"list-group-item border-0"},ys={class:"list-group-item border-0"},js={class:"jn-plan-buy row m-3"},ws={class:"toast-container p-3 jn-toast"},$s={class:"toast-header"},ks={class:"toast-body"},Ts={__name:"Pricing",setup(f){const b=w(!1),_=w({}),c=w(null),n=(s=2e3)=>{_.value={alertTitle:V.alertTitle,alertMessage:V.alertMessage,alertStyle:"text-success"},c.value?new Y(c.value,{delay:2e3}).show():console.error("Toast element not found")},e=Object.assign({"/contents/pricing/plan1.md":()=>m(()=>import("./plan1-G-iqdUrt.js"),[],import.meta.url),"/contents/pricing/plan2.md":()=>m(()=>import("./plan2-DS4lsujE.js"),[],import.meta.url),"/contents/pricing/plan3.md":()=>m(()=>import("./plan3-BL2S8aea.js"),[],import.meta.url)}),d=M([]),l=async()=>{const s=Object.values(e).map(o=>o().then(p=>({html:p.html,attributes:p.attributes})));d.push(...await Promise.all(s)),d.sort((o,p)=>o.attributes.date<p.attributes.date?1:-1),b.value=!0},g=()=>{const s=window.innerWidth,p=(s-1600)/2,i=document.querySelector(".jn-toast");s>1600?i.style.right=`${p+0}px`:i.style.right="0"};return O(()=>{window.addEventListener("resize",g),g()}),O(async()=>{await l()}),(s,o)=>(r(),a(y,null,[t("div",ds,[t("span",us,u(h(V).Badge),1),b.value?(r(),a("div",_s,[(r(!0),a(y,null,$(d,(p,i)=>(r(),a("div",{key:p,class:"col-mb-4 col-xl-4 col-xxl-4 col-12 mb-5"},[t("div",ms,[t("div",{class:j(["jn-plan-title",{"bg-primary":i%3===0,"bg-success":i%3===1,"bg-purple":i%3===2}])},[t("h5",ps,u(p.attributes.Title),1),t("h6",bs,u(p.attributes.Subtitle),1)],2),t("div",gs,[t("div",vs,[t("ul",hs,[(r(!0),a(y,null,$(p.attributes.Includes,v=>(r(),a("li",fs,[o[0]||(o[0]=t("i",{class:"bi bi-check-circle-fill text-success"},null,-1)),I(" "+u(v),1)]))),256)),(r(!0),a(y,null,$(p.attributes.Excludes,v=>(r(),a("li",ys,[o[1]||(o[1]=t("i",{class:"bi bi-x-circle-fill text-danger"},null,-1)),I(" "+u(v),1)]))),256))])]),t("div",js,[t("button",{class:j(["btn",{"btn-primary":i%3===0,"btn-success":i%3===1,"btn-purple":i%3===2}]),onClick:n},u(p.attributes.Price),3)])])])]))),128))])):P("",!0)]),t("div",ws,[t("div",{id:"toastInfoMask",class:"toast",role:"alert",ref_key:"toastEl",ref:c,"aria-live":"assertive","aria-atomic":"true"},[t("div",$s,[t("strong",{class:j(["me-auto",_.value.alertStyle])},u(_.value.alertTitle),3),o[2]||(o[2]=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"toast","aria-label":"Close"},null,-1))]),t("div",ks,u(_.value.alertMessage),1)],512)])],64))}},Es=T(Ts,[["__scopeId","data-v-e78d00c9"]]),x={Title:"串门骑行打怪",Subtitle:"共识：骑行友好，践行可持续低碳的生活方式，自由发起、文明发挥、尽情 riding～",ContactTitle:"支持伙伴",ContactSubtitle:"成都市成华社区发展基金会、成都可持续社区串门计划、骑行友好共创小组、天星村、ebike100、城汇玩......",Social:[{name:"GitHub",icon:"github",url:"https://github.com/jason5ng32"},{name:"Twitter",icon:"twitter",url:"https://twitter.com/jason5ng32"}]},Os={class:"jn-footer mt-5 position-relative",id:"Footer"},Ps={class:"row p-5 w-100"},Ls={class:"col-md-6 col-lg-6 col-12"},xs={class:"opacity-75"},Is={class:"col-md-6 col-lg-6 col-12"},Ms={class:"opacity-75"},Rs={class:"flex"},As=["href","title"],Ss={class:"jn-footer-placeholder"},Ds={__name:"Footer",setup(f){const b=R(),_=A(()=>b.isMobile),c=new Date().getFullYear();return(n,e)=>(r(),a("div",Os,[t("div",Ps,[t("div",Ls,[t("h1",null,u(h(x).Title),1),t("p",xs,u(h(x).Subtitle),1)]),t("div",Is,[t("h3",null,u(h(x).ContactTitle),1),t("p",Ms,u(h(x).ContactSubtitle),1),t("div",Rs,[(r(!0),a(y,null,$(h(x).Social,(d,l)=>(r(),a("a",{key:l,class:j([_.value?"jn-footer-social-mobile me-3":"jn-footer-social-desktop me-4"]),href:d.url,title:d.name,target:"_blank"},[t("i",{class:j(["bi","bi-"+d.icon])},null,2)],10,As))),128))])])]),t("div",Ss,u(h(x).Title)+" © "+u(h(c)),1)]))}},Vs=T(Ds,[["__scopeId","data-v-f4b73c5b"]]),Cs={id:"main-part",class:"container mt-2 px-0"},Hs={"data-bs-spy":"scroll","data-bs-target":"#navbar-top","data-bs-root-margin":"0px 0px -40%","data-bs-smooth-scroll":"true",class:"rounded-2",tabindex:"0"},Bs={__name:"App",setup(f){const b=R(),_=A(()=>b.isMobile),c=(e,d=200,l,g=!1)=>{q().reveal(e,{delay:d,duration:1e3,origin:l,distance:"100px",reset:g})};return(()=>{let e=document.getElementById("jn-loading");e&&(e.style.display="none")})(),O(()=>{c(".jn-introduce-bg",200,"bottom",!1),c(".jn-introduce-title",600,"top",!1),c(".jn-introduce-subtitle",600,"left",!1),c(".jn-introduce-doc",1600,"bottom",!1),setTimeout(()=>{c(".conversation-right",200,"right",!1),c(".conversation-left",200,"left",!1),c(".jn-animate-card",200,"bottom",!1)},1e3)}),(e,d)=>(r(),a(y,null,[E(_t),t("div",Cs,[t("div",Hs,[E(ft),t("div",{class:j([_.value?"jn-items-full-width":"jn-items"])},[E(Ft),E(se),E(ye),E(Ke),E(cs),E(Es)],2)]),E(Vs)])],64))}},Fs=T(Bs,[["__scopeId","data-v-09be0a06"]]),z=K(Fs),U=Z();z.use(U);const zs=R(U),Us=G({app:"MyIP",plugins:[Q({measurementIds:["XXX"]})]});Us.page();function N(){zs.setIsMobile(window.innerWidth<768)}N();window.addEventListener("resize",N);z.mount("#app");
