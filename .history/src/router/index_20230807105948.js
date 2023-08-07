import { createRouter, createWebHistory } from 'vue-router'
import Layout from "@/layout/index.vue";

const routerHistory = createWebHistory()
const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            name: '根登录页',
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
            children: [
                {
                    path: '',
                    component: () => import('@/views/screen/index.vue'),
                }
            ]
        },
        {
            path: '/401',
            component: Layout,
            hidden: true,
            children: [
                {
                    path: '',
                    component: () => import('@/views/error/401.vue'),
                }
            ]
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: '/404',
            name: '任意路由',
            hidden: true,
            meta: {
                title: '任意路由',
                icon: 'DataLine',
            },
        },
    ]
})

export default router
