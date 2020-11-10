import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: () => import('../views/Portfolio.vue')
  },
  {
    path: '/thoughts',
    name: 'Thoughts',
    component: () => import('../views/Thoughts.vue')
  },
  {
    path: '/learnings',
    name: 'Learnings',
    component: () => import('../views/Learnings.vue')
  },
  {
    path: '/reviews',
    name: 'Reviews',
    component: () => import('../views/Reviews.vue'),
    children: [
      {
        path: ':books',
        name: 'Books',
        component:  () => import('../views/Books.vue')
      },
      {
        path: ':movies',
        name: 'Movies',
        component:  () => import('../views/Movies.vue')
      },
      {
        path: ':lectures',
        name: 'Lectures',
        component:  () => import('../views/Lectures.vue')
      },
    ]
  },
  {
    path: '/travels',
    name: 'Travels',
    component: () => import('../views/Travels.vue')
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
