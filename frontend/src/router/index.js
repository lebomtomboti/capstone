import { createRouter, createWebHistory } from 'vue-router';
import AboutView from '@/views/AboutView.vue';
import ContactView from '@/views/ContactView.vue';
import AdminView from '@/views/AdminView.vue';
import LoginView from '@/views/LoginView.vue';
import CartView from '@/views/CartView.vue';

const routes = [ 
  { path: '/about', name: 'about', component: AboutView },
  { path: '/contact', name: 'contact', component: ContactView },
  { path: '/admin', name: 'admin', component: AdminView },
  { path: '/login', name: 'login', component: LoginView },
  { path: '/cart', name: 'cart', component: CartView },
 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;







