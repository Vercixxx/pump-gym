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
      <SnackBarAlert />
      <!-- Dialogs -->


    </v-layout>
  </v-app>
</template>

<script>
import LoginComponent from './components/LoginComponent.vue'
import SnackBarAlert from './components/SnackBarAlert.vue'
import AppBar from './components/AppBar.vue'

export default {
  name: 'App',

  components: {
    LoginComponent,
    SnackBarAlert,
    AppBar,
  },



  data() {
    return {

    }
  },



}
</script>
