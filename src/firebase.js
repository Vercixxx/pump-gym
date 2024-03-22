import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDmJk8YtzTdwxYFWvqqSZn-DSdd_Z-MjS0",
    authDomain: "pump-gym-f72c7.firebaseapp.com",
    projectId: "pump-gym-f72c7",
    storageBucket: "pump-gym-f72c7.appspot.com",
    messagingSenderId: "653379003778",
    appId: "1:653379003778:web:d25acb242e463ff501db9b",
    measurementId: "G-FQYFGWW5W2"
};

const app = initializeApp(firebaseConfig); 
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);