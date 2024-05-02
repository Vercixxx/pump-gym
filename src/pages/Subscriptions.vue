<template>
    <!-- <v-row>
        <v-col class="d-flex justify-center align-center">

            <div class="pa-4 rounded-xl text-center backdrop-blur-md subpixel-antialiased text-xl tracking-wider ">

            </div>


        </v-col>

    </v-row> -->

    <div class="mt-20">




        <v-row>
            <v-col cols="12" align="center" class="rounded-s text-3xl py-2 my-2 font-weight-black backdrop-blur-xl mb-8"
                :class="darkMode ? ' bg-black/70' : ' bg-white/30'">
                Subscriptions
            </v-col>
        </v-row>

        <div class="d-flex justify-center align-center flex-column">



            <div
                class="pa-4 rounded-xl text-center  subpixel-antialiased text-xl align-center tracking-wider ">




                <!-- Regular subscriptions -->


                <v-row>
                    <v-col cols="6" sm="2" v-for="subscription in regularSubscriptions" :key="subscription.name"
                        align="center" style="min-height: 75dvh">


                        <div class="rounded-3xl border border-indigo-600 transform transition-all hover:-translate-y-6 duration-300 shadow-lxl hover:shadow-2xl hover:shadow-indigo-500/50  backdrop-blur-3xl backdrop-brightness-50 text-white "
                            :class="[
                                $vuetify.display.smAndDown ? 'w-100' : '',
                                { 'grayscale': hoveredSubscription && hoveredSubscription.name !== subscription.name },
                                { 'brightness-125': hoveredSubscription && hoveredSubscription.name === subscription.name }
                            ]" max-width="374" rounded="xl" @mouseover="handleMouseOver(subscription)"
                            @mouseout="handleMouseOut">

                            <v-img height="200" :src="subscription.image" cover
                                class="brightness-75 rounded-t-3xl"></v-img>

                            <v-card-item>
                                <v-card-title>{{ subscription.name }}</v-card-title>

                                <v-card-subtitle>
                                    <span class="me-1">Regular subscription</span>

                                    <v-icon color="success" icon="mdi-fire-circle" size="small"></v-icon>
                                </v-card-subtitle>
                            </v-card-item>



                            <v-card-text>

                                <div class=" text-subtitle-1">
                                    $ {{ subscription.price }}
                                </div>

                                <v-divider thickness="5"></v-divider>

                                <div>
                                    <v-list density="compact" class="bg-transparent" rounded="shaped">
                                        <v-list-item v-for="item in subscription.description" class="">
                                            <v-list-item-icon>
                                                <v-icon>mdi-check</v-icon>
                                            </v-list-item-icon>
                                            {{ item }}
                                        </v-list-item>
                                    </v-list>
                                </div>
                            </v-card-text>


                            <v-card-actions class="bg-indigo-600 rounded-b-3xl hover:font-black hover:bg-indigo-800"
                                @click="handleBuyClick(subscription)">

                                <v-row>
                                    <v-col align="center">
                                        <div v-if="!loggedUser.subscription" class="w-100 cursor-pointer">
                                            <span v-if="loggedUser == null">
                                                Buy {{ subscription.name }} plan
                                            </span>

                                            <span v-else>
                                                Select {{ subscription.name }} plan
                                            </span>
                                        </div>

                                        <div v-else class="font-light">
                                            You already have a subscription
                                        </div>
                                    </v-col>
                                </v-row>

                            </v-card-actions>
                        </div>

                    </v-col>


                    <v-col cols="6" sm="2" v-for="subscription in specialSubscriptions" :key="subscription.name"
                        align="center">


                        <div class="rounded-3xl border-2 border-indigo-600 transform transition-all hover:-translate-y-6 duration-300 shadow-lxl hover:shadow-2xl hover:shadow-indigo-500/50 backdrop-blur-3xl backdrop-brightness-50 text-white"
                            :class="[
                                $vuetify.display.smAndDown ? 'w-100' : '',
                                { 'grayscale': hoveredSubscription && hoveredSubscription.name !== subscription.name },
                                { 'brightness-125': hoveredSubscription && hoveredSubscription.name === subscription.name }
                            ]" max-width="374" rounded="xl" @mouseover="handleMouseOver(subscription)"
                            @mouseout="handleMouseOut">

                            <v-img height="200" :src="subscription.image" cover
                                class="brightness-75 rounded-t-3xl"></v-img>

                            <v-card-item>
                                <v-card-title>{{ subscription.name }}</v-card-title>

                                <v-card-subtitle>
                                    <span class="me-1">Regular subscription</span>

                                    <v-icon color="success" icon="mdi-fire-circle" size="small"></v-icon>
                                </v-card-subtitle>
                            </v-card-item>



                            <v-card-text>

                                <div class=" text-subtitle-1">
                                    $ {{ subscription.price }}
                                </div>

                                <v-divider thickness="5"></v-divider>

                                <div>
                                    <v-list density="compact" class="bg-transparent" rounded="shaped">
                                        <v-list-item v-for="item in subscription.description" class="">
                                            <v-list-item-icon>
                                                <v-icon>mdi-check</v-icon>
                                            </v-list-item-icon>
                                            {{ item }}
                                        </v-list-item>
                                    </v-list>
                                </div>
                            </v-card-text>



                            <v-card-actions class="bg-indigo-600 rounded-b-3xl hover:font-black hover:bg-indigo-800"
                                @click="handleBuyClick(subscription)">

                                <v-row>
                                    <v-col align="center">
                                        <div v-if="!loggedUser.subscription" class="w-100 cursor-pointer">
                                            <span v-if="loggedUser == null">
                                                Buy {{ subscription.name }} plan
                                            </span>

                                            <span v-else>
                                                Select {{ subscription.name }} plan
                                            </span>
                                        </div>

                                        <div v-else class="font-light">
                                            You already have a subscription
                                        </div>
                                    </v-col>
                                </v-row>

                            </v-card-actions>
                        </div>

                    </v-col>
                </v-row>
                <!-- Regular subscriptions -->


            </div>
        </div>


    </div>
</template>


<script setup lang="ts">
import { ref, computed } from 'vue';
import { usePiniaStorage } from '../store/pinia';



const loading = ref(true);
const dialogBuy = ref(false);
const selectedSubscription = ref(null);


// Pinia
const store = usePiniaStorage();
const loggedUser = computed(() => store.userData ? store.userData : false);
const regularSubscriptions = computed(() => store.subscriptions.regular);
const specialSubscriptions = computed(() => store.subscriptions.special);

function openLoginDialog() {
    store.openLoginDialog();
};

const showBuyDialog = (subscription) => {
    store.invokeBuyDialog(subscription);
};
// Pinia

// Theme
import { useTheme } from 'vuetify'
const theme = useTheme();
const darkMode = computed(() => theme.name.value === 'dark');
// Theme


// Handle buy click
const handleBuyClick = (subscription) => {

    if (loggedUser.value == false) {
        openLoginDialog();
    }
    else if (loggedUser.value.subscription) {
    }
    else {
        showBuyDialog(subscription);
    }
};
// Handle buy click



// Grey another subscriptions
const hoveredSubscription = ref(null)

const handleMouseOver = (subscription) => {
    hoveredSubscription.value = subscription
}

const handleMouseOut = () => {
    hoveredSubscription.value = null
}
// Grey another subscriptions

</script>
