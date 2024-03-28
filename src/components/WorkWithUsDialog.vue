<template>
    <v-dialog v-model="workWithUsDialog" persistent width="600">
        <v-card class="rounded-xl pa-4 bg-brown-lighten-5">
            <v-card-title class="font-weight-black">
                <v-row>
                    <v-col cols="2"></v-col>
                    <v-col cols="8" align="center">
                        <span class="headline">Join out team!</span>
                    </v-col>
                    <v-col cols="2" align="end">

                        <v-btn icon="mdi-close" variant="plain" @click="closeWorkWithUsDialog"></v-btn>
                    </v-col>
                </v-row>
            </v-card-title>

            <v-card-text>
                <v-form v-model="form">
                    <!-- Name, email, phone -->
                    <v-text-field v-for="field in fields" v-model="field.value" variant="outlined" :label="field.label"
                        :rules="field.rules" class="mb-5" :disabled="loading"></v-text-field>
                    <!-- Name, email, phone -->


                    <!-- Facility -->
                    <v-select v-model="selectedFacility" :items="facilities" item-title="Name" item-value="Name"
                        label="Choose facility" variant="outlined" :rules="requiredRule" :disabled="loading"
                        class="mb-5"></v-select>
                    <!-- Facility -->

                    <!-- Message -->
                    <v-textarea v-model="message" label="Tell us about yourself" variant="outlined" class="mb-5"
                        :disabled="loading" auto-grow clearable counter></v-textarea>
                    <!-- Message -->

                    <!-- CV -->
                    <v-file-input v-model="file" label="Upload CV" placeholder="Upload your documents"
                        prepend-icon="mdi-paperclip" show-size variant="outlined" :disabled="loading"
                        accept="application/pdf" :rules="fileRules">
                        <template v-slot:selection="{ fileNames }">
                            <template v-for="fileName in fileNames" :key="fileName">
                                <v-chip class="me-2" color="primary" size="small" label>
                                    {{ fileName }}
                                </v-chip>
                            </template>
                        </template>
                    </v-file-input>
                    <!-- CV -->
                </v-form>
            </v-card-text>

            <v-card-actions>
                <v-row>
                    <v-col cols="12">
                        <v-tooltip v-if="!form" activator="parent" location="top" no-overflow>
                            Fill required fields
                        </v-tooltip>
                        <span>
                            <v-btn block text="Join" :color="form ? 'success' : 'error'" :disabled="!form"
                                variant="elevated" :loading="loading" @click="sendApplication"></v-btn>
                        </span>
                    </v-col>
                </v-row>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>



<script>
import { ref, computed } from 'vue';
import { usePiniaStorage } from '../store/pinia.js';
import { collection, setDoc, doc } from "firebase/firestore";
import { db, storage } from '../firebase.js'
import { ref as firebaseRef, uploadBytes, getDownloadURL } from "firebase/storage";

export default {
    name: 'WorkWithUsDialog',
    setup() {

        const form = ref(false);
        const loading = ref(false);
        const selectedFacility = ref(null);
        const message = ref('');

        // File
        const file = ref([]);
        const fileUrl = ref(null);
        // File


        // Pinia
        const store = usePiniaStorage();
        const workWithUsDialog = computed(() => store.workWithUsDialog);
        const facilities = computed(() => store.facilities);

        const closeWorkWithUsDialog = () => {
            store.closeWorkWithUsDialog();
        };

        const triggerAlert = (alertData) => {
            store.triggerAlert(alertData);
        };
        // Pinia


        // Fields
        const fields = ref([
            {
                name: 'name',
                label: 'Name',
                value: '',
                rules: [
                    v => !!v || 'Name is required'
                ]
            },
            {
                name: 'email',
                label: 'Email',
                value: '',
                rules: [
                    v => !!v || 'Email is required',
                    v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
                ]
            },
            {
                name: 'phone',
                label: 'Phone',
                value: '',
                rules: [
                    v => !!v || 'Phone is required',
                    v => (v && v.length >= 9 && v.length <= 15) || 'Phone must be valid'
                ]
            },
        ]);
        // Fields



        const sendApplication = async () => {
            loading.value = true;

            try {
                if (file.value.length > 0) {
                    const fileRef = firebaseRef(storage, 'Applications/' + fields.value.find(field => field.name === 'email').value + '/' + file.value[0].name);
                    await uploadBytes(fileRef, file.value[0]);
                    fileUrl.value = await getDownloadURL(fileRef);
                }

                const data = {
                    name: fields.value.find(field => field.name === 'name').value,
                    email: fields.value.find(field => field.name === 'email').value,
                    phone: fields.value.find(field => field.name === 'phone').value,
                    facility: selectedFacility.value,
                    message: message.value,
                    fileUrl: fileUrl.value
                };

                await setDoc(doc(collection(db, 'Applications'), data.email), data);


                triggerAlert({
                    message: 'Application sent successfully!',
                    type: 'success'
                });

            } catch (error) {
                console.error('Error occurred while sending application', error);
                triggerAlert({
                    message: 'Error occurred while sending application, please try again later',
                    type: 'error'
                });
            }

            loading.value = false;
            closeWorkWithUsDialog();
        };

        const exitDialog = () => {
            fields.value.forEach(field => field.value = '');
            closeWorkWithUsDialog();
        };

        return {
            form,
            selectedFacility,
            message,
            file,
            fileUrl,
            loading,
            workWithUsDialog,
            facilities,
            fields,
            closeWorkWithUsDialog,
            triggerAlert,
            sendApplication,
            exitDialog,
        };
    },
};
</script>