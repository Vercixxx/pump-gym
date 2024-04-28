import { usePiniaStorage } from '../store/pinia';


import { auth, db } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, setPersistence } from 'firebase/auth';
import { setDoc, doc } from "firebase/firestore";

import { SignIn } from './SignIn'

export const createAccount = async (first_name: string, last_name: string, email: string, phone: string, gender: string, role: string, signInAfter: boolean = false, password?: string) => {

    const storage = usePiniaStorage();

    try {
        if (!password) {
            password = Math.random().toString(36).slice(-8);
        }

        const userCredential = await createUserWithEmailAndPassword(auth, email, password);

        const userDocRef = doc(db, 'users', userCredential.user.uid);

        await setDoc(userDocRef, {
            first_name: first_name,
            last_name: last_name,
            email: email,
            phone: phone,
            gender: gender,
            role: role,
            active: true,
        });



        if (signInAfter) {
            await SignIn(email, password);
        }

        storage.showAlert('success', 'Account successfully created, now go to dashboard and subscribe to a plan.');

        return true;
    } catch (error) {

        storage.showAlert('error', error.code);
        console.error(error.code, error.message);

        return false;
    }


};