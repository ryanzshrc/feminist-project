import { db } from "./firebase";
import { collection, getDocs, query, where } from "firebase/firestore";


export async function getFeaturedArticles() {
    const q = query(
        collection(db, "articles"),
        where("featured", "==", true)
    );

    const snapshot = await getDocs(q);

    return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));
}