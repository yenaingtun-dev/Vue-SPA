import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const guest = (to, from, next) => {
  if (!localStorage.getItem("bearerToken")) {
    return next();
  } else {
    return next("/");
  }
};
const auth = (to, from, next) => {
  if (localStorage.getItem("bearerToken")) {
    return next();
  } else {
    return next("/");
  }
};

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/signin',
    name: 'signin',
    beforeEnter: guest,
    component: function () {
      return import('../views/SignInView.vue')
    }
  },
  {
    path: '/register',
    name: 'register',
    beforeEnter: guest,
    component: function () {
      return import('../views/RegisterView.vue')
    }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    beforeEnter: auth,
    component: function () {
      return import('../views/DashboardView.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
