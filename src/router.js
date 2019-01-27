import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import Dash from './views/Dash.vue'
// DASH SUBCOMPONENTS:
import Looks from './components/Looks.vue';
import Faves from './components/Faves.vue';
import Make from './components/Make.vue';
import Profile from './components/Profile.vue';
import Results from './components/Results.vue';

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
      redirect: '/dashboard/looks',
      component: Dash,
      children: [
        {
          path: 'looks',
          name: 'looks',
          component: Looks
        },
        {
          path: 'faves',
          name: 'faves',
          component: Faves
        },
        {
          path: 'make',
          name: 'make',
          component: Make
        },
        {
          path: 'profile',
          name: 'profile',
          component: Profile
        },
        {
          path: 'results',
          name: 'results',
          component: Results
        }
      ]
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
