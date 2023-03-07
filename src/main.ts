import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import Router from './router';
import './assets/styles/main.scss';
import { useWorksStore } from '@/store';
import axios from 'axios';

const pinia = createPinia();

createApp(App).use(Router).use(pinia).mount('#app');

// 获取 workList，供全局使用
axios.get('/workList.json').then((res) => {
  useWorksStore().workList = res.data;
});
