import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCFq5ezqQo2EXkRBX7dNWleaVJclzP3h9E",
  authDomain: "the-feminist-project.firebaseapp.com",
  projectId: "the-feminist-project",
  storageBucket: "the-feminist-project.firebasestorage.app",
  messagingSenderId: "562891016881",
  appId: "1:562891016881:web:4eb209ee6c1aa3c949b090",
  measurementId: "G-5HRPDJ4GPS"
};

const app = getApps().length
    ? getApps()[0]
    : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);