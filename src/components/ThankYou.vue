<script setup>
  import ThankYouAsync from './ThankYouAsync.vue'
  </script>

  <template>
    <Suspense>
      <ThankYouAsync />

      <template #fallback>
        <div class="flex h-screen justify-center items-center">
          Loading...
        </div>
      </template>
    </Suspense>
  </template>
