<template>
    <!-- Desktop -->
    <v-app-bar v-if="!$vuetify.display.mobile" color="" class="px-5">
        <v-row>

            <v-col cols="3" justify="space-around">

                <span v-if="!loggedUser">
                    <v-btn size="large" class="rounded-pill me-5" color="success" variant="elevated"
                        text="Buy subscription" @click="goTo('/subscriptions')"></v-btn>
                    <v-btn size="large" class="rounded-pill" color="primary" variant="outlined" text="Client panel"
                        @click="openDialog"></v-btn>
                </span>

                <span v-else>

                    {{ loggedUser.user.email }}

                    <v-btn size="large" class="rounded-pill" color="red" variant="elevated" text="Sign out"
                        append-icon="mdi-logout" @click="signOut()"></v-btn>
                </span>


            </v-col>


            <v-col cols="3" align="center" justify="center" class="text-h3 font-weight-black"
                style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);" @click="goTo('/')" role="button">
                <span style="letter-spacing: 5px;">
                    Pump Gym
                </span>
            </v-col>


            <v-col cols="6" align="end" justify="center">


                <v-btn size="large" v-for="button in menuButtons" :key="button.id" class="font-weight-black mt-1"
                    color="black" @click="goTo(button.route)" :prepend-icon="button.icon">
                    {{ button.title }}
                </v-btn>

                <v-btn size="large" class="font-weight-black mt-1" color="black" prepend-icon="mdi-phone" @click="openContactUsDialog">
                    Contact
                </v-btn>


            </v-col>



        </v-row>



    </v-app-bar>
    <!-- Desktop -->

    <!-- Mobile -->
    <v-app-bar v-else density="compact" class="px-5">

        <template v-slot:prepend>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title>Pump gym</v-app-bar-title>
    </v-app-bar>
    <!-- Mobile -->
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import { auth } from '../firebase.js'
import { signOut } from 'firebase/auth'


export default {
    name: 'AppBar',


    data() {
        return {
            menuButtons: [
                {
                    id: 1,
                    title: 'Activities',
                    icon: 'mdi-dumbbell',
                    route: '/activities',
                },
                {
                    id: 2,
                    title: 'Our Trainers',
                    icon: 'mdi-weight-lifter',
                    route: '/trainers',
                },
                {
                    id: 3,
                    title: 'Work with us',
                    icon: 'mdi-account-group',
                    route: '/work',
                },
                {
                    id: 4,
                    title: 'Schedule',
                    icon: 'mdi-calendar',
                    route: '/schedule',
                },

            ]
        }
    },

    computed: {
        ...mapGetters(['loggedUser'])
    },

    methods: {
        ...mapActions(['openLoginDialog', 'openContactUsDialog' , 'triggerAlert', 'clearLoggedUser']),
        ...mapGetters(['loggedUser']),

        openDialog() {
            this.openLoginDialog();
        },

        goTo(route) {
            this.$router.push(route);
        },

        async signOut() {
            try {
                const response = await signOut(auth);
                this.clearLoggedUser();
                this.triggerAlert({
                    message: 'You have been signed out',
                    type: 'success'
                });
            } catch (error) {
                this.triggerAlert({
                    message: 'An error occurred while signing out',
                    type: 'error'
                });
            }
        }
    }
}
</script>