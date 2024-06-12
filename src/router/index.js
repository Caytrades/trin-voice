import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FeaturesView from '../views/FeaturesView.vue'
import UsersView from '../views/UserView.vue'
import PricingView from '../views/PricingView.vue'
import SalesView from '../views/SalesView.vue'
import LoginView from '../views/LoginView.vue'
import SignUpView from '../views/SignUpView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/features',
      name: 'features',
      component: FeaturesView
    },
    {
      path: '/usersview',
      name: 'usersview',
      component: UsersView
    },
    {
      path: '/pricingview',
      name: 'pricingview',
      component: PricingView
    },
    {
      path: '/salesview',
      name: 'salesview',
      component: SalesView
    },
    {
      path: '/loginview',
      name: 'loginview',
      component: LoginView
    },
    {
      path: '/signupview',
      name: 'signupview',
      component: SignUpView
    },
  ]
})

export default router
