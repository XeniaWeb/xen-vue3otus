import { ref } from 'vue'
import axios from 'axios'
import router from '@/router'
import {useRouter} from "vue-router";

export default function useProducts() {
  const products = ref([])
  const product = ref([])
  const errors = ref('')
  const { router } = useRouter()

  const getProducts = async () => {
    await axios
      .get(
        'https://larapi.xeniaweb.site/api/v1/products'
        // 'https://lapivue.blog/api/v1/products'
      )
      .then((response) => {
        products.value = response.data.data
      })
  }

  const getProduct = async (product) => {
    await axios
      .get(
        'https://larapi.xeniaweb.site/api/v1/products',
        // 'https://lapivue.blog/api/v1/products/',
        product
      )
      .then((response) => {
        product.value = response.data.data
      })
  }

  const storeProduct = async (product) => {
    await axios
      .post(
        // 'https://lapivue.blog/api/v1/products',
        'https://larapi.xeniaweb.site/api/v1/products',
        product,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Accept': 'application/json'
          }
        }
      )
      .then((response) => {
        router.push({ name: 'products' })
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return { products, getProducts, storeProduct }
}
