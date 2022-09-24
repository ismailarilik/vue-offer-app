import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useFormInputModelsStore = defineStore('formInputModels', () => {
  const models = ref([])

  const setModels = newModels => {
    // Reset the models array and then refill it with items in newModels
    models.value.splice(0, models.value.length)
    newModels.forEach(newModel => {
      models.value.push(newModel)
    })
  }

  return { models, setModels }
})
