import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/Main'
import Home from '@/pages/home/Home'
import AboutUs from '@/pages/aboutUs/AboutUs'
import Products from '@/pages/products/Products'
import Cases from '@/pages/cases/Cases'
import Details from '@/pages/details/Details'
import JoinUs from '@/pages/joinUs/JoinUs'

Vue.use(Router)

const router = new Router({
  // mode: 'history',
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
        {
          path: '/joinUs',
          component: JoinUs
        },
      ]
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  router.app.$options.store.dispatch('changeView', to.path)
  next()
})

export default router
