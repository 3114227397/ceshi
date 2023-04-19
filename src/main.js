import { createApp } from 'vue'
import App from './App.vue'

// import Vue from 'vue';
import Vant from 'vant';
import 'vant/lib/index.css';
import router from '@/router'

const app=createApp(App).use(Vant).use(router).mount('#app')