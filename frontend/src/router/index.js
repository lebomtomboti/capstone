import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ProductsView from '../views/ProductsView.vue';
import CartView from '../views/CartView.vue';
import AdminView from '../views/AdminView.vue';
import ContactView from '../views/ContactView.vue';
import LoginView from '../views/LoginView.vue';
import RegisterView from '@/views/RegisterView.vue';

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/about', name: 'about', component: AboutView },
  { path: '/products', name: 'products', component: ProductsView },
  { path: '/cart', name: 'cart', component: CartView },
  { path: '/admin', name: 'admin', component: AdminView },
  { path: '/contact', name: 'contact', component: ContactView },
  { path: '/login', name: 'login', component: LoginView },
  { path: '/register', name: 'register', component: RegisterView }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

