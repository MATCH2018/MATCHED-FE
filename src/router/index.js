import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginCheck from '../views/LoginCheck.vue'
import Register from '../views/UserRegister.vue'
import passwordFind from '../views/Password_find.vue'
import emailVerify from '../views/Email_verify.vue'
import Board1 from '../views/Board1.vue'
import Board1Write from '../views/BoardWrite.vue'
import Board2 from '../views/Board2.vue'
import Board3 from '../views/Board3.vue'
import Board4 from '../views/Board4.vue'
import Notice from '../views/Notice.vue'
import view from '../views/ContentView.vue'
import CompleteVerify from '../views/complete_verify.vue'
import users from '../views/Mypage.vue'
import store from '../store/store'
import MainPage from '../views/MainPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/users',
      name: 'users',
      component: users
    },
    {
      path: '/CompleteVerify',
      name: 'completeVerify',
      component: CompleteVerify
    },
    {
      path: '/Board/:BoardId/view/:postId',
      name: 'contentview',
      component: view
    },
    {
      path: '/Board/Notice',
      component: Notice
    },
    {
      path: '/BoardWrite',
      component: Board1Write
    },
    {
      path: '/Board/capstone',
      component: Board3
    },
    {
      path: '/Board/poom',
      component: Board4
    },
    {
      path: '/Board/tutoring',
      component: Board1
    },
    {
      path: '/Board/club',
      component: Board2
    },
    {
      path: '/Email_verify',
      component: emailVerify
    },
    {
      path: '/Password_find',
      name: 'Password_find',
      component: passwordFind
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/LoginCheck',
      name: 'LoginCheck',
      component: LoginCheck
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/',
      name: 'main',
      component: MainPage,
      meta: { requiresAuth: true }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters.isAuthenticated
  const requiresAuth = to.matched.some((route) => route.meta.requiresAuth)

  if (requiresAuth && !isAuthenticated) {
    next('/')
  } else {
    next()
  }
})

export default router
