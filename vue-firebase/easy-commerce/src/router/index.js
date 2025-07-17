import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/user/HomeView.vue'
import SearchView from '@/views/user/SearchView.vue'
import ProfileView from '@/views/user/ProfileView.vue'
import CartView from '@/views/user/CartView.vue'
import Checkout from '@/views/user/Checkout.vue'
import SuccessView from '@/views/user/SuccessView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
        {
      path: '/search',
      name: 'search',
      component: SearchView,
    },
        {
      path: '/checkout',
      name: 'checkout',
      component: Checkout,
    },
        {
      path: '/success',
      name: 'success',
      component: SuccessView,
    },
        {
      path: '/cart',
      name: 'cart',
      component: CartView,
    },
        {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
    },
  ],
})

export default router
