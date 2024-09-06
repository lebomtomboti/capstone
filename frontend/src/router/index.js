import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ProductsView from '../views/ProductsView.vue';
import AdminView from '../views/AdminView.vue';
import ContactView from '../views/ContactView.vue';
import RegisterView from '@/views/RegisterView.vue';
import CartView from '../views/CartView.vue';
import LoginView from '../views/LoginView.vue';
//import NotFoundView from '../views/NotFoundView.vue';

// Mock authentication function
//const isAuthenticated = () => {
  // Replace with real authentication check
 // return !!localStorage.getItem('user');
//}


const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/about', name: 'about', component: AboutView },
  { path: '/cart', name: 'cart', component: CartView },
  { path: '/admin', name: 'admin', component: AdminView },
  { path: '/contact', name: 'contact', component: ContactView },
  { path: '/login', name: 'login', component: LoginView },
  { path: '/register', name: 'register', component: RegisterView },
  { path: '/products', name: 'Products', component: ProductsView, meta: { requiresAuth: true } },
 // { path: '/login', name: 'Login', component: LoginView },
 // { path: '/:catchAll(.*)', name: 'NotFound', component: NotFoundView },
 
];

const router = createRouter({
  history: createWebHistory(),
  routes
});
//router.beforeEach((to, from, next) => {
  //if (to.meta.requiresAuth && !isAuthenticated()) {
    // Redirect to login if not authenticated
   // next({ name: 'Login' });
 // } else {
    //next();
 // }
//});

export default router;


