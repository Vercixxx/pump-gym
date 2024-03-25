<template>
    <v-dialog v-model="showWorkWithUsDialog" persistent width="600">
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
                    <v-select v-model="selectedFacility" :items="getFacilities" item-title="Name" item-value="Name"
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
import { mapState, mapActions, mapGetters } from 'vuex'

import { collection, setDoc, doc } from "firebase/firestore";
import { db, storage } from '../firebase.js'
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default {
    name: 'WorkWithUsDialog',

    computed: {
        ...mapGetters(['showWorkWithUsDialog', 'getFacilities'])
    },


    data() {
        return {
            form: false,

            selectedFacility: null,
            message: '',

            file: [],
            fileUrl: null,
            fileRules: [
                value => {
                    return !value || !value.length || value[0].size < 3000000 || 'Avatar size should be less than 3 MB!'
                },
            ],

            loading: false,

            requiredRule: [
                v => !!v || 'Field required'
            ],

            fields: [
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
            ]
        }
    },


    methods: {
        ...mapActions(['triggerAlert', 'closeWorkWithUsDialog']),

        async sendApplication() {
            this.loading = true;

            try {

                if (this.file) {
                    const file = this.file[0];
                    const fileRef = ref(storage, 'Applications/' + this.fields.find(field => field.name === 'email').value + '/' + file.name);
                    await uploadBytes(fileRef, file);

                    this.fileUrl = await getDownloadURL(fileRef);
                };



                const data = {
                    name: this.fields.find(field => field.name === 'name').value,
                    email: this.fields.find(field => field.name === 'email').value,
                    phone: this.fields.find(field => field.name === 'phone').value,
                    facility: this.selectedFacility,
                    message: this.message,
                    fileUrl: this.fileUrl

                };

                const reponse = await setDoc(doc(collection(db, 'Applications'), data.email), {
                    name: data.name,
                    email: data.email,
                    phone: data.phone,
                    facility: data.facility,
                    message: data.message,
                    fileUrl: data.fileUrl
                });

                this.triggerAlert({
                    message: 'Application sent successfully!',
                    type: 'success'
                });

            } catch (error) {
                console.error('Error occured while sending application', error);
                this.triggerAlert({
                    message: 'Error occured while sending application, please try again later',
                    type: 'error'
                });

            }

            this.loading = false;
            this.closeWorkWithUsDialog();
        },


        exitDialog() {
            this.fields.forEach(field => field.value = '');
            this.closeWorkWithUsDialog;
        }
    },
}
</script>
