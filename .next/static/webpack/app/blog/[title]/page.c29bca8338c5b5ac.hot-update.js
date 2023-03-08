"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/blog/[title]/page",{

/***/ "(app-client)/./app/blog/[title]/page.tsx":
/*!***********************************!*\
  !*** ./app/blog/[title]/page.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-toast */ \"(app-client)/./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/ai */ \"(app-client)/./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var _article_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./article.module.css */ \"(app-client)/./app/blog/[title]/article.module.css\");\n/* harmony import */ var _article_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_article_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! nanoid */ \"(app-client)/./node_modules/nanoid/index.browser.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-markdown */ \"(app-client)/./node_modules/react-markdown/lib/react-markdown.js\");\n/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! remark-gfm */ \"(app-client)/./node_modules/remark-gfm/index.js\");\n/* harmony import */ var _styles_markdown_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../styles/markdown.module.css */ \"(app-client)/./styles/markdown.module.css\");\n/* harmony import */ var _styles_markdown_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_markdown_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _ThemeContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ThemeContext */ \"(app-client)/./app/ThemeContext.tsx\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../config */ \"(app-client)/./config.js\");\n/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ \"(app-client)/./node_modules/next/dist/compiled/buffer/index.js\")[\"Buffer\"];\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n// index of the current directory\nlet cur_index = [];\n// file of the current directory\nlet cur_file = [];\nlet get_data_once = false;\n// rootStack is used to record the path of the current directory\nlet rootStack = [];\nlet err_show_once = false;\nconst Page = (param)=>{\n    let { params  } = param;\n    _s();\n    var _s1 = $RefreshSig$(), _s2 = $RefreshSig$();\n    const urlParam = decodeURIComponent(params.title);\n    const title = Buffer.from(urlParam, \"base64\").toString(\"utf-8\");\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const { isNight  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_ThemeContext__WEBPACK_IMPORTED_MODULE_3__.ThemeContext);\n    const [article, setArticle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (get_data_once) return;\n        else {\n            getData(title).then((res)=>{\n                if (res.tree.length === 0) {\n                    react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.error(\"Failed to get blog data\");\n                    return;\n                }\n                setData(res);\n                dealIndex(res.tree);\n            }).catch((err)=>{\n                if (!err_show_once) {\n                    react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.error(\"Failed to get blog data\");\n                    err_show_once = true;\n                }\n            });\n            get_data_once = true;\n        }\n        return ()=>{\n            get_data_once = false;\n            cur_index = [];\n            cur_file = [];\n        };\n    }, []);\n    const dealIndex = (data)=>{\n        console.log(\"invoke dealIndex\");\n        if (cur_index.length === 0) {\n            cur_index.push({\n                path: \"..\",\n                mode: \"\",\n                type: \"\",\n                sha: \"\",\n                size: 0,\n                url: \"\"\n            });\n        }\n        data.map((item)=>{\n            // 是目录\n            if (item.type === \"tree\") {\n                cur_index.push(item);\n            } else {\n                cur_file.push(item);\n            }\n        });\n        // 自动展示一个页面(优先README.md)\n        if (cur_file.length != 0) {\n            let has_rm = false;\n            for (let cur of cur_file){\n                if (cur.path === \"README.md\") {\n                    showFile(cur.url, cur.path);\n                    has_rm = true;\n                    break;\n                }\n            }\n            if (!has_rm) showFile(cur_file[0].url, cur_file[0].path);\n        }\n        setArticle(article);\n    };\n    const showFile = (url, filename)=>{\n        fetch(url, {\n            method: \"GET\"\n        }).then((response)=>response.json()).then((article)=>{\n            let tmp = Buffer.from(article.content, article.encoding).toString();\n            // 如果不是 Markdown 则使用代码块包裹\n            if (filename.search(\".md\") === -1) tmp = \"```\" + tmp + \"```\";\n            setArticle(tmp);\n        }).catch((err)=>react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.error(\"Request Failed\"));\n    };\n    const toFile = (item)=>{\n        if (item.path.endsWith(\".rar\")) {\n            setArticle(\"zip file is not supported\");\n            return;\n        }\n        showFile(item.url, item.path);\n    };\n    const toIndex = (item)=>{\n        cur_index = [];\n        cur_file = [];\n        get_data_once = false;\n        if (item.path === \"..\") {\n            if (rootStack.length === 1) {\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.error(\"This is the root directory\");\n                return;\n            } else {\n                rootStack.pop();\n                const preRoot = rootStack[rootStack.length - 1];\n                if (preRoot === undefined) {\n                    // bug here\n                    react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.error(\"Emmm... Something wrong\");\n                    return;\n                }\n                fetch(preRoot, {\n                    method: \"GET\"\n                }).then((response)=>response.json()).then((data)=>{\n                    dealIndex(data.tree);\n                }).catch((err)=>react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.error(\"Request Failed\"));\n            }\n        } else {\n            fetch(item.url, {\n                method: \"GET\"\n            }).then((response)=>response.json()).then((data)=>{\n                dealIndex(data.tree);\n            }).catch((err)=>react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.error(\"Request Failed\"));\n            rootStack.push(item.url);\n        }\n    };\n    // console.log(cur_index);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_article_module_css__WEBPACK_IMPORTED_MODULE_5___default().article),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_article_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n            children: data === undefined ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_article_module_css__WEBPACK_IMPORTED_MODULE_5___default().loadingContainer),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: isNight ? (_article_module_css__WEBPACK_IMPORTED_MODULE_5___default().loadingTextNight) : (_article_module_css__WEBPACK_IMPORTED_MODULE_5___default().loadingText),\n                    children: \"少女祈祷中...\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\code\\\\huihuiblog2\\\\app\\\\blog\\\\[title]\\\\page.tsx\",\n                    lineNumber: 179,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\code\\\\huihuiblog2\\\\app\\\\blog\\\\[title]\\\\page.tsx\",\n                lineNumber: 178,\n                columnNumber: 11\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PojIndex, {\n                        cur_file: cur_file,\n                        cur_index: cur_index\n                    }, void 0, false, {\n                        fileName: \"D:\\\\code\\\\huihuiblog2\\\\app\\\\blog\\\\[title]\\\\page.tsx\",\n                        lineNumber: 189,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Article, {\n                        article: article\n                    }, void 0, false, {\n                        fileName: \"D:\\\\code\\\\huihuiblog2\\\\app\\\\blog\\\\[title]\\\\page.tsx\",\n                        lineNumber: 190,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true)\n        }, void 0, false, {\n            fileName: \"D:\\\\code\\\\huihuiblog2\\\\app\\\\blog\\\\[title]\\\\page.tsx\",\n            lineNumber: 176,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\code\\\\huihuiblog2\\\\app\\\\blog\\\\[title]\\\\page.tsx\",\n        lineNumber: 175,\n        columnNumber: 5\n    }, undefined);\n    function PojIndex(data) {\n        _s1();\n        const cur_index = data.cur_index;\n        const cur_file = data.cur_file;\n        const { isNight  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_ThemeContext__WEBPACK_IMPORTED_MODULE_3__.ThemeContext);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            className: isNight ? (_article_module_css__WEBPACK_IMPORTED_MODULE_5___default().index_night) : (_article_module_css__WEBPACK_IMPORTED_MODULE_5___default().index),\n            id: \"blogTreeContainer\",\n            children: [\n                cur_index.map((value)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        onClick: ()=>toIndex(value),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_6__.AiOutlineFolder, {\n                                className: (_article_module_css__WEBPACK_IMPORTED_MODULE_5___default().svg)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\code\\\\huihuiblog2\\\\app\\\\blog\\\\[title]\\\\page.tsx\",\n                                lineNumber: 214,\n                                columnNumber: 15\n                            }, this),\n                            value.path\n                        ]\n                    }, (0,nanoid__WEBPACK_IMPORTED_MODULE_7__.nanoid)(), true, {\n                        fileName: \"D:\\\\code\\\\huihuiblog2\\\\app\\\\blog\\\\[title]\\\\page.tsx\",\n                        lineNumber: 213,\n                        columnNumber: 13\n                    }, this);\n                }),\n                cur_file.map((value)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        onClick: ()=>toFile(value),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_6__.AiFillFile, {\n                                className: (_article_module_css__WEBPACK_IMPORTED_MODULE_5___default().svg)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\code\\\\huihuiblog2\\\\app\\\\blog\\\\[title]\\\\page.tsx\",\n                                lineNumber: 222,\n                                columnNumber: 15\n                            }, this),\n                            value.path\n                        ]\n                    }, (0,nanoid__WEBPACK_IMPORTED_MODULE_7__.nanoid)(), true, {\n                        fileName: \"D:\\\\code\\\\huihuiblog2\\\\app\\\\blog\\\\[title]\\\\page.tsx\",\n                        lineNumber: 221,\n                        columnNumber: 13\n                    }, this);\n                })\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\code\\\\huihuiblog2\\\\app\\\\blog\\\\[title]\\\\page.tsx\",\n            lineNumber: 207,\n            columnNumber: 7\n        }, this);\n    }\n    _s1(PojIndex, \"h/w1FICIv2OOnCBcL3HefiTcBkY=\");\n    function Article(param) {\n        let { article  } = param;\n        _s2();\n        const { isNight  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_ThemeContext__WEBPACK_IMPORTED_MODULE_3__.ThemeContext);\n        const [articleContent, setArticleContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n        (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n            setArticleContent(article);\n        }, []);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: isNight ? (_article_module_css__WEBPACK_IMPORTED_MODULE_5___default().article) + \" \" + (_styles_markdown_module_css__WEBPACK_IMPORTED_MODULE_8___default().markdown_body_dark) : (_article_module_css__WEBPACK_IMPORTED_MODULE_5___default().article) + \" \" + (_styles_markdown_module_css__WEBPACK_IMPORTED_MODULE_8___default().markdown_body),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_markdown__WEBPACK_IMPORTED_MODULE_9__.ReactMarkdown, {\n                remarkPlugins: [\n                    remark_gfm__WEBPACK_IMPORTED_MODULE_10__[\"default\"]\n                ],\n                children: articleContent\n            }, void 0, false, {\n                fileName: \"D:\\\\code\\\\huihuiblog2\\\\app\\\\blog\\\\[title]\\\\page.tsx\",\n                lineNumber: 245,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\code\\\\huihuiblog2\\\\app\\\\blog\\\\[title]\\\\page.tsx\",\n            lineNumber: 238,\n            columnNumber: 7\n        }, this);\n    }\n    _s2(Article, \"l3aUBkLRM5vgY8fNhpy7QzTP0BY=\");\n};\n_s(Page, \"DKyjOhO3dszS1DFPdprDHHS6s2k=\");\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nasync function getData(title) {\n    // rewirte this shit\n    const blogRoot = await fetch(\"\".concat(_config__WEBPACK_IMPORTED_MODULE_4__[\"default\"].baseURL, \"blog/\").concat(title)).then((res)=>res.json()).catch((err)=>{\n        return err;\n    });\n    let Files;\n    if (blogRoot.status !== 200) {\n        // This will activate the closest `error.js` Error Boundary\n        throw new Error(\"Failed to fetch data\");\n    } else {\n        const tmpRoot = blogRoot.blog_root.replace('\"', \"\").replace('\"', \"\");\n        const tmpurl = \"https://api.github.com/repos/pphui8/\".concat(tmpRoot, \"/git/trees/main\");\n        Files = await fetch(tmpurl).then((res)=>res.json()).catch((err)=>{\n            return err;\n        });\n    }\n    return Files;\n}\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2Jsb2cvW3RpdGxlXS9wYWdlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRW1FO0FBQzNCO0FBQ3FCO0FBQ2pCO0FBQ1o7QUFDVztBQUNSO0FBQ3NCO0FBQ1A7QUFDYjtBQXNCckMsaUNBQWlDO0FBQ2pDLElBQUljLFlBQTRCLEVBQUU7QUFDbEMsZ0NBQWdDO0FBQ2hDLElBQUlDLFdBQTJCLEVBQUU7QUFDakMsSUFBSUMsZ0JBQWdCLEtBQUs7QUFDekIsZ0VBQWdFO0FBQ2hFLElBQUlDLFlBQXNCLEVBQUU7QUFDNUIsSUFBSUMsZ0JBQWdCLEtBQUs7QUFDekIsTUFBTUMsT0FBc0IsU0FBZ0I7UUFBZixFQUFFQyxPQUFNLEVBQUU7OztJQUNyQyxNQUFNQyxXQUFXQyxtQkFBbUJGLE9BQU9HLEtBQUs7SUFDaEQsTUFBTUEsUUFBUUMsTUFBTUEsQ0FBQ0MsSUFBSSxDQUFDSixVQUFVLFVBQVVLLFFBQVEsQ0FBQztJQUN2RCxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR3pCLCtDQUFRQTtJQUVoQyxNQUFNLEVBQUUwQixRQUFPLEVBQUUsR0FBRzVCLGlEQUFVQSxDQUFDVyx1REFBWUE7SUFDM0MsTUFBTSxDQUFDa0IsU0FBU0MsV0FBVyxHQUFHNUIsK0NBQVFBLENBQUM7SUFFdkNELGdEQUFTQSxDQUFDLElBQU07UUFDZCxJQUFHYyxlQUFlO2FBQ2I7WUFDSGdCLFFBQVFULE9BQ0xVLElBQUksQ0FBQyxDQUFDQyxNQUFzQjtnQkFDM0IsSUFBR0EsSUFBSUMsSUFBSSxDQUFDQyxNQUFNLEtBQUssR0FBRztvQkFDeEJoQyx3REFBVyxDQUFDO29CQUNaO2dCQUNGLENBQUM7Z0JBQ0R3QixRQUFRTTtnQkFDUkksVUFBVUosSUFBSUMsSUFBSTtZQUNwQixHQUNDSSxLQUFLLENBQUMsQ0FBQ0MsTUFBUTtnQkFDZCxJQUFJLENBQUN0QixlQUFlO29CQUNsQmQsd0RBQVcsQ0FBQztvQkFDWmMsZ0JBQWdCLElB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QVFBLElBQUl5QixJQUFJLElBQ3RCcEIsS0FBSyxDQUFDLENBQUNDLE1BQVE7UUFDZCxPQUFPQTtJQUNUO0lBRUYsSUFBSXNEO0lBQ0osSUFBSUYsU0FBU0csTUFBTSxLQUFLLEtBQUs7UUFDM0IsMkRBQTJEO1FBQzNELE1BQU0sSUFBSUMsTUFBTSx3QkFBd0I7SUFDMUMsT0FBTztRQUNMLE1BQU1DLFVBQVVMLFNBQVNNLFNBQVMsQ0FBQ0MsT0FBTyxDQUFDLEtBQUssSUFBSUEsT0FBTyxDQUFDLEtBQUs7UUFDakUsTUFBTUMsU0FBUyx1Q0FBK0MsT0FBUkgsU0FBUTtRQUU5REgsUUFBUSxNQUFNdEMsTUFBTTRDLFFBQ2pCbkUsSUFBSSxDQUFDLENBQUNDLE1BQVFBLElBQUl5QixJQUFJLElBQ3RCcEIsS0FBSyxDQUFDLENBQUNDLE1BQVE7WUFDZCxPQUFPQTtRQUNUO0lBQ0osQ0FBQztJQUVELE9BQU9zRDtBQUNUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9ibG9nL1t0aXRsZV0vcGFnZS50c3g/Yjk5YSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCBSZWFjdCwgeyBGQywgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC1ob3QtdG9hc3RcIjtcclxuaW1wb3J0IHsgQWlGaWxsRmlsZSwgQWlPdXRsaW5lRm9sZGVyIH0gZnJvbSBcInJlYWN0LWljb25zL2FpXCI7XHJcbmltcG9ydCBteVN0eWxlcyBmcm9tIFwiLi9hcnRpY2xlLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgbmFub2lkIH0gZnJvbSBcIm5hbm9pZFwiO1xyXG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd25cIjtcclxuaW1wb3J0IHJlbWFya0dmbSBmcm9tIFwicmVtYXJrLWdmbVwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi9zdHlsZXMvbWFya2Rvd24ubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyBUaGVtZUNvbnRleHQgfSBmcm9tIFwiLi4vLi4vVGhlbWVDb250ZXh0XCI7XHJcbmltcG9ydCBjb25maWcgZnJvbSBcIi4uLy4uLy4uL2NvbmZpZ1wiO1xyXG5cclxuaW50ZXJmYWNlIHBhZ2VQcm9wcyB7XHJcbiAgcGFyYW1zOiB7IHRpdGxlOiBzdHJpbmcgfTtcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRmlsZXRyZWVOb2RlIHtcclxuICBwYXRoOiBzdHJpbmc7XHJcbiAgbW9kZTogc3RyaW5nO1xyXG4gIHR5cGU6IHN0cmluZztcclxuICBzaGE6IHN0cmluZztcclxuICBzaXplOiBudW1iZXI7XHJcbiAgdXJsOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRmlsZXRyZWVMaXN0IHtcclxuICBzaGE6IHN0cmluZztcclxuICB1cmw6IHN0cmluZztcclxuICB0cmVlOiBGaWxldHJlZU5vZGVbXTtcclxuICB0cnVuY2F0ZWQ6IGJvb2xlYW47XHJcbn1cclxuXHJcbi8vIGluZGV4IG9mIHRoZSBjdXJyZW50IGRpcmVjdG9yeVxyXG5sZXQgY3VyX2luZGV4OiBGaWxldHJlZU5vZGVbXSA9IFtdO1xyXG4vLyBmaWxlIG9mIHRoZSBjdXJyZW50IGRpcmVjdG9yeVxyXG5sZXQgY3VyX2ZpbGU6IEZpbGV0cmVlTm9kZVtdID0gW107XHJcbmxldCBnZXRfZGF0YV9vbmNlID0gZmFsc2U7XHJcbi8vIHJvb3RTdGFjayBpcyB1c2VkIHRvIHJlY29yZCB0aGUgcGF0aCBvZiB0aGUgY3VycmVudCBkaXJlY3RvcnlcclxubGV0IHJvb3RTdGFjazogc3RyaW5nW10gPSBbXTtcclxubGV0IGVycl9zaG93X29uY2UgPSBmYWxzZTtcclxuY29uc3QgUGFnZTogRkM8cGFnZVByb3BzPiA9ICh7IHBhcmFtcyB9KSA9PiB7XHJcbiAgY29uc3QgdXJsUGFyYW0gPSBkZWNvZGVVUklDb21wb25lbnQocGFyYW1zLnRpdGxlKTtcclxuICBjb25zdCB0aXRsZSA9IEJ1ZmZlci5mcm9tKHVybFBhcmFtLCBcImJhc2U2NFwiKS50b1N0cmluZyhcInV0Zi04XCIpO1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlPEZpbGV0cmVlTGlzdD4oKTtcclxuXHJcbiAgY29uc3QgeyBpc05pZ2h0IH0gPSB1c2VDb250ZXh0KFRoZW1lQ29udGV4dCk7XHJcbiAgY29uc3QgW2FydGljbGUsIHNldEFydGljbGVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmKGdldF9kYXRhX29uY2UpIHJldHVybjtcclxuICAgIGVsc2Uge1xyXG4gICAgICBnZXREYXRhKHRpdGxlKVxyXG4gICAgICAgIC50aGVuKChyZXM6IEZpbGV0cmVlTGlzdCkgPT4ge1xyXG4gICAgICAgICAgaWYocmVzLnRyZWUubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRvYXN0LmVycm9yKFwiRmFpbGVkIHRvIGdldCBibG9nIGRhdGFcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHNldERhdGEocmVzKTtcclxuICAgICAgICAgIGRlYWxJbmRleChyZXMudHJlZSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgaWYgKCFlcnJfc2hvd19vbmNlKSB7XHJcbiAgICAgICAgICAgIHRvYXN0LmVycm9yKFwiRmFpbGVkIHRvIGdldCBibG9nIGRhdGFcIik7XHJcbiAgICAgICAgICAgIGVycl9zaG93X29uY2UgPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICBnZXRfZGF0YV9vbmNlID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGdldF9kYXRhX29uY2UgPSBmYWxzZTtcclxuICAgICAgY3VyX2luZGV4ID0gW107XHJcbiAgICAgIGN1cl9maWxlID0gW107XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgZGVhbEluZGV4ID0gKGRhdGE6IEZpbGV0cmVlTm9kZVtdKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImludm9rZSBkZWFsSW5kZXhcIilcclxuICAgIGlmIChjdXJfaW5kZXgubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIGN1cl9pbmRleC5wdXNoKHtcclxuICAgICAgICBwYXRoOiBcIi4uXCIsXHJcbiAgICAgICAgbW9kZTogXCJcIixcclxuICAgICAgICB0eXBlOiBcIlwiLFxyXG4gICAgICAgIHNoYTogXCJcIixcclxuICAgICAgICBzaXplOiAwLFxyXG4gICAgICAgIHVybDogXCJcIixcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBkYXRhLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAvLyDmmK/nm67lvZVcclxuICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gXCJ0cmVlXCIpIHtcclxuICAgICAgICBjdXJfaW5kZXgucHVzaChpdGVtKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjdXJfZmlsZS5wdXNoKGl0ZW0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vIOiHquWKqOWxleekuuS4gOS4qumhtemdoijkvJjlhYhSRUFETUUubWQpXHJcbiAgICBpZiAoY3VyX2ZpbGUubGVuZ3RoICE9IDApIHtcclxuICAgICAgbGV0IGhhc19ybSA9IGZhbHNlO1xyXG4gICAgICBmb3IgKGxldCBjdXIgb2YgY3VyX2ZpbGUpIHtcclxuICAgICAgICBpZiAoY3VyLnBhdGggPT09IFwiUkVBRE1FLm1kXCIpIHtcclxuICAgICAgICAgIHNob3dGaWxlKGN1ci51cmwsIGN1ci5wYXRoKTtcclxuICAgICAgICAgIGhhc19ybSA9IHRydWU7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFoYXNfcm0pIHNob3dGaWxlKGN1cl9maWxlWzBdLnVybCwgY3VyX2ZpbGVbMF0ucGF0aCk7XHJcbiAgICB9XHJcbiAgICBzZXRBcnRpY2xlKGFydGljbGUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2hvd0ZpbGUgPSAodXJsOiBzdHJpbmcsIGZpbGVuYW1lOiBzdHJpbmcpID0+IHtcclxuICAgIGZldGNoKHVybCwge1xyXG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnRoZW4oKGFydGljbGUpID0+IHtcclxuICAgICAgICBsZXQgdG1wID0gQnVmZmVyLmZyb20oYXJ0aWNsZS5jb250ZW50LCBhcnRpY2xlLmVuY29kaW5nKS50b1N0cmluZygpO1xyXG4gICAgICAgIC8vIOWmguaenOS4jeaYryBNYXJrZG93biDliJnkvb/nlKjku6PnoIHlnZfljIXoo7lcclxuICAgICAgICBpZiAoZmlsZW5hbWUuc2VhcmNoKFwiLm1kXCIpID09PSAtMSkgdG1wID0gXCJgYGBcIiArIHRtcCArIFwiYGBgXCI7XHJcbiAgICAgICAgc2V0QXJ0aWNsZSh0bXApO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4gdG9hc3QuZXJyb3IoYFJlcXVlc3QgRmFpbGVkYCkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRvRmlsZSA9IChpdGVtOiBGaWxldHJlZU5vZGUpID0+IHtcclxuICAgIGlmIChpdGVtLnBhdGguZW5kc1dpdGgoXCIucmFyXCIpKSB7XHJcbiAgICAgIHNldEFydGljbGUoXCJ6aXAgZmlsZSBpcyBub3Qgc3VwcG9ydGVkXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBzaG93RmlsZShpdGVtLnVybCwgaXRlbS5wYXRoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCB0b0luZGV4ID0gKGl0ZW06IEZpbGV0cmVlTm9kZSkgPT4ge1xyXG4gICAgY3VyX2luZGV4ID0gW107XHJcbiAgICBjdXJfZmlsZSA9IFtdO1xyXG4gICAgZ2V0X2RhdGFfb25jZSA9IGZhbHNlO1xyXG4gICAgaWYgKGl0ZW0ucGF0aCA9PT0gXCIuLlwiKSB7XHJcbiAgICAgIGlmIChyb290U3RhY2subGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgdG9hc3QuZXJyb3IoXCJUaGlzIGlzIHRoZSByb290IGRpcmVjdG9yeVwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcm9vdFN0YWNrLnBvcCgpO1xyXG4gICAgICAgIGNvbnN0IHByZVJvb3QgPSByb290U3RhY2tbcm9vdFN0YWNrLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIGlmIChwcmVSb290ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIC8vIGJ1ZyBoZXJlXHJcbiAgICAgICAgICB0b2FzdC5lcnJvcihcIkVtbW0uLi4gU29tZXRoaW5nIHdyb25nXCIpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmZXRjaChwcmVSb290LCB7XHJcbiAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgZGVhbEluZGV4KGRhdGEudHJlZSk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHRvYXN0LmVycm9yKGBSZXF1ZXN0IEZhaWxlZGApKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZmV0Y2goaXRlbS51cmwsIHtcclxuICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgIGRlYWxJbmRleChkYXRhLnRyZWUpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHRvYXN0LmVycm9yKGBSZXF1ZXN0IEZhaWxlZGApKTtcclxuICAgICAgcm9vdFN0YWNrLnB1c2goaXRlbS51cmwpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vIGNvbnNvbGUubG9nKGN1cl9pbmRleCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17bXlTdHlsZXMuYXJ0aWNsZX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtteVN0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgIHtkYXRhID09PSB1bmRlZmluZWQgPyAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17bXlTdHlsZXMubG9hZGluZ0NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgIGlzTmlnaHQgPyBteVN0eWxlcy5sb2FkaW5nVGV4dE5pZ2h0IDogbXlTdHlsZXMubG9hZGluZ1RleHRcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICDlsJHlpbPnpYjnpbfkuK0uLi5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxQb2pJbmRleCBjdXJfZmlsZT17Y3VyX2ZpbGV9IGN1cl9pbmRleD17Y3VyX2luZGV4fSAvPlxyXG4gICAgICAgICAgICA8QXJ0aWNsZSBhcnRpY2xlPXthcnRpY2xlfSAvPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG5cclxuICB0eXBlIFBvalByb3BzID0ge1xyXG4gICAgY3VyX2luZGV4OiBGaWxldHJlZU5vZGVbXTtcclxuICAgIGN1cl9maWxlOiBGaWxldHJlZU5vZGVbXTtcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBQb2pJbmRleChkYXRhOiBQb2pQcm9wcykge1xyXG4gICAgY29uc3QgY3VyX2luZGV4ID0gZGF0YS5jdXJfaW5kZXg7XHJcbiAgICBjb25zdCBjdXJfZmlsZSA9IGRhdGEuY3VyX2ZpbGU7XHJcbiAgICBjb25zdCB7IGlzTmlnaHQgfSA9IHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDx1bFxyXG4gICAgICAgIGNsYXNzTmFtZT17aXNOaWdodCA/IG15U3R5bGVzLmluZGV4X25pZ2h0IDogbXlTdHlsZXMuaW5kZXh9XHJcbiAgICAgICAgaWQ9XCJibG9nVHJlZUNvbnRhaW5lclwiXHJcbiAgICAgID5cclxuICAgICAgICB7Y3VyX2luZGV4Lm1hcCgodmFsdWUpID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxsaSBrZXk9e25hbm9pZCgpfSBvbkNsaWNrPXsoKSA9PiB0b0luZGV4KHZhbHVlKX0+XHJcbiAgICAgICAgICAgICAgPEFpT3V0bGluZUZvbGRlciBjbGFzc05hbWU9e215U3R5bGVzLnN2Z30gLz5cclxuICAgICAgICAgICAgICB7dmFsdWUucGF0aH1cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgICAge2N1cl9maWxlLm1hcCgodmFsdWUpID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxsaSBrZXk9e25hbm9pZCgpfSBvbkNsaWNrPXsoKSA9PiB0b0ZpbGUodmFsdWUpfT5cclxuICAgICAgICAgICAgICA8QWlGaWxsRmlsZSBjbGFzc05hbWU9e215U3R5bGVzLnN2Z30gLz5cclxuICAgICAgICAgICAgICB7dmFsdWUucGF0aH1cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gQXJ0aWNsZSh7IGFydGljbGUgfTogeyBhcnRpY2xlOiBzdHJpbmcgfSkge1xyXG4gICAgY29uc3QgeyBpc05pZ2h0IH0gPSB1c2VDb250ZXh0KFRoZW1lQ29udGV4dCk7XHJcbiAgICBjb25zdCBbYXJ0aWNsZUNvbnRlbnQsIHNldEFydGljbGVDb250ZW50XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgc2V0QXJ0aWNsZUNvbnRlbnQoYXJ0aWNsZSk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgIGlzTmlnaHRcclxuICAgICAgICAgICAgPyBteVN0eWxlcy5hcnRpY2xlICsgXCIgXCIgKyBzdHlsZXMubWFya2Rvd25fYm9keV9kYXJrXHJcbiAgICAgICAgICAgIDogbXlTdHlsZXMuYXJ0aWNsZSArIFwiIFwiICsgc3R5bGVzLm1hcmtkb3duX2JvZHlcclxuICAgICAgICB9XHJcbiAgICAgID5cclxuICAgICAgICA8UmVhY3RNYXJrZG93biByZW1hcmtQbHVnaW5zPXtbcmVtYXJrR2ZtXX0+XHJcbiAgICAgICAgICB7YXJ0aWNsZUNvbnRlbnR9XHJcbiAgICAgICAgPC9SZWFjdE1hcmtkb3duPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YSh0aXRsZTogc3RyaW5nKSB7XHJcbiAgLy8gcmV3aXJ0ZSB0aGlzIHNoaXRcclxuICBjb25zdCBibG9nUm9vdCA9IGF3YWl0IGZldGNoKGAke2NvbmZpZy5iYXNlVVJMfWJsb2cvJHt0aXRsZX1gKVxyXG4gICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIHJldHVybiBlcnI7XHJcbiAgICB9KTtcclxuICBcclxuICBsZXQgRmlsZXM7XHJcbiAgaWYgKGJsb2dSb290LnN0YXR1cyAhPT0gMjAwKSB7XHJcbiAgICAvLyBUaGlzIHdpbGwgYWN0aXZhdGUgdGhlIGNsb3Nlc3QgYGVycm9yLmpzYCBFcnJvciBCb3VuZGFyeVxyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGZldGNoIGRhdGFcIik7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IHRtcFJvb3QgPSBibG9nUm9vdC5ibG9nX3Jvb3QucmVwbGFjZSgnXCInLCBcIlwiKS5yZXBsYWNlKCdcIicsIFwiXCIpO1xyXG4gICAgY29uc3QgdG1wdXJsID0gYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvcHBodWk4LyR7dG1wUm9vdH0vZ2l0L3RyZWVzL21haW5gO1xyXG5cclxuICAgIEZpbGVzID0gYXdhaXQgZmV0Y2godG1wdXJsKVxyXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIHJldHVybiBlcnI7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIEZpbGVzO1xyXG59O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ0b2FzdCIsIkFpRmlsbEZpbGUiLCJBaU91dGxpbmVGb2xkZXIiLCJteVN0eWxlcyIsIm5hbm9pZCIsIlJlYWN0TWFya2Rvd24iLCJyZW1hcmtHZm0iLCJzdHlsZXMiLCJUaGVtZUNvbnRleHQiLCJjb25maWciLCJjdXJfaW5kZXgiLCJjdXJfZmlsZSIsImdldF9kYXRhX29uY2UiLCJyb290U3RhY2siLCJlcnJfc2hvd19vbmNlIiwiUGFnZSIsInBhcmFtcyIsInVybFBhcmFtIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwidGl0bGUiLCJCdWZmZXIiLCJmcm9tIiwidG9TdHJpbmciLCJkYXRhIiwic2V0RGF0YSIsImlzTmlnaHQiLCJhcnRpY2xlIiwic2V0QXJ0aWNsZSIsImdldERhdGEiLCJ0aGVuIiwicmVzIiwidHJlZSIsImxlbmd0aCIsImVycm9yIiwiZGVhbEluZGV4IiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwicHVzaCIsInBhdGgiLCJtb2RlIiwidHlwZSIsInNoYSIsInNpemUiLCJ1cmwiLCJtYXAiLCJpdGVtIiwiaGFzX3JtIiwiY3VyIiwic2hvd0ZpbGUiLCJmaWxlbmFtZSIsImZldGNoIiwibWV0aG9kIiwicmVzcG9uc2UiLCJqc29uIiwidG1wIiwiY29udGVudCIsImVuY29kaW5nIiwic2VhcmNoIiwidG9GaWxlIiwiZW5kc1dpdGgiLCJ0b0luZGV4IiwicG9wIiwicHJlUm9vdCIsInVuZGVmaW5lZCIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImxvYWRpbmdDb250YWluZXIiLCJwIiwibG9hZGluZ1RleHROaWdodCIsImxvYWRpbmdUZXh0IiwiUG9qSW5kZXgiLCJBcnRpY2xlIiwidWwiLCJpbmRleF9uaWdodCIsImluZGV4IiwiaWQiLCJ2YWx1ZSIsImxpIiwib25DbGljayIsInN2ZyIsImFydGljbGVDb250ZW50Iiwic2V0QXJ0aWNsZUNvbnRlbnQiLCJtYXJrZG93bl9ib2R5X2RhcmsiLCJtYXJrZG93bl9ib2R5IiwicmVtYXJrUGx1Z2lucyIsImJsb2dSb290IiwiYmFzZVVSTCIsIkZpbGVzIiwic3RhdHVzIiwiRXJyb3IiLCJ0bXBSb290IiwiYmxvZ19yb290IiwicmVwbGFjZSIsInRtcHVybCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/blog/[title]/page.tsx\n"));

/***/ })

});