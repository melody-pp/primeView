import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/Main'
import Home from '@/pages/home/Home'
import AboutUs from '@/pages/aboutUs/AboutUs'
import Products from '@/pages/products/Products'
import Cases from '@/pages/cases/Cases'
import Details from '@/pages/details/Details'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Main,
      children: [
        {path: '/', redirect: '/home'},
        {
          path: '/home',
          component: Home
        },

        {
          path: '/aboutUs',
          component: AboutUs
        },
        {
          path: '/products',
          component: Products
        },
        {
          path: '/cases',
          component: Cases
        },
        {
          path: '/details',
          component: Details
        },
      ]
    },
  ]
})
