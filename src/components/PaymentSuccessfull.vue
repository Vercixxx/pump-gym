<template>
    <v-dialog v-model="paymentSuccessfullDialog" persistent  width="800" style="background-color: rgba(100, 100, 100, 0.6);">
        <v-card>
            <v-card-title>

                <v-row>
                    <v-col cols="1"></v-col>
                    <v-col cols="10" class="headline text-h4" align=center>
                        Congratulations, payment successfull!
                    </v-col>
                    <v-col cols="1" align="end">
                        <v-btn icon="mdi-close" variant="plain" @click="closePaymentSuccessfullDialog"></v-btn>
                    </v-col>
                </v-row>
            </v-card-title>
            <v-card-text>

                asdas
                {{ paymentSuccessfullDialogData }}
            </v-card-text>


            <v-card-actions>
                <v-btn block color="success" variant="outlined" @click="closePaymentSuccessfullDialog">Close</v-btn>
            </v-card-actions>


        </v-card>
    </v-dialog>


</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { usePiniaStorage } from '../store/pinia';

// Pinia
const store = usePiniaStorage();
const paymentSuccessfullDialog = computed(() => store.paymentSuccessfullDialog);
const paymentSuccessfullDialogData = computed(() => store.paymentData);


function closePaymentSuccessfullDialog() {
    store.closePaymentSuccessfullDialog();
}
// Pinia


// Data declaration

// Data declaration


</script>