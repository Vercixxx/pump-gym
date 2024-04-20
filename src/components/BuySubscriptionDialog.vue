<template>

    <!-- Dialog buy -->
    <v-dialog v-model="buyDialog" persistent max-width="800" style="background-color: rgba(20, 20, 20, 0.9);">
        <v-card>
            <v-card-title>
                <v-row>

                    <v-col cols="1"></v-col>
                    <v-col cols="10" class="headline text-h4" align=center>
                        Purchase details
                    </v-col>
                    <v-col cols="1" align="end">
                        <v-btn icon="mdi-close" variant="plain" @click="closeBuyDialog()"></v-btn>
                    </v-col>
                </v-row>
            </v-card-title>

            <v-card-text>

                <div class="backdrop-blur-3xl">

                    <v-row>
                        <v-col align="start">
                            <v-table hover>
                                <tbody>
                                    <tr>
                                        <td class="font-weight-black text-xl">Type</td>
                                        <td class="text-md">{{ buyDialogData.name }}</td>
                                    </tr>

                                    <tr>
                                        <td class="font-weight-black text-xl">Period</td>
                                        <td class="text-md">
                                            <span v-if="buyDialogData.period == 1">1 month</span>
                                            <span v-else>
                                                {{ buyDialogData.period }} months
                                            </span>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td class="font-weight-black text-xl">Description</td>
                                        <td class="text-md">

                                            {{ buyDialogData.description }} ??

                                        </td>
                                    </tr>

                                    <tr>
                                        <td class="font-weight-black text-xl">Price</td>
                                        <td class="text-md">{{ buyDialogData.price }}</td>
                                    </tr>
                                </tbody>
                            </v-table>

                        </v-col>


                        <!-- Image -->
                        <v-col align="center">
                            <v-img :aspect-ratio="1" class="rounded-lg" :src="buyDialogData.image" width="300"
                                cover></v-img>
                        </v-col>
                        <!-- Image -->
                    </v-row>




                    <stripe-checkout ref="checkoutRef" mode="payment" :pk="publishableKey" :line-items="lineItems"
                        :success-url="successURL" :cancel-url="cancelURL" @loading="v => loading = v" />

                    <v-card-actions>
                        <v-btn class="mt-4" color="success" block size="large" @click="submit" variant="elevated"
                            :loading="loading">Buy for {{
                                buyDialogData.price }} zł</v-btn>


                    </v-card-actions>

                </div>


            </v-card-text>
        </v-card>
    </v-dialog>
    <!-- Dialog buy -->



</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { usePiniaStorage } from '../store/pinia';
import { loadStripe } from '@stripe/stripe-js';


// Pinia
const store = usePiniaStorage();
const buyDialog = computed(() => store.buyDialog);
const buyDialogData = computed(() => store.buyDialogData);

function closeBuyDialog() {
    store.closeBuyDialog();
}
// Pinia



// Stripe
const publishableKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;
const loading = ref(false);

let stripe: any;
loadStripe(publishableKey).then((s) => {
    stripe = s;
});

const lineItems = ref([
    {
        price: 'price_1OyamG09gQOP4k1JDE1Q6E5b',
        quantity: 1,
    },
]);

const successURL = 'http://localhost:5173/payment-successful';
const cancelURL = 'http://localhost:5173/subscriptions';

async function submit() {

    if (!stripe) {
        console.error('Stripe has not been initialized');
        return;
    }

    loading.value = true;

    const { error } = await stripe.redirectToCheckout({
        lineItems: lineItems.value,
        mode: 'payment',
        successUrl: successURL,
        cancelUrl: cancelURL,
    });

    if (error) {
        console.error(error);
    }

    loading.value = false;
}


// Stripe


</script>