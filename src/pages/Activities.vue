<template>

    <div class="">


        <v-tabs v-model="tab" bg-color="transparent" color="basil" grow>
            <v-tab v-for="activity in activities" :key="activity.name" :value="activity.name">
                {{ activity.name }}
            </v-tab>
        </v-tabs>

        <v-window v-model="tab">
            <v-window-item v-for="activity in activities" :key="activity.name" :value="activity.name">

                <div>

                    <v-row class="mt-2">
                        <v-col align="center" :class="$vuetify.display.smAndDown ? 'text-xl' : 'text-4xl pt-5'">
                            <v-icon> {{ activity.icon }} </v-icon>
                            {{ activity.name }}
                        </v-col>
                    </v-row>

                    <v-row class="px-2">
                        <v-col>
                            {{ activity.description }}
                        </v-col>
                    </v-row>

                    <v-col cols="12" class="d-flex align-center justify-evenly">
                        <div class="w-60" v-for="image in activity.images">
                            <v-img cover :src="image"
                                class="rounded-xl hover:scale-110 transition-all duration-150 ease-in-out "></v-img>
                        </div>
                    </v-col>


                    <v-row>
                        <v-col align="center" :class="$vuetify.display.smAndDown ? 'text-xl' : 'text-2xl pt-5'">
                            Some of the activities include:
                        </v-col>
                    </v-row>

                    <v-list-item v-for="(content, title) in activity.items" :key="title"
                        class="my-1  hover:translate-x-8 ease-in-out duration-300 cursor-pointer">
                        <template v-slot:prepend>
                            <v-icon icon="mdi-dots-circle"></v-icon>
                        </template>
                        <v-list-item-title>{{ title }}</v-list-item-title>
                        <v-list-item-subtitle>{{ content }}</v-list-item-subtitle>
                    </v-list-item>

                </div>


            </v-window-item>
        </v-window>


    </div>

</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';


// Theme
import { useTheme } from 'vuetify'
const theme = useTheme();
const darkMode = computed(() => theme.name.value === 'dark');
// Theme


// Activities
import { getActivities, activities } from '../scripts/Activities';

onMounted(async () => {
    await getActivities();
});

// Activities

const tab = ref(0);

</script>
