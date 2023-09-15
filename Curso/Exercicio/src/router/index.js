import { createRouter, createWebHistory } from 'vue-router'
import Exercicio1_ao_5 from '../views/Exercicio1_ao_5.vue'
import Exercicio6_ao_10 from '../views/Exercicio6_ao_10.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'ExercicioPart1',
      component: Exercicio1_ao_5
    },
    {
      path: '/Exercicio6ao10',
      name: 'ExercicioPart2',
      component: Exercicio6_ao_10
    }
  ]
})

export default router
