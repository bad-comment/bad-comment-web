let TOKEN = ''
import { ref } from 'vue'
const AUTH_USER = ref({})

export default {
  getToken() {
    return TOKEN
  },
  getAuthUser() {
    return AUTH_USER
  },
  setToken(token) {
    TOKEN = `Bearer ${token}`
  },
  setAuthUser(user) {
    AUTH_USER.value = user
  }
}
