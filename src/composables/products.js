import { ref } from 'vue'
import axios from 'axios'

export default function useProducts() {
  const products = ref([])

  const getProducts = async () => {
    await axios
      .get(
        'https://larapi.xeniaweb.site/api/v1/products'
        // 'https://lapivue/api/v1/products'
      )
      .then((response) => {
        products.value = response.data.data
      })
  }
  return { products, getProducts }
}
