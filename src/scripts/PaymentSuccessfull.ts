import { ref, computed } from 'vue';
import { usePiniaStorage } from '../store/pinia';

// Firebase
import { collection, setDoc, doc, Timestamp } from "firebase/firestore";
import { db } from '../firebase.js';


export const PaymentSuccessfull = async () => {


    // Pinia
    const piniaStorage = usePiniaStorage();
    const userUid = computed(() => piniaStorage.userUid).value;

    const planData = computed(() => piniaStorage.buyDialogData).value;

    // Pinia


    // Overlay
    piniaStorage.openOverlay();
    // Overlay


    // temporary solution
    setInterval(() => {
        piniaStorage.closeOverlay();
    }, 500);
    // temporary solution

    try {
        const period = planData.period;
        const plan = planData.name;

        const userDocRef = doc(db, 'users', userUid);

        const subscriptionDocRef = doc(collection(userDocRef, 'subscription'), 'Subscription');

        // Dates
        const startDate = Timestamp.now();
        const startDateDate = startDate.toDate();

        const endDateDate = new Date(startDateDate);

        endDateDate.setMonth(startDateDate.getMonth() + period);

        const endDate = Timestamp.fromDate(endDateDate);
        // Dates
        

        await setDoc(subscriptionDocRef, {
            status: 'active',
            plan: plan,
            period: period,
            start_date: startDate,
            end_date: endDate,
        });

        piniaStorage.openPaymentSuccessfullDialog();

        piniaStorage.closeOverlay();
    } catch (error) {
        console.error(error);
        piniaStorage.closeOverlay();
    }


}