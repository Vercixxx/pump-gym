<template>
  <v-app>
    <v-layout>

      <!-- Header -->
      <AppBar v-if="route.path != '/error'"/>
      <!-- Header -->

      <!-- Body -->
      <v-main>
        <router-view />
      </v-main>
      <!-- Body -->


      <!-- Dialogs -->
      <LoginComponent />
      <SignUpComponent />
      <SnackBarAlert />
      <ContactUsDialog />
      <WorkWithUsDialog />
      <BuySubscriptionDialog />
      <PaymentSuccessfullDialog />
      <MyOverlay />
      <!-- Dialogs -->


    </v-layout>
  </v-app>
</template>

<script setup lang="ts">
// Vue
import { ref, onMounted } from 'vue';

// Components
import LoginComponent from './components/LoginComponent.vue'
import SignUpComponent from './components/SignUp.vue'
import SnackBarAlert from './components/SnackBarAlert.vue'
import AppBar from './components/AppBar.vue'
import ContactUsDialog from './components/ContactUsDialog.vue'
import WorkWithUsDialog from './components/WorkWithUsDialog.vue'
import BuySubscriptionDialog from './components/BuySubscriptionDialog.vue'
import PaymentSuccessfullDialog from './components/PaymentSuccessfull.vue'

// Component
import MyOverlay from './components/MyOverlay.vue'

// Storage
import { db } from "./firebase.js";
import { collection, getDocs } from "firebase/firestore";


// Pinia
import { usePiniaStorage } from './store/pinia';

const store = usePiniaStorage();
// Pinia


// Route
import { useRoute } from 'vue-router';
const route = useRoute();
// Route


// Get data in background after rendering

// Facilities
const fetchFacilities = async () => {
  try {
    const facilitiesQuerySnapshot = await getDocs(collection(db, "Facilities"));
    const fetchedFacilities = [];

    for (let doc of facilitiesQuerySnapshot.docs) {
      const facility = doc.data();
      facility.id = doc.id;

      const staffQuerySnapshot = await getDocs(collection(doc.ref, "Staff"));
      facility.staff = staffQuerySnapshot.docs.map(doc => doc.data());

      fetchedFacilities.push(facility);
    }

    store.setFacilities(fetchedFacilities);

  } catch (error) {
    store.showAlert('error', error)
  }
};

onMounted(() => {
  fetchFacilities();
});
// Facilities


// Subscriptions
const regularSubscriptionsNames = ref(['Basic', 'Basic - 12', 'Open', 'Open - 12']);
const specialSubscriptionsNames = ref(['Student', 'Disabled person']);
const regularSubscriptions = ref([]);
const specialSubscriptions = ref([]);

const fetchSubscriptionByTypeName = async (type, name, outputArray) => {
  try {
    const querySnapshot = await getDocs(collection(db, "Subscriptions", type, name));
    querySnapshot.forEach((doc) => {
      outputArray.value.push(doc.data());
    });

  } catch (error) {
    store.showAlert('error', error)
  }
};

const fetchSubscriptions = async () => {
  for (let name of regularSubscriptionsNames.value) {
    await fetchSubscriptionByTypeName('Regular', name, regularSubscriptions);
  }
  for (let name of specialSubscriptionsNames.value) {
    await fetchSubscriptionByTypeName('Special', name, specialSubscriptions);
  }
  store.setSubscriptions(regularSubscriptions.value, specialSubscriptions.value);
};

onMounted(() => {
  fetchSubscriptions();
});
// Subscriptions


</script>


<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-calendars/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-vue-schedule/styles/material.css';
</style>