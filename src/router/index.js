import { createRouter, createWebHistory } from 'vue-router'

import store from '../store/index'

const routes = [
  // GENERAL ROUTER
  {
    path: '/',
    name: 'General',
    component: () => import('../views/general/Main.vue'),
    redirect: {
      name: 'Home'
    },
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('../views/general/Home.vue')
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('../views/general/About.vue')
      },
      {
        path: '/faq',
        name: 'FAQ',
        component: () => import('../views/general/FAQ.vue')
      },
      {
        path: '/product',
        name: 'Product',
        component: () => import('../views/general/Product.vue')
      },
      // AUTH ROUTER
      {
        path: '/login',
        name: 'Login',
        component: () => import('../views/auth/Login.vue')
      },
      {
        path: '/register',
        name: 'Register',
        component: () => import('../views/auth/Register.vue')
        // meta: { requiresAuth: false }
      }
    ]
  },
  // TUTOR ROUTER
  {
    path: '/tutor',
    name: 'Tutor',
    component: () => import('../views/tutor/Main.vue'),
    redirect: {
      name: 'Dashboard-Tutor'
    },
    children: [
      {
        path: '/dashboard-tutor',
        name: 'Dashboard-Tutor',
        component: () => import('../views/tutor/Dashboard.vue')
      },
      {
        path: '/profile-tutor',
        name: 'Profile-Tutor',
        component: () => import('../views/tutor/Profile.vue')
      },
      {
        path: '/jadwal-tutor',
        name: 'Jadwal-Tutor',
        component: () => import('../views/tutor/Jadwal.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLogin) {
      next({
        path: '/login'
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.getters.isLogin) {
      next({
        name: 'Home'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
