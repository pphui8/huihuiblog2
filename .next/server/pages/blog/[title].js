"use strict";
(() => {
var exports = {};
exports.id = 26;
exports.ids = [26,142];
exports.modules = {

/***/ 1838:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    baseURL: "https://api.pphui8.com/",
    token: "Z2l0aHViX3BhdF8xMUFOS0JZREEwa0poQ3NFOXBEWVNmX0xTZmtGTGtLTVc5NzBOdGw4eFRCVk5wM3hyQ2ltdHFYSkE1cTlaYU5DZXhBVlpERElMU2VQem9WZ0lI"
});


/***/ }),

/***/ 3638:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_BlogContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2394);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1838);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_BlogContainer__WEBPACK_IMPORTED_MODULE_2__]);
_components_BlogContainer__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function Index({ data , blogRoot , status  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const blogData = data;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (status === 500) {
            router.push("/error");
        }
    }, []);
    if (status === 500) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_BlogContainer__WEBPACK_IMPORTED_MODULE_2__["default"], {
        data: blogData,
        blogRoot: blogRoot
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);
const getStaticPaths = async ()=>{
    const res = await fetch(`${_config__WEBPACK_IMPORTED_MODULE_3__/* ["default"].baseURL */ .Z.baseURL}index`).then((res)=>res.json());
    const paths = res.map((node)=>({
            params: {
                title: Buffer.from(node.name).toString("base64")
            }
        }));
    return {
        paths,
        fallback: false
    };
};
const getStaticProps = async (context)=>{
    const { title  } = context.params;
    const empty = [
        {
            path: "",
            mode: "",
            type: "",
            sha: "",
            size: 0,
            url: ""
        }, 
    ];
    const decodedTitle = Buffer.from(title, "base64").toString("utf-8");
    let tmpurl = "";
    let res = await fetch(`${_config__WEBPACK_IMPORTED_MODULE_3__/* ["default"].baseURL */ .Z.baseURL}blog/${decodedTitle}`).then((res)=>res.json()).then((res)=>{
        return res.blog_root.replace('"', "").replace('"', "");
    }).then(async (blogRoot)=>{
        tmpurl = `https://api.github.com/repos/pphui8/${blogRoot}/git/trees/main`;
        return await fetch(tmpurl, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${Buffer.from(_config__WEBPACK_IMPORTED_MODULE_3__/* ["default"].token */ .Z.token, "base64").toString("utf-8")}`
            }
        }).then((res)=>res.json()).then((res)=>{
            if (!res.tree) {
                return null;
            } else {
                return res.tree;
            }
        }).catch((err)=>{
            return null;
        });
    }).catch((err)=>{
        return null;
    });
    return {
        props: {
            data: res === null ? empty : res,
            blogRoot: tmpurl,
            status: res === null ? 500 : 200
        },
        revalidate: 12000
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9847:
/***/ ((module) => {

module.exports = require("react-icons/ai");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 5611:
/***/ ((module) => {

module.exports = import("nanoid");;

/***/ }),

/***/ 6201:
/***/ ((module) => {

module.exports = import("react-hot-toast");;

/***/ }),

/***/ 3135:
/***/ ((module) => {

module.exports = import("react-markdown");;

/***/ }),

/***/ 6809:
/***/ ((module) => {

module.exports = import("remark-gfm");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [111,394], () => (__webpack_exec__(3638)));
module.exports = __webpack_exports__;

})();