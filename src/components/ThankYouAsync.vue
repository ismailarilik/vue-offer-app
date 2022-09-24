<script setup>
  import { useFormInputModelsStore } from '@/stores/form-input-models'
  import { useRoute } from 'vue-router'

  const inputModelsState = useFormInputModelsStore()
  const inputModels = inputModelsState.models

  const route = useRoute()
  const weddingHallId = route.params.id

  const weddingHallsUrl = 'https://private-1be47-duguncomapis.apiary-mock.com/companies';
  const weddingHalls = await fetch(weddingHallsUrl).then(r => r.json())
  const weddingHall = weddingHalls.find(weddingHall => weddingHall.id == weddingHallId)
</script>

<template>
<div class="flex flex-col gap-2 h-screen justify-center items-center">
  <div class="text-5xl text-white bg-secondary text-center w-12 h-12 rounded-full">
    &#10003;
  </div>
  <div class="font-semibold text-secondary">
    Fiyat teklifi isteğin başarıyla iletildi.
  </div>
  <div>
    {{ weddingHall.name }} sana en kısa sürede geri dönüş sağlayacak.
  </div>
  <!-- Form input values -->
  <div v-for="input in inputModels" :key="input.id">
    <span class="font-semibold">{{ input.fieldLabel }}:</span> {{ input.fieldValue }}
  </div>
</div>
</template>
