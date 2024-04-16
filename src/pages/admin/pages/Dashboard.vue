<template>

    <div :style="darkMode ? 'background-color:rgba(30, 46, 84, 0.9)' : 'background-color:rgba(226, 232, 240, 0.9)'"
        class="ma-0  min-h-screen ">

        <v-row class="pa-3">

            <!-- Left pane -->
            <v-col cols="3">

                <v-row
                    style="font-family: 'Share Tech Mono', monospace; text-shadow: 0 0 20px rgba(10, 175, 230, 1), 0 0 20px rgba(10, 175, 230, 0);">
                    <v-col align="center">
                        <!-- Clock -->
                        <span class="font-weight-black text-h2">
                            {{ clock }}
                        </span>
                        <!-- Clock -->

                        <v-expansion-panels>
                            <v-expansion-panel
                                :style="darkMode ? 'background-color:rgba(30, 46, 84, 0.9)' : 'background-color:rgba(226, 232, 240, 0.9)'"
                                elevation="0">

                                <v-expansion-panel-title>
                                    <v-icon>mdi-calendar</v-icon>
                                    <span>{{ currentDate.toDateString() }}</span>
                                </v-expansion-panel-title>

                                <v-expansion-panel-text>
                                    <v-date-picker show-adjacent-months v-model="currentDate"
                                        :allowed-dates="allowedDates" hide-header></v-date-picker>
                                </v-expansion-panel-text>

                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-col>
                </v-row>



                <!-- Menu -->
                <v-list class="my-2 bg-transparent">
                    <v-list-item class="cursor-pointer hover:border-2">
                        <v-list-item-title>
                            <v-icon class="mr-2">mdi-barcode-scan</v-icon>
                            Scan member
                        </v-list-item-title>
                    </v-list-item>

                    <v-list-item class="cursor-pointer hover:border-2">
                        <v-list-item-title>
                            <v-icon class="mr-2">mdi-barcode-scan</v-icon>
                            Scan member
                        </v-list-item-title>
                    </v-list-item>
                </v-list>
                <!-- Menu -->

            </v-col>
            <!-- Left pane -->


            <!-- Right pane -->
            <v-col cols="9">

                <v-row>

                    <v-col cols="auto" align="start">
                        <v-card>
                            <v-card-title>
                                <v-icon>mdi-account-group</v-icon>
                                Members registered at the club
                            </v-card-title>
                            <v-card-text>
                                <v-row>
                                    <v-col>
                                        <v-icon>mdi-account</v-icon>
                                        172
                                    </v-col>
                                </v-row>
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="auto" align="start">
                        <v-card>
                            <v-card-title>
                                <v-icon>mdi-account-group</v-icon>
                                Members currently in club
                            </v-card-title>
                            <v-card-text>
                                <v-row>
                                    <v-col>
                                        <v-icon>mdi-account</v-icon>
                                        21
                                    </v-col>
                                </v-row>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>


                <!-- Chart -->
                <v-row class="mb-10">
                    <v-col cols="12" sm="8" align="center">

                        <span class="font-weight-bold">History</span>
                        <canvas ref="chart"></canvas>
                    </v-col>
                </v-row>
                <!-- Chart -->

            </v-col>
            <!-- Right pane -->

        </v-row>






    </div>

</template>

<script setup lang="ts">
import { onMounted, computed, ref, reactive } from 'vue';

// Theme
import { useTheme } from 'vuetify'
const theme = useTheme();
const darkMode = computed(() => theme.name.value === 'dark');
// Theme


// Clock
const clock = ref();
const currentDate = new Date();

const allowedDates = (val: Date) => {
    return false;
};

const updateTime = () => {
    const cd = new Date();
    clock.value = zeroPadding(cd.getHours(), 2) + ':' + zeroPadding(cd.getMinutes(), 2) + ':' + zeroPadding(cd.getSeconds(), 2);
};

const zeroPadding = (num: number, digit: number) => {
    let zero = '';
    for (let i = 0; i < digit; i++) {
        zero += '0';
    }
    return (zero + num).slice(-digit);
}


onMounted(() => {
    setInterval(updateTime, 1000);
    updateTime();
});
// Clock






// Chart
import { Chart, LineController, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';

Chart.register(LineController, CategoryScale, LinearScale, PointElement, LineElement);

const chart = ref(null);

onMounted(() => {
    const ctx = chart.value.getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: Array.from({ length: 36 }, (_, i) => i + 6), // Hours 6-23
            datasets: [{
                label: 'Members in club',
                data: Array.from({ length: 36 }, () => Math.floor(Math.random() * 100)), // Random data
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
        },
        options: {
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Hours'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Members in club'
                    }
                }
            }
        }
    });
});
// Chart


</script>


<style scoped>
#clock {
    font-family: 'Share Tech Mono', monospace;
    color: #ffffff;
    text-align: center;

    transform: translate(-50%, -50%);
    color: #daf6ff;
    text-shadow: 0 0 20px rgba(10, 175, 230, 1), 0 0 20px rgba(10, 175, 230, 0);

    .time {
        letter-spacing: 0.05em;
        font-size: 80px;
        padding: 5px 0;
    }

    .date {
        letter-spacing: 0.1em;
        font-size: 24px;
    }

    .text {
        letter-spacing: 0.1em;
        font-size: 12px;
        padding: 20px 0 0;
    }
}
</style>