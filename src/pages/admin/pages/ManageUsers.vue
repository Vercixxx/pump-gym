<template>

    <div :style="darkMode ? 'background-color:rgba(30, 46, 84, 0.9)' : 'background-color:rgba(226, 232, 240, 0.9)'"
        class="ma-0 h-screen w-screen">
        <h1>Manage users</h1>

        <v-btn text="Refresh" prepend-icon="mdi-refresh" variant="tonal" class="hover:bg-green-600"
            @click="getUsers"></v-btn>


        <v-row>
            <v-col cols="12" sm="6">
                <v-expansion-panels class="mb-6" flat> 
                    <v-expansion-panel>
                        <v-expansion-panel-title expand-icon="mdi-menu-down">
                            Filters
                        </v-expansion-panel-title>
                        <v-expansion-panel-text>
                            <v-select v-model="selectedFacility" :items="facilities" label="Facility" outlined></v-select>
                            <v-select v-model="selectedRole" :items="roles" label="Role" outlined></v-select>
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-col>

            <v-col cols="12" sm="5" >
                <v-text-field v-model="search" label="Search" variant="outlined" prepend-inner-icon="mdi-magnify"
                    class="mb-4"></v-text-field>
            </v-col>
        </v-row>

        <v-data-table :items="Object.values(allUsersData)" :headers="headers" :loading="loading" density="compact"
            item-key="id" hover
            :style="darkMode ? 'background-color:rgba(30, 46, 84, 0.9)' : 'background-color:rgba(226, 232, 240, 0.9)'">
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

const headers = ref<readonly any[]>([
    { key: 'id', title: 'Id', align: 'start' },
    { key: 'email', title: 'Email', align: 'start' },
    { key: 'first_name', title: 'First name', align: 'start' },
    { key: 'last_name', title: 'Last name', align: 'start' },
    { key: 'Phone', title: 'Phone', align: 'start' },
    { key: 'gender', title: 'Gender', align: 'start' },
    { key: 'role', title: 'Role', align: 'start' },
    { key: 'actions', title: 'Actions', align: 'start' },
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


// Search
const search = ref('');
// Search


</script>