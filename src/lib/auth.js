import {
    signInWithPopup,
    onAuthStateChanged
} from "firebase/auth";

import { auth, provider } from "../lib/firebase.js";


const loginButton = document.getElementById("login");

if (loginButton) {

    onAuthStateChanged(auth, (user) => {

        if (user) {
            loginButton.textContent = "Account";

            loginButton.onclick = () => {
                window.location.href = `${import.meta.env.BASE_URL}account`;
            };

        } else {

            loginButton.textContent = "Sign in";

            loginButton.onclick = () => {
                signInWithPopup(auth, provider)
                    .catch(console.error);
            };

        }

    });

}

onAuthStateChanged(auth, (user) => {

    if (user) {
        loginButton.textContent = "Account";
    } else {
        loginButton.textContent = "Sign in";
    }

    loginButton.classList.remove("auth-loading");
});