<template>
    <main class="grid place-items-center pt-24">
        <img src="/dapuraya.jpg" width="120" class="rounded-full mb-3" />
        <h1 class="font-semibold text-2xl">@dapuraya</h1>
        <form @submit.prevent="login" class="w-8/12 mx-auto flex flex-wrap gap-3 mt-4">
            <input class="field border-b-2 border-gray-700" type="text" placeholder="Username">
            <div class="w-full flex items-center border-b-2 border-gray-700">
                <input class="field" :type="showPassword ? 'text' : 'password'" placeholder="Password">
                <button type="button"><i @click="showPassword = !showPassword" :class="showPassword ? 'fa-eye' : 'fa-eye-slash'" class="fa"></i></button>
            </div>
            <button class="bg-orange-500 text-gray-100 active:scale-95 duration-300 text-base px-5 py-1 w-8/12 mx-auto rounded-full mt-4" type="submit">LOGIN</button>
        </form>
    </main>
</template>

<style scoped>
 .field {
     @apply w-full bg-primary py-1;
     outline: none;
 }
</style>

<script setup>

    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    const router = useRouter()

    const login = () => {
        setTimeout(() => {
            router.push({
                name: 'welcome'
            })
        }, 300)
    }

    const showPassword = ref(false)

</script>
