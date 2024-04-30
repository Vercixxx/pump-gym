import { ref } from 'vue';

// Firebase
import { addDoc, collection, getDocs, updateDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from '../firebase.js';

export const facilities = ref([]);

// Pinia
import { usePiniaStorage } from '../store/pinia.js';




// Facilities
export const fetchFacilities = async () => {
    const storage = usePiniaStorage();
    const facilities = ref([]);

    try {

        const facilitiesQuerySnapshot = await getDocs(collection(db, "Facilities"));


        for (let doc of facilitiesQuerySnapshot.docs) {

            const facility = doc.data();

            const staffQuerySnapshot = await getDocs(collection(doc.ref, "Staff"));
            const imagesQuerySnapshot = await getDocs(collection(doc.ref, "Images"));

            facility.images = imagesQuerySnapshot.docs.map(doc => doc.data())[0];
            facility.staff = staffQuerySnapshot.docs.map(doc => doc.data());

            facilities.value.push(facility);
        }

        storage.setFacilities(facilities.value);
        return true

    } catch (error) {
        storage.showAlert('error', error.code);
        console.error(error.code, error.message);

        return false;
    }
};

// Facilities