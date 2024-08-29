import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import VeeValidate from 'vee-validate';
import router from './router';
// import "./assets/main.css";
import './index.css';
// import VueGoodTablePlugin from 'vue-good-table';

import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';

// import the styles 
// import 'vue-good-table/dist/vue-good-table.css'


const app = createApp(App);
app.component('EasyDataTable', Vue3EasyDataTable);

app.use(router);
app.use(store);
// app.use(VueGoodTablePlugin);

app.mount('#app');
