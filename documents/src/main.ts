import './assets/base.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import UNothing from '@u-nothing/index'; // dev
import '@theme/index.scss';

createApp(App).use(createPinia()).use(router).use(UNothing).mount('#app');
