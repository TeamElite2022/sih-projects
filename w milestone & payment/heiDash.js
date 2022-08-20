
src= "https://www.gstatic.com/firebasejs/7.7.0/firebase-app.js"
src= "https://www.gstatic.com/firebasejs/7.7.0/firebase-firestore.js"
src= "https://www.gstatic.com/firebasejs/7.7.0/firebase-auth.js"
src= "https://www.gstatic.com/firebasejs/7.7.0/firebase-database.js"
src= "https://www.gstatic.com/firebasejs/7.7.0/firebase-storage.js"

const firebaseConfig = {
    // ...
    apiKey: "AIzaSyCYybtuNQHaMpcKNdTyjK_e0Y0k5xChMQI",

authDomain: "mgpa-6cc10.firebaseapp.com",

databaseURL: "https://mgpa-6cc10-default-rtdb.firebaseio.com",

projectId: "mgpa-6cc10",

storageBucket: "mgpa-6cc10.appspot.com",

messagingSenderId: "292918906000",

appId: "1:292918906000:web:69bf0126437f9ea2abdc15"
};

firebase.initializeApp(firebaseConfig)
const fire=firebase.firestore()

function albox(){
    fire.collection("HEIProfile").doc(uuid).set({
        Status:"accept"
    })
    .then(() => {
        console.log("status updated!");
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });
}