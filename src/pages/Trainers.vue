<template>
    <div>

        <v-parallax
            src="https://web-back.perfectgym.com/sites/default/files/styles/460x/public/equipment%20%286%29.jpg?itok=bC0T32-K"
            class="ma-0 pa-0" style="min-height:100dvh;">




            <span v-if="!$vuetify.display.mobile">

                <v-row>
                    <v-col cols="12" align="center" jusify="center" class="text-h4 py-8 font-weight-black">
                        Select a club to see the trainers
                    </v-col>
                </v-row>


                <!-- Skeleton loader -->
                <v-carousel v-if="chunkedFacilities.length == 0" progress="success" hide-delimiters v-model="model"
                    class="pt-10">
                    <v-carousel-item>
                        <v-row>
                            <v-col cols="4" v-for="i in 3">
                                <v-skeleton-loader type="image" min-height="400" class="backdrop-blur-md"
                                    :class="darkMode ? ' bg-black/70' : ' bg-white/30'"></v-skeleton-loader>
                            </v-col>
                        </v-row>
                    </v-carousel-item>
                </v-carousel>
                <!-- Skeleton loader -->


                <v-carousel v-else progress="success" hide-delimiters v-model="model" class="pt-10">


                    <v-carousel-item v-for="(chunk, index) in chunkedFacilities" :key="index">
                        <v-row>
                            <v-col cols="4" v-for="facility in chunk" :key="facility.name" align="center"
                                @click="selectObject(facility.Name)">


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

                <v-row v-if="selectedFacility && !$vuetify.display.smAndDown">
                    <v-col align="center">
                        <v-timeline direction="horizontal" side="end" class="overflow-x-auto">
                            <v-timeline-item v-for="staffPersonel in staff()" :key="staffPersonel.FirstName">
                                <template v-slot:opposite>
                                    <span class="font-weight-black text-h5">
                                        {{ staffPersonel.FirstName + ' ' + staffPersonel.LastName }}
                                    </span>
                                </template>
                                <div>
                                    <div class="text-h6 font-weight-bold">{{ staffPersonel.Role }}</div>
                                    <v-avatar size="200" rounded="1"
                                        :image="`https://picsum.photos/200?random=${Math.random()}`">
                                    </v-avatar>
                                </div>
                            </v-timeline-item>


                        </v-timeline>
                    </v-col>
                </v-row>

                <!-- Footer -->
                <FooterComponent style="position: absolute; bottom: 0px; width: 100%;" />
                <!-- Footer -->
            </span>



            <!-- Mobile -->
            <span v-else class="backdrop-blur-xl py-4 text-white " :class="darkMode ? ' bg-black/70' : ' bg-white/30'" >
                <v-carousel height="400" hide-delimiter-background show-arrows>

                    <v-carousel-item v-for="facility in facilities" :key="facility.name"
                        @click="selectObject(facility.Name)">
                        <v-sheet height="100%" class="bg-transparent ">
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




                <v-row v-if="selectedFacility" class="mb-10">
                    <v-col cols="12" align="center" class="text-3xl my-15">
                        Staff in Pump gym {{ selectedFacility }}
                    </v-col>

                    <v-col align="center">
                        <v-timeline direction="horizontal" side="end" class="overflow-x-auto">
                            <v-timeline-item v-for="staffPersonel in staff()" :key="staffPersonel.FirstName">
                                <template v-slot:opposite>
                                    <span class="font-weight-black ">
                                        {{ staffPersonel.FirstName + ' ' + staffPersonel.LastName }}
                                    </span>
                                </template>
                                <div>
                                    <div class=" font-weight-bold">{{ staffPersonel.Role }}</div>
                                    <v-avatar size="100" rounded="1"
                                        :image="`https://picsum.photos/200?random=${Math.random()}`">
                                    </v-avatar>
                                </div>
                            </v-timeline-item>


                        </v-timeline>
                    </v-col>
                </v-row>


                <!-- Footer -->
                <FooterComponent />
                <!-- Footer -->
            </span>
            <!-- Mobile -->





        </v-parallax>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { usePiniaStorage } from '../store/pinia';

import FooterComponent from '../components/Footer.vue'


const model = ref(0);
const selectedFacility = ref(null);


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


function selectObject(facilityName) {
    selectedFacility.value = facilityName;
}

function staff() {
    if (selectedFacility.value && facilities.value) {
        return facilities.value.filter(facility => facility.Name === selectedFacility.value)[0]?.staff
    }
}
// Facilities


</script>
