<template>
    <!-- Desktop -->
    <v-app-bar v-if="$vuetify.display.width > 1730" class="" elevation="0"
        :style="darkMode ? 'background-color:rgba(20, 20, 20, 0.6)' : 'background-color:rgba(200, 200, 200, 0.6)'">
        <v-row>



            <v-col cols="3" align="center" justify="center" class="text-h3 font-weight-black"
                style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);" @click="goTo('/')" role="button">

                <v-avatar class="mx-2" size="70"
                    image="https://firebasestorage.googleapis.com/v0/b/pump-gym-f72c7.appspot.com/o/Images%2Flogo.png?alt=media&token=8504510e-a373-4235-9811-da7abd576c0d">
                </v-avatar>

                <span style="letter-spacing: 3px;" :class="darkMode ? 'text-white' : ''">
                    Pump Gym
                </span>
            </v-col>


            <v-col align="end" justify="center" class="mt-3">


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

            <v-col cols="auto" justify="space-around" class="mt-3">

                <!-- User not logged in  -->
                <span v-if="!loggedUser">

                    <button :class="darkMode ? 'bg-slate-800 text-white' : ''" @click="invokeLoginDialog"
                        class="relative mx-3 py-2 px-8 text-black text-base font-bold nded-full overflow-hidden bg-slate-300 rounded-lg transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-indigo-500 before:to-indigo-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-lg hover:before:left-0">
                        Client panel
                        <v-icon class="ps-3" size="30">mdi-account-circle</v-icon>
                    </button>


                </span>
                <!-- User not logged in  -->


                <!-- User logged in -->
                <span v-else>

                    <button :class="darkMode ? 'bg-slate-800 text-white border' : ''" @click="signOutUserDialog"
                        class="relative mx-3 py-2 px-8 text-black text-base font-bold nded-full overflow-hidden bg-slate-300 rounded-lg transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-indigo-500 before:to-indigo-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-lg hover:before:left-0">
                        Logout
                        <v-icon class="ps-3" size="30">mdi-logout</v-icon>
                    </button>


                    <button v-if="loggedUser.role != 'Admin'" :class="darkMode ? 'bg-slate-800 text-white border' : ''"
                        @click="goTo('/dashboard')"
                        class="relative mx-3 py-2 px-8 text-black text-base font-bold nded-full overflow-hidden bg-slate-300 rounded-lg transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-indigo-500 before:to-indigo-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-lg hover:before:left-0">
                        Client panel
                        <v-icon class="ps-3" size="30">mdi-account-circle</v-icon>
                    </button>

                    <button v-else :class="darkMode ? 'bg-slate-800 text-white border' : ''"
                        @click="goTo('/admin/dashboard')"
                        class="relative mx-3 py-2 px-8 text-black text-base font-bold nded-full overflow-hidden bg-slate-300 rounded-lg transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-indigo-500 before:to-indigo-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-lg hover:before:left-0">
                        Admin
                        <v-icon class="ps-3" size="30">mdi-security</v-icon>
                    </button>

                </span>
                <!-- User logged in -->

            </v-col>



        </v-row>



    </v-app-bar>
    <!-- Desktop -->

    <!-- Mobile -->
    <v-app-bar v-else app density="compact" class="px-5 pb-2" elevation="0"
        :color="darkMode ? 'rgb(15 23 42)' : 'rgb(215 223 242)'" :class="darkMode ? 'text-white' : ''" >
        <v-row>
            <v-col cols="auto" class="d-flex justify-center align-center mt-1">

                <div class="text-center subpixel-antialiased ">

                    <label>
                        <div class="w-9 h-10 cursor-pointer flex flex-col items-center justify-center">
                            <input class="hidden peer" type="checkbox" @click="useDrawer()">
                            <div class="w-[50%] h-[2px] rounded-sm transition-all duration-300 origin-left translate-y-[0.45rem] peer-checked:rotate-[-45deg]"
                                :class="darkMode ? 'bg-white' : 'bg-black'">
                            </div>
                            <div class="w-[50%] h-[2px] rounded-md transition-all duration-300 origin-center peer-checked:hidden"
                                :class="darkMode ? 'bg-white' : 'bg-black'">
                            </div>
                            <div class="w-[50%] h-[2px] rounded-md transition-all duration-300 origin-left -translate-y-[0.45rem] peer-checked:rotate-[45deg]"
                                :class="darkMode ? 'bg-white' : 'bg-black'">
                            </div>
                        </div>
                    </label>
                </div>

            </v-col>

            <v-col align="start" class="text-2xl pt-7" @click="goTo('/')">
                Pump gym
            </v-col>


            <v-col cols="auto" align="end" class="pt-5">
                <v-avatar size="50"
                    image="https://firebasestorage.googleapis.com/v0/b/pump-gym-f72c7.appspot.com/o/Images%2Flogo.png?alt=media&token=8504510e-a373-4235-9811-da7abd576c0d"
                    @click="goTo('/')">
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
    // {
    //     id: 1,
    //     title: 'Subscriptions',
    //     icon: 'mdi-card-account-details',
    //     route: '/subscriptions',
    // },
    // {
    //     id: 2,
    //     title: 'Activities',
    //     icon: 'mdi-dumbbell',
    //     route: '/activities',
    // },
    // {
    //     id: 3,
    //     title: 'Our Trainers',
    //     icon: 'mdi-weight-lifter',
    //     route: '/trainers',
    // },
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
// Ask the user if they are sure they want to sign out

const signOutUserDialog = () => {
    store.openDialog(
        'Are you sure you want to sign out?',
        '',
        'No',
        () => {
            store.closeDialog();
        },
        'Yes',
        () => {
            signOutUser();
            store.closeDialog();
        }
    )
};
// Ask the user if they are sure they want to sign out

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