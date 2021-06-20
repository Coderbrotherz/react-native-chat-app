import firebase from 'firebase' //firebase

const firebaseConfig = {
    apiKey: "AIzaSyAs2Hi_Zm3tODkQLnQwaIuFvAoOALhm4as",
    authDomain: "react-chat-app-9012f.firebaseapp.com",
    projectId: "react-chat-app-9012f",
    storageBucket: "react-chat-app-9012f.appspot.com",
    messagingSenderId: "934087806585",
    appId: "1:934087806585:web:1d0f0ebe8876e6678e0ea8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  export default db;