<template>
	<section class="break-inside-avoid w-42 mb-8 rounded-lg bg-white shadow-sm overflow-hidden">
		<img @click="orderTap" :src="source.thumb" class="active:scale-95 z-10 duration-300 w-full aspect-square" />
		<div class="py-4 px-2 text-center text-sm">
			<h1 class="font-medium">{{ source.title }}</h1>
			<h2 class="font-medium">{{ source.prefix }} {{ source.price.toLocaleString('id') }}</h2>
			<p class="text-xs">
				stok {{ source.stock }}, masih ada <span class="text-red-600">{{ source.stock - source.sold }}</span>
			</p>
			<div class="w-8/12 mx-auto duration-300 flex items-center justify-between px-4 bg-green-500 text-gray-100 text-base font-medium rounded-2xl mt-4">
				<button @click="increment" class="active:scale-95 text-xl"> + </button>
				{{ count }}
				<button @click="decrement" class="active:scale-95 text-xl"> - </button>
			</div>
		</div>
	</section>
</template>

<script setup>

	import { ref, watch } from 'vue'

	const props = defineProps({
		source: {
			type: Object
		}
	})

	const emits = defineEmits(['orderTap'])
	const count = ref(0)

	const decrement = () => {
		if ( count.value > 0 ) count.value--
	}

	const limit = props.source.stock - props.source.sold
	const increment = () => {
		if ( count.value < limit ) count.value++
	}

	const price = props.source.price
	
	const orderTap = () => {
		emits('orderTap', { total: count.value * price, pcs: count.value})
	}

</script>
