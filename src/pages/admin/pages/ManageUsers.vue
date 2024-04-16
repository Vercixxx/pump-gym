<template>

    <div :style="darkMode ? 'background-color:rgba(30, 46, 84, 0.9)' : 'background-color:rgba(226, 232, 240, 0.9)'"
        class="ma-0 min-h-screen">


        <v-row class="pt-5 px-5 mb-9">
            <v-col cols="12" sm="6">
                <v-select v-model="selectedRole" :items="roles" label="Select user role" variant="outlined"
                    @update:model-value="getUsers"></v-select>
            </v-col>

            <v-col cols="12" sm="6">
                <div class="font-weight-black mb-1" v-if="!$vuetify.display.smAndDown">
                    Search by:
                    <v-btn-toggle v-model="selectedSearchOption" color="success" rounded="xl" group
                        @update:model-value="getUsers">
                        <v-btn v-for="option in searchOptions" :key="option.value" :value="option.value"
                            :variant="selectedSearchOption == option.value ? 'elevated' : 'outlined'"
                            :text="option.title" :prepend-icon="option.icon">
                        </v-btn>
                    </v-btn-toggle>
                </div>

                <div v-else>
                    <v-select v-model="selectedSearchOption" :items="searchOptions" label="Search by" variant="outlined"
                        prepend-icon="mdi-magnify"></v-select>
                </div>

                <v-text-field v-model="search" label="Search" variant="outlined" prepend-inner-icon="mdi-magnify"
                    class="mb-4" :hint="'Press enter to search by ' + selectedSearchOption" @keydown.enter="getUsers"
                    :disabled="!selectedSearchOption">

                    <template v-slot:append-inner>
                        <v-tooltip location="start" text="Clear search">
                            <template v-slot:activator="{ props }">
                                <v-btn v-bind="props" @click="clearSearch" variant="text" icon="mdi-close">
                                </v-btn>
                            </template>
                        </v-tooltip>

                    </template>

                </v-text-field>
            </v-col>
        </v-row>


        <v-row class="font-weight-black text-4xl mb-5">
            <v-col cols="0" sm="2"></v-col>
            <v-col cols="12" sm="8" align="center">

                <v-icon>mdi-account-group</v-icon>
                {{ textAboveTable }}

            </v-col>
            <v-col cols="0" sm="2" align=end>

                <v-btn text="Add user" prepend-icon="mdi-plus" variant="plain"
                    class="hover:bg-green-500 transition ease-in-out duration-300" @click="openAddUserDialog"></v-btn>

            </v-col>

        </v-row>


        <v-data-table :items="Object.values(allUsersData)" :headers="headers" :loading="loading" item-key="id"
            item-value="id" hover
            :style="darkMode ? 'background-color:rgba(30, 46, 84, 0.9)' : 'background-color:rgba(226, 232, 240, 0.9)'"
            class="mx-5">

            <template v-slot:headers="{ columns, isSorted, getSortIcon, toggleSort }">
                <tr align="center" class="font-weight-black text-xl">
                    <template v-for="column in columns" :key="column.key">
                        <td @click="() => toggleSort(column)">
                            <span class="mr-2" :class="column.sortable? 'cursor-pointer':''">
                                {{ column.title
                                }}

                                <v-icon v-if="column.sortable && !isSorted(column)"
                                    icon="mdi-sort-alphabetical-ascending" />
                                <v-icon v-else-if="column.sortable && isSorted(column)"
                                    icon="mdi-sort-alphabetical-descending" />

                            </span>

                        </td>
                    </template>
                </tr>
            </template>

            <template v-slot:item="{ item }">
                <tr align="center">
                    <td v-for="header in headers" :key="header.key">


                        <template v-if="header.key === 'actions'">
                            <v-tooltip location="top" :text="'Edit ' + item.first_name + ' ' + item.last_name">
                                <template v-slot:activator="{ props }">
                                    <v-btn v-bind="props" icon="mdi-pencil" color="success" variant="text"
                                        @click="openEditUserDialog(item)"></v-btn>
                                </template>
                            </v-tooltip>

                            <v-tooltip location="top"
                                :text="'Manage ' + item.first_name + item.last_name + ' subscription'">
                                <template v-slot:activator="{ props }">
                                    <v-btn v-bind="props" icon="mdi-account-credit-card" color="info" variant="text" @click="openManageSubscriptionDialog(item)"></v-btn>
                                </template>
                            </v-tooltip>
                        </template>



                        <template v-else>

                            <span
                                v-if="item[header.key] === null || item[header.key] === undefined || item[header.key] === ''">
                                <v-icon icon="mdi-minus" />
                            </span>
                            <span v-else-if="item[header.key] === true">
                                <v-icon icon="mdi-check-bold" style="color:green" />
                            </span>
                            <span v-else-if="item[header.key] === false">
                                <v-icon icon="mdi-close-thick" style="color:red" />
                            </span>
                            <span v-else>
                                {{ item[header.key] }}
                            </span>
                        </template>

                    </td>
                </tr>
            </template>
        </v-data-table>

    </div>

