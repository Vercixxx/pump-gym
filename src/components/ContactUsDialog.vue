<template>
    <v-dialog v-model="showContactUsDialog" persistent>
        <v-card class="rounded-xl pa-4 bg-brown-lighten-5">
            <v-card-title>
                <v-row>
                    <v-col cols="2"></v-col>
                    <v-col cols="8" align="center">
                        <span class="headline">Contact Us</span>
                    </v-col>
                    <v-col cols="2" align="end">
                        <v-btn icon="mdi-close" variant="plain" @click="closeContactUsDialog"></v-btn>
                    </v-col>
                </v-row>

            </v-card-title>
        </v-card>
    </v-dialog>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
    name: 'ContactUsDialog',

    computed: {
        ...mapGetters(['showContactUsDialog'])
    },

    methods: {
        ...mapActions(['openContactUsDialog', 'closeContactUsDialog']),
    },

    data() {
        return {

        }
    }
}
</script>