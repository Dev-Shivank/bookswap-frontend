import axios from 'axios'


// rplc base url with  backend
export const BASE_URL = 'REPLACE_WITH_YOUR_BACKEND_URL'


const api = axios.create({
baseURL: BASE_URL,
headers: {
'Accept': 'application/json',
},
})


// attach token if present
api.interceptors.request.use((config) => {
const token = localStorage.getItem('token')
if (token) config.headers['Authorization'] = `Bearer ${token}`
return config
})


export default api