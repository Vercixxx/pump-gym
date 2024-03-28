<template>
    <div class="mt-3">
        <v-parallax
            src="https://web-back.perfectgym.com/sites/default/files/styles/460x/public/equipment%20%286%29.jpg?itok=bC0T32-K"
            class="ma-0 pa-0">

            <!-- Facility selection -->
            <v-row class="mb-10">
                <v-col cols="12">

                    <span v-if="!$vuetify.display.mobile">


                        <v-row>
                            <v-col cols="12" align="center" jusify="center" class="text-h4 font-weight-black"
                                style="background-color: rgba(255, 255, 255, 0.6);">
                                Select a club to see the schedule
                            </v-col>
                        </v-row>

                        <v-carousel progress="success" hide-delimiters v-model="model" class="pt-10"
                            style="background-color: rgba(255, 255, 255, 0.6);">
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
            </v-row>
            <!-- Facility selection -->


            <ejs-schedule :selectedDate='selectedDate' :eventSettings='eventSettings'>

                <e-views>
                    <e-view option='Day'></e-view>
                    <e-view option='Week'></e-view>
                </e-views>
            </ejs-schedule>

            <v-row v-if="selectedFacility">
                <v-col cols="12">
                    <div class="qalendar-container is-light-mode text-white"
                        style="background-color: rgba(0, 0, 0, 0.8);">
                        <Qalendar :events="events" :config="config">
                            <template #customCurrentTime>
                                <div
                                    :style="{ height: '3px', backgroundColor: 'cornflowerblue', position: 'relative' }">
                                    <v-progress-linear color="yellow-darken-2" indeterminate></v-progress-linear>
                                </div>
                            </template>
                        </Qalendar>
                    </div>
                </v-col>
            </v-row>


            <!-- Footer -->
            <FooterComponent style="position: absolute; bottom: 0px; width: 100%;" />
            <!-- Footer -->

        </v-parallax>
    </div>
</template>

<script>
import { usePiniaStorage } from '../store/pinia';
import { ref, computed } from 'vue';
import { Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-vue-schedule';

import FooterComponent from '../components/Footer.vue'


export default {
    name: 'Schedule',

    components: {
        FooterComponent,
    },


    setup() {

        // Data
        const model = ref(0);
        const selectedFacility = ref(null);

        const eventSettings = [
            {
                Id: 1,
                Subject: 'Meeting',
                StartTime: new Date(2023, 1, 15, 10, 0),
                EndTime: new Date(2023, 1, 15, 12, 30)
            },
        ];
        // Data


        // Pinia
        const store = usePiniaStorage();
        const facilities = computed(() => store.facilities);
        // Pinia


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
        // Facilities



        return {
            model,
            selectedFacility,
            chunkedFacilities,
            selectObject,
            eventSettings,
        }
    },


    // data() {
    //     return {
    //         model: 0,
    //         selectedFacility: null,

    //         eventSettings: {
    //             dataSource: [{
    //                 Id: 1,
    //                 Subject: 'Meeting',
    //                 StartTime: new Date(2023, 1, 15, 10, 0),
    //                 EndTime: new Date(2023, 1, 15, 12, 30)
    //             }]
    //         },
    //         selectedDate: new Date(2023, 1, 15)

    //     }
    // },

    // computed: {
    //     ...mapGetters(['getFacilities']),

    //     chunkedFacilities() {
    //         let i, j, chunk = 3;
    //         let facilities = this.getFacilities;
    //         let result = [];

    //         if (facilities) {
    //             for (i = 0, j = facilities.length; i < j; i += chunk) {
    //                 result.push(facilities.slice(i, i + chunk));
    //             }
    //         }

    //         return result;
    //     },
    // },

    // methods: {
    //     selectObject(facility) {
    //         this.selectedFacility = facility;
    //     },


    // },



    provide: {
        schedule: [Day, Week, Agenda]
    },
}
</script>


<style>
@import "qalendar/dist/style.css";

.qalendar-container {
    height: 88dvh;
}
</style>