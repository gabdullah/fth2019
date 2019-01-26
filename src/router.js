import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import Dash from './views/Dash.vue'
// DASH SUBCOMPONENTS:
import Looks from './components/Looks.vue';

import Profile from './views/Profile.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dash,
      children: [
        {
          path: 'looks',
          name: 'looks',
          component: Looks
        }
      ]
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
