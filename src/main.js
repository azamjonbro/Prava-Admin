// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'

// createApp(App).use(router).mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import "vue-toastification/dist/index.css"

const app = createApp(App)

app.use(router)

app.mount('#app')
