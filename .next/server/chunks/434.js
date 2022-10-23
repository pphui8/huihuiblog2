exports.id = 434;
exports.ids = [434];
exports.modules = {

/***/ 3636:
/***/ ((module) => {

// Exports
module.exports = {
	"filingContainer": "Filing_filingContainer__eRUv_",
	"blogInAnimation": "Filing_blogInAnimation__7d6W1",
	"filingContainerNight": "Filing_filingContainerNight__czAl1",
	"filingTitle": "Filing_filingTitle__I6OT8",
	"filingCard": "Filing_filingCard___yp9V"
};


/***/ }),

/***/ 1838:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    baseURL: "https://api.pphui8.com/",
    token: "Z2l0aHViX3BhdF8xMUFOS0JZREEwa0poQ3NFOXBEWVNmX0xTZmtGTGtLTVc5NzBOdGw4eFRCVk5wM3hyQ2ltdHFYSkE1cTlaYU5DZXhBVlpERElMU2VQem9WZ0lI"
});


/***/ }),

/***/ 4434:
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
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6201);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1838);
/* harmony import */ var _Filing_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3636);
/* harmony import */ var _Filing_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Filing_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ThemeContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1477);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_2__]);
react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






let isShow = false;
const Index = (props)=>{
    const { 0: tagCount , 1: setTagCount  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        test: 0,
        note: 0,
        blog: 0,
        code: 0
    });
    const { isNight  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_ThemeContext__WEBPACK_IMPORTED_MODULE_4__.ThemeContext);
    const baseURL = _config__WEBPACK_IMPORTED_MODULE_3__/* ["default"].baseURL */ .Z.baseURL;
    const getFiling = ()=>{
        if (isShow) return;
        fetch(baseURL + `filing`).then((res)=>res.json()).then((res)=>setTagCount(res)).catch((err)=>react_hot_toast__WEBPACK_IMPORTED_MODULE_2__["default"].error("request failed"));
        isShow = true;
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        getFiling();
    }, [
        isShow
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: isNight ? (_Filing_module_css__WEBPACK_IMPORTED_MODULE_5___default().filingContainerNight) : (_Filing_module_css__WEBPACK_IMPORTED_MODULE_5___default().filingContainer),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                className: (_Filing_module_css__WEBPACK_IMPORTED_MODULE_5___default().filingTitle),
                children: "archive"
            }),
            Object.keys(tagCount).map((value, index)=>{
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: (_Filing_module_css__WEBPACK_IMPORTED_MODULE_5___default().filingCard),
                    children: value + ` (` + tagCount[value] + `)`
                }, index);
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