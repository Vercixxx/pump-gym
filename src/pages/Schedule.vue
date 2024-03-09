<template>
    <div>
        <h1>Schedule</h1>

        <div class="is-light-mode">

            <Qalendar :events="events" :config="config" />

        </div>

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
                defaultMode: 'day',
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
</style>