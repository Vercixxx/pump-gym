<template>

    <v-dialog v-model="dialog.show" persistent transition="dialog-top-transition" max-width="850 " :style="darkMode ? 'background-color: rgba(0, 0, 0, 0.9);':'background-color: rgba(0, 0, 0, 0.2);'">

        <v-card :style="darkMode ? 'background-color:rgba(30, 46, 84, 0.9)' : 'background-color:rgba(226, 232, 240, 0.9)'">
            <div class="ms-5 mt-5 font-weight-black text-wrap text-2xl text-center">
                {{ dialog.title }}
            </div>

            <v-card-text align="center">
                {{ dialog.message }}
            </v-card-text>

           
                <v-row class="ma-3">
                    <v-col cols="12" sm="6" align="center">
                        
                        <v-btn class="w-75" @click="dialog.cancelAction" :text="dialog.cancelText" variant="tonal" color="red"></v-btn>
                    </v-col>
                    <v-col cols="12" sm="6" align="center">

                        <v-btn class="w-75" @click="dialog.confirmAction" :text="dialog.confirmText" variant="tonal" color="success"></v-btn>
                    </v-col>
                </v-row>
           
        </v-card>

    </v-dialog>

</template>


<script setup lang="ts">

// Pinia
import { usePiniaStorage } from '../store/pinia'
import { computed } from 'vue'

const storage = usePiniaStorage();

const dialog = computed(() => storage.dialog);
// Pinia


// Theme
import { useTheme } from 'vuetify'
const theme = useTheme();
const darkMode = computed(() => theme.name.value === 'dark');
// Theme

</script>