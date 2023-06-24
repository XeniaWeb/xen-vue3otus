import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/pages/HomeView.vue'
import WelcomeBanner from '@/views/elements/WelcomeBanner.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: HomeView,
        welcome: WelcomeBanner
      }
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('@/views/pages/ProductsList.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/pages/AboutView.vue')
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import('../views/pages/ContactsView.vue')
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import('../views/pages/CheckoutView.vue')
    }
  ]
})

export default router
