import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{
		name: 'Home',
		path: '/',
		component: () => import('@/views/Login.vue')
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
		name: 'welcome',
		path: '/welcome',
		component: () => import('@/views/Home.vue')
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
