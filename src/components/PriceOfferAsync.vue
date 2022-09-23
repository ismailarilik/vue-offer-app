<script setup>
  import { useRoute } from 'vue-router'
  const route = useRoute()
  const weddingHallId = route.params.id

  const weddingHallsUrl = 'https://private-1be47-duguncomapis.apiary-mock.com/companies';
  const inputsUrl = `https://private-1be47-duguncomapis.apiary-mock.com/companies/${ weddingHallId }/forms`
  const weddingHalls = await fetch(weddingHallsUrl).then(r => r.json())
  const weddingHall = weddingHalls.find(weddingHall => weddingHall.id == weddingHallId)
  const inputs = await fetch(inputsUrl).then(r => r.json())
  inputs.sort((a, b) => a.orderNum - b.orderNum)
  inputs.forEach(input => {
    input.infoRequestFormOptions.sort((a, b) => a.orderNum - b.orderNum)
  })

  const getInputFieldType = fieldType => {
    if (fieldType === 'phone') {
      return 'tel'
    }
    return fieldType
  }
</script>

<template>
  <div class="flex flex-col items-center mt-4">
    <!-- Wedding hall name -->
    <div class="font-medium text-xl mb-6">{{ weddingHall.name }} İletişim Formu</div>
    <!-- Inputs -->
    <div v-for="input in inputs" :key="input.id">
      <select
        v-if="input.fieldType === 'select'"
        v-model="input.fieldValue"
        class="rounded-full w-96 my-2 focus:ring-teal-500 focus:border-teal-500"
        :required="input.isRequired"
        :disabled="!input.isActive"
      >
        <option v-for="option in input.infoRequestFormOptions" :key="option.id" :value="option.optionValue">
          {{ option.optionText }}
        </option>
      </select>
      <textarea
        v-else-if="input.fieldType === 'textarea'"
        v-model="input.fieldValue"
        class="rounded w-96 my-2 resize-none focus:ring-teal-500 focus:border-teal-500"
        :placeholder="input.fieldLabel"
        :required="input.isRequired"
        :disabled="!input.isActive"
      >
      </textarea>
      <input
        v-else
        :type="getInputFieldType(input.fieldType)"
        v-model="input.fieldValue"
        class="rounded-full w-96 my-2 focus:ring-teal-500 focus:border-teal-500"
        :placeholder="input.fieldLabel"
        :required="input.isRequired"
        :disabled="!input.isActive"
      >
    </div>
    <!-- Agreement -->
    <div class="flex items-center mt-2 mb-8">
      <input type="checkbox" class="rounded align-middle text-teal-500 focus:ring-0 focus:ring-offset-0" id="agreement">
      <label for="agreement" class="align-middle ml-2">
        <span class="underline">Kullanıcı sözleşmesi</span> ve <span class="underline">pazarlama izni</span> <br> metinlerini okudum ve kabul ediyorum.
      </label>
    </div>
    <!-- Offer button -->
    <RouterLink
      :to="`/wedding-halls/${ weddingHall.id }/thank-you`"
      class="bg-rose-600 text-white rounded-full py-2 mb-6 w-96 text-center font-medium"
    >
      Ücretsiz Teklif Al
    </RouterLink>
  </div>
</template>
