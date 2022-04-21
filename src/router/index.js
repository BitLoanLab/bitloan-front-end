import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from "@/layout";

Vue.use(VueRouter)

const routes = [

    {
        path: '/',
        component: layout,
        redirect: '/detail',
        children: [
            {
                path: '/market',
                name: 'market',
                component: () => import('../views/list.vue'),
            },
            {
                path: '/detail',
                name: 'detail',
                component: () => import('../views/detail.vue'),
            },
            {
                path: '/demoList',
                name: 'demoList',
                component: () => import('../views/lanhu_bitloan/index'),
            },
            {
                path: '/assets',
                name: 'assets',
                component: () => import('../views/assets.vue'),
            }
        ]
    }
]
const router = new VueRouter({
    routes
})

export default router
