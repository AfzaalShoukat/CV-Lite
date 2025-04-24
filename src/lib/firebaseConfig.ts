
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDESgKZk4lyxlOPzmNeJMT31_khN4DE7sQ",
    authDomain: "cv-lite-eadbd.firebaseapp.com",
    projectId: "cv-lite-eadbd",
    storageBucket: "cv-lite-eadbd.firebasestorage.app",
    messagingSenderId: "857990908379",
    appId: "1:857990908379:web:05330e8de7a99e8016fffe",
    measurementId: "G-7L6S9PLWNM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
export default app;

