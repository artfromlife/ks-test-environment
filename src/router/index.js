import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/page1',
    name: 'page1',
    component: () => import(/* webpackChunkName: "about" */ '../views/pageOne')
  }
]

const router = new VueRouter({
  routes
})

export default router
