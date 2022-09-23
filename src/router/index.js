import { createRouter, createWebHistory } from 'vue-router'
import WeddingHalls from '../components/WeddingHalls.vue'
import PriceOffer from '../components/PriceOffer.vue'
import ThankYou from '../components/ThankYou.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: WeddingHalls
    },
    {
      path: '/wedding-halls/:id/offer',
      name: 'offer',
      component: PriceOffer
    },
    {
      path: '/thank-you',
      name: 'thank-you',
      component: ThankYou
    }
  ]
})

export default router
