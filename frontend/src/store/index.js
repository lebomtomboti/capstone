// store/index.js
import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      cart: [] // Example state
    };
  },
  mutations: {
    addToCart(state, product) {
      state.cart.push(product);
    }
  },
  actions: {
    addToCart({ commit }, product) {
      commit('addToCart', product);
    }
  },
  getters: {
    cartItems(state) {
      return state.cart;
    }
  }
});



