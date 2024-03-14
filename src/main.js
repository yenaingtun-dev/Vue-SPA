import './assets/style.css'
import { createMemoryHistory, createRouter } from 'vue-router'
import { createApp } from 'vue'
import App from './App.vue'
import HomeView from './views/HomeView.vue'
import SignIn from './views/SignInView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/signIn', component: SignIn, props: true },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

createApp(App).use(router).mount('#app')
