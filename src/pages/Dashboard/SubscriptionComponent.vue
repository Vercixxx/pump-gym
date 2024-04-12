<template>
    <div class="mt-3 rounded backdrop-blur-xl" :class="darkMode ? ' bg-black/70' : ' bg-white/30'">

        <span v-if="!subscription">
            <v-card-title class="font-weight-black text-h6">Subscription</v-card-title>

            <v-card-text>
                You don't have a subscription yet. Buy one to access all the features.
                <v-btn color="success" @click="goTo('/subscriptions')" variant="pain" class="font-weight-black">Buy
                    subscription
                    now!</v-btn>
            </v-card-text>
        </span>

        <span v-else>

            <v-row>
                <v-col cols="0" sm="3"></v-col>
                <v-col align="center" class="font-weight-black text-3xl">
                    Subscription
                </v-col>
                <v-col cols="12" sm="3" :align="$vuetify.display.smAndDown ? 'center' : 'end'">
                    <v-btn size="large" text="Cancel subscription" @click="cancelSubscriptionDialog = true"
                        class="font-weight-black hover:bg-orange-600" variant="tonal"></v-btn>
                </v-col>
            </v-row>

            <v-card-text>

                <v-card-text>
                    <v-table style="background-color: rgba(250, 250, 250, 0);">
                        <thead>
                            <tr>
                                <th class="text-left" v-for="header in tableHeaders" :key="header.value">
                                    {{ header.text }}
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr
                                :style="subscription['status'] == 'active' ? 'background-color: rgba(20, 250, 20, 0.2);' : 'background-color: rgba(250, 20, 20, 0.2);'">
                                <td v-for="header in tableHeaders" :key="header.value">
                                    {{ subscription[header.value] }}
                                </td>
                            </tr>
                        </tbody>
                    </v-table>


                    <!-- Invoices -->
                    <v-expansion-panels class="mt-5">

                        <v-expansion-panel @click="getPaymentHistory">
                            <v-expansion-panel-title disable-icon-rotate>
                                <h3 class="my-3">History of payments</h3>
                                <template v-slot:actions>
                                    <v-icon color="info" icon="mdi-invoice-text-multiple">
                                    </v-icon>
                                </template>
                            </v-expansion-panel-title>

                            <v-expansion-panel-text>
                                <v-data-table-server v-model:items-per-page="itemsPerPage" :headers="headers"
                                    :items="serverItems" :items-length="totalItems" :loading="loading" item-value="name"
                                    @update:options="loadItems"></v-data-table-server>
                            </v-expansion-panel-text>
                        </v-expansion-panel>

                    </v-expansion-panels>
                    <!-- Invoices -->
                </v-card-text>

            </v-card-text>
        </span>


        <!-- Cancel subscription dialog -->
        <v-dialog v-model="cancelSubscriptionDialog" persistent transition="dialog-top-transition">
            <div class="rounded-xl pa-4" :class="darkMode ? 'bg-slate-800' : 'bg-slate-200'">

                <v-row>
                    <v-col cols="2"></v-col>
                    <v-col cols="8" align="center">
                        <span class="text-3xl font-weight-black">Cancel Subscription</span>
                    </v-col>
                    <v-col cols="2" align="end">
                        <v-btn icon="mdi-close" variant="plain" class="text-xl" @click="cancelSubscriptionDialog = false"></v-btn>
                    </v-col>
                </v-row>



                <v-card-text>

                    {{ subscription }}
                    <!-- <v-row v-for="(facility, index) in facilities" :key="index" @click="makeCall(facility.Phone)">
                        <v-col cols="12" align=center>
                            <div class="w-100 buttonBuy py-5" :class="darkMode ? 'text-white' : 'text-black'">
                                <v-icon class="me-2" :color="darkMode ? 'white' : 'black'" icon="mdi-phone"></v-icon>
                                {{ facility.Name }}
                            </div>
                        </v-col>
                    </v-row> -->



                </v-card-text>
            </div>
        </v-dialog>
        <!-- Cancel subscription dialog -->


    </div>

</template>

<script setup type="ts">
import { ref, computed } from 'vue';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../firebase.js';


// Pinia 
import { usePiniaStorage } from '../../store/pinia';
const store = usePiniaStorage();

const subscription = computed(() => store.userData.subscription);
const userUid = computed(() => store.userUid);
// Pinia 

// Theme
import { useTheme } from 'vuetify'
const theme = useTheme();
const darkMode = computed(() => theme.name.value === 'dark');
// Theme

// Router
import { useRouter } from 'vue-router';
const router = useRouter();
const goTo = (route) => {
    router.push(route);
};
// Router


// Table
const tableHeaders = ref([
    {
        text: 'Plan',
        value: 'plan',
    },
    {
        text: 'Status',
        value: 'status',
    },
    {
        text: 'Start Date',
        value: 'startDate',
    },
    {
        text: 'End Date',
        value: 'endDate',
    },
    {
        text: 'Period',
        value: 'period',
    },
])

const loading = ref(false);
const itemsPerPage = ref(10);
const totalItems = ref(0);
const serverItems = ref([]);
const headers = ref([
    { title: 'Date', align: 'start', key: 'date' },
    { title: 'Cost', align: 'start', key: 'cost' },
    { title: 'Plan', align: 'start', key: 'plan' },
    { title: 'Status', align: 'start', key: 'status' },
]);
// Table



// Get Payment History

const getPaymentHistory = async () => {
    loading.value = true;
    try {
        const paymentCollectionRef = collection(db, 'Payments', userUid.value, 'History');
        const paymentSnapshot = await getDocs(paymentCollectionRef);
        const paymentData = paymentSnapshot.docs.map(doc => {
            const paymentDate = doc.data().paymentDate.toDate().toISOString().split('T')[0];
            return { ...doc.data(), date: paymentDate };
        });
        console.log(paymentData);
        serverItems.value = paymentData;
    } catch (error) {
        console.log(error);
    }
    loading.value = false;
};
// Get Payment History



// Cancel subscription 
const cancelSubscriptionDialog = ref(false);



// Cancel subscription 

</script>