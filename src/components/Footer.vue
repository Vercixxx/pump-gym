<template>
    <!-- Footer -->
    <v-row  class="py-2 backdrop-blur-md" :class="darkMode ? ' bg-black/70' : ' bg-white/30'">
        <v-col align="center" justify=center>
            <span class="font-weight-thin mb-4 py-4">
                Pump Gym &copy; {{ new Date().getFullYear() }}
            </span>
        </v-col>
    </v-row>
    <!-- Footer -->
</template>

<script setup lang="ts">
import { computed } from 'vue';
// Theme
import { useTheme } from 'vuetify'
const theme = useTheme();
const darkMode = computed(() => theme.name.value === 'dark');
// Theme
</script>
