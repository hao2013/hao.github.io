import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
import About from '@/components/About'
import Works from '@/components/Works'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/works',
      name: 'Works',
      component: Works
    },
  ]
})
