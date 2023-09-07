import './assets/scss/main.scss'
import axios from 'axios'

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL
// axios.defaults.baseURL = 'https://larapi.xeniaweb.site/api/'
// axios.defaults.baseURL = 'https://lapivue.blog/api/'

// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
