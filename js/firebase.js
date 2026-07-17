import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";

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

console.log("Firebase connected!");