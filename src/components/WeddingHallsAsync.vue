<script setup>
  const weddingHallsUrl = 'https://private-1be47-duguncomapis.apiary-mock.com/companies';
  const weddingHalls = await fetch(weddingHallsUrl).then(r => r.json())
</script>

<template>
  <div class="columns-auto">
    <div
      v-for="weddingHall in weddingHalls"
      :key="weddingHall.id"
      class="inline-block border-2 rounded pb-2"
      style="width: 400px;"
    >
      <img :src="weddingHall.imageUrl" alt="Wedding hall image">
      <div class="p-3">
        <!-- Name line -->
        <div class="text-2xl font-medium">{{ weddingHall.name }}</div>
        <!-- Score, comments and place -->
        <div class="text-slate-500">
          <div class="inline mr-1">{{ weddingHall.score }} Puan</div>
          <div class="inline">{{ weddingHall.commentCount }} Yorum</div>
          <div class="inline mx-3">&middot;</div>
          <div class="inline">{{ weddingHall.district.name }}</div>
        </div>
        <!-- First Horizontal rule -->
        <hr class="my-3">
        <!-- Description -->
        <div class="line-clamp-2">
          {{ weddingHall.description }}
        </div>
        <!-- Second Horizontal rule -->
        <hr class="my-3">
        <!-- Brief -->
        <div class="container columns-2">
          <div v-for="briefItem in weddingHall.listingDataBrief" :key="briefItem.label">
            <div class="text-slate-400 text-sm">{{ briefItem.label }}</div>
            <div class="font-medium mt-1">{{ briefItem.value }}</div>
          </div>
        </div>
        <!-- Buttons -->
        <div class="container columns-2 mt-3">
          <div>
            <RouterLink
              to="#"
              class="text-rose-600 border-rose-600 border rounded-full py-2 w-full block text-center"
            >
              Mekanı İncele
            </RouterLink>
          </div>
          <div>
            <RouterLink
              :to="`/wedding-halls/${ weddingHall.id }/offer`"
              class="bg-rose-600 text-white rounded-full py-2 w-full block text-center"
            >
              Ücretsiz Teklif Al
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
