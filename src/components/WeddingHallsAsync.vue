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
          <div>
            <div class="text-slate-400 text-sm">Yemekli Kapasite</div>
            <div class="font-medium mt-1">400 Kişi</div>
          </div>
          <div>
            <div class="text-slate-400 text-sm">Üyelere Özel Fiyat</div>
            <div class="mt-1">
              <div class="font-medium inline line-through">
                180 TL
              </div>
              <button class="inline ml-2 font-medium text-rose-600">
                Fiyat Al
              </button>
            </div>
          </div>
        </div>
        <!-- Buttons -->
        <div class="container columns-2 mt-3">
          <div>
            <button class="text-rose-600 border-rose-600 border rounded-full py-2 px-5 w-full font-medium">
              Mekanı İncele
            </button>
          </div>
          <div>
            <button class="bg-rose-600 text-white rounded-full py-2 px-5 w-full font-medium">
              Ücretsiz Teklif Al
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
