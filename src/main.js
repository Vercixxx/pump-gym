import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js'
import store from './store/store.js'

// Pinia 
import { createPinia } from 'pinia'
const pinia = createPinia()
// Pinia 

import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Syncfusion
import { SchedulePlugin, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-vue-schedule';
// Syncfusion

const vuetify = createVuetify({
    components,
    directives
  })

createApp(App)
  .use(store)
  .use(pinia)
  .use(router)
  .use(vuetify)
  .use(SchedulePlugin)
  .mount('#app')