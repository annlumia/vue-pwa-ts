import axios from 'axios'
import { Message } from 'element-ui'

export const request = axios.create({ baseURL: '/api/v1' })

request.interceptors.request.use((config) => {
  config.withCredentials = true
  return config
})

request.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response.status === 404) {
      Message.error('Request failed with status code 404')
    }
    return error.response
  }
)
