import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state() {
    return {
      products: [],
      loading: false,
      error: null
    };
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setLoading(state, loading) {
      state.loading = loading;
    },
    setError(state, error) {
      state.error = error;
    }
  },
  actions: {
    async fetchProducts({ commit }) {
      commit('setLoading', true);
      try {
        const response = await axios.get('https://capstone-tlul.onrender.com/products');
        commit('setProducts', response.data);
      } catch (error) {
        commit('setError', 'Failed to fetch products');
        console.error(error);
      } finally {
        commit('setLoading', false);
      }
    }
  },
  getters: {
    products: (state) => state.products,
    loading: (state) => state.loading,
    error: (state) => state.error
  }
});

export default store;


