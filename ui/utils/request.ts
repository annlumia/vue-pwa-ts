import axios from 'axios'

export const request = axios.create({ baseURL: '/api/v1' })

request.interceptors.request.use((config) => config)

request.interceptors.response.use((response) => response.data)
