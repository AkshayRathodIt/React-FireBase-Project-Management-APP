import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzJ21YOmSZzC9dyn7gwrVgaFpCjIB9OGk",
  authDomain: "thedojosite-55cd2.firebaseapp.com",
  projectId: "thedojosite-55cd2",
  storageBucket: "thedojosite-55cd2.appspot.com",
  messagingSenderId: "980183182460",
  appId: "1:980183182460:web:f5756fe49deaada1abadf9",
  measurementId: "G-98DLCV1ER4"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp, projectStorage }