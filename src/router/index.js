import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
	{
		name: 'Home',
		path: '/',
		component: Home
	},
	{
		name: 'Products',
		path: '/products/:dropPointName',
		component: () => import('@/views/Products.vue')
	},
	{
		name: 'Notification',
		path: '/notification',
		component: () => import('@/views/Notification.vue')
	},
	{
		name: 'Login',
		path: '/login',
		component: () => import('@/views/Login.vue')
	},
	{
		name: 'Orders',
		path: '/orders',
		component: () => import('@/views/Orders.vue')
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router