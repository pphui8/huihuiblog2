(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[449],{6359:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/BlogContainer",function(){return i(9473)}])},3661:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return C}});var n=i(603),o=i(5893),s=i(1664),r=i.n(s),a=i(7294),l=i(2289),h=i.n(l),d=i(1477);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}let g=new Map,u=new WeakMap,p=0,_,f=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function b(e){return"function"!=typeof e.children}class v extends a.Component{constructor(e){super(e),this.node=null,this._unobserveCb=null,this.handleNode=e=>{!this.node||(this.unobserve(),e||this.props.triggerOnce||this.props.skip||this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=e||null,this.observeNode()},this.handleChange=(e,t)=>{e&&this.props.triggerOnce&&this.unobserve(),b(this.props)||this.setState({inView:e,entry:t}),this.props.onChange&&this.props.onChange(e,t)},this.state={inView:!!e.initialInView,entry:void 0}}componentDidUpdate(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve(),this.node=null}observeNode(){if(!this.node||this.props.skip)return;let{threshold:e,root:t,rootMargin:i,trackVisibility:n,delay:o,fallbackInView:s}=this.props;this._unobserveCb=function(e,t,i={},n=_){if(void 0===window.IntersectionObserver&&void 0!==n){let o=e.getBoundingClientRect();return t(n,{isIntersecting:n,target:e,intersectionRatio:"number"==typeof i.threshold?i.threshold:0,time:0,boundingClientRect:o,intersectionRect:o,rootBounds:o}),()=>{}}let{id:s,observer:r,elements:a}=function(e){var t;let i=Object.keys(e).sort().filter(t=>void 0!==e[t]).map(t=>{var i;return`${t}_${"root"===t?(i=e.root)?(u.has(i)||(p+=1,u.set(i,p.toString())),u.get(i)):"0":e[t]}`}).toString(),n=g.get(i);if(!n){let o=new Map,s,r=new IntersectionObserver(t=>{t.forEach(t=>{var i;let n=t.isIntersecting&&s.some(e=>t.intersectionRatio>=e);e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=n),null==(i=o.get(t.target))||i.forEach(e=>{e(n,t)})})},e);s=r.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:i,observer:r,elements:o},g.set(i,n)}return n}(i),l=a.get(e)||[];return a.has(e)||a.set(e,l),l.push(t),r.observe(e),function(){l.splice(l.indexOf(t),1),0===l.length&&(a.delete(e),r.unobserve(e)),0===a.size&&(r.disconnect(),g.delete(s))}}(this.node,this.handleChange,{threshold:e,root:t,rootMargin:i,trackVisibility:n,delay:o},s)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){if(!b(this.props)){let{inView:e,entry:t}=this.state;return this.props.children({inView:e,entry:t,ref:this.handleNode})}let i=this.props,{children:n,as:o}=i,s=function(e,t){if(null==e)return{};var i,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(i,f);return a.createElement(o||"div",c({ref:this.handleNode},s),n)}}var m=i(1876).Buffer,C=function(e){var t=void 0===e.data?{descript:"",id:0,name:"",tag:""}:e.data,i=m.from(t.name).toString("base64"),s=e.delay<3?2*e.delay:3,l=(0,a.useContext)(d.ThemeContext).isNight,c=(0,n.Z)(a.useState(!1),2),g=c[0],u=c[1];return(0,o.jsx)(v,{onChange:function(e){e&&u(e)},children:function(e){var n=e.ref;return(0,o.jsx)("div",{className:g?h().inView:"",style:{animationDelay:.1*s+"s"},children:(0,o.jsxs)("div",{className:l?h().blog_night:h().blog,ref:n,children:[(0,o.jsx)(r(),{href:"/blog/".concat(i),children:(0,o.jsx)("div",{className:h().title,children:(0,o.jsx)("p",{children:t.name})})}),(0,o.jsx)("div",{className:h().blog_line}),(0,o.jsx)("div",{className:h().disc,children:(0,o.jsx)("p",{children:t.descript})}),(0,o.jsx)("div",{className:h().blog_line}),(0,o.jsx)("div",{className:h().blog_footer,children:(0,o.jsx)("div",{className:h().tag,children:t.tag})})]})})}})}},9473:function(e,t,i){"use strict";i.r(t);var n=i(5893),o=i(7294),s=i(3661),r=i(8186),a=i.n(r),l=i(1477),h=function(e){var t=(0,o.useContext)(l.ThemeContext).isNight,i=(void 0===e.data?[]:e.data).sort(function(e,t){return t.id-e.id}),r={light:"https://tvax4.sinaimg.cn/large/006z6YU4ly1h0lz7hc81hj30dw0u075l.jpg",night:"https://tvax3.sinaimg.cn/large/006z6YU4ly1h0lz7mre07j30dw0u0t9y.jpg"};return(0,n.jsxs)("div",{className:a().blogs,children:[(0,n.jsx)("div",{className:a().container,children:i.map(function(e,t){return(0,n.jsx)(s.default,{data:e,delay:t},e.id)})}),(0,n.jsx)("img",{className:a().tomodati,src:t?r.night:r.light,alt:"ともだち！"})]})};t.default=h},2289:function(e){e.exports={inView:"BlogCard_inView__Am9N2",blogInAnimation:"BlogCard_blogInAnimation__h0aXq",blog:"BlogCard_blog__djq85",title:"BlogCard_title__e0ORr",disc:"BlogCard_disc__WDRFK",blog_line:"BlogCard_blog_line__0G5LH",blog_footer:"BlogCard_blog_footer__D24fh",tag:"BlogCard_tag__GK3Pv",blog_night:"BlogCard_blog_night__lhWA6"}},8186:function(e){e.exports={blogs:"BlogContainer_blogs__6qkiD",container:"BlogContainer_container__6rCoG",tomodati:"BlogContainer_tomodati__7a4JK",fadeInAnimation:"BlogContainer_fadeInAnimation__Lcv_o"}}},function(e){e.O(0,[876,774,888,179],function(){return e(e.s=6359)}),_N_E=e.O()}]);