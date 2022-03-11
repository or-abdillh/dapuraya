<template>
  <main class="min-h-screen bg-green-500 text-gray-100 grid place-items-center">
      <div class="text-center w-10/12">
          <i class="fa fa-check text-green-500 bg-gray-100 rounded-full text-6xl mb-6 p-3" ></i>
          <h1 class="text-3xl font-medium">Yeay!</h1>
          <h3 class="text-lg font-medium">Orderan sudah diterima</h3>
          <p class="text-sm">Kami akan mengirimi struk dan rekening untuk transfer</p>
          <button @click="backToHome" class="active:scale-75 duration-300 border-2 border-gray-100 px-5 py-2 rounded-full mt-8">Kembali ke Halaman Depan</button>
      </div> 
  </main>
</template>

<script setup>
    import { useRouter } from 'vue-router';

    const router = useRouter()
    const backToHome = () => {
        setTimeout(() => {
            router.push({ name: 'welcome' })
        }, 300)
    }
</script>
