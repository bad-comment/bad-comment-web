import axios from 'axios';
import { showFailToast } from 'vant';

const TrendingService = {
  kings: async function () {
    try {
      const res = await axios.get('/api/trending/kings');
      return res.data;
    } catch (e) {
      showFailToast('登录失败');
    }
  },
};
export default TrendingService;
