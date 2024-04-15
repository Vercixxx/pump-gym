<template>

    <v-dialog v-model="editUserDialog" persistent width="800" :fullscreen="$vuetify.display.smAndDown"
        transition="dialog-top-transition" style="background-color: rgba(50, 50, 50, 0.8);">
        <v-card :class="[
            $vuetify.display.smAndDown ? '' : 'rounded-xl pa-4',
            darkMode ? 'bg-slate-800' : 'bg-slate-200'
        ]"  :style="darkMode ? 'background-color:rgb(30 46 84)' : 'background-color:rgb(226 232 240)'">

            <v-card-title v-if="$vuetify.display.smAndUp">
                <v-row>
                    <v-col cols="2"></v-col>
                    <v-col cols="8" align="center">
                        <span class="text-3xl font-weight-black">
                            Edit {{ userData.first_name }} {{ userData.last_name }}
                            <v-icon>mdi-account-edit</v-icon>
                        </span>
                    </v-col>
                    <v-col cols="2" align="end">
                        <v-btn icon="mdi-close" variant="plain" class="text-xl" @click="closeDialog"></v-btn>
                    </v-col>
                </v-row>
            </v-card-title>

            <!-- Mobile -->
            <v-card-title v-else>

                <v-row>
                    <v-col cols="2" align="start">
                        <v-btn text="Back" @click="closeDialog" prepend-icon="mdi-arrow-left" variant="plain"></v-btn>
                    </v-col>
                    <v-col cols="8" align=center>
                        <span class="text-lg font-weight-black text-wrap"> Edit {{ userData.first_name }} {{ userData.last_name
                            }} <v-icon>mdi-account-edit</v-icon></span>
                    </v-col>
                    <v-col cols="2"></v-col>
                </v-row>

            </v-card-title>
            <!-- Mobile -->


            <div class="ma-5 pa-6 border-2 border-indigo-500 rounded-xl">
                <v-row dense>
                    <v-col cols="12" md="4" sm="6" v-for="field in userFields" :key="field.model">
                        <v-text-field :label="field.label" variant="outlined" v-model="field.value"
                            :disabled="loading"></v-text-field>
                    </v-col>



                    <v-col cols="12" md="4" sm="6">
                        <v-select v-model="selectedGender" :items="genders" label="Gender" variant="outlined"
                            :disabled="loading"></v-select>
                    </v-col>



                    <v-col cols="12" md="4" sm="6">
                        <v-switch label="Account active" inset v-model="activeStatus"
                            :color="activeStatus ? 'success' : 'danger'" :disabled="loading"></v-switch>
                    </v-col>

                </v-row>
            </div>


            <v-card-actions>
                <v-btn block color="success" @click="updateUserData" append-icon="mdi-content-save-check"
                    text="Save changes" class="font-weight-black text-xl" :disabled="loading"></v-btn>
            </v-card-actions>


        </v-card>
    </v-dialog>

</template>

<script setup lang="ts">

import { ref, computed, watch, reactive } from 'vue';
import { usePiniaStorage } from '../../../store/pinia';

const storage = usePiniaStorage();

// Theme
import { useTheme } from 'vuetify'
const theme = useTheme();
const darkMode = computed(() => theme.name.value === 'dark');
// Theme

const editUserDialog = computed(() => storage.editUserDialog);

const userData = computed(() => storage.editUserData);


const closeDialog = () => {
    storage.closeEditUserDialog();
}


// Fields
let userFields = reactive([
    {
        label: 'First name',
        model: 'first_name',
        value: '',
        required: true,
        rules: [
            (v: string) => !!v || 'First name is required',
            (v: string) => (v && v.length <= 30) || 'First name must be less than 30 characters'
        ]
    },
    {
        label: 'Last name',
        model: 'last_name',
        value: '',
        required: true,
        rules: [
            (v: string) => !!v || 'Last name is required',
            (v: string) => (v && v.length <= 30) || 'Last name must be less than 30 characters'
        ]
    },
    {
        label: 'Email',
        model: 'email',
        value: '',
        required: true,
        rules: [
            (v: string) => !!v || 'Email is required',
            (v: string) => /.+@.+\..+/.test(v) || 'E-mail must be valid'
        ]
    },
    {
        label: 'Phone number',
        model: 'phone',
        value: '',
        required: true,
        rules: [
            (v: string) => !!v || 'Phone number is required',
            (v: string) => /^[-+]?[0-9]+$/.test(v) || 'Phone number must contain only numbers, +, or -'
        ]
    },
]);

const genders = ref([
    'Rather not say',
    'Men',
    'Woman',
]);
let selectedGender = ref();

let activeStatus = ref();

// Fields

watch(() => storage.editUserData, (newVal) => {

    if (newVal) {
        const userData = storage.editUserData;

        userFields.forEach((field) => {
            field.value = userData[field.model];
        });

        selectedGender.value = userData.gender;
        activeStatus.value = userData.active;
    }
});



// Update user
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from '../../../firebase.js';

let loading = ref(false);

const updateUserData = async () => {
    loading.value = true;

    try {

        const userRef = await doc(db, "users", userData.value.id);

        let newUserData = {};
        userFields.forEach(field => {
            newUserData[field.model] = field.value;
        });

        newUserData = {
            ...newUserData,
            gender: selectedGender.value,
            active: activeStatus.value,
        };

        await updateDoc(userRef, newUserData);

        storage.closeEditUserDialog();

        storage.showAlert('success', 'User updated successfully');

    } catch (error) {
        storage.showAlert('error', 'Error updating user');
        console.error(error);
    }

    loading.value = false;
};
// Update user

</script>