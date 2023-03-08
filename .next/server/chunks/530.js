exports.id = 530;
exports.ids = [530];
exports.modules = {

/***/ 2435:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "Footer_footer__pKMfQ",
	"line": "Footer_line__pwJKg",
	"fadeInAnimation": "Footer_fadeInAnimation__DH_Lv",
	"at": "Footer_at__IP0dM",
	"touunn": "Footer_touunn__rysc4",
	"ashiato": "Footer_ashiato__ZujjX",
	"footer_night": "Footer_footer_night__holFt"
};


/***/ }),

/***/ 3620:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "Header_header__GwEYm",
	"topInAnimation": "Header_topInAnimation__XtE0_",
	"lighter": "Header_lighter__Nh4LK",
	"fadeInAnimation": "Header_fadeInAnimation__ShFMh",
	"himo": "Header_himo__rNWoA",
	"switch": "Header_switch__EZ4nP",
	"switchDown": "Header_switchDown__nMqFa",
	"header_night": "Header_header_night__ttqkZ"
};


/***/ }),

/***/ 1840:
/***/ ((module) => {

// Exports
module.exports = {
	"body_night": "mainPage_body_night__DA8gp"
};


/***/ }),

/***/ 8802:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 9754))

/***/ }),

/***/ 5665:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 9446, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3258, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6862, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2030, 23))

/***/ }),

/***/ 8514:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__ */ const { createProxy  } = __webpack_require__(4353);
module.exports = createProxy("D:\\code\\huihuiblog2\\app\\layout.tsx");


/***/ }),

/***/ 4534:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ ThemeContext),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_mainPage_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1840);
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


/***/ }),

/***/ 9754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
var react_default = /*#__PURE__*/__webpack_require__.n(react_);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(307);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./app/components/Header.module.css
var Header_module = __webpack_require__(3620);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
// EXTERNAL MODULE: ./app/ThemeContext.tsx
var ThemeContext = __webpack_require__(4534);
;// CONCATENATED MODULE: ./app/components/Header.tsx





function Index({}) {
    const { isNight , toggleTheme  } = (0,react_.useContext)(ThemeContext/* ThemeContext */.N);
    const [switchLoc, setSwitchLoc] = react_default().useState("up");
    const lightSwitch = ()=>{
        // 设置拉开关的小动画
        setSwitchLoc("down");
        toggleTheme();
        window.localStorage.setItem("isNight", isNight ? "false" : "true");
        setTimeout(()=>{
            setSwitchLoc("up");
        }, 300);
    };
    (0,react_.useEffect)(()=>{
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
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: isNight ? (Header_module_default()).header_night : (Header_module_default()).header,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/home",
                                style: {
                                    textDecoration: "none"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    children: "huihuiblog"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/home",
                                style: {
                                    textDecoration: "none"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "home"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/aboutme",
                                style: {
                                    textDecoration: "none"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "about"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "https://pphui8.com",
                                style: {
                                    textDecoration: "none"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "pphui8"
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Header_module_default()).lighter,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Header_module_default()).himo
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: switchLoc === "up" ? (Header_module_default())["switch"] : (Header_module_default()).switchDown,
                        onClick: lightSwitch
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./app/components/Footer.module.css
var Footer_module = __webpack_require__(2435);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
;// CONCATENATED MODULE: ./app/components/Footer.tsx




function Footer_Index({}) {
    const { isNight  } = (0,react_.useContext)(ThemeContext/* ThemeContext */.N);
    const ashiato = {
        normal: "https://i.postimg.cc/wjr8GqXc/ashiato.jpg",
        night: "https://i.postimg.cc/zGbP3nhK/ashiato-Night.jpg"
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: isNight ? (Footer_module_default()).footer_night : (Footer_module_default()).footer,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Footer_module_default()).line
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: (Footer_module_default()).at,
                children: "@pphui8"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: (Footer_module_default()).touunn,
                children: "-東雲研究所-"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: isNight ? ashiato.night : ashiato.normal,
                alt: "sakamotosanno",
                className: (Footer_module_default()).ashiato
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/react-hot-toast/dist/index.mjs + 1 modules
var dist = __webpack_require__(3518);
;// CONCATENATED MODULE: ./app/layout.tsx







function RootLayout({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("html", {
        lang: "en",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("head", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "huihuiblog"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "keywords",
                        content: "huihuiblog,pphui8,pphui,Jinhui,湫月汐,个人网站,网站主页,博客主页"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "pphui8的blog"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("body", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ThemeContext/* default */.Z, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(dist/* Toaster */.x7, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(Index, {}),
                        children,
                        /*#__PURE__*/ jsx_runtime_.jsx(Footer_Index, {})
                    ]
                })
            })
        ]
    });
}


/***/ }),

/***/ 8693:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    baseURL: "https://api.pphui8.com/",
    token: ""
});


/***/ }),

/***/ 307:
/***/ (() => {



/***/ })

};
;