import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import PrimeVue from 'primevue/config';
import "primevue/resources/themes/bootstrap4-dark-blue/theme.css"
import "primeicons/primeicons.css"
import "primevue/resources/primevue.min.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
let app


app = createApp(App)
app.use(PrimeVue)
app.use(router)
app.use(store)
app.use(store)
app.mount('#app')
