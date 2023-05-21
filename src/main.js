import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import logger from './plugins/logger.js'

const app = createApp(App)

app.use(IonicVue)
app.use(router)
app.mount('#app')
app.use(store)
app.use(logger)