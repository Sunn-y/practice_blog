import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/*',
    redirect:{name: 'Home'},
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
    component: () => import('../views/Learnings.vue'),
    children: [
     {
        path: '/detail/:no',
        name: 'Detail',
        component: () => import('../views/Detail.vue'),
     }
 ],
  },
  {
    path: '/reviews',
    name: 'Reviews',
    component: () => import('../views/Reviews.vue'),
  },
  {
    path: '/travels',
    name: 'Travels',
    beforeEnter: (to, from, next) => {
      console.log('to -> ',to,'from ->',from);
      next();
    },
    component: () => import('../views/Travels.vue')
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('../views/Test.vue'),
    children:[
      {
        path: ':id',
        name: 'TestDetail',
        component: () => import('../views/TestDetail.vue'),
      },
      {
        path: ':id/edit',
        name: 'TestEdit',
        component: () => import('../views/TestEdit.vue'),
      },
    ]
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
