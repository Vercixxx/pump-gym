<template>

    <v-row>
        <v-col cols="12" align="center" justify="center">

            <v-card elevation="0" class="mt-3 pa-5" style="background-color: rgba(250, 250, 250, 0.8);">
                <v-card-title>
                    <h1>Profile</h1>
                </v-card-title>

                <v-card-text>
                    <v-row>
                        <v-col cols="12" align="end">
                            <v-btn prepend-icon="mdi-pencil" variant="text" color="info" @click="editing = true"
                                text="Edit"></v-btn>
                            <v-btn prepend-icon="mdi-content-save" variant="text" color="success" v-if="editing"
                                @click="editing = false" text="Save"></v-btn>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="12" sm="6" v-for="field in fields">
                            <v-text-field variant="outlined" :label="field.label" v-model="field.value"
                                :readonly="!editing"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-select variant="outlined" label="Gender" :items="['Men', 'Woman', 'Rather not say']"
                                v-model="userData.gender" :readonly="!editing"></v-select>
                        </v-col>
                    </v-row>

                </v-card-text>

            </v-card>

        </v-col>
    </v-row>

</template>

<script>
import { onMounted, computed, ref } from 'vue';
import { usePiniaStorage } from '../../store/pinia.js';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../firebase.js';

export default {
    setup() {

        // User data from the store
        const store = usePiniaStorage();
        const userData = computed(() => store.userData);
        // User data from the store

        // Fields
        const fields = [
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
        ]

        function setFieldsData() {
            fields.forEach(field => {
                field.value = userData.value[field.name];
            });
        }

        onMounted(() => {
            setFieldsData();
        });
        // Fields

        // Edit
        const editing = ref(false);
        // Edit


        return {
            userData,
            fields,
            editing,
        };
    },
};
</script>