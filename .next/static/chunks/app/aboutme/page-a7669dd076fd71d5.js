(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[485],{2535:function(n,_,t){Promise.resolve().then(t.bind(t,77))},6452:function(n){n.exports={aboutMe:"Article_aboutMe__k11w1",container:"Article_container__RxAYD",article:"Article_article__NhOR5",blogInAnimation:"Article_blogInAnimation__MKsEJ",blogArticle:"Article_blogArticle__w5Lx6",APILink:"Article_APILink__25J4p",kakoiitoomou:"Article_kakoiitoomou__dbuKx",fadeInAnimation:"Article_fadeInAnimation__CcqP0"}},8882:function(n){n.exports={filingContainer:"Filing_filingContainer__vQmmu",blogInAnimation:"Filing_blogInAnimation__lLJJ3",filingContainerNight:"Filing_filingContainerNight__Xs_3U",filingTitle:"Filing_filingTitle__fnzyM",filingCard:"Filing_filingCard__9EbPO"}},2390:function(n){n.exports={body_night:"mainPage_body_night__DA8gp"}},6174:function(n){n.exports={markdown_body:"markdown_markdown_body__r7wQA",octicon:"markdown_octicon__KsF5E",anchor:"markdown_anchor__HxXM0","octicon-link":"markdown_octicon-link__Eoxd3","pl-c":"markdown_pl-c__4IiBj","pl-c1":"markdown_pl-c1__DgZIJ","pl-s":"markdown_pl-s__jZvTL","pl-v":"markdown_pl-v__ybNQx","pl-e":"markdown_pl-e__ZLRno","pl-en":"markdown_pl-en__ETfwR","pl-smi":"markdown_pl-smi__ruhsY","pl-s1":"markdown_pl-s1__kbLvr","pl-ent":"markdown_pl-ent__TC2ZD","pl-k":"markdown_pl-k__2BWne","pl-pds":"markdown_pl-pds__oSDyK","pl-pse":"markdown_pl-pse__1pEz2","pl-sr":"markdown_pl-sr__kOvgr","pl-cce":"markdown_pl-cce__QDSgA","pl-sre":"markdown_pl-sre__rPnvF","pl-sra":"markdown_pl-sra__dEAtY","pl-smw":"markdown_pl-smw__T_fAg","pl-bu":"markdown_pl-bu__OTaQD","pl-ii":"markdown_pl-ii__Bcsh6","pl-c2":"markdown_pl-c2___OV5v","pl-ml":"markdown_pl-ml__Uq2FB","pl-mh":"markdown_pl-mh__yQdxP","pl-ms":"markdown_pl-ms__WBgHH","pl-mi":"markdown_pl-mi__TFNGu","pl-mb":"markdown_pl-mb__8ZYWa","pl-md":"markdown_pl-md__DPYtj","pl-mi1":"markdown_pl-mi1__TqQGm","pl-mc":"markdown_pl-mc__QtCwG","pl-mi2":"markdown_pl-mi2__cKehh","pl-mdr":"markdown_pl-mdr__eL_do","pl-ba":"markdown_pl-ba__DB_4V","pl-sg":"markdown_pl-sg__46_nf","pl-corl":"markdown_pl-corl__aZ8ZJ",absent:"markdown_absent__QDZyp","no-list":"markdown_no-list__GxYMp",emoji:"markdown_emoji__4S_E3",frame:"markdown_frame__rgnf1","align-center":"markdown_align-center__daXFs","align-right":"markdown_align-right__uNdQJ","float-left":"markdown_float-left__Cp7_X","float-right":"markdown_float-right__3KGkB",highlight:"markdown_highlight__wMsYC","csv-data":"markdown_csv-data__Iiq9v","blob-num":"markdown_blob-num__XgFqy",footnotes:"markdown_footnotes__hVBzj","data-footnote-backref":"markdown_data-footnote-backref__TzK0a","task-list-item":"markdown_task-list-item__3oA9I",enabled:"markdown_enabled__gLlcN",handle:"markdown_handle__yu1hR","task-list-item-checkbox":"markdown_task-list-item-checkbox__YZUcd","contains-task-list":"markdown_contains-task-list__HJAjs",markdown_body_dark:"markdown_markdown_body_dark__zmJ7P"}},3054:function(n,_,t){"use strict";t.d(_,{N:function(){return r}});var o=t(1844),a=t(5784),i=t(2390),e=t.n(i);let r=a.createContext({isNight:!1,toggleTheme:()=>{}});_.Z=function(n){let{children:_}=n,[t,i]=a.useState(!1);return(0,o.jsx)(r.Provider,{value:{isNight:t,toggleTheme:()=>i(!t)},children:(0,o.jsx)("div",{className:t?e().body_night:"",children:_})})}},77:function(n,_,t){"use strict";t.r(_),t.d(_,{default:function(){return A}});var o=t(1844),a=t(5784),i=t(6452),e=t.n(i),r=t(6501),l=t(9330),d=t(8882),m=t.n(d),c=t(3054);let s=!1,p=n=>{let[_,t]=(0,a.useState)({test:0,note:0,blog:0,code:0}),{isNight:i}=(0,a.useContext)(c.N),e=l.Z.baseURL,d=()=>{s||(fetch(e+"filing").then(n=>n.json()).then(n=>t(n)).catch(n=>r.ZP.error("request failed")),s=!0)};return(0,a.useEffect)(()=>{d()},[s]),(0,o.jsxs)("div",{className:i?m().filingContainerNight:m().filingContainer,children:[(0,o.jsx)("h4",{className:m().filingTitle,children:"archive"}),Object.keys(_).map((n,t)=>(0,o.jsx)("p",{className:m().filingCard,children:n+" ("+_[n]+")"},t))]})};var k=t(6174),g=t.n(k),h=t(2127),w=t(5843),f=t(1876).Buffer;async function u(){let n=await fetch("https://api.github.com/repos/pphui8/pphui8/git/blobs/49c667a9827ac71f588d93f3db5698f60b0d1491"),_=await fetch("https://api.github.com/repos/pphui8/huihuiblog2/git/blobs/fa17d8088966513ccb4ecf8d448fc8054b483842");if(!n.ok||!_.ok)throw Error("Failed to fetch data");return{aboutme:n.json(),aboutblog:_.json()}}let b=!1,x=()=>{let[n,_]=(0,a.useState)("Loading..."),[t,i]=(0,a.useState)("Loading..."),{isNight:l}=(0,a.useContext)(c.N),d={light:"https://i.postimg.cc/9FVxtrkw/aboutme-sanningumi.jpg",night:"https://i.postimg.cc/nhTccjy4/aboutme-sanningumi-Night.jpg"},m=async()=>{b||(await u().then(n=>{n.aboutme.then(n=>{_(f.from(n.content,"base64").toString("utf-8"))}).catch(n=>{r.ZP.error("Failed to fetch data")}),n.aboutblog.then(n=>{i(f.from(n.content,"base64").toString("utf-8"))}).catch(n=>{r.ZP.error("Failed to fetch data")})}).catch(n=>{r.ZP.error("Failed to fetch data")}),b=!0)};return(0,a.useEffect)(()=>{m()},[b]),(0,o.jsxs)("div",{className:e().aboutMe,children:[(0,o.jsxs)("div",{className:e().container,children:[(0,o.jsx)("div",{className:l?e().article+" "+g().markdown_body_dark:e().article+" "+g().markdown_body,children:(0,o.jsx)(h.D,{remarkPlugins:[w.Z],children:n})}),(0,o.jsx)(p,{}),(0,o.jsx)("div",{className:l?e().blogArticle+" "+g().markdown_body_dark:e().blogArticle+" "+g().markdown_body,children:(0,o.jsx)(h.D,{remarkPlugins:[w.Z],children:t})})]}),(0,o.jsx)("img",{className:e().kakoiitoomou,src:l?d.night:d.light,alt:"かっこういいと思うこと！"})]})};var A=x},9330:function(n,_){"use strict";_.Z={baseURL:"https://api.pphui8.com/",token:""}}},function(n){n.O(0,[952,436,626,17,744],function(){return n(n.s=2535)}),_N_E=n.O()}]);