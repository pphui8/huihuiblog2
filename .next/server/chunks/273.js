exports.id = 273;
exports.ids = [273];
exports.modules = {

/***/ 6567:
/***/ ((module) => {

// Exports
module.exports = {
	"inView": "BlogCard_inView__HdeuC",
	"blogInAnimation": "BlogCard_blogInAnimation__oowTg",
	"blog": "BlogCard_blog__eBY2H",
	"title": "BlogCard_title__IT6Iy",
	"disc": "BlogCard_disc__ob_S9",
	"blog_line": "BlogCard_blog_line__tWtuV",
	"blog_footer": "BlogCard_blog_footer__f7yvK",
	"tag": "BlogCard_tag__8u_2O",
	"blog_night": "BlogCard_blog_night__tAlgK"
};


/***/ }),

/***/ 3570:
/***/ ((module) => {

// Exports
module.exports = {
	"blogs": "BlogContainer_blogs__T2sAN",
	"container": "BlogContainer_container__QcOCK",
	"tomodati": "BlogContainer_tomodati__CWmwk",
	"fadeInAnimation": "BlogContainer_fadeInAnimation__6CBUO"
};


/***/ }),

/***/ 7806:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "load_container__Kq2KM",
	"loading": "load_loading__pIUPq",
	"fadeInAnimation": "load_fadeInAnimation__h4tvz",
	"loadingNight": "load_loadingNight__95JSD"
};


/***/ }),

/***/ 4160:
/***/ ((module) => {

// Exports
module.exports = {
	"head": "Profile_head__yxEfH",
	"profile": "Profile_profile__NH7Yv",
	"fadeInAnimation": "Profile_fadeInAnimation__rKaeb",
	"hakase": "Profile_hakase__WFjSY",
	"sakamoto": "Profile_sakamoto__04yRg",
	"line_l": "Profile_line_l__xRI7V",
	"expandAnimation": "Profile_expandAnimation__Cs8AR",
	"line_r": "Profile_line_r__YNfHL",
	"profile_night": "Profile_profile_night__H2Rsn"
};


/***/ }),

/***/ 7169:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Page)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
var react_default = /*#__PURE__*/__webpack_require__.n(react_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./app/home/BlogContainer/BlogCard.module.css
var BlogCard_module = __webpack_require__(6567);
var BlogCard_module_default = /*#__PURE__*/__webpack_require__.n(BlogCard_module);
// EXTERNAL MODULE: ./app/ThemeContext.tsx
var ThemeContext = __webpack_require__(4534);
// EXTERNAL MODULE: ./node_modules/react-intersection-observer/react-intersection-observer.modern.mjs
var react_intersection_observer_modern = __webpack_require__(663);
;// CONCATENATED MODULE: ./app/home/BlogContainer/BlogCard.tsx






const Index = (props)=>{
    const data = props.data === undefined ? {
        descript: "",
        id: 0,
        name: "",
        tag: ""
    } : props.data;
    const dataurl_base64 = Buffer.from(data.name).toString("base64");
    const dataurl = encodeURIComponent(dataurl_base64);
    let delay = props.delay < 3 ? props.delay * 2 : 3;
    const { isNight  } = (0,react_.useContext)(ThemeContext/* ThemeContext */.N);
    const [inView, setInView] = react_default().useState(false);
    return /*#__PURE__*/ jsx_runtime_.jsx(react_intersection_observer_modern/* InView */.df, {
        onChange: (inView)=>{
            if (!inView) return;
            setInView(inView);
        },
        children: ({ ref  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: inView ? (BlogCard_module_default()).inView : "",
                style: {
                    animationDelay: delay * 0.1 + "s"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: isNight ? (BlogCard_module_default()).blog_night : (BlogCard_module_default()).blog,
                    ref: ref,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: `/blog/${dataurl}`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (BlogCard_module_default()).title,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: data.name
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (BlogCard_module_default()).blog_line
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (BlogCard_module_default()).disc,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: data.descript
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (BlogCard_module_default()).blog_line
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (BlogCard_module_default()).blog_footer,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (BlogCard_module_default()).tag,
                                children: data.tag
                            })
                        })
                    ]
                })
            })
    });
};
/* harmony default export */ const BlogCard = (Index);

