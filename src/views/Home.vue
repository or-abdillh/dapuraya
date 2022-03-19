<template>
	<main>
		<section class="flex flex-col gap-1 items-center mt-10">
			<img src="/dapuraya.jpg" class="rounded-full mb-3" width="120" />
			<h1 class="font-semibold text-2xl">@dapuraya</h1>
			<p class="text-sm text-center">
				Hai lovely customer <br>
				Untuk memulai order, plih lokasi Drop Point kami
			</p>
		</section>

		<section class="mt-12">
			<template v-for="(item, x) in dropPoints" :key="x">
				<PillNavigation :source="item" />
			</template>
		</section>
	</main>
</template>

<script setup>

	import PillNavigation from '@/components/PillNavigation.vue'
	import http from '@/http'
	import { onMounted, ref } from 'vue'

	const dropPoints = ref({})

	onMounted(() => {
		http.get('/drop-points/open-order', response => {
			if (response.status) {
				dropPoints.value = response.results.dropPoints
			}
		})
	})
	
</script>
