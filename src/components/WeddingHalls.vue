<script setup>
import WeddingHallsAsync from './WeddingHallsAsync.vue'
</script>

<template>
  <Suspense>
    <WeddingHallsAsync />

    <template #fallback>
      <div class="flex h-screen justify-center items-center">
        Loading...
      </div>
    </template>
  </Suspense>
</template>
