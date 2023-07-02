import {ref} from 'vue'
import axios from 'axios'

export default function useProducts() {
  const products = ref([])

  const getProducts = async () => {
    await axios.get(
      'https://shop-api.xeniaweb.site/api/v1/products'
      // 'http://localhost/api/v1/products'
    ).then((response) => {
      products.value = response.data.cards
    })
  }
  return { products, getProducts }
}
