<template>

    <!-- Dialog buy -->
    <v-dialog v-model="buyDialog" persistent max-width="850 " style="background-color: rgba(100, 100, 100, 0.9);">
        <v-card :image="buyDialogData.image">
            <v-card-title style="background-color: rgba(250, 250, 250, 0.8);">
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

            <v-card-text style="background-color: rgba(250, 250, 250, 0.8);">

                <v-card elevation="0" style="background-color: rgba(250, 250, 250, 0);">

                    <v-card-text>

                        <!-- Choosen subscription -->
                        <v-row>
                            <v-col cols="auto" class="font-weight-black">
                                Choosen subscription
                            </v-col>

                            <v-col align="start">
                                {{ buyDialogData.name }}
                            </v-col>
                        </v-row>
                        <!-- Choosen subscription -->

                        <!-- Subscription period -->
                        <v-row>
                            <v-col cols="auto" class="font-weight-black">
                                Subscription period
                            </v-col>

                            <v-col align="start">
                                <span v-if="buyDialogData.period == 1">1 month</span>
                                <span v-else>
                                    {{ buyDialogData.period }} months
                                </span>
                            </v-col>
                        </v-row>
                        <!-- Subscription period -->

                        <!-- Price -->
                        <v-row>
                            <v-col cols="auto" class="font-weight-black">
                                Price
                            </v-col>

                            <v-col align="start">
                                {{ buyDialogData.price }} zł
                            </v-col>
                        </v-row>
                        <!-- Price -->
                    </v-card-text>

                    <stripe-checkout ref="checkoutRef" mode="payment" :pk="publishableKey" :line-items="lineItems"
                        :success-url="successURL" :cancel-url="cancelURL" @loading="v => loading = v" />

                    <v-card-actions>
                        <v-btn color="success" block size="large" @click="submit" variant="elevated" :loading="loading">Buy ({{
                            buyDialogData.price }} zł)</v-btn>



                    </v-card-actions>

                </v-card>


            </v-card-text>
        </v-card>
    </v-dialog>
    <!-- Dialog buy -->



</template>

<script>
import { ref, computed } from 'vue';
import { usePiniaStorage } from '../store/pinia.js';
import { StripeCheckout } from '@vue-stripe/vue-stripe';

export default {
    components: {
        StripeCheckout,
    },
    setup() {
        // Dialog
        const store = usePiniaStorage();
        const buyDialog = computed(() => store.buyDialog);
        const buyDialogData = computed(() => store.buyDialogData);
        function closeBuyDialog() {
            store.closeBuyDialog();
        }

        // Dialog


        // Stripe
        const publishableKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;
        const loading = ref(false);
        const lineItems = ref([
            {
                price: 'price_1OyamG09gQOP4k1JDE1Q6E5b',
                quantity: 1,
            },
        ]);
        const successURL = 'http://localhost:5173/subscriptions';
        const cancelURL = 'http://localhost:5173/subscriptions';

        function submit() {
            this.$refs.checkoutRef.redirectToCheckout();
        }
        // Stripe



        return {
            // Dialog
            closeBuyDialog,
            buyDialog,
            buyDialogData,
            // Dialog

            // Stripe
            publishableKey,
            loading,
            lineItems,
            successURL,
            cancelURL,
            submit,
            // Stripe
        };
    },
};
</script>