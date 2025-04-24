import firebase from "@firebase/app"
import "@firebase/auth"
import "@firebase/firestore"

const clientCredentials = {
    apiKey: "AIzaSyDESgKZk4lyxlOPzmNeJMT31_khN4DE7sQ",
  authDomain: "cv-lite-eadbd.firebaseapp.com",
  projectId: "cv-lite-eadbd",
  storageBucket: "cv-lite-eadbd.firebasestorage.app",
  messagingSenderId: "857990908379",
  appId: "1:857990908379:web:05330e8de7a99e8016fffe",
  measurementId: "G-7L6S9PLWNM"
}

if (!firebase.getApps.length) {
    firebase.initializeApp(clientCredentials)
}

export default firebase