// EXTERNAL MODULE: ./app/home/BlogContainer/load.module.css
var load_module = __webpack_require__(7806);
var load_module_default = /*#__PURE__*/__webpack_require__.n(load_module);
// EXTERNAL MODULE: ./app/home/BlogContainer/BlogContainer.module.css
var BlogContainer_module = __webpack_require__(3570);
var BlogContainer_module_default = /*#__PURE__*/__webpack_require__.n(BlogContainer_module);
// EXTERNAL MODULE: ./config.js
var config = __webpack_require__(8693);
// EXTERNAL MODULE: ./node_modules/react-hot-toast/dist/index.mjs + 1 modules
var dist = __webpack_require__(3518);
;// CONCATENATED MODULE: ./app/home/BlogContainer/BlogContainer.tsx








let is_show_error = false;
async function getData() {
    const res = await fetch(config/* default.baseURL */.Z.baseURL + "index");
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
}
function Page() {
    const { isNight  } = (0,react_.useContext)(ThemeContext/* ThemeContext */.N);
    const [index, setIndex] = react_default().useState([]);
    (0,react_.useEffect)(()=>{
        getData().then((res)=>res.sort((a, b)=>b.id - a.id)).then((res)=>setIndex(res)).catch(()=>{
            if (!is_show_error) {
                dist/* default.error */.ZP.error("Failed to fetch data");
                is_show_error = true;
            }
        });
    }, []);
    const tomodati = {
        light: "https://i.postimg.cc/qRnsB4dx/home-sanningumi.jpg",
        night: "https://i.postimg.cc/mhxM0nn6/home-sanningumi-night.jpg"
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (BlogContainer_module_default()).blogs,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (BlogContainer_module_default()).container,
                children: [
                    // if index is empty, show loading
                    index.length === 0 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (load_module_default()).container,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: isNight ? (load_module_default()).loadingNight : (load_module_default()).loading,
                            children: "少女祈祷中..."
                        })
                    }),
                    index.map((elem, index)=>{
                        return /*#__PURE__*/ jsx_runtime_.jsx(BlogCard, {
                            data: elem,
                            delay: index
                        }, elem.id);
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                className: (BlogContainer_module_default()).tomodati,
                src: isNight ? tomodati.night : tomodati.light,
                alt: "ともだち！"
            })
        ]
    });
}


/***/ }),

/***/ 6449:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Profile_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4160);
/* harmony import */ var _Profile_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Profile_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ThemeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4534);




const Index = (props)=>{
    const { isNight  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_ThemeContext__WEBPACK_IMPORTED_MODULE_2__/* .ThemeContext */ .N);
    const sakamoto = {
        normal: "https://i.postimg.cc/CMPtn4yB/sakamoto.jpg",
        sleep: "https://i.postimg.cc/XqRkcqch/sakamoto-Night.jpg"
    };
    const hakase = {
        normal: "https://i.postimg.cc/d3y81vP9/hakase.jpg",
        sleep: "https://i.postimg.cc/Qtq2zLn0/hakase-Night.jpg"
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: isNight ? (_Profile_module_css__WEBPACK_IMPORTED_MODULE_3___default().profile_night) : (_Profile_module_css__WEBPACK_IMPORTED_MODULE_3___default().head),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_Profile_module_css__WEBPACK_IMPORTED_MODULE_3___default().profile),
                title: "単純な馬鹿でありたい"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: isNight ? sakamoto.sleep : sakamoto.normal,
                alt: "sakamoto",
                className: (_Profile_module_css__WEBPACK_IMPORTED_MODULE_3___default().sakamoto)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: isNight ? hakase.sleep : hakase.normal,
                alt: "hakase",
                className: (_Profile_module_css__WEBPACK_IMPORTED_MODULE_3___default().hakase)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_Profile_module_css__WEBPACK_IMPORTED_MODULE_3___default().line_l)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_Profile_module_css__WEBPACK_IMPORTED_MODULE_3___default().line_r)
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);


/***/ })

};
;