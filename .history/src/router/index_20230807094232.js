import { createRouter, createWebHistory } from 'vue-router'
import layout from "@/layout/index.vue";

const routerHistory = createWebHistory()
const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            name: 'Login',
            component: () => import('../views/login.vue')
        },
        {
            path: '/page1 ',
            component: page1
        },
    ]
})
export default router