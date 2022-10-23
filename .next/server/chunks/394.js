exports.id = 394;
exports.ids = [394];
exports.modules = {

/***/ 5542:
/***/ ((module) => {

// Exports
module.exports = {
	"article": "article_article__LXDDL",
	"fadeInAnimation": "article_fadeInAnimation__r__e8",
	"container": "article_container__nKvh4",
	"index": "article_index__9dn8X",
	"svg": "article_svg__c_A_O",
	"blogInAnimation": "article_blogInAnimation__Edh00",
	"APILink": "article_APILink__SeHT5",
	"kakoiitoomou": "article_kakoiitoomou__JPMtf",
	"index_night": "article_index_night__TDSbV"
};


/***/ }),

/***/ 2394:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Index)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6201);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _article_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5542);
/* harmony import */ var _article_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_article_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5611);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3135);
/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6809);
/* harmony import */ var _styles_markdown_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3531);
/* harmony import */ var _styles_markdown_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_markdown_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ThemeContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1477);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_2__, nanoid__WEBPACK_IMPORTED_MODULE_4__, react_markdown__WEBPACK_IMPORTED_MODULE_5__, remark_gfm__WEBPACK_IMPORTED_MODULE_6__]);
([react_hot_toast__WEBPACK_IMPORTED_MODULE_2__, nanoid__WEBPACK_IMPORTED_MODULE_4__, react_markdown__WEBPACK_IMPORTED_MODULE_5__, remark_gfm__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










let cur_index = [];
let cur_file = [];
let indexHasDeal = false;
let rootStack = [];
function Index({ data , blogRoot  }) {
    const { 0: article , 1: setArticle  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const dealIndex = (data)=>{
        if (indexHasDeal) return;
        if (cur_index.length === 0) {
            cur_index.push({
                path: "..",
                mode: "",
                type: "",
                sha: "",
                size: 0,
                url: ""
            });
        }
        data.map((item)=>{
            // 是目录
            if (item.type === "tree") {
                cur_index.push(item);
            } else {
                cur_file.push(item);
            }
        });
        // 自动展示一个页面(优先README.md)
        if (cur_file.length != 0) {
            let has_rm = false;
            for (let cur of cur_file){
                if (cur.path === "README.md") {
                    showFile(cur.url, cur.path);
                    has_rm = true;
                    break;
                }
            }
            if (!has_rm) showFile(cur_file[0].url, cur_file[0].path);
        }
        indexHasDeal = true;
        // refresh the page
        setArticle(article);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        dealIndex(data);
        return ()=>{
            indexHasDeal = false;
            cur_index = [];
            cur_file = [];
        };
    }, [
        indexHasDeal
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        rootStack = [];
        rootStack.push(blogRoot);
    }, []);
    const showFile = (url, filename)=>{
        fetch(url, {
            method: "GET"
        }).then((response)=>response.json()).then((article)=>{
            let tmp = Buffer.from(article.content, article.encoding).toString();
            // 如果不是 Markdown 则使用代码块包裹
            if (filename.search(".md") === -1) tmp = "```" + tmp + "```";
            setArticle(tmp);
        }).catch((err)=>react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.error(`Request Failed`));
    };
    const toFile = (item)=>{
        if (item.path.endsWith(".rar")) {
            setArticle("zip file is not supported");
            return;
        }
        showFile(item.url, item.path);
    };
    const toIndex = (item)=>{
        cur_index = [];
        cur_file = [];
        indexHasDeal = false;
        if (item.path === "..") {
            if (rootStack.length === 1) {
                react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.error("This is the root directory");
                return;
            } else {
                rootStack.pop();
                const preRoot = rootStack[rootStack.length - 1];
                if (preRoot === undefined) {
                    react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.error("Emmm... Something wrong");
                    return;
                }
                fetch(preRoot, {
                    method: "GET"
                }).then((response)=>response.json()).then((data)=>{
                    dealIndex(data.tree);
                }).catch((err)=>react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.error(`Request Failed`));
            }
        } else {
            fetch(item.url, {
                method: "GET"
            }).then((response)=>response.json()).then((data)=>{
                dealIndex(data.tree);
            }).catch((err)=>react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.error(`Request Failed`));
            rootStack.push(item.url);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_article_module_css__WEBPACK_IMPORTED_MODULE_8___default().article),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_article_module_css__WEBPACK_IMPORTED_MODULE_8___default().container),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PojIndex, {
                    cur_file: cur_file,
                    cur_index: cur_index
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Article, {
                    article: article
                })
            ]
        })
    });
    function PojIndex(data) {
        const cur_index = data.cur_index;
        const cur_file = data.cur_file;
        const { isNight  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_ThemeContext__WEBPACK_IMPORTED_MODULE_7__.ThemeContext);
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
            className: isNight ? (_article_module_css__WEBPACK_IMPORTED_MODULE_8___default().index_night) : (_article_module_css__WEBPACK_IMPORTED_MODULE_8___default().index),
            id: "blogTreeContainer",
            children: [
                cur_index.map((value)=>{
                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                        onClick: ()=>toIndex(value),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiOutlineFolder, {
                                className: (_article_module_css__WEBPACK_IMPORTED_MODULE_8___default().svg)
                            }),
                            value.path
                        ]
                    }, (0,nanoid__WEBPACK_IMPORTED_MODULE_4__.nanoid)());
                }),
                cur_file.map((value)=>{
                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                        onClick: ()=>toFile(value),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiFillFile, {
                                className: (_article_module_css__WEBPACK_IMPORTED_MODULE_8___default().svg)
                            }),
                            value.path
                        ]
                    }, (0,nanoid__WEBPACK_IMPORTED_MODULE_4__.nanoid)());
                })
            ]
        });
    }
    function Article({ article  }) {
        const { isNight  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_ThemeContext__WEBPACK_IMPORTED_MODULE_7__.ThemeContext);
        const { 0: articleContent , 1: setArticleContent  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
        (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
            setArticleContent(article);
        }, []);
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: isNight ? (_article_module_css__WEBPACK_IMPORTED_MODULE_8___default().article) + " " + (_styles_markdown_module_css__WEBPACK_IMPORTED_MODULE_9___default().markdown_body_dark) : (_article_module_css__WEBPACK_IMPORTED_MODULE_8___default().article) + " " + (_styles_markdown_module_css__WEBPACK_IMPORTED_MODULE_9___default().markdown_body),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_markdown__WEBPACK_IMPORTED_MODULE_5__["default"], {
                remarkPlugins: [
                    remark_gfm__WEBPACK_IMPORTED_MODULE_6__["default"]
                ],
                children: articleContent
            })
        });
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;