import axios from 'axios';
export const production = false
axios.defaults.baseURL = production ? 'https://api.elementa-otp-hr-tkn.online/' : "http://localhost:3030/"



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