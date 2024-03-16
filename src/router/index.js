import { createMemoryHistory, createRouter } from 'vue-router';
import HomeView from '@/views/HomeView.vue';

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
  { path: '/', component: HomeView },
  { path: '/signIn', beforeEnter: guest,  component: () => import('../views/SignInView.vue') },
  { path: '/register', beforeEnter: guest,  component: () => import('../views/RegisterView.vue') },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})