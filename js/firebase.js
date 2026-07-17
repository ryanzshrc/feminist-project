import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";

import { 
    getAuth,
    GoogleAuthProvider,
    signInWithPopup
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyCFq5ezqQo2EXkRBX7dNWleaVJclzP3h9E",
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


const loginButton = document.getElementById("login");


loginButton.addEventListener("click", () => {

    signInWithPopup(auth, provider)
        .then((result) => {

            const user = result.user;

            console.log("Logged in:", user.displayName);
            console.log(user.email);

        })
        .catch((error) => {
            console.error(error);
        });

});