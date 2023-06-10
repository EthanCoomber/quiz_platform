exports.id = 134;
exports.ids = [134];
exports.modules = {

/***/ 5820:
/***/ ((module) => {

// Exports
module.exports = {
	"multiselect": "topics_multiselect__GzoBO",
	"multiselect1": "topics_multiselect1__R7CiU"
};


/***/ }),

/***/ 6469:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SelectCourse)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1929);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_topics_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5820);
/* harmony import */ var _styles_topics_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_topics_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_awesome_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8319);
/* harmony import */ var react_awesome_button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_awesome_button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useCourses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5016);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useCourses__WEBPACK_IMPORTED_MODULE_3__]);
_hooks_useCourses__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/*
  selectCourse.js
  This component will display a multi-select drop down menu for choosing a course
*/ 






function SelectCourse({ prof , id , setCourse , setCourseChosen  }) {
    const { 0: currCourse , 1: setCurrCourse  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)();
    const coursesList = (0,_hooks_useCourses__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(prof, id);
    const coursesOptions = [];
    coursesList.forEach((c)=>{
        const newObj = {};
        newObj["value"] = c;
        newObj["label"] = c;
        coursesOptions.push(newObj);
    });
    function handleSelect(data) {
        setCurrCourse(data);
    }
    const submitCourse = ()=>{
        setCourse(currCourse.value);
        setCourseChosen(true);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_topics_module_css__WEBPACK_IMPORTED_MODULE_6___default().multiselect),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_select__WEBPACK_IMPORTED_MODULE_1___default()), {
                options: coursesOptions,
                placeholder: "Select a course",
                value: currCourse,
                onChange: handleSelect,
                isSearchable: true,
                isMulti: false,
                styles: {
                    menu: (provided)=>({
                            ...provided,
                            zIndex: 9999
                        })
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_awesome_button__WEBPACK_IMPORTED_MODULE_2__.AwesomeButton, {
                type: "secondary",
                disabled: currCourse === undefined,
                onReleased: ()=>{
                    submitCourse();
                },
                children: "Submit"
            })
        ]
    });
}
SelectCourse.propTypes = {
    prof: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),
    id: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
    setCourse: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),
    setCourseChosen: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func)
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8578:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1492);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_firestore__WEBPACK_IMPORTED_MODULE_0__]);
firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/**
 * This hook sets up a listener that listens for changes in the topics collection in the database. The sections are then stored in a local state variable and returned by calls to this function.
 *
 * @returns array of topics
 */ 

function useTopics(currCourse) {
    const { 0: topics , 1: setTopics  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const topicsFetched = [];
        const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getFirestore)();
        const snap = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.onSnapshot)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collection)(db, "courses", currCourse, "topics"), (topicsList)=>{
            topicsList.docs.forEach((doc)=>{
                topicsFetched.push(doc.data().name);
            });
            setTopics(topicsFetched);
        });
        return snap;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return topics;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useTopics);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;