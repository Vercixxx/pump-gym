<template>
    <v-empty-state image="https://firebasestorage.googleapis.com/v0/b/pump-gym-f72c7.appspot.com/o/Images%2Ferror_image.jpeg?alt=media&token=7aeb6423-4191-4549-9c36-6540f6521810" size="450" text-width="500">
        <template v-slot:media>
            <v-img class="mb-8"></v-img>
        </template>

        <template v-slot:title>
            <div class="text-h6 text-high-emphasis">
                <v-icon color="error" size="48">mdi-alert-circle</v-icon>
                Apologies for the inconvenience. The page you're attempting to access is either unavailable or you do
                not have the necessary permissions to view it.
                <v-icon color="error" size="48">mdi-alert-circle</v-icon>
            </div>

        </template>

        <template v-slot:text>
            <v-btn text="Go to home page" block size="large" append-icon="mdi-home" color="success" @click="goToHome"></v-btn>
        </template>
    </v-empty-state>
</template>

<script setup lang="ts">
import { VEmptyState } from 'vuetify/labs/VEmptyState'
import { useRouter } from 'vue-router'

// Route user to home page
const router = useRouter()
const goToHome = () => {
    router.push('/')
}
// Route user to home page
</script>