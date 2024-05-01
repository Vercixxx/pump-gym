import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js'

// Pinia 
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
// Pinia 


// Styles
import './assets/style.css'

import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Syncfusion
import { SchedulePlugin, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-vue-schedule';
// Syncfusion

// Scroll to
import VueScrollTo from 'vue-scrollto'
// Scroll to


const vuetify = createVuetify({
  components,
  directives
})

createApp(App)
  .use(pinia)
  .use(router)
  .use(vuetify)
  .use(SchedulePlugin)
  .use(VueScrollTo, {
    duration: 1100 ,
    easing: "ease",
  })
  .mount('#app')