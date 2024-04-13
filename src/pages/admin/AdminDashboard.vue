<template>
    <v-parallax
        src="https://web-back.perfectgym.com/sites/default/files/styles/460x/public/equipment%20%286%29.jpg?itok=bC0T32-K"
        class="ma-0 pa-0">


        <v-row class="py-2 text-2xl ps-3"
            :style="darkMode ? 'background-color:rgb(30 46 84)' : 'background-color:rgb(226 232 240)'">
            <v-col cols="auto">
                <v-icon>
                    mdi-menu
                </v-icon>
            </v-col>
            <v-col>
                Admin menu
            </v-col>
        </v-row>

        <v-tabs v-model="tab" :bg-color="darkMode ? 'rgb(30 46 84)' : 'rgb(226 232 240)'"
            :class="darkMode ? 'text-white' : ''" color="basil" grow>
            <v-tab v-for="item in menu" :key="item" :value="item" @click="switchToComponent(item.component)">
                {{ item.title }}
            </v-tab>
        </v-tabs>



        <div>
            <component :is="selectedComponent"></component>
        </div>


        <!-- Footer -->
        <FooterComponent style="position: absolute; bottom: 0px; width: 100%;" />
        <!-- Footer -->

    </v-parallax>
</template>

<script setup lang="ts">

// Imports
import { onMounted, computed, ref, reactive } from 'vue';
import { usePiniaStorage } from '../../store/pinia';
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from '../../firebase.js';
import FooterComponent from '../../components/Footer.vue'
// Imports


// Pinia
const storage = usePiniaStorage();
const userData = computed(() => storage.userData);
// Pinia

// Theme
import { useTheme } from 'vuetify'
const theme = useTheme();
const darkMode = computed(() => theme.name.value === 'dark');
// Theme


// Menu 
const tab = ref('option-1')
const menu = ref([
    {
        title: 'Dashboard',
        icon: 'mdi-view-dashboard',
        component: DashboardComponent,
    },
    {
        title: 'Manage Users',
        icon: 'mdi-account-group',
        component: ManageUsers,
    },
    // {
    //     title: 'Manage Subscriptions',
    //     icon: 'mdi-package-variant-closed',
    //     component: ManageUsers,
    // },
    {
        title: 'Manage Facilities',
        icon: 'mdi-cart',
        component: ManageUsers,
    },
]);
// Menu 


// Navigation
import DashboardComponent from './pages/Dashboard.vue'
import ManageUsers from './pages/ManageUsers.vue'

const selectedComponent = ref(DashboardComponent);

function switchToComponent(component) {
    selectedComponent.value = component;
}
// Navigation

</script>