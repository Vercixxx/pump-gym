<template>
    <!-- Desktop -->
    <v-app-bar v-if="!$vuetify.display.mobile" color="" class="px-5" elevation="0">
        <v-row>

            <v-col cols="3" justify="space-around">

                <span v-if="!loggedUser">
                    <v-btn size="large" class="rounded-pill me-5" color="success" variant="elevated"
                        text="Buy subscription" @click="goTo('/subscriptions')" prepend-icon="mdi-card-account-details"></v-btn>
                    <v-btn size="large" class="rounded-pill" color="primary" variant="outlined" text="Client panel"
                        @click="invokeLoginDialog" prepend-icon="mdi-account-circle"></v-btn>
                </span>

                <span v-else>
                    <v-btn size="large" @click="goTo('/dashboard')" append-icon="mdi-home-circle" text="My dashboard"
                        color="success" variant="tonal" class="me-3"></v-btn>

                    <v-btn size="large" class="rounded-pill" color="red" variant="elevated" text="Sign out"
                        append-icon="mdi-logout" @click="signOutUser()"></v-btn>
                </span>


            </v-col>


            <v-col cols="3" align="center" justify="center" class="text-h3 font-weight-black"
                style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);" @click="goTo('/')" role="button">

                <v-avatar size="50" class="me-2" image="src/images/logo.png">
                </v-avatar>

                <span style="letter-spacing: 5px;">
                    Pump Gym
                </span>
            </v-col>


            <v-col cols="6" align="end" justify="center">


                <v-btn size="large" v-for="button in menuButtons" :key="button.id" class="font-weight-black mt-1"
                    color="black" @click="goTo(button.route)" :prepend-icon="button.icon">
                    {{ button.title }}
                </v-btn>

                <v-btn size="large" class="font-weight-black mt-1" color="black" prepend-icon="mdi-account-group"
                    @click="openWorkWithUsDialog">
                    Work with us
                </v-btn>

                <v-btn size="large" class="font-weight-black mt-1" color="black" prepend-icon="mdi-phone"
                    @click="openContactUsDialog">
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

        <v-avatar size="50" class="me-2" image="src/images/logo.png">
        </v-avatar>
    </v-app-bar>
    <!-- Mobile -->
</template>

<script>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { usePiniaStorage } from '../store/pinia';
import { auth } from '../firebase.js';
import { signOut } from 'firebase/auth';

export default {
    name: 'AppBar',
    setup(_, { root }) {

        const menuButtons = ref([
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
            // {
            //     id: 4,
            //     title: 'Schedule',
            //     icon: 'mdi-calendar',
            //     route: '/schedule',
            // },
        ]);


        // Pinia
        const store = usePiniaStorage();
        const loggedUser = computed(() => store.userData);

        const invokeLoginDialog = () => {
            store.openLoginDialog();
        };

        const openWorkWithUsDialog = () => {
            store.openWorkWithUsDialog();
        };

        const openContactUsDialog = () => {
            store.openContactUsDialog();
        };

        // Pinia
        const router = useRouter();
        const goTo = (route) => {
            router.push(route);
        };

        // Logout
        const signOutUser = async () => {
            try {
                await signOut(auth);

                store.emptyUserData();

                store.showAlert('success', 'You have been signed out');
                goTo('/');
            } catch (error) {
                store.showAlert('error', error);
            }
        };
        // Logout

        return {
            menuButtons,
            loggedUser,
            invokeLoginDialog,
            openWorkWithUsDialog,
            openContactUsDialog,
            goTo,
            signOutUser,
        };
    },
};
</script>