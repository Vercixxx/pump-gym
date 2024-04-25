<template>
  <v-app>
    <v-layout>

      <!-- Header -->
      <AppBar v-if="route.path != '/error'" />
      <!-- Header -->

      <!-- Body -->
      <v-main @click="closeDrawer">
        <router-view/>

        <!-- Drawer -->
        <MyDrawer/>
        <!-- Drawer -->

        <!-- Theme toogler -->
        <button class="themeIcon" @click="toogleTheme" icon="mdi-theme-light-dark" size="large"
          style="position: fixed; bottom:2%; right:2%">
          <v-icon class="svgIcon" color="white">{{ theme.global.current.value.dark ? 'mdi-theme-light-dark' :
            'mdi-theme-light-dark' }}</v-icon>
        </button>
        <!-- Theme toogler -->

      </v-main>
      <!-- Body -->


      <!-- Dialogs -->
      <LoginComponent />
      <PasswordResetDialog /> 
      <SignUpComponent />
      <SnackBarAlert />
      <ContactUsDialog />
      <WorkWithUsDialog />
      <BuySubscriptionDialog />
      <PaymentSuccessfullDialog />
      <MyOverlay />
      <Dialog />
      <!-- Dialogs -->



    </v-layout>
  </v-app>
</template>

<script setup lang="ts">
// Vue
import { ref, onMounted, computed, defineAsyncComponent } from 'vue';

// Components
const LoginComponent = defineAsyncComponent(() => import('./components/LoginComponent.vue'));
const PasswordResetDialog = defineAsyncComponent(() => import('./components/PasswordResetDialog.vue'));
const SignUpComponent = defineAsyncComponent(() => import('./components/SignUp.vue'));
const SnackBarAlert = defineAsyncComponent(() => import('./components/SnackBarAlert.vue'));
const AppBar = defineAsyncComponent(() => import('./components/AppBar.vue'));
const ContactUsDialog = defineAsyncComponent(() => import('./components/ContactUsDialog.vue'));
const WorkWithUsDialog = defineAsyncComponent(() => import('./components/WorkWithUsDialog.vue'));
const BuySubscriptionDialog = defineAsyncComponent(() => import('./components/BuySubscriptionDialog.vue'));
const PaymentSuccessfullDialog = defineAsyncComponent(() => import('./components/PaymentSuccessfull.vue'));
const MyDrawer = defineAsyncComponent(() => import('./components/Drawer.vue'));
const Dialog = defineAsyncComponent(() => import('./components/Dialog.vue'));


// Component
const MyOverlay = defineAsyncComponent(() => import('./components/MyOverlay.vue'));

// Storage
import { db } from "./firebase.js";
import { collection, getDocs } from "firebase/firestore";

// Theme
import { useTheme } from 'vuetify'
const theme = useTheme();

const toogleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
};
const darkMode = computed(() => theme.name.value === 'dark');
// Theme


// Pinia
import { usePiniaStorage } from './store/pinia';

const store = usePiniaStorage();
// Pinia


// Drawer
const drawer = computed(() => store.drawer);
const closeDrawer = () => {
  store.closeDrawer();
};
// Drawer


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
@import './assets/themeIcon.css';

body::-webkit-scrollbar {
  display: none;
}
</style>