import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ProductsView from '../views/ProductsView.vue';
import CartView from '../views/CartView.vue';
import AdminView from '../views/AdminView.vue';
import ContactView from '../views/ContactView.vue';

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/about', name: 'about', component: AboutView },
  { path: '/products', name: 'products', component: ProductsView },
  { path: '/cart', name: 'cart', component: CartView },
  { path: '/admin', name: 'admin', component: AdminView },
  { path: '/contact', name: 'contact', component: ContactView }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

