<style scoped>

	.field {
		@apply w-full rounded-lg px-2 py-3 bg-green-400 text-gray-100;
	}

	input::placeholder, textarea::placeholder {
		@apply text-gray-100;
	}

	.radio-wrapper {
		@apply flex items-center text-gray-100 gap-1;
	}

</style>
<template>
	<div v-if="show" class="fixed inset-0 bg-gray-500 z-20 bg-opacity-50"></div>
	<section :class="show ? 'bottom-0' : '-bottom-full'" class="z-30 duration-300 fixed bottom-0 right-0">
		<div class="w-full md:w-6/12 lg:w-5/12 md:mx-auto xl:w-4/12 bg-green-500 py-5 px-8 rounded-t-3xl">
			<div class="text-gray-100 flex justify-between items-center border-b-2 border-gray-200 pb-3">
				<p>{{ orders.amount }} item, Rp.{{ orders.total.toLocaleString('id') }},-</p>
				<small class="text-xs">*belum termasuk biaya ongkir</small>
			</div>
			<form @submit.prevent="submitForm" class="flex flex-wrap gap-3 mt-6 justify-between">
				<input class="field" v-model="form.order.phone" type="number" placeholder="No Whatsapp" required>
				<input class="field" v-model="form.order.customer" type="text" placeholder="Nama" required>
				<div class="radio-wrapper">
					<input name="method" type="radio" v-model="form.order.delivered" value="1" required/>
					<label for="method">ambil sendiri</label>
				</div>
				<div class="radio-wrapper">
					<input name="method" type="radio" v-model="form.order.delivered" value="0" required/>
					<label for="method">diantar kurir</label>
				</div>
				<textarea rows="3" class="field" v-model="form.order.address" placeholder="Alamat" required></textarea>

				<button @click="emits('close')" class="text-lg font-medium text-green-900 active:scale-95 duration-300" type="reset">Kembali</button>
				<button class="text-base font-medium bg-green-800 text-gray-200 px-3 w-5/12 rounded-3xl py-2 active:scale-95 duration-300" type="submit">{{ btnStatus }}</button>
			</form>
		</div>
	</section>
</template>

<script setup>

	import { useRouter } from 'vue-router';
	import { useOrders } from '@/stores/orders'
	import { useDropPoints } from '@/stores/dropPoints'
	import { useOpenOrders } from '@/stores/openOrders'
	import { ref, computed, reactive } from 'vue'
	import http from '@/http'

	const orders = useOrders()
	const dropPoints = useDropPoints()
	const openOrders = useOpenOrders()

	const carts = computed(() => orders.carts)

	const props = defineProps({
		show: {
			type: Boolean,
			default: false
		}
	})

	//Form
	const form = reactive({
		order: {
			openOrderId: computed(() => openOrders.current.id),
			dropPointId: computed(() => dropPoints.current.id),
			customer: '',
			phone: '',
			address: '',
			delivered: 1,
		},
		carts: carts.value
	})

	const btnStatus = ref('ORDER')

	const emits = defineEmits(['close'])
	const router = useRouter()
	const submitForm = () => {
		btnStatus.value = 'ORDER'
		setTimeout(() => {
			btnStatus.value = 'memporoses ...'
			http.post('/order', form, response => {
				if (response.status) {			
					setTimeout(() => {
						//Restore orders
						orders.restore()
						router.push({ name: 'Notification' })
					}, 300)
				}
				else btnStatus.value = 'Coba lagi'
			})
		}, 300)
	}

</script>
