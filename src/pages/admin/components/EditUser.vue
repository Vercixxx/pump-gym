<template>

    <v-dialog v-model="editUserDialog" persistent width="800" :fullscreen="$vuetify.display.smAndDown"
        transition="dialog-top-transition" style="background-color: rgba(50, 50, 50, 0.8);">
        <v-card :class="[
            $vuetify.display.smAndDown ? '' : 'rounded-xl pa-4',
            darkMode ? 'bg-slate-800' : 'bg-slate-200'
        ]" :style="darkMode ? 'background-color:rgb(30 46 84)' : 'background-color:rgb(226 232 240)'">

            <v-card-title v-if="$vuetify.display.smAndUp">
                <v-row>
                    <v-col cols="2"></v-col>
                    <v-col cols="8" align="center">
                        <span v-if="addingUser" class="text-3xl font-weight-black">
                            Add new user
                            <v-icon>mdi-account-plus</v-icon>
                        </span>

                        <span v-else class="text-3xl font-weight-black">
                            Edit {{ userData.first_name }} {{ userData.last_name }}
                            <v-icon>mdi-account-edit</v-icon>
                        </span>
                    </v-col>
                    <v-col cols="2" align="end">
                        <v-btn v-if="addingUser" icon="mdi-close" variant="plain" class="text-xl"
                            @click="closeAddUserDialog"></v-btn>
                        <v-btn v-else icon="mdi-close" variant="plain" class="text-xl" @click="closeEditDialog"></v-btn>
                    </v-col>
                </v-row>
            </v-card-title>

            <!-- Mobile -->
            <v-card-title v-else>

                <v-row>
                    <v-col cols="2" align="start">
                        <v-btn v-if="addingUser" text="Back" @click="closeAddUserDialog" prepend-icon="mdi-arrow-left"
                            variant="plain"></v-btn>
                        <v-btn v-else text="Back" @click="closeEditDialog" prepend-icon="mdi-arrow-left"
                            variant="plain"></v-btn>
                    </v-col>
                    <v-col cols="8" align=center>
                        <span v-if="addingUser" class="text-lg font-weight-black text-wrap">
                            Add new user
                            <v-icon>mdi-account-edit</v-icon>
                        </span>

                        <span v-else class="text-lg font-weight-black text-wrap">
                            Edit {{ userData.first_name }} {{ userData.last_name
                            }}
                            <v-icon>mdi-account-edit</v-icon>
                        </span>
                    </v-col>
                    <v-col cols="2"></v-col>
                </v-row>

            </v-card-title>
            <!-- Mobile -->


            <div class="ma-5 pa-6 border-2 border-indigo-500 rounded-xl">
                <v-form v-model=form>
                    <v-row dense>
                        <v-col cols="12" md="4" sm="6" v-for="field in userFields" :key="field.model">
                            <v-text-field :label="field.label" variant="outlined" v-model="field.value"
                                :rules="field.rules" :disabled="loading"></v-text-field>
                        </v-col>



                        <v-col cols="12" md="4" sm="6">
                            <v-select v-model="selectedGender" :items="genders" label="Gender" variant="outlined"
                                :rules="notEmptyRule" :disabled="loading"></v-select>
                        </v-col>


                        <v-col cols="12" md="4" sm="6">
                            <v-select v-model="role" :items="roles" label="User role" variant="outlined"
                                :rules="notEmptyRule" :disabled="loading"></v-select>
                        </v-col>



                        <v-col cols="12" md="4" sm="6">
                            <v-switch label="Account active" inset v-model="activeStatus"
                                :color="activeStatus ? 'success' : 'danger'" :disabled="loading"></v-switch>
                        </v-col>

                    </v-row>
                </v-form>
            </div>


            <v-card-actions>
                <v-btn v-if="addingUser" block color="success" @click="addUser" append-icon="mdi-plus" text="Add user"
                    class="font-weight-black text-xl" :disabled="loading || !form"></v-btn>
                <v-btn v-else block color="success" @click="updateUserData" append-icon="mdi-content-save-check"
                    text="Save changes" class="font-weight-black text-xl" :disabled="loading || !form"></v-btn>
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


const closeEditDialog = () => {
    storage.closeEditUserDialog();
}


// Fields
const form = ref(false);

let notEmptyRule = ref([
    (v: string) => !!v || 'Field is required'
]);

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


let role = ref();
const roles = ref([
    'Admin',
    'User',
]);

// Fields

watch(() => storage.editUserData, (newVal) => {

    if (newVal) {
        const userData = storage.editUserData;

        userFields.forEach((field) => {
            field.value = userData[field.model];
        });

        role.value = userData.role;
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



// Adding user
watch(() => storage.addingUser, (newVal) => {

    if (newVal) {
        activeStatus.value = true;
    }
});


const addingUser = computed(() => storage.addingUser);

const closeAddUserDialog = () => {
    storage.closeAddUserDialog();
}


import { createAccount } from '../../../scripts/CreateAccount'

const addUser = async () => {
    loading.value = true;

    try {

        const response = createAccount(
            userFields[0].value,
            userFields[1].value,
            userFields[2].value,
            userFields[3].value,
            selectedGender.value,
            role.value,
        );

        if (await response) {
            storage.closeAddUserDialog();
        }


    } catch (error) {
        storage.showAlert('error', 'Error adding user');
        console.error(error);
    }

    loading.value = false;
};
// Adding user

</script>