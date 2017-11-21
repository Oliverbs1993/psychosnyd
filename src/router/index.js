import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Rules from '@/components/Rules/Rules'
import CreateRules from '@/components/Rules/CreateRules'
import Rule from '@/components/Rules/Rule'
import Profile from '@/components/User/Profile'
import Signup from '@/components/User/Signup'
import Signin from '@/components/User/Signin'
import Faq from '@/components/Faq/Faq'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/rules',
      name: 'Rules',
      component: Rules
    },
    {
      path: '/rules/new',
      name: 'CreateRules',
      component: CreateRules
    },
    {
      path: '/rules/:id',
      name: 'Rule',
      props: true,
      component: Rule
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/faq',
      name: 'Faq',
      component: Faq
    }
  ],
  mode: 'history'
})
