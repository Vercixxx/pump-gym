<template>
    <div :class="darkMode ? 'bg-slate-900' : 'bg-slate-200'">
        <!-- <v-parallax
            src="https://web-back.perfectgym.com/sites/default/files/styles/460x/public/equipment%20%286%29.jpg?itok=bC0T32-K"
            class="ma-0 pa-0"> -->
        <v-container>




            <!-- Special subscriptions -->
            <v-row>
                <v-col cols="12" align=center>
                    <h2 class="rounded-s text-h4 py-8 font-weight-black backdrop-blur-xl"
                        :class="darkMode ? ' bg-black/70' : ' bg-white/30'">
                        Special subscriptions
                    </h2>
                </v-col>
            </v-row>


            <v-row>
                <v-col cols="12" sm="6" v-for="subscription in specialSubscriptions" :key="subscription.id"
                    align="center">


                    <div class="rounded-3xl border-2 border-indigo-600 transform transition-all hover:-translate-y-2 duration-300 shadow-lxl hover:shadow-2xl hover:shadow-indigo-500/50"
                        :class="$vuetify.display.smAndDown ? 'w-100' : 'w-75'" max-width="374" rounded="xl">

                        <v-img height="250" :src="subscription.image" cover class="brightness-75 rounded-t-3xl"></v-img>

                        <v-card-item>
                            <v-card-title>{{ subscription.name }}</v-card-title>

                            <v-card-subtitle>
                                <span class="me-1">Special subscription</span>

                                <v-icon color="error" icon="mdi-fire-circle" size="small"></v-icon>
                            </v-card-subtitle>
                        </v-card-item>

                        <v-card-text>

                            <div class=" text-subtitle-1">
                                $ {{ subscription.price }}
                            </div>

                            <div>
                                {{ subscription.description }}
                            </div>
                        </v-card-text>

                        <v-divider class="mx-4" thickness="5"></v-divider>


                        <div class="w-100 rounded-b-3xl cursor-pointer font-black text-xl tracking-wide pt-5 pb-5"
                            :class="darkMode ? '' : 'bg-indigo-300/50'" @click="handleBuyClick(subscription)">
                            <span v-if="loggedUser == null">
                                Buy {{ subscription.name }} plan
                            </span>
                            <span v-else>
                                Select {{ subscription.name }} plan
                            </span>
                        </div>
                    </div>

                </v-col>
            </v-row>
            <!-- Special subscriptions -->



            <!-- Regular subscriptions -->
            <v-row>
                <v-col cols="12" align=center>
                    <h2 class="rounded-s text-h4 py-8 my-8 font-weight-black backdrop-blur-xl"
                        :class="darkMode ? ' bg-black/70' : ' bg-white/30'">
                        Regular subscriptions
                    </h2>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12" sm="3" v-for="subscription in regularSubscriptions" :key="subscription.id"
                    align="center">


                    <div class="rounded-3xl border-2 border-indigo-600 transform transition-all hover:-translate-y-2 duration-300 shadow-lxl hover:shadow-2xl hover:shadow-indigo-500/50"
                        :class="$vuetify.display.smAndDown ? 'w-100' : 'w-75'" max-width="374" rounded="xl">

                        <v-img height="250" :src="subscription.image" cover class="brightness-75 rounded-t-3xl"></v-img>

                        <!-- <img class="" :src="subscription.image" alt="..."> -->

                        <v-card-item>
                            <v-card-title>{{ subscription.name }}</v-card-title>

                            <v-card-subtitle>
                                <span class="me-1">Special subscription</span>

                                <v-icon color="error" icon="mdi-fire-circle" size="small"></v-icon>
                            </v-card-subtitle>
                        </v-card-item>

                        <v-card-text>

                            <div class=" text-subtitle-1">
                                $ {{ subscription.price }}
                            </div>

                            <div>
                                {{ subscription.description }}
                            </div>
                        </v-card-text>

                        <v-divider class="mx-4" thickness="5"></v-divider>


                        <div class="w-100 rounded-b-3xl cursor-pointer font-black text-xl tracking-wide pt-5 pb-5"
                            :class="darkMode ? '' : 'bg-indigo-300/50'" @click="handleBuyClick(subscription)">
                            <span v-if="loggedUser == null">
                                Buy {{ subscription.name }} plan
                            </span>
                            <span v-else>
                                Select {{ subscription.name }} plan
                            </span>
                        </div>
                    </div>

                </v-col>
            </v-row>
            <!-- Regular subscriptions -->

        </v-container>

        <!-- Footer -->
        <FooterComponent />
        <!-- Footer -->


        <!-- </v-parallax> -->

    </div>
</template>


<script setup lang="ts">
import { ref, computed, defineAsyncComponent } from 'vue';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase.js';
import { usePiniaStorage } from '../store/pinia';

const FooterComponent = defineAsyncComponent(() => import('../components/Footer.vue'));


const loading = ref(true);
const dialogBuy = ref(false);
const selectedSubscription = ref(null);


// Pinia
const store = usePiniaStorage();
const loggedUser = computed(() => store.userData);
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
    if (loggedUser.value == null) {
        openLoginDialog();
    } else {
        showBuyDialog(subscription);
    }
};
// Handle buy click


</script>
