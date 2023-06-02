import { createRouter, createWebHistory } from 'vue-router'

//Components
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import SignUp from './views/SignUp.vue'
import Profile from './views/Profile.vue'
import NotImplemented from './views/NotImplemented.vue'


const routes = [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
        },
        {
            path: '/signup',
            name: 'signup',
            component: SignUp,
        },
        {
            path:'/profile',
            name:'profile',
            component: Profile,
        }, 
        {
            path:'/messages',
            name:'messages',
            component: NotImplemented,
        }
        
    ]


const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router