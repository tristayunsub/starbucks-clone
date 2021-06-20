// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCJudVccyxC7-aRcq64V0gMFDAXP-Fc5aA",
    authDomain: "starbucks-clone-yt-29bc9.firebaseapp.com",
    projectId: "starbucks-clone-yt-29bc9",
    storageBucket: "starbucks-clone-yt-29bc9.appspot.com",
    messagingSenderId: "262718703829",
    appId: "1:262718703829:web:196bb14d9d8b38b194fa5c",
    measurementId: "G-EGF83B7W7Y"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const auth = firebaseApp.auth()

  export {auth};

  