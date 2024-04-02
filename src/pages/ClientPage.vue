<template>
    <v-parallax
        src="https://web-back.perfectgym.com/sites/default/files/styles/460x/public/equipment%20%286%29.jpg?itok=bC0T32-K"
        class="ma-0 pa-0">
        <v-row>

            <v-col cols="auto">

                <v-layout>
                    <v-row>
                        <v-col cols="12">

                            <v-list style="background-color: rgba(250, 250, 250, 0.5);">
                                <v-list-item :title="userData.first_name + ' ' + userData.last_name" :subtitle="userData.email">
                                    <template v-slot:prepend>
                                        <v-icon icon="mdi-face-man-profile"></v-icon>
                                    </template>
                                </v-list-item>
                            </v-list>

                            <v-divider></v-divider>

                            <v-list style="background-color: rgba(250, 250, 250, 0.5);">
                                <v-list-item v-for="(item, i) in items" :key="i" :value="item" color="primary"
                                    @click="switchToComponent(item.component)">
                                    <template v-slot:prepend>
                                        <v-icon :icon="item.icon"></v-icon>
                                    </template>

                                    <v-list-item-title v-text="item.title"></v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-col>
                    </v-row>

                </v-layout>

            </v-col>

            <v-col align="center" justify="center">
                <component :is="selectedComponent"></component>
            </v-col>
        </v-row>

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


// Menu
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