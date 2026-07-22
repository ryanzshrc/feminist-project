import {
    collection,
    addDoc,
    serverTimestamp
} from "firebase/firestore";

import { db, auth } from "../lib/firebase.js";
import { uploadImage } from "../lib/cloudinary.js";

const title = document.getElementById("article-title");
const description = document.getElementById("article-description");
const content = document.getElementById("article-content");
const image = document.getElementById("article-image");

function getArticleData(status) {
    return {
        title: title.value,
        description: description.value,
        content: content.value,
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

        if (!auth.currentUser) {
            alert("Please sign in before submitting.");
            return;
        }

        const article = getArticleData("pending");

        let imageURL = null;

        if (image.files.length > 0) {
            const upload = await uploadImage(image.files[0]);
            imageURL = upload.secure_url;
        }

        await addDoc(collection(db, "articles"), {
            title: article.title,
            description: article.description,
            content: article.content,

            imageURL: imageURL,

            status: article.status,

            authorID: auth.currentUser.uid,
            createdAt: serverTimestamp()
        });

        alert("Article submitted successfully!");

    } catch (error) {
        console.error(error);
        alert("Something went wrong while submitting the article.");
    }

});