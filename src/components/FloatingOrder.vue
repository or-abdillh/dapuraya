<template>
	<section :class="items.length > 0 && amounts > 0 ? 'bottom-10' : '-bottom-full'" class="duration-300 fixed left-0 right-0">
		<div class="flex justify-between items-center w-9/12 md:w-4/12 lg:w-3/12 mx-auto xl:w-3/12 bg-green-600 px-5 py-3 rounded-full text-gray-100 shadow">
			<p>{{ amounts }} item</p>
			<p>Rp {{ total.toLocaleString('id') }}</p>
			<span @click="order()" class="active:scale-75 duration-300 font-medium">ORDER</span>
		</div>
	</section>
</template>

<script setup>

	import { computed, ref, watch } from 'vue'
	import { useOrders } from '@/stores/orders'

	const orders = useOrders()
	const emits = defineEmits(['order'])

	let amounts = ref(0)
	let total = ref(0)
	
	const items = computed(() => orders.items)

	watch(items.value, value => {
		let current = {
			amounts: 0,
			total: 0
		}
		
		items.value.forEach(item => {
			current.amounts += item.amount
			current.total += item.price
		})

		amounts.value = current.amounts
		total.value = current.total
	})

	const order = () => {
		setTimeout(() => {
			emits('order', { total: total.value, pcs: amounts.value })
		}, 300)
	}

</script>
