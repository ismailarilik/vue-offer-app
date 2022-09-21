import { createRouter, createWebHistory } from 'vue-router'
import WeddingHalls from '../components/WeddingHalls.vue'
import PriceOffer from '../components/PriceOffer.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: WeddingHalls
    },
    {
      path: '/offer',
      name: 'offer',
      component: PriceOffer
    }
  ]
})

export default router
