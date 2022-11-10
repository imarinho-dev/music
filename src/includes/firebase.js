import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCcf7FnUbhRWEExv1lsWyXyKs0-4XRrHaM",
  authDomain: "music-ce265.firebaseapp.com",
  projectId: "music-ce265",
  storageBucket: "music-ce265.appspot.com",
  appId: "1:77265720415:web:7ef37bb16c5a4ff48137ea",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

db.enablePersistence().catch((error) => {
  console.log(`Firebase persistence error  ${error.code}`);
});

const usersCollection = db.collection("users");
const songsCollection = db.collection("songs");
const commentsCollection = db.collection("comments");

export {
  auth,
  db,
  usersCollection,
  songsCollection,
  commentsCollection,
  storage,
};
