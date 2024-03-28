<template>
    <v-dialog v-model="contactUsDialog" persistent width="600">
        <v-card class="rounded-xl pa-4 bg-brown-lighten-5">
            <v-card-title>
                <v-row>
                    <v-col cols="2"></v-col>
                    <v-col cols="8" align="center">
                        <span class="headline font-weight-black">Contact Us</span>
                    </v-col>
                    <v-col cols="2" align="end">
                        <v-btn icon="mdi-close" variant="plain" @click="closeContactUsDialog"></v-btn>
                    </v-col>
                </v-row>

            </v-card-title>

            <v-card-text>

                <v-hover v-for="(facility, index) in facilities" :key="index">
                    <template v-slot:default="{ isHovering, props }">
                        <v-card v-bind="props" :color="isHovering ? 'success' : undefined" :title="facility.Name"
                            :subtitle="facility.Phone" class="mb-5 cursor-pointer" elevation="0"
                            prepend-icon="mdi-phone" @click="makeCall(facility.Phone)"
                            style="background-color: rgba(255, 255, 255, 0.4);">
                        </v-card>
                    </template>

                </v-hover>



            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
import { ref, computed } from 'vue';
import { usePiniaStorage } from '../store/pinia.js';


export default {
    name: 'ContactUsDialog',

    setup() {

        // Pinia
        const store = usePiniaStorage();
        const contactUsDialog = computed(() => store.contactUsDialog);
        const facilities = computed(() => store.facilities);

        function closeContactUsDialog() {
            store.closeContactUsDialog();
        };
        // Pinia

        return {
            contactUsDialog,
            closeContactUsDialog,
            facilities,
        };

    },
};
</script>