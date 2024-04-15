<template>

    <v-dialog v-model="manageSubscriptionDialog" persistent :fullscreen="$vuetify.display.smAndDown"
        transition="dialog-top-transition" style="background-color: rgba(50, 50, 50, 0.8);">
        <v-card :class="[
            $vuetify.display.smAndDown ? '' : 'rounded-xl pa-4',
            darkMode ? 'bg-slate-800' : 'bg-slate-200'
        ]"  :style="darkMode ? 'background-color:rgb(30 46 84)' : 'background-color:rgb(226 232 240)'">


            <v-card-title v-if="$vuetify.display.smAndUp">
                <v-row>
                    <v-col cols="2"></v-col>
                    <v-col cols="8" align="center">
                        <span class="text-3xl font-weight-black">
                            Manage {{ userData.first_name }} {{ userData.last_name }} subscription
                            <v-icon>mdi-account-credit-card</v-icon>
                        </span>
                    </v-col>
                    <v-col cols="2" align="end">
                        <v-btn icon="mdi-close" variant="plain" class="text-xl" @click="closeDialog"></v-btn>
                    </v-col>
                </v-row>
            </v-card-title>

            <!-- Mobile -->
            <v-card-title v-else>

                <v-row>
                    <v-col cols="2" align="start">
                        <v-btn text="Back" @click="closeDialog" prepend-icon="mdi-arrow-left" variant="plain"></v-btn>
                    </v-col>
                    <v-col cols="8" align=center>
                        <span class="font-weight-black text-wrap">
                            Manage {{ userData.first_name }} {{ userData.last_name }} subscription
                            <v-icon>mdi-account-credit-card</v-icon>
                        </span>
                    </v-col>
                    <v-col cols="2"></v-col>
                </v-row>

            </v-card-title>
            <!-- Mobile -->


            <v-card-text>

                <v-row>
                    <v-col align="end">
                        <v-btn @click="getPaymentHistory" class="my-4 hover:bg-green-500" text="Refresh"
                            append-icon="mdi-refresh" variant="text"></v-btn>
                    </v-col>
                </v-row>
                <v-data-table :headers="headers" :items="paymentsHistory" :loading="loading"
                    no-data-text="No transaction done yet"></v-data-table>

            </v-card-text>
        </v-card>
    </v-dialog>


</template>


<script setup lang="ts">

import { ref, computed, watch, reactive } from 'vue';
import { usePiniaStorage } from '../../../store/pinia';

const storage = usePiniaStorage();

// Dialog logic
const manageSubscriptionDialog = computed(() => storage.manageSubscriptionDialog);

const userData = computed(() => storage.manageSubscriptionData);

const closeDialog = () => {
    storage.closeManageSubscriptionDialog();
}
// Dialog logic




// Theme
import { useTheme } from 'vuetify'
const theme = useTheme();
const darkMode = computed(() => theme.name.value === 'dark');
// Theme





// Get subscription data
let loading = ref(false);
let paymentsHistory = ref([]);
const headers = ref([
    { title: 'Date', align: 'center', key: 'date' },
    { title: 'Cost', align: 'center', key: 'cost' },
    { title: 'Plan', align: 'center', key: 'plan' },
    { title: 'Status', align: 'center', key: 'status' },
]);


// Get Payment History
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../../firebase.js';


const getPaymentHistory = async () => {
    loading = true;

    try {
        const paymentCollectionRef = collection(db, 'Payments', userData.value.id, 'History');
        const paymentSnapshot = await getDocs(paymentCollectionRef);
        const paymentData = paymentSnapshot.docs.map(doc => {
            const paymentDate = doc.data().paymentDate.toDate().toISOString().split('T')[0];
            return { ...doc.data(), date: paymentDate };
        });

        paymentsHistory.value = paymentData;
    } catch (error) {
        storage.showAlert('error', error)
        console.error(error);
    }

    loading = false;
};
// Get Payment History
// Get subscription data




// Get subscription data on dialog open
watch(() => storage.manageSubscriptionDialog, (newValue) => {
    if (newValue) {
        getPaymentHistory();
    }
});
// Get subscription data on dialog open

</script>