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
      {
        path: '/product-selected',
        name: 'Product-Selected',
        component: () => import('../views/general/Product-Selected.vue')
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
  // ADMIN ROUTER
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/admin/Main.vue'),
    redirect: {
      name: 'Dashboard-Admin'
    },
    children: [
      {
        path: '/dashboard-Admin',
        name: 'Dashboard-Admin',
        component: () => import('../views/admin/Dashboard.vue')
      },
      {
        path: '/tutor-Admin',
        name: 'Tutor-Admin',
        component: () => import('../views/admin/Tutor.vue')
      },
      {
        path: '/student-Admin',
        name: 'Student-Admin',
        component: () => import('../views/admin/Student.vue')
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
        path: '/module-tutor',
        name: 'Module-Tutor',
        component: () => import('../views/tutor/Module.vue')
      },
      {
        path: '/jadwal-tutor',
        name: 'Jadwal-Tutor',
        component: () => import('../views/tutor/Jadwal.vue')
      }
    ]
  },
  // STUDENT ROUTER
  {
    path: '/student',
    name: 'Student',
    component: () => import('../views/student/Main.vue'),
    redirect: {
      name: 'Dashboard-Student'
    },
    children: [
      {
        path: '/dashboard-student',
        name: 'Dashboard-Student',
        component: () => import('../views/student/Dashboard.vue')
      },
      {
        path: '/profile-student',
        name: 'Profile-Student',
        component: () => import('../views/student/Profile.vue')
      },
      {
        path: '/class-student',
        name: 'Class-Student',
        component: () => import('../views/student/Class.vue')
      },
      {
        path: '/select-packet-student',
        name: 'Select-Packet-Student',
        component: () => import('../views/student/Select-Packet.vue')
      },
      {
        path: '/schedule-student',
        name: 'Schedule-Student',
        component: () => import('../views/student/Schedule.vue')
      },
      {
        path: '/finance-student',
        name: 'Finance-Student',
        component: () => import('../views/student/Finance.vue')
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
