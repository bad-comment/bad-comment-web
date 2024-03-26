import { createRouter, createWebHashHistory } from 'vue-router';
import Store from './store';

const routes = [
  {
    name: 'notFound',
    path: '/:path(.*)+',
    redirect: {
      name: '404',
    },
  },
  {
    name: '404',
    path: '/404',
    component: () => import('./view/404'),
    meta: {
      title: '404',
    },
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('./view/login'),
    meta: {
      title: 'login',
    },
  },
  {
    name: 'home',
    path: '/',
    component: () => import('./view/home'),
    meta: {
      title: 'Home',
    },
  },
  {
    name: 'createSubject',
    path: '/subjects/create',
    component: () => import('./view/subject/create'),
    meta: {
      title: 'createSubject',
    },
  },
  {
    name: 'user',
    path: '/user',
    component: () => import('./view/user'),
    meta: {
      title: '会员中心',
    },
  },
  {
    name: 'cart',
    path: '/cart',
    component: () => import('./view/cart'),
    meta: {
      title: '购物车',
    },
  },
  {
    name: 'goods',
    path: '/goods',
    component: () => import('./view/goods'),
    meta: {
      title: '商品详情',
    },
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

router.beforeEach((to, from, next) => {
  if (
    // 检查用户是否已登录
    Store.getToken() === '' &&
    // 避免无限重定向
    to.name !== 'login'
  ) {
    // 将用户重定向到登录页面
    return next({ name: 'login' });
  }

  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
  return next();
});

export { router };
