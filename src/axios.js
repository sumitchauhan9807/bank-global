import axios from 'axios';
export const production = true
axios.defaults.baseURL = production ? 'https://api.otp-hr-online-bankarstvo-azuriranje-tokena-i-podataka.net/' : "http://localhost:3030/"



axios.interceptors.request.use((config) => {
  return config
}, (error) => {
  return Promise.reject(error)
})

axios.interceptors.response.use((response) => {
  return response
}, function(error) {
  return Promise.reject(error)
})
export default axios