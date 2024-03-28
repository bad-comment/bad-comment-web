<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
        v-model="name"
        name="name"
        label="内容"
        placeholder="内容"
        :rules="[{ required: true, message: '请填写吐槽目标' }]"
      />
    </van-cell-group>
    <div style="margin: 16px">
      <van-button round block type="primary" native-type="submit">
        创建
      </van-button>
    </div>
  </van-form>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import SubjectService from '../../service/subject.service';

export default {
  setup() {
    const router = useRouter();

    const name = ref('');
    const onSubmit = async (values) => {
      await SubjectService.create(values.name);
      router.back();
    };

    return {
      onSubmit,
      name,
    };
  },
};
</script>

<style scoped></style>
