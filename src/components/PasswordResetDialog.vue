<template>
    <v-dialog v-model="passwordResetDialog" width="auto" transition="dialog-top-transition">

        <div class="rounded-xl pa-4" :class="darkMode ? 'bg-slate-800' : 'bg-slate-200'">

            <v-row>
                <v-col cols="2"></v-col>
                <v-col cols="8" align="center">
                    <span class="text-3xl font-weight-black">Reset password</span>
                </v-col>
                <v-col cols="2" align="end">
                    <v-btn icon="mdi-close" variant="plain" class="text-xl" @click="closeContactUsDialog"></v-btn>
                </v-col>
            </v-row>


            <v-card-text>
                <v-form v-model="form">

                    <v-text-field v-model="email" label="Email" class="mb-7 " variant="outlined"
                        prepend-icon="mdi-email" autocomplete="email" :rules="emailRules"></v-text-field>
                </v-form>
            </v-card-text>

            <v-card-actions>
                <v-btn @click="resetPassword(email)" class="w-100" color="primary" :disabled="!form">Reset password</v-btn>
            </v-card-actions>
        </div>
    </v-dialog>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { usePiniaStorage } from '../store/pinia';
import { useTheme } from 'vuetify'
import { auth } from '../firebase';
import { sendPasswordResetEmail } from 'firebase/auth';

const piniaStorage = usePiniaStorage();

// Dialog
const passwordResetDialog = computed(() => piniaStorage.passwordResetDialog);
const closeContactUsDialog = () => piniaStorage.closePasswordResetDialog();
// Dialog


// Email
const email = ref('');
const emailRules = ref([
    v => !!v || 'Email',
    v => (v.length >= 6) || 'Email must containt at least 6 characters',
    v => (v.length <= 70) || 'Email too large',
    v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || 'Invalid email format (example@ex.ex)',
],)
const form = ref(false);
// Email


// Password recovery
const passwordRecoverDialog = ref(false);
const resetPassword = (email: string) => {
    try {
        sendPasswordResetEmail(auth, email);
        piniaStorage.closePasswordResetDialog();
        piniaStorage.showAlert('success', 'Password recovery email sent, check your inbox');

    } catch (error) {
        console.log(error);
        piniaStorage.showAlert('error', error.message);
    }
}
// Password recovery
</script>