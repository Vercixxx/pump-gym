<template>
    <!-- Drawer -->
    <v-navigation-drawer v-model="drawer" location="top" temporary
        :color="darkMode ? 'rgb(15 23 42)' : 'rgb(226 232 240)'" :class="darkMode ? 'text-white' : ''"
        style="height: auto;">

        <v-divider></v-divider>

        <v-list density="compact" nav>
            <v-list-item v-if="!loggedUser" prepend-icon="mdi-card-account-details" title="Subscriptions" value="Subscriptions"
                @click="goTo('/subscriptions')"></v-list-item>

            <!-- Admin -->
            <v-list-item v-else-if="loggedUser.role == 'admin'" prepend-icon="mdi-security" title="Admin panel" value="Admin panel"
            @click="goTo('/admin/dashboard')" class="bg-success" ></v-list-item>
            <!-- Admin -->

            <v-list-item v-else prepend-icon="mdi-account" title="My profile" value="My profile"
                @click="goTo('/dashboard')" class="bg-success" ></v-list-item>

            <v-list-item v-for="button in menuButtons" :key="button.id" :prepend-icon="button.icon"
                :title="button.title" :value="button.title" @click="goTo(button.route)"></v-list-item>

            <v-list-item prepend-icon="mdi-account-group" title="Work with us" value="Work with us"
                @click="openWorkWithUsDialog"></v-list-item>
            <v-list-item prepend-icon="mdi-phone" title="Contact" value="Contact"
                @click="openContactUsDialog"></v-list-item>
        </v-list>

        <v-btn v-if="!loggedUser" block size="large" variant="tonal" text="Sign in" append-icon="mdi-login"
            class="bg-indigo-500 text-white" @click="invokeLoginDialog"></v-btn>

        <v-btn v-else block size="large" variant="tonal" text="Logout" append-icon="mdi-logout"
            class="bg-indigo-500 text-white" @click="signOutUser"></v-btn>

    </v-navigation-drawer>
    <!-- Drawer -->
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';


// Pinia
import { usePiniaStorage } from '../store/pinia';
const loggedUser = computed(() => store.userData);

const store = usePiniaStorage();
const drawer = computed(() => store.drawer);

const invokeLoginDialog = () => {
    store.openLoginDialog();
};

const openWorkWithUsDialog = () => {
    store.openWorkWithUsDialog();
};

const openContactUsDialog = () => {
    store.openContactUsDialog();
};


// Router
import { useRouter } from 'vue-router';
const router = useRouter();
const goTo = (route) => {
    router.push(route);
};
// Router

// Pinia


// Data
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
// Data


// Theme
import { useTheme } from 'vuetify'
const theme = useTheme();
const darkMode = computed(() => theme.name.value === 'dark');
// Theme


// Logout
import { auth } from '../firebase.js';
import { signOut } from 'firebase/auth';
const signOutUser = async () => {
    try {
        await signOut(auth);

        store.emptyUserData();

        store.closeDrawer();

        store.showAlert('success', 'You have been signed out');
        goTo('/');
    } catch (error) {
        store.showAlert('error', error);
    }
};
// Logout


</script>