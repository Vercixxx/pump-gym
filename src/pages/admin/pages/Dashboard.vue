<template>

    <div :style="darkMode ? 'background-color:rgba(30, 46, 84, 0.9)' : 'background-color:rgba(226, 232, 240, 0.9)'" class="ma-0  h-screen w-screen">

        <h1>Dashboard</h1>

    </div>

</template>

<script setup lang="ts">
import { onMounted, computed, ref, reactive } from 'vue';

// Theme
import { useTheme } from 'vuetify'
const theme = useTheme();
const darkMode = computed(() => theme.name.value === 'dark');
// Theme


</script>