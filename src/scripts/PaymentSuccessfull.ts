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


        // Payment history
        const paymentDate = startDate.toDate().toISOString().slice(0, 10);

        const paymentDocRef = doc(db, 'Payments', userUid, 'History' ,paymentDate);
        await setDoc(paymentDocRef, {
            paymentDate: startDate,
            plan: plan,
            cost: planData.price,
            status: 'Successfull',
        });
        // Payment history


        // Subscription
        await setDoc(subscriptionDocRef, {
            status: 'active',
            plan: plan,
            period: period,
            start_date: startDate,
            end_date: endDate,
        });
        // Subscription

        piniaStorage.closeBuyDialog();

        piniaStorage.closeOverlay();

        piniaStorage.openPaymentSuccessfullDialog();



    } catch (error) {
        console.error(error);
        piniaStorage.closeOverlay();
    }


}