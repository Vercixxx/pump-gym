<template>
    <v-dialog v-model="showContactUsDialog" persistent width="600">
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

                <v-hover v-for="(facility, index) in getFacilities" :key="index">
                    <template v-slot:default="{ isHovering, props }">
                        <v-card v-bind="props" :color="isHovering ? 'success' : undefined" :title="facility.Name"
                            :subtitle="facility.Phone" class="mb-5 cursor-pointer" elevation="0"
                            prepend-icon="mdi-phone" @click="makeCall(facility.Phone)"  style="background-color: rgba(255, 255, 255, 0.4);">
                        </v-card>
                    </template>

                </v-hover>



            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
    name: 'ContactUsDialog',

    computed: {
        ...mapGetters(['showContactUsDialog', 'getFacilities'])
    },

    methods: {
        ...mapActions(['openContactUsDialog', 'closeContactUsDialog']),

        makeCall(phoneNumber) {
            window.location.href = `tel:${phoneNumber}`;
        },
    },

    data() {
        return {



        }
    }
}
</script>