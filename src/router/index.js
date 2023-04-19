import Layout from '@/views/Layout'
import Home from '@/views/Home'
import Search from '@/views/Search'
import Play from '@/views/Play'
import {createRouter, createWebHistory} from 'vue-router'
 
const routerHistory = createWebHistory()
 

const routes=[
    {
        path: '/',
        redirect: '/layout'
    },
    {
        path: '/layout',
        redirect: '/layout/home',
        component: Layout,
        children: [
            {
                path: 'home',
                component: Home,
                meta: {
                    title: "首页"
                }
            },
            {
                path: 'search',
                component: Search,
                meta: {
                    title: '搜索'
                }
            }
        ]
    },
    {
        path: '/play',
        component: Play
    }
];
const routerss = createRouter({
    history: routerHistory,
     /*
      *   在这里和vue2一样写路由配置
     */
     routes
});
export default routerss;