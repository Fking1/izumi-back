/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/home/index.vue'
import Main from '@/views/home/main.vue'

import TicketList from '@/views/ticket-manage/TicketList'
import KycList from '@/views/kyc-manage/KycList'
import TransactionList from '@/views/transaction-manage/TransactionList'
import SystemList from '@/views/system-manage/SystemList'

import AdminRouter from "@/views/user-manage/admin/router.vue";
import AuthAdmin from "@/views/user-manage/admin/AuthAdmin.vue";
import AuthRole from "@/views/user-manage/admin/AuthRole.vue";
import AuthPermissionRule from "@/views/user-manage/admin/AuthPermissionRule.vue";

import AdSite from "@/views/ad-manage/AdSite.vue"
import Ad from '@/views/ad-manage/Ad.vue'

Vue.use(Router)

export const baseRouter = [
  {
    path: '*',
    component: resolve => require(['@/views/error/err404.vue'], resolve),
    hidden: true //代表隐藏 不在侧边栏显示
  },
  {
    path: "/401",
    component: resolve => require(['@/views/error/err401.vue'], resolve),
    name: "401",
    hidden: true
  },
  {
    path: "/404",
    component: resolve => require(['@/views/error/err404.vue'], resolve),
    name: "404",
    hidden: true
  },
  {
    path: "/500",
    component: resolve => require(['@/views/error/err500.vue'], resolve),
    name: "500",
    hidden: true
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
    icon: "shouye",
    name: "控制台",
    noDropdown: true,
    children: [
      {
        path: "main",
        component: Main,
        hidden: false
      }
    ]
  }
]

export const ticketManageRouter = [
  {
    path: "/ticket-manage",
    component: Home,
    redirect: "/ticket-manage/ticket-list",
    icon: "shouye",
    name: "工单管理",
    noDropdown: true,
    children: [
      {
        path: "ticket-list",
        component: TicketList
      }
    ]
  }
]

export const kycManageRouter = [
  {
    path: "/kyc-manage",
    component: Home,
    redirect: "/kyc-manage/kyc-list",
    icon: "shouye",
    name: "KYC管理",
    noDropdown: true,
    children: [
      {
        path: "kyc-list",
        component: KycList
      }
    ]
  }
]

export const projectManageRouter = [
  {
    path: "/project-manage",
    component: Home,
    redirect: "/project-manage/project-list",
    icon: "shouye",
    name: "项目管理",
    noDropdown: true,
    children: [
      {
        path: "project-list",
        component: function() {
          return import('@/views/project-manage/ProjectList')
        }
      }
    ]
  }
]

export const transactionManageRouter = [
  {
    path: "/transaction-manage",
    component: Home,
    redirect: "/transaction-manage/transaction-list",
    icon: "shouye",
    name: "交易管理",
    noDropdown: true,
    children: [
      {
        path: "transaction-list",
        component: TransactionList
      }
    ]
  }
]

export const systemManageRouter = [
  {
    path: "/system-manage",
    component: Home,
    redirect: "/system-manage/system-list",
    icon: "shezhi",
    name: "系统管理",
    noDropdown: true,
    children: [
      {
        path: "system-list",
        component: SystemList
      }
    ]
  }
]

export const adManageRouter = [
  {
    path: "/ad-manage",
    redirect: "/ad-manage/ad-site",
    component: Home,
    icon: "shouye",
    name: "广告相关",
    meta: {
      authRule: ["ad_manage"]
    },
    children: [
      {
        path: "ad-site",
        component: AdSite,
        name: "广告位管理",
        icon: "shouye",
        meta: {
          authRule: ["admin/ad.site/index"]
        }
      },
      {
        path: "ad",
        component: Ad,
        name: "广告管理",
        icon: "shouye",
        meta: {
          authRule: ["admin/ad.ad/index"]
        }
      }
    ]
  }
]


export const userManageRouter = [
  {
    path: "/user-manage",
    redirect: "/user-manage/admin-manage/index",
    component: Home,
    icon: "mingpian",
    name: "用户管理",
    meta: {
      authRule: ["user_manage"]
    },
    children: [
      {
        path: "/user-manage/admin-manage",
        component: AdminRouter,
        redirect: "/user-manage/auth-admin/index",
        name: "管理组",
        icon: "shouye",
        meta: {
          authRule: ["user_manage/admin_manage"]
        },
        children: [
          {
            path: "auth-admin",
            component: AuthAdmin,
            name: "管理员管理",
            icon: "shouye",
            meta: {
              authRule: ["admin/auth.admin/index"]
            }
          },
          {
            path: "auth-role",
            component: AuthRole,
            name: "角色管理",
            icon: "shouye",
            meta: {
              authRule: ["admin/auth.role/index"]
            }
          },
          {
            path: "auth-permissionRule",
            component: AuthPermissionRule,
            name: "权限管理",
            icon: "shouye",
            meta: {
              authRule: ["admin/auth.permission_rule/index"]
            }
          }
        ]
      }
    ]
  }
];


export default new Router({
  routes: baseRouter
})

// import 和 resolve => require()策略的选择
// 前者应该在一些经常使用的组件/路由 处使用  后者在偶尔调用的地方使用
// 有助于提升程序性能
