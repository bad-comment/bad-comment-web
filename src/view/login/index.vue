<template>
    <van-cell-group inset>
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
    </van-cell-group>
  <div style="margin: 16px">
      <van-button round block type="primary" @click="onSubmit()">
        登录
      </van-button>
    </div>
    <div style="margin: 16px">
      <van-button round block type="primary" @click="onSubmit2()">
        注册
      </van-button>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import AuthService from '../../service/auth.service';
import Store from '../../store.js';

export default {
  setup() {
    const router = useRouter();

    const username = ref('');
    const password = ref('');
    const onSubmit = async () => {
      const data = await AuthService.signIn(username.value, password.value);
      Store.setToken(data.token);
      Store.setAuthUser({ userId: data.userId, role: data.role });
      router.push('/');
    };
    const onSubmit2 = async () => {
      const data = await AuthService.signUp(username.value, password.value);
      Store.setToken(data.token);
      Store.setAuthUser({ userId: data.userId, role: data.role });
      router.push('/');
    };

    return {
      username,
      password,
      onSubmit,
      onSubmit2,
    };
  },
};
</script>

<style scoped></style>
