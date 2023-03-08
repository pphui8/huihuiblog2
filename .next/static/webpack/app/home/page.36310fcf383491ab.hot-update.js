"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/home/page",{

/***/ "(app-client)/./app/home/BlogContainer/BlogContainer.tsx":
/*!**************************************************!*\
  !*** ./app/home/BlogContainer/BlogContainer.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _BlogCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BlogCard */ \"(app-client)/./app/home/BlogContainer/BlogCard.tsx\");\n/* harmony import */ var _load__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./load */ \"(app-client)/./app/home/BlogContainer/load.tsx\");\n/* harmony import */ var _BlogContainer_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./BlogContainer.module.css */ \"(app-client)/./app/home/BlogContainer/BlogContainer.module.css\");\n/* harmony import */ var _BlogContainer_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_BlogContainer_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../config */ \"(app-client)/./config.js\");\n/* harmony import */ var _ThemeContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ThemeContext */ \"(app-client)/./app/ThemeContext.tsx\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hot-toast */ \"(app-client)/./node_modules/react-hot-toast/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nlet is_show_error = false;\nasync function getData() {\n    const res = await fetch(_config__WEBPACK_IMPORTED_MODULE_4__[\"default\"].baseURL + \"index\");\n    if (!res.ok) {\n        throw new Error(\"Failed to fetch data\");\n    }\n    return res.json();\n}\nfunction Page() {\n    _s();\n    const { isNight  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_ThemeContext__WEBPACK_IMPORTED_MODULE_5__.ThemeContext);\n    const [index, setIndex] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getData().then((res)=>res.sort((a, b)=>b.id - a.id)).then((res)=>setIndex(res)).catch(()=>{\n            if (!is_show_error) {\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_6__[\"default\"].error(\"Failed to fetch data\");\n                is_show_error = true;\n            }\n        });\n    }, []);\n    const tomodati = {\n        light: \"https://i.postimg.cc/qRnsB4dx/home-sanningumi.jpg\",\n        night: \"https://i.postimg.cc/mhxM0nn6/home-sanningumi-night.jpg\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_BlogContainer_module_css__WEBPACK_IMPORTED_MODULE_7___default().blogs),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_BlogContainer_module_css__WEBPACK_IMPORTED_MODULE_7___default().container),\n                children: [\n                    // error handling\n                    is_show_error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_BlogContainer_module_css__WEBPACK_IMPORTED_MODULE_7___default().error),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"error\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\code\\\\huihuiblog2\\\\app\\\\home\\\\BlogContainer\\\\BlogContainer.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\code\\\\huihuiblog2\\\\app\\\\home\\\\BlogContainer\\\\BlogContainer.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 13\n                    }, this),\n                    // if index is empty, show loading\n                    index.length === 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_load__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"D:\\\\code\\\\huihuiblog2\\\\app\\\\home\\\\BlogContainer\\\\BlogContainer.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 13\n                    }, this),\n                    index.map((elem, index)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BlogCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            data: elem,\n                            delay: index\n                        }, elem.id, false, {\n                            fileName: \"D:\\\\code\\\\huihuiblog2\\\\app\\\\home\\\\BlogContainer\\\\BlogContainer.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 18\n                        }, this);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\code\\\\huihuiblog2\\\\app\\\\home\\\\BlogContainer\\\\BlogContainer.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: (_BlogContainer_module_css__WEBPACK_IMPORTED_MODULE_7___default().tomodati),\n                src: isNight ? tomodati.night : tomodati.light,\n                alt: \"ともだち！\"\n            }, void 0, false, {\n                fileName: \"D:\\\\code\\\\huihuiblog2\\\\app\\\\home\\\\BlogContainer\\\\BlogContainer.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\code\\\\huihuiblog2\\\\app\\\\home\\\\BlogContainer\\\\BlogContainer.tsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"c8pReTF+SsPb2VXLhTV6ZgUkt/0=\");\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2hvbWUvQmxvZ0NvbnRhaW5lci9CbG9nQ29udGFpbmVyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUUrRDtBQUM3QjtBQUNUO0FBQ3VCO0FBQ1g7QUFDYTtBQUNkO0FBV3BDLElBQUlTLGdCQUFnQixLQUFLO0FBQ3pCLGVBQWVDLFVBQVU7SUFDdkIsTUFBTUMsTUFBTSxNQUFNQyxNQUFNTix1REFBYyxHQUFHO0lBRXpDLElBQUksQ0FBQ0ssSUFBSUcsRUFBRSxFQUFFO1FBQ1gsTUFBTSxJQUFJQyxNQUFNLHdCQUF3QjtJQUMxQyxDQUFDO0lBRUQsT0FBT0osSUFBSUssSUFBSTtBQUNqQjtBQUVlLFNBQVNDLE9BQU87O0lBQzdCLE1BQU0sRUFBRUMsUUFBTyxFQUFFLEdBQUdqQixpREFBVUEsQ0FBQ00sdURBQVlBO0lBQzNDLE1BQU0sQ0FBQ1ksT0FBT0MsU0FBUyxHQUFHcEIscURBQWMsQ0FBUSxFQUFFO0lBQ2xERSxnREFBU0EsQ0FBQyxJQUFNO1FBQ2RRLFVBQ0dZLElBQUksQ0FBQyxDQUFDWCxNQUFRQSxJQUFJWSxJQUFJLENBQUMsQ0FBQ0MsR0FBUUMsSUFBV0EsRUFBRUMsRUFBRSxHQUFHRixFQUFFRSxFQUFFLEdBQ3RESixJQUFJLENBQUMsQ0FBQ1gsTUFBUVMsU0FBU1QsTUFDdkJnQixLQUFLLENBQUMsSUFBTTtZQUNYLElBQUksQ0FBQ2xCLGVBQWU7Z0JBQ2xCRCw2REFBVyxDQUFDO2dCQUNaQyxnQkFBZ0IsSUFBSTtZQUN0QixDQUFDO1FBQ0g7SUFDSixHQUFHLEVBQUU7SUFFTCxNQUFNb0IsV0FBVztRQUNmQyxPQUFPO1FBQ1BDLE9BQU87SUFDVDtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFXNUIsd0VBQVk7OzBCQUMxQiw4REFBQzJCO2dCQUFJQyxXQUFXNUIsNEVBQWdCOztvQkFFNUIsaUJBQWlCO29CQUNqQkksK0JBQ0UsOERBQUN1Qjt3QkFBSUMsV0FBVzVCLHdFQUFZO2tDQUMxQiw0RUFBQytCO3NDQUFFOzs7Ozs7Ozs7OztvQkFLUCxrQ0FBa0M7b0JBQ2xDakIsTUFBTWtCLE1BQU0sS0FBSyxtQkFDZiw4REFBQ2pDLDZDQUFJQTs7Ozs7b0JBR1JlLE1BQU1tQixHQUFHLENBQUMsQ0FBQ0MsTUFBTXBCLFFBQVU7d0JBQzFCLHFCQUFPLDhEQUFDaEIsaURBQVFBOzRCQUFDcUMsTUFBTUQ7NEJBQW9CRSxPQUFPdEI7MkJBQWhCb0IsS0FBS2IsRUFBRTs7Ozs7b0JBQzNDOzs7Ozs7OzBCQUVGLDhEQUFDZ0I7Z0JBQ0NULFdBQVc1QiwyRUFBZTtnQkFDMUJzQyxLQUFLekIsVUFBVVcsU0FBU0UsS0FBSyxHQUFHRixTQUFTQyxLQUFLO2dCQUM5Q2MsS0FBSTs7Ozs7Ozs7Ozs7O0FBSVosQ0FBQztHQWhEdUIzQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvaG9tZS9CbG9nQ29udGFpbmVyL0Jsb2dDb250YWluZXIudHN4PzM1NTEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgU3VzcGVuc2UsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQmxvZ0NhcmQgZnJvbSBcIi4vQmxvZ0NhcmRcIjtcclxuaW1wb3J0IExvYWQgZnJvbSBcIi4vbG9hZFwiXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vQmxvZ0NvbnRhaW5lci5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBjb25maWcgZnJvbSBcIi4uLy4uLy4uL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBUaGVtZUNvbnRleHQgfSBmcm9tIFwiLi4vLi4vVGhlbWVDb250ZXh0XCI7XHJcbmltcG9ydCB0b2FzdCBmcm9tIFwicmVhY3QtaG90LXRvYXN0XCI7XHJcblxyXG50eXBlIFByb3BzID0ge307XHJcblxyXG5leHBvcnQgdHlwZSBSZXMgPSB7XHJcbiAgZGVzY3JpcHQ6IHN0cmluZztcclxuICBpZDogbnVtYmVyO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICB0YWc6IHN0cmluZztcclxufTtcclxuXHJcbmxldCBpc19zaG93X2Vycm9yID0gZmFsc2U7XHJcbmFzeW5jIGZ1bmN0aW9uIGdldERhdGEoKSB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goY29uZmlnLmJhc2VVUkwgKyBcImluZGV4XCIpO1xyXG5cclxuICBpZiAoIXJlcy5vaykge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGZldGNoIGRhdGFcIik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcmVzLmpzb24oKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZSgpIHtcclxuICBjb25zdCB7IGlzTmlnaHQgfSA9IHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcclxuICBjb25zdCBbaW5kZXgsIHNldEluZGV4XSA9IFJlYWN0LnVzZVN0YXRlPFJlc1tdPihbXSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldERhdGEoKVxyXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuc29ydCgoYTogYW55LCBiOiBhbnkpID0+IGIuaWQgLSBhLmlkKSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4gc2V0SW5kZXgocmVzKSlcclxuICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICBpZiAoIWlzX3Nob3dfZXJyb3IpIHtcclxuICAgICAgICAgIHRvYXN0LmVycm9yKFwiRmFpbGVkIHRvIGZldGNoIGRhdGFcIik7XHJcbiAgICAgICAgICBpc19zaG93X2Vycm9yID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgdG9tb2RhdGkgPSB7XHJcbiAgICBsaWdodDogXCJodHRwczovL2kucG9zdGltZy5jYy9xUm5zQjRkeC9ob21lLXNhbm5pbmd1bWkuanBnXCIsXHJcbiAgICBuaWdodDogXCJodHRwczovL2kucG9zdGltZy5jYy9taHhNMG5uNi9ob21lLXNhbm5pbmd1bWktbmlnaHQuanBnXCIsXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmxvZ3N9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgLy8gZXJyb3IgaGFuZGxpbmdcclxuICAgICAgICAgIGlzX3Nob3dfZXJyb3IgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVycm9yfT5cclxuICAgICAgICAgICAgICA8cD5lcnJvcjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIC8vIGlmIGluZGV4IGlzIGVtcHR5LCBzaG93IGxvYWRpbmdcclxuICAgICAgICAgIGluZGV4Lmxlbmd0aCA9PT0gMCAmJiAoXHJcbiAgICAgICAgICAgIDxMb2FkIC8+XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHtpbmRleC5tYXAoKGVsZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gPEJsb2dDYXJkIGRhdGE9e2VsZW19IGtleT17ZWxlbS5pZH0gZGVsYXk9e2luZGV4fSAvPjtcclxuICAgICAgICB9KX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxpbWdcclxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy50b21vZGF0aX1cclxuICAgICAgICBzcmM9e2lzTmlnaHQgPyB0b21vZGF0aS5uaWdodCA6IHRvbW9kYXRpLmxpZ2h0fVxyXG4gICAgICAgIGFsdD1cIuOBqOOCguOBoOOBoe+8gVwiXHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJCbG9nQ2FyZCIsIkxvYWQiLCJzdHlsZXMiLCJjb25maWciLCJUaGVtZUNvbnRleHQiLCJ0b2FzdCIsImlzX3Nob3dfZXJyb3IiLCJnZXREYXRhIiwicmVzIiwiZmV0Y2giLCJiYXNlVVJMIiwib2siLCJFcnJvciIsImpzb24iLCJQYWdlIiwiaXNOaWdodCIsImluZGV4Iiwic2V0SW5kZXgiLCJ1c2VTdGF0ZSIsInRoZW4iLCJzb3J0IiwiYSIsImIiLCJpZCIsImNhdGNoIiwiZXJyb3IiLCJ0b21vZGF0aSIsImxpZ2h0IiwibmlnaHQiLCJkaXYiLCJjbGFzc05hbWUiLCJibG9ncyIsImNvbnRhaW5lciIsInAiLCJsZW5ndGgiLCJtYXAiLCJlbGVtIiwiZGF0YSIsImRlbGF5IiwiaW1nIiwic3JjIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/home/BlogContainer/BlogContainer.tsx\n"));

/***/ })

});