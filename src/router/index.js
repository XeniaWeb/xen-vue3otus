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
      name: 'products.index',
      component: () => import('@/views/pages/ProductsList.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/pages/AboutView.vue')
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import('@/views/pages/ContactsView.vue')
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import('@/views/pages/CheckoutView.vue')
    },
    {
      path: '/add-product',
      name: 'add_product',
      component: () => import('@/views/pages/AddProductView.vue')
    },
    {
      path: '/add-product-non-validate',
      name: 'add_product_non_validate',
      component: () => import('../views/pages/AddProductNonValidateView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/pages/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/pages/RegisterView.vue')
    }
  ]
})

export default router
