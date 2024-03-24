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
                    <v-text-field v-for="field in fields" variant="outlined" :label="field.label"
                        :rules="field.rules" class="mb-5"></v-text-field>
                </v-form>
            </v-card-text>

            <v-card-actions>
                <v-row>
                    <v-col cols="12">
                        <v-tooltip v-if="!form" activator="parent" location="top" no-overflow>
                            Fill required fields
                        </v-tooltip>
                        <span>
                            <v-btn block text="Join" :color="form ? 'success' : 'error'" :disabled="!form" variant="elevated"></v-btn>
                        </span>
                    </v-col>
                </v-row>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
    name: 'WorkWithUsDialog',

    computed: {
        ...mapGetters(['showWorkWithUsDialog'])
    },

    methods: {
        ...mapActions(['openWorkWithUsDialog', 'closeWorkWithUsDialog']),
    },

    data() {
        return {
            form: false,

            facilities: [],
            selectedFacility: null,

            fields: [
                {
                    name: 'name',
                    label: 'Name',
                    rules: [
                        v => !!v || 'Name is required'
                    ]
                },
                {
                    name: 'email',
                    label: 'Email',
                    rules: [
                        v => !!v || 'Email is required',
                        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
                    ]
                },
                {
                    name: 'phone',
                    label: 'Phone',
                    rules: [
                        v => !!v || 'Phone is required',
                        v => (v && v.length >= 9 && v.length <= 15) || 'Phone must be valid'
                    ]
                },
                {
                    name: 'message',
                    label: 'Message',
                    rules: [
                        v => !!v || 'Message is required'
                    ]
                }
            ]
        }
    }
}
</script>
