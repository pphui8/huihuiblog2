(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[50],{2852:function(e,t,n){Promise.resolve().then(n.bind(n,9237))},4582:function(e){e.exports={article:"article_article__xmiJH",fadeInAnimation:"article_fadeInAnimation__BXAaZ",container:"article_container__4ev7l",index:"article_index__7MMmw",svg:"article_svg__f6QMs",blogInAnimation:"article_blogInAnimation__wO_qL",APILink:"article_APILink__SJ90u",kakoiitoomou:"article_kakoiitoomou__oZUHK",index_night:"article_index_night__P6k8l",loadingContainer:"article_loadingContainer__37P5N",loadingText:"article_loadingText__gCKjY",LoadfadeInAnimation:"article_LoadfadeInAnimation__uSfpm",loadingTextNight:"article_loadingTextNight__BpErh"}},2390:function(e){e.exports={body_night:"mainPage_body_night__DA8gp"}},6174:function(e){e.exports={markdown_body:"markdown_markdown_body__r7wQA",octicon:"markdown_octicon__KsF5E",anchor:"markdown_anchor__HxXM0","octicon-link":"markdown_octicon-link__Eoxd3","pl-c":"markdown_pl-c__4IiBj","pl-c1":"markdown_pl-c1__DgZIJ","pl-s":"markdown_pl-s__jZvTL","pl-v":"markdown_pl-v__ybNQx","pl-e":"markdown_pl-e__ZLRno","pl-en":"markdown_pl-en__ETfwR","pl-smi":"markdown_pl-smi__ruhsY","pl-s1":"markdown_pl-s1__kbLvr","pl-ent":"markdown_pl-ent__TC2ZD","pl-k":"markdown_pl-k__2BWne","pl-pds":"markdown_pl-pds__oSDyK","pl-pse":"markdown_pl-pse__1pEz2","pl-sr":"markdown_pl-sr__kOvgr","pl-cce":"markdown_pl-cce__QDSgA","pl-sre":"markdown_pl-sre__rPnvF","pl-sra":"markdown_pl-sra__dEAtY","pl-smw":"markdown_pl-smw__T_fAg","pl-bu":"markdown_pl-bu__OTaQD","pl-ii":"markdown_pl-ii__Bcsh6","pl-c2":"markdown_pl-c2___OV5v","pl-ml":"markdown_pl-ml__Uq2FB","pl-mh":"markdown_pl-mh__yQdxP","pl-ms":"markdown_pl-ms__WBgHH","pl-mi":"markdown_pl-mi__TFNGu","pl-mb":"markdown_pl-mb__8ZYWa","pl-md":"markdown_pl-md__DPYtj","pl-mi1":"markdown_pl-mi1__TqQGm","pl-mc":"markdown_pl-mc__QtCwG","pl-mi2":"markdown_pl-mi2__cKehh","pl-mdr":"markdown_pl-mdr__eL_do","pl-ba":"markdown_pl-ba__DB_4V","pl-sg":"markdown_pl-sg__46_nf","pl-corl":"markdown_pl-corl__aZ8ZJ",absent:"markdown_absent__QDZyp","no-list":"markdown_no-list__GxYMp",emoji:"markdown_emoji__4S_E3",frame:"markdown_frame__rgnf1","align-center":"markdown_align-center__daXFs","align-right":"markdown_align-right__uNdQJ","float-left":"markdown_float-left__Cp7_X","float-right":"markdown_float-right__3KGkB",highlight:"markdown_highlight__wMsYC","csv-data":"markdown_csv-data__Iiq9v","blob-num":"markdown_blob-num__XgFqy",footnotes:"markdown_footnotes__hVBzj","data-footnote-backref":"markdown_data-footnote-backref__TzK0a","task-list-item":"markdown_task-list-item__3oA9I",enabled:"markdown_enabled__gLlcN",handle:"markdown_handle__yu1hR","task-list-item-checkbox":"markdown_task-list-item-checkbox__YZUcd","contains-task-list":"markdown_contains-task-list__HJAjs",markdown_body_dark:"markdown_markdown_body_dark__zmJ7P"}},3054:function(e,t,n){"use strict";n.d(t,{N:function(){return l}});var r=n(1844),o=n(5784),a=n(2390),i=n.n(a);let l=o.createContext({isNight:!1,toggleTheme:()=>{}});t.Z=function(e){let{children:t}=e,[n,a]=o.useState(!1);return(0,r.jsx)(l.Provider,{value:{isNight:n,toggleTheme:()=>a(!n)},children:(0,r.jsx)("div",{className:n?i().body_night:"",children:t})})}},9237:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var r=n(1844),o=n(5784),a=n(6501),i=n(8193),l=n(4582),_=n.n(l);let c=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((e,t)=>((t&=63)<36?e+=t.toString(36):t<62?e+=(t-26).toString(36).toUpperCase():t>62?e+="-":e+="_",e),"");var s=n(2127),d=n(5843),m=n(6174),p=n.n(m),h=n(3054),u=n(9330),k=n(1876).Buffer;let g=[],f=[],w=!1,b=[],x=!1,v=e=>{let{params:t}=e,n=decodeURIComponent(t.title),l=k.from(n,"base64").toString("utf-8"),[m,u]=(0,o.useState)(),{isNight:v}=(0,o.useContext)(h.N),[y,N]=(0,o.useState)("");(0,o.useEffect)(()=>w?void 0:(j(l).then(e=>{if(0===e.tree.length){a.Am.error("Failed to get blog data");return}u(e),A(e.tree,e.url)}).catch(e=>{x||(a.Am.error("Failed to get blog data"),x=!0)}),w=!0,()=>{w=!1,g=[],f=[]}),[]);let A=(e,t)=>{if(0===g.length){if(""!==t&&b.push(t),0===g.length&&g.push({path:"..",mode:"",type:"",sha:"",size:0,url:""}),e.map(e=>{"tree"===e.type?g.push(e):f.push(e)}),0!=f.length){let n=!1;for(let r of f)if("README.md"===r.path){E(r.url,r.path),n=!0;break}n||E(f[0].url,f[0].path)}N(y)}},E=(e,t)=>{let n=fetch(e,{method:"GET"}).then(e=>e.json()).then(e=>{let n=k.from(e.content,e.encoding).toString();-1===t.search(".md")&&(n="```"+n+"```"),N(n)}).catch(e=>a.Am.error("Request Failed"));a.Am.promise(n,{loading:"Loading...",success:"done!",error:"Error when fetching"})},C=e=>{if(e.path.endsWith(".rar")){N("zip file is not supported");return}E(e.url,e.path)},T=e=>{if(g=[],f=[],w=!1,".."===e.path){if(1===b.length){a.Am.error("This is the root directory");return}{b.pop();let t=b[b.length-1];if(void 0===t){a.Am.error("Emmm... Something wrong");return}let n=fetch(t,{method:"GET"}).then(e=>e.json()).then(e=>{A(e.tree,"")}).catch(e=>a.Am.error("Request Failed"));a.Am.promise(n,{loading:"Loading...",success:"done!",error:"Error when fetching"})}}else{let r=fetch(e.url).then(e=>e.json()).then(e=>{A(e.tree,"")}).catch(e=>a.Am.error("Request Failed"));b.push(e.url),a.Am.promise(r,{loading:"Loading...",success:"done!",error:"Error when fetching"})}};return(0,r.jsx)("div",{className:_().article,children:(0,r.jsx)("div",{className:_().container,children:void 0===m?(0,r.jsx)("div",{className:_().loadingContainer,children:(0,r.jsx)("p",{className:v?_().loadingTextNight:_().loadingText,children:"少女祈祷中..."})}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(function(e){let t=e.cur_index,n=e.cur_file,{isNight:a}=(0,o.useContext)(h.N);return(0,r.jsxs)("ul",{className:a?_().index_night:_().index,id:"blogTreeContainer",children:[t.map(e=>(0,r.jsxs)("li",{onClick:()=>T(e),children:[(0,r.jsx)(i.XPf,{className:_().svg}),e.path]},c())),n.map(e=>(0,r.jsxs)("li",{onClick:()=>C(e),children:[(0,r.jsx)(i.xNt,{className:_().svg}),e.path]},c()))]})},{cur_file:f,cur_index:g}),(0,r.jsx)(function(e){let{article:t}=e,{isNight:n}=(0,o.useContext)(h.N),[a,i]=(0,o.useState)("");return(0,o.useEffect)(()=>{i(t)},[]),(0,r.jsx)("div",{className:n?_().article+" "+p().markdown_body_dark:_().article+" "+p().markdown_body,children:(0,r.jsx)(s.D,{remarkPlugins:[d.Z],children:a})})},{article:y})]})})})};var y=v;async function j(e){let t;let n=await fetch("".concat(u.Z.baseURL,"blog/").concat(e)).then(e=>e.json()).catch(e=>e);if(200!==n.status)throw Error("Failed to fetch data");{let r=n.blog_root.replace('"',"").replace('"',"");t=await fetch("https://api.github.com/repos/pphui8/".concat(r,"/git/trees/main")).then(e=>e.json()).catch(e=>e)}return t}},9330:function(e,t){"use strict";t.Z={baseURL:"https://api.pphui8.com/",token:""}},8357:function(e,t,n){"use strict";n.d(t,{w_:function(){return _}});var r=n(5784),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=r.createContext&&r.createContext(o),i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};function _(e){return function(t){return r.createElement(c,i({attr:i({},e.attr)},t),function e(t){return t&&t.map(function(t,n){return r.createElement(t.tag,i({key:n},t.attr),e(t.child))})}(e.child))}}function c(e){var t=function(t){var n,o=e.attr,a=e.size,_=e.title,c=l(e,["attr","size","title"]),s=a||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,c,{className:n,style:i(i({color:e.color||t.color},t.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),_&&r.createElement("title",null,_),e.children)};return void 0!==a?r.createElement(a.Consumer,null,function(e){return t(e)}):t(o)}}},function(e){e.O(0,[617,952,436,626,17,744],function(){return e(e.s=2852)}),_N_E=e.O()}]);