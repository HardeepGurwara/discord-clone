import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAb4GGrpHT5TJaD4V5bOerGE8exd4yFSmk",
  authDomain: "discord-clone-a17c8.firebaseapp.com",
  projectId: "discord-clone-a17c8",
  storageBucket: "discord-clone-a17c8.appspot.com",
  messagingSenderId: "547905824016",
  appId: "1:547905824016:web:5bb92166f09f2267947195",
  measurementId: "G-GCBLLKLD46",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
