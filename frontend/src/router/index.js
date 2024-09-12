// src/router/index.js or src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import AboutView from '../views/AboutView.vue';
import ProductsView from '../views/ProductsView.vue';
import CartView from '../views/CartView.vue';
import AdminView from '../views/AdminView.vue';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';

const routes = [
  { path: '/about', component: AboutView },
  { path: '/products', component: ProductsView },
  { path: '/cart', component: CartView },
  { path: '/admin', component: AdminView },
  { path: '/login', component: LoginView },
  { path: '/register', name: 'Register', component: RegisterView }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;




