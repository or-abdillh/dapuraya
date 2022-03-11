<template>
	<section class="z-20 fixed top-0 left-0 right-0">
		<div class="w-full md:w-6/12 lg:w-5/12 md:mx-auto xl:w-4/12 bg-primary p-5">
			<div class="flex justify-between mb-6 items-center text-2xl">
				<i @click="router.go(-1)" class="fa fa-arrow-left"></i>
				<h1 class="text-lg font-medium">{{ title }}</h1>
				<i class="fa fa-arrow-right"></i>
			</div>
			<div class="flex text-center text-sm gap-6">
				<template v-for="date in dates" :key="date.id">
					<span 
					:class="currentDate === date.id ? 'border-b-4 border-green-500 text-base' : ''"
					class="rounded pb-1 duration-300"
					@click="currentDate = date.id"
					>{{ date.value }}</span>
				</template>
			</div>
		</div>
	</section>
</template>

<script setup>

	import { ref } from 'vue'
	import { useRouter } from 'vue-router'  

	const props = defineProps({
		title: {
			type: String,
			default: 'The title'
		}
	})

	const currentDate = ref(2)
	const router = useRouter()

	const dates = [
		{
			value: 'Selasa, 3 maret 2022',
			id: 1
		},
		{
			value: 'Rabu, 4 Maret 2022',
			id: 2
		},
		{
			value: 'Kamis, 5 maret 2022',
			id: 3
		}
	]

</script>
