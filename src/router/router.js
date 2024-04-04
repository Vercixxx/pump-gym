import { createRouter, createWebHistory } from 'vue-router'

import { usePiniaStorage } from '../store/pinia'


// my sites
import MainPage from '../pages/MainPage.vue'
import ActivitiesPage from '../pages/Activities.vue'
import TrainersPage from '../pages/Trainers.vue'
import SchedulePage from '../pages/Schedule.vue'
import SubscriptionsPage from '../pages/Subscriptions.vue'
import ClientPage from '../pages/ClientPage.vue'
import ErrorPage from '../pages/404.vue'

// Scripts
import { PaymentSuccessfull } from '../scripts/PaymentSuccessfull'
import { PaymentUnsuccessfull } from '../scripts/PaymentUnsuccessfull'

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
      path: '/error',
      name: 'ErrorPage',
      component: ErrorPage,
    },
    {
      path: '/dashboard',
      name: 'ClientPage',
      component: ClientPage,
      beforeEnter: (to, from, next) => {

        const store = usePiniaStorage();
        const userUid = store.userUid;

        if (userUid) {
          next();
        }
        else {
          next('/error');
          store.showAlert('error', 'You need to be logged in to access this page');
        }

      },
    },

    {
      path: '/payment-successful',
      name: 'payment-successful',
      component: MainPage,
      beforeEnter: (to, from, next) => {
        const store = usePiniaStorage();

        if (from.name !== undefined) {
          PaymentSuccessfull();
          next();
        } else {
          next('/error');
          store.showAlert('error', 'You can\'t access this page');
        }
      },
    },

    {
      path: '/payment-unsuccessful',
      name: 'payment-unsuccessful',
      component: MainPage,
      beforeEnter: (to, from, next) => {
        const store = usePiniaStorage();

        if (from.name !== undefined) {
          PaymentUnsuccessfull();
          next();
        } else {
          next('/error');
          store.showAlert('error', 'You can\'t access this page');
        }
      },
    },

  ]
})

export default router