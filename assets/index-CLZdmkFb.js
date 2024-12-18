import{d as Z,r as j,o as E,a,c as l,b as t,u as f,t as g,F as $,e as k,f as R,n as w,g as P,h as S,i as A,s as q,S as J,j as T,k as Y,l as Q,m as K,p as tt}from"./vendor-Cf_GFlLt.js";(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))m(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const _ of n.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&m(_)}).observe(document,{childList:!0,subtree:!0});function c(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function m(e){if(e.ep)return;e.ep=!0;const n=c(e);fetch(e.href,n)}})();const M=Z("main",{state:()=>({isMobile:!1}),getters:{},actions:{setIsMobile(h){this.isMobile=h}}}),V={Introduce:"首页",Conversations:"脑洞",Abilities:"打怪",Products:"计划",Works:"共创",Jobs:"工具",Pricing:"加入",Footer:"",AgeTitle:"岁数",Name:"CMQXDGD"},et=""+new URL("logo-zBjCmdRd.png",import.meta.url).href,O=(h,d)=>{const c=h.__vccOpts||h;for(const[m,e]of d)c[m]=e;return c},nt={class:"navbar navbar-expand-lg py-2 mb-3 jn-navbar-top"},st={id:"navbar-top",class:"container-xl"},ot={class:"jn-logo"},it={class:"navbar-brand flex align-items-center align-content-center",href:"#"},rt=["src"],at={class:"fw-bold"},lt=["title"],ct={class:"collapse navbar-collapse justify-content-end",id:"navbarNavAltMarkup"},dt={class:"navbar-nav"},_t=["href"],ut={__name:"Nav",setup(h){const d=j(0),c=()=>{const m=new Date,e=new Date("2024-06-03"),n=m.getTime()-e.getTime(),_=new Date(n),p=Math.abs(_.getUTCFullYear()-1970)+_.getMonth()/12;d.value=p.toFixed(2)};return E(()=>{c()}),(m,e)=>(a(),l("header",nt,[t("nav",st,[t("div",ot,[t("a",it,[t("span",null,[t("img",{src:f(et),alt:"logo",class:"jn-logo-img"},null,8,rt)]),t("span",at,g(f(V).Name),1),t("span",{class:"fw-lighter",title:f(V).AgeTitle},".v"+g(d.value),9,lt)])]),e[0]||(e[0]=t("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},[t("span",{class:"navbar-toggler-icon bg-transparent"})],-1)),t("div",ct,[t("div",dt,[(a(),l($,null,k(["Introduce","Conversations","Abilities","Products","Works","Jobs","Pricing","Footer"],n=>t("a",{key:n,class:"nav-link",href:`#${n}`},g(f(V)[n]),9,_t)),64))])])])]))}},mt=O(ut,[["__scopeId","data-v-9fa6089d"]]),H={name:"串门骑行打怪",subtitle:"骑行友好实验计划",button:"DO"},pt=`<p>该计划围绕可持续生活下「绿色出行」之骑行（自行车、电动车）为主题，<strong>以游戏化打怪的方式去探索「骑行友好」的具体行动或美好生活方式</strong>。</p>
<p>旨在无论城市还是乡村、无论闲暇还是工作的骑行过程中，倡导环保、文明、安全的骑行方式，主张骑行不仅对骑行者自身友好，也对周围的环境和其他交通参与者友好。</p>
<br>
<p><strong>我们正在行动：</strong></p>
<ul>
<li>一起定义骑行友好</li>
<li>一起共创打怪游戏</li>
<li>一起尽情自由 riding</li>
</ul>
<br>
<p>会发生什么呢？我们一起见证。</p>
`,gt={class:"text-dark mb-4 jn-introduce-doc"},bt=["innerHTML"],vt={key:0,class:"mb-4"},ht={class:"btn-purple",href:"#Conversations"},ft={__name:"Introduce",setup(h){const d=M(),c=R(()=>d.isMobile),m=j(""),e=n=>n.toString().replace(/<li>/g,'<p><i class="bi bi-check-circle-fill text-purple"></i> ').replace(/<\/li>/g,"</p>").replace(/<ul>/g,"").replace(/<\/ul>/g,"");return m.value=e(pt),(n,_)=>(a(),l("div",{class:w(["row jn-introduce justify-content-evenly pt-5 mx-0",c.value?"jn-mobile-mt":"jn-desktop-mt"]),id:"Introduce"},[t("div",{class:w([c.value?"col-12 px-5 py-2":"col-5 p-5"])},[t("div",null,[t("h2",{class:w(["jn-introduce-title",[c.value?"jn-h2-mobile":"jn-h2"]])},g(f(H).name),3),t("h3",{class:w(["jn-introduce-subtitle",[c.value?"jn-h3-mobile":"jn-h3"]])},g(f(H).subtitle),3),t("div",gt,[t("div",{innerHTML:m.value,class:"mb-4"},null,8,bt),c.value?(a(),l("div",vt,_[0]||(_[0]=[t("div",{class:"jn-introduce-bg jn-introduce-bg-mobile"},null,-1)]))):P("",!0),t("a",ht,[S(g(f(H).button)+"  ",1),_[1]||(_[1]=t("i",{class:"bi bi-arrow-down-circle"},null,-1))])])])],2),t("div",{class:w([c.value?"col-12 px-4 py-4":"col-6 px-4 pt-4"])},_[2]||(_[2]=[t("div",{class:"jn-introduce-bg"},null,-1)]),2)],2))}},yt=O(ft,[["__scopeId","data-v-9391b095"]]),jt="modulepreload",wt=function(h,d){return new URL(h,d).href},C={},u=function(d,c,m){let e=Promise.resolve();if(c&&c.length>0){const _=document.getElementsByTagName("link"),i=document.querySelector("meta[property=csp-nonce]"),p=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));e=Promise.allSettled(c.map(s=>{if(s=wt(s,m),s in C)return;C[s]=!0;const r=s.endsWith(".css"),b=r?'[rel="stylesheet"]':"";if(!!m)for(let y=_.length-1;y>=0;y--){const L=_[y];if(L.href===s&&(!r||L.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${b}`))return;const v=document.createElement("link");if(v.rel=r?"stylesheet":jt,r||(v.as="script"),v.crossOrigin="",v.href=s,p&&v.setAttribute("nonce",p),document.head.appendChild(v),r)return new Promise((y,L)=>{v.addEventListener("load",y),v.addEventListener("error",()=>L(new Error(`Unable to preload CSS for ${s}`)))})}))}function n(_){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=_,window.dispatchEvent(i),!i.defaultPrevented)throw _}return e.then(_=>{for(const i of _||[])i.status==="rejected"&&n(i.reason);return d().catch(n)})},$t=""+new URL("g1-lEpS5USt.png",import.meta.url).href,kt=Object.freeze(Object.defineProperty({__proto__:null,default:$t},Symbol.toStringTag,{value:"Module"})),Ot=""+new URL("g1-lEpS5USt.png",import.meta.url).href,Tt=Object.freeze(Object.defineProperty({__proto__:null,default:Ot},Symbol.toStringTag,{value:"Module"})),Pt=""+new URL("g3-DnxGvOJP.png",import.meta.url).href,Lt=Object.freeze(Object.defineProperty({__proto__:null,default:Pt},Symbol.toStringTag,{value:"Module"})),Et=""+new URL("g3-DnxGvOJP.png",import.meta.url).href,xt=Object.freeze(Object.defineProperty({__proto__:null,default:Et},Symbol.toStringTag,{value:"Module"})),It=""+new URL("m1-CXl0nZy8.png",import.meta.url).href,Mt=Object.freeze(Object.defineProperty({__proto__:null,default:It},Symbol.toStringTag,{value:"Module"})),St=""+new URL("m1-CXl0nZy8.png",import.meta.url).href,Rt=Object.freeze(Object.defineProperty({__proto__:null,default:St},Symbol.toStringTag,{value:"Module"})),At=""+new URL("m3-CydBvMxV.png",import.meta.url).href,Dt=Object.freeze(Object.defineProperty({__proto__:null,default:At},Symbol.toStringTag,{value:"Module"})),Vt=""+new URL("m3-CydBvMxV.png",import.meta.url).href,Ht=Object.freeze(Object.defineProperty({__proto__:null,default:Vt},Symbol.toStringTag,{value:"Module"})),Ct=""+new URL("m4-D4rQSjze.png",import.meta.url).href,Bt=Object.freeze(Object.defineProperty({__proto__:null,default:Ct},Symbol.toStringTag,{value:"Module"})),Ft=""+new URL("m4-D4rQSjze.png",import.meta.url).href,Ut=Object.freeze(Object.defineProperty({__proto__:null,default:Ft},Symbol.toStringTag,{value:"Module"})),zt={Badge:"你认为骑行友好是什么？"},Nt={class:"jn-conversations mt-5 position-relative",id:"Conversations"},qt={class:"badge bg-dark jn-badge"},Wt={class:"row justify-content-evenly mt-5 mx-0"},Gt={class:"px-5 col-12"},Xt={key:0},Zt=["innerHTML"],Jt=["src"],Yt={__name:"Conversations",setup(h){const d=j(!1),c=Object.assign({"/contents/conversations/conv1.md":()=>u(()=>import("./conv1-Ch_cdQ9Y.js"),[],import.meta.url),"/contents/conversations/conv2.md":()=>u(()=>import("./conv2-BgujmBUp.js"),[],import.meta.url),"/contents/conversations/conv3.md":()=>u(()=>import("./conv3-3oQv9wiT.js"),[],import.meta.url),"/contents/conversations/conv4.md":()=>u(()=>import("./conv4-BSlUcIE-.js"),[],import.meta.url),"/contents/conversations/conv5.md":()=>u(()=>import("./conv5-ydBSFbe3.js"),[],import.meta.url)}),m=Object.assign({"/contents/conversations/images/g1 2.png":kt,"/contents/conversations/images/g1.png":Tt,"/contents/conversations/images/g3 2.png":Lt,"/contents/conversations/images/g3.png":xt,"/contents/conversations/images/m1 2.png":Mt,"/contents/conversations/images/m1.png":Rt,"/contents/conversations/images/m3 2.png":Dt,"/contents/conversations/images/m3.png":Ht,"/contents/conversations/images/m4 2.png":Bt,"/contents/conversations/images/m4.png":Ut}),e=A([]),n=async()=>{const i=Object.values(c).map(async p=>{const s=await p(),r=s.attributes,b=Object.keys(m).find(v=>v.includes(r.avatar)),o=b?m[b].default:null;return{html:_(s.html),attributes:{...r,avatar:o}}});e.push(...await Promise.all(i)),e.sort((p,s)=>s.attributes.date-p.attributes.date),d.value=!0},_=i=>i.toString().replace(/<li>/g,'<span class="badge bg-white text-purple">').replace(/<\/li>/g,"</span>").replace(/<ul>/g,"").replace(/<\/ul>/g,"");return E(async()=>{await n()}),(i,p)=>(a(),l("div",Nt,[t("span",qt,g(f(zt).Badge),1),t("div",Wt,[t("div",Gt,[d.value?(a(),l("div",Xt,[(a(!0),l($,null,k(e,(s,r)=>(a(),l("div",{key:r,class:w(`row flex-nowrap align-items-start ${r%2===0?"":"flex-row-reverse"}`)},[t("div",{class:w(`conversation ${r%2===0?"conversation-right":"conversation-left"} col-8 col-md-9`),innerHTML:s.html},null,10,Zt),t("div",{class:w(["col-4 col-md-3",`jn-img-${r%2===0?"right":"left"}`])},[t("img",{src:s.attributes.avatar,alt:"avatar",class:"img-fluid rounded-circle jn-avatar"},null,8,Jt)],2)],2))),128))])):P("",!0)])])]))}},Qt=O(Yt,[["__scopeId","data-v-626db900"]]),B={Badge:"打怪游戏如何好玩？",Title:"怎么玩 ↓ 打什么怪 →"},Kt=`<p>不断在迭代升级 ING，目前的游戏步骤：</p>
<h4>✅ 同频队友</h4>
<p>与关心绿色出行的个人或组织共同定义“骑行友好”，结识一群热情且富有行动力的骑行伙伴，共同探索骑行友好的<strong>新方法和理念</strong>。</p>
<h4>✅ 集结行动</h4>
<p>从成都成华区出发，循序渐进探索共创成都骑行友好地图。通过有趣的骑行友好行动，设定<strong>游戏化打「怪」</strong> 机制，让每一次骑行都是一场生活探索之旅。</p>
<h4>✅ 一起共创</h4>
<p>知行合一，共同推动可持续生活 · 绿色出行 · 骑行友好的<strong>可持续生活网络</strong>生长。</p>
</br>
<div class="pricing-img-container">
    <img src="https://trylab.cyou/assets/guai-COZEZXTX.png" alt="image" />
</div>
<style>
.pricing-img-container {
    width: 100%;
    max-width: 800px; /* 可以根据需要调整最大宽度 */
    margin: 1rem auto;
    text-align: center;
}
.pricing-img-container img {
    width: 100%;
    height: auto;
    display: block;
}
/* 手机端适配 */
@media (max-width: 768px) {
    .pricing-img-container {
        width: 100%;
        margin: 0.8rem auto;
    }
}
</style>
`,te={class:"jn-abilities mt-5 position-relative",id:"Abilities"},ee={class:"badge bg-purple jn-badge"},ne={class:"row justify-content-evenly mt-5 mx-0"},se={class:"jn-left-panel mb-4 col-md-5 col-12"},oe={class:"jn-h2"},ie=["innerHTML"],re={key:0,class:"jn-right-panel col-md-7 col-12"},ae={class:"card jn-card jn-abilities-card h-100 jn-animate-card"},le={key:0,class:"card-body"},ce={class:"jn-icon"},de={class:"card-title"},_e=["innerHTML"],ue={__name:"Abilities",setup(h){const d=j(!1),c=j(""),m=i=>i.toString().replace(/<li>/g,'<p><i class="bi bi-emoji-wink-fill text-success"></i> ').replace(/<\/li>/g,"</p>").replace(/<ul>/g,"").replace(/<\/ul>/g,"");c.value=m(Kt);const e=Object.assign({"/contents/abilities/ability1.md":()=>u(()=>import("./ability1-fp0ND94w.js"),[],import.meta.url),"/contents/abilities/ability2.md":()=>u(()=>import("./ability2-DAypPt5Q.js"),[],import.meta.url),"/contents/abilities/ability3.md":()=>u(()=>import("./ability3-C3Bq8D15.js"),[],import.meta.url),"/contents/abilities/ability4.md":()=>u(()=>import("./ability4-BGrngq7H.js"),[],import.meta.url),"/contents/abilities/ability5.md":()=>u(()=>import("./ability5-BAOtfGq1.js"),[],import.meta.url),"/contents/abilities/ability6.md":()=>u(()=>import("./ability6-D76kuvwh.js"),[],import.meta.url),"/contents/abilities/ability7.md":()=>u(()=>import("./ability7-RZKe1TUb.js"),[],import.meta.url),"/contents/abilities/ability8.md":()=>u(()=>import("./ability8-Cg0DWnAz.js"),[],import.meta.url)}),n=A([]),_=async()=>{const i=Object.values(e).map(p=>p().then(s=>({html:s.html,attributes:s.attributes})));n.push(...await Promise.all(i)),n.sort((p,s)=>p.attributes.date<s.attributes.date?1:-1),d.value=!0};return E(async()=>{await _()}),(i,p)=>(a(),l("div",te,[t("span",ee,g(f(B).Badge),1),t("div",ne,[t("div",se,[t("h2",oe,g(f(B).Title),1),t("div",{innerHTML:c.value},null,8,ie)]),d.value?(a(),l("div",re,[(a(!0),l($,null,k(Math.ceil(n.length/2),s=>(a(),l("div",{key:s,class:"row"},[(a(),l($,null,k(2,r=>t("div",{key:r,class:"col-md-6 col-12 mb-5"},[t("div",ae,[n[(s-1)*2+(r-1)]?(a(),l("div",le,[t("div",ce,[t("i",{class:w(["bi",n[(s-1)*2+(r-1)].attributes.icon])},null,2)]),t("h5",de,g(n[(s-1)*2+(r-1)].attributes.Title),1),t("div",{innerHTML:n[(s-1)*2+(r-1)].html,class:"jn-card-text"},null,8,_e)])):P("",!0)])])),64))]))),128))])):P("",!0)])]))}},me=O(ue,[["__scopeId","data-v-adea4b5e"]]),F={Badge:"持续迭代",Title:"骑行友好工具包"},pe=`<p>骑行友好工具包旨在为你的骑行体验提供便利与安全保障。我们特别准备了这一工具包，希望能在你骑行的每一步中，提供你所需的支持和资源，包括：</p>
<ul>
<li>骑行友好公约</li>
<li>运动后恢复小贴士</li>
<li>骑字与路书攻略</li>
<li>自行车维修艺术</li>
<li>骑行摄影小白入门</li>
<li>更多在路上</li>
</ul>
<p>骑行友好的乐趣不仅在于目的地，更在于行动背后连接的每一位伙伴。我们鼓励你积极探索、互相分享骑行友好经验。</p>
`,ge={class:"jn-jobs mt-5 position-relative",id:"Jobs"},be={class:"badge bg-dark jn-badge"},ve={class:"row justify-content-evenly mt-5 mx-0"},he={class:"jn-left-panel mb-4 col-md-5 col-12"},fe={class:"jn-h2"},ye=["innerHTML"],je={key:0,class:"jn-right-panel col-md-7 col-12"},we={class:"nav nav-underline mb-3 text-nowrap overflow-x-scroll flex-nowrap",id:"pills-tab",role:"tablist"},$e=["onClick","id","aria-selected"],ke=["id","aria-labelledby"],Oe={class:"fs-4"},Te={class:"fw-bold"},Pe=["href"],Le={class:"badge bg-purple"},Ee=["innerHTML"],xe={__name:"Jobs",setup(h){const d=M(),c=R(()=>d.isMobile),m=j(!1),e=j(0),n=j(""),_=Object.assign({"/contents/jobs/convention.md":()=>u(()=>import("./convention-B_WRc8qP.js"),[],import.meta.url),"/contents/jobs/exercise-tips.md":()=>u(()=>import("./exercise-tips-BqxEX7nv.js"),[],import.meta.url),"/contents/jobs/maintenance.md":()=>u(()=>import("./maintenance-Dtdxu7fD.js"),[],import.meta.url),"/contents/jobs/more.md":()=>u(()=>import("./more-CxYDpaPb.js"),[],import.meta.url),"/contents/jobs/rideshots.md":()=>u(()=>import("./rideshots-BuwV5LUw.js"),[],import.meta.url),"/contents/jobs/road-book.md":()=>u(()=>import("./road-book-BFqdfxDr.js"),[],import.meta.url)}),i=A([]),p=async()=>{const r=Object.values(_).map(b=>b().then(o=>({html:s(o.html,"bi-arrow-right-circle-fill"),attributes:o.attributes})));i.push(...await Promise.all(r)),i.sort((b,o)=>b.attributes.date<o.attributes.date?1:-1),m.value=!0},s=(r,b)=>r.toString().replace(/<li>/g,`<p><i class="bi text-purple ${b}"></i> `).replace(/<\/li>/g,"</p>").replace(/<ul>/g,"").replace(/<\/ul>/g,"");return n.value=s(pe,"bi-emoji-expressionless-fill"),E(async()=>{await p()}),(r,b)=>(a(),l("div",ge,[t("span",be,g(f(F).Badge),1),t("div",ve,[t("div",he,[t("h2",fe,g(f(F).Title),1),t("div",{innerHTML:n.value},null,8,ye)]),m.value?(a(),l("div",je,[t("ul",we,[(a(!0),l($,null,k(i,(o,v)=>(a(),l("li",{class:"nav-item",role:"presentation",key:"nav-item-"+o.attributes.id},[t("button",{class:w(["nav-link",{active:e.value===v}]),onClick:y=>e.value=v,id:"pills-"+o.attributes.id+"-tab",type:"button",role:"tab","aria-selected":e.value===v},g(o.attributes.company),11,$e)]))),128))]),t("div",{class:w(["tab-content jn-tab-content card jn-card mb-5",[c.value?"p-4 jn-jobs-content-mobile":"p-5"]]),id:"pills-tabContent"},[(a(!0),l($,null,k(i,(o,v)=>(a(),l("div",{class:w(["tab-pane fade",{"show active":e.value===v}]),key:"tab-pane-"+o.attributes.id,id:"jobs-"+o.attributes.id,role:"tabpanel","aria-labelledby":"pills-"+o.attributes.id+"-tab",tabindex:"0"},[t("div",Oe,[t("span",Te,g(o.attributes.title),1),b[0]||(b[0]=S(" @ ")),t("a",{class:"text-decoration-none link-purple",href:o.attributes.url,target:"_blank",rel:"noopener noreferrer"},g(o.attributes.company),9,Pe)]),t("div",Le,g(o.attributes.range),1),t("div",{class:"mt-3 fw-light",innerHTML:o.html},null,8,Ee)],10,ke))),128))],2)])):P("",!0)])]))}},Ie=O(xe,[["__scopeId","data-v-b24783e0"]]),Me=""+new URL("exhibition-ChCmVZfp.png",import.meta.url).href,Se=Object.freeze(Object.defineProperty({__proto__:null,default:Me},Symbol.toStringTag,{value:"Module"})),Re=""+new URL("guai-COZEZXTX.png",import.meta.url).href,Ae=Object.freeze(Object.defineProperty({__proto__:null,default:Re},Symbol.toStringTag,{value:"Module"})),De=""+new URL("riders-ew5Z129j.jpeg",import.meta.url).href,Ve=Object.freeze(Object.defineProperty({__proto__:null,default:De},Symbol.toStringTag,{value:"Module"})),He=""+new URL("riding-CcSygWKt.jpg",import.meta.url).href,Ce=Object.freeze(Object.defineProperty({__proto__:null,default:He},Symbol.toStringTag,{value:"Module"})),Be=""+new URL("workshop-44W0cObu.jpg",import.meta.url).href,Fe=Object.freeze(Object.defineProperty({__proto__:null,default:Be},Symbol.toStringTag,{value:"Module"})),U={Badge:"有哪些计划？",Title:"ON THE WAY"},Ue="",ze={class:"jn-products mt-5 position-relative",id:"Products"},Ne={class:"badge bg-dark jn-badge"},qe={class:"row justify-content-evenly mt-5 mx-0"},We={class:"jn-left-panel mb-4 col-md-5 col-12"},Ge={class:"sticky-wrapper"},Xe={class:"jn-h2"},Ze=["innerHTML"],Je={key:0,class:"jn-right-panel col-md-7 col-12"},Ye={class:"col-12 mb-5 jn-product-card"},Qe={class:"card jn-card"},Ke={class:"card-body"},tn={class:"card-title"},en=["href"],nn={class:"card-title mt-3"},sn={class:"row my-3 align-items-start"},on=["innerHTML"],rn={class:"col-md-4 col-12 pb-2"},an={class:"jn-cover-img"},ln=["src","alt"],cn={__name:"Products",setup(h){const d=M(),c=R(()=>d.isMobile),m=j(!1),e=j(""),n=r=>r.toString().replace(/<li>/g,'<p><i class="bi bi-emoji-wink-fill text-success"></i> ').replace(/<\/li>/g,"</p>").replace(/<ul>/g,"").replace(/<\/ul>/g,"");e.value=n(Ue);const _=Object.assign({"/contents/products/exhibition.md":()=>u(()=>import("./exhibition-DwqNzPdA.js"),[],import.meta.url),"/contents/products/riding.md":()=>u(()=>import("./riding-CM5Q6Kvi.js"),[],import.meta.url),"/contents/products/workshop.md":()=>u(()=>import("./workshop-CtXwn-39.js"),[],import.meta.url)}),i=Object.assign({"/contents/products/images/exhibition.png":Se,"/contents/products/images/guai.png":Ae,"/contents/products/images/riders.jpeg":Ve,"/contents/products/images/riding.jpg":Ce,"/contents/products/images/workshop.jpg":Fe}),p=A([]),s=async()=>{const r=Object.values(_).map(async b=>{const o=await b(),v=o.attributes,y=Object.keys(i).find(D=>D.includes(v.cover)),L=y?i[y].default:null;return{html:n(o.html),attributes:{...v,cover:L}}});p.push(...await Promise.all(r)),p.sort((b,o)=>b.attributes.date-o.attributes.date),m.value=!0};return E(async()=>{await s(),c.value||q(".sticky-wrapper",{stickyBitStickyOffset:100})}),(r,b)=>(a(),l("div",ze,[t("span",Ne,g(f(U).Badge),1),t("div",qe,[t("div",We,[t("div",Ge,[t("h2",Xe,g(f(U).Title),1),t("div",{innerHTML:e.value},null,8,Ze)])]),m.value?(a(),l("div",Je,[(a(!0),l($,null,k(p,(o,v)=>(a(),l("div",{key:o,class:"row justify-content-between"},[t("div",Ye,[t("div",Qe,[t("div",Ke,[t("h5",tn,[S(g(o.attributes.title)+" ",1),t("a",{class:"text-decoration-none link-dark",href:o.attributes.url,target:"_blank",rel:"noopener noreferrer"},b[0]||(b[0]=[t("i",{class:"bi bi-arrow-up-right-circle"},null,-1)]),8,en)]),t("div",nn,[(a(!0),l($,null,k(o.attributes.tags,y=>(a(),l("span",{key:v,class:"badge bg-dark jn-tags me-2"},g(y),1))),128))]),t("div",sn,[t("div",{innerHTML:o.html,class:"jn-card-text col-md-8 col-12 jn-products-text"},null,8,on),t("div",rn,[t("div",an,[t("img",{src:o.attributes.cover,class:"img-fluid",alt:o.attributes.title},null,8,ln)])])])])])])]))),128))])):P("",!0)])]))}},dn=O(cn,[["__scopeId","data-v-f4efe594"]]),z={Badge:"有哪些行动？",Title:"野生，自然而燃"},_n="",un={class:"jn-works mt-5 position-relative",id:"Works"},mn={class:"badge bg-purple jn-badge"},pn={class:"row justify-content-evenly mt-5 mx-0"},gn={class:"jn-left-panel mb-4 col-md-5 col-12"},bn={class:"sticky-wrapper"},vn={class:"jn-h2"},hn=["innerHTML"],fn={key:0,class:"jn-right-panel col-md-7 col-12"},yn={key:0,class:"row mt-5 mx-0 jn-works-row"},jn={class:"card jn-works-card h-100"},wn={class:"card-body"},$n={class:"card-title"},kn=["href"],On={class:"card-title mt-3"},Tn=["innerHTML"],Pn={__name:"Works",setup(h){const d=j(!1),c=j(""),m=i=>i.toString().replace(/<li>/g,'<p><i class="bi bi-emoji-wink-fill text-success"></i> ').replace(/<\/li>/g,"</p>").replace(/<ul>/g,"").replace(/<\/ul>/g,"");c.value=m(_n);const e=Object.assign({"/contents/works/10cmqxdgd.md":()=>u(()=>import("./10cmqxdgd-BSXo7MF7.js"),[],import.meta.url),"/contents/works/1biketowork.md":()=>u(()=>import("./1biketowork-BtCKHdJv.js"),[],import.meta.url),"/contents/works/2shunshou.md":()=>u(()=>import("./2shunshou-DSnEy2Sr.js"),[],import.meta.url),"/contents/works/3nft.md":()=>u(()=>import("./3nft-9jJbSFeq.js"),[],import.meta.url),"/contents/works/4cuowa.md":()=>u(()=>import("./4cuowa-D-XeksX5.js"),[],import.meta.url),"/contents/works/5zaiye.md":()=>u(()=>import("./5zaiye-DX3S1HNd.js"),[],import.meta.url),"/contents/works/6bottle-painting.md":()=>u(()=>import("./6bottle-painting-7Z787VAy.js"),[],import.meta.url),"/contents/works/7daguai.md":()=>u(()=>import("./7daguai-Cn6AMZWL.js"),[],import.meta.url),"/contents/works/8learn0-1.md":()=>u(()=>import("./8learn0-1-DHG-LcVb.js"),[],import.meta.url),"/contents/works/9bike-story.md":()=>u(()=>import("./9bike-story-B8PqL9hS.js"),[],import.meta.url),"/contents/works/daqi.md":()=>u(()=>import("./daqi-DwzIrtV3.js"),[],import.meta.url)}),n=A([]),_=async()=>{const i=Object.values(e).map(p=>p().then(s=>({html:s.html,attributes:s.attributes})));n.push(...await Promise.all(i)),n.sort((p,s)=>p.attributes.date<s.attributes.date?1:-1),d.value=!0};return E(async()=>{await _()}),(i,p)=>(a(),l("div",un,[t("span",mn,g(f(z).Badge),1),t("div",pn,[t("div",gn,[t("div",bn,[t("h2",vn,g(f(z).Title),1),t("div",{innerHTML:c.value},null,8,hn)])]),d.value?(a(),l("div",fn)):P("",!0)]),d.value?(a(),l("div",yn,[(a(!0),l($,null,k(Math.ceil(n.length/3),s=>(a(),l("div",{key:s,class:"row"},[(a(!0),l($,null,k(n.slice((s-1)*3,s*3),(r,b)=>(a(),l("div",{key:r.id,class:"col-md-4 col-12 mb-5"},[t("div",jn,[t("div",wn,[t("h5",$n,[S(g(r.attributes.title)+" ",1),t("a",{class:"text-decoration-none link-success",href:r.attributes.url,target:"_blank",rel:"noopener noreferrer"},p[0]||(p[0]=[t("i",{class:"bi bi-arrow-up-right-circle"},null,-1)]),8,kn)]),t("div",On,[(a(!0),l($,null,k(r.attributes.tags,o=>(a(),l("span",{key:o,class:"badge bg-success jn-tags me-2"},g(o),1))),128))]),t("div",{innerHTML:r.html,class:"jn-card-text"},null,8,Tn)])])]))),128))]))),128))])):P("",!0)]))}},Ln=O(Pn,[["__scopeId","data-v-7fca88d4"]]),En=""+new URL("cmqxdgd-hQWbIitG.png",import.meta.url).href,xn=Object.freeze(Object.defineProperty({__proto__:null,default:En},Symbol.toStringTag,{value:"Module"})),N={Badge:"协作网络",Title:"自己很快，但一群人才骑得更远"},In=`<br>
<ul>
<li><strong>凝聚共识</strong>：</li>
</ul>
<p>骑行友好，践行可持续生活方式，自由发起、文明发挥、尽情 riding ♾️</p>
<ul>
<li><strong>共创 / 合作伙伴</strong>：</li>
</ul>
<p>ebike100、天星村、城汇玩、善淘、绿道100、智慧驿站野生摊贩</p>
<ul>
<li><strong>支持伙伴</strong>：</li>
</ul>
<p>成都市成华社区发展基金会、成都可持续社区串门计划</p>
<ul>
<li><strong>行动小组</strong>：</li>
</ul>
<p>串门骑行打怪队 CMQXDGD</p>
<div class="pricing-img-container">
    <img src="https://trylab.cyou/assets/cmqxdgd-hQWbIitG.png" alt="image" />
</div>
<style>
.pricing-img-container {
    width: 100%;
    max-width: 800px; /* 可以根据需要调整最大宽度 */
    margin: 1rem auto;
    text-align: center;
}
.pricing-img-container img {
    width: 100%;
    height: auto;
    display: block;
}

/* 手机端适配 */
@media (max-width: 768px) {
    .pricing-img-container {
        width: 100%;
        margin: 0.8rem auto;
    }
}
</style>
<pre><code class="language-python">34.15+3.29+18.45+6.05+6.6+46.05+7.62=122.22+km riding～
</code></pre>
`,Mn={class:"jn-products mt-5 position-relative",id:"Pricing"},Sn={class:"badge bg-purple jn-badge"},Rn={class:"row justify-content-evenly mt-5 mx-0"},An={class:"jn-left-panel mb-4 col-md-5 col-12"},Dn={class:"sticky-wrapper"},Vn={class:"jn-h2"},Hn=["innerHTML"],Cn={key:0,class:"jn-right-panel col-md-7 col-12"},Bn={__name:"Pricing",setup(h){const d=M(),c=R(()=>d.isMobile),m=j(!1),e=j(""),n=r=>r.toString().replace(/<li>/g,'<p><i class="bi bi-emoji-wink-fill text-success"></i> ').replace(/<\/li>/g,"</p>").replace(/<ul>/g,"").replace(/<\/ul>/g,"");e.value=n(In);const _=Object.assign({}),i=Object.assign({"/contents/Pricing/images/cmqxdgd.png":xn}),p=A([]),s=async()=>{const r=Object.values(_).map(async b=>{const o=await b(),v=o.attributes,y=Object.keys(i).find(D=>D.includes(v.cover)),L=y?i[y].default:null;return{html:n(o.html),attributes:{...v,cover:L}}});p.push(...await Promise.all(r)),p.sort((b,o)=>b.attributes.date-o.attributes.date),m.value=!0};return E(async()=>{await s(),c.value||q(".sticky-wrapper",{stickyBitStickyOffset:100})}),(r,b)=>(a(),l("div",Mn,[t("span",Sn,g(f(N).Badge),1),t("div",Rn,[t("div",An,[t("div",Dn,[t("h2",Vn,g(f(N).Title),1),t("div",{innerHTML:e.value},null,8,Hn)])]),m.value?(a(),l("div",Cn)):P("",!0)])]))}},Fn=O(Bn,[["__scopeId","data-v-b3a8cdff"]]),Un={Title:"串门骑行打怪队",Subtitle:"共识：骑行友好，践行可持续低碳的生活方式，自由发起、文明发挥、尽情 riding ♾️"},zn={id:"Footer"},Nn={class:"jn-footer-placeholder"},qn={__name:"Footer",setup(h){const d=M();R(()=>d.isMobile);const c=new Date().getFullYear();return(m,e)=>(a(),l("div",zn,[t("div",Nn,[S(g(f(Un).Title)+" © "+g(f(c))+"  ",1),e[0]||(e[0]=t("a",{href:"https://github.com/luffythink/docs"},"OpenSource",-1)),e[1]||(e[1]=S(". "))])]))}},Wn=O(qn,[["__scopeId","data-v-fa8291e7"]]),Gn=J(),x=(h,d={})=>{const c={delay:200,duration:1e3,distance:"100px",reset:!1};return Gn.reveal(h,{...c,...d})},I={fadeInBottom:{origin:"bottom"},fadeInTop:{origin:"top"},fadeInLeft:{origin:"left"},fadeInRight:{origin:"right"}},Xn={id:"main-part",class:"container mt-2 px-0"},Zn={"data-bs-spy":"scroll","data-bs-target":"#navbar-top","data-bs-root-margin":"0px 0px -40%","data-bs-smooth-scroll":"true",class:"rounded-2",tabindex:"0"},Jn={__name:"App",setup(h){const d=M(),c=R(()=>d.isMobile),m=()=>{requestAnimationFrame(()=>{const e=document.getElementById("jn-loading");e&&(e.style.display="none")})};return E(()=>{m(),requestAnimationFrame(()=>{x(".jn-introduce-bg",{...I.fadeInBottom,delay:200}),x(".jn-introduce-title",{...I.fadeInTop,delay:600}),x(".jn-introduce-subtitle",{...I.fadeInLeft,delay:600}),x(".jn-introduce-doc",{...I.fadeInBottom,delay:1600}),setTimeout(()=>{requestAnimationFrame(()=>{x(".conversation-right",{...I.fadeInRight,delay:200}),x(".conversation-left",{...I.fadeInLeft,delay:200}),x(".jn-animate-card",{...I.fadeInBottom,delay:200})})},1e3)})}),(e,n)=>(a(),l($,null,[T(mt),t("div",Xn,[t("div",Zn,[T(yt),t("div",{class:w([c.value?"jn-items-full-width":"jn-items"])},[T(Qt),T(me),T(dn),T(Ln),T(Ie),T(Fn)],2)]),T(Wn)])],64))}},Yn=O(Jn,[["__scopeId","data-v-c45bf846"]]),W=Y(Yn),G=Q();W.use(G);const Qn=M(G),Kn=K({app:"MyIP",plugins:[tt({measurementIds:["G-6YR8BMYS2C"]})]});Kn.page();function X(){Qn.setIsMobile(window.innerWidth<768)}X();window.addEventListener("resize",X);W.mount("#app");
