import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Countdown from '../views/Countdown.vue'

// Define the routes
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/countdown',
        name: 'Countdown',
        component: Countdown
    },
]

// Create the router
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router