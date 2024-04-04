<template>
    <div class="mt-3 rounded backdrop-blur-xl" :class="darkMode ? ' bg-black/70' : ' bg-white/30'">

        <v-card-title class="font-weight-black text-h6">
            My parameters
        </v-card-title>
    </div>

</template>

<script setup lang="ts">
import { computed } from 'vue';

// Theme
import { useTheme } from 'vuetify'
const theme = useTheme();
const darkMode = computed(() => theme.name.value === 'dark');
// Theme

</script>