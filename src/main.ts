import { createApp } from 'vue';
import App from './App.vue';
import Router from './router';
import './assets/styles/main.scss';

createApp(App).use(Router).mount('#app');
