import { createStore } from "vuex";
import axios from "axios";
import sweet from "sweetalert";
const URL = "https://capstone-tlul.onrender.com"; // Update to your actual API endpoint
import router from "../router";
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();

export default createStore({
  state: {
    products: [],   
    product: null,  
    cart: [],       
    user: null,    
  },
  getters: {
    cartTotal(state) {
      return state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
    },
    productCount(state) {
      return state.cart.reduce((count, item) => count + item.quantity, 0);
    },
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setProduct(state, product) {
      state.product = product;
    },
    addToCart(state, product) {
      const existingProduct = state.cart.find(item => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += product.quantity;
      } else {
        state.cart.push(product);
      }
    },
    removeFromCart(state, productId) {
      state.cart = state.cart.filter(item => item.id !== productId);
    },
    clearCart(state) {
      state.cart = [];
    },
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        let { results } = (await axios.get(`${URL}products`)).data;
        if (results) {
          commit("setProducts", results);
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: e.message,
          icon: "error",
          timer: 2000,
        });
      }
    },
    async fetchProduct({ commit }, productId) {
      try {
        let { result } = (await axios.get(`${URL}products/${productId}`)).data;
        if (result) {
          commit("setProduct", result);
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: e.message,
          icon: "error",
          timer: 2000,
        });
      }
    },
    async addProductToCart({ commit }, product) {
      try {
        commit("addToCart", product);
        sweet({
          title: "Added to Cart",
          text: `${product.name} has been added to your cart.`,
          icon: "success",
          timer: 2000,
        });
      } catch (e) {
        sweet({
          title: "Error",
          text: e.message,
          icon: "error",
          timer: 2000,
        });
      }
    },
    async removeProductFromCart({ commit }, productId) {
      try {
        commit("removeFromCart", productId);
        sweet({
          title: "Removed from Cart",
          text: "Product has been removed from your cart.",
          icon: "success",
          timer: 2000,
        });
      } catch (e) {
        sweet({
          title: "Error",
          text: e.message,
          icon: "error",
          timer: 2000,
        });
      }
    },
    async placeOrder({ commit, state }) {
      try {
        let { msg } = (await axios.post(`${URL}orders`, { items: state.cart, userId: state.user.id })).data;
        if (msg) {
          commit("clearCart");
          sweet({
            title: "Order Placed",
            text: "Your order has been placed successfully.",
            icon: "success",
            timer: 2000,
          });
          router.push({ name: "home" }); 
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: e.message,
          icon: "error",
          timer: 2000,
        });
      }
    },
    async login({ commit }, payload) {
      try {
        let { msg, user, token } = (await axios.post(`${URL}users/login`, payload)).data;
        if (user) {
          commit("setUser", user);
          cookies.set("authToken", token);
          sweet({
            title: "Login Successful",
            text: `Welcome back, ${user.firstName} ${user.lastName}`,
            icon: "success",
            timer: 2000,
          });
          router.push({ name: "home" });
        } else {
          sweet({
            title: "Login Failed",
            text: msg,
            icon: "error",
            timer: 2000,
          });
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: e.message,
          icon: "error",
          timer: 2000,
        });
      }
    },
    async register({ commit }, payload) {
      try {
        let { msg, user, token } = (await axios.post(`${URL}users/register`, payload)).data;
        if (user) {
          commit("setUser", user);
          cookies.set("authToken", token);
          sweet({
            title: "Registration Successful",
            text: `Welcome, ${user.firstName} ${user.lastName}`,
            icon: "success",
            timer: 2000,
          });
          router.push({ name: "home" });
        } else {
          sweet({
            title: "Registration Failed",
            text: msg,
            icon: "error",
            timer: 2000,
          });
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: e.message,
          icon: "error",
          timer: 2000,
        });
      }
    },
    async logout({ commit }) {
      try {
        cookies.remove("authToken");
        commit("setUser", null);
        sweet({
          title: "Logout Successful",
          text: "You have been logged out.",
          icon: "success",
          timer: 2000,
        });
        router.push({ name: "login" });
      } catch (e) {
        sweet({
          title: "Error",
          text: e.message,
          icon: "error",
          timer: 2000,
        });
      }
    }
  },
  modules: {}
});


