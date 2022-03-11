<template>
	<main class="app" :class="routeName === 'Notification' ? 'p-0' : 'p-5'">
		<router-view></router-view>
	</main>
</template>

<script setup>

	import { computed } from 'vue';
	import { useRoute } from 'vue-router';

	const route = useRoute()
	const routeName = computed(() => route.name)

</script>

<style scoped>
	.app {
		@apply bg-primary min-h-screen w-full md:w-6/12 lg:w-5/12 md:mx-auto xl:w-4/12;
	}
</style>
