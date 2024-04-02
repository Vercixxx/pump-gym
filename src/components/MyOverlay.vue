<template>
    <v-overlay :model-value="overlay" persistent class="align-center justify-center" style="background-color: rgba(100, 100, 100, 0.8);">
        <v-progress-circular color="amber" size="100" indeterminate :width="7"></v-progress-circular>
    </v-overlay>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { usePiniaStorage } from '../store/pinia';

// Pinia
const store = usePiniaStorage();
const overlay = computed(() => store.overlay);
// Pinia

</script>