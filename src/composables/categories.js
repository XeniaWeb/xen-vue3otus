import { ref } from 'vue'
import axios from 'axios'

export default function useCategories() {
  const categories = ref([])

  const getCategories = async () => {
    await axios.get(
      'https://larapi.xeniaweb.site/api/v1/categories'
      // 'https://larapi.xeniaweb.site/api/v1/categories'
    ).then((response) => {
      categories.value = response.data.data
    })
  }
  return { categories, getCategories }
}
