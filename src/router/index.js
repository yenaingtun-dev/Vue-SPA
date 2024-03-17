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
    return next("/login");
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
    component: function () {
      return import('../views/SignInView.vue')
    }
  },
  {
    path: '/register',
    name: 'register',
    component: function () {
      return import('../views/RegisterView.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
