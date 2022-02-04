import firebase from "firebase";
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyB-j6IcAVJ9SclO4ysF3HCOvGJLUDf9g-U",
    authDomain: "studentrecord-36d0b.firebaseapp.com",
    projectId: "studentrecord-36d0b",
    storageBucket: "studentrecord-36d0b.appspot.com",
    messagingSenderId: "832551374981",
    appId: "1:832551374981:web:5ea94dcee99677900b19ec",
    measurementId: "G-CKLGXT77SL"
  };

  firebase.initializeApp(firebaseConfig);
  const database=firebase.database();

  export default database;