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
</template>

<script>
import { ref } from 'vue';
import SubjectService from '../../service/subject.service';

export default {
  setup() {
    const subject = ref('');

    const load = function () {
      SubjectService.getOne()
        .then((data) => {
          subject.value = data.name;
        })
        .catch(() => {
          subject.value = '都看完了';
        });
    };

    load()

    return {
      subject,
      load,
    };
  },
};
</script>

<style scoped></style>
