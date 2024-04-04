<template>
    <v-parallax
        src="https://web-back.perfectgym.com/sites/default/files/styles/460x/public/equipment%20%286%29.jpg?itok=bC0T32-K"
        class="ma-0 pa-0">


        <v-tabs v-model="tab" bg-color="info" color="basil" grow >
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
import { ref, computed } from 'vue';
import { usePiniaStorage } from '../store/pinia';
import ProfileComponent from './Dashboard/ProfileComponent.vue';
import SubscriptionComponent from './Dashboard/SubscriptionComponent.vue';
import ParametersComponent from './Dashboard/ParametersComponent.vue';

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
        component: ProfileComponent,
        icon: 'mdi-account',
    },
    {
        title: 'Subscription',
        component: SubscriptionComponent,
        icon: 'mdi-cash-sync',
    },
    {
        title: 'My parameters',
        component: ParametersComponent,
        icon: 'mdi-weight-kilogram',
    },
]);

const selectedComponent = ref(ProfileComponent);


function switchToComponent(component) {
    selectedComponent.value = component;
}
// Menu

</script>