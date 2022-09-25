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
      <!-- The image -->
      <div class="relative">
        <img :src="weddingHall.imageUrl" alt="Wedding hall image">
        <!-- Discount image and text -->
        <div v-if="weddingHall.hasDiscount" class="absolute top-0 left-4">
          <img src="/union.svg" alt="Discount Union">
          <div class="absolute h-min top-0 bottom-0 left-0 right-0 m-auto text-xs text-white text-center font-bold">
            Üyelere Özel Fiyat
          </div>
        </div>
        <!-- Image and video counts -->
        <div class="absolute top-4 right-4">
          <div class="bg-white inline p-1 rounded">
            <img src="/camera.svg" alt="Camera" class="inline">
            <div class="inline text-slate-500 ml-1 text-xs font-medium">
              {{ weddingHall.imageCount }}
            </div>
          </div>
          <div class="bg-white inline p-1 rounded ml-4">
            <img src="/video.svg" alt="Video" class="inline">
            <div class="inline text-slate-500 ml-1 text-xs font-medium">
              {{ weddingHall.videoCount }}
            </div>
          </div>
        </div>
        <!-- Quick response, review and year badges -->
        <div class="absolute bottom-2 left-4">
          <div v-if="weddingHall.badges.find(badge => badge.type === 'quick')" class="inline">
            <img src="/quick-response-badge.svg" alt="Quick Response Badge" class="inline">
            <div class="inline text-white ml-1 text-xs font-bold">
              Hızlı Dönüş
            </div>
          </div>
          <div v-if="weddingHall.badges.find(badge => badge.type === 'review')" class="inline ml-3">
            <img src="/review-badge.svg" alt="Review Badge" class="inline">
            <div class="inline text-white ml-1 text-xs font-bold">
              İnceleme
            </div>
          </div>
          <div v-if="weddingHall.badges.find(badge => badge.type === 'year')" class="inline ml-3">
            <img src="/year-badge.svg" alt="Year Badge" class="inline">
            <div class="inline text-white ml-1 text-xs font-bold">
              {{ weddingHall.badges.find(badge => badge.type === 'year').value }}. Yıl
            </div>
          </div>
        </div>
      </div>
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
        <div class="container columns-2 mt-3 font-medium">
          <div>
            <RouterLink
              to="#"
              class="text-primary border-primary border rounded-full py-2 w-full block text-center"
            >
              Mekanı İncele
            </RouterLink>
          </div>
          <div>
            <RouterLink
              :to="`/wedding-halls/${ weddingHall.id }/offer`"
              class="bg-primary text-white rounded-full py-2 w-full block text-center"
            >
              Ücretsiz Teklif Al
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
