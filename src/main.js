//import Vue from 'vue'
import { createApp } from 'vue'
import './style.css'
import App from './views/Login.vue'
import router from './router.js'

const app = createApp(App);
app.use(router);
app.mount('#app');
/*new Vue({
    router,
    render : h => h(App)
}).$mount('#app')*/
//createApp(App).mount('#app')



