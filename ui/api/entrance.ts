import { request } from '@/utils/request'

export function Login(username: string, password: string, rememberMe: boolean) {
  return request({
    url: '/login',
    method: 'POST',
    data: {
      username,
      password,
      rememberMe,
    },
  })
}
