import {
    signInWithPopup,
    onAuthStateChanged
} from "firebase/auth";

import { auth, provider } from "../lib/firebase.js";


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