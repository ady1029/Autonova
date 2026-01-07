import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: HomeView,
    },
    {
      path: '/quienes-somos',
      name: 'quienes-somos',
      component: () => import('../views/AboutView.vue'),
    },
     {
      path: '/servicios',
      name: 'servicios',
      component: () => import('../views/ServicioView.vue'),
    },
     {
      path: '/contacto',
      name: 'contacto',
      component: () => import('../views/ContactoView.vue'),
    },
  ],
})

export default router
