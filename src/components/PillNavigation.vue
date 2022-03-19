<template>
	<section @click="pillAction" class="flex justify-between items-center mb-5 hover:scale-95 active:bg-gray-50 duration-300 bg-white px-5 py-4 rounded-full shadow-sm">
		<div class="flex items-center">
			<i 
				:class="source.openOrders.length > 0 ? 'text-green-600 bg-green-300' : 'text-red-600 bg-red-300'"
				class="fas fa-map-marker-alt grid place-items-center rounded-full block text-lg mr-4" style="width:35px; height: 35px"></i>
			<div>
				<h1 class="font-medium text-lg">{{ source.name }}</h1>
				<p class="text-base">{{ source.openOrders.length > 0 ? source.openOrders[0].date : 'Belum open order' }}</p>
			</div>
		</div>
		<div>
			<i class="fa fa-arrow-right"></i>
		</div>
	</section>
</template>

<script setup>

	import { useRouter } from 'vue-router'
	import { useOpenOrders } from '@/stores/openOrders'
	import { useDropPoints } from '@/stores/dropPoints'

	const router = useRouter()
	const openOrders = useOpenOrders()
	const dropPoints = useDropPoints()

	const pillAction = () => {
		if ( props.source.openOrders.length > 0 ) {
		
			//Fill openOrders and dropPoints state
			openOrders.fillOpenOrders(props.source.openOrders)
			dropPoints.fillCurrent({
				id: props.source.dropPointID,
				name: props.source.name
			})
			
			setTimeout(() => {
				router.push({
					name: 'Products',
					params: {
						dropPointName: props.source.name
					}
				})
			}, 500)
		}
	}

	const props = defineProps({
		source: {
			type: Object
		}
	})

</script>
