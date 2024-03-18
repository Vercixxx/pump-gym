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

export default {
  name: 'App',

  components: {
    LoginComponent,
    SnackBarAlert,
    AppBar,
    ContactUsDialog,
    SignUpComponent,
  },



  data() {
    return {

    }
  },



}
</script>
