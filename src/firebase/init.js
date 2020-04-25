import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyBkFmsatk3Zdg_ez-e3QdEimDI-68Gg0wY",
    authDomain: "my-real-time-chat-356d2.firebaseapp.com",
    databaseURL: "https://my-real-time-chat-356d2.firebaseio.com",
    projectId: "my-real-time-chat-356d2",
    storageBucket: "my-real-time-chat-356d2.appspot.com",
    messagingSenderId: "834419413108",
    appId: "1:834419413108:web:cbe4bf85c0dca158ac0121",
    measurementId: "G-WYT5PYZNCC"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore()