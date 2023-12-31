import { instance } from "../api/axios.api"

export const AuthService = {
  async registration(userData) {
    const {data} = await instance.post('user', userData)
    return data
  },
  async login() {},
  async getMe() {}
}