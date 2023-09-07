import { ref } from 'vue'
import axios from 'axios'
import router from '@/router'
// import {useRouter} from "vue-router";

export default function useProducts() {
  const products = ref([])
  const product = ref([])
  const errors = ref('')
  // const router = useRouter()
  const validationErrors = ref({})

  const getProducts = async () => {
    await axios.get('v1/products').then((response) => {
      products.value = response.data.data
    })
  }

  const getProduct = async (product) => {
    await axios.get('v1/products/', product).then((response) => {
      product.value = response.data.data
    })
  }

  const storeProduct = async (product) => {
    await axios
      .post('v1/products', product, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Accept: 'application/json'
        }
      })
      .then((response) => {
        router.push({ name: 'products' })
      })
      .catch((error) => {
        if (error.response?.data) {
          validationErrors.value = error.response.data.errors
        }
      })
  }
  return { products, getProducts, storeProduct, validationErrors }
}
