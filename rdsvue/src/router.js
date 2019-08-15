import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Preloader from './views/Preloader.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'preloader',
      component: Preloader
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/map',
      name: 'map',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Map.vue')
    }
  ]
})
