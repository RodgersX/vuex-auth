import Vue from 'vue'
import Router from 'vue-router'
import store from './store.js'
import login from './components/login.vue'
import secure from './components/secure.vue'
import register from './components/register.vue'

Vue.use(Router)

let router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
        path: '/register',
        name: 'register',
        component: register
        },
        {
        path: '/secure',
        name: 'secure',
        component: secure,
        meta: { 
            requiresAuth: true
        }
        },
    ]
})

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
        if(store.getters.isLoggedIn) {
            next()
            return
        }
        next('/login')
    } else {
        next()
    }
})

export default router