</template>

<script setup lang="ts">
import { onMounted, computed, ref, reactive, watch } from 'vue';

// Theme
import { useTheme } from 'vuetify'
const theme = useTheme();
const darkMode = computed(() => theme.name.value === 'dark');
// Theme


// Get users
import { collection, getDocs, collectionGroup, where, query } from "firebase/firestore";
import { db } from '../../../firebase.js';

let loading = ref(false);

let allUsersData = {};

const headers = ref<readonly any[]>([
    { key: 'id', title: 'Id', align: 'start', sortable: false },
    { key: 'active', title: 'Account active', align: 'start', sortable: false },
    { key: 'email', title: 'Email', align: 'start', sortable: false },
    { key: 'first_name', title: 'First name', align: 'start' },
    { key: 'last_name', title: 'Last name', align: 'start' },
    { key: 'Phone', title: 'Phone', align: 'start', sortable: false },
    { key: 'gender', title: 'Gender', align: 'start' },
    { key: 'role', title: 'Role', align: 'start', sortable: false },
    { key: 'actions', title: 'Actions', align: 'start', sortable: false },
]);


// Text above table
const textAboveTable = ref('Users list');
// Text above table

const getUsers = async () => {
    loading.value = true;

    allUsersData = {};

    let userSnapshots;

    if (search.value === '') {
        const users = collection(db, 'users');
        const q = query(users, where('role', '==', selectedRole.value));
        userSnapshots = await getDocs(q);

        // Text
        textAboveTable.value = 'Users list';
    }
    else {
        const usersGroup = collectionGroup(db, 'users');
        const q = query(usersGroup, where(selectedSearchOption.value, "==", firstCharToUpper(search.value.trim())), where('role', '==', selectedRole.value));
        const q2 = query(usersGroup, where(selectedSearchOption.value, "==", firstCharToLower(search.value.trim())), where('role', '==', selectedRole.value));

        let userSnapshot1;
        let userSnapshot2;

        userSnapshot1 = await getDocs(q);
        userSnapshot2 = await getDocs(q2);

        console.log(userSnapshot1, userSnapshot2);

        userSnapshots = [...(userSnapshot1?.docs || []), ...(userSnapshot2?.docs || [])];

        // Text
        textAboveTable.value = "Search results for " + search.value + " in " + selectedRole.value + 's';
    }


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

const searchOptions = ref([
    {
        title: 'First name',
        value: 'first_name',
        icon: 'mdi-account',
    },
    {
        title: 'Last name',
        value: 'last_name',
        icon: 'mdi-account',
    },
    {
        title: 'Email',
        value: 'email',
        icon: 'mdi-email',
    },
    {
        title: 'Phone',
        value: 'phone',
        icon: 'mdi-phone',
    },
]);

let selectedSearchOption = ref('email');

const roles = [
    'Member',
    'Admin',
];

const selectedRole = ref('Member');

const clearSearch = () => {
    search.value = '';
    selectedSearchOption.value = 'email';
    selectedRole.value = 'Member';
    getUsers();
};
// Search



// Change first letter 
function firstCharToUpper(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function firstCharToLower(str: string): string {
    return str.charAt(0).toLowerCase() + str.slice(1);
}
// Change first letter 



// Edit user dialog
import { usePiniaStorage } from '../../../store/pinia';
const storage = usePiniaStorage();

const openEditUserDialog = (userData) => {
    storage.openEditUserDialog(userData);
}

watch(() => storage.editUserDialog, (value) => {
    if (!value) {
        getUsers();
    }
});
// Edit user dialog




// Manage subscription dialog
const openManageSubscriptionDialog = (userData) => {
    storage.openManageSubscriptionDialog(userData);
}

watch(() => storage.manageSubscriptionDialog, (value) => {
    if (!value) {
        getUsers();
    }
});
// Manage subscription dialog




// Add user dialog
const openAddUserDialog = () => {
    storage.openAddUserDialog();
}
// Add user dialog

</script>