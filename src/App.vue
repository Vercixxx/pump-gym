<template>
  <v-app>
    <v-layout>

      <!-- Header -->
      <AppBar />
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
      <!-- Dialogs -->


    </v-layout>
  </v-app>
</template>

<script>
import LoginComponent from './components/LoginComponent.vue'
import SignUpComponent from './components/SignUp.vue'
import SnackBarAlert from './components/SnackBarAlert.vue'
import AppBar from './components/AppBar.vue'
import ContactUsDialog from './components/ContactUsDialog.vue'
import WorkWithUsDialog from './components/WorkWithUsDialog.vue'

// Storage
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase.js";

export default {
  name: 'App',

  components: {
    LoginComponent,
    SnackBarAlert,
    AppBar,
    ContactUsDialog,
    SignUpComponent,
    WorkWithUsDialog
  },

  created() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.$store.commit('setLoggedUser', user);
      } else {
        this.$store.commit('setLoggedUser', null);
      }
    });
  },

  data() {
    return {

    }
  },



}
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