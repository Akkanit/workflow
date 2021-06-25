import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDpIf9NGUddRqVzt67MA_UBgYEfpCQkSZ8",
    authDomain: "workflow-bc2ad.firebaseapp.com",
    projectId: "workflow-bc2ad",
    storageBucket: "workflow-bc2ad.appspot.com",
    messagingSenderId: "778506606270",
    appId: "1:778506606270:web:5161e48ee3a12bd6b7b0ef",
    measurementId: "G-H6S5ZVF3WQ"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
