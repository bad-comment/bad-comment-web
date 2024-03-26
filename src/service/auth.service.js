import axios from 'axios'
import { showFailToast } from 'vant'

const AuthService = {
  signIn: async function (account, password) {
    try {
      const res = await axios.post('/api/auth/sign_in', { account, password })
      return res.data
    } catch (e) {
      showFailToast('登录失败')
    }
  },
  signUp: async function (account, password) {
    try {
      const res = await axios.post('/api/auth/sign_up', { account, password })
      return res.data
    } catch (e) {
      showFailToast('登录失败')
    }
  }
}
export default AuthService
