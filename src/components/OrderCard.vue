<template>
    <section class="w-full  mb-8 bg-white overflow-hidden rounded-xl shadow-sm flex justify-between flex-wrap items-center">
        <div class="pl-5 py-3">
            <p class="text-sm mb-3">{{ source.date }}</p>
            <p class="font-medium">{{ source.name }}</p>
            <p>{{ source.phone }}</p>
        </div>
        <div class="text-right pr-5 py-3">
            <p>{{ source.pcs }} pcs</p>
            <p>{{ source.prefix }} {{ source.price.toLocaleString('id') }}</p>
            <button style="width:25px; height: 25px" class="mt-3 px-1  rounded-full" :class="source.paymentStatus ? 'bg-green-300' : 'bg-red-300'">
                <i @click="chevronDown = !chevronDown" :class="chevronClass" class="fa"></i>
            </button>
        </div>
        <div v-if="chevronDown" class="duration-300 w-full flex justify-between items-center py-3 px-5" :class="source.paymentStatus ? 'bg-green-300' : 'bg-red-300'">
            <p>{{ source.item }}</p>
            <p>{{ source.prefix }} {{ source.price.toLocaleString('id') }}</p>
            <p>{{ source.pcs }}</p>
        </div>
    </section>
</template>

<script setup>

    import { ref, reactive } from 'vue'

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
        'fa-chevron-down': chevronDown.value,
        'fa-chevron-up': !chevronDown.value
    })

</script>
