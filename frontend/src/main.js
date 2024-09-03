import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
// src/axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://your-backend-api-url.com/api', // Replace with your backend URL
  timeout: 1000,
});

export default instance;






createApp(App).use(store).use(router).mount('#app')
