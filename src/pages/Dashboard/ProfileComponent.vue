<template>

    <div class="ma-0 min-h-screen">


        <div elevation="0" class="mt-3 pa-5 rounded backdrop-blur-xl"
            :class="darkMode ? ' bg-black/75' : ' bg-white/75'">
            <v-card-title class="font-weight-black text-h6">
                Profile
                <span v-if="editing">
                    - Editing mode
                    <v-icon color="error" class="text-h4">mdi-pencil</v-icon>
                </span>

            </v-card-title>

            <v-card-text>
                <v-row>
                    <v-col cols="12" align="end">
                        <v-btn prepend-icon="mdi-pencil" variant="text" color="error" @click="editing = true"
                            text="Edit" v-if="!editing"></v-btn>
                        <v-btn prepend-icon="mdi-content-save" variant="text" color="success" v-if="editing"
                            @click="updateUserData()" text="Save" :disabled="loading"></v-btn>
                        <v-btn prepend-icon="mdi-close" variant="text" color="error" @click="cancelEditing()"
                            text="Cancel" v-if="editing"></v-btn>
                    </v-col>
                </v-row>


                <v-row>
                    <v-col cols="12" sm="6" v-for="field in fields">
                        <v-text-field variant="outlined" :label="field.label" v-model="field.value" :readonly="!editing"
                            :disabled="loading" :base-color="editing ? 'error' : ''"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                        <v-select variant="outlined" label="Gender" :items="['Men', 'Woman', 'Rather not say']"
                            v-model="gender" :readonly="!editing" :disabled="loading"
                            :base-color="editing ? 'error' : ''"></v-select>
                    </v-col>
                </v-row>

            </v-card-text>

        </div>

    </div>


</template>

<script setup lang="ts">
import { onMounted, computed, ref, reactive } from 'vue';
import { usePiniaStorage } from '../../store/pinia';
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from '../../firebase.js';


// User data from the store
const store = usePiniaStorage();
let userData = computed(() => store.userData);
let userUid = computed(() => store.userUid).value;

// User data from the store

// Theme
import { useTheme } from 'vuetify'
const theme = useTheme();
const darkMode = computed(() => theme.name.value === 'dark');
// Theme

// Fields
let loading = ref(false);
let fields = reactive([
    {
        name: 'first_name',
        label: 'First Name',
        value: '',
        rules: [
            v => !!v || 'First Name is required'
        ]
    },
    {
        name: 'last_name',
        label: 'Last Name',
        value: '',
        rules: [
            v => !!v || 'Last Name is required'
        ]
    },
    {
        name: 'email',
        label: 'Email',
        value: '',
        rules: [
            v => !!v || 'Email is required',
            v => (v.length >= 6) || 'Email must containt at least 6 characters',
            v => (v.length <= 70) || 'Email too large',
            v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || 'Invalid email format',
        ]
    },
    {
        name: 'phone',
        label: 'Phone',
        value: '',
        rules: [
            v => !!v || 'Phone is required',
            v => (v.length >= 6) || 'Phone must containt at least 6 characters',
            v => (v.length <= 70) || 'Phone too large',
        ]
    },
]);

const gender = ref();

function setFieldsData() {
    fields.forEach(field => {
        field.value = userData.value[field.name];
    });
    gender.value = userData.value.gender
}


function cancelEditing() {
    setFieldsData();
    editing.value = false;
}

onMounted(() => {
    setFieldsData();
});
// Fields


// Edit
let editing = ref(false);

async function updateUserData() {
    loading.value = true;

    try {

        const userRef = await doc(db, "users", userUid);

        let newUserData = {};
        fields.forEach(field => {
            newUserData[field.name] = field.value;
        });

        newUserData = {
            ...newUserData,
            gender: gender.value
        };

        await updateDoc(userRef, newUserData);

        const updatedUserSnapshot = await getDoc(userRef);
        let updatedUserData = {
            ...updatedUserSnapshot.data(),
            user: {
                uid: userUid,
            },
        };


        store.setUserData(
            updatedUserData,
            userUid
        );



        setFieldsData();

        editing.value = false;
        store.showAlert('success', 'User data updated successfully');


    } catch (error) {
        console.error(error);
        store.showAlert('error', error.message);
    }


    loading.value = false;
}
// Edit


</script>