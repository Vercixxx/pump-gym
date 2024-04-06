<template>
    <!-- Desktop -->
    <v-app-bar v-if="$vuetify.display.width > 1730" class="px-3 pt-1 pb-1" elevation="0"
        :color="darkMode ? 'rgb(30 46 84)' : 'rgb(226 232 240)'">
        <v-row>

            <v-col cols="auto" justify="space-around">



                <button v-if="!loggedUser" :class="darkMode ? 'bg-slate-800 text-white' : ''"
                    @click="goTo('/subscriptions')"
                    class="relative mx-3 py-2 px-8 text-black text-base font-bold nded-full overflow-hidden bg-slate-200 rounded-lg transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-indigo-500 before:to-indigo-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-lg hover:before:left-0">
                    Buy subscription
                    <v-icon class="ps-3" size="30">mdi-card-account-details</v-icon>
                </button>

                <button v-else :class="darkMode ? 'bg-slate-800 text-white' : ''" @click="goTo('/subscriptions')"
                    class="relative mx-3 py-2 px-8 text-black text-base font-bold nded-full overflow-hidden bg-slate-200 rounded-lg transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-indigo-500 before:to-indigo-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-lg hover:before:left-0">
                    Buy subscription
                    <v-icon class="ps-3" size="30">mdi-card-account-details</v-icon>
                </button>



                <button v-if="!loggedUser" :class="darkMode ? 'bg-slate-800 text-white' : ''" @click="invokeLoginDialog"
                    class="relative mx-3 py-2 px-8 text-black text-base font-bold nded-full overflow-hidden bg-slate-200 rounded-lg transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-indigo-500 before:to-indigo-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-lg hover:before:left-0">
                    Client panel
                    <v-icon class="ps-3" size="30">mdi-account-circle</v-icon>
                </button>

                <button v-else>
                    <v-btn class="logOutStyle" size="large" :class="darkMode ? 'text-white' : 'text-black '"
                        @click="signOutUser()">
                        <div class="svg-wrapper-1">
                            <div class="svg-wrapper">
                                <svg width="20px" height="20px" viewBox="0 0 15 15" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M1 1L8 1V2L2 2L2 13H8V14H1L1 1ZM10.8536 4.14645L14.1932 7.48614L10.8674 11.0891L10.1326 10.4109L12.358 8L4 8V7L12.2929 7L10.1464 4.85355L10.8536 4.14645Z"
                                        :fill="darkMode ? '#FFF' : '#000'" />
                                </svg>
                            </div>
                        </div>
                        <span>Logout</span>
                    </v-btn>
                </button>


            </v-col>


            <v-col cols="3" align="start" justify="center" class="text-h3 font-weight-black"
                style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);" @click="goTo('/')" role="button">

                <v-avatar class="mx-2" image="src/images/logo.png">
                </v-avatar>

                <span style="letter-spacing: 3px;" :class="darkMode ? 'text-white' : ''">
                    Pump Gym
                </span>
            </v-col>


            <v-col align="end" justify="center">


                <v-btn size="large" v-for="button in menuButtons" :key="button.id"
                    class="font-weight-black mt-1 me-2 buttonBuy" :class="darkMode ? 'text-white' : ''" color="black"
                    @click="goTo(button.route)" :prepend-icon="button.icon">
                    {{ button.title }}
                </v-btn>

                <v-btn size="large" class="font-weight-black mt-1 me-2 buttonBuy" :class="darkMode ? 'text-white' : ''"
                    color="black" prepend-icon="mdi-account-group" @click="openWorkWithUsDialog">
                    Work with us
                </v-btn>

                <v-btn size="large" class="font-weight-black mt-1 me-2 buttonBuy" :class="darkMode ? 'text-white' : ''"
                    color="black" prepend-icon="mdi-phone" @click="openContactUsDialog">
                    Contact
                </v-btn>


            </v-col>



        </v-row>



    </v-app-bar>
    <!-- Desktop -->

    <!-- Mobile -->
    <v-app-bar v-else density="compact" class="px-5" :color="darkMode ? 'rgb(15 23 42)' : 'white'"
        :class="darkMode ? 'text-white' : ''">
        <v-row>
            <v-col cols="auto">
                <input type="checkbox" id="drawer-toggle" class="relative sr-only peer" checked @click="useDrawer()">
                <label for="drawer-toggle"
                    class="inline-block p-3 transition-all duration-500 rounded-pill peer-checked:rotate-180">
                    <v-icon :color="darkMode ? 'white':'black'" size="45">mdi-menu-up</v-icon>
                </label>
            </v-col>

            <v-col align="center" class="text-4xl pt-6">
                Pump gym
            </v-col>


            <v-col cols="auto" align="end" class="pt-5">
                <v-avatar size="50" image="src/images/logo.png" @click="goTo('/')">
                </v-avatar>
            </v-col>
        </v-row>


    </v-app-bar>
    <!-- Mobile -->
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { usePiniaStorage } from '../store/pinia';
import { auth } from '../firebase.js';
import { signOut } from 'firebase/auth';


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


const router = useRouter();
const goTo = (route) => {
    router.push(route);
};
// Pinia


// Drawer
const useDrawer = () => {
    store.useDrawer();
};
// Drawer


// Theme
import { useTheme } from 'vuetify'
const theme = useTheme();
const darkMode = computed(() => theme.name.value === 'dark');
// Theme

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

</script>



<style scoped>
@import './../assets/buttonBuy.css';
@import './../assets/logOutStyle.css';
</style>