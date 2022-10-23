exports.id = 473;
exports.ids = [473];
exports.modules = {

/***/ 2847:
/***/ ((module) => {

// Exports
module.exports = {
	"blogs": "BlogContainer_blogs__6qkiD",
	"container": "BlogContainer_container__6rCoG",
	"tomodati": "BlogContainer_tomodati__7a4JK",
	"fadeInAnimation": "BlogContainer_fadeInAnimation__Lcv_o"
};


/***/ }),

/***/ 9473:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BlogCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8966);
/* harmony import */ var _BlogContainer_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2847);
/* harmony import */ var _BlogContainer_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_BlogContainer_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ThemeContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1477);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_BlogCard__WEBPACK_IMPORTED_MODULE_2__]);
_BlogCard__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const Index = (props)=>{
    const { isNight  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_ThemeContext__WEBPACK_IMPORTED_MODULE_3__.ThemeContext);
    let data = props.data === undefined ? [] : props.data;
    const index = data.sort((a, b)=>b.id - a.id);
    const tomodati = {
        light: "https://tvax4.sinaimg.cn/large/006z6YU4ly1h0lz7hc81hj30dw0u075l.jpg",
        night: "https://tvax3.sinaimg.cn/large/006z6YU4ly1h0lz7mre07j30dw0u0t9y.jpg"
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_BlogContainer_module_css__WEBPACK_IMPORTED_MODULE_4___default().blogs),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_BlogContainer_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),
                children: index.map((elem, index)=>{
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BlogCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        data: elem,
                        delay: index
                    }, elem.id);
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                className: (_BlogContainer_module_css__WEBPACK_IMPORTED_MODULE_4___default().tomodati),
                src: isNight ? tomodati.night : tomodati.light,
                alt: "ともだち！"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;