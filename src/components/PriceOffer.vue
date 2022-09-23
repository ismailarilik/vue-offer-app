<script setup>
  import PriceOfferAsync from './PriceOfferAsync.vue'
  </script>

  <template>
    <Suspense>
      <PriceOfferAsync />

      <template #fallback>
        <div class="flex h-screen justify-center items-center">
          Loading...
        </div>
      </template>
    </Suspense>
  </template>
