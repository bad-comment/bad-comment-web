<template>
  <van-button
    round
    block
    type="primary"
    @click="$router.push('/subjects/create')"
  >
    创建槽点
  </van-button>
  <van-button round block type="primary" @click="load()"> 刷新 </van-button>

  <van-grid>
    <van-grid-item :text="subject" />
  </van-grid>

  <van-button plain type="danger" @click="bad()">反对</van-button>
  <van-button plain type="success" @click="good()">赞成</van-button>

  <van-cell-group title="Kings 意见领袖">
    <van-cell
      v-for="king in kings"
      :key="king.user_id"
      :title="king.user_id"
      :value="king.score"
    />
  </van-cell-group>
</template>

<script>
import { ref } from 'vue';
import SubjectService from '../../service/subject.service';
import TrendingService from '../../service/trending.service';

export default {
  setup() {
    const subject = ref('');
    const subjectId = ref(0);
    const kings = ref([]);

    async function bad() {
      await SubjectService.createSubjectComment(subjectId.value, 1);
      load();
    }

    async function good() {
      await SubjectService.createSubjectComment(subjectId.value, 10);
      load();
    }

    const load = function () {
      TrendingService.kings().then((data) => {
        kings.value = data;
      });

      SubjectService.getOne()
        .then((data) => {
          if (data == '') {
            subject.value = '都看完了';
            subjectId.value = 0;
          } else {
            subject.value = data.name;
            subjectId.value = data.id;
          }
        })
        .catch(() => {
          subject.value = '都看完了';
          subjectId.value = 0;
        });
    };

    load();

    return {
      subject,
      subjectId,
      load,
      bad,
      good,
      kings,
    };
  },
};
</script>

<style scoped></style>
