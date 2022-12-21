"use strict";
exports.id = 16;
exports.ids = [16];
exports.modules = {

/***/ 5016:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1492);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_firestore__WEBPACK_IMPORTED_MODULE_0__]);
firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function useCourses(prof, id) {
    const { 0: sections , 1: setSections  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const coursesFetched = [];
        const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getFirestore)();
        (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.onSnapshot)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collection)(db, "courses"), (coursesList)=>{
            coursesList.docs.forEach((doc)=>{
                if (prof) {
                    if (doc.data().id === id || doc.data().id === "1") {
                        coursesFetched.push(doc.data().name);
                    }
                } else {
                    if (doc.data().students.some((s)=>s === id) || doc.data.id === "1") {
                        console.log("student found!!!");
                        coursesFetched.push(doc.data().name);
                    }
                }
            });
            setSections(coursesFetched);
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return sections;
}
useCourses.propTypes = {
    prof: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
    uid: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useCourses);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;