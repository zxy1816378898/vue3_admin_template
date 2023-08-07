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
            path: '/login',
            name: '登录页',
            component: () => import('@/views/login/index.vue'),
        },

        {
            path: '/home',
            name: '首页',
            component: () => import('@/views/home/index.vue'),
        },
        {
            path: '/screen',
            name: 'screen',
            component: Layout,

            component: () => import('@/views/screen/index.vue'),
        },
        {
            path: '/:pathMatch(.*)*',

            component: () =>
                import('@/views/error/404.vue'),
            hidden: true,
        },
        {
            path: '/401',
            component: () =>
                import('@/views/error/401'),
            hidden: true,
        },
    ]
})

export default router