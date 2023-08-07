import { createRouter, createWebHistory } from 'vue-router'
import layout from "@/layout/index.vue";

const routerHistory = createWebHistory()
const router = createRouter({
    history: routerHistory,
    routes: [
        { path: "/", redirect: "/home" },
        {
            path: '/',
            name: 'login',
            component: () => import('@/views/login/index.vue')
        },
        {
            path: '/home ',
            name: 'home',
            component: () => import('@/views/home/index.vue')
        },
        {
            path: '/404 ',
            name: '404',
            component: () => import('@/views/404/index.vue')
        },
        {
            path: '/screen ',
            name: 'screen',
            component: () => import('@/views/screen/index.vue')
        },
    ]
})

export default router