import { createRouter, createWebHistory } from 'vue-router'
import Layout from "@/layout/index.vue";

const routerHistory = createWebHistory()
const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            name: '登录页',
            redirect: '/home',
        },

        {
            path: '/home',
            name: '首页',
            component: () => import('@/views/home/index.vue'),
        },

        {
            path: '/404',
            name: '404',
            component: Layout,
            redirect: '/404',
            component: () => import('@/views/404/index.vue'),
        },
        {
            path: '/screen',
            name: 'screen',
            component: Layout,
            redirect: '/screen',
            component: () => import('@/views/screen/index.vue'),
        },
    ]
})

export default router