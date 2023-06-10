"use strict";
exports.id = 465;
exports.ids = [465];
exports.modules = {

/***/ 465:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ds": () => (/* binding */ updateQuestion),
/* harmony export */   "VB": () => (/* binding */ removeStudent),
/* harmony export */   "bq": () => (/* binding */ addCourse),
/* harmony export */   "dA": () => (/* binding */ removeQuestion),
/* harmony export */   "f6": () => (/* binding */ addResult),
/* harmony export */   "mw": () => (/* binding */ initializeFirebase),
/* harmony export */   "tS": () => (/* binding */ addStudent),
/* harmony export */   "xL": () => (/* binding */ addQuestion)
/* harmony export */ });
/* unused harmony exports loadData, clearCollection, clearDatabase */
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3745);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1492);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(401);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__]);
([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



// addDoc
// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCaJxdy1fmtSNcgo-ld38L80-u5OfwUNBo",
    authDomain: "quiz-6ceb9.firebaseapp.com",
    projectId: "quiz-6ceb9",
    storageBucket: "quiz-6ceb9.appspot.com",
    messagingSenderId: "561397415785",
    appId: "1:561397415785:web:5a7768c62d82e318dd07f8",
    measurementId: "G-625GXBVSMR"
};
// Initialize Firebase
function initializeFirebase() {
    try {
        return (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApp)();
    } catch (e) {
        // app has not been initialized
        const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);
        // initialize the database
        const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.initializeFirestore)(app, {
            useFetchStreams: false
        });
        // connect up the emulator to the database
        if (process.env.NEXT_PUBLIC_EMULATE || process.env.FIRESTORE_EMULATOR_HOST || "production" === "test") {
            //console.log("Connecting to emulator");
            const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)(app);
            (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.connectAuthEmulator)(auth, "http://localhost:9099");
            (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.connectFirestoreEmulator)(db, "localhost", 8080);
        }
        return app;
    }
}
/**
 * This function adds a single question to the database
 *
 * @param {Object} question 
 * @return article with id set to document name
 */ async function addQuestion(question) {
    const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)();
    const copy = JSON.parse(JSON.stringify(question));
    let ref = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(db, "courses");
    await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(ref, question.course), {
        id: question.uid,
        name: question.course,
        students: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.arrayUnion)()
    }, {
        merge: true
    });
    ref = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(db, "courses", question.course, "topics");
    await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(ref, question.topic), {
        name: question.topic
    });
    ref = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(db, "courses", question.course, "topics", question.topic, "questions");
    const docRef = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.addDoc)(ref, copy);
    return {
        question: question.question,
        answer: question.answer,
        response: question.response,
        topic: question.topic,
        id: docRef.id,
        course: question.course,
        uid: question.uid
    };
}
async function updateQuestion(question, updates) {
    const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)();
    let q = question.question;
    if (updates.question) {
        q = updates.question;
    }
    let a = question.answer;
    if (updates.answer) {
        a = updates.answer;
    }
    const questionsRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(db, "courses", question.course, "topics", question.topic, "questions");
    const Q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.query)(questionsRef, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.where)("question", "==", question.question));
    const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)(Q);
    const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(db, "courses", question.course, "topics", question.topic, "questions", querySnapshot.docs[0].id);
    await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.updateDoc)(docRef, {
        question: q,
        answer: a
    });
    return {
        answer: a,
        course: question.course,
        question: q,
        topic: question.topic,
        uid: question.id
    };
}
async function removeQuestion(question) {
    const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)();
    const questionsRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(db, "courses", question.course, "topics", question.topic, "questions");
    const Q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.query)(questionsRef, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.where)("question", "==", question.question));
    const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)(Q);
    const collectionSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)(questionsRef);
    const topic = question.topic;
    const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(db, "courses", question.course, "topics", question.topic, "questions", querySnapshot.docs[0].id);
    await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.deleteDoc)(docRef);
    if (collectionSnapshot.size <= 1) {
        await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.deleteDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(db, "courses", question.course, "topics", topic));
    }
}
async function addStudent(course, email) {
    const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)();
    const ref = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(db, "courses", course);
    await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.updateDoc)(ref, {
        students: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.arrayUnion)(email)
    });
}
async function removeStudent(course, email) {
    const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)();
    const ref = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(db, "courses", course);
    await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.updateDoc)(ref, {
        students: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.arrayRemove)(email)
    });
}
async function addCourse(uid, courseTitle) {
    const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)();
    await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(db, "courses", courseTitle), {
        name: courseTitle,
        id: uid,
        students: []
    });
}
// export async function addQuestion(question) {
//   const db = getFirestore();
//   //console.log("Here testing");
//   const copy = JSON.parse(JSON.stringify(question));
//   const sectionsRef = collection(db, "questions");
//   const section = question.topic;
//   await setDoc(doc(sectionsRef, section), { section });
//   const docref = await addDoc(collection(db, "questions", section, "questions"), copy);
//   //await setDoc(doc(sectionsRef, section, "questions", docref.id), copy);
//   return {
//     question: question.question,
//     answer: question.answer,
//     response: question.response,
//     topic: question.topic,
//     id: docref.id
//   };
// }
async function addResult(result, course, email) {
    const currDate = new Date();
    const resultData = {
        ...result,
        student: email,
        course: course,
        date: currDate.toLocaleString()
    };
    const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)();
    await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(db, "courses", course, "results", email), {
        "email": email
    }, {
        merge: true
    });
    const resultsRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(db, "courses", course, "results", email, "quizResults");
    await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.addDoc)(resultsRef, resultData);
    return {
        ...resultData
    };
}
/**
 * This is a helper function for bulk loading a collection.
 *
 * The main reason to use this is for seeding or testing.
 *
 * @param {*} data - an Array of objects to be stored as documents
 * @param {string} collectionName  - the name of the collection
 */ async function loadData(data) {
    console.log("here");
    await Promise.all(data.map(async (curr)=>{
        await addQuestion(curr);
    }));
}
/**
 * This function is designed to remove all documents from a
 * collection. (It will not take care of sub collections).
 *
 * Its primary use is for testing.
 *
 * @param {string} collectionName
 */ //  export async function resetCollection(collectionRef) {
