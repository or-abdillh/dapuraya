<template>
	<section class="break-inside-avoid w-42 mb-8 rounded-lg bg-white shadow-sm overflow-hidden">
		<img :src="source.thumb" class="active:scale-95 z-10 duration-300 w-full aspect-square" />
		<div class="py-4 px-2 text-center text-sm">
			<h1 class="font-medium">{{ source.title }}</h1>
			<h2 class="font-medium">{{ source.prefix }} {{ source.price.toLocaleString('id') }}</h2>
			<p class="text-xs">
				stok {{ source.stock }}, masih ada <span class="text-red-600">{{ source.stock - source.sold }}</span>
			</p>
			<div 
				:class="count > 0 ? 'bg-green-500' : 'bg-gray-400'"
				class="w-8/12 mx-auto duration-300 flex items-center justify-between px-4 text-gray-100 text-base font-medium rounded-2xl mt-4">
				<button @click="increment" class="active:scale-95 text-xl"> + </button>
				{{ count }}
				<button @click="decrement" class="active:scale-95 text-xl"> - </button>
			</div>
		</div>
	</section>
</template>

<script setup>

	import { ref, watch, computed } from 'vue'
	import { useOrders } from '@/stores/orders'

	const orders = useOrders()
	const simpleItem = computed(() => orders.getSimpleItem)
	const props = defineProps({
		source: {
			type: Object
		}
	})

	const count = ref(0)
	const price = props.source.price
	const id = props.source.id

	const decrement = () => {
		if ( count.value > 0 ) {
			count.value--
			orders.addItem({ amount: count.value, price: price * count.value, id })
		}
	}

	const limit = props.source.stock - props.source.sold
	const increment = () => {
		if ( count.value < limit ) {
			count.value++
			orders.addItem({ amount: count.value, price: price * count.value, id })
			console.log(orders.items)
		}
	}


</script>
