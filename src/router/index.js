import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{
		name: 'Home',
		path: '/',
		component: () => import('@/views/Home.vue')
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
		name: 'Orders',
		path: '/orders/:dropPointName',
		component: () => import('@/views/Orders.vue')
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
