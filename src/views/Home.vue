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
			<template v-for="(pill, x) in pills" :key="x">
				<PillNavigation :source="pill" />
			</template>
		</section>
	</main>
</template>

<script setup>

	import PillNavigation from '@/components/PillNavigation.vue'

	const pills = [
		{
			title: 'Amuntai',
			subtitle: 'belum open order',
			useGreenIcon: false 
		},
		{
			title: 'Handi Bakti',
			subtitle: 'belum open order',
			useGreenIcon: false 
		},
		{
			title: 'Marabahan',
			subtitle: 'Sabtu, 12 maret 2022',
			useGreenIcon: true 
		}
	]

</script>
