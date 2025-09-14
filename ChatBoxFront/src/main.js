import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.js'
import maskDirective from './directives/mask.js'

const app = createApp(App)

app.directive('mask', maskDirective)
app.use(router)
app.mount('#app')
