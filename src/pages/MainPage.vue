<template>
    <div class="bg-slate-600" :style="{
        backgroundImage: `url('https://web-back.perfectgym.com/sites/default/files/styles/460x/public/equipment%20%286%29.jpg?itok=bC0T32-K')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }">

        <!-- Body -->


        <v-row>

            <!-- First row -->
            <v-col cols="12" style="height: 70vh;">
                <v-row>
                    <v-col cols="12" sm="6" class="py-10 ps-10 d-flex justify-center align-center ">
                        <div class="pa-4 rounded-xl font-weight-black text-h6 backdrop-blur-xl"
                            :class="darkMode ? ' bg-black/70 ' : ' bg-white/30 '">
                            Welcome to Pump Gym!

                            <span class="text-wrap font-weight-thin text-justify ">
                                Do you dream of health, strength, and perfect fitness? If so, you've found
                                the
                                perfect
                                place! Our gym not only offers top-quality equipment but also an inspiring
                                environment
                                that motivates action.

                                Our experienced instructors are here to help you achieve your fitness goals,
                                whether
                                you're just starting your fitness journey or you're an experienced athlete.
                                Whether you
                                want to build muscle, lose weight, or improve your endurance, we're ready to
                                support you
                                every step of the way.

                                Come to our gym and join the community of people who actively care for their
                                health and
                                well-being. Together, we'll achieve more!

                                Don't wait any longer - start your journey to a better version of yourself
                                today!
                            </span>

                        </div>
                    </v-col>


                    <v-col cols="12" sm="6" align="center">
                        <v-avatar size="500" class="me-2 " image="src/images/logo.png">
                        </v-avatar>
                    </v-col>

                </v-row>

            </v-col>
            <!-- First row -->


            <!-- Second row -->
            <v-col cols="12" style="height: 40vh;">

                <span v-if="!$vuetify.display.mobile">

                    <v-row>
                        <v-col cols="12" align="center" jusify="center"
                            class="text-h4 py-6 font-weight-black backdrop-blur-xl"
                            :class="darkMode ? ' bg-black/70 ' : ' bg-white/30 '">
                            Our clubs
                        </v-col>
                    </v-row>


                    <v-carousel progress="success" hide-delimiters v-model="model" class="pt-10 backdrop-blur-xl"
                        :class="darkMode ? ' bg-black/70 ' : ' bg-white/30 '">
                        <v-carousel-item v-for="(chunk, index) in chunkedFacilities" :key="index">
                            <v-row>
                                <v-col cols="4" v-for="facility in chunk" :key="facility.name" align="center">
                                    <v-avatar size="400">
                                        <v-parallax :src="facility.Image" class="ma-0 pa-0" type="button">
                                            <div
                                                class="d-flex flex-column fill-height justify-center align-center text-white">
                                                <h1 class="text-h5 font-weight-black mb-0 text-no-wrap pa-4 rounded-pill"
                                                    style="background-color: rgba(0, 0, 0, 0.6);">
                                                    {{ facility.Name }}, <br> {{ facility.City + ', ' +
        facility.Street
        + ' ' + facility.Home }}
                                                </h1>
                                            </div>
                                        </v-parallax>
                                    </v-avatar>
                                </v-col>
                            </v-row>
                        </v-carousel-item>
                    </v-carousel>

                </span>

                <span v-else>
                    <v-carousel height="400" hide-delimiter-background show-arrows>

                        <template v-slot:prev="{ props }">
                            <v-btn color="success" variant="elevated" @click="props.onClick" icon="mdi-arrow-left">
                            </v-btn>
                        </template>

                        <template v-slot:next="{ props }">
                            <v-btn color="info" variant="elevated" @click="props.onClick"
                                icon="mdi-arrow-right"></v-btn>
                        </template>



                        <v-carousel-item v-for="facility in getFacilities" :key="facility.name">
                            <v-sheet height="100%">
                                <div class="d-flex fill-height justify-center align-center">
                                    <v-avatar size="300">
                                        <v-parallax :src="facility.Image" class="ma-0 pa-0" type="button">
                                            <div
                                                class="d-flex flex-column fill-height justify-center align-center text-white">
                                                <span class="font-weight-black mb-0 text-no-wrap pa-4 rounded-pill"
                                                    style="background-color: rgba(0, 0, 0, 0.6);">
                                                    {{ facility.Name }}, <br> {{ facility.City + ', ' +
        facility.Street
                                                    + ' ' + facility.Home }}
                                                </span>
                                            </div>
                                        </v-parallax>
                                    </v-avatar>
                                </div>
                            </v-sheet>
                        </v-carousel-item>
                    </v-carousel>
                </span>
            </v-col>
            <!-- Second row-->

            <!-- Spacer -->
            <v-col cols="12" style="height: 15dvh;"></v-col>
            <!-- Spacer -->


            <!-- Third row -->
            <!-- <v-col cols="12" style="height: 40dvh; min-width: 100%;">
                    <v-parallax
                        src="https://web-back.perfectgym.com/sites/default/files/styles/460x/public/equipment%20%286%29.jpg?itok=bC0T32-K"
                        class="ma-0 pa-0">
                        <div class="d-flex flex-column fill-height justify-center align-center text-white">
                            <h1 class="text-h4 font-weight-thin mb-4">
                                Hey!
                            </h1>
                            <h4 class="subheading pa-3">
                                Content Content Content Content Content Content Content Content
                            </h4>
                        </div>
                    </v-parallax>
                </v-col> -->
            <!-- Third row -->

            <!-- Spacer -->
            <v-col cols="12" style="height: 20vh;"></v-col>
            <!-- Spacer -->

        </v-row>


        <!-- Body -->



        <!-- Footer -->
        <FooterComponent style="position: absolute; bottom: 0px; width: 100%;" />
        <!-- Footer -->


    </div>
</template>






<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { usePiniaStorage } from '../store/pinia';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase.js'
import FooterComponent from '../components/Footer.vue'


const model = ref(0);
const menuButtons = ref([
    {
        id: 1,
        title: 'Activities',
        icon: 'mdi-dumbbell',
        options: [
            {
                id: 1,
                title: 'a'
            },
            {
                id: 2,
                title: 'b'
            },
            {
                id: 3,
                title: 'c'
            },
        ],
    },
    {
        id: 2,
        title: 'Our Trainers',
        icon: 'mdi-dumbbell',
        options: [
            {
                id: 1,
                title: 'b'
            },
            {
                id: 2,
                title: 'c'
            },
            {
                id: 3,
                title: 'd'
            },
        ],
    },
    {
        id: 4,
        title: 'Contact us',
        icon: 'mdi-dumbbell',
        options: [
            {
                id: 1,
                title: 'b'
            },
            {
                id: 2,
                title: 'c'
            },
            {
                id: 3,
                title: 'd'
            },
        ],
    },
    {
        id: 5,
        title: 'Schedule',
        icon: 'mdi-dumbbell',
        options: [
            {
                id: 1,
                title: 'b'
            },
            {
                id: 2,
                title: 'c'
            },
            {
                id: 3,
                title: 'd'
            },
        ],
    },
]);

// Pinia
const store = usePiniaStorage();
const facilities = computed(() => store.facilities);
// Pinia

// Theme
import { useTheme } from 'vuetify'
const theme = useTheme();
const darkMode = computed(() => theme.name.value === 'dark');
// Theme

// Facilities
const chunkedFacilities = computed(() => {
    let i, j, chunk = 3;
    let facilitiesArray = facilities.value;
    let result = [];

    if (facilitiesArray) {
        for (i = 0, j = facilitiesArray.length; i < j; i += chunk) {
            result.push(facilitiesArray.slice(i, i + chunk));
        }
    }

    return result;
});
// Facilities


</script>
