<template>
    <section class="fixed top-0 left-0 right-0">
        <div class="bg-primary w-full md:w-6/12 lg:w-5/12 md:mx-auto xl:w-4/12 p-5">
            <section class="flex items-center gap-6 mb-8">
                <i @click="router.go(-1)" class="fa fa-arrow-left active:scale-75 duration-300"></i>
                <div>
                    <h1 class="font-medium">Marabahan</h1>
                    <p class="text-sm">Sabtu 05 maret 2022</p>
                </div>
            </section>

            <section class="flex justify-between items-end">
                <div class="flex gap-2 items-center">
                    <i class="fa fa-search"></i>
                    <input type="search" class="outline-0 bg-primary border-b-2 border-gray-600" placeholder="search">
                </div>
                <p class="font-medium text-sm">42 customer</p>
            </section>
        </div>
    </section>

    <section class="mt-36">
        <template v-for="order in 4" :key="order">
            <template v-for="(card, x) in exampleOrder" :key="x">
                <OrderCard :source="card" />
            </template>
        </template>
    </section>
</template>

<script setup>
    import { useRouter } from 'vue-router';
    import OrderCard from '@/components/OrderCard.vue'
    const router = useRouter()

    const exampleOrder = [
        {
            name: 'Meta',
            phone: '085654036XXX',
            date: 'Sen 5 maret 2022',
            pcs: 2,
            price: 90000,
            prefix: 'Rp',
            item: 'American risol',
            paymentStatus: true
        },
        {
            name: 'Meta',
            phone: '085654036XXX',
            date: 'Sen 5 maret 2022',
            pcs: 2,
            price: 90000,
            prefix: 'Rp',
            item: 'American risol',
            paymentStatus: false
        }
    ]
</script>
