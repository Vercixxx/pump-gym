<template>

    <div :style="darkMode ? 'background-color:rgba(30, 46, 84, 0.9)' : 'background-color:rgba(226, 232, 240, 0.9)'"
        class="ma-0  h-screen w-screen">
    
        <v-btn text="Refresh" prepend-icon="mdi-refresh" variant="tonal" class="hover:bg-green-600"
            @click="getUsers"></v-btn>
        <h1>Manage users</h1>
        {{ allUsersData }}

        <v-data-table :items="Object.values(allUsersData)" :headers="headers" :loading="loading" density="compact"
            item-key="id" hover color="rgba(30, 46, 84, 0.9)">
            <template v-slot:item.actions="{ item }">
                <v-icon class="me-2" size="small" @click="editItem(item)">
                    mdi-pencil
                </v-icon>
                <v-icon size="small" @click="deleteItem(item)">
                    mdi-delete
                </v-icon>
            </template>

        </v-data-table>

    </div>

</template>

<script setup lang="ts">
import { onMounted, computed, ref, reactive } from 'vue';

// Theme
import { useTheme } from 'vuetify'
const theme = useTheme();
const darkMode = computed(() => theme.name.value === 'dark');
// Theme


// Get users
import { collection, getDocs, doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from '../../../firebase.js';

let loading = ref(false);

let allUsersData = {};

const headers = ref([
    { title: 'Id', align: 'start', key: 'id' },
    { title: 'Email', align: 'start', key: 'email' },
    { title: 'First name', align: 'start', key: 'first_name' },
    { title: 'Last name', align: 'start', key: 'last_name' },
    { title: 'Phone', align: 'start', key: 'Phone' },
    { title: 'Gender', align: 'start', key: 'gender' },
    { title: 'Role', align: 'start', key: 'role' },
    { title: 'Actions', align: 'start', key: 'actions' },
]);


const getUsers = async () => {
    loading.value = true;

    const users = collection(db, 'users');
    const userSnapshots = await getDocs(users);
    console.log(userSnapshots);
    userSnapshots.forEach((docSnapshot: any) => {
        allUsersData[docSnapshot.id] = {
            ...docSnapshot.data(),
            id: docSnapshot.id,
        };
    });

    loading.value = false;
};

onMounted(async () => {
    await getUsers();
});
// Get users


</script>