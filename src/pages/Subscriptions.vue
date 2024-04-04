<template>
    <div>
        <v-parallax
            src="https://web-back.perfectgym.com/sites/default/files/styles/460x/public/equipment%20%286%29.jpg?itok=bC0T32-K"
            class="ma-0 pa-0">
            <v-container>

                <v-row>
                    <v-col cols="12" align=center>
                        <h2 class="rounded-s text-h4 py-8 font-weight-black backdrop-blur-xl"
                            :class="darkMode ? ' bg-black/70' : ' bg-white/30'">
                            Special subscriptions
                        </h2>
                    </v-col>
                </v-row>

                <v-row class="mb-10" align="center" justify="center">
                    <v-col cols="12" sm="6" v-for="subscription in specialSubscriptions" :key="subscription.id"
                        align="center" justify="center">
                        <v-card class="mx-auto v-card-hover" height="500" elevation="16" variant="elevated"
                            :image="subscription.image">

                            <div class="ma-10 d-flex flex-column backdrop-blur-md"
                                :class="darkMode ? ' bg-black/50' : ' bg-white/50'">


                                <v-card-title align="center" class="font-weight-bold mb-2">
                                    {{ subscription.name }}
                                </v-card-title>

                                <v-card-subtitle>
                                    <span class="font-weight-bold">
                                        Price - {{ subscription.price }}
                                    </span> ({{ subscription.type }})
                                </v-card-subtitle>

                                <v-card-text>{{ subscription.description }}</v-card-text>


                                <!-- User not logged in -->
                                <v-row v-if="loggedUser == null" class="ma-5" align="end" justify="end">
                                    <v-col>
                                        <v-btn block color="success" @click="openLoginDialog">Buy {{ subscription.name
                                            }} plan ({{
                                subscription.price
                            }}zł)</v-btn>
                                    </v-col>
                                </v-row>
                                <!-- User not logged in -->


                                <!-- User logged in -->
                                <v-row v-else class="ma-5" align="end" justify="end">
                                    <v-col>
                                        <v-btn block color="success" @click="showBuyDialog(subscription)">Select {{
                                subscription.name }} plan ({{
                                subscription.price
                            }}zł)</v-btn>
                                    </v-col>
                                </v-row>
                                <!-- User logged in -->

                            </div>

                        </v-card>
                    </v-col>
                </v-row>


                <v-row>
                    <v-col cols="12" align=center>
                        <h2 class="rounded-s text-h4 py-8 font-weight-black backdrop-blur-xl"
                            :class="darkMode ? ' bg-black/70' : ' bg-white/30'">
                            Regular subscriptions
                        </h2>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" sm="3" v-for="subscription in regularSubscriptions" :key="subscription.id">
                        <v-card class="mx-auto v-card-hover" height="500" elevation="16" variant="elevated"
                            :image="subscription.image">

                            <div class="ma-10 d-flex flex-column backdrop-blur-md" :class="darkMode? ' bg-black/50':' bg-white/50'">
                                <v-card-title align="center" class="font-weight-bold">
                                    {{ subscription.name }}
                                </v-card-title>

                                <v-card-subtitle>
                                    <span class="font-weight-bold">
                                        Price - {{ subscription.price }}
                                    </span> ({{ subscription.type }})
                                </v-card-subtitle>

                                <v-card-text>{{ subscription.description }}</v-card-text>


                                <!-- User not logged in -->
                                <v-row v-if="loggedUser == null" class="ma-5" align="end" justify="end">
                                    <v-col>
                                        <v-btn block color="success" @click="openLoginDialog">Buy {{ subscription.name
                                            }} plan ({{
                                subscription.price
                            }}zł)</v-btn>
                                    </v-col>
                                </v-row>
                                <!-- User not logged in -->


                                <!-- User logged in -->
                                <v-row v-else class="ma-5" align="end" justify="end">
                                    <v-col>
                                        <v-btn block color="success" @click="showBuyDialog(subscription)">Select {{
                                            subscription.name }} plan ({{
                                            subscription.price
                                            }}zł)</v-btn>
                                    </v-col>
                                </v-row>
                                <!-- User logged in -->

                            </div>
                        </v-card>
                    </v-col>
                </v-row>

            </v-container>




        </v-parallax>

    </div>
</template>


<script setup lang="ts">
import { ref, computed } from 'vue';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase.js';
import { usePiniaStorage } from '../store/pinia';



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

</script>


<style scoped>
.v-card-hover {
    transition: transform 0.3s ease-in-out;
    position: relative;
}

.v-card-hover:hover {
    transform: scale(1.1);
    z-index: 1;
}

.v-card-hover::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    z-index: -1;
}

.v-card-hover:hover::before {
    opacity: 1;
}
</style>