exports.id = 966;
exports.ids = [966];
exports.modules = {

/***/ 430:
/***/ ((module) => {

// Exports
module.exports = {
	"inView": "BlogCard_inView__Am9N2",
	"blogInAnimation": "BlogCard_blogInAnimation__h0aXq",
	"blog": "BlogCard_blog__djq85",
	"title": "BlogCard_title__e0ORr",
	"disc": "BlogCard_disc__WDRFK",
	"blog_line": "BlogCard_blog_line__0G5LH",
	"blog_footer": "BlogCard_blog_footer__D24fh",
	"tag": "BlogCard_tag__GK3Pv",
	"blog_night": "BlogCard_blog_night__lhWA6"
};


/***/ }),

/***/ 8966:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _BlogCard_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(430);
/* harmony import */ var _BlogCard_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_BlogCard_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ThemeContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1477);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4009);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__]);
react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const Index = (props)=>{
    const data = props.data === undefined ? {
        descript: "",
        id: 0,
        name: "",
        tag: ""
    } : props.data;
    const dataurl = Buffer.from(data.name).toString("base64");
    let delay = props.delay < 3 ? props.delay * 2 : 3;
    const { isNight  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_ThemeContext__WEBPACK_IMPORTED_MODULE_3__.ThemeContext);
    const [inView, setInView] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(false);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__.InView, {
        onChange: (inView)=>{
            if (!inView) return;
            setInView(inView);
        },
        children: ({ ref  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: inView ? (_BlogCard_module_css__WEBPACK_IMPORTED_MODULE_5___default().inView) : "",
                style: {
                    animationDelay: delay * 0.1 + "s"
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: isNight ? (_BlogCard_module_css__WEBPACK_IMPORTED_MODULE_5___default().blog_night) : (_BlogCard_module_css__WEBPACK_IMPORTED_MODULE_5___default().blog),
                    ref: ref,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: `/blog/${dataurl}`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_BlogCard_module_css__WEBPACK_IMPORTED_MODULE_5___default().title),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: data.name
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_BlogCard_module_css__WEBPACK_IMPORTED_MODULE_5___default().blog_line)
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_BlogCard_module_css__WEBPACK_IMPORTED_MODULE_5___default().disc),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: data.descript
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_BlogCard_module_css__WEBPACK_IMPORTED_MODULE_5___default().blog_line)
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_BlogCard_module_css__WEBPACK_IMPORTED_MODULE_5___default().blog_footer),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_BlogCard_module_css__WEBPACK_IMPORTED_MODULE_5___default().tag),
                                children: data.tag
                            })
                        })
                    ]
                })
            })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;