import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/page1',
    name: 'page1',
    component: () => import(/* webpackChunkName: "about" */ '../views/pageOne')
  },
  {
    path: '/page2',
    name: 'page2',
    component: () => import(/* webpackChunkName: "about" */ '../views/pageTwo')
  },
  {
    path: '/page3',
    name: 'page3',
    component: () => import(/* webpackChunkName: "about" */ '../views/pageThree')
  },
  {
    path: '/page4',
    name: 'page4',
    component: () => import(/* webpackChunkName: "about" */ '../views/pageFour')
  },
  {
    path: '/page5',
    name: 'page5',
    component: () => import(/* webpackChunkName: "about" */ '../views/pageFive')
  },
  {
    path: '/page6',
    name: 'page6',
    component: () => import(/* webpackChunkName: "about" */ '../views/pageSix')
  },
  {
    path: '/page7',
    name: 'page7',
    component: () => import(/* webpackChunkName: "about" */ '../views/pageSeven')
  }
]

const router = new VueRouter({
  routes
})

export default router
