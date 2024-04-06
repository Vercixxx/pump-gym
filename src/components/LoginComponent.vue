<template>

    <v-dialog v-model="loginDialog" persistent width="500" style="background-color: rgba(50, 50, 50, 0.8);">
        <div class="rounded-xl pa-4 border-4 border-indigo-900 " :class="darkMode ? 'bg-slate-900' : 'bg-slate-200'">
            <v-card-title>

                <v-row>
                    <v-col cols="2"></v-col>
                    <v-col cols="8" class="headline text-h4" align=center>
                        Sign in
                    </v-col>
                    <v-col cols="2" align="end">
                        <v-btn icon="mdi-close" variant="plain" @click="closeLoginDialog"></v-btn>
                    </v-col>
                </v-row>
            </v-card-title>

            <div class="grid grid-flow-col justify-stretch" align="center">

                <v-form v-model="form">

                    <!-- Login -->
                    <v-text-field v-model="loginInput" label="Email" class="mb-7 w-75" variant="outlined"
                        prepend-icon="mdi-email" autocomplete="username" :rules="rules.emailRules"></v-text-field>
                    <!-- Login -->


                    <!-- Password -->
                    <v-text-field v-model="password" class="w-75" label="Password" variant="outlined"
                        :type="passwordVisible ? 'text' : 'password'" prepend-icon="mdi-key"
                        :append-inner-icon="passwordVisible ? 'mdi-eye' : ' mdi-eye-off'"
                        @click:append-inner="passwordVisible = !passwordVisible"
                        autocomplete="current-password"></v-text-field>
                    <!-- Password -->

                    <!-- Password recovery -->
                    <div class="text-subtitle-1 text-medium-emphasis d-flex align-end justify-space-between">
                        <span></span>

                        <v-btn variant="plain" size="small" @click="passwordRecoverDialog = true"
                            class="text-cyan-darken-4 font-weight-bold" prepend-icon="mdi-restore">
                            Forgot password?
                        </v-btn>
                    </div>
                    <!-- Password recovery -->
                </v-form>
            </div>




            <v-row class="my-5 ">
                <v-col cols="12" align="center">
                    <span>
                        <v-tooltip v-if="!form" activator="parent" location="top" no-overflow>
                            Fill required fields
                        </v-tooltip>
                        <span>
                            <button :class="darkMode ? '' : 'text-black'" class="loginButton w-50 hover:text-white" :disabled="!form">
                                Sign in
                                <v-icon right>mdi-login</v-icon>
                            </button>
                            <!-- <v-btn block color="green-darken-2" @click="login()" :loading="loading" :disabled="!form"
                                append-icon="mdi-login">Sign in</v-btn> -->
                        </span>
                    </span>
                </v-col>
            </v-row>


            <div class="w-100 border-y border-indigo-600 my-4 mt-5"></div>


            <v-row>
                <v-col cols="12" align="center">
                    Or
                </v-col>
            </v-row>


            <v-row class="mb-4 mt-4">
                <v-col cols="12" align="center">
                    <button
                        class="cursor-pointer text-white font-bold shadow-md hover:scale-[1.2] shadow-purple-400 rounded-full px-5 py-2 bg-gradient-to-bl from-purple-500 to-purple-800"
                        @click="openSignUpDialog">
                        Sign up now
                        <v-icon right>mdi-account-plus</v-icon>
                    </button>


                </v-col>
            </v-row>
        </div>
    </v-dialog>

</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { usePiniaStorage } from '../store/pinia';

// Firebase
import { auth } from '../firebase';
import { signInWithEmailAndPassword, setPersistence, browserSessionPersistence } from 'firebase/auth';
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { db } from '../firebase.js';



const form = ref(false);
const loading = ref(false);
const loginInput = ref('');
const password = ref('');
const passwordVisible = ref(false);

const rules = ref({
    emailRules: [
        v => !!v || 'Email',
        v => (v.length >= 6) || 'Email must containt at least 6 characters',
        v => (v.length <= 70) || 'Email too large',
        v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || 'Invalid email format (example@ex.ex)',
    ],
    passwordRules: [
        v => !!v || 'Password is required',
        v => (v.length >= 4) || 'Password must containt at least 4 characters',
        v => (v.length <= 70) || 'Password too large',
    ],
});





// Pinia storage / get user data
const piniaStorage = usePiniaStorage();

const loginDialog = computed(() => piniaStorage.loginDialog);

function closeLoginDialog() {
    piniaStorage.closeLoginDialog()
}

const openSignUpDialog = () => {
    piniaStorage.openSignUpDialog();
    piniaStorage.closeLoginDialog();

};

const login = async () => {
    loading.value = true;
    try {
        const email = loginInput.value.trim();
        const passwordValue = password.value.trim();

        await setPersistence(auth, browserSessionPersistence);

        const user = await signInWithEmailAndPassword(auth, email, passwordValue);

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

            piniaStorage.setUserData({ ...userDetailData, subscription: subscriptionData }, user.user.uid);
        }
        catch (error) {
            console.log('No subscription data found');
            piniaStorage.setUserData({ ...userDetailData }, user.user.uid);
        }


        closeLoginDialog();

    } catch (error) {
        console.log(error);
        if (error.code === 'auth/invalid-credential') {
            store.dispatch('triggerAlert', {
                message: 'Wrong email or password',
                type: 'error'
            });
        } else {
            store.dispatch('triggerAlert', {
                message: 'An error occurred',
                type: 'error'
            });
        }
    }

    loading.value = false;
};
// Pinia storage / get user data


// Theme
import { useTheme } from 'vuetify'
const theme = useTheme();
const darkMode = computed(() => theme.name.value === 'dark');
// Theme


</script>


<style scoped>
@import '../assets/logInButton.css';
</style>