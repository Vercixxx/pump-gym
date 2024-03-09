import { createRouter, createWebHistory } from 'vue-router'

// my sites
import LoginPage from '../pages/LoginPage.vue'
import MainPage from '../pages/MainPage.vue'
import ActivitiesPage from '../pages/Activities.vue'
import TrainersPage from '../pages/Trainers.vue'
import WorkForUsPage from '../pages/WorkForUs.vue'
import SchedulePage from '../pages/Schedule.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainPage
    },
    {
      path: '/activities',
      name: 'Activities',
      component: ActivitiesPage
    },
    {
      path: '/trainers',
      name: 'Trainers',
      component: TrainersPage
    },
    {
      path: '/work',
      name: 'WorkForUs',
      component: WorkForUsPage
    },
    {
      path: '/schedule',
      name: 'Schedule',
      component: SchedulePage
    },
  ]
})

export default router