(() => {
var exports = {};
exports.id = 155;
exports.ids = [155];
exports.modules = {

/***/ 5868:
/***/ ((module) => {

// Exports
module.exports = {
	"aboutMe": "Article_aboutMe__YMQ2T",
	"container": "Article_container__f26Pc",
	"article": "Article_article__vD4c5",
	"blogInAnimation": "Article_blogInAnimation__DGYxO",
	"blogArticle": "Article_blogArticle__84m7V",
	"APILink": "Article_APILink__5u8ll",
	"kakoiitoomou": "Article_kakoiitoomou__22aMJ",
	"fadeInAnimation": "Article_fadeInAnimation__onIR6"
};


/***/ }),

/***/ 6642:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Article_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5868);
/* harmony import */ var _Article_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Article_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Filing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4434);
/* harmony import */ var _styles_markdown_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3531);
/* harmony import */ var _styles_markdown_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_markdown_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_markdown_lib_react_markdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7433);
/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6809);
/* harmony import */ var _ThemeContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1477);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1838);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Filing__WEBPACK_IMPORTED_MODULE_2__, remark_gfm__WEBPACK_IMPORTED_MODULE_3__, react_markdown_lib_react_markdown__WEBPACK_IMPORTED_MODULE_8__]);
([_components_Filing__WEBPACK_IMPORTED_MODULE_2__, remark_gfm__WEBPACK_IMPORTED_MODULE_3__, react_markdown_lib_react_markdown__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









let isShow = false;
const Index = (props)=>{
    const { 0: article , 1: setArticle  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("Loading...");
    const { 0: blog , 1: setBlog  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("Loading...");
    const { isNight  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_ThemeContext__WEBPACK_IMPORTED_MODULE_4__.ThemeContext);
    const kakoiitoomou = {
        light: "https://tvax4.sinaimg.cn/large/006z6YU4ly1h0lxd388pej30m60epag8.jpg",
        night: "https://tva4.sinaimg.cn/large/006z6YU4ly1h0lxkzqvbgj30m60ep0yt.jpg"
    };
    const showArticles = ()=>{
        if (isShow) return;
        setArticle(Buffer.from(props.aboutMe, "base64").toString("utf-8"));
        setBlog(Buffer.from(props.aboutBlog, "base64").toString("utf-8"));
        isShow = true;
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        showArticles();
    }, [
        isShow
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_Article_module_css__WEBPACK_IMPORTED_MODULE_6___default().aboutMe),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_Article_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: isNight ? (_Article_module_css__WEBPACK_IMPORTED_MODULE_6___default().article) + " " + (_styles_markdown_module_css__WEBPACK_IMPORTED_MODULE_7___default().markdown_body_dark) : (_Article_module_css__WEBPACK_IMPORTED_MODULE_6___default().article) + " " + (_styles_markdown_module_css__WEBPACK_IMPORTED_MODULE_7___default().markdown_body),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_markdown_lib_react_markdown__WEBPACK_IMPORTED_MODULE_8__/* .ReactMarkdown */ .D, {
                            remarkPlugins: [
                                remark_gfm__WEBPACK_IMPORTED_MODULE_3__["default"]
                            ],
                            children: article
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Filing__WEBPACK_IMPORTED_MODULE_2__["default"], {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: isNight ? (_Article_module_css__WEBPACK_IMPORTED_MODULE_6___default().blogArticle) + " " + (_styles_markdown_module_css__WEBPACK_IMPORTED_MODULE_7___default().markdown_body_dark) : (_Article_module_css__WEBPACK_IMPORTED_MODULE_6___default().blogArticle) + " " + (_styles_markdown_module_css__WEBPACK_IMPORTED_MODULE_7___default().markdown_body),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_markdown_lib_react_markdown__WEBPACK_IMPORTED_MODULE_8__/* .ReactMarkdown */ .D, {
                            remarkPlugins: [
                                remark_gfm__WEBPACK_IMPORTED_MODULE_3__["default"]
                            ],
                            children: blog
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                className: (_Article_module_css__WEBPACK_IMPORTED_MODULE_6___default().kakoiitoomou),
                src: isNight ? kakoiitoomou.night : kakoiitoomou.light,
                alt: "かっこういいと思うこと！"
            })
        ]
    });
};
const getStaticProps = async ()=>{
    const getAboutMe = async ()=>{
        const aboutMe = await fetch(`https://api.github.com/repos/pphui8/pphui8/git/blobs/49c667a9827ac71f588d93f3db5698f60b0d1491`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${Buffer.from(_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].token */ .Z.token, "base64").toString("utf-8")}`
            }
        }).then((response)=>response.json()).then((res)=>{
            return res.content;
        }).catch((err)=>{
            return "Loading...";
        });
        return aboutMe;
    };
    const getAboutBlog = async ()=>{
        const aboutBlog = await fetch(`https://api.github.com/repos/pphui8/huihuiblog2/git/blobs/fa17d8088966513ccb4ecf8d448fc8054b483842`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${Buffer.from(_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].token */ .Z.token, "base64").toString("utf-8")}`
            }
        }).then((response)=>response.json()).then((res)=>{
            return res.content;
        }).catch((err)=>{
            return "Loading...";
        });
        return aboutBlog;
    };
    return {
        props: {
            aboutMe: await getAboutMe(),
            aboutBlog: await getAboutBlog()
        },
        revalidate: 12000
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 580:
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 1469:
/***/ ((module) => {

"use strict";
module.exports = require("react-is");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4566:
/***/ ((module) => {

"use strict";
module.exports = require("style-to-object");

/***/ }),

/***/ 4955:
/***/ ((module) => {

"use strict";
module.exports = import("comma-separated-tokens");;

/***/ }),

/***/ 9492:
/***/ ((module) => {

"use strict";
module.exports = import("hast-util-whitespace");;

/***/ }),

/***/ 6861:
/***/ ((module) => {

"use strict";
module.exports = import("property-information");;

/***/ }),

/***/ 6201:
/***/ ((module) => {

"use strict";
module.exports = import("react-hot-toast");;

/***/ }),

/***/ 6809:
/***/ ((module) => {

"use strict";
module.exports = import("remark-gfm");;

/***/ }),

/***/ 6688:
/***/ ((module) => {

"use strict";
module.exports = import("remark-parse");;

/***/ }),

/***/ 2509:
/***/ ((module) => {

"use strict";
module.exports = import("remark-rehype");;

/***/ }),

/***/ 1152:
/***/ ((module) => {

"use strict";
module.exports = import("space-separated-tokens");;

/***/ }),

/***/ 4390:
/***/ ((module) => {

"use strict";
module.exports = import("unified");;

/***/ }),

/***/ 6016:
/***/ ((module) => {

"use strict";
module.exports = import("unist-util-visit");;

/***/ }),

/***/ 6107:
/***/ ((module) => {

"use strict";
module.exports = import("vfile");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [433,111,434], () => (__webpack_exec__(6642)));
module.exports = __webpack_exports__;

})();