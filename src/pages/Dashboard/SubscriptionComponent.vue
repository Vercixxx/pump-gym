<template>
    <v-card elevation="0"  class="mt-3 pa-5" style="background-color: rgba(250, 250, 250, 0.8);">
        <v-card-title>Subscription</v-card-title>

        <v-card-text>
            You don't have a subscription yet. Buy one to access all the features.
            <v-btn color="success" @click="goTo('/subscriptions')" variant="pain" class="font-weight-black">Buy
                subscription
                now!</v-btn>
        </v-card-text>
    </v-card>

</template>

<script>
import { useRouter } from 'vue-router';

export default {
    name: 'SubscriptionComponent',

    setup() {
        const router = useRouter();
        const goTo = (route) => {
            router.push(route);
        };

        return {
            goTo,
        }

    },
}
</script>