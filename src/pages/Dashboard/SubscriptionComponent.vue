<template>
    <div>

        <h1>Subscription</h1>


        <v-btn color="primary" @click="goTo('/subscriptions')" variant="tonal">Buy subscription</v-btn>
    </div>

</template>

<script>
export default {
    name: 'SubscriptionComponent',

    data() {
        return {

        }
    },
    computed: {

    },
    methods: {
        goTo(route) {
            this.$router.push(route);
        },
    }
}
</script>