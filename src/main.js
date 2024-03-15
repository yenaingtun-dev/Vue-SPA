import './assets/style.css'
import { createMemoryHistory, createRouter } from 'vue-router'
import { createApp } from 'vue'
import App from './App.vue'
import HomeView from './views/HomeView.vue'
import SignIn from './views/SignInView.vue'
import Register from './views/RegisterView.vue'

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
  { path: '/signIn', beforeEnter: guest,  component: SignIn },
  { path: '/register', beforeEnter: guest,  component: Register },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

createApp(App).use(router).mount('#app')
