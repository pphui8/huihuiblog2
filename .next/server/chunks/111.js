exports.id = 111;
exports.ids = [111,477];
exports.modules = {

/***/ 4785:
/***/ ((module) => {

// Exports
module.exports = {
	"body_night": "mainPage_body_night__DA8gp"
};


/***/ }),

/***/ 3531:
/***/ ((module) => {

// Exports
module.exports = {
	"markdown_body": "markdown_markdown_body__r7wQA",
	"octicon": "markdown_octicon__KsF5E",
	"anchor": "markdown_anchor__HxXM0",
	"octicon-link": "markdown_octicon-link__Eoxd3",
	"pl-c": "markdown_pl-c__4IiBj",
	"pl-c1": "markdown_pl-c1__DgZIJ",
	"pl-s": "markdown_pl-s__jZvTL",
	"pl-v": "markdown_pl-v__ybNQx",
	"pl-e": "markdown_pl-e__ZLRno",
	"pl-en": "markdown_pl-en__ETfwR",
	"pl-smi": "markdown_pl-smi__ruhsY",
	"pl-s1": "markdown_pl-s1__kbLvr",
	"pl-ent": "markdown_pl-ent__TC2ZD",
	"pl-k": "markdown_pl-k__2BWne",
	"pl-pds": "markdown_pl-pds__oSDyK",
	"pl-pse": "markdown_pl-pse__1pEz2",
	"pl-sr": "markdown_pl-sr__kOvgr",
	"pl-cce": "markdown_pl-cce__QDSgA",
	"pl-sre": "markdown_pl-sre__rPnvF",
	"pl-sra": "markdown_pl-sra__dEAtY",
	"pl-smw": "markdown_pl-smw__T_fAg",
	"pl-bu": "markdown_pl-bu__OTaQD",
	"pl-ii": "markdown_pl-ii__Bcsh6",
	"pl-c2": "markdown_pl-c2___OV5v",
	"pl-ml": "markdown_pl-ml__Uq2FB",
	"pl-mh": "markdown_pl-mh__yQdxP",
	"pl-ms": "markdown_pl-ms__WBgHH",
	"pl-mi": "markdown_pl-mi__TFNGu",
	"pl-mb": "markdown_pl-mb__8ZYWa",
	"pl-md": "markdown_pl-md__DPYtj",
	"pl-mi1": "markdown_pl-mi1__TqQGm",
	"pl-mc": "markdown_pl-mc__QtCwG",
	"pl-mi2": "markdown_pl-mi2__cKehh",
	"pl-mdr": "markdown_pl-mdr__eL_do",
	"pl-ba": "markdown_pl-ba__DB_4V",
	"pl-sg": "markdown_pl-sg__46_nf",
	"pl-corl": "markdown_pl-corl__aZ8ZJ",
	"absent": "markdown_absent__QDZyp",
	"no-list": "markdown_no-list__GxYMp",
	"emoji": "markdown_emoji__4S_E3",
	"frame": "markdown_frame__rgnf1",
	"align-center": "markdown_align-center__daXFs",
	"align-right": "markdown_align-right__uNdQJ",
	"float-left": "markdown_float-left__Cp7_X",
	"float-right": "markdown_float-right__3KGkB",
	"highlight": "markdown_highlight__wMsYC",
	"csv-data": "markdown_csv-data__Iiq9v",
	"blob-num": "markdown_blob-num__XgFqy",
	"footnotes": "markdown_footnotes__hVBzj",
	"data-footnote-backref": "markdown_data-footnote-backref__TzK0a",
	"task-list-item": "markdown_task-list-item__3oA9I",
	"enabled": "markdown_enabled__gLlcN",
	"handle": "markdown_handle__yu1hR",
	"task-list-item-checkbox": "markdown_task-list-item-checkbox__YZUcd",
	"contains-task-list": "markdown_contains-task-list__HJAjs",
	"markdown_body_dark": "markdown_markdown_body_dark__zmJ7P"
};


/***/ }),

/***/ 1477:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeContext": () => (/* binding */ ThemeContext),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_mainPage_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4785);
/* harmony import */ var _styles_mainPage_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_mainPage_module_css__WEBPACK_IMPORTED_MODULE_2__);



// true: night theme
// false: light theme
const ThemeContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext({
    isNight: false,
    toggleTheme: ()=>{}
});
function ThemeContextProvider({ children  }) {
    const [theme, setTheme] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ThemeContext.Provider, {
        value: {
            isNight: theme,
            toggleTheme: ()=>setTheme(!theme)
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: theme ? (_styles_mainPage_module_css__WEBPACK_IMPORTED_MODULE_2___default().body_night) : "",
            children: children
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThemeContextProvider);


/***/ })

};
;