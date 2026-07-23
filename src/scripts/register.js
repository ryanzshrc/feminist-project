import {
    doc,
    getDoc,
    setDoc,
    serverTimestamp,
    collection,
    query,
    where,
    getDocs
} from "firebase/firestore";

import { auth, db } from "../lib/firebase.js";
import { onAuthStateChanged } from "firebase/auth";

const displayNameInput = document.getElementById("display-name");
const usernameInput = document.getElementById("username");
const bioInput = document.getElementById("bio");
const finishButton = document.getElementById("finish-registration");

onAuthStateChanged(auth, async (user) => {

    if (!user) {
        window.location.href = "/";
        return;
    }

    const userRef = doc(db, "users", user.uid);
    const userDoc = await getDoc(userRef);

    if (userDoc.exists()) {
        window.location.href = "/account";
        return;
    }

    displayNameInput.value = user.displayName || "";

});

finishButton.addEventListener("click", async () => {

    const user = auth.currentUser;

    if (!user) return;

    const displayName = displayNameInput.value.trim();
    const username = usernameInput.value.trim().toLowerCase();
    const bio = bioInput.value.trim();

    if (!displayName || !username) {
        alert("Display name and username are required.");
        return;
    }

    if (!/^[a-z0-9_]{3,20}$/.test(username)) {
        alert("Username must be 3–20 characters and contain only lowercase letters, numbers, and underscores.");
        return;
    }

    const usernameQuery = query(
        collection(db, "users"),
        where("username", "==", username)
    );

    const usernameSnapshot = await getDocs(usernameQuery);

    if (!usernameSnapshot.empty) {
        alert("That username is already taken.");
        return;
    }

    await setDoc(doc(db, "users", user.uid), {

        displayName,
        username,
        bio,

        email: user.email,
        photoURL: user.photoURL,

        role: "user",

        createdAt: serverTimestamp()

    });

    window.location.href = "/account";

});