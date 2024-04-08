<template>
    <v-dialog v-model="workWithUsDialog" persistent width="600" transition="dialog-top-transition"
        :fullscreen="$vuetify.display.smAndDown ? true : false">
        <div class="pa-4" :class="[
            darkMode ? 'bg-slate-800' : 'bg-slate-200',
            $vuetify.display.smAndDown ? '' : 'rounded-xl',
        ]">
           
                <v-row v-if="!$vuetify.display.smAndDown">
                    <v-col cols="2"></v-col>
                    <v-col cols="8" align="center">
                        <span class="text-3xl font-weight-black">Join out team!</span>
                    </v-col>
                    <v-col cols="2" align="end">
                        <v-btn icon="mdi-close" variant="plain" @click="closeWorkWithUsDialog"></v-btn>
                    </v-col>
                </v-row>

                <v-row v-else>
                    <v-col cols="2" align="start">
                        <v-btn text="Back" @click="exitDialog" prepend-icon="mdi-arrow-left" variant="plain"></v-btn>
                    </v-col>
                    <v-col cols="8" align=center>
                        <span class="text-3xl font-weight-black">Join out team!</span>
                    </v-col>
                    <v-col cols="2"></v-col>
                </v-row>
   

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
        </div>
    </v-dialog>
</template>



<script setup lang="ts">
import { ref, computed } from 'vue';
import { usePiniaStorage } from '../store/pinia';
import { collection, setDoc, doc } from "firebase/firestore";
import { db, storage } from '../firebase.js'
import { ref as firebaseRef, uploadBytes, getDownloadURL } from "firebase/storage";

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


// Theme
import { useTheme } from 'vuetify'
const theme = useTheme();
const darkMode = computed(() => theme.name.value === 'dark');
// Theme



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

</script>