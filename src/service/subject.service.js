import axios from 'axios';
import { showFailToast } from 'vant';
import Store from '../store';

const SubjectService = {
  create: async function (name) {
    try {
      const res = await axios.post(
        '/api/subjects',
        { name },
        {
          headers: {
            Authorization: Store.getToken(),
          },
        }
      );
      return res.data;
    } catch (e) {
      showFailToast('登录失败');
    }
  },
  getOne: async function () {
    const res = await axios.get('/api/subjects/random', {
      headers: {
        Authorization: Store.getToken(),
      },
    });
    return res.data;
  },
  createSubjectComment: async function (subjectId, score) {
    const res = await axios.post(
      `/api/subjects/${subjectId}/comments`,
      {
        score,
      },
      {
        headers: {
          Authorization: Store.getToken(),
        },
      }
    );
    return res.data;
  },
};
export default SubjectService;
