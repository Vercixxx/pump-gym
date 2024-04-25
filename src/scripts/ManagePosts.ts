// Imports
import { ref, computed } from 'vue';
import { usePiniaStorage } from '../store/pinia';

// Firebase
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from '../firebase.js';

// Imports


// Create Post
export const createPost = async (uid: string, postContent: String) => {
    const date = new Date();

    const storage = usePiniaStorage();

    try {

        await addDoc(collection(db, "Posts"), {
            user: uid,
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
// Create Post


// Get Posts
export const getPosts = async () => {
    const postsCollection = collection(db, 'Posts');
    const postsSnapshot = await getDocs(postsCollection);

    const posts = ref([]);

    posts.value = postsSnapshot.docs.map(doc => {
        return {
            id: doc.id,
            ...doc.data()
        }
    });

    return posts.value;
}
// Get Posts


// Edit Post
export const editPost = async (postId: String, uid: string, postContent: String) => {
    const date = new Date();

    const storage = usePiniaStorage();

    try {

        await addDoc(collection(db, "Posts"), {
            user: uid,
            postContent: postContent
        });

        storage.showAlert('success', 'Post edited successfully')
        return true;

    } catch (error) {
        storage.showAlert('error', error)
        console.error("Error adding document: ", error);
        return false;
    }

};
// Edit Post


// Delete Post
export const deletePost = async (postId: String) => {

    try {

        await addDoc(collection(db, "Posts"), {
            postId: postId
        });

        storage.showAlert('success', 'Post deleted successfully')
        return true;

    } catch (error) {
        storage.showAlert('error', error)
        console.error("Error adding document: ", error);
        return false;
    }

};
// Delete Post