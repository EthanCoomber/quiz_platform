"use strict";
exports.id = 621;
exports.ids = [621];
exports.modules = {

/***/ 4621:
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
/**
 * This hook sets up a listener that listens for changes in the sections collection in the database. The sections are then stored in a local state variable and returned by calls to this function.
 *
 * @returns array of sections
 */ 


async function chooseQuestions(quests, tops, callback) {
    if (quests.length < 10) {
        callback(quests);
    } else {
        const finalArr = [];
        const qPerTopics = Math.floor(10 / tops.length);
        const topicsObj = {};
        for(let t = 0; t < tops.length; t++){
            const topic = tops[t];
            topicsObj[topic] = {
                full: false,
                count: 0
            };
        }
        let sorted = [];
        for(let q = 0; q < quests.length; q++){
            const quest = quests[q];
            sorted.push({
                ...quest,
                sort: Math.random()
            });
        }
        sorted = sorted.sort((q1, q2)=>{
            return q1.sort - q2.sort;
        });
        for(let s = 0; s < sorted.length; s++){
            const q1 = sorted[s];
            const currTopic = q1.topic;
            if (topicsObj[currTopic].full === false) {
                finalArr.push({
                    ...q1
                });
                topicsObj[currTopic].count += 1;
                if (topicsObj[currTopic].count === qPerTopics) {
                    topicsObj[currTopic].full = true;
                }
            }
        }
        await callback(finalArr);
    }
}
async function getQuestions(currCourse, topicsList, callback, quizBool) {
    const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getFirestore)();
    const questionsFetched = [];
    for(let t = 0; t < topicsList.length; t++){
        const topic = topicsList[t];
        const questions = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collection)(db, "courses", currCourse, "topics", topic, "questions");
        const collectionSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDocs)(questions);
        collectionSnapshot.forEach((doc)=>{
            questionsFetched.push(doc.data());
        });
    }
    if (quizBool) {
        await chooseQuestions(questionsFetched, topicsList, callback, quizBool);
    } else {
        callback(questionsFetched);
    }
}
function useQuestions(currCourse, topicsList, quizBool) {
    const { 0: questions , 1: setQuestions  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        getQuestions(currCourse, topicsList, setQuestions, quizBool);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        currCourse,
        topicsList
    ]);
    return questions;
}
useQuestions.propTypes = {
    currCourse: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
    topicsList: prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_2___default().object))
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useQuestions);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;