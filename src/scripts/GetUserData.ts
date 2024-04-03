// Imports
import { ref, computed } from 'vue';
import { usePiniaStorage } from '../store/pinia';

// Firebase
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { db } from '../firebase.js';
// Imports

// Data 
const userData = ref(null);
const userUid = ref(null);
const subscriptions = ref(null);
const payments = ref(null);
// Data

// Functions
const getUserData = async (uid: string) => {

    const piniaStorage = usePiniaStorage();

    // Get the user data from the database
    const userDocRef = doc(db, "users", uid);
    const userDocSnap = await getDoc(userDocRef);
    const userDetailData = userDocSnap.data();

    // Get subscription data if exists
    try {
        const subscriptionCollectionRef = collection(userDocRef, 'subscription');

        const subscriptionSnapshot = await getDocs(subscriptionCollectionRef);

        const subscriptionData = subscriptionSnapshot.docs.map(doc => doc.data())[0];
        subscriptionData['endDate'] = subscriptionData.end_date.toDate().toISOString().split('T')[0];
        subscriptionData['startDate'] = subscriptionData.start_date.toDate().toISOString().split('T')[0];

        piniaStorage.setUserData({ ...userDetailData, subscription: subscriptionData }, uid);
    }
    catch (error) {
        piniaStorage.setUserData({ ...userDetailData }, uid);
    }

}
// Functions