import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: "首页",
      keepAlive: true
    },
    redirect: '/home',
    component: () => import("./../views/Home/Index.vue"),
    children: [
      {
        path: '/home',
        name: 'Home',
        meta: {
          title: "Home",
          keepAlive: true
        },
        component: () => import("./../components/home/Home.vue"),

      },
      {
        path: '/shop',
        name: 'Shop',
        meta: {
          title: "Shop",
          keepAlive: true
        },
        component: () => import("./../components/shop/Index.vue"),

      },
      {
        path: '/message',
        name: 'Message',
        meta: {
          title: "Message",
          keepAlive: true
        },
        component: () => import("./../components/message/Index.vue"),

      },
      {
        path: '/mine',
        name: 'Mine',
        meta: {
          title: "Mine",
          keepAlive: true
        },
        component: () => import("./../components/mine/Index.vue"),

      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  next()
})

export default router