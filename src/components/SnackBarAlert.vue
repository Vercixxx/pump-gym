<template>
    <!-- Snackbar -->
    <v-snackbar v-model="alertData.show" location="top" :timeout="time" :color="alertData.type"
        style="position: fixed; top: 8vh;" rounded="pill" variant="elevated">

        <!-- <v-progress-linear v-model="progressValue" :buffer-value="bufferValue" rounded color="white"></v-progress-linear> -->

        <span class="font-weight-bold">
            {{ alertData.message }}
        </span>

        <template v-slot:actions>
            <v-btn @click="closeAlert()" variant="plain" class="ma-1">
                Close
            </v-btn>
        </template>

    </v-snackbar>
    <!-- Snackbar -->
</template>

<script>
import { ref, computed, watch } from 'vue';
import { usePiniaStorage } from '../store/pinia.js';

export default {
    name: 'SnackBarAlert',
    setup() {
        const store = usePiniaStorage();

        const alertData = computed(() => store.alert);
        const time = ref(5000);

        function closeAlert() {
            store.closeAlert();
        };

        watch(alertData, (newData) => {
            if (newData && newData.show) {
            }
        }, { immediate: true });




        return {
            alertData,
            time,
            closeAlert,
        };
    },
};
</script>