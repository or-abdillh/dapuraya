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
				<p>{{ order.pcs }} item, Rp {{ order.total.toLocaleString('id') }}</p>
				<small>*belum termasuk biaya ongkir</small>
			</div>

			<form @submit.prevent="submitForm" class="flex flex-wrap gap-3 mt-6 justify-between">
				<input class="field" type="phone" placeholder="No Whatsapp">
				<input class="field" type="text" placeholder="Nama">
				<div class="radio-wrapper">
					<input name="method" type="radio" value="true" />
					<label for="method">ambil sendiri</label>
				</div>
				<div class="radio-wrapper">
					<input name="method" type="radio" value="false" />
					<label for="method">diantar kurir</label>
				</div>
				<textarea rows="3" class="field" placeholder="Alamat"></textarea>

				<button @click="emits('close')" class="text-lg font-medium text-green-900 active:scale-95 duration-300" type="reset">Kembali</button>
				<button class="text-base font-medium bg-green-800 text-gray-200 px-3 w-5/12 rounded-3xl py-2 active:scale-95 duration-300" type="submit">ORDER</button>
			</form>
		</div>
	</section>
</template>

<script setup>

	import { useRouter } from 'vue-router';

	const props = defineProps({
		show: {
			type: Boolean
		},
		order: {
			type: Object,
			default: {
				total: 90000,
				pcs: 2
			}
		}
	})

	const emits = defineEmits(['close'])
	const router = useRouter()
	const submitForm = () => {
		setTimeout(() => {
			router.push({
				name: 'Notification'
			})
		}, 300)
	}

</script>