//   const docSnapshot = await getDocs(collectionRef);
//   //console.log("Do we get here?")
//   //docSnapshot.forEach((d) => (console.log(doc(collectionRef, d.data().id))));
//   await Promise.all(
//     docSnapshot.docs.map((d) => deleteDoc(doc(collectionRef, d.id)))
//   );
// }
/**
 * This function is designed to remove all documents from a
 * collection. (It will not take care of sub collections).
 *
 * Its primary use is for testing.
 *
 * @param {Object} collectionRef
 */ async function clearCollection(collectionRef) {
    const docSnapshot = await getDocs(collectionRef);
    //console.log("Do we get here?")
    //docSnapshot.forEach((d) => (console.log(doc(collectionRef, d.data().id))));
    await Promise.all(docSnapshot.docs.map((d)=>deleteDoc(doc(collectionRef, d.id))));
}
/**
 * This function clears all data out of the database. This is only used for testing.
 */ async function clearDatabase() {
    const db = getFirestore();
    // remove the sections
    const sectionsSnapshot = await getDocs(collection(db, "questions"));
    await Promise.all(sectionsSnapshot.docs.map(async (section)=>{
        //console.log(section.data());
        await clearCollection(collection(db, "questions", section.data().section, "questions"));
        await deleteDoc(doc(db, "questions", section.data().section));
    }));
} /** 
export async function clearDatabase(){
  const db = getFirestore();

  const coursesSnap = await getDocs(collection(db, "courses"));

  await coursesSnap.forEach(async (course) => {
    const topicsSnap = await getDocs(collection(db, "courses", course.data().name, "topics"));
   await topicsSnap.forEach(async (top) => {
       await clearCollection(collection(db, "courses", course.data().name, "topics", top.data().name, "questions"));
       await top.ref.delete();
    });
  });
}
*/ 

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;