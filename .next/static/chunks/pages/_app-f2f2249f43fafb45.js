(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(7571)}])},1210:function(e,t){"use strict";function r(e,t,r,o){return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=r,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r(4941).Z;r(5753).default,Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(2648).Z,a=r(7273).Z,i=n(r(7294)),s=r(6273),l=r(2725),u=r(3462),c=r(1018),d=r(7190),f=r(1210),p=r(8684),h={};function m(e,t,r,o){if(e&&s.isLocalURL(t)){Promise.resolve(e.prefetch(t,r,o)).catch(function(e){});var n=o&&void 0!==o.locale?o.locale:e&&e.locale;h[t+"%"+r+(n?"%"+n:"")]=!0}}var g=i.default.forwardRef(function(e,t){var r,n,g=e.href,y=e.as,v=e.children,b=e.prefetch,x=e.passHref,_=e.replace,w=e.shallow,j=e.scroll,C=e.locale,E=e.onClick,O=e.onMouseEnter,k=e.onTouchStart,N=e.legacyBehavior,M=void 0===N?!0!==Boolean(!1):N,P=a(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);r=v,M&&("string"==typeof r||"number"==typeof r)&&(r=i.default.createElement("a",null,r));var T=!1!==b,A=i.default.useContext(u.RouterContext),I=i.default.useContext(c.AppRouterContext);I&&(A=I);var S=i.default.useMemo(function(){var e=o(s.resolveHref(A,g,!0),2),t=e[0],r=e[1];return{href:t,as:y?s.resolveHref(A,y):r||t}},[A,g,y]),L=S.href,$=S.as,R=i.default.useRef(L),D=i.default.useRef($);M&&(n=i.default.Children.only(r));var H=M?n&&"object"==typeof n&&n.ref:t,z=o(d.useIntersection({rootMargin:"200px"}),3),F=z[0],Z=z[1],U=z[2],q=i.default.useCallback(function(e){(D.current!==$||R.current!==L)&&(U(),D.current=$,R.current=L),F(e),H&&("function"==typeof H?H(e):"object"==typeof H&&(H.current=e))},[$,H,L,U,F]);i.default.useEffect(function(){var e=Z&&T&&s.isLocalURL(L),t=void 0!==C?C:A&&A.locale,r=h[L+"%"+$+(t?"%"+t:"")];e&&!r&&m(A,L,$,{locale:t})},[$,L,Z,C,T,A]);var K={ref:q,onClick:function(e){M||"function"!=typeof E||E(e),M&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,t,r,o,n,a,l,u,c,d){if("A"!==e.currentTarget.nodeName.toUpperCase()||(!(p=(f=e).currentTarget.target)||"_self"===p)&&!f.metaKey&&!f.ctrlKey&&!f.shiftKey&&!f.altKey&&(!f.nativeEvent||2!==f.nativeEvent.which)&&s.isLocalURL(r)){e.preventDefault();var f,p,h=function(){"beforePopState"in t?t[n?"replace":"push"](r,o,{shallow:a,locale:u,scroll:l}):t[n?"replace":"push"](r,{forceOptimisticNavigation:!d})};c?i.default.startTransition(h):h()}}(e,A,L,$,_,w,j,C,Boolean(I),T)},onMouseEnter:function(e){M||"function"!=typeof O||O(e),M&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),!(!T&&I)&&s.isLocalURL(L)&&m(A,L,$,{priority:!0})},onTouchStart:function(e){M||"function"!=typeof k||k(e),M&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),!(!T&&I)&&s.isLocalURL(L)&&m(A,L,$,{priority:!0})}};if(!M||x||"a"===n.type&&!("href"in n.props)){var B=void 0!==C?C:A&&A.locale,Q=A&&A.isLocaleDomain&&f.getDomainLocale($,B,A.locales,A.domainLocales);K.href=Q||p.addBasePath(l.addLocale($,B,A&&A.defaultLocale))}return M?i.default.cloneElement(n,K):i.default.createElement("a",Object.assign({},P,K),r)});t.default=g,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,u=e.disabled||!i,c=o(n.useState(!1),2),d=c[0],f=c[1],p=o(n.useState(null),2),h=p[0],m=p[1];return n.useEffect(function(){if(i){if(!u&&!d&&h&&h.tagName){var e,o,n,c,p,m,g;return o=function(e){return e&&f(e)},p=(c=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},o=l.find(function(e){return e.root===r.root&&e.margin===r.margin});if(o&&(t=s.get(o)))return t;var n=new Map;return t={id:r,observer:new IntersectionObserver(function(e){e.forEach(function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:n},l.push(r),s.set(r,t),t}(n={root:null==t?void 0:t.current,rootMargin:r})).id,m=c.observer,(g=c.elements).set(h,o),m.observe(h),function(){if(g.delete(h),m.unobserve(h),0===g.size){m.disconnect(),s.delete(p);var e=l.findIndex(function(e){return e.root===p.root&&e.margin===p.margin});e>-1&&l.splice(e,1)}}}}else if(!d){var y=a.requestIdleCallback(function(){return f(!0)});return function(){return a.cancelIdleCallback(y)}}},[h,u,r,t,d]),[m,d,n.useCallback(function(){f(!1)},[])]};var n=r(7294),a=r(9311),i="function"==typeof IntersectionObserver,s=new Map,l=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var o=(0,r(2648).Z)(r(7294)),n=o.default.createContext(null);t.AppRouterContext=n;var a=o.default.createContext(null);t.LayoutRouterContext=a;var i=o.default.createContext(null);t.GlobalLayoutRouterContext=i;var s=o.default.createContext(null);t.TemplateContext=s},1477:function(e,t,r){"use strict";r.r(t),r.d(t,{ThemeContext:function(){return l}});var o=r(603),n=r(5893),a=r(7294),i=r(566),s=r.n(i),l=a.createContext({isNight:!1,toggleTheme:function(){}});t.default=function(e){var t=e.children,r=(0,o.Z)(a.useState(!1),2),i=r[0],u=r[1];return(0,n.jsx)(l.Provider,{value:{isNight:i,toggleTheme:function(){return u(!i)}},children:(0,n.jsx)("div",{className:i?s().body_night:"",children:t})})}},7571:function(e,t,r){"use strict";function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.r(t),r.d(t,{default:function(){return u}});var n=r(5893);r(906);var a=r(45),i=r(4550),s=r(6501);r(7294);var l=r(1477),u=function(e){var t=e.Component,r=e.pageProps;return(0,n.jsxs)(l.default,{children:[(0,n.jsx)(s.x7,{}),(0,n.jsx)(a.default,{}),(0,n.jsx)(t,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){o(e,t,r[t])})}return e}({},r)),(0,n.jsx)(i.default,{})]})}},4550:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var o=r(1351),n=r(5893),a=r(7294),i=r(1532),s=r.n(i),l=r(1477);function u(e){var e=null!==e?e:(0,o.Z)(TypeError("Cannot destructure undefined")),t=(0,a.useContext)(l.ThemeContext).isNight,r={normal:"https://tvax3.sinaimg.cn/large/006z6YU4ly1h0fl1nqkmhj30lk0brwf8.jpg",night:"https://tvax2.sinaimg.cn/large/006z6YU4ly1h0gh6q19bdj30lk0braau.jpg"};return(0,n.jsxs)("footer",{className:t?s().footer_night:s().footer,children:[(0,n.jsx)("div",{className:s().line}),(0,n.jsx)("p",{className:s().at,children:"@pphui8"}),(0,n.jsx)("p",{className:s().touunn,children:"-東雲研究所-"}),(0,n.jsx)("img",{src:t?r.night:r.normal,alt:"sakamotosanno",className:s().ashiato})]})}},45:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var o=r(603),n=r(1351),a=r(5893),i=r(1664),s=r.n(i),l=r(7294),u=r(5807),c=r.n(u),d=r(1477);function f(e){var e=null!==e?e:(0,n.Z)(TypeError("Cannot destructure undefined")),t=(0,l.useContext)(d.ThemeContext),r=t.isNight,i=t.toggleTheme,u=(0,o.Z)(l.useState("up"),2),f=u[0],p=u[1],h=function(){p("down"),i(),window.localStorage.setItem("isNight",r?"false":"true"),setTimeout(function(){p("up")},300)};return(0,l.useEffect)(function(){var e=window.localStorage.getItem("isNight");null==e&&(window.localStorage.setItem("isNight","false"),e="false"),r.toString()!==e&&i()},[]),(0,a.jsxs)("header",{className:r?c().header_night:c().header,children:[(0,a.jsx)("nav",{children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)(s(),{href:"/home",children:(0,a.jsx)("h1",{children:"huihuiblog"})})}),(0,a.jsx)("li",{children:(0,a.jsx)(s(),{href:"/home",children:(0,a.jsx)("p",{children:"home"})})}),(0,a.jsx)("li",{children:(0,a.jsx)(s(),{href:"/aboutme",children:(0,a.jsx)("p",{children:"about"})})}),(0,a.jsx)("li",{children:(0,a.jsx)(s(),{href:"https://pphui8.com",children:(0,a.jsx)("p",{children:"pphui8"})})})]})}),(0,a.jsxs)("div",{className:c().lighter,children:[(0,a.jsx)("div",{className:c().himo}),(0,a.jsx)("div",{className:"up"===f?c().switch:c().switchDown,onClick:h})]})]})}},1532:function(e){e.exports={footer:"Footer_footer___eok_",line:"Footer_line__lKpZF",fadeInAnimation:"Footer_fadeInAnimation__tF6sX",at:"Footer_at__eT7Kl",touunn:"Footer_touunn__1F74G",ashiato:"Footer_ashiato__taJ8M",footer_night:"Footer_footer_night__wuAQr"}},5807:function(e){e.exports={header:"Header_header__qrott",topInAnimation:"Header_topInAnimation__Ed3lq",lighter:"Header_lighter__qtzXw",fadeInAnimation:"Header_fadeInAnimation__xKTgQ",himo:"Header_himo__HU_8Q",switch:"Header_switch__Joori",switchDown:"Header_switchDown__VQ0z_",header_night:"Header_header_night__e3Yu4"}},566:function(e){e.exports={body_night:"mainPage_body_night__DA8gp"}},906:function(){},1664:function(e,t,r){e.exports=r(8418)},603:function(e,t,r){"use strict";function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=Array(t);r<t;r++)o[r]=e[r];return o}function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e,t)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(t,{Z:function(){return n}})},1351:function(e,t,r){"use strict";function o(e){throw e}r.d(t,{Z:function(){return o}})},6501:function(e,t,r){"use strict";r.d(t,{x7:function(){return es},ZP:function(){return el},Am:function(){return R}});var o=r(7294);let n={data:""},a=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||n,i=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,s=/\/\*[^]*?\*\/|  +/g,l=/\n+/g,u=(e,t)=>{let r="",o="",n="";for(let a in e){let i=e[a];"@"==a[0]?"i"==a[1]?r=a+" "+i+";":o+="f"==a[1]?u(i,a):a+"{"+u(i,"k"==a[1]?"":t)+"}":"object"==typeof i?o+=u(i,t?t.replace(/([^,])+/g,e=>a.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):a):null!=i&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),n+=u.p?u.p(a,i):a+":"+i+";")}return r+(t&&n?t+"{"+n+"}":n)+o},c={},d=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+d(e[r]);return t}return e},f=(e,t,r,o,n)=>{var a,f,p,h;let m=d(e),g=c[m]||(c[m]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(m));if(!c[g]){let y=m!==e?e:(e=>{let t,r,o=[{}];for(;t=i.exec(e.replace(s,""));)t[4]?o.shift():t[3]?(r=t[3].replace(l," ").trim(),o.unshift(o[0][r]=o[0][r]||{})):o[0][t[1]]=t[2].replace(l," ").trim();return o[0]})(e);c[g]=u(n?{["@keyframes "+g]:y}:y,r?"":"."+g)}let v=r&&c.g?c.g:null;return r&&(c.g=c[g]),a=c[g],f=t,v?f.data=f.data.replace(v,a):-1===f.data.indexOf(a)&&(f.data=o?a+f.data:f.data+a),g},p=(e,t,r)=>e.reduce((e,o,n)=>{let a=t[n];if(a&&a.call){let i=a(r),s=i&&i.props&&i.props.className||/^go/.test(i)&&i;a=s?"."+s:i&&"object"==typeof i?i.props?"":u(i,""):!1===i?"":i}return e+o+(null==a?"":a)},"");function h(e){let t=this||{},r=e.call?e(t.p):e;return f(r.unshift?r.raw?p(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,a(t.target),t.g,t.o,t.k)}h.bind({g:1});let m,g,y,v=h.bind({k:1});function b(e,t){let r=this||{};return function(){let o=arguments;function n(a,i){let s=Object.assign({},a),l=s.className||n.className;r.p=Object.assign({theme:g&&g()},s),r.o=/ *go\d+/.test(l),s.className=h.apply(r,o)+(l?" "+l:""),t&&(s.ref=i);let u=e;return e[0]&&(u=s.as||e,delete s.as),y&&u[0]&&y(s),m(u,s)}return t?t(n):n}}var x=e=>"function"==typeof e,_=(e,t)=>x(e)?e(t):e;let w,j;var C=(w=0,()=>(++w).toString()),E=()=>{if(void 0===j&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");j=!e||e.matches}return j},O=new Map,k=e=>{if(O.has(e))return;let t=setTimeout(()=>{O.delete(e),A({type:4,toastId:e})},1e3);O.set(e,t)},N=e=>{let t=O.get(e);t&&clearTimeout(t)},M=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&N(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:r}=t;return e.toasts.find(e=>e.id===r.id)?M(e,{type:1,toast:r}):M(e,{type:0,toast:r});case 3:let{toastId:o}=t;return o?k(o):e.toasts.forEach(e=>{k(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===o||void 0===o?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let n=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+n}))}}},P=[],T={toasts:[],pausedAt:void 0},A=e=>{T=M(T,e),P.forEach(e=>{e(T)})},I={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},S=(e={})=>{let[t,r]=(0,o.useState)(T);(0,o.useEffect)(()=>(P.push(r),()=>{let e=P.indexOf(r);e>-1&&P.splice(e,1)}),[t]);let n=t.toasts.map(t=>{var r,o;return{...e,...e[t.type],...t,duration:t.duration||(null==(r=e[t.type])?void 0:r.duration)||(null==e?void 0:e.duration)||I[t.type],style:{...e.style,...null==(o=e[t.type])?void 0:o.style,...t.style}}});return{...t,toasts:n}},L=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||C()}),$=e=>(t,r)=>{let o=L(t,e,r);return A({type:2,toast:o}),o.id},R=(e,t)=>$("blank")(e,t);R.error=$("error"),R.success=$("success"),R.loading=$("loading"),R.custom=$("custom"),R.dismiss=e=>{A({type:3,toastId:e})},R.remove=e=>A({type:4,toastId:e}),R.promise=(e,t,r)=>{let o=R.loading(t.loading,{...r,...null==r?void 0:r.loading});return e.then(e=>(R.success(_(t.success,e),{id:o,...r,...null==r?void 0:r.success}),e)).catch(e=>{R.error(_(t.error,e),{id:o,...r,...null==r?void 0:r.error})}),e};var D,H,z,F=(e,t)=>{A({type:1,toast:{id:e,height:t}})},Z=()=>{A({type:5,time:Date.now()})},U=e=>{let{toasts:t,pausedAt:r}=S(e);(0,o.useEffect)(()=>{if(r)return;let e=Date.now(),o=t.map(t=>{if(t.duration===1/0)return;let r=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(r<0){t.visible&&R.dismiss(t.id);return}return setTimeout(()=>R.dismiss(t.id),r)});return()=>{o.forEach(e=>e&&clearTimeout(e))}},[t,r]);let n=(0,o.useCallback)(()=>{r&&A({type:6,time:Date.now()})},[r]),a=(0,o.useCallback)((e,r)=>{let{reverseOrder:o=!1,gutter:n=8,defaultPosition:a}=r||{},i=t.filter(t=>(t.position||a)===(e.position||a)&&t.height),s=i.findIndex(t=>t.id===e.id),l=i.filter((e,t)=>t<s&&e.visible).length;return i.filter(e=>e.visible).slice(...o?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+n,0)},[t]);return{toasts:t,handlers:{updateHeight:F,startPause:Z,endPause:n,calculateOffset:a}}},q=v`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,K=b("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${q} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
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
`,B=b("div")`
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
`,Q=b("div")`
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
`,X=b("div")`
  position: absolute;
`,Y=b("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,G=b("div")`
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
`,J=({toast:e})=>{let{icon:t,type:r,iconTheme:n}=e;return void 0!==t?"string"==typeof t?o.createElement(G,null,t):t:"blank"===r?null:o.createElement(Y,null,o.createElement(B,{...n}),"loading"!==r&&o.createElement(X,null,"error"===r?o.createElement(K,{...n}):o.createElement(Q,{...n})))},V=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,W=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,ee=b("div")`
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
`,et=b("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,er=(e,t)=>{let r=e.includes("top")?1:-1,[o,n]=E()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[V(r),W(r)];return{animation:t?`${v(o)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${v(n)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},eo=o.memo(({toast:e,position:t,style:r,children:n})=>{let a=e.height?er(e.position||t||"top-center",e.visible):{opacity:0},i=o.createElement(J,{toast:e}),s=o.createElement(et,{...e.ariaProps},_(e.message,e));return o.createElement(ee,{className:e.className,style:{...a,...r,...e.style}},"function"==typeof n?n({icon:i,message:s}):o.createElement(o.Fragment,null,i,s))});D=o.createElement,u.p=void 0,m=D,g=void 0,y=void 0;var en=({id:e,className:t,style:r,onHeightUpdate:n,children:a})=>{let i=o.useCallback(t=>{if(t){let r=()=>{n(e,t.getBoundingClientRect().height)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,n]);return o.createElement("div",{ref:i,className:t,style:r},a)},ea=(e,t)=>{let r=e.includes("top"),o=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:E()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...r?{top:0}:{bottom:0},...o}},ei=h`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,es=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:n,children:a,containerStyle:i,containerClassName:s})=>{let{toasts:l,handlers:u}=U(r);return o.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...i},className:s,onMouseEnter:u.startPause,onMouseLeave:u.endPause},l.map(r=>{let i=r.position||t,s=u.calculateOffset(r,{reverseOrder:e,gutter:n,defaultPosition:t}),l=ea(i,s);return o.createElement(en,{id:r.id,key:r.id,onHeightUpdate:u.updateHeight,className:r.visible?ei:"",style:l},"custom"===r.type?_(r.message,r):a?a(r):o.createElement(eo,{toast:r,position:i}))}))},el=R}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(387)}),_N_E=e.O()}]);