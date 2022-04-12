import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'layout',
    component: () => import('@/views/layout'),
    children: [
      {
        path: '/index',
        name: 'index',
        component: () => import('@/views/index')
      },
      {
        path: '/qa',
        name: 'qa',
        component: () => import('@/views/qa')
      },
      {
        path: '/shipin',
        name: 'shipin',
        component: () => import('@/views/shipin')
      },
      {
        path: '/my',
        name: 'my',
        component: () => import('@/views/my')
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login')
  }
]

const router = new VueRouter({
  routes
})

export default router
