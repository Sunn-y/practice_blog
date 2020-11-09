import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'AppHome',
    component: () => import('../components/AppHome.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../components/About.vue')
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: () => import('../components/Portfolio.vue')
  },
  {
    path: '/thoughts',
    name: 'Thoughts',
    component: () => import('../components/Thoughts.vue')
  },
  {
    path: '/learnings',
    name: 'Learnings',
    component: () => import('../components/Learnings.vue')
  },
  {
    path: '/reviews',
    name: 'Reviews',
    component: () => import('../components/Reviews.vue')
  },
  {
    path: '/travels',
    name: 'Travels',
    component: () => import('../components/Travels.vue')
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
