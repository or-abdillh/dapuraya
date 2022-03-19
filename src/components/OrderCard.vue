<template>
    <section class="w-full  mb-8 bg-white overflow-hidden rounded-xl shadow-sm flex justify-between flex-wrap items-center">
        <div class="pl-5 py-3">
            <p class="text-sm mb-3">{{ source.openOrderDate }}</p>
            <p class="font-medium">{{ source.customer }}</p>
            <p>{{ source.phone }}</p>
        </div>
        <div class="text-right pr-5 py-3">
            <p>{{ source.total.items }} pcs</p>
            <p>Rp.{{ source.total.price }},-</p>
            <button style="width:25px; height: 25px" class="mt-3 px-1  rounded-full" :class="source.paymentStatus ? 'bg-green-300' : 'bg-red-300'">
                <i @click="chevronDown = !chevronDown" :class="chevronClass" class="fa"></i>
            </button>
        </div>
        <div v-if="chevronDown" class="duration-300 w-full flex justify-between items-center py-3 px-5 flex-wrap" :class="source.paymentStatus ? 'bg-green-300' : 'bg-red-300'">
            <template v-for="cart in source.carts" :key="cart">
                <span class="w-full flex justify-between">
                    <p class="w-5/12">{{ cart.product }}</p>
                    <p class="w-4/12">Rp.{{ cart.price }},-</p>
                    <p class="w-2/12">{{ cart.amounts }}pcs</p>
                </span>
            </template>
        </div>
    </section>
</template>

<script setup>

    import { ref, reactive, watch } from 'vue'

    const props = defineProps({
        source: {
            type: Object
        }
    })

    const chevronDown = ref(false)
    const paymentStatus = ref( props.source.paymentStatus )

    const chevronClass = reactive({
        'text-green-700': paymentStatus.value,
        'text-red-700': !paymentStatus.value,
        'fa-chevron-down': true,
        'fa-chevron-up': false
    })

    watch(chevronDown, val => {
        [chevronClass['fa-chevron-down'], chevronClass['fa-chevron-up']] = [!val, val]
    })

</script>
