import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/personagens',
    name: 'Personagens',
    component: () => import('../views/Personagem')
  },

  {
    path: '/personagem/:id',
    name: 'personagem',

    component: () => import('../components/Personagem')
  },
  {
    path: '/quadradinho/:id',
    name: 'quadradinho',

    component: () => import('../components/Quadradinho')
  },

  {
    path: '/about',
    name: 'About',

    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
