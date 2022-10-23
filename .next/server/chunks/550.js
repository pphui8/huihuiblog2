exports.id = 550;
exports.ids = [550];
exports.modules = {

/***/ 7393:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "Footer_footer___eok_",
	"line": "Footer_line__lKpZF",
	"fadeInAnimation": "Footer_fadeInAnimation__tF6sX",
	"at": "Footer_at__eT7Kl",
	"touunn": "Footer_touunn__1F74G",
	"ashiato": "Footer_ashiato__taJ8M",
	"footer_night": "Footer_footer_night__wuAQr"
};


/***/ }),

/***/ 4550:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Index)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Footer_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7393);
/* harmony import */ var _Footer_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Footer_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ThemeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1477);




function Index({}) {
    const { isNight  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_ThemeContext__WEBPACK_IMPORTED_MODULE_2__.ThemeContext);
    const ashiato = {
        normal: "https://tvax3.sinaimg.cn/large/006z6YU4ly1h0fl1nqkmhj30lk0brwf8.jpg",
        night: "https://tvax2.sinaimg.cn/large/006z6YU4ly1h0gh6q19bdj30lk0braau.jpg"
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
        className: isNight ? (_Footer_module_css__WEBPACK_IMPORTED_MODULE_3___default().footer_night) : (_Footer_module_css__WEBPACK_IMPORTED_MODULE_3___default().footer),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_Footer_module_css__WEBPACK_IMPORTED_MODULE_3___default().line)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: (_Footer_module_css__WEBPACK_IMPORTED_MODULE_3___default().at),
                children: "@pphui8"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: (_Footer_module_css__WEBPACK_IMPORTED_MODULE_3___default().touunn),
                children: "-東雲研究所-"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: isNight ? ashiato.night : ashiato.normal,
                alt: "sakamotosanno",
                className: (_Footer_module_css__WEBPACK_IMPORTED_MODULE_3___default().ashiato)
            })
        ]
    });
}


/***/ })

};
;