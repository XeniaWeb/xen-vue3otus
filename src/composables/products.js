import { ref } from 'vue'
import axios from 'axios'

export default function useProducts() {
  const products = ref([])

  const getProducts = async () => {
    await axios.get('')
  }
  return { products, getProducts }
}
