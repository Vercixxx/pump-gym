<template>

    <v-dialog v-model="loginDialog" persistent width="600" style="background-color: rgba(100, 100, 100, 0.6);">
        <v-card class="rounded-xl pa-4">
            <v-card-title>

                <v-row>
                    <v-col cols="2"></v-col>
                    <v-col cols="8" class="headline text-h4" align=center>
                        Login
                    </v-col>
                    <v-col cols="2" align="end">
                        <v-btn icon="mdi-close" variant="plain" @click="closeLoginDialog"></v-btn>
                    </v-col>
                </v-row>
            </v-card-title>

            <v-card-text>
                <v-form v-model="form">

                    <!-- Login -->
                    <v-text-field v-model="loginInput" label="Email" class="mb-7" variant="outlined"
                        prepend-icon="mdi-email" autocomplete="username" :rules="rules.emailRules"></v-text-field>
                    <!-- Login -->



                    <!-- Password -->
                    <v-text-field v-model="password" label="Password" variant="outlined"
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
            </v-card-text>


            <v-row class="mb-4">
                <v-col cols="12" align="center">
                    <v-divider></v-divider>
                    <v-btn class="mt-4" variant="tonal" @click="signUp" role="button">
                        Dont have an account? Sign up now!
                    </v-btn>

                </v-col>
            </v-row>


            <v-row class="mb-1 mt-2">
                <v-col cols="12">
                    <span>
                        <v-tooltip v-if="!form" activator="parent" location="top" no-overflow>
                            Fill required fields
                        </v-tooltip>
                        <span>
                            <v-btn block color="green-darken-2" @click="login()" :loading="loading"
                                :disabled="!form">Login</v-btn>
                        </span>
                    </span>
                </v-col>
            </v-row>

        </v-card>
    </v-dialog>

</template>

<script>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import { usePiniaStorage } from '../store/pinia';

// Firebase
import { auth } from '../firebase';
import { signInWithEmailAndPassword, setPersistence, browserSessionPersistence } from 'firebase/auth';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../firebase.js';

export default {
    name: 'LoginComponent',
    setup(_, { root }) {
        const store = useStore();

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


        const signUp = () => {
            // store.dispatch('closeLoginDialog');
            store.dispatch('openSignUpDialog');
        };


        // Pinia storage / get user data
        const piniaStorage = usePiniaStorage();

        const loginDialog = computed(() => piniaStorage.loginDialog);

        function closeLoginDialog() {
            piniaStorage.closeLoginDialog()
        }

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

                // Set the user data in the store
                piniaStorage.setUserData({ ...user, ...userDetailData });

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



        return {
            loginDialog,
            closeLoginDialog,
            form,
            loading,
            loginInput,
            password,
            passwordVisible,
            rules,
            // showLoginDialog,
            signUp,
            login,
        };
    },
};
</script>