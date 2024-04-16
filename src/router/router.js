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

// Admin
import AdminDashboard from '../pages/admin/AdminDashboard.vue'

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
      path: '/admin/dashboard',
      name: 'AdminDashboard',
      component: AdminDashboard,
      beforeEnter: (to, from, next) => {
        const store = usePiniaStorage();
        const userRole = store.userData ? store.userData.role : undefined;
        
        if (userRole && userRole == 'Admin') {
          next();
        } else {
          next('/error');
          store.showAlert('error', 'Error 404: Page not found');
        }
      },
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
          store.showAlert('error', 'Error 404: Page not found');
        }

      },
    },

    {
      path: '/payment-successful',
      name: 'payment-successful',
      component: MainPage,
      beforeEnter: (to, from, next) => {
        const store = usePiniaStorage();

        // if (from.name !== undefined) {
        //   PaymentSuccessfull();
        //   next();
        // } else {
        //   next('/error');
        //   store.showAlert('error', 'You can\'t access this page');
        // }
        PaymentSuccessfull();
        next();
      },
    },

    {
      path: '/payment-unsuccessful',
      name: 'payment-unsuccessful',
      component: MainPage,
      beforeEnter: (to, from, next) => {
        const store = usePiniaStorage();

        // if (from.name !== undefined) {
        //   PaymentUnsuccessfull();
        //   next();
        // } else {
        //   next('/error');
        //   store.showAlert('error', 'You can\'t access this page');
        // }
        PaymentUnsuccessfull();
        next();
      },
    },

  ]
})

export default router