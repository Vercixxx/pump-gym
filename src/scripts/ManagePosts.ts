// Imports
import { ref, computed } from 'vue';
import { usePiniaStorage } from '../store/pinia';

// Firebase
import { addDoc, collection } from "firebase/firestore";
import { db } from '../firebase.js';

// Imports


export const createPost = async (uid: string, postTitle: String, postContent: String) => {
    const date = new Date();

    const storage = usePiniaStorage();

    try {

        await addDoc(collection(db, "Posts"), {
            user: uid,
            postTitle: postTitle,
            postContent: postContent,
            date: date
        });

        storage.showAlert('success', 'Post created successfully')
        return true;

    } catch (error) {
        storage.showAlert('error', error)
        console.error("Error adding document: ", error);
        return false;
    }

}