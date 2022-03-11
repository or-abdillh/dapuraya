<template>
	<main>
		<HeaderProducts :title="dropPointName" />

		<section class="columns-2 mt-40">
			<div @click="toOrders" class="active:scale-95 duration-300 w-44 flex items-center gap-2 mb-5 bg-orange-500 rounded-xl px-3 py-2 text-gray-50">
				<i class="fa fa-user"></i>
				<p class="text-base">42 customer telah order</p>
			</div>
			<template v-for="card in 8" :key="card">
				<CardProduct v-on:orderTap="showBottomSheet" :source="exampleCard" />
			</template>
		</section>

		<BottomSheet v-on:close="closeBottomSheet" :show="isShow" :order="order" />
	</main>	
</template>

<script setup>

	import { useRoute, useRouter } from 'vue-router'
	import { computed, ref } from 'vue'
	import HeaderProducts from '@/components/HeaderProducts.vue'
	import CardProduct from '@/components/CardProduct.vue'
	import BottomSheet from '@/components/BottomSheet.vue'

	const route = useRoute()
	const router = useRouter()
	const dropPointName = computed(() => route.params.dropPointName)

	const isShow = ref(false)
	let order = ref({
		pcs: 0,
		total: 45000
	})

	const showBottomSheet = val => {
		setTimeout(() => {
			order.value = val
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
			router.push({ name: 'Orders' })
		}, 300);
	}
 	
	const exampleCard = {
		thumb: '/american-risol.jpg',
		title: 'American risol',
		price: 45000,
		prefix: 'Rp',
		sold: 30,
		stock: 44
	}

</script>
