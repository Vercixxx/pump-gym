<template>



    <v-card>
        <h1>Profile</h1>
        <v-card-title>
        </v-card-title>
    </v-card>

    {{ userData }}


</template>

<script>
import { onMounted, computed, ref } from 'vue';
import { useStore } from 'vuex';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../firebase.js';

export default {
    setup() {

        // User data from the store
        const store = useStore();
        const loggedUser = computed(() => store.getters.loggedUser);
        const userUid = computed(() => loggedUser.value.user.uid);
        // User data from the store

        // Get the user data from the database
        const userData = ref(null);

        async function fetchUserData() {
            const userDocRef = doc(db, "users", userUid.value);
            const userDocSnap = await getDoc(userDocRef);

            userData.value = userDocSnap.data();
        }

        onMounted(fetchUserData);

        // Get the user data from the database

        return {
            loggedUser,
            userUid,
            userData,
        };
    },
};
</script>