import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/Home'
import stuff from '@/components/stuff'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/stuff',
      name: 'stuff',
      component: stuff
    }
  ]
})
