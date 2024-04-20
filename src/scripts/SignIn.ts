import { usePiniaStorage } from '../store/pinia';

// Firebase
import { auth, db } from '../firebase';
import { signInWithEmailAndPassword, setPersistence, browserSessionPersistence, sendPasswordResetEmail } from 'firebase/auth';
import { doc, getDoc, collection, getDocs } from "firebase/firestore";



export const SignIn = async (email: string, password: string) => {

    const storage = usePiniaStorage();

    try {
        await setPersistence(auth, browserSessionPersistence);

        const user = await signInWithEmailAndPassword(auth, email, password);


        // Get the user data from the database
        const userDocRef = doc(db, "users", user.user.uid);
        const userDocSnap = await getDoc(userDocRef);
        const userDetailData = userDocSnap.data();

        // Get subscription data if exists
        try {
            const subscriptionCollectionRef = collection(userDocRef, 'subscription');

            const subscriptionSnapshot = await getDocs(subscriptionCollectionRef);

            const subscriptionData = subscriptionSnapshot.docs.map(doc => doc.data())[0];
            subscriptionData['endDate'] = subscriptionData.end_date.toDate().toISOString().split('T')[0];
            subscriptionData['startDate'] = subscriptionData.start_date.toDate().toISOString().split('T')[0];

            storage.setUserData({ ...userDetailData, subscription: subscriptionData }, user.user.uid);
        }
        catch (error) {
            storage.setUserData({ ...userDetailData }, user.user.uid);
        }

        return true;

    } catch (error) {
        console.error(error.code, error.message);

        if (error.code === 'auth/invalid-credential') {
            storage.showAlert('error', 'Wrong email or password');
        } else {
            storage.showAlert('error', 'An error occurred');
        }

        return false;
    }
}