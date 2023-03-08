(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{1439:function(e,t,r){Promise.resolve().then(r.bind(r,3555))},8479:function(e){e.exports={footer:"Footer_footer__pKMfQ",line:"Footer_line__pwJKg",fadeInAnimation:"Footer_fadeInAnimation__DH_Lv",at:"Footer_at__IP0dM",touunn:"Footer_touunn__rysc4",ashiato:"Footer_ashiato__ZujjX",footer_night:"Footer_footer_night__holFt"}},5640:function(e){e.exports={header:"Header_header__GwEYm",topInAnimation:"Header_topInAnimation__XtE0_",lighter:"Header_lighter__Nh4LK",fadeInAnimation:"Header_fadeInAnimation__ShFMh",himo:"Header_himo__rNWoA",switch:"Header_switch__EZ4nP",switchDown:"Header_switchDown__nMqFa",header_night:"Header_header_night__ttqkZ"}},2390:function(e){e.exports={body_night:"mainPage_body_night__DA8gp"}},7190:function(){},3054:function(e,t,r){"use strict";r.d(t,{N:function(){return n}});var o=r(1844),i=r(5784),a=r(2390),s=r.n(a);let n=i.createContext({isNight:!1,toggleTheme:()=>{}});t.Z=function(e){let{children:t}=e,[r,a]=i.useState(!1);return(0,o.jsx)(n.Provider,{value:{isNight:r,toggleTheme:()=>a(!r)},children:(0,o.jsx)("div",{className:r?s().body_night:"",children:t})})}},3555:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return m}});var o=r(1844),i=r(5784);r(7190);var a=r(1664),s=r.n(a),n=r(5640),l=r.n(n),c=r(3054);function d(e){let{}=e,{isNight:t,toggleTheme:r}=(0,i.useContext)(c.N),[a,n]=i.useState("up"),d=()=>{n("down"),r(),window.localStorage.setItem("isNight",t?"false":"true"),setTimeout(()=>{n("up")},300)};return(0,i.useEffect)(()=>{let e=window.localStorage.getItem("isNight");null==e&&(window.localStorage.setItem("isNight","false"),e="false"),t.toString()!==e&&r()},[]),(0,o.jsxs)("header",{className:t?l().header_night:l().header,children:[(0,o.jsx)("nav",{children:(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:(0,o.jsx)(s(),{href:"/home",style:{textDecoration:"none"},children:(0,o.jsx)("h1",{children:"huihuiblog"})})}),(0,o.jsx)("li",{children:(0,o.jsx)(s(),{href:"/home",style:{textDecoration:"none"},children:(0,o.jsx)("p",{children:"home"})})}),(0,o.jsx)("li",{children:(0,o.jsx)(s(),{href:"/aboutme",style:{textDecoration:"none"},children:(0,o.jsx)("p",{children:"about"})})}),(0,o.jsx)("li",{children:(0,o.jsx)(s(),{href:"https://pphui8.com",style:{textDecoration:"none"},children:(0,o.jsx)("p",{children:"pphui8"})})})]})}),(0,o.jsxs)("div",{className:l().lighter,children:[(0,o.jsx)("div",{className:l().himo}),(0,o.jsx)("div",{className:"up"===a?l().switch:l().switchDown,onClick:d})]})]})}var u=r(8479),p=r.n(u);function h(e){let{}=e,{isNight:t}=(0,i.useContext)(c.N),r={normal:"https://i.postimg.cc/wjr8GqXc/ashiato.jpg",night:"https://i.postimg.cc/zGbP3nhK/ashiato-Night.jpg"};return(0,o.jsxs)("footer",{className:t?p().footer_night:p().footer,children:[(0,o.jsx)("div",{className:p().line}),(0,o.jsx)("p",{className:p().at,children:"@pphui8"}),(0,o.jsx)("p",{className:p().touunn,children:"-東雲研究所-"}),(0,o.jsx)("img",{src:t?r.night:r.normal,alt:"sakamotosanno",className:p().ashiato})]})}var f=r(6501);function m(e){let{children:t}=e;return(0,o.jsxs)("html",{lang:"en",children:[(0,o.jsxs)("head",{children:[(0,o.jsx)("title",{children:"huihuiblog"}),(0,o.jsx)("meta",{name:"keywords",content:"huihuiblog,pphui8,pphui,Jinhui,湫月汐,个人网站,网站主页,博客主页"}),(0,o.jsx)("meta",{name:"description",content:"pphui8的blog"}),(0,o.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,o.jsx)("body",{children:(0,o.jsxs)(c.Z,{children:[(0,o.jsx)(f.x7,{}),(0,o.jsx)(d,{}),t,(0,o.jsx)(h,{})]})})]})}},9803:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o=r(5784),i=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,n=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var o,a={},c=null,d=null;for(o in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)s.call(t,o)&&!l.hasOwnProperty(o)&&(a[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===a[o]&&(a[o]=t[o]);return{$$typeof:i,type:e,key:c,ref:d,props:a,_owner:n.current}}t.Fragment=a,t.jsx=c,t.jsxs=c},1844:function(e,t,r){"use strict";e.exports=r(9803)},2431:function(){},6501:function(e,t,r){"use strict";let o,i;r.d(t,{x7:function(){return ei},ZP:function(){return ea},Am:function(){return z}});var a,s=r(5784);let n={data:""},l=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||n,c=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,d=/\/\*[^]*?\*\/|  +/g,u=/\n+/g,p=(e,t)=>{let r="",o="",i="";for(let a in e){let s=e[a];"@"==a[0]?"i"==a[1]?r=a+" "+s+";":o+="f"==a[1]?p(s,a):a+"{"+p(s,"k"==a[1]?"":t)+"}":"object"==typeof s?o+=p(s,t?t.replace(/([^,])+/g,e=>a.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):a):null!=s&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=p.p?p.p(a,s):a+":"+s+";")}return r+(t&&i?t+"{"+i+"}":i)+o},h={},f=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+f(e[r]);return t}return e},m=(e,t,r,o,i)=>{var a,s;let n=f(e),l=h[n]||(h[n]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(n));if(!h[l]){let m=n!==e?e:(e=>{let t,r,o=[{}];for(;t=c.exec(e.replace(d,""));)t[4]?o.shift():t[3]?(r=t[3].replace(u," ").trim(),o.unshift(o[0][r]=o[0][r]||{})):o[0][t[1]]=t[2].replace(u," ").trim();return o[0]})(e);h[l]=p(i?{["@keyframes "+l]:m}:m,r?"":"."+l)}let g=r&&h.g?h.g:null;return r&&(h.g=h[l]),a=h[l],s=t,g?s.data=s.data.replace(g,a):-1===s.data.indexOf(a)&&(s.data=o?a+s.data:s.data+a),l},g=(e,t,r)=>e.reduce((e,o,i)=>{let a=t[i];if(a&&a.call){let s=a(r),n=s&&s.props&&s.props.className||/^go/.test(s)&&s;a=n?"."+n:s&&"object"==typeof s?s.props?"":p(s,""):!1===s?"":s}return e+o+(null==a?"":a)},"");function y(e){let t=this||{},r=e.call?e(t.p):e;return m(r.unshift?r.raw?g(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,l(t.target),t.g,t.o,t.k)}y.bind({g:1});let x,b,_,v=y.bind({k:1});function w(e,t){let r=this||{};return function(){let o=arguments;function i(a,s){let n=Object.assign({},a),l=n.className||i.className;r.p=Object.assign({theme:b&&b()},n),r.o=/ *go\d+/.test(l),n.className=y.apply(r,o)+(l?" "+l:""),t&&(n.ref=s);let c=e;return e[0]&&(c=n.as||e,delete n.as),_&&c[0]&&_(n),x(c,n)}return t?t(i):i}}var j=e=>"function"==typeof e,N=(e,t)=>j(e)?e(t):e,E=(o=0,()=>(++o).toString()),k=()=>{if(void 0===i&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");i=!e||e.matches}return i},O=new Map,I=e=>{if(O.has(e))return;let t=setTimeout(()=>{O.delete(e),P({type:4,toastId:e})},1e3);O.set(e,t)},$=e=>{let t=O.get(e);t&&clearTimeout(t)},D=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&$(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:r}=t;return e.toasts.find(e=>e.id===r.id)?D(e,{type:1,toast:r}):D(e,{type:0,toast:r});case 3:let{toastId:o}=t;return o?I(o):e.toasts.forEach(e=>{I(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===o||void 0===o?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+i}))}}},A=[],C={toasts:[],pausedAt:void 0},P=e=>{C=D(C,e),A.forEach(e=>{e(C)})},F={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},S=(e={})=>{let[t,r]=(0,s.useState)(C);(0,s.useEffect)(()=>(A.push(r),()=>{let e=A.indexOf(r);e>-1&&A.splice(e,1)}),[t]);let o=t.toasts.map(t=>{var r,o;return{...e,...e[t.type],...t,duration:t.duration||(null==(r=e[t.type])?void 0:r.duration)||(null==e?void 0:e.duration)||F[t.type],style:{...e.style,...null==(o=e[t.type])?void 0:o.style,...t.style}}});return{...t,toasts:o}},H=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||E()}),T=e=>(t,r)=>{let o=H(t,e,r);return P({type:2,toast:o}),o.id},z=(e,t)=>T("blank")(e,t);z.error=T("error"),z.success=T("success"),z.loading=T("loading"),z.custom=T("custom"),z.dismiss=e=>{P({type:3,toastId:e})},z.remove=e=>P({type:4,toastId:e}),z.promise=(e,t,r)=>{let o=z.loading(t.loading,{...r,...null==r?void 0:r.loading});return e.then(e=>(z.success(N(t.success,e),{id:o,...r,...null==r?void 0:r.success}),e)).catch(e=>{z.error(N(t.error,e),{id:o,...r,...null==r?void 0:r.error})}),e};var M=(e,t)=>{P({type:1,toast:{id:e,height:t}})},L=()=>{P({type:5,time:Date.now()})},Z=e=>{let{toasts:t,pausedAt:r}=S(e);(0,s.useEffect)(()=>{if(r)return;let e=Date.now(),o=t.map(t=>{if(t.duration===1/0)return;let r=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(r<0){t.visible&&z.dismiss(t.id);return}return setTimeout(()=>z.dismiss(t.id),r)});return()=>{o.forEach(e=>e&&clearTimeout(e))}},[t,r]);let o=(0,s.useCallback)(()=>{r&&P({type:6,time:Date.now()})},[r]),i=(0,s.useCallback)((e,r)=>{let{reverseOrder:o=!1,gutter:i=8,defaultPosition:a}=r||{},s=t.filter(t=>(t.position||a)===(e.position||a)&&t.height),n=s.findIndex(t=>t.id===e.id),l=s.filter((e,t)=>t<n&&e.visible).length;return s.filter(e=>e.visible).slice(...o?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+i,0)},[t]);return{toasts:t,handlers:{updateHeight:M,startPause:L,endPause:o,calculateOffset:i}}},R=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${v`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${v`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${v`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,q=w("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${v`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`} 1s linear infinite;
`,K=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${v`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${v`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,U=w("div")`
  position: absolute;
`,G=w("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,X=w("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${v`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Y=({toast:e})=>{let{icon:t,type:r,iconTheme:o}=e;return void 0!==t?"string"==typeof t?s.createElement(X,null,t):t:"blank"===r?null:s.createElement(G,null,s.createElement(q,{...o}),"loading"!==r&&s.createElement(U,null,"error"===r?s.createElement(R,{...o}):s.createElement(K,{...o})))},B=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,J=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,W=w("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Q=w("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,V=(e,t)=>{let r=e.includes("top")?1:-1,[o,i]=k()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[B(r),J(r)];return{animation:t?`${v(o)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${v(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ee=s.memo(({toast:e,position:t,style:r,children:o})=>{let i=e.height?V(e.position||t||"top-center",e.visible):{opacity:0},a=s.createElement(Y,{toast:e}),n=s.createElement(Q,{...e.ariaProps},N(e.message,e));return s.createElement(W,{className:e.className,style:{...i,...r,...e.style}},"function"==typeof o?o({icon:a,message:n}):s.createElement(s.Fragment,null,a,n))});a=s.createElement,p.p=void 0,x=a,b=void 0,_=void 0;var et=({id:e,className:t,style:r,onHeightUpdate:o,children:i})=>{let a=s.useCallback(t=>{if(t){let r=()=>{o(e,t.getBoundingClientRect().height)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,o]);return s.createElement("div",{ref:a,className:t,style:r},i)},er=(e,t)=>{let r=e.includes("top"),o=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:k()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...r?{top:0}:{bottom:0},...o}},eo=y`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ei=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:o,children:i,containerStyle:a,containerClassName:n})=>{let{toasts:l,handlers:c}=Z(r);return s.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...a},className:n,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map(r=>{let a=r.position||t,n=er(a,c.calculateOffset(r,{reverseOrder:e,gutter:o,defaultPosition:t}));return s.createElement(et,{id:r.id,key:r.id,onHeightUpdate:c.updateHeight,className:r.visible?eo:"",style:n},"custom"===r.type?N(r.message,r):i?i(r):s.createElement(ee,{toast:r,position:a}))}))},ea=z}},function(e){e.O(0,[664,17,744],function(){return e(e.s=1439)}),_N_E=e.O()}]);