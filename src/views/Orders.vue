<template>
    <section class="fixed top-0 left-0 right-0">
        <div class="bg-primary w-full md:w-6/12 lg:w-5/12 md:mx-auto xl:w-4/12 p-5">
            <section class="flex items-center gap-6 mb-8">
                <i @click="router.go(-1)" class="fa fa-arrow-left active:scale-75 duration-300"></i>
                <div>
                    <h1 class="font-medium">{{ dropPoint.name }}</h1>
                    <p class="text-sm">{{ currentOpenOrder.date }}</p>
                </div>
            </section>

            <section class="flex justify-between items-end">
                <div class="flex gap-2 items-center">
                    <i class="fa fa-search"></i>                
                    <input v-model="key" type="search" class="outline-0 bg-primary border-b-2 border-gray-600" placeholder="search">
                </div>
                <p class="font-medium text-sm">{{ filteredOrders.length }} customer</p>
            </section>
        </div>
    </section>

    <section class="mt-36">
        <template v-for="order in filteredOrders" :key="order.id">
            <OrderCard :source="order" />
        </template>
    </section>
</template>

<script setup>
    import { useRouter, useRoute } from 'vue-router'
    import { ref, watch, computed, onMounted } from 'vue'
    import { useOpenOrders } from '@/stores/openOrders'
    import { useDropPoints } from '@/stores/dropPoints'
    import OrderCard from '@/components/OrderCard.vue'
    import http from '@/http'
    
    const router = useRouter()
    const route = useRoute()
    const openOrders = useOpenOrders()
    const dropPoints = useDropPoints()

    const orders = ref([])
    const filteredOrders = ref([])
    const currentOpenOrder = computed(() => openOrders.current)
    const dropPoint = computed(() => dropPoints.current)
    
    onMounted(() => {
        http.get(`/orders/${dropPoints.current.id}`, response => {
            if (response.status) [orders.value, filteredOrders.value] = [response.results.orders, response.results.orders]
        })
    })
        
    const key = ref('')

    watch(key, val => {
        filteredOrders.value = orders.value.filter(order => order.customer.toLowerCase().includes(val.toLowerCase()))
    })
</script>
