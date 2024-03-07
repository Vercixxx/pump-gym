import { createRouter, createWebHistory } from 'vue-router'

// my sites
import LoginPage from '../pages/LoginPage.vue'
import MainPage from '../pages/MainPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainPage
    },
    // {
    //   path: '/home',
    //   name: 'home',
    //   component: MainPage
    // },
  ]
})

export default router