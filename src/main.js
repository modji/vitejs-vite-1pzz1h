import { createApp } from 'vue';
import App from './App.vue';
import Oruga from '@oruga-ui/oruga-next';
import '@oruga-ui/oruga-next/dist/oruga-full.css';
import Vue3Sanitize from 'vue-3-sanitize';

createApp(App).use(Oruga).use(Vue3Sanitize).mount('#app');
