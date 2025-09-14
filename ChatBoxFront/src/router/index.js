import { createRouter, createWebHistory } from 'vue-router'

import NewLogin from '../views/auth/NewLogin.vue'
import CreatUser from '../views/auth/createUser/CreateUser.vue'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: NewLogin
  },
  {
    path: '/create-user',
    name: 'Create user',
    component: CreatUser
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/login'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router