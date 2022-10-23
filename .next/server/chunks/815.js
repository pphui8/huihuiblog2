exports.id = 815;
exports.ids = [815];
exports.modules = {

/***/ 8253:
/***/ ((module) => {

// Exports
module.exports = {
	"head": "Profile_head__zEcQW",
	"profile": "Profile_profile__RE68S",
	"fadeInAnimation": "Profile_fadeInAnimation__Qd5RS",
	"hakase": "Profile_hakase__2Y3l1",
	"sakamoto": "Profile_sakamoto__jrEi8",
	"line_l": "Profile_line_l__n3E9v",
	"expandAnimation": "Profile_expandAnimation__t3ihF",
	"line_r": "Profile_line_r__LolGs",
	"profile_night": "Profile_profile_night__7cAxI"
};


/***/ }),

/***/ 5815:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Profile_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8253);
/* harmony import */ var _Profile_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Profile_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ThemeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1477);




const Index = (props)=>{
    const { isNight  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_ThemeContext__WEBPACK_IMPORTED_MODULE_2__.ThemeContext);
    const sakamoto = {
        normal: "https://tvax4.sinaimg.cn/large/006z6YU4ly1h0fl000u43j31e00u8afz.jpg",
        sleep: "https://tva3.sinaimg.cn/large/006z6YU4ly1h0gh1hv12kj31b80xcdi6.jpg"
    };
    const hakase = {
        normal: "https://tvax2.sinaimg.cn/large/006z6YU4ly1h0fl171sxoj30ej0f4wgy.jpg",
        sleep: "https://tvax1.sinaimg.cn/large/006z6YU4ly1h0lx84djhej30gt0gq76p.jpg"
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