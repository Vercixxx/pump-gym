<template>

    <v-dialog v-model="editUserDialog" persistent width="600" transition="dialog-top-transition">
        <div class="rounded-xl pa-4" :class="darkMode ? 'bg-slate-800' : 'bg-slate-200'">


            <v-row>
                <v-col cols="2"></v-col>
                <v-col cols="8" align="center">
                    <span class="text-3xl font-weight-black">
                        Edit user
                        <v-icon>mdi-account-edit</v-icon>
                    </span>
                </v-col>
                <v-col cols="2" align="end">
                    <v-btn icon="mdi-close" variant="plain" class="text-xl" @click="closeDialog"></v-btn>
                </v-col>
            </v-row>



            <div>
                <v-row dense>
                    <v-col cols="12" md="4" sm="6" v-for="field in userFields" :key="field.model">
                        <v-text-field :label="field.label" variant="outlined" v-model="field.value"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4" sm="6">

                        <v-select v-model="selectedGender" :items="genders" label="Gender"
                            variant="outlined"></v-select>

                    </v-col>

                </v-row> {{ userData }}
            </div>
        </div>
    </v-dialog>

</template>

<script setup lang="ts">

import { ref, computed, onMounted } from 'vue';
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
const userFields = ref([
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
    // {
    //     label: 'Role',
    //     model: 'role',
    //     type: 'select',
    //     required: true
    // },
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

// Fields

onMounted(() => {
    userFields.value.forEach((field) => {
        field.value = userData.value[field.model];
    });

    selectedGender = userData.value.gender;
});


</script>