import './main.css';

import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import App from './App.vue';
import router from './router.ts';

const app = createApp(App);
app.use(createI18n({ legacy: false, messages: {} }));
app.use(router);
app.mount('#app');
