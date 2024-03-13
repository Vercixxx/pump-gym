<template>
    <div>
        <v-parallax
            src="https://web-back.perfectgym.com/sites/default/files/styles/460x/public/equipment%20%286%29.jpg?itok=bC0T32-K"
            class="ma-0 pa-0">

            <h1>Schedule</h1>

            <div class="flex-container">
                <v-row class="flex-row">
                    <v-col cols="6">
                        <Qalendar class="flex-item" :events="events" :config="config" />
                    </v-col>
                </v-row>
            </div>


        </v-parallax>
    </div>
</template>

<script>
import { Qalendar } from "qalendar";


export default {
    name: 'Schedule',

    components: {
        Qalendar,
    },

    data() {
        return {


            config: {
                defaultMode: 'week',
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
}
</script>


<style>
@import "qalendar/dist/style.css";

.flex-container {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.flex-row {
    height: 50%;
    display: flex;
}

.flex-item {
    height: 100%;
}
</style>