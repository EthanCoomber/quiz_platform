exports.id = 597;
exports.ids = [597];
exports.modules = {

/***/ 2311:
/***/ ((module) => {

// Exports
module.exports = {
	"content": "LoginStatus_content__leIhH"
};


/***/ }),

/***/ 3597:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ LoginStatus)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_UserContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5013);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(401);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5566);
/* harmony import */ var _iconify_icons_ant_design_login_outlined__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4331);
/* harmony import */ var _iconify_icons_ant_design_login_outlined__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ant_design_login_outlined__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_LoginStatus_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2311);
/* harmony import */ var _styles_LoginStatus_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_LoginStatus_module_css__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_3__, _iconify_react__WEBPACK_IMPORTED_MODULE_4__]);
([firebase_auth__WEBPACK_IMPORTED_MODULE_3__, _iconify_react__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function LoginStatus() {
    const user = (0,_contexts_UserContext__WEBPACK_IMPORTED_MODULE_2__/* .useUser */ .a)();
    function logout() {
        const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.getAuth)();
        // no import necessary for signOut()?
        auth.signOut();
    }
    if (user && user.email) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_styles_LoginStatus_module_css__WEBPACK_IMPORTED_MODULE_6___default().content),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_4__.Icon, {
                        icon: (_iconify_icons_ant_design_login_outlined__WEBPACK_IMPORTED_MODULE_5___default()),
                        title: "logIcon",
                        onClick: ()=>logout(),
                        width: "25",
                        height: "20",
                        cursor: "pointer"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: user.email
                    })
                ]
            })
        });
    } else {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_styles_LoginStatus_module_css__WEBPACK_IMPORTED_MODULE_6___default().content),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: "/login",
                children: "Log in"
            })
        });
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5013:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "a": () => (/* binding */ useUser)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
const useUser = ()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(UserContext);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserContext);


/***/ })

};
;