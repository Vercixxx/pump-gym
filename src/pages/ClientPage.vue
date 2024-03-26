<template>

    <v-row>
        <v-col cols="auto">0

            <v-layout>
                <v-navigation-drawer absolute permanent>
                    <v-list>
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

                    <v-list :lines="false" nav>
                        <v-list-item v-for="(item, i) in items" :key="i" :value="item" color="primary"
                            @click="swtichToComponent(item.component)">
                            <template v-slot:prepend>
                                <v-icon :icon="item.icon"></v-icon>
                            </template>

                            <v-list-item-title v-text="item.title"></v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-navigation-drawer>

                <v-main style="min-height: 80dvh;"></v-main>
            </v-layout>

        </v-col>

        <v-col>
            <component :is="selectedComponent"></component>
        </v-col>
    </v-row>

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