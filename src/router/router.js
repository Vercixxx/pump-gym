import { createRouter, createWebHistory } from 'vue-router'

// my sites
import LoginPage from '../pages/LoginPage.vue'
import MainPage from '../pages/MainPage.vue'
import ActivitiesPage from '../pages/Activities.vue'
import TrainersPage from '../pages/Trainers.vue'
import WorkWithUsPage from '../pages/WorkWithUs.vue'
import SchedulePage from '../pages/Schedule.vue'
import SubscriptionsPage from '../pages/Subscriptions.vue'

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
      name: 'WorkWithUs',
      component: WorkWithUsPage
    },
    {
      path: '/schedule',
      name: 'Schedule',
      component: SchedulePage
    },
    {
      path: '/subscriptions',
      name: 'Subscriptions',
      component: SubscriptionsPage
    },
  ]
})

export default router