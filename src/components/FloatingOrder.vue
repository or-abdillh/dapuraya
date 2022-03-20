<template>
	<section :class="carts.length > 0 && amounts > 0 ? 'bottom-10' : '-bottom-full'" class="duration-300 fixed left-0 right-0">
		<div class="flex justify-between items-center w-9/12 md:w-4/12 lg:w-3/12 mx-auto xl:w-3/12 bg-green-600 px-5 py-3 rounded-full text-gray-100 shadow">
			<p>
				<i class="fa fa-circle text-yellow-400 text-sm"></i>
				{{ amounts }} item
			</p>
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
	
	const carts = computed(() => orders.carts)

	watch(carts.value, value => {
		let current = {
			amounts: 0,
			total: 0
		}
		
		carts.value.forEach(item => {
			current.amounts += item.amounts
			current.total += item.price
		})

		amounts.value = current.amounts
		total.value = current.total
	})

	const order = () => {
		orders.amount = amounts.value
		orders.total = total.value
		
		setTimeout(() => {
			emits('order')
		}, 300)
	}

</script>
