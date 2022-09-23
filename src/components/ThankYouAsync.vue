<script setup>
  import { useRoute } from 'vue-router'
  const route = useRoute()
  const weddingHallId = route.params.id

  const weddingHallsUrl = 'https://private-1be47-duguncomapis.apiary-mock.com/companies';
  const weddingHalls = await fetch(weddingHallsUrl).then(r => r.json())
  const weddingHall = weddingHalls.find(weddingHall => weddingHall.id == weddingHallId)
</script>

<template>
<div class="flex flex-col gap-2 h-screen justify-center items-center">
  <div class="text-5xl text-white bg-teal-500 text-center w-12 h-12 rounded-full">
    &#10003;
  </div>
  <div class="font-semibold text-teal-500">
    Fiyat teklifi isteğin başarıyla iletildi.
  </div>
  <div>
    {{ weddingHall.name }} sana en kısa sürede geri dönüş sağlayacak.
  </div>
</div>
</template>
