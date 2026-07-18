import { initializeApp } from "firebase/app";

import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged
} from "firebase/auth";

import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "the-feminist-project.firebaseapp.com",
  projectId: "the-feminist-project",
  storageBucket: "the-feminist-project.firebasestorage.app",
  messagingSenderId: "562891016881",
  appId: "1:562891016881:web:4eb209ee6c1aa3c949b090",
  measurementId: "G-5HRPDJ4GPS"
};


const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const db = getFirestore(app);


const loginButton = document.getElementById("login");

if (loginButton) {
    loginButton.addEventListener("click", () => {
        signInWithPopup(auth, provider)
            .catch(console.error);
    });

    onAuthStateChanged(auth, (user) => {
        loginButton.textContent = user
            ? user.displayName
            : "Sign in";
    });
}


export { auth, provider, db };