import { createRouter,createWebHistory } from "vue-router";

const pages = [
    {
        path:'/',
        component:() => import('@/App.vue'),
        children:[
            {
                path:'/',
                redirect:{
                    name:'home'
                }
            },
            {
                path:'/',
                component:() => import('@/layouts/default.vue'),
                children:[
                    {
                        path:'/home',
                        name:'home',
                        component:() => import('@/pages/index.vue')
                    },
                    {
                        path:'/about',
                        name:'about',
                        component:() => import('@/pages/about.vue')
                    }
                ]
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: pages
})

export default router