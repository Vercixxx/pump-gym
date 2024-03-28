<template>
    <v-parallax
        src="https://web-back.perfectgym.com/sites/default/files/styles/460x/public/equipment%20%286%29.jpg?itok=bC0T32-K"
        class="ma-0 pa-0">
        <v-row>

            <v-col cols="2">

                <v-layout>
                    <v-row>
                        <v-col cols="12">

                            <v-list style="background-color: rgba(250, 250, 250, 0.5);">
                                <v-list-item>
                                    <template v-slot:title>
                                        <span v-if="loggedUser">
                                            {{ loggedUser.email }}
                                        </span>
                                    </template>
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

                    <!-- <v-main style="min-height: 80dvh;"></v-main> -->
                </v-layout>

            </v-col>

            <v-col cols="9">
                <component :is="selectedComponent"></component>
            </v-col>
        </v-row>

    </v-parallax>
</template>

<script>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import ProfileComponent from './Dashboard/ProfileComponent.vue';
import SubscriptionComponent from './Dashboard/SubscriptionComponent.vue';
import ParametersComponent from './Dashboard/ParametersComponent.vue';

export default {
    name: 'ClientPage',
    setup() {
        // User data from the store
        const store = useStore();
        const loggedUser = computed(() => store.getters.loggedUser);
        // User data from the store

        const selectedComponent = ref(ProfileComponent);

        // Menu items
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

        function switchToComponent(component) {
            selectedComponent.value = component;
        }
        // Menu items

        return {
            loggedUser,
            selectedComponent,
            items,
            switchToComponent,
        };
    },
};
</script>