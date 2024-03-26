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
import SubjectService from '../../service/subject.service';
import { ref } from 'vue';

export default {
  setup() {
    const name = ref('');
    const onSubmit = async (values) => {
      return SubjectService.create(values.name);
    };

    return {
      onSubmit,
      name,
    };
  },
};
</script>

<style scoped></style>
