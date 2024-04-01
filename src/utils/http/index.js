import axios from 'axios'
// import { resResolve, resReject, reqResolve, reqReject } from './interceptors'
import { setupInterceptors } from './interceptors'
export function createAxios(option = {}) {
  const defaultOptions = {
    baseURL: import.meta.env.VITE_APP_BASE_API,
    timeout: 12000
  }
  const service = axios.create({
    ...defaultOptions,
    ...options
  })
  
  // service.interceptors.request.use(reqResolve,reqReject)
  // service.interceptors.response.use(reqResolve,reqReject)

  setupInterceptors(service)
  return service
}

export const defAxios = createAxios()

export const testAxios = createAxios({
  baseURL:import.meta.env.VITE_APP_BASE_API
})