import {
    signInWithPopup,
    onAuthStateChanged
} from "firebase/auth";

import { auth, provider } from "../lib/firebase.js";

import {
    doc,
    getDoc
} from "firebase/firestore";

import { db } from "../lib/firebase.js";


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
                    .then(async (result) => {

                        const user = result.user;

                        const userDoc = await getDoc(doc(db, "users", user.uid));

                        if (userDoc.exists()) {
                            window.location.href = `${import.meta.env.BASE_URL}account`;
                        } else {
                            window.location.href = `${import.meta.env.BASE_URL}register`;
                        }

                    })
                    .catch(console.error);
                            };

                        }

                    });

}
