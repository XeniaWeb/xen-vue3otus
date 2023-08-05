import { ref } from 'vue'
import axios from 'axios'
import router from '@/router'

export default function useCustomers() {
  const customers = ref([])

  const storeCustomers = async () => {
    await axios
      .get(
        'https://larapi.xeniaweb.site/api/v1/customers'
        // 'https://lapivue.blog/api/v1/customers'
      )
      .then((response) => {
        customers.value = response.data.data
      })
  }

  const storeCustomer = async (customer) => {
    await axios
      .post(
        // 'https://lapivue.blog/api/v1/customers',
        'https://larapi.xeniaweb.site/api/v1/customers',
        customer,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      .then((response) => {
        router.push({ name: 'customers' })
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return { customers, storeCustomers, storeCustomer }
}
