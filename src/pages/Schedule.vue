<template>
    <div>
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
import { Qalendar } from "qalendar";
import { mapState, mapActions, mapGetters } from 'vuex'

import FooterComponent from '../components/Footer.vue'


export default {
    name: 'Schedule',

    components: {
        Qalendar,
        FooterComponent,
    },

    data() {
        return {
            model: 0,
            selectedFacility: null,

            config: {
                defaultMode: 'week',
                disableModes: ['day', 'month'],
                showCurrentTime: true,
                locale: 'pl-PL',
                isSilent: true,
                eventDialog: {
                    isCustom: true,
                },

                dayBoundaries: {
                    start: 6,
                    end: 23,
                },
            },
        }
    },

    computed: {
        ...mapGetters(['getFacilities']),

        chunkedFacilities() {
            let i, j, chunk = 3;
            let facilities = this.getFacilities;
            let result = [];

            if (facilities) {
                for (i = 0, j = facilities.length; i < j; i += chunk) {
                    result.push(facilities.slice(i, i + chunk));
                }
            }

            return result;
        },
    },

    methods: {
        selectObject(facility) {
            this.selectedFacility = facility;
        },


    },
}
</script>


<style>
@import "qalendar/dist/style.css";

.qalendar-container {
    height: 88dvh;
}
</style>