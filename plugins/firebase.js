import firebase from "firebase";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyAOHeXSkD50k7R7ry6bhtSEJggn7PopQvs",
    authDomain: "coachtech-material-nuxt.firebaseapp.com",
    projectId: "coachtech-material-nuxt",
    storageBucket: "coachtech-material-nuxt.appspot.com",
    messagingSenderId: "676113554852",
    appId: "1:676113554852:web:75552d1b9c7a3c06227531",
    measurementId: "G-20Q67V4DBR",
  });
}

export default firebase;
