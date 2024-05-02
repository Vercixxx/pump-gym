import { ref } from 'vue';

// Firebase
import { addDoc, collection, getDocs, updateDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from '../firebase.js';


// Pinia
import { usePiniaStorage } from '../store/pinia.js';


export const facilities = ref([]);


// Facilities
export const fetchFacilities = async () => {
    const storage = usePiniaStorage();

    try {

        const facilitiesQuerySnapshot = await getDocs(collection(db, "Facilities"));


        for (let doc of facilitiesQuerySnapshot.docs) {

            const facilityObj = doc.data();

            const staffQuerySnapshot = await getDocs(collection(doc.ref, "Staff"));
            const imagesQuerySnapshot = await getDocs(collection(doc.ref, "Images"));

            facilityObj.images = imagesQuerySnapshot.docs.map(doc => doc.data())[0];
            facilityObj.staff = staffQuerySnapshot.docs.map(doc => doc.data());

            facilities.value.push(facilityObj);
        }

        // storage.setFacilities(facilities.value);
        return true

    } catch (error) {
        storage.showAlert('error', error.code);
        console.error(error.code, error.message);

        return false;
    }
};

// Facilities