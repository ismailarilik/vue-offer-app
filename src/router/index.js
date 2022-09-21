import { createRouter, createWebHistory } from 'vue-router'
import WeddingHalls from '../components/WeddingHalls.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: WeddingHalls
    }
  ]
})

export default router
