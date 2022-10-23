exports.id = 45;
exports.ids = [45];
exports.modules = {

/***/ 3200:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "Header_header__qrott",
	"topInAnimation": "Header_topInAnimation__Ed3lq",
	"lighter": "Header_lighter__qtzXw",
	"fadeInAnimation": "Header_fadeInAnimation__xKTgQ",
	"himo": "Header_himo__HU_8Q",
	"switch": "Header_switch__Joori",
	"switchDown": "Header_switchDown__VQ0z_",
	"header_night": "Header_header_night__e3Yu4"
};


/***/ }),

/***/ 45:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Index)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3200);
/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Header_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ThemeContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1477);





function Index({}) {
    const { isNight , toggleTheme  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_ThemeContext__WEBPACK_IMPORTED_MODULE_3__.ThemeContext);
    const [switchLoc, setSwitchLoc] = react__WEBPACK_IMPORTED_MODULE_2___default().useState("up");
    const lightSwitch = ()=>{
        // 设置拉开关的小动画
        setSwitchLoc("down");
        toggleTheme();
        window.localStorage.setItem("isNight", isNight ? "false" : "true");
        setTimeout(()=>{
            setSwitchLoc("up");
        }, 300);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        let origin_light = window.localStorage.getItem("isNight");
        // 如果是第一次启动
        if (origin_light == null) {
            window.localStorage.setItem("isNight", "false");
            origin_light = "false";
        }
        if (isNight.toString() !== origin_light) {
            toggleTheme();
        }
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
        className: isNight ? (_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().header_night) : (_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().header),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: "/home",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    children: "huihuiblog"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: "/home",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "home"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: "/aboutme",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "about"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: "https://pphui8.com",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "pphui8"
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().lighter),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().himo)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: switchLoc === "up" ? (_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default()["switch"]) : (_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().switchDown),
                        onClick: lightSwitch
                    })
                ]
            })
        ]
    });
}


/***/ })

};
;