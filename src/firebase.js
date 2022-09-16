import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA1bPywlsk_Uph3cFaOfbWBA1GCtjTla2k",
  authDomain: "netflix-clone-e98ee.firebaseapp.com",
  projectId: "netflix-clone-e98ee",
  storageBucket: "netflix-clone-e98ee.appspot.com",
  messagingSenderId: "856510714699",
  appId: "1:856510714699:web:d829bf23136f0d97620ece",
  measurementId: "G-4YDP7FC6D5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
