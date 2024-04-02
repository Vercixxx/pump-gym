import { createRouter, createWebHistory } from 'vue-router'


// my sites
import MainPage from '../pages/MainPage.vue'
import ActivitiesPage from '../pages/Activities.vue'
import TrainersPage from '../pages/Trainers.vue'
import SchedulePage from '../pages/Schedule.vue'
import SubscriptionsPage from '../pages/Subscriptions.vue'
import ClientPage from '../pages/ClientPage.vue'

// Scripts
import { PaymentSuccessfull } from '../scripts/PaymentSuccessfull'

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
      path: '/schedule',
      name: 'Schedule',
      component: SchedulePage
    },
    {
      path: '/subscriptions',
      name: 'Subscriptions',
      component: SubscriptionsPage
    },
    {
      path: '/dashboard',
      name: 'ClientPage',
      component: ClientPage
    },

    {
      path: '/payment-successful',
      name: 'payment-successful',
      component: MainPage,
      beforeEnter: (to, from, next) => {

        PaymentSuccessfull();

        next();
      },
    },

    {
      path: '/payment-unsuccessful',
      name: 'payment-unsuccessful',
      component: MainPage,
      beforeEnter: (to, from, next) => {


        next();
      },
    },

  ]
})

export default router