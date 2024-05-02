<template>
    <v-parallax
        src="https://web-back.perfectgym.com/sites/default/files/styles/460x/public/equipment%20%286%29.jpg?itok=bC0T32-K"
        class="min-h-screen mt-3">


        <v-row class="py-2 text-2xl ps-3" :style="darkMode ? 'background-color:rgb(30 46 84)':'background-color:rgb(226 232 240)'" >
            <v-col cols="auto">
                <v-icon>
                    mdi-menu
                </v-icon>
            </v-col>
            <v-col>
                My profile
            </v-col>
        </v-row>

        <v-tabs v-model="tab" :bg-color="darkMode ? 'rgb(30 46 84)' : 'rgb(226 232 240)'"
            :class="darkMode ? 'text-white' : ''" color="basil" grow>
            <v-tab v-for="item in items" :key="item" :value="item" @click="switchToComponent(item.component)">
                {{ item.title }}
            </v-tab>
        </v-tabs>



        <v-col align="center" justify="center">
            <component :is="selectedComponent"></component>
        </v-col>


    </v-parallax>
</template>

<script setup lang="ts">
import { ref, computed, defineAsyncComponent, markRaw } from 'vue';
import { usePiniaStorage } from '../store/pinia';
import ProfileComponent from './Dashboard/ProfileComponent.vue';

const SubscriptionComponent = defineAsyncComponent(() => import('./Dashboard/SubscriptionComponent.vue'));
const ParametersComponent = defineAsyncComponent(() => import('./Dashboard/ParametersComponent.vue'));

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
const items = ref([
    {
        title: 'Profile',
        component: markRaw(ProfileComponent),
        icon: 'mdi-account',
    },
    {
        title: 'Subscription',
        component: markRaw(SubscriptionComponent),
        icon: 'mdi-cash-sync',
    },
    // {
    //     title: 'My parameters',
    //     component: ParametersComponent,
    //     icon: 'mdi-weight-kilogram',
    // },
]);

const selectedComponent = ref(ProfileComponent);


function switchToComponent(component) {
    selectedComponent.value = component;
}
// Menu

</script>