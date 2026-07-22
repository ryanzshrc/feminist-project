const title = document.getElementById("article-title");
const description = document.getElementById("article-description");
const content = document.getElementById("article-content");
const image = document.getElementById("article-image");

import {
    collection,
    addDoc,
    serverTimestamp
} from "firebase/firestore";

import { db, auth } from "../lib/firebase.js";

function getArticleData(status) {
    return {
        title: title.value,
        description: description.value,
        content: content.value,
        image: null,
        status: status
    };
}


document.getElementById("save-draft")
.addEventListener("click", () => {

    console.log(getArticleData("draft"));

});

document.getElementById("submit-article")
.addEventListener("click", async () => {

    try {
        const article = getArticleData("pending");

        await addDoc(collection(db, "articles"), {
            ...article,
            authorID: auth.currentUser.uid,
            createdAt: serverTimestamp()
        });

        console.log("Article submitted!");

    } catch (error) {
        console.error(error);
    }

});