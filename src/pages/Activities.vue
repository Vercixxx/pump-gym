<template>

    <div class="min-h-screen">


        <v-expansion-panels class="my-4" variant="popout">
            <v-expansion-panel v-for="activity in activities" :key="activity.name" elevation="0"
                class="mb-3 bg-transparent">

                <v-expansion-panel-title v-if="!$vuetify.display.smAndDown">

                    <v-row>
                        <v-col cols="6">
                            <div class="font-weight-black mb-4" :class="$vuetify.display.smAndDown ? '' : 'text-3xl '">
                                <v-icon size="30">{{ activity.icon }}</v-icon>
                                {{ activity.name }}
                            </div>

                            <div class="pa-5 rounded-xl text-justify text-base"
                                :class="$vuetify.display.smAndDown ? '' : 'text-sm'"
                                :style="darkMode ? 'background-color: rgba(20,20,20,0.7);' : 'background-color: rgba(200,200,200, 0.7);'">
                                {{ activity.description }}
                            </div>
                        </v-col>

                        <v-col cols="6" class="d-flex align-center justify-evenly">
                            <div class="w-25" v-for="image in activity.images">
                                <v-img cover :src="image"
                                    class="rounded-xl hover:scale-110 transition-all duration-150 ease-in-out "></v-img>
                            </div>
                        </v-col>
                    </v-row>

                    <template v-slot:actions="{ expanded, collapseIcon, disabled, expandIcon, readonly }">
                        <v-btn size="large" :text="expanded ? 'Show less' : 'Show more'"
                            :append-icon="expanded ? 'mdi-chevron-up' : 'mdi-chevron-down'" variant="text"
                            class="backdrop-blur-3xl text-white font-weight-black text-xl"></v-btn>
                    </template>

                </v-expansion-panel-title>



                <!-- Mobile -->
                <v-expansion-panel-title v-else>
                    <v-icon size="30">{{ activity.icon }}</v-icon>
                    {{ activity.name }}<br>
                    {{ activity.description }}
                </v-expansion-panel-title>
                <!-- Mobile -->


                <v-expansion-panel-text>
                    <div class="pa-2 rounded-xl backdrop-blur-3xl text-white">

                        <v-list-item v-for="(content, title) in activity.items" :key="title"
                            class="my-1  hover:translate-x-8 ease-in-out duration-300 cursor-pointer">
                            <template v-slot:prepend>
                                <v-icon icon="mdi-dots-circle"></v-icon>
                            </template>
                            <v-list-item-title>{{ title }}</v-list-item-title>
                            <v-list-item-subtitle>{{ content }}</v-list-item-subtitle>
                        </v-list-item>
                    </div>

                </v-expansion-panel-text>


                <!-- <template v-slot:title> -->

                <!-- Desktop -->
                <!-- <v-row v-if="!$vuetify.display.smAndDown" >
                        <v-col cols="6" >
                            <div class="font-weight-black mb-4" :class="$vuetify.display.smAndDown ? '' : 'text-3xl '" >
                                <v-icon size="30">{{ activity.icon }}</v-icon>
                                {{ activity.name }}
                            </div>

                            <div class="pa-5 rounded-xl text-justify text-base" :class="$vuetify.display.smAndDown ? '' : 'text-sm'" :style="darkMode ? 'background-color: rgba(20,20,20,0.7);' : 'background-color: rgba(200,200,200, 0.7);'">
                                {{ activity.description }}
                            </div>
                        </v-col>
                        <v-col cols="2" class="d-flex align-center justify-center">
                            <v-img cover :src="activity.image" class="rounded-xl"></v-img>
                        </v-col>
                    </v-row> -->

                <!-- <div v-if="!$vuetify.display.smAndDown" class="flex gap-4">

        
                        <div class="flex flex-grow-7">

                            <div class="font-weight-black" :class="$vuetify.display.smAndDown ? '' : 'text-3xl '">
                                <v-icon size="30">{{ activity.icon }}</v-icon>
                                {{ activity.name }}
                            </div>

                            <div class=" text-justify text-base" :class="$vuetify.display.smAndDown ? '' : 'text-sm'">
                                {{ activity.description }}
                            </div>

                        </div>
                     
                        <div class="flex flex-grow-5 align-center justify-center ">
                            <div style="width: 300px;">
                                <v-img cover :src="activity.image" class="rounded-xl"></v-img>
                            </div>
                        </div>
                       
                    </div> -->
                <!-- Desktop -->








                <!-- </template> -->

                <!-- <template v-slot:text>
                    <v-list-item v-for="(content, title) in activity.items" :key="title"
                        class="my-1  hover:translate-x-8 ease-in-out duration-300 cursor-pointer">
                        <template v-slot:prepend>
                            <v-icon icon="mdi-dots-circle"></v-icon>
                        </template>
                        <v-list-item-title>{{ title }}</v-list-item-title>
                        <v-list-item-subtitle>{{ content }}</v-list-item-subtitle>
                    </v-list-item>
                </template> -->

            </v-expansion-panel>
        </v-expansion-panels>


        <!-- Footer -->
        <FooterComponent />
        <!-- Footer -->


    </div>

</template>

<script setup lang="ts">
import { ref, computed, defineAsyncComponent, onMounted } from 'vue';


const FooterComponent = defineAsyncComponent(() => import('../components/Footer.vue'));

// Theme
import { useTheme } from 'vuetify'
const theme = useTheme();
const darkMode = computed(() => theme.name.value === 'dark');
// Theme


// Activities
import { getActivities, activities } from '../scripts/Activities';
// const activities = ref();

onMounted(async () => {
    await getActivities();
});

// Activities

const isOpen = ref(false);

</script>
