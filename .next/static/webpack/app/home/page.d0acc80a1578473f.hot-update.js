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

/***/ "(app-client)/./app/home/(BlogContainer)/BlogContainer.tsx":
/*!****************************************************!*\
  !*** ./app/home/(BlogContainer)/BlogContainer.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _BlogCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BlogCard */ \"(app-client)/./app/home/(BlogContainer)/BlogCard.tsx\");\n/* harmony import */ var _BlogContainer_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BlogContainer.module.css */ \"(app-client)/./app/home/(BlogContainer)/BlogContainer.module.css\");\n/* harmony import */ var _BlogContainer_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_BlogContainer_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../config */ \"(app-client)/./config.js\");\n/* harmony import */ var _ThemeContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ThemeContext */ \"(app-client)/./app/ThemeContext.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nasync function getData() {\n    const res = await fetch(_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].baseURL + \"index\");\n    // Recommendation: handle errors\n    if (!res.ok) {\n        // This will activate the closest `error.js` Error Boundary\n        throw new Error(\"Failed to fetch data\");\n    }\n    return res.json();\n}\nfunction Page() {\n    _s();\n    const { isNight  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_ThemeContext__WEBPACK_IMPORTED_MODULE_4__.ThemeContext);\n    const [index, setIndex] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getData().then((res)=>res.sort((a, b)=>b.id - a.id)).then((res)=>setIndex(res)).then((res)=>console.log(res));\n    }, []);\n    const tomodati = {\n        light: \"https://i.postimg.cc/qRnsB4dx/home-sanningumi.jpg\",\n        night: \"https://i.postimg.cc/mhxM0nn6/home-sanningumi-night.jpg\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_BlogContainer_module_css__WEBPACK_IMPORTED_MODULE_5___default().blogs),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_BlogContainer_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n                children: index.map((elem, index)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BlogCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        data: elem,\n                        delay: index\n                    }, elem.id, false, {\n                        fileName: \"D:\\\\code\\\\huihuiblog2\\\\app\\\\home\\\\(BlogContainer)\\\\BlogContainer.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 18\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"D:\\\\code\\\\huihuiblog2\\\\app\\\\home\\\\(BlogContainer)\\\\BlogContainer.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: (_BlogContainer_module_css__WEBPACK_IMPORTED_MODULE_5___default().tomodati),\n                src: isNight ? tomodati.night : tomodati.light,\n                alt: \"ともだち！\"\n            }, void 0, false, {\n                fileName: \"D:\\\\code\\\\huihuiblog2\\\\app\\\\home\\\\(BlogContainer)\\\\BlogContainer.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\code\\\\huihuiblog2\\\\app\\\\home\\\\(BlogContainer)\\\\BlogContainer.tsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"c8pReTF+SsPb2VXLhTV6ZgUkt/0=\");\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2hvbWUvKEJsb2dDb250YWluZXIpL0Jsb2dDb250YWluZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUVxRDtBQUNuQjtBQUNjO0FBQ1g7QUFDYTtBQVdsRCxlQUFlTyxVQUFVO0lBQ3ZCLE1BQU1DLE1BQU0sTUFBTUMsTUFBTUosdURBQWMsR0FBRztJQUV6QyxnQ0FBZ0M7SUFDaEMsSUFBSSxDQUFDRyxJQUFJRyxFQUFFLEVBQUU7UUFDWCwyREFBMkQ7UUFDM0QsTUFBTSxJQUFJQyxNQUFNLHdCQUF3QjtJQUMxQyxDQUFDO0lBRUQsT0FBT0osSUFBSUssSUFBSTtBQUNqQjtBQUVlLFNBQVNDLE9BQU87O0lBQzdCLE1BQU0sRUFBRUMsUUFBTyxFQUFFLEdBQUdkLGlEQUFVQSxDQUFDSyx1REFBWUE7SUFDM0MsTUFBTSxDQUFDVSxPQUFPQyxTQUFTLEdBQUdqQixxREFBYyxDQUFRLEVBQUU7SUFDbERFLGdEQUFTQSxDQUFDLElBQU07UUFDZEssVUFDR1ksSUFBSSxDQUFDLENBQUNYLE1BQVFBLElBQUlZLElBQUksQ0FBQyxDQUFDQyxHQUFRQyxJQUFXQSxFQUFFQyxFQUFFLEdBQUdGLEVBQUVFLEVBQUUsR0FDdERKLElBQUksQ0FBQyxDQUFDWCxNQUFRUyxTQUFTVCxNQUN2QlcsSUFBSSxDQUFDLENBQUNYLE1BQVFnQixRQUFRQyxHQUFHLENBQUNqQjtJQUMvQixHQUFHLEVBQUU7SUFFTCxNQUFNa0IsV0FBVztRQUNmQyxPQUFPO1FBQ1BDLE9BQU87SUFDVDtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFXMUIsd0VBQVk7OzBCQUMxQiw4REFBQ3lCO2dCQUFJQyxXQUFXMUIsNEVBQWdCOzBCQUM3QlksTUFBTWlCLEdBQUcsQ0FBQyxDQUFDQyxNQUFNbEIsUUFBVTtvQkFDMUIscUJBQU8sOERBQUNiLGlEQUFRQTt3QkFBQ2dDLE1BQU1EO3dCQUFvQkUsT0FBT3BCO3VCQUFoQmtCLEtBQUtYLEVBQUU7Ozs7O2dCQUMzQzs7Ozs7OzBCQUVGLDhEQUFDYztnQkFDQ1AsV0FBVzFCLDJFQUFlO2dCQUMxQmtDLEtBQUt2QixVQUFVVyxTQUFTRSxLQUFLLEdBQUdGLFNBQVNDLEtBQUs7Z0JBQzlDWSxLQUFJOzs7Ozs7Ozs7Ozs7QUFJWixDQUFDO0dBN0J1QnpCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9ob21lLyhCbG9nQ29udGFpbmVyKS9CbG9nQ29udGFpbmVyLnRzeD8yMDQ4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQmxvZ0NhcmQgZnJvbSBcIi4vQmxvZ0NhcmRcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9CbG9nQ29udGFpbmVyLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi4vLi4vLi4vY29uZmlnXCI7XHJcbmltcG9ydCB7IFRoZW1lQ29udGV4dCB9IGZyb20gXCIuLi8uLi9UaGVtZUNvbnRleHRcIjtcclxuXHJcbnR5cGUgUHJvcHMgPSB7fTtcclxuXHJcbmV4cG9ydCB0eXBlIFJlcyA9IHtcclxuICBkZXNjcmlwdDogc3RyaW5nO1xyXG4gIGlkOiBudW1iZXI7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHRhZzogc3RyaW5nO1xyXG59O1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YSgpIHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChjb25maWcuYmFzZVVSTCArIFwiaW5kZXhcIik7XHJcblxyXG4gIC8vIFJlY29tbWVuZGF0aW9uOiBoYW5kbGUgZXJyb3JzXHJcbiAgaWYgKCFyZXMub2spIHtcclxuICAgIC8vIFRoaXMgd2lsbCBhY3RpdmF0ZSB0aGUgY2xvc2VzdCBgZXJyb3IuanNgIEVycm9yIEJvdW5kYXJ5XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggZGF0YVwiKTtcclxuICB9XHJcblxyXG4gIHJldHVybiByZXMuanNvbigpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlKCkge1xyXG4gIGNvbnN0IHsgaXNOaWdodCB9ID0gdXNlQ29udGV4dChUaGVtZUNvbnRleHQpO1xyXG4gIGNvbnN0IFtpbmRleCwgc2V0SW5kZXhdID0gUmVhY3QudXNlU3RhdGU8UmVzW10+KFtdKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0RGF0YSgpXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5zb3J0KChhOiBhbnksIGI6IGFueSkgPT4gYi5pZCAtIGEuaWQpKVxyXG4gICAgICAudGhlbigocmVzKSA9PiBzZXRJbmRleChyZXMpKVxyXG4gICAgICAudGhlbigocmVzKSA9PiBjb25zb2xlLmxvZyhyZXMpKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHRvbW9kYXRpID0ge1xyXG4gICAgbGlnaHQ6IFwiaHR0cHM6Ly9pLnBvc3RpbWcuY2MvcVJuc0I0ZHgvaG9tZS1zYW5uaW5ndW1pLmpwZ1wiLFxyXG4gICAgbmlnaHQ6IFwiaHR0cHM6Ly9pLnBvc3RpbWcuY2MvbWh4TTBubjYvaG9tZS1zYW5uaW5ndW1pLW5pZ2h0LmpwZ1wiLFxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJsb2dzfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgIHtpbmRleC5tYXAoKGVsZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gPEJsb2dDYXJkIGRhdGE9e2VsZW19IGtleT17ZWxlbS5pZH0gZGVsYXk9e2luZGV4fSAvPjtcclxuICAgICAgICB9KX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxpbWdcclxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy50b21vZGF0aX1cclxuICAgICAgICBzcmM9e2lzTmlnaHQgPyB0b21vZGF0aS5uaWdodCA6IHRvbW9kYXRpLmxpZ2h0fVxyXG4gICAgICAgIGFsdD1cIuOBqOOCguOBoOOBoe+8gVwiXHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJCbG9nQ2FyZCIsInN0eWxlcyIsImNvbmZpZyIsIlRoZW1lQ29udGV4dCIsImdldERhdGEiLCJyZXMiLCJmZXRjaCIsImJhc2VVUkwiLCJvayIsIkVycm9yIiwianNvbiIsIlBhZ2UiLCJpc05pZ2h0IiwiaW5kZXgiLCJzZXRJbmRleCIsInVzZVN0YXRlIiwidGhlbiIsInNvcnQiLCJhIiwiYiIsImlkIiwiY29uc29sZSIsImxvZyIsInRvbW9kYXRpIiwibGlnaHQiLCJuaWdodCIsImRpdiIsImNsYXNzTmFtZSIsImJsb2dzIiwiY29udGFpbmVyIiwibWFwIiwiZWxlbSIsImRhdGEiLCJkZWxheSIsImltZyIsInNyYyIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/home/(BlogContainer)/BlogContainer.tsx\n"));

/***/ })

});