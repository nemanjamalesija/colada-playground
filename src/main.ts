import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { PiniaColada } from '@pinia/colada'
import App from './App.vue'
import SecondPage from './pages/second-page.vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import HomePage from './pages/home-page.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/second-page', component: SecondPage },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.use(PiniaColada)

app.mount('#app')
