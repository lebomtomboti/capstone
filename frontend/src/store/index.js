import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state: {
    products: [],
    cart: []
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    addToCart(state, product) {
      const existingProduct = state.cart.find(item => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += 1; // Increase quantity if already in cart
      } else {
        state.cart.push({ ...product, quantity: 1 }); // Add new product to cart with quantity 1
      }
    }
  },
  actions: {
    fetchProducts({ commit }) {
      // Fetch products from API and commit the result to the state
      axios.get('/api/products')
        .then(response => {
          commit('setProducts', response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
});

export default store;


