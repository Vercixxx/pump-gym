<template>
    <div>
        <v-parallax
            src="https://web-back.perfectgym.com/sites/default/files/styles/460x/public/equipment%20%286%29.jpg?itok=bC0T32-K"
            class="ma-0 pa-0">
            <v-container>

                <v-row>
                    <v-col cols="12" align=center>
                        <h2 style="background-color: rgba(250, 250, 250, 0.9);" class="rounded-s py-4">Special
                            subscriptions</h2>
                    </v-col>
                </v-row>

                <v-row class="mb-10" align="center" justify="center">
                    <v-col cols="12" sm="6" v-for="subscription in specialSubscriptions" :key="subscription.id"
                        align="center" justify="center">
                        <v-card class="mx-auto v-card-hover" height="500" elevation="16" variant="elevated"
                            :image="subscription.image">

                            <v-card style="background-color: rgba(250, 250, 250, 0.9);" height="420"
                                class="ma-10 d-flex flex-column">


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

                            </v-card>

                        </v-card>
                    </v-col>
                </v-row>


                <v-row>
                    <v-col cols="12" align=center>
                        <h2 style="background-color: rgba(250, 250, 250, 0.9);" class="rounded-s py-4">Regular
                            subscriptions</h2>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" sm="3" v-for="subscription in regularSubscriptions" :key="subscription.id">
                        <v-card class="mx-auto v-card-hover" height="500" elevation="16" variant="elevated"
                            :image="subscription.image">

                            <v-card style="background-color: rgba(250, 250, 250, 0.9);" height="420"
                                class="ma-10 d-flex flex-column">
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

                            </v-card>
                        </v-card>
                    </v-col>
                </v-row>

            </v-container>


            <!-- Dialog buy -->
            <v-dialog v-model="dialogBuy" persistent max-width="850 "
                style="background-color: rgba(100, 100, 100, 0.9);">
                <v-card>
                    <v-card-title>
                        <v-row>

                            <v-col cols="2"></v-col>
                            <v-col cols="8" class="headline text-h4" align=center>
                                Buy "{{ selectedSubscription.name }}" subscription
                            </v-col>
                            <v-col cols="2" align="end">
                                <v-btn icon="mdi-close" variant="plain" @click="dialogBuy = false"></v-btn>
                            </v-col>
                        </v-row>
                    </v-card-title>

                    <v-card-text>

                        <v-card :image="selectedSubscription.image">

                            <v-card-text style="background-color: rgba(250, 250, 250, 0.8);">
                                asd
                                {{ selectedSubscription }}
                            </v-card-text>

                            <v-card-actions style="background-color: rgba(250, 250, 250, 0.8);">
                                <v-btn color="success" block @click="dialogBuy = false" variant="elevated">Buy ({{
                                    selectedSubscription.price }} zł)</v-btn>
                            </v-card-actions>

                        </v-card>


                    </v-card-text>
                </v-card>
            </v-dialog>
            <!-- Dialog buy -->



        </v-parallax>

    </div>
</template>

<script>
import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import { db } from '../firebase.js'
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'Subscriptions',

    data() {
        return {
            loading: true,
            dialogBuy: false,
            selectedSubscription: null,
            regularSubscriptionsNames: ['Basic', 'Basic - 12', 'Open', 'Open - 12'],
            specialSubscriptionsNames: ['Student', 'Disabled person'],
            regularSubscriptions: [],
            specialSubscriptions: [],
        }
    },

    computed: {
        ...mapGetters(['loggedUser'])
    },

    mounted() {
        this.fetchSubscriptions();
    },

    methods: {
        ...mapActions(['openLoginDialog', 'closeLoginDialog', 'openSignUpDialog', 'triggerAlert', 'setRegularSubscription', 'setSpecialSubscription']),

        showBuyDialog(subscription) {
            this.selectedSubscription = subscription;
            this.dialogBuy = true;
        },


        async fetchSubscriptionByTypeName(type, name, outputArray) {
            try {
                const querySnapshot = await getDocs(collection(db, "Subscriptions", type, name));
                querySnapshot.forEach((doc) => {
                    console.log(doc.id, " => ", doc.data());
                    outputArray.push(doc.data());
                });

            } catch (error) {
                console.error(`Error getting ${name} document:`, error);
            }
        },

        async fetchSubscriptions(){
            for (let name of this.regularSubscriptionsNames) {
                this.fetchSubscriptionByTypeName('Regular', name, this.regularSubscriptions);
            }
            for (let name of this.specialSubscriptionsNames) {
                this.fetchSubscriptionByTypeName('Special', name, this.specialSubscriptions);
            }
            this.loading = false;
        },

    },



}
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