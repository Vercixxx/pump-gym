import { ref } from 'vue';

// Firebase
import { addDoc, collection, getDocs, updateDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from '../firebase.js';

export const activities = ref([]);


// Get all activities
export const getActivities = async () => {


    try {
        const querySnapshot = await getDocs(collection(db, 'Activities'));

        for (const doc of querySnapshot.docs) {
            const activity = doc.data();

            const itemsSnapshot = await getDocs(collection(doc.ref, 'items'));
            const imagesSnapshot = await getDocs(collection(doc.ref, 'images'));

            const items = itemsSnapshot.docs.map(doc => doc.data())[0];
            const images = imagesSnapshot.docs.map(doc => doc.data())[0];

            activities.value.push({ ...activity, items, images });
        }


        return true;

    } catch (error) {

        storage.showAlert('error', error.code);
        console.error(error.code, error.message);

        return false;
    }

}
// Get all activities