<template>
    <v-dialog v-model="contactUsDialog" persistent width="600" transition="dialog-top-transition">
        <div class="rounded-xl pa-4" :class="darkMode ? 'bg-slate-800' : 'bg-slate-200'">

<v-row>
    <v-col cols="2"></v-col>
    <v-col cols="8" align="center">
        <span class="text-3xl font-weight-black">Contact Us</span>
    </v-col>
    <v-col cols="2" align="end">
        <v-btn icon="mdi-close" variant="plain" class="text-xl" @click="closeContactUsDialog"></v-btn>
    </v-col>
</v-row>



<v-card-text>


    <v-row v-for="(facility, index) in facilities" :key="index" @click="makeCall(facility.Phone)">
        <v-col cols="12" align=center>
            <div class="w-100 buttonBuy py-5" :class="darkMode ? 'text-white' : 'text-black'">
                <v-icon class="me-2" :color="darkMode ? 'white' : 'black'" icon="mdi-phone"></v-icon>
                {{ facility.Name }}
            </div>
        </v-col>
    </v-row>



</v-card-text>
</div>
    </v-dialog>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { usePiniaStorage } from '../store/pinia';

// Pinia
const store = usePiniaStorage();
const contactUsDialog = computed(() => store.contactUsDialog);
const facilities = computed(() => store.facilities);

function closeContactUsDialog() {
    store.closeContactUsDialog();
};
// Pinia


// Theme
import { useTheme } from 'vuetify'
const theme = useTheme();
const darkMode = computed(() => theme.name.value === 'dark');
// Theme


// Call
const makeCall = (phone: string) => {
    window.location.href = `tel:${phone}`;
};
// Call



</script>

<style scoped>
@import '../assets/buttonBuy.css';
</style>