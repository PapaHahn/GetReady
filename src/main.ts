import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Home from './views/Home.vue'
import Counter from './views/Counter.vue'
import { createMemoryHistory, createRouter } from 'vue-router'

const routes = [
    { path: '/', component: Home },
    { path: '/counter', component: Counter },
  ]
  
  const router = createRouter({
    history: createMemoryHistory(),
    routes: routes,
  })

const app = createApp(App)
app.use(router)
app.mount('#app')