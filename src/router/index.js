import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/components/test'
import HelloWorld from '@/components/HelloWorld'
import logo from '@/page/logo'
import home from '@/page/home'
import admin from '@/page/admin'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/test',
      name:'test',
      component:Test
    },
    {
      path:'/logo',
      name:'logo',
      component:logo
    },
    {
      path:'/home',
      name:'home',
      component:home
    },
    {
      path:'/admin',
      // redirect:'/admin',
      component:admin
    }
  ]
})
