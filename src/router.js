/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/home/index.vue'
import Main from '@/views/home/main.vue'
Vue.use(Router)

export const routes = [
    {
      path: '*',
      component: resolve => require(['@/views/error/err404.vue'], resolve),
      hidden: true //代表隐藏 不在侧边栏显示
    },
    {
      path: '/login',
      name: '登录',
      component: resolve => require(['@/views/login/index.vue'], resolve),
      hidden: true
    },
    {
      path: '/',
      name: '主页',
      component: Home,
      redirect: '/readme',
      hidden: true
    },
    {
      path: "/readme",
      component: Home,
      redirect: "/readme/main",
      icon: "zhuye",
      name: "控制台",
      noDropdown: true,
      children: [
        {
          path: "main",
          component: Main ,
          hidden: false
        }
      ]
    }
  ]

export default new Router({
  routes: routes
})
