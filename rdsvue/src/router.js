import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Preloader from './views/Preloader.vue'
import Profile from './views/Profile.vue'
import Club from './views/Club.vue'
import Soc from './views/Soc.vue'
import Events from './views/Events.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'profile',
      component: Profile
    },
    {
      path: '/club',
      name: 'club',
      component: Club
    },
    {
      path: '/soc',
      name: 'soc',
      component: Soc
    },
    {
      path: '/events',
      name: 'events',
      component: Events
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
