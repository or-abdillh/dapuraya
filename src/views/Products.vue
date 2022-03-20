<template>
	<main>
		<HeaderProducts :title="dropPointName" />

		<section class="columns-2 mt-40">
			<div @click="toOrders" class="scale-95 duration-300 w-42 flex items-center gap-4 mb-5 bg-orange-500 rounded-xl px-3 py-2 text-gray-50">
				<i class="fa fa-user"></i>
				<p class="text-base">{{ ordersCount }} customer telah order</p>
			</div>
			<template v-for="card in products" :key="card.id">
				<CardProduct :source="card" />
			</template>
		</section>
		
		<BottomSheet v-on:close="closeBottomSheet" :show="isShow" />
		<FloatingOrder v-on:order="showBottomSheet" />
	</main>	
</template>

<script setup>

	import { useRoute, useRouter } from 'vue-router'
	import { computed, ref, onMounted } from 'vue'
	import http from '@/http'
	import HeaderProducts from '@/components/HeaderProducts.vue'
	import CardProduct from '@/components/CardProduct.vue'
	import BottomSheet from '@/components/BottomSheet.vue'
	import FloatingOrder from '@/components/FloatingOrder.vue'
	import { useDropPoints } from '@/stores/dropPoints' 
	import { useOrders } from '@/stores/orders'

	const route = useRoute()
	const router = useRouter()
	const dropPoints = useDropPoints()
	const orders = useOrders()
	const dropPointName = computed(() => dropPoints.current.name)

	//Get products and orders count
	const products = ref([])
	const ordersCount = ref(0)
	onMounted(() => {
		http.get('/products/ready-stock', response => {
			if (response.status) products.value = response.results.products
			else alert(response)
		})

		http.get(`/orders/count/${dropPoints.current.id}`, response => {
			if (response.status) ordersCount.value = response.results.count
			else alert(response)
		})
	})

	const isShow = ref(false)

	const showBottomSheet = val => {
		setTimeout(() => {
			isShow.value = true
		}, 300)
	}

	const closeBottomSheet = () => {
		setTimeout(() => {
			isShow.value = false
		}, 300)
	}

	const toOrders = () => {
		setTimeout(() => {
			router.push({ name: 'Orders', params: { dropPointName: dropPointName.value } })
		}, 300);
	}
 	
	const exampleCard = [
		{
			thumb: '/american-risol.jpg',
			title: 'American risol',
			price: 45000,
			prefix: 'Rp',
			sold: 30,
			stock: 44,
			id: 1
		},
		{
			thumb: '/american-risol.jpg',
			title: 'American risol',
			price: 45000,
			prefix: 'Rp',
			sold: 30,
			stock: 44,
			id: 2
		},
		{
			thumb: '/american-risol.jpg',
			title: 'American risol',
			price: 45000,
			prefix: 'Rp',
			sold: 30,
			stock: 44,
			id: 3
		},
		{
			thumb: '/american-risol.jpg',
			title: 'American risol',
			price: 45000,
			prefix: 'Rp',
			sold: 30,
			stock: 44,
			id: 4
		},
		{
			thumb: '/american-risol.jpg',
			title: 'American risol',
			price: 45000,
			prefix: 'Rp',
			sold: 30,
			stock: 44,
			id: 5
		},
		{
			thumb: '/american-risol.jpg',
			title: 'American risol',
			price: 45000,
			prefix: 'Rp',
			sold: 30,
			stock: 44,
			id: 6
		}
	]

</script>
