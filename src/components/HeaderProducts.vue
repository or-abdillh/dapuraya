<style scoped>

	.no-scrollbar::-webkit-scrollbar {
		display: none;
		width: 0;
	}

</style>

<template>
	<section class="z-20 fixed top-0 left-0 right-0">
		<div class="w-full md:w-6/12 lg:w-5/12 md:mx-auto xl:w-4/12 bg-primary p-5">
			<div class="flex justify-between mb-6 items-center text-2xl">
				<i @click="router.go(-1)" class="fa fa-arrow-left"></i>
				<h1 class="text-lg font-medium">{{ title }}</h1>
				<i class="fa fa-arrow-right"></i>
			</div>
			<div class="no-scrollbar flex overflow-scroll text-center text-sm gap-6">
				<template v-for="arr in openOrdersArr" :key="arr.id">
					<span 
					:class="currentDate === arr.id ? 'border-b-4 border-green-500' : ''"
					class="rounded pb-1 duration-300"
					style="min-width: 25%; max-width: 30%"
					@click="clicked(arr)"
					>{{ arr.date }}</span>
				</template>
			</div>
		</div>
	</section>
</template>

<script setup>

	import { ref, computed } from 'vue'
	import { useRouter } from 'vue-router'  
	import { useOpenOrders } from '@/stores/openOrders'

	const openOrders = useOpenOrders()

	const openOrdersArr = computed(() => openOrders.openOrders)
	openOrders.fillCurrent(openOrdersArr.value[0])

	const props = defineProps({
		title: {
			type: String,
			default: 'The title'
		}
	})

	const currentDate = ref(openOrdersArr.value[0].id)
	const router = useRouter()

	const clicked = arr => {
		currentDate.value = arr.id
		openOrders.fillCurrent(arr)
	}

</script>
