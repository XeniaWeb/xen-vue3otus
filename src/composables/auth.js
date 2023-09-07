import { reactive, ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const user = reactive({
  name: '',
  email: ''
})

export default function useAuth() {
  const processing = ref(false)
  const validationErrors = ref({})
  const router = useRouter()
  const loginForm = reactive({
    email: '',
    password: '',
    remember: false
  })

  const submitLogin = async () => {
    if (processing.value) return

    processing.value = true
    validationErrors.value = {}

    await axios
      .post('/login', loginForm)
      .then(async (response) => {
        await loginUser(response)
      })
      .catch((error) => {
        if (error.response?.data) {
          validationErrors.value = error.response.data.errors
        }
      })
      .finally(() => (processing.value = false))
  }

  const loginUser = async (response) => {
    user.name = response.data.name
    user.email = response.data.email
    await localStorage.setItem('loggedIn', JSON.stringify(true))
    await router.push({ name: 'product.index' })
  }

  const getUser = async () => {
    await axios.get('v1/user').then((response) => {
      loginUser(response)
    })
  }

  return { user, loginForm, validationErrors, processing, submitLogin, getUser, loginUser }
}
