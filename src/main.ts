import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { PiniaColada } from '@pinia/colada'
import App from './App.vue'

const app = createApp(App)
app.use(createPinia())
app.use(PiniaColada)

app.mount('#app